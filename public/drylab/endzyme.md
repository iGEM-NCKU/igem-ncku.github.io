
<style>
.two-column-layout {
  column-count: 2; /* Set column number */
  column-gap: 20px;
  max-width: 100%;
  overflow: hidden;
}

/* Media query for mobile devices */
@media (max-width: 768px) {
  .two-column-layout {
    column-count: 1; /* Switch to single column on small screens */
    column-gap: 0;   /* Optional: Set gap to 0 for single column */
  }
}

.markdown-body, .ui-infobar {
    max-width: unset !important;
}

.two-column-layout ul, 
.two-column-layout ol {
  margin: 0;
  padding-left: 20px;
}

.two-column-layout strong {
  font-weight: bold;
}

.two-column-layout em {
  font-style: italic;
}
    
.two-column-layout h1,
.two-column-layout h2,
.two-column-layout h3,
.two-column-layout h4,
.two-column-layout h5,
.two-column-layout h6 {
    margin-top: 0;    
}
</style>

# ENDzyme - a better way to create enzyme
![endzyme logo](https://hackmd.io/_uploads/HJis5jRFgl.png)

## Introduction

In our wet-lab experiments, we observed that the effect of enzyme treatment was not as pronounced as expected. This can be attributed to two main factors: (1) enzyme yield, and (2) enzyme activity and binding efficiency. To address the latter, we developed a computational pipeline aimed at optimizing enzyme activity and substrate binding efficiency.

The design and optimization of enzymes for specific functions have always been a critical aspect of biotechnology. Traditional methods for enzyme engineering are often labor-intensive, requiring iterative rounds of mutation, expression, and screening. In recent years, the integration of artificial intelligence (AI) and computational biology has revolutionized this process, allowing for the in silico prediction of enzyme structures, stability, and functionality. By combining cutting-edge AI models, molecular modeling tools, and computational docking, this software provides an automated platform for novel enzyme sequence generation and efficiency analysis.

The pipeline consists of two major components: (1) a machine learning model and (2) screening (3) docking score–based.
First, the machine learning model is employed to generate and optimize protein (enzyme) sequences. These sequences are then subjected to AlphaFold for structural prediction. Next, the predicted enzyme structures are docked with the ligand, followed by screening with a scoring function to evaluate binding performance.
Through this pipeline, we are able to identify and obtain a functionally improved sequence within 20 minutes.

### Machine learning Model

**Zymctrl** is a conditional language model for the generation of artificial functional enzymes. It was trained on the UniProt database of sequences containing (Enzyme Commission) EC annotations, comprising over 37 M sequences. Given a user-defined Enzymatic Commission (EC) number, the model generates protein sequences that fulfil that catalytic reaction. The generated sequences are ordered, globular, and distant to natural ones, while their intended catalytic properties match those defined by users.

:::spoiler How we use the Zymctrl
``` python
generator = pipeline('text-generation', model='AI4PD/ZymCTRL')
if maxLength == None:
    max_len = len(original_sequence)
else:
    max_len = maxLength
generated_outputs = generator("<|endoftext|>", max_length=max_len, num_return_sequences=num_to_generate)

for output in generated_outputs:
    raw_novel_sequence = output['generated_text']
    novel_sequence = raw_novel_sequence.replace("<|endoftext|>", "").replace(" ", "").strip()[:max_len]
    candidate_sequences.append(novel_sequence)
```
:::
**ColabFold** is an AlphaFold2-based module. Since AlphaFold3 currently lacks an API, we are using ColabFold to fulfill this part of the pipeline.

:::spoiler How we use the colabfold
``` python
cmd = [
        "colabfold_batch","--msa-mode", "single_sequence",       
        str(csv_path), str(job_dir)
    ]
    if use_templates == "pdb100":
        cmd.append("--templates")
    elif use_templates == "custom" and custom_tpl_dir:
        cmd += ["--templates", "--custom-template-path", str(Path(custom_tpl_dir).resolve())]

    if amber:
        cmd.append("--amber")

    if isinstance(models, int):
        cmd += ["--num-models", str(models)]   
    if isinstance(recycles, int):
        cmd += ["--num-recycle", str(recycles)]  

    return cmd
```
:::

#### Tools
- Zymctrl
- Colabfold
### Screening
We use **mmseqs2** as our selection mechanism, utilizing UniProt/SwissProt as our database. Considering that artificial proteins may not be stable or reliable enough, we employ mmseqs2 to ensure the functionality and accuracy of the protein. We also check the homology to ensure that the protein can successfully fold into its tertiary structure. In our project, we generate 110 novel sequences by using Dnase1 as the template. We use homology to predict the function of the protein, identify stable structures that are similar, and further confirm its function using AutoDock.
 :::spoiler How we use the mmseqs2
``` bash
mmseqs search input.fasta ./swissprot result tmp

mmseqs createtsv query.fasta ./swissprot result result.tsv
```
:::

#### Tools
- mmseqs2
### docking
In our project, we use AutoDock Vina to optimize the performance of proteins by evaluating their interactions with small molecules. Due to a limitation of AutoDock Vina, we are unable to use polymers as docking targets. As a result, we have chosen to utilize monomers as our docking targets.
Furthermore, our goal is to make this software accessible to the broader scientific community. To achieve this, we have developed a Python script that automatically calculates the grid box, streamlining the docking process and enhancing the usability of the software for users without requiring manual configuration.

:::spoiler How we automatically set our gridbox in the pipeline
```python=
from pymol import cmd
import sys

ligand_input_file = sys.argv[1]
receptor_input_file = sys.argv[2]

def get_gridbox(selection="binding_site", receptor=receptor_input_file, ligand_file=ligand_input_file, exhaustiveness=16, output_conf="conf.txt"):
    """
    Calculate grid box from selection and write Vina config file
    """
    min_coord, max_coord = cmd.get_extent(selection)
    center = [(min_coord[i] + max_coord[i]) / 2 for i in range(3)]
    size = [max_coord[i] - min_coord[i] for i in range(3)]

    print("Grid Box Center (center_x, center_y, center_z):")
    print(f"{center[0]:.3f} {center[1]:.3f} {center[2]:.3f}")
    print("Grid Box Size (size_x, size_y, size_z):")
    print(f"{size[0]:.3f} {size[1]:.3f} {size[2]:.3f}")

    with open(output_conf, "w") as f:
        f.write(f"receptor = {receptor}\n")
        f.write(f"ligand = {ligand_file}\n")
        f.write(f"center_x = {center[0]:.3f}\n")
        f.write(f"center_y = {center[1]:.3f}\n")
        f.write(f"center_z = {center[2]:.3f}\n")
        f.write(f"size_x = {size[0]:.3f}\n")
        f.write(f"size_y = {size[1]:.3f}\n")
        f.write(f"size_z = {size[2]:.3f}\n")
        f.write(f"out = vina_out.pdbqt\n")
        f.write(f"log = vina_log.txt\n")
        f.write(f"exhaustiveness = {exhaustiveness}\n")

# === PyMOL Command-line Execution ===
cmd.load(receptor_input_file, "receptor")
cmd.load(ligand_input_file, "ligand")


cmd.select("binding_site", "ligand around 10")


get_gridbox()

```
:::
＊＊＊＊＊ 補docking 的比較圖    

## Result (GIF files are to big to put in here)
<div class='two-column-layout'>  
    
 ![file350](https://hackmd.io/_uploads/H1bNLQkjgl.png)
> Dispersin B
    
![file350](https://hackmd.io/_uploads/SyxUBI8jxl.png)
> oringinal_Dsp B
    
</div>

### Docking result 

<div class='two-column-layout'>  

some data here
  
</div>
<div class='two-column-layout'>
    
  ![file350](https://hackmd.io/_uploads/S1UnHQ1olx.png)
> Prok  

![file350](https://hackmd.io/_uploads/HyVaHUIjel.png)
>oringinal_prok

</div>

<div class='two-column-layout'>

![file350](https://hackmd.io/_uploads/Hk400jkolg.png)
>Dnase1
    
![file350](https://hackmd.io/_uploads/S1SmL88jel.png)
>oringinal_Dnase1

</div>
## What we do next
Our ultimate goal is to make the software accessible to everyone. Therefore, we designed a web-based platform so that people around the world can use this pipeline. Since it involves a large amount of automation, many scripts are required for decision-making, which is an area we need to further improve.

## How to use this software
[github](https://github.com/iGEM-NCKU/endzyme)
We Strongly recommand you to use **Endzyme software** on our Wiki website.

## Usage

> ⚠️ **Important:** To ensure proper functionality, the server stack must be started in the following order: **Gunicorn → Nginx**.  

### 1. Environment Setup

1. Create a Python environment (recommended: `conda` or `venv`):

```bash
conda create -n endzyme python=3.10
conda activate endzyme
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```
3. Ensure `nginx` and `gunicorn`are installed and accessible:
```bash
sudo apt install nginx
pip install gunicorn
```
### 2. Run Flask via Gunicorn

git clone our repo
```bash
git clone https://github.com/iGEM-NCKU/endzyme.git
``` 
Navigate to the project root:
```bash
cd /home/path/to/root
```
Start Gunicorn (example: 4 workers, listening on port 8001):
```bash
gunicorn -w 4 -b 127.0.0.1:8001 main:app
```
### 3. Configure and Start Nginx
```nginx
upstream endzyme {
    server 127.0.0.1:8001;
}

server {
    listen 80;
    server_name _;
    root /home/path/to/root;

    location /static/ {
        alias /home/path/to/root/static/;
    }

    location /api/ {
        proxy_pass http://endzyme;
        proxy_connect_timeout 600s;
        proxy_send_timeout 600s;
        proxy_read_timeout 600s;
    }
}
```
Then restart Nginx:

```bash
sudo nginx -t        # test configuration
sudo systemctl restart nginx
```

Now the Endzyme frontend and API are available at `http://<server-ip>/`.


## Reference

- **Structural Analysis of Dispersin B, a Biofilm-releasing Glycoside Hydrolase from the Periodontopathogen Actinobacillus actinomycetemcomitans.** Ramasubbu, N., Thomas, L.M., Ragunath, C., Kaplan, J.B.(2005) J Mol Biology 349
- **What can be done with a good crystal and an accurate beamline?** Wang, J., Dauter, M., Dauter, Z.(2006) Acta Crystallogr D Biol Crystallogr 62
- **The Structure of Human DNase I Bound to Magnesium and Phosphate Ions Points to a Catalytic Mechanism Common to Members of the DNase I-Like Superfamily.** Parsiegla, G., Noguere, C., Santell, L., Lazarus, R.A., Bourne, Y.(2012) Biochemistry 51: 10250
- **Conditional language models enable the efficient design of proficient enzymes**
 Geraldene Munsamy, Ramiro Illanes-Vicioso, Silvia Funcillo, Ioanna T. Nakou, Sebastian Lindner, Gavin Ayres, Lesley S. Sheehan, Steven Moss, Ulrich Eckhard, Philipp Lorenz, Noelia Ferruz(2024), biorxiv
- **ColabFold: Making protein folding accessible to all.** Mirdita M, Schütze K, Moriwaki Y, Heo L, Ovchinnikov S and Steinegger M.(2022) Nature Methods  
- **Highly accurate protein structure prediction with AlphaFold.** Jumper et al.(2021) Nature 
- **MMseqs2 enables sensitive protein sequence searching for the analysis of massive data sets.** Steinegger M and Soeding J, (2017)Nature Biotechnology.
- **AutoDock Vina 1.2.0: New Docking Methods, Expanded Force Field, and Python Bindings.** J. Eberhardt, D. Santos-Martins, A. F. Tillack, and S. Forli. (2021). Journal of Chemical Information and Modeling.
- **AutoDock Vina: improving the speed and accuracy of docking with a new scoring function, efficient optimization and multithreading**, O. Trott, A. J. Olson, (2010) Journal of Computational Chemistry 31 