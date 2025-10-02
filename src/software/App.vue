<template>
    <v-app>
        <page_loader :loading = 'loading' />
        <title_nav />

        <v-main>
        <sidenav name = 'software' />
                <v-row justify = end>
                    <v-col cols = 12 md = 8 class = 'pa-5'>
                        <v-card class = ma-4 variant = tonal color = primary v-ripple>
                            <template #image>
                                <v-img src = 'https://static.igem.wiki/teams/6003/software/endzyme-logo.webp' />
                            </template>
                            <template v-slot:text>
                                <div class="wallpaper-text">
                                    A better way to create enzyme
                                </div>
                            </template>
                        </v-card>
                        <br>
                        <v-card :variant="alpha.card.theme" class="text-box pa-5 scroll-box scroller" id = Introduction>
                                <v-card-title style="font-size: 24px;">Introduction</v-card-title>
                                <div
                                id="Introduction"
                                title="Introduction"
                                class="text-content"
                                >
                                <p>
                                    In our wet-lab experiments, we observed that the effect of enzyme treatment was not as pronounced as expected. This can be attributed to two main factors: 
                                    (1) enzyme yield, and (2) enzyme activity and binding efficiency. To address the latter, we developed a computational pipeline aimed at optimizing enzyme activity and substrate binding efficiency.
                                </p>

                                <p>
                                    The design and optimization of enzymes for specific functions have always been a critical aspect of biotechnology. Traditional methods for enzyme engineering are often labor-intensive, requiring iterative rounds of mutation, expression, and screening. In recent years, the integration of artificial intelligence (AI) and computational biology has revolutionized this process, allowing for the in silico prediction of enzyme structures, stability, and functionality. By combining cutting-edge AI models, molecular modeling tools, and computational docking, this software provides an automated platform for novel enzyme sequence generation and efficiency analysis.
                                </p>

                                <p>
                                    The pipeline consists of two major components: 
                                    (1) a machine learning model, and 
                                    (2) screening and docking score-based evaluation. 
                                    First, the machine learning model is employed to generate and optimize protein (enzyme) sequences. These sequences are then subjected to AlphaFold for structural prediction. Next, the predicted enzyme structures are docked with the ligand, followed by screening with a scoring function to evaluate binding performance. Through this pipeline, we are able to identify and obtain a functionally improved sequence within 20 minutes.
                                </p>
                                </div>
                        </v-card>
                        <br>
                        <v-card :variant="alpha.card.theme">
                        <v-card-title style="font-size: 24px;">Machine learning Model</v-card-title>
                        <v-card :variant="alpha.card.theme" class="text-box pa-5 scroll-box scroller" id = 'Machine-Learning-Model'>
                                <div
                                id="Machine learning Model"
                                title="Machine learning Model"
                                class="text-content"
                                >
                               Zymctrl is a conditional language model for the generation of artificial functional enzymes. It was trained on the UniProt database of sequences containing (Enzyme Commission) EC annotations, comprising over 37 M sequences. Given a user-defined Enzymatic Commission (EC) number, the model generates protein sequences that fulfil that catalytic reaction. The generated sequences are ordered, globular, and distant to natural ones, while their intended catalytic properties match those defined by users.
                                </div>
                                <br>
                                <b>How we use Zymctrl</b>
                                <pre><code class = language-python>
generator = pipeline('text-generation', model='AI4PD/ZymCTRL')
if maxLength == None:
    max_len = len(original_sequence)
else:
    max_len = maxLength
generated_outputs = generator("＜|endoftext|＞", max_length=max_len, num_return_sequences=num_to_generate)
for output in generated_outputs:
    raw_novel_sequence = output['generated_text']
    novel_sequence = raw_novel_sequence.replace("＜|endoftext|＞", "").replace(" ", "").strip()[:max_len]
    candidate_sequences.append(novel_sequence)
                                </code></pre>    
                        </v-card>
                        <br>
                        <v-card :variant="alpha.card.theme" class="text-box pa-5 scroll-box scroller" id = 'ColabFold'>
                                <v-card-title style="font-size: 24px;">ColabFold</v-card-title>
                                <div
                                id="ColabFold"
                                title="ColabFold"
                                class="text-content"
                                >
                                <b>ColabFold</b> is an AlphaFold2-based module. Since AlphaFold3 currently lacks an API, we are using ColabFold to fulfill this part of the pipeline.
                                </div>
                                <br>
                                <b>How we use Colabfold</b>
                                <pre><code class = language-python>
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
                                </code></pre>    
                        </v-card>
                        <br>
                        <v-card :variant="alpha.card.theme" class="text-box pa-5 scroll-box scroller" id = Tools>
                                <v-card-title style="font-size: 24px;">Tools</v-card-title>
                                <div
                                id="Tools"
                                title="Tools"
                                class="text-content"
                                >
                                - Zymctrl<br>
                                - Colabfold
                                </div>
                        </v-card>
                        </v-card>
                        <br>
                        <v-card :variant="alpha.card.theme">
                        <v-card-title style="font-size: 24px;">Screening</v-card-title>
                        <v-card :variant="alpha.card.theme" class="text-box pa-5 scroll-box scroller" id = 'Screening'>
                                <div
                                id="Screening"
                                title="Screening"
                                class="text-content"
                                >
We use <b>mmseqs2</b> as our selection mechanism, utilizing UniProt/SwissProt as our database. Considering that artificial proteins may not be stable or reliable enough, we employ mmseqs2 to ensure the functionality and accuracy of the protein. We also check the homology to ensure that the protein can successfully fold into its tertiary structure. In our project, we generate 110 novel sequences by using Dnase1 as the template. We use homology to predict the function of the protein, identify stable structures that are similar, and further confirm its function using AutoDock.                                </div>
                                <br>
                                <b>How we use the mmseqs2</b>
                                <pre><code class = language-bash>
mmseqs search input.fasta ./swissprot result tmp

mmseqs createtsv query.fasta ./swissprot result result.tsv
                                </code></pre>    
                        </v-card>
                        <br>
                        <v-card :variant="alpha.card.theme" class="text-box pa-5 scroll-box scroller" id = Tools>
                                <v-card-title style="font-size: 24px;">Tools</v-card-title>
                                <div
                                id="Tools"
                                title="Tools"
                                class="text-content"
                                >
                                - mmseqs2
                                </div>
                        </v-card>
                        </v-card>
                        <br>
                        <v-card :variant="alpha.card.theme">
                        <v-card-title style="font-size: 24px;">Docking</v-card-title>
                        <v-card :variant="alpha.card.theme" class="text-box pa-5 scroll-box scroller" id = 'Docking'>
                                <div
                                id="Docking"
                                title="Docking"
                                class="text-content"
                                >
                                In our project, we use <b>AutoDock Vina</b> to optimize the performance of proteins by evaluating their interactions with small molecules. Due to a limitation of AutoDock Vina, we are unable to use polymers as docking targets. As a result, we have chosen to utilize monomers as our docking targets.
Furthermore, our goal is to make this software accessible to the broader scientific community. To achieve this, we have developed a Python script that automatically calculates the grid box, streamlining the docking process and enhancing the usability of the software for users without requiring manual configuration.
                                </div>
                                <br>
                                <b>How we automatically set our gridbox in the pipeline</b>
                                <pre><code class = language-python>
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
                                </code></pre>    
                        </v-card>
                        <br>
                        <v-card-title style="font-size: 24px;">DockingResult</v-card-title>
                        <v-card :variant="alpha.card.theme" class="text-box pa-5 scroll-box scroller" id = 'Auto-gridbox'>
                             <v-card-title style="font-size: 24px;">Result</v-card-title>
                 
                               
                                    <v-card class = ma-4>
                                        <v-card-title style="font-size: 24px;">Manual</v-card-title>
                                            <v-img src = 'https://static.igem.wiki/teams/6003/software/dsp-bs-artificial.webp' />
                                            <div
                                            id="artificial_dps"
                                            title="artificial_dsp"
                                            class="text-content"
                                            >
                                            <br>
                                            - <b>Fig 1</b>. According to Role of active-site residues of dispersin B, a biofilm-releasing β-hexosaminidase from a periodontal pathogen, in substrate hydrolysis, We select the docking site of DspersinB 
                                            </div>
                                            <br>
                                            <v-img src = 'https://static.igem.wiki/teams/6003/software/dspb-gridbox-artificial.webp' />
                                            <br>
                                            - <b>Fig 2</b>. manual adjust the gridbox
                                    </v-card> 
                                    <div class='two-column-layout'>
                                        <v-card-title style="font-size: 24px;">Manual</v-card-title>
                                        <pre><code class = language-bash>
mode |   affinity | dist from best mode
     | (kcal/mol) | rmsd l.b.| rmsd u.b.
-----+------------+----------+----------
   1         -5.7      0.000      0.000
   2         -5.5      1.433      2.844
   3         -5.4     11.919     13.642
   4         -5.4      1.941      4.863
   5         -5.4      2.771      5.359
   6         -5.4     25.826     26.550
   7         -5.2      2.162      2.945
   8         -5.2      9.677     11.046
   9         -5.1     16.039     17.013
Writing output ... done. 
                                        </code></pre>
                                        <v-card-title style="font-size: 24px;">Auto version</v-card-title>
                                        <pre><code class = language-bash>
mode |   affinity | dist from best mode
     | (kcal/mol) | rmsd l.b.| rmsd u.b.
-----+------------+----------+----------
   1         -5.2      0.000      0.000
   2         -5.0      1.341      2.641
   3         -4.9      1.834      5.380
   4         -4.7      2.187      4.892
   5         -4.7      2.067      3.117
   6         -4.7      1.938      5.493
   7         -4.4      2.044      2.586
   8         -4.1      1.590      1.674
   9         -4.1      2.071      2.456
Writing output ... done.                        
                                        </code></pre>
                                    </div>
                        </v-card>
                        <br>
                        <v-card :variant="alpha.card.theme">
                        <v-card-title style="font-size: 24px;">Result</v-card-title>
                        <v-card :variant="alpha.card.theme" class="text-box pa-5 scroll-box scroller" id = 'Result'>
                                <div
                                id="Result"
                                title="Result"
                                class="text-content"
                                >
We use <b>mmseqs2</b> as our selection mechanism, utilizing UniProt/SwissProt as our database. Considering that artificial proteins may not be stable or reliable enough, we employ mmseqs2 to ensure the functionality and accuracy of the protein. We also check the homology to ensure that the protein can successfully fold into its tertiary structure. In our project, we generate 110 novel sequences by using Dnase1 as the template. We use homology to predict the function of the protein, identify stable structures that are similar, and further confirm its function using AutoDock.                                </div>
                                <br>
                                <b>How we use the mmseqs2</b>
                                <pre><code class = language-bash>
mmseqs search input.fasta ./swissprot result tmp

mmseqs createtsv query.fasta ./swissprot result result.tsv
                                </code></pre>    
                        </v-card>
                        <br>
                        <v-card :variant="alpha.card.theme" class="text-box pa-5 scroll-box scroller" id = Tools>
                                <v-card-title style="font-size: 24px;">Tools</v-card-title>
                                <div
                                id="Tools"
                                title="Tools"
                                class="text-content"
                                >
                                - mmseqs2
                                </div>
                        </v-card>
                        </v-card>
   
                        </v-card>
                        </v-col>
                    <v-col cols = 1 />
                </v-row>
        </v-main>
    </v-app>
    
    <site_footer></site_footer>
</template>

<script>
/* eslint-disable */
import $ from 'jquery'
import M from 'materialize-css'
import hljs from 'highlight.js'
import '@/styles/code.css'


import title_nav from '@/title.vue'
import page_loader from '@/loader.vue'
import sidenav from '@/sidenav.vue'
import site_footer from '@/footer.vue'

export default {
    name: 'App',
    data() {
        return {
            loading: true,
            alpha: {
                card: {
                    theme: undefined,
                    f: ['outlined', undefined, 'tonal', 'text', 'plain', 'flat']
                },
                subcard: {
                    theme: 'tonal',
                    f: ['outlined', undefined, 'tonal', 'text', 'plain', 'flat']
                }
            },
        }
    },
    components: {
        title_nav,
        page_loader,
        sidenav,
        site_footer
    },
    mounted() {
        M.AutoInit();
        setTimeout(() => {
            this.loading = false;
        }, 100),
        fetch('/drylab/endzyme.md')     
            .then(res => res.text())
            .then(text => {
            this.endzyme = text
        });
        hljs.highlightAll();
    },
    methods: {
        title(x) {
            x = x.replace('-', ' ');
            var f = [];
            for(var i of x.split(' ')) {
                f.push(i[0].toUpperCase() + i.substr(1).toLowerCase());
            }
            return (f.join(' '));
        }
    },
}
</script>

<style>
* {
  transition: 1s all;
}
.blur {
  z-index: 10;
  background-color: rgba(255, 255, 255, .75);
  backdrop-filter: blur(5px);
  position: absolute;

}
a.unfocused, a.unfocused:visited, a.unfocused:hover, a.unfocused:active {
    color: inherit;
}
.wallpaper-card {
    height: 25vw;
    width: 65vw;
    background-color: transparent !important;
    box-shadow: none !important;
}

.wallpaper-text {
    position: absolute;
    top:20vw;
    left:19vw;           
    transform: translateX(-50%); 
    color: black;
    font-size: 2rem;      
}
.text-box {
  width: 100%;
  max-width: 900px;  
  margin: 0 auto;    
}
.scroll-box {
  max-height: 600vh;      
  overflow-y: auto;   
}

.scroll-box::-webkit-scrollbar {
  width: 6px;
}
.text-content {
  font-size: 18px;      
  line-height: 1.6;    
  color: #333;     
}
.text-content p {
  margin-bottom: 1.5em;
}
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