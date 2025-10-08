<template>
    <v-app>
    <page_loader :loading = 'loading' />
    <title_nav />
    <image_previewer />
    
    <v-main>
    <sidenav name = 'Result' />
    <v-row justify = end><v-col cols = 12 md = 8 class = 'pa-5'>
        <v-row><v-col>
        <v-card :variant="alpha.card.theme" class="text-box pa-5 scroll-box scroller" id = Introduction>
            <v-card-title style="font-size: 32px;"><b>Introduction</b></v-card-title>
                <div
                id="Introduction"
                title="Introduction"
                class="text-content"
                >
                <p>Biofilm-associated infections are a major challenge in clinical medicine, especially those occurring on medical implants and catheters. Once formed, biofilms provide bacteria with strong protection against antibiotics and host immune responses, often leading to chronic and recurrent infections. Conventional antibiotic treatments are insufficient because biofilms act as physical and biochemical barriers, preventing drug penetration and promoting resistance.</p>
                <p>To address this issue, our project aims to engineer <em>Escherichia coli</em> strains capable of producing multiple biofilm-degrading enzymes and releasing them in a controlled, safe manner. The rationale for using a multi-enzyme approach is that a single enzyme can only partially disrupt the biofilm structure. The sequential and cooperative actions of multiple enzymes are expected to loosen the biofilm matrix, increase its porosity, and improve the penetration of antibiotics. In this mechanism, DNase I acts first to weaken structural DNA links, Proteinase K then digests matrix proteins, and Dispersin B removes residual polysaccharides, ultimately leading to the detachment of bacterial cells and complete biofilm disruption.</p>
                <p>In addition, to ensure biosafety and controlled enzyme release, we integrated a λcI857 temperature-sensitive kill-switch system. This system allows the engineered bacteria to release accumulated enzymes upon heat induction while simultaneously undergoing self-lysis, preventing unwanted survival after treatment.</p>
                <p>Through this design, we aim to create a controllable and safe multi-enzyme biofilm-degradation platform that can effectively disrupt mature <em>S. aureus</em> biofilms. Our ultimate goal is to provide a potential biological solution for managing and preventing medical-device-associated infections.</p>
                </div>
                <div style="display:flex; justify-content:center; gap:20px; flex-wrap:wrap;"><figure style="width:100%; text-align:center;">
                <v-img :max-width= "3000000" class = preview src = "https://static.igem.wiki/teams/6003/results/results-introduction.webp"></v-img><figcaption style="font-size:14px; color:#555; margin-top:6px;">Figure 1. Overview of the engineered multi-enzyme biofilm degradation system.
                </figcaption></figure></div>
        </v-card>
        </v-col></v-row>
        
        <v-row><v-col>
            <v-card :variant="alpha.card.theme" class="text-box pa-5 scroll-box scroller" id = Enzymes-plasmid-construction>
            <v-card-title style="font-size: 32px;"><b>Enzymes plasmid construction</b></v-card-title>
            <v-card-subtitle id = "Aim" class = "subtitle" style="font-size: 24px;"><b>Aim:</b></v-card-subtitle>
                                <div
                                id="Enzymes-plasmid-construction"
                                title="Enzymes-plasmid-construction"
                                class="text-content"
                                >
                                <p>To enable expression of our selected target enzyme genes, we aimed to construct IPTG-inducible plasmids carrying biofilm-degrading enzymes. Based on literature, we selected three enzymes that specifically target the key components of <em>Staphylococcus aureus</em> biofilms, proteins, extracellular DNA, and polysaccharides (PNAG). The enzymes chosen were Proteinase K, DNase I, and Dispersin B (DspB). We aim to clone these genes into IPTG-inducible plasmid so that each enzyme could be expressed upon induction.</p>
                                </div>
                                <div style="display:flex; justify-content:center; gap:20px; flex-wrap:wrap;"><figure style="width:100%; text-align:center;">
                                <v-img :max-width= "3000000" class = preview src = "https://static.igem.wiki/teams/6003/results/enzymes-plasmid-construction-aim.webp"></v-img><figcaption style="font-size:14px; color:#555; margin-top:6px;">Figure 2. Construction of enzyme expression plasmids for biofilm degradation.
                                </figcaption></figure></div>
            <v-card-subtitle id = "Experimental-setup" class = "subtitle" style="font-size: 24px;"><b>Experimental setup:</b></v-card-subtitle>
                                <div
                                id="Enzymes-plasmid-construction"
                                title="Enzymes-plasmid-construction"
                                class="text-content"
                                >                
                                <p>We designed specific primers for each enzyme, introducing the corresponding restriction enzyme sites at both ends of their coding sequences. Using PCR amplification, we obtained purified enzyme gene fragments. The inserts and vectors were then digested with the respective restriction enzymes according to their multiple cloning sites (NdeI/XhoI for DspB and DNase I, and EcoRI/PstI for Proteinase K). After purification, ligation were carried out to join the digested inserts and vectors, followed by ethanol precipitation to concentrate the engineered plasmid DNA. The ligation products were transformed into<em>E. coli</em> Top10 cells via electroporation. Colony PCR was used to confirm successful insertions, and verified transformants were stored as glycerol stocks at -80 °C for future use.</p>
                                </div>
            <v-card-subtitle id = result class = "subtitle" style="font-size: 24px;"><b>Result:</b></v-card-subtitle>
                                <div
                                id="Result"
                                title="Result"
                                class="text-content"
                                >
                                <p>Initially, DspB and DNase I were cloned into pET28c under the T7 promoter (Fig. 1.). To optimize downstream protein expression, we also cloned these genes into pET28a, which was later used for all subsequent experiments (Fig. 2.). For Proteinase K, cloning into pTrc99A under the Trc promoter was successful. This plasmid was then transformed into <em>E. coli</em> MG1655 λcI857 and serve as one of the final engineered strain used for biofilm degradation assays.</p>
                                </div>
                                <div style="display:flex; justify-content:center; gap:20px; flex-wrap:wrap;"><figure style="width:45%; text-align:center;">
                                <v-img class = "preview img" src = "https://static.igem.wiki/teams/6003/results/enzyme-result.webp"></v-img><figcaption style="font-size:14px; color:#555; margin-top:6px;">Figue 3.PCR Amplification of Proteinase K gene from pTrc99a-Prok; DNase I, Dispersin B gene from pET28a- DNase I  and pET28a-Dispersin B.
                                </figcaption></figure></div>
                                <div style="display:flex; justify-content:center; gap:20px; flex-wrap:wrap;"><figure style="width:45%; text-align:center;">
                                <v-img class = "preview img" src = "https://static.igem.wiki/teams/6003/results/screen-20shot-202025-10-06-20at-2004-31-03-20am.webp"></v-img><figcaption style="font-size:14px; color:#555; margin-top:6px;">Figure 4.PCR Amplification of DNase I and Dispersin B gene from pET28a- DNase I  and pET28a-Dispersin B.
                                </figcaption></figure></div>
                                
            <v-card-subtitle id = conclusion class = "subtitle" style="font-size: 24px;"><b>Conclusion:</b></v-card-subtitle>
                                <div
                                id="Conclusion"
                                title="Conclusion"
                                class="text-content"
                                >
                                <p>We successfully constructed IPTG-inducible plasmids carrying DspB, DNase I, and Pro K, each ready for downstream protein expression and biofilm degradation assays.</p>
                                </div>
            </v-card>
        </v-col></v-row>
        <v-row><v-col>
            <v-card :variant="alpha.card.theme" class="text-box pa-5 scroll-box scroller" id = T7-RNA-polymerase-plasmid>
            <v-card-title style="font-size: 32px;"><b>T7 RNA polymerase plasmid construction</b></v-card-title>
            <v-card-subtitle id = "Aim" class = "subtitle" style="font-size: 24px;"><b>Aim:</b></v-card-subtitle>
                                <div
                                id="T7-RNA-polymerase-plasmid-construction"
                                title="T7-RNA-polymerase-plasmid-construction"
                                class="text-content"
                                >
                                <p>In previous experiments, we try to infected BL21(DE3) with λ phage CI857, so that we could have both function of T7 RNA polymerase to induce T7 promoter and λCI857 to induce host cell lysis while temperature raised to 43°C. However, we found that the λ phage and the DE3 prophage in BL21(DE3) could not coexist within the same genome, as λcI857 infection might displace the DE3 lysogen carrying T7RNAP.</p>
                                <p>To overcome this, we redesigned our system to isolate the T7RNAP gene from BL21(DE3) and clone it into a low-copy-number plasmid pCL1920. This plasmid would then be transformed into <em>E. coli</em> MG1655 λcI857, allowing T7 promoter-driven enzyme plasmids to be induced in a host also containing the heat-inducible kill switch.</p>
                                </div>
                                <div style="display:flex; justify-content:center; gap:20px; flex-wrap:wrap;"><figure style="width:100%; text-align:center;">
                                <v-img class = "preview img" src = "https://static.igem.wiki/teams/6003/results/t7-aim.webp"></v-img><figcaption style="font-size:14px; color:#555; margin-top:6px;">Figure 5. Design of the temperature-inducible T7 expression strain.
                                </figcaption></figure></div>
            <v-card-subtitle id = "Experimental-setup" class = "subtitle" style="font-size: 24px;"><b>Experimental setup:</b></v-card-subtitle>
                                <div
                                id="Experimental setup"
                                title="Experimental setup"
                                class="text-content"
                                >                
                                <p>To provide a reliable source of T7 RNA polymerase for T7 promoter-driven expression of our enzymes, we constructed a plasmid-based T7RNAP system. The lacI-T7RNAP fragment was amplified from <em>E. coli</em> BL21(DE3) using primers 180-1/T7-RNAP2. This fragment was ligated into the PCL1920 plasmid backbone using PstI and SalI restriction sites. The plasmid carries a Spectinomycin resistance marker, which was used for selection in subsequent transformations.</p>
                                <p>The resulting recombinant plasmid was first transformed into <em>E. coli</em> TOP10/pT7-RNAP to verify functional T7RNAP expression. Successful expression was confirmed by the presence of GFP fluorescence from the T7-GFP reporter plasmid. Once verified, the plasmid was introduced into E. coli MG1655 λ cI857, generating a host strain capable of supporting T7-driven enzyme expression and temperature-inducible lysis.</p>
                                </div>
                                <div style="display:flex; justify-content:center; gap:20px; flex-wrap:wrap;"><figure style="width:100%; text-align:center;">
                                <v-img class = "preview img" src = "https://static.igem.wiki/teams/6003/results/pcl1920-2bt7rnap-20map.webp"></v-img><figcaption style="font-size:14px; color:#555; margin-top:6px;">Figure 6. Schematic Map of the pCL1920-T7RNAP Plasmid.
                                </figcaption></figure></div>
            <v-card-subtitle id = result class = "subtitle" style="font-size: 24px;"><b>Result:</b></v-card-subtitle>
                                <div
                                id="Result"
                                title="Result"
                                class="text-content"
                                >
                                <p>After IPTG induction, the <em>E. coli</em> TOP10 strain carrying pCL1920-T7RNAP and T7GFP showed clear green fluorescence under UV illumination, demonstrating that the plasmid-expressed T7RNAP was functional(Fig.7.).</p>
                                </div>
                                <div style="display:flex; justify-content:center; gap:20px; flex-wrap:wrap;"><figure style="width:70%; text-align:center;">
                                <v-img class = "preview img" src = "https://static.igem.wiki/teams/6003/results/t7-result.webp"></v-img><figcaption style="font-size:14px; color:#555; margin-top:6px;">Figure 7. GFP Expression Driven by E. coli TOP10/pCL1920-T7RNAP.
                                </figcaption></figure></div>  
                                <div class = text-content>
                                <p>After confirming the functionality of pCL1920-T7RNAP using T7-sfGFP, we introduced this plasmid into <EM>E. coli</em>MG1655 λcI857. We then transformed the enzyme plasmids pET28a-DspB and pET28a-DNase I into the same host. Along with pTrc99A-proK in <em>E. coli</em> MG1655 λcI857, this completed three final engineered strains:
                                <br>
                                1. <em>E. coli MG1655 λcI857</em> + pCL1920-T7RNAP + pET28a-Dispersin B
                                                                <br>
                                2. <em>E. coli MG1655 λcI857</em> + pCL1920-7RNAP + pET28a-DNase I
                                                                <br>
                                3. <em>E. coli</em> <em>MG1655 λcI857</em> + pTrc99A-Proteinase K
                                <br>
                                Next, we measured their growth curves at 30 °C, 40 °C, and 43 °C (Fig. 8, 9, 10). All of the engineered strains exhibited growth inhibition at elevated temperatures compared with the control strain (<em>E. coli MG1655</em>), indicating successful λcI857-mediated heat sensitivity.</p>
                                </div>
                                <div style="display:flex; justify-content:center; gap:20px; flex-wrap:wrap;"><figure style="width:100%; text-align:center;">
                                <v-img class = "preview img" src = "https://static.igem.wiki/teams/6003/results/image-3.webp"></v-img><figcaption style="font-size:14px; color:#555; margin-top:6px;">Figure 9. Growth Curve of  Enzyme-Expressing Strain at 40°C.
                                </figcaption></figure></div>
                                <div style="display:flex; justify-content:center; gap:20px; flex-wrap:wrap;"><figure style="width:100%; text-align:center;">
                                <v-img class = "preview img" src = "https://static.igem.wiki/teams/6003/results/40.webp"></v-img><figcaption style="font-size:14px; color:#555; margin-top:6px;">Figure 10. Growth Curve of  Enzyme-Expressing Strain at 43°C.
                                </figcaption></figure></div>
                                <div class = text-content>
                                    <p>Moreover, we also measured their actual lysis time through the lysis dynamic curves. Cultures were grown at 30 °C until OD₆₀₀ = 0.6, induced with IPTG, and then shifted to 40 °C for lysis dynamic analysis (Fig.11). For Dispersin B and Proteinase K, after the temperature shift to 40 °C, the OD₆₀₀ stabilized around 2 hours, indicating a balance between cell division and degradation. Between 4 h and 6 h, a sharp decrease in OD₆₀₀ was observed, marking the peak degradation phase. After 6 hours, OD₆₀₀ reached its minimum and entered a steady state.</p>
                                </div>
                                <div style="display:flex; justify-content:center; gap:20px; flex-wrap:wrap;"><figure style="width: 100%; text-align:center;">
                                <v-img class = "preview img" src = "https://static.igem.wiki/teams/6003/results/image-4.webp"></v-img><figcaption style="font-size:14px; color:#555; margin-top:6px;">Figure 11. Lysis dynamic curve of Enzyme-Expressing Strain.
                                </figcaption></figure></div>
            <v-card-subtitle id = conclusion class = "subtitle  " style="font-size: 24px;"><b>Conclusion:</b></v-card-subtitle>
                                <div
                                id="Conclusion"
                                title="Conclusion"
                                class="text-content"
                                >
                                <p>The pCL1920-T7RNAP plasmid successfully expressed T7 promoter-driven expression capability within the λcI857 background. We established three temperature-sensitive, enzyme-producing <em>E. coli</em> strains capable of expressing and releasing biofilm-degrading enzymes under heat induction, providing a robust chassis for our degradation assays.</p>
                                </div>
            </v-card>
        </v-col></v-row>
        <v-row><v-col>
            <v-card :variant="alpha.card.theme" class="text-box pa-5 scroll-box scroller" id = S-aureus-Biofilm-Formation>
            <v-card-title style="font-size: 32px;"><b><em>Staphylococcus aureus</em> Biofilm Formation</b></v-card-title>
            <v-card-subtitle id = "Aim" class = "subtitle" style="font-size: 24px;"><b>Aim:</b></v-card-subtitle>
                                <div
                                id="Staphylococcus aureus Biofilm Formation"
                                title="Staphylococcus aureus Biofilm Formation"
                                class="text-content"
                                >
                                <p>To establish a stable and reproducible <em>Staphylococcus aureus</em> biofilm model that mimics mature clinical biofilms, we analyzed the biofilm growth curve to determine when <em>S. aureus</em> biofilm formation reached a steady state.</p>
                                </div>
            <v-card-subtitle id = "Experimental-setup" class = "subtitle" style="font-size: 24px;"><b>Experimental setup:</b></v-card-subtitle>
                                <div
                                id="Experimental setup"
                                title="Experimental setup"
                                class="text-content"
                                >                
                                <p>Overnight cultures of <em>S. aureus in</em> 0.5× tryptic soy broth (TSB) supplemented with 1% glucose were diluted 1:100 to promote biofilm formation. The diluted cultures were dispensed 200 uL into 96-well plates and incubated statically at 37 °C for different time intervals to monitor biofilm development. After incubation, planktonic cells were removed by gentle ddH2O washing, and biofilm biomass was visualized using 0.06% crystal violet staining. The absorbance at 600nm was measured with a microplate reader to quantify biofilm accumulation over time.</p>
                                </div>
            <v-card-subtitle id = result class = "subtitle" style="font-size: 24px;"><b>Result:</b></v-card-subtitle>
                                <div
                                id="Result"
                                title="Result"
                                class="text-content"
                                >
                                <p>From our biofilm growth curve, we observed that biofilm formation reached a stable phase after approximately 24 hours of incubation.  Therefore, we selected 24 hours ****as the standard growth time for all subsequent biofilm degradation experiments.</p>
                                <div style="display:flex; justify-content:center; gap:20px; flex-wrap:wrap;"><figure style="width:100%; text-align:center;">
                                <v-img class = "preview img" src = "https://static.igem.wiki/teams/6003/results/sa-result.webp"></v-img><figcaption style="font-size:14px; color:#555; margin-top:6px;">Figure 12. Growth curve of S.aureus biofilm formation.
                                </figcaption></figure></div>
                                </div>
            <v-card-subtitle id = conclusion class = "subtitle  " style="font-size: 24px;"><b>Conclusion:</b></v-card-subtitle>
                                <div
                                id="Conclusion"
                                title="Conclusion"
                                class="text-content"
                                >
                                <p>A reproducible and mature <em>S. aureus</em> biofilm model was successfully established, and a 24-hour incubation period was identified as the optimal duration for achieving stable biofilm formation.</p>
                                </div>
            </v-card>
        </v-col></v-row>
        <v-row><v-col>
            <v-card :variant="alpha.card.theme" class="text-box pa-5 scroll-box scroller" id = Biofilm-Degradation>
            <v-card-title style="font-size: 32px;"><b>Biofilm Degradation</b></v-card-title>
            <v-card-subtitle id = "Aim" class = "subtitle" style="font-size: 24px;"><b>Aim:</b></v-card-subtitle>
                                <div
                                id="Biofilm Degradation"
                                title="Biofilm Degradation"
                                class="text-content"
                                >
                                <p>To evaluate whether the enzymes produced by our engineered <em>E. coli</em> strains could effectively degrade mature <em>S. aureus</em> biofilms. We aimed to determine whether the combination of three enzymes exhibits synergistic effects and what the optimal mixing ratio might be.</p>
                                </div>
            <v-card-subtitle id = "Experimental-setup" class = "subtitle" style="font-size: 24px;"><b>Experimental setup:</b></v-card-subtitle>
                                <div
                                id="Experimental setup"
                                title="Experimental setup"
                                class="text-content"
                                >                
                                <p>Overnight cultures of each engineered strain were subcultured until reaching OD600 ≈ 0.6, followed by induction with 0.5 mM IPTG at 30 °C for 4 hours to allow intracellular enzyme accumulation. After induction, cultures were normalized to OD600 = 1 to ensure equal cell density. The strains were then mixed in predetermined ratios to a total volume of 200 μL. Each mixture was added into 96-well plates containing 24 hour pre-formed <em>S. aureus</em> biofilms. The plates were incubated at 40 °C, which simultaneously activated the λcI857 kill-switch and triggered enzyme release from lysed cells. After incubation, the wells were washed with ddH2O, stained with 0.06% crystal violet, and the absorbance at 600nm was measured to quantify residual biofilm biomass.</p>
                                </div>
                                <div style="display:flex; justify-content:center; gap:20px; flex-wrap:wrap;"><figure style="width:100%; text-align:center;">
                                <v-img class = "preview img" src = "https://static.igem.wiki/teams/6003/software/biofilm-20degraded-20flow.webp"></v-img><figcaption style="font-size:14px; color:#555; margin-top:6px;">Figure 13. Workflow of biofilm degradation assay.
                                </figcaption></figure></div>
            <v-card-subtitle id = result class = "subtitle" style="font-size: 24px;"><b>Result:</b></v-card-subtitle>
                                <div
                                id="Result"
                                title="Result"
                                class="text-content"
                                >
                                <p>Based on the observation of the lysis dynamic curves, we designed a time-course analysis to determine the optimal reaction period for biofilm degradation. The degradation process was monitored hourly between 2 hours and 6 hours, and every two hours from 7 hours to 13 hours (Fig. 14). The most pronounced degradation was observed at 5 hours, after which activity gradually declined.</p>
                                </div>
                                 <div style="display:flex; justify-content:center; gap:20px; flex-wrap:wrap;"><figure style="width:100%; text-align:center;">
                                <v-img class = "preview img" src = "https://static.igem.wiki/teams/6003/results/image-5.webp"></v-img><figcaption style="font-size:14px; color:#555; margin-top:6px;">Figure 14. Biofilm degradation from 2 to 7 hours reaction time at 40°C
                                </figcaption></figure></div>
                                <div class = text-content>
                                <p>From these measurements, the most pronounced degradation occurred at around 5 hours, after which the activity gradually declined. Interestingly, among the individual enzymes tested, Proteinase K showed almost no significant effect on biofilm degradation under these conditions, suggested that it may not directly influence the integrity of <em>S. aureus</em> biofilms in this setup.</p>
                                <p>To further investigate the optimal enzyme ratios and the possibility of synergistic effects, we next tested mixtures of DspB and DNase I at different proportions. The degradation activity of each combination was examined at 5 hours and 24 hours. During the 5-hour reaction, no significant biofilm degradation was observed for any tested ratio, showing little improvement compared to the individual enzymes.</p>
                                </div>
                                <div style="display:flex; justify-content:center; gap:20px; flex-wrap:wrap;"><figure style="width:100%; text-align:center;">
                                <v-img class = "preview img" src = "https://static.igem.wiki/teams/6003/results/image-6.webp"></v-img><figcaption style="font-size:14px; color:#555; margin-top:6px;">Figure 15. Biofilm degradation using different ratios of Dispersin B and DNase I for 5 hours.
                                </figcaption></figure></div>
                                <div style="display:flex; justify-content:center; gap:20px; flex-wrap:wrap;"><figure style="width:100%; text-align:center;">
                                <v-img class = "preview img" src = "https://static.igem.wiki/teams/6003/results/dspb-2c-20dnasei-2024hr-2040c.webp"></v-img><figcaption style="font-size:14px; color:#555; margin-top:6px;">Figure 16. Biofilm degradation using different ratios of Dispersin B and DNase I for 24 hours.
                                </figcaption></figure></div>
                                <div class = text-content>
                                <p>Surprisingly, after 24 hours, all tested mixtures exhibited significant decreased of biofilm mass, suggested that the mixture of Dispersin B and DNaseI have the ability to  degraded the biofilm at 24 hours reaction. Regardless of their ratio, confirming that prolonged incubation might enhance enzyme synergy and overall biofilm breakdown.</p>
                                </div>
            <v-card-subtitle id = conclusion class = "subtitle  " style="font-size: 24px;"><b>Conclusion:</b></v-card-subtitle>
                                <div
                                id="Conclusion"
                                title="Conclusion"
                                class="text-content"
                                >
                                <p>Among the three enzymes, Dispersin B and DNase I showed clear degradation ability, while Proteinase K had little effect under the tested conditions. When Dispersin B and DNase I were combined, significant biofilm reduction was observed after 24 hours, indicating that longer reaction times might enhance their synergistic effect. In the future, we plan to test additional reaction durations and optimize the Proteinase K sequence to improve its performance in biofilm degradation.</p>
                                </div>                                  
            </v-card>
            <br>

        </v-col></v-row>
        
    </v-col></v-row>

    
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