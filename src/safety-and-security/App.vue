<template>
    <v-app>
    <page_loader :loading = 'loading' />
    <title_nav />
    
    <v-main>
    <sidenav name = 'safety-and-security' />
    <v-row justify = end><v-col cols = 12 md = 7 class = 'pa-5'>
        <v-row>
        <v-card class="text-box pa-5 scroll-box scroller" id = Introduction>
            <v-card-title style="font-size: 32px;"><b>Introduction</b></v-card-title>
                                <div
                                id="Introduction"
                                title="Introduction"
                                class="text-content"
                                >
                                <p>Developing live bacterial therapeutics is a complex and lengthy process. Therefore, our team aims to identify and address potential risks and safety challenges as early as possible. In the initial stage, we selected <em>Escherichia coli</em> MG1655 — a well-characterized and non-pathogenic strain — as our chassis organism. For biofilm degradation assays, we used a non-resistant strain of <em>Staphylococcus aureus</em>.</p>
                                <p>Our design also incorporates the temperature-sensitive <strong>λ cI857 bacteriophage switch</strong>, which controls the release of biofilm-degrading enzymes and functions as a <strong>biocontainment mechanism</strong>. In the event of accidental exposure to the human body, the bacteria would undergo <strong>autolysis at ≥37 °C</strong>, preventing further infection or proliferation.</p>
                                </div>
        </v-card>
        </v-row>
        <v-row>
            <v-col cols = 12 md = 8  class = 'pa-5'></v-col>
            <v-card class="text-box pa-5 scroll-box scroller" id = Risk-Identification>
            <v-card-title style="font-size: 32px;"><b>Risk Identification</b></v-card-title>
                <v-card-subtitle id = Biological-Risks class="subtitle" style="font-size: 24px;">1. Biological Risks</v-card-subtitle>
                                <div
                                id="Risk Identification"
                                title="Risk Identification"
                                class="text-content"
                                >
                                <p><strong>Organisms used:</strong></p>
                                <ul>
                                <li><strong>Chassis strain:</strong> <em>E. coli</em> MG1655 (non-pathogenic, widely studied)</li>
                                <li><strong>Target organism:</strong> <em>Staphylococcus aureus</em> (pathogenic bacterium, used for biofilm assays)</li>
                                </ul>
                                <p><strong>Potential risks:</strong></p>
                                <ul>
                                <li>Accidental exposure to <em>S. aureus</em> leading to infection</li>
                                <li>Endotoxin (LPS) release from <em>E. coli</em></li>
                                <li>Unintended interaction between <em>E. coli</em> and other microbial species</li>
                                <li>Possible horizontal gene transfer (HGT) of engineered sequences</li>
                                </ul>
                                </div>
                                <v-card-subtitle id = Chemical-Risks class="subtitle" style="font-size: 24px;">2. Chemical Risks</v-card-subtitle>
                                <div class = text-content>
                                <p><strong>Common reagents used:</strong> antibiotics, DNA stains, enzyme substrates, and buffer solutions.
                                <strong>Potential hazards:</strong> toxicity, corrosiveness, and carcinogenicity (e.g., ethidium bromide or similar DNA-binding dyes).</p>
                                </div>
                                <v-card-subtitle id = Security-Risks class="subtitle" style="font-size: 24px;">3. Security Risks</v-card-subtitle>
                                <div class = text-content>
                                <ul>
                                <li>Potential misuse of biofilm-degrading enzymes in industrial or environmental settings</li>
                                <li>Uncontrolled release of genetically modified strains into environments below 37 °C, where the kill switch may not be triggered, leading to uncertain ecological effects</li>
                                </ul>   
                                </div>
            </v-card>
        </v-row>
        <v-row><v-col cols = 12 md = 8  class = 'pa-5'></v-col>
        <v-card class="text-box pa-5 scroll-box scroller" id = Safety-Measures-in-the-Laboratory>
            <v-card-title style="font-size: 32px;"><b>Safety Measures in the Laboratory</b></v-card-title>
                                <div
                                id="Safety-Measures"
                                title="Safety-Measures"
                                class="text-content"
                                >
                                <p>All wet-lab members completed <strong>BSL-2 safety training and certification</strong> prior to experimentation.
                                Work involving <em>S. aureus</em> (Risk Group 2 organism) was conducted exclusively within a <strong>biosafety cabinet</strong> under strict supervision. A <strong>daily safety officer</strong> system was implemented to ensure adherence to safety protocols and waste disposal procedures.</p>
                                <p><strong>Preventive measures:</strong></p>
                                <ul>
                                <li>Personal protective equipment (PPE): gloves, goggles, lab coats, and closed shoes</li>
                                <li>Decontamination: all cultures were inactivated using bleach solution before autoclaving</li>
                                <li>Waste handling: all tools and consumables exposed to <em>S. aureus</em> or engineered <em>E. coli</em> were sterilized before disposal</li>
                                </ul>
                                <p>These layered precautions minimized the primary risks—accidental culture release or personnel exposure.</p>
                                </div>
        </v-card>
        </v-row>
        <v-row><v-col cols = 12 md = 8  class = 'pa-5'></v-col>
        <v-card class="text-box pa-5 scroll-box scroller" id = Design-Features-for-Biosafety>
            <v-card-title style="font-size: 32px;"><b>Design Features for Biosafety</b></v-card-title>
                                <v-card-subtitle id = Chassis-Selection class="subtitle" style="font-size: 24px;">Chassis Selection</v-card-subtitle>
                                <div class = text-content>
                                <p>All bacterial strains used in this project were carefully chosen for their <strong>non-pathogenic nature</strong> and <strong>low biosafety risk</strong>, ensuring that every step of our work complied with <strong>Biosafety Level 2 (BSL-2)</strong> laboratory standards.</p>
                                <p>Our main chassis, <em>E. coli</em> MG1655, is a well-characterized K-12 derivative widely used in research and recognized as safe for both humans and the environment. A derivative of this strain, <em>E. coli</em> MG1655 λcI857, was further developed by integrating the λcI857 prophage to create a <strong>temperature-inducible kill-switch system</strong>, which served as the final safe host for our engineered constructs.</p>
                                <p>For initial experiments and protein expression tests, we employed <em>E. coli</em> BL21(DE3), another BSL-1 strain optimized for recombinant protein production, to verify λcI857 functionality and enzyme expression efficiency. <em>E. coli</em> TOP10 was used as a cloning host to construct and validate the pCL1920/T7RNAP plasmid together with a T7-inducible GFP reporter, confirming the functionality of our T7 expression system. Additionally, recombinase-containing strains <em>E. coli</em> Red(Km)* and <em>Red(Cm)</em> were utilized for λ-Red recombination and cassette construction during early stages of our work.</p>
                                <p>All of these chassis strains are non-pathogenic laboratory derivatives with fully annotated genomes and no virulence factors. No pathogenic organisms were used in any part of the project, and all procedures were carried out under standard BSL-2 safety guidelines, ensuring minimal environmental and human health risk.</p>
                                </div>
                                <v-card-subtitle id = Safety-Element-Dual-Kill-Switch-Design class="subtitle" style="font-size: 24px;">Safety Element: Dual Kill-Switch Design</v-card-subtitle>
                                <div class = text-content>
                                <p>Ensuring biosafety was one of the central design principles of our project. Since our engineered <em>E. coli</em> strains are intended to produce and release biofilm-degrading enzymes, we recognized the potential risk of accidental bacterial persistence after enzyme secretion.
                                To mitigate this risk, we designed and implemented <strong>two independent kill-switch mechanisms</strong>, both based on temperature-inducible lysis.</p>
                                </div>
                                <v-card-subtitle id = Kill-Switch-1 class="subtitle" style="font-size: 24px;">Kill Switch 1: <em>E. coli</em> BL21(DE3) λcI857</v-card-subtitle>
                                <div class = text-content>
                                <p>Our first safety design utilized the <strong>λcI857 temperature-sensitive phage repressor</strong> integrated into <em>E. coli</em> BL21(DE3). The λcI857 system remains inactive at lower temperatures (30 °C), allowing the cells to grow normally. When the temperature rises to 43 °C, the repressor is inactivated, triggering phage gene expression and host cell lysis.</p>
                                <p>We successfully infected <em>E. coli</em> BL21(DE3) with λcI857 and verified that this strain exhibited temperature-dependent lysis through growth curve analysis: it grew normally at 30 °C but showed growth inhibition and cell death at 43 °C. This confirmed that the kill-switch mechanism worked as intended, ensuring that our engineered bacteria would self-lyse under induced conditions.</p>
                                <p>However, further testing revealed an unexpected issue. The <strong>T7 RNA polymerase (T7RNAP)</strong> gene, originally encoded in the DE3 prophage of BL21(DE3), was lost after λcI857 integration — likely due to <strong>genetic incompatibility between the two prophages</strong>. As a result, this strain could no longer drive T7 promoter-dependent expression. (Details of this finding are provided in our <a href="#">DBTL section</a>.)</p>
                                <p>Despite this limitation, the BL21(DE3) λcI857 strain provided valuable insights into the balance between kill-switch functionality and genetic stability, guiding us toward a more robust design.</p>
                                </div>
                                <v-card-subtitle id = Kill-Switch-2 class="subtitle" style="font-size: 24px;">Kill Switch 2: <em>E. coli</em> MG1655 λcI857 + pCL1920/T7RNAP</v-card-subtitle>

                                <div class = text-content>
                                <p>To resolve the loss of T7RNAP observed in BL21(DE3) λcI857, we constructed an improved system.
                                The <strong>T7RNAP gene</strong> was isolated from BL21(DE3) and inserted into the <strong>low-copy-number plasmid pCL1920</strong>, which was then transformed into <em>E. coli</em> MG1655 λcI857.</p>
                                <p>This new chassis successfully restored T7 promoter activity while retaining the temperature-sensitive kill-switch function.</p>
                                <p>When cultured at 30 °C, the engineered <em>E. coli</em> MG1655 λcI857 + pCL1920/T7RNAP strain expressed T7-dependent proteins normally. Upon shifting the temperature to 40–43 °C, λcI857 was inactivated, leading to host cell lysis and enzyme release.
                                This design allowed <strong>simultaneous enzyme induction and self-elimination</strong>, combining functional efficiency with biosafety.</p>
                                <p>Compared to the first system, this strain demonstrated both <strong>stable T7RNAP activity</strong> and <strong>reliable temperature-induced lysis</strong>, making it an effective and safe expression platform.</p>
                                </div>
        </v-card>
        </v-row>
        <v-row><v-col cols = 12 md = 8  class = 'pa-5'></v-col>
        <v-card class="text-box pa-5 scroll-box scroller" id = Future-Applications>
            <v-card-title style="font-size: 32px;"><b>Future Applications and Biosafety Considerations</b></v-card-title>
                                <div
                                id=" Future-Applications"
                                title="Future-Applications"
                                class="text-content"
                                >
                                <p>Our temperature-sensitive kill-switch systems ensure that engineered bacteria can function effectively under controlled laboratory or therapeutic conditions but cannot survive once the induction phase ends.
                                This dual mechanism of <strong>enzyme release and self-destruction</strong> minimizes the risk of environmental contamination or unintended bacterial persistence.</p>
                                <p>In future applications, such systems could be integrated into therapeutic or environmental settings where precise temporal control of bacterial activity is essential.
                                The modular design of the <strong>pCL1920/T7RNAP–λcI857 system</strong> also allows integration with additional biosafety layers—such as toxin–antitoxin systems—to further strengthen containment and regulatory compliance.</p>
                                <p>Overall, these safety strategies provide a reliable foundation for applying engineered bacteria in biomedical contexts while ensuring that their function remains <strong>effective, controllable, and secure</strong>.</p>
                                </div>

        </v-card>
        </v-row><v-row><v-col cols = 12 md = 8  class = 'pa-5'></v-col>
        <v-card class="text-box pa-5 scroll-box scroller" id = References>
            <v-card-title style="font-size: 32px;"><b>References</b></v-card-title>
                                <div
                                id=" References"
                                title="References"
                                class="text-content"
                                >
                                <ol>
                                <li>Tourret, Jérôme et al. “The interaction between a non-pathogenic and a pathogenic strain synergistically enhances extra-intestinal virulence in Escherichia coli.” Microbiology (Reading, England) vol. 157,Pt 3 (2011): 774-785. doi:10.1099/mic.0.037416-0</li>
                                <li>Ballister, Edward R et al. “The emerging landscape of engineered bacteria cancer therapies.” Nature biotechnology vol. 43,5 (2025): 672-676. doi:10.1038/s41587-025-02623-x</li>
                                <li><a href="https://patents.google.com/patent/WO2020018989A1/en">Programmable bacteria for the treatment of cancer</a></li>
                                <li><a herf="https://www.sigmaaldrich.com/US/en/technical-documents/technical-article/genomics/dna-and-rna-purification/guide-to-use-proteinase-k-procedures?srsltid=AfmBOordVsuJ4-4iGw9xh2XCCZhLblWSIqwFPMJGbDq6jFSSWZPnuf5K">sigmaaldrich</a></li>
                                <li>Gawande, Purushottam V et al. “Antibiofilm Efficacy of DispersinB(®) Wound Spray Used in Combination with a Silver Wound Dressing.” Microbiology insights vol. 7 9-13. 5 Mar. 2014, doi:10.4137/MBI.S13914</li>
                                <li><a href="https://www.neb.com/en/products/m0303-dnase-i-rnase-free?srsltid=AfmBOoq4hVhjsdkPfEHoznJQHNjyFBN-O3mNb2zALXEk4wfbHhPmZUoe">DNase I (RNase-free)</a></li>
                                </ol>
                                </div>

        </v-card>
        </v-row>
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

export default {
    name: 'App',
    data() {
        return {
            loading: true
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
}

</style>