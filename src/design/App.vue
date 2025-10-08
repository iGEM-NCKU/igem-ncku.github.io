<template>
    <v-app>
    <page_loader :loading = 'loading' />
    <title_nav />
    <image_previewer />
    
    <v-main>
    <sidenav name = 'Design' />
    <v-row justify = end><v-col cols = 12 md = 7 class = 'pa-5'>
        <v-row><v-col>
        <v-card :variant="alpha.card.theme" class="text-box pa-5 scroll-box scroller" id = Overview>
            <v-card-title style="font-size: 32px;"><b>Overview</b></v-card-title>
                <div
                id="Overview"
                title="Overview"
                class="text-content"
                >
                <p>Biofilm-associated infections, especially on medical implants and catheters, are difficult to treat because biofilms protect bacteria from antibiotics and immune responses.</p>
                <p>To solve this problem, we engineered Escherichia coli to produce and release three biofilm-degrading enzymes: Proteinase K, DNase I, and Dispersin B, which target proteins, extracellular DNA, and polysaccharides, respectively. A λcI857 temperature-sensitive system provides controlled enzyme release and bacterial self-lysis, creating a safe and effective biofilm-disruption platform.</p>
                </div>
        </v-card>
        </v-col></v-row>
        <v-row><v-col>
        <v-card :variant="alpha.card.theme" class="text-box pa-5 scroll-box scroller" id = Chassis-Selection>
            <v-card-title style="font-size: 32px;"><b>Chassis Selection</b></v-card-title>
                <div
                id="Chassis-Selection"
                title="Chassis-Selection"
                class="text-content"
                >
                <p>We selected <em>E. coli</em> MG1655 as our chassis strain. MG1655 is a well-characterized derivative of the <em>E. coli</em> K-12 lineage, widely used in genetic and metabolic engineering. It possesses a clean and non-pathogenic genetic background, making it ideal for fundamental research and synthetic biology applications.</p>
                <p>This strain shows excellent growth stability and robustness, and its complete genomic information allows efficient gene editing, pathway modification, and regulatory design. MG1655 is classified as Biosafety Level 1 (BSL-1), indicating minimal risk to humans and the environment and allowing standard laboratory handling without special containment measures. In addition, <em>E. coli</em> MG1655 is fully compatible with the λcI857 temperature-sensitive regulatory system used in our design.</p>
                </div>
        </v-card>
        </v-col></v-row>
        
        <v-row><v-col>
            <v-card :variant="alpha.card.theme" class="text-box pa-5 scroll-box scroller" id = Multi-Enzyme>
            <v-card-title style="font-size: 32px;"><b>Multi-Enzyme Degradation System</b></v-card-title>
            <v-card-subtitle id = "Proteinase-K" class = "subtitle" style="font-size: 24px;"><b>Proteinase K</b></v-card-subtitle>
                                <div
                                id="Multi-Enzyme"
                                title="Multi-Enzyme"
                                class="text-content"
                                >
                                <p>Proteinase K is a serine protease originally isolated from the fungus <em>Tritirachium album Limber</em> and now commonly produced recombinantly. It has a molecular weight of approximately 28.9 kDa and is highly stable across a wide pH range (4–12) and at high temperatures (up to 65°C) [1]. Proteinase K remains active even in the presence of denaturing agents such as SDS or urea.</p>
<p>The enzyme cleaves peptide bonds, particularly at the carboxyl side of aliphatic and aromatic amino acids, allowing it to digest structural proteins in biofilms. It is widely used to remove protein contaminants during DNA and RNA extraction, ensuring sample purity.</p>
<p>In our project, Proteinase K targets the protein components of <em>S. aureus</em> biofilms, weakening the structural matrix and facilitating biofilm degradation.</p>
                                </div>
                                <div style="display:flex; justify-content:center; gap:20px; flex-wrap:wrap;"><figure style="width:100%; text-align:center;">
                                <v-img :max-width= "3000000" class = preview src = "https://static.igem.wiki/teams/6003/w1/image-7.avif"></v-img><figcaption style="font-size:14px; color:#555; margin-top:6px;">Worthington Biochemical Corporation. (2025). Proteinase K - Manual.
                                </figcaption></figure></div>
            <v-card-subtitle id = "DNase-I" class = "subtitle" style="font-size: 24px;"><b>DNase I</b></v-card-subtitle>
                                <div
                                id="DNase-I"
                                title="DNase-I"
                                class="text-content"
                                >         
                                <p>DNase I, or deoxyribonuclease I, is a non-specific endonuclease commonly derived from bovine pancreas, with a molecular weight of approximately 31 kDa. It efficiently cleaves the phosphodiester bonds in both single- and double-stranded DNA, producing fragments with 5'-phosphate and 3'-hydroxyl ends. The enzyme requires divalent metal ions for activity, with Mg²⁺ promoting random cleavage along the DNA backbone and Mn²⁺ allowing near-identical cuts on both strands, generating blunt or short overhanging ends [2]. DNase I exhibits optimal activity at physiological pH (7–8), and its non-specific action makes it highly effective at degrading extracellular DNA, a key structural component in bacterial biofilms.</p>       
                            <p>In our project, DNase I is used to target the eDNA framework of S. aureus biofilms, reducing structural stability and facilitating the penetration and action of additional biofilm-degrading enzymes.</p>    
                            </div>
                            <div style="display:flex; justify-content:center; gap:20px; flex-wrap:wrap;"><figure style="width:100%; text-align:center;">
                                <v-img :max-width="30000" class = "preview" src = "https://static.igem.wiki/teams/6003/w1/image-8.avif"></v-img><figcaption style="font-size:14px; color:#555; margin-top:6px;">(Lauková, L., Konečná, B., Janovičová, Ľ., Vlková, B., & Celec, P. (2020). Deoxyribonucleases and Their Applications in Biomedicine. <em>Biomolecules</em>, 10(7), 1036. https://doi.org/10.3390/biom10071036)
                                </figcaption></figure></div>
            <v-card-subtitle id = Dispersin-B class = "subtitle" style="font-size: 24px;"><b>Dispersin B</b></v-card-subtitle>
                                <div
                                id="Dispersin-B"
                                title="Dispersin-B"
                                class="text-content"
                                >
                                <p>Dispersin B (DspB) is produced by <em>Aggregatibacter actinomycetemcomitans</em>, a Gram-negative oral bacterium, to detach surface-attached cells. It specifically hydrolyzes poly-β-1,6-N-acetylglucosamine (PNAG), a major polysaccharide in many bacterial biofilms, by cleaving the β-1,6-glycosidic bonds and thereby loosening the biofilm matrix to promote bacterial detachment [3][4]. DspB exhibits optimal activity at near-neutral to slightly acidic pH (6.5–8) and at approximately 37°C, and its activity depends on the integrity of its catalytic residues, showing high specificity for PNAG.</p>
                                <p>In our project, DspB targets the polysaccharide component of <em>S. aureus</em> biofilms, complementing Proteinase K and DNase I to achieve effective and comprehensive biofilm disruption.</p>
                                </div>
                                <div style="display:flex; justify-content:center; gap:20px; flex-wrap:wrap;"><figure style="width:100%; text-align:center;">
                                <v-img :max-width="30000" class = "preview" src = "https://static.igem.wiki/teams/6003/w1/image-9.avif"></v-img><figcaption style="font-size:14px; color:#555; margin-top:6px;">Breslawec, A. P et al.(2022).The endoglycosidase activity of Dispersin B is mediated through electrostatic interactions with cationic poly-β-(1→6)-N-acetylglucosamine.
                                </figcaption></figure></div> 
            </v-card>
        </v-col></v-row>
        <v-row><v-col>
        <v-card :variant="alpha.card.theme" class="text-box pa-5 scroll-box scroller" id = Kill-switch>
            <v-card-title style="font-size: 32px;"><b>Kill switch</b></v-card-title>
                <div
                id="Kill-switch"
                title="Kill-switch"
                class="text-content"
                >
            <p>The λ phage <em>cI857</em> mutant is a temperature-sensitive variant derived from a point mutation in the <em>cI</em> gene, which encodes the λ repressor protein responsible for controlling the switch between the lysogenic and lytic cycles of bacteriophage λ. [5]</p>
<p>In the wild-type phage, the cI repressor binds to operator sequences near the PR and PL promoters, thereby inhibiting transcription of lytic genes and maintaining the lysogenic state. The <em>cI857</em> mutation alters the thermal stability of the cI repressor, allowing it to remain active at lower temperatures but become inactive when exposed to elevated temperatures (typically ≥ 37 °C).</p>    
            </div>
            <v-img class = "preview img" src = "https://static.igem.wiki/teams/6003/w1/image-10.avif"></v-img>
            <div class = text-content>
        <p>At low temperatures (below ~34 °C), the cI857 repressor protein is properly folded and functional. It binds strongly to the operator regions of the λ phage genome and effectively blocks RNA polymerase from initiating transcription of lytic and downstream target genes. Under these conditions, the host E. coli cells can grow normally while the target recombinant protein accumulates intracellularly without inducing cell lysis.</p>
            </div>
            <v-img class = "preview img" src = "https://static.igem.wiki/teams/6003/w1/image-11.avif"></v-img>
            <div class = text-content>
            <p>When the temperature is shifted to 37 °C or above, the cI857 repressor loses its conformational stability due to an amino acid substitution (Ala66 → Thr). The resulting loss of DNA-binding affinity leads to derepression of the PR and PL promoters, allowing transcription of lytic genes such as <em>holin</em> and <em>lysozyme</em>, as well as the downstream recombinant enzyme gene. Expression of the lysis module causes degradation of the cell wall and ultimately results in self-lysis of the host cells, releasing the accumulated intracellular enzyme into the culture medium.</p>
            </div>
            <v-img class = "preview img" src = "https://static.igem.wiki/teams/6003/w1/image-12.avif"></v-img>
            <div class = text-content>
            <p>This temperature inducible control system provides both precision and biosafety. It enables high level expression and efficient recovery of intracellular products while ensuring that recombinant E. coli cannot survive uncontrollably in the environment, since exposure to higher temperatures triggers self-lysis. As a result, the lambda cI857 temperature regulated system has become a widely used approach in industrial enzyme production, recombinant protein purification, and biosafety oriented genetic engineering.</p>
            </div>
        </v-card>
        </v-col></v-row>
        <v-row><v-col>
        <v-card :variant="alpha.card.theme" class="text-box pa-5 scroll-box scroller" id = Expected-Synergistic-Effect>
            <v-card-title style="font-size: 32px;"><b>Expected Synergistic Effect</b></v-card-title>
                <div
                id="Expected-Synergistic-Effect"
                title="Expected-Synergistic-Effect"
                class="text-content"
                >
                <p>Biofilm-associated infections are difficult to eradicate because the biofilm matrix consists of multiple interlinked components, including extracellular DNA (eDNA), proteins, and polysaccharides. Since a single enzyme can only partially disrupt this complex structure, a multi-enzyme strategy is expected to achieve more efficient biofilm degradation.</p>
<p>Previous studies have shown that the combined use of DNase I and Proteinase K effectively removes eDNA and protein components from the biofilm, leading to a significant reduction in biofilm biomass. [6] While either DNase I or Proteinase K alone exhibits limited effects on mature biofilms, their combination increases biofilm porosity and roughness, facilitating antibiotic penetration. In addition, poly-N-acetylglucosamine (PNAG) is a major component of <em>Staphylococcus aureus</em> biofilms, and Dispersin B complements these effects by hydrolyzing the polysaccharide backbone, promoting bacterial detachment from the matrix.</p>
<p>In our project, we designed a system that introduces all three enzymes—DNase I, Proteinase K, and Dispersin B—into the biofilm simultaneously.[7][8] DNase I acts first by degrading eDNA that crosslinks bacterial cells and stabilizes the biofilm network, thereby weakening its structural integrity. Proteinase K then digests surface and matrix proteins, further loosening the compact biofilm layers. Finally, Dispersin B hydrolyzes the remaining polysaccharide matrix, specifically targeting PNAG polymers, resulting in bacterial cell detachment.</p>
<p>In summary, the sequential and cooperative actions of DNase I, Proteinase K, and Dispersin B are hypothesized to synergistically disrupt the biofilm architecture, enhance antibiotic diffusion, and markedly reduce biofilm biomass.</p>
                </div>        
        </v-card>
        </v-col></v-row>
        <v-row><v-col>
        <v-card :variant="alpha.card.theme" class="text-box pa-5 scroll-box scroller" id = Modeling-Data-Integration>
            <v-card-title style="font-size: 32px;"><b>Modeling and Data Integration</b></v-card-title>
                <div
                id="Modeling-Data-Integration"
                title="Modeling-Data-Integration"
                class="text-content"
                >
                <p>The main objective of this section is to demonstrate the iterative feedback loop between the Wet Lab and Dry Lab, highlighting the engineering design cycle of model refinement. In our project, the goal of modeling is to identify the optimal ratio combination of the three enzymes that maximize biofilm degradation efficiency. The Wet Lab conducts experiments using multiple enzyme ratio combinations (e.g., 1:1:1, 1:2:1, 2:1:1) and evaluates the degradation effect through crystal violet (CV) staining results. Based on experimental data, the Dry Lab constructs a predictive model, such as a multivariable regression or machine learning model, to analyze the relationship between enzyme ratios and degradation efficiency. The model then predicts new potential combinations, which are subsequently tested in the Wet Lab. The updated results are fed back into the model to improve its accuracy, forming a continuous optimization cycle. Statistical analyses such as one-way ANOVA are applied to assess the significance of differences between groups. The results can be visualized using curve fitting plots or optimization tables to illustrate the predicted and experimental outcomes, effectively presenting the engineering feedback loop between experimental validation and computational modeling.</p>
                </div>
                <v-img class = "pre img" src = "https://static.igem.wiki/teams/6003/w1/image-13.avif"></v-img>  
        </v-card>
        </v-col></v-row>
        <v-row><v-col>
        <v-card :variant="alpha.card.theme" class="text-box pa-5 scroll-box scroller" id = Future-Application>
            <v-card-title style="font-size: 32px;"><b>Future Application    </b></v-card-title>
                <div
                id="Future-Application"
                title="Future-Application"
                class="text-content"
                >
                <p>In the future, this system can be further developed for a broader range of biofilm-related therapies and integrated with a biofilm-sensing circuit that monitors bacterial composition. The system could then deliver appropriately balanced enzyme-producing bacteria in response to the detected biofilm, triggering enzyme secretion only when needed and making the treatment more precise and efficient. Its modular design allows enzyme combinations to be customized based on the composition of biofilms formed by different pathogens, and the optimal enzyme ratios for new biofilm types can be continuously determined through iterative modeling and experimental testing. This strategy supports practical biomedical applications such as catheter coatings, wound dressings, or implant surface disinfection. In later stages, the secretion-based module can be transferred into a probiotic chassis such as E. coli Nissle 1917 or other clinically safe strains, enabling controlled and biocompatible biofilm degradation in real-world applications.</p>
                </div>        
        </v-card>
        </v-col></v-row>
        <v-row><v-col>
        <v-card :variant="alpha.card.theme" class="text-box pa-5 scroll-box scroller" id = Reference>
            <v-card-title style="font-size: 32px;"><b>Reference</b></v-card-title>
                <div
                id="Reference"
                title="Reference"
                class="text-content"
                >
                <p>[1] Farrell, R. E. Jr. (2017). Creating a ribonuclease-free environment. In <em>RNA Methodologies</em> (5th ed., pp. 55-74). Academic Press.</p>
<p>[2] Lauková, L., Konečná, B., Janovičová, Ľ., Vlková, B., &amp; Celec, P. (2020). Deoxyribonucleases and Their Applications in Biomedicine. <em>Biomolecules</em>, <em>10</em>(7), 1036. https://doi.org/10.3390/biom10071036</p>
<p>[3] Kaplan, J. B., Sukhishvili, S. A., Sailer, M., Kridin, K., &amp; Ramasubbu, N. (2024). <em>Aggregatibacter actinomycetemcomitans</em> Dispersin B: The Quintessential Antibiofilm Enzyme. <em>Pathogens (Basel, Switzerland)</em>, <em>13</em>(8), 668. https://doi.org/10.3390/pathogens13080668</p>
<p>[4] Ramasubbu, N., Thomas, L. M., Ragunath, C., &amp; Kaplan, J. B. (2005). Structural analysis of dispersin B, a biofilm-releasing glycoside hydrolase from the periodontopathogen Actinobacillus actinomycetemcomitans. <em>Journal of molecular biology</em>, <em>349</em>(3), 475–486. https://doi.org/10.1016/j.jmb.2005.03.082</p>
<p>[5] Valdez-Cruz, N. A., Caspeta, L., Pérez, N. O., Ramírez, O. T., &amp; Trujillo-Roldán, M. A. (2010). Production of recombinant proteins in <em>E. coli</em> by the heat inducible expression system based on the phage lambda pL and/or pR promoters. <em>Microbial Cell Factories</em>, 9, 18. https://doi.org/10.1186/1475-2859-9-18</p>
<p>[6] Li, W., Wang, J. J., Qian, H., Tan, L., Zhang, Z., Liu, H., Pan, Y., &amp; Zhao, Y. (2020). Insights Into the Role of Extracellular DNA and Extracellular Proteins in Biofilm Formation of <em>Vibrio parahaemolyticus</em>. <em>Frontiers in microbiology</em>, <em>11</em>, 813. https://doi.org/10.3389/fmicb.2020.00813</p>
<p>[7] Wang, S., Zhao, Y., Breslawec, A. P., Liang, T., Deng, Z., Kuperman, L. L., &amp; Yu, Q. (2023). Strategy to combat biofilms: a focus on biofilm dispersal enzymes. <em>npj Biofilms and Microbiomes</em>, 9, Article 63. https://doi.org/10.1038/s41522-023-00427-y</p>
<p>[8] Sugimoto, S., Sato, F., Miyakawa, R., Chiba, A., Onodera, S., Hori, S., &amp; Mizunoe, Y. (2018). Broad impact of extracellular DNA on biofilm formation by clinically isolated Methicillin-resistant and -sensitive strains of Staphylococcus aureus. <em>Scientific Reports, 8</em>, 2254. https://doi.org/10.1038/s41598-018-20485-z</p>
                </div>        
        </v-card>
        </v-col></v-row>

        
        
    </v-col><v-col cols = 1 /></v-row>

    
    <site_footer></site_footer>
</v-main></v-app>
</template>

<script>
 /* eslint-disable */ 
import $ from 'jquery'
import M from 'materialize-css'

import title_nav from '@/title.vue'
import page_loader from '@/loader.vue'
import sidenav from '@/sidenav.vue'
import site_footer from '@/footer.vue'

import image_previewer from '@/preview.vue'

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
            preview: false
        }
    },
    components: {
        title_nav,
        page_loader,
        sidenav,
        site_footer,
        image_previewer
    },
    mounted() {
        M.AutoInit();
        setTimeout(() => {
            this.loading = false;
        }, 100);
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
    }
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
.text-content {
  font-size: 18px;      
  line-height: 1.6;    
  color: #333;     
   padding-left: 30px; 
}
.text-content p {
  margin-bottom: 1.5em;
  .img{
    max-width: 500px;
  }
}

</style>