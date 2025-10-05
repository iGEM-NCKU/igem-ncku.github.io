<template>
    <v-app>
    <page_loader :loading = 'loading' />
    <title_nav />
    
    <v-main>
    <sidenav name = 'WetLab' />
    <v-row justify = end><v-col cols = 12 md = 8 class = 'pa-5'>
        <v-card :variant="alpha.card.theme" class="text-box pa-5 scroll-box scroller" id = Introduction>
            <v-card-title style="font-size: 32px;"><b>Introduction</b></v-card-title>
                <div
                id="Introduction"
                title="Introduction"
                class="text-content"
                >
                <p>Biofilm-associated infections are a major challenge in clinical medicine, especially those occurring on medical implants and catheters. Once formed, biofilms provide bacteria with strong protection against antibiotics and host immune responses, often leading to chronic and recurrent infections. Conventional antibiotic treatments are insufficient because biofilms act as physical and biochemical barriers, preventing drug penetration and promoting resistance.</p>
                <p>To address this issue, our project aims to engineer <em>Escherichia coli</em> strains capable of producing multiple biofilm-degrading enzymes and releasing them in a controlled, safe manner. Based on literature describing the structure of <em>Staphylococcus aureus</em> biofilms, we targeted the three major extracellular components (proteins, extracellular DNA, and polysaccharides) and selected corresponding enzymes (Proteinase K, DNase I, and Dispersin B) to degrade the biofilm component saperatly.</p>
                <p>In addition, to ensure biosafety and controlled enzyme release, we integrated a λcI857 temperature-sensitive kill-switch system. This system allows the engineered bacteria to release accumulated enzymes upon heat induction while simultaneously undergoing self-lysis, preventing unwanted survival after treatment.</p>
                <p>Through this design, we aim to create a controllable and safe multi-enzyme biofilm-degradation platform that can effectively disrupt mature <em>S. aureus</em> biofilms. Our ultimate goal is to provide a potential biological solution for managing and preventing medical-device-associated infections.</p>
                </div>
        </v-card>
        <br>
        <v-row>
            <v-card :variant="alpha.card.theme" class="text-box pa-5 scroll-box scroller" id = Enzymes-plasmid-construction>
            <v-card-title style="font-size: 32px;"><b>Enzymes plasmid construction</b></v-card-title>
                                <div
                                id="Enzymes-plasmid-construction"
                                title="Enzymes-plasmid-construction"
                                class="text-content"
                                >
                                <b>Aim:</b>
                                <br>
                                <p>To enable expression of our selected target enzyme genes, we aimed to construct IPTG-inducible plasmids carrying biofilm-degrading enzymes. Based on literature, we selected three enzymes that specifically target the key components of <em>Staphylococcus aureus</em> biofilms, proteins, extracellular DNA, and polysaccharides (PNAG). The enzymes chosen were Proteinase K, DNase I, and Dispersin B (DspB). We aim to clone these genes into IPTG-inducible plasmid so that each enzyme could be expressed upon induction.</p>
                                </div>
        </v-card>
            <v-col cols = 12 md = 6>
                <v-card title = 'Three enzyme expression constructs' subtitle = 'Design' :variant = 'alpha.card.theme'>
                    <template v-slot:text>
                        <!-- <v-row> -->
                            <v-col>
                                <v-card title = 'Proteinase K + pTrc99A' color = amber v-ripple>
                                    <template v-slot:text>
                                        driven by a lac promoter.
                                    </template>
                                </v-card>
                            </v-col>
                            
                            <v-col>
                                <v-card title = 'Dispersin B + pET28c' color = green v-ripple>
                                    <template v-slot:text>
                                        driven by a T7 promoter.
                                    </template>
                                </v-card>
                            </v-col>

                            <v-col>
                                <v-card title = 'DNase I + pET28c' color = cyan v-ripple>
                                    <template v-slot:text>
                                        also driven by a T7 promoter.
                                    </template>
                                </v-card>
                            </v-col>
                        <!-- </v-row> -->
                    </template>
                </v-card>
            </v-col>

            <v-col cols = 12 md = 6>
                <v-card title = 'Host strain planning' subtitle = 'Design' :variant = 'alpha.card.theme'>
                    <v-col>
                        <v-card :variant = 'alpha.subcard.theme' v-ripple>
                            <template v-slot:text>
                                The Proteinase K plasmid is transformed into MG1655 λcI857, which carries a temperature-sensitive λ prophage system for heat-induced lysis.
                            </template>
                        </v-card>
                    </v-col>
                    <v-col>
                        <v-card :variant = 'alpha.subcard.theme' v-ripple>
                            <template v-slot:text>
                                The Dispersin B and DNase I plasmids are introduced into MG1655 λcI857 ΔlacZ::T7RNAP-kan, since MG1655 does not naturally express T7 polymerase.
                            </template>
                        </v-card>
                    </v-col>
                </v-card>
            </v-col>
        </v-row>
        
        <v-row>
            <v-col cols = 12 md = 6>
                <v-card title = 'T7 RNA Polymerase integration' subtitle = 'Design' :variant = 'alpha.card.theme'>
                    <template v-slot:text>
                        <v-col>
                            <v-card :variant = 'alpha.subcard.theme' v-ripple>
                                <template v-slot:text>
                                    T7 RNA polymerase gene was PCR-amplified from E. coli BL21(DE3).
                                </template>
                            </v-card>
                        </v-col>
                        <v-col>
                            <v-card :variant = 'alpha.subcard.theme' v-ripple>
                                <template v-slot:text>
                                    A kanamycin resistance cassette was PCR-amplified from KEIO lacY::kan.
                                </template>
                            </v-card>
                        </v-col>
                        <v-col>
                            <v-card :variant = 'alpha.subcard.theme' v-ripple>
                                <template v-slot:text>
                                    To construct our T7 expression system, we first fused the T7 RNA polymerase (T7RNAP) gene with a kanamycin resistance marker (kanR) using overlapping PCR. This fusion fragment was then integrated into a Red(Cm) strain—provided by our advisor—via Red recombination. Next, we plan to transfer the T7RNAP-kanR cassette into E. coliMG1655 through P1 phage transduction, followed by λ phage infection to establish a lysogenic strain.
                                </template>
                            </v-card>
                        </v-col>
                    </template>
                </v-card>
            </v-col>

            <v-col cols = 12 md = 6>
                <v-card title = 'Cell lysis strategy' subtitle = 'Design' :variant = 'alpha.card.theme'>
                    <template v-slot:text>
                        <v-col>
                            <v-card :variant = 'alpha.subcard.theme' v-ripple>
                                <template v-slot:text>
                                    To ensure safe enzyme release, we integrated a λ prophage with a cI857 temperature-sensitive mutationinto all strains.
                                </template>
                            </v-card>
                        </v-col>
                        <v-col>
                            <v-card :variant = 'alpha.subcard.theme' v-ripple>
                                <template v-slot:text>
                                    At lower temperatures (e.g., 30°C), IPTG induction activates the lac promoter, driving T7RNAP expression, which in turn drives the expression of T7-promoter-controlled enzymes.
                                </template>
                            </v-card>
                        </v-col>
                        <v-col>
                            <v-card :variant = 'alpha.subcard.theme' v-ripple>
                                <template v-slot:text>
                                    At 37°C, the λcI857 system is activated, leading to cell lysis and the release of accumulated enzymes into the environment.
                                </template>
                            </v-card>
                        </v-col>
                    </template>
                </v-card>
            </v-col>
        </v-row>
    </v-col><v-col cols = 1 /></v-row>

    <v-row justify = end><v-col cols = 12 md = 8 class = 'pa-5'>
        <v-row><v-col>
            <v-card :variant = 'alpha.card.theme' class = scroller id = Build>
                <template v-slot:title>
                    <div class = text-center>
                        Build
                    </div>
                </template>
                <template v-slot:text>
                    In this phase, we designed primers and constructed plasmids using SnapGene. Our plasmids were engineered to express biofilm-disrupting enzymes and include an inducible suicide module for biosafety. Detailed plasmid maps and primer sequences are shown below.
                    <br><br>
                    Plasmid
                    <br>
                    Primer
                    <br><br>
                    This build phase provides the foundation for both enzyme production and controlled cell death, preparing our engineered strains for functional testing in the next stage.
                </template>
            </v-card>
        </v-col></v-row>
    </v-col><v-col cols = 1 /></v-row>

    <v-row justify = end><v-col cols = 12 md = 8 class = 'pa-5'>
        <v-row><v-col><v-card id = Test title = 'Test' class = 'text-center scroller' text = 'We plan to evaluate whether our system can effectively produce and release enzymes in a controllable manner, validating its potential for biofilm clearance applications.' :variant = 'alpha.card.theme' /></v-col></v-row>
        <v-row>
            <v-col cols = 12 md = 6>
                <v-card title = 'Enzyme expression testing' :variant = 'alpha.card.theme'>
                    <template v-slot:text>
                        <v-col>
                            <v-card :variant = 'alpha.subcard.theme' v-ripple>
                                <template v-slot:text>
                                    Expression of the three enzymes will be confirmed using SDS-PAGE .
                                </template>
                            </v-card>
                        </v-col>
                        <v-col>
                            <v-card :variant = 'alpha.subcard.theme' v-ripple>
                                <template v-slot:text>
                                    IPTG will be used to induce expression via lac and T7 promoters.
                                </template>
                            </v-card>
                        </v-col>
                    </template>
                </v-card>
            </v-col>
            <v-col cols = 12 md = 6>
                <v-card title = 'Lysis system validation' :variant = 'alpha.card.theme'>
                    <template v-slot:text>
                        <v-col>
                            <v-card :variant = 'alpha.subcard.theme' v-ripple>
                                <template v-slot:text>
                                    Strains will be grown at 30°C and shifted to 37°C to trigger the cI857 lysis mechanism.
                                </template>
                            </v-card>
                        </v-col>
                        <v-col>
                            <v-card :variant = 'alpha.subcard.theme' v-ripple>
                                <template v-slot:text>
                                    Cell lysis will be assessed visually and via optical density monitoring.
                                </template>
                            </v-card>
                        </v-col>
                    </template>
                </v-card>
            </v-col>
            <v-col cols = 12 md = 6>
                <v-card title = 'Extracellular enzyme release' :variant = 'alpha.card.theme'>
                    <template v-slot:text>
                        <v-col>
                            <v-card :variant = 'alpha.subcard.theme' v-ripple>
                                <template v-slot:text>
                                    Supernatants collected post-lysis will be tested for biofilm-degrading activity, verifying that enzymes are released into the medium.
                                </template>
                            </v-card>
                        </v-col>
                    </template>
                </v-card>
            </v-col>
        </v-row>
    </v-col><v-col cols = 1 /></v-row>

    <v-row justify = end><v-col cols = 12 md = 8 class = 'pa-5'>
        <v-row><v-col>
            <v-card title = 'Testing Area' color = grey>
                <template v-slot:text>
                    <v-card title = 'Card theme' variant = outlined>
                        <v-btn rounded = undefined v-for = 'i in alpha.card.f' :key = 'i' :color = 'alpha.card.theme == i ? `green` : undefined' @click = 'alpha.card.theme = i'> {{ i ? i : 'NORMAL' }} </v-btn>
                    </v-card>
                    <v-card title = 'Sub-Card theme' variant = outlined>
                        <v-btn rounded = undefined v-for = 'i in alpha.subcard.f' :key = 'i' :color = 'alpha.subcard.theme == i ? `green` : undefined' @click = 'alpha.subcard.theme = i'> {{ i ? i : 'NORMAL' }} </v-btn>
                    </v-card>
                </template>
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
            }
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