<template>
    <v-app>
    <page_loader :loading = 'loading' />
    <title_nav />
    <sidenav name = 'DryLab' />
    
    <v-main>
    <v-row justify = end><v-col cols = 12 md = 8 class = 'pa-8'>
        <v-row class = 'text-center scroller' id = 'Model' data-title = 'Model'>
            <v-col>
                <v-card title = 'Model' variant = 'elevated' class = 'glass-card elevate' v-reveal>
                    <template v-slot:text>
                        <p class = 'text-muted'>
                            This is Model.
                        </p>
                        <div class = 'subsection' id = 'Model-Assumptions' data-title = 'Assumptions'>
                          <h3>Assumptions</h3>
                          <p>We assume steady-state kinetics for enzyme-mediated biofilm degradation and homogeneous distribution within the medium.</p>
                        </div>
                        <div class = 'subsection' id = 'Model-Parameters' data-title = 'Parameters'>
                          <h3>Parameters</h3>
                          <p>Key parameters include enzyme concentration, diffusion coefficient, and substrate availability.</p>
                        </div>
                    </template>
                </v-card>
            </v-col>
        </v-row>
        <v-row class = 'text-center scroller' id = 'Software' data-title = 'Software'>
            <v-col>
                <v-card title = 'Software' variant = 'elevated' class = 'glass-card elevate' v-reveal>
                    <template v-slot:text>
                        <p class = 'text-muted'>
                            This is Software.
                        </p>
                        <div class = 'subsection' id = 'Software-Stack' data-title = 'Tech Stack'>
                          <h3>Tech Stack</h3>
                          <p>Python for simulation, Vue + Vuetify for visualization, and CSV exports for analysis.</p>
                        </div>
                        <div class = 'subsection' id = 'Software-Outputs' data-title = 'Outputs'>
                          <h3>Outputs</h3>
                          <p>Generates time-series of biofilm thickness, enzyme utilization, and sensitivity analyses.</p>
                        </div>
                    </template>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols = 12 md = 6>
                <v-card title = 'Three enzyme expression constructs' subtitle = 'Design' variant = 'elevated' class = 'glass-card elevate' v-reveal>
                    <template v-slot:text>
                        <!-- <v-row> -->
                            <v-col>
                                <v-card title = 'Proteinase K + pTrc99A' color = 'primary' v-ripple class = 'glass-card elevate'>
                                    <template v-slot:text>
                                        driven by a lac promoter.
                                    </template>
                                </v-card>
                            </v-col>
                            
                            <v-col>
                                <v-card title = 'Dispersin B + pET28c' color = 'secondary' v-ripple class = 'glass-card elevate'>
                                    <template v-slot:text>
                                        driven by a T7 promoter.
                                    </template>
                                </v-card>
                            </v-col>

                            <v-col>
                                <v-card title = 'DNase I + pET28c' color = 'secondary' v-ripple class = 'glass-card elevate'>
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
                <v-card title = 'Host strain planning' subtitle = 'Design' variant = 'elevated' class = 'glass-card elevate' v-reveal>
                    <v-col>
                        <v-card variant = 'tonal' v-ripple>
                            <template v-slot:text>
                                The Proteinase K plasmid is transformed into MG1655 λcI857, which carries a temperature-sensitive λ prophage system for heat-induced lysis.
                            </template>
                        </v-card>
                    </v-col>
                    <v-col>
                        <v-card variant = 'tonal' v-ripple>
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
                <v-card title = 'T7 RNA Polymerase integration' subtitle = 'Design' variant = 'elevated' class = 'glass-card elevate' v-reveal>
                    <template v-slot:text>
                        <v-col>
                            <v-card variant = 'tonal' v-ripple>
                                <template v-slot:text>
                                    T7 RNA polymerase gene was PCR-amplified from E. coli BL21(DE3).
                                </template>
                            </v-card>
                        </v-col>
                        <v-col>
                            <v-card variant = 'tonal' v-ripple>
                                <template v-slot:text>
                                    A kanamycin resistance cassette was PCR-amplified from KEIO lacY::kan.
                                </template>
                            </v-card>
                        </v-col>
                        <v-col>
                            <v-card variant = 'tonal' v-ripple>
                                <template v-slot:text>
                                    To construct our T7 expression system, we first fused the T7 RNA polymerase (T7RNAP) gene with a kanamycin resistance marker (kanR) using overlapping PCR. This fusion fragment was then integrated into a Red(Cm) strain—provided by our advisor—via Red recombination. Next, we plan to transfer the T7RNAP-kanR cassette into E. coliMG1655 through P1 phage transduction, followed by λ phage infection to establish a lysogenic strain.
                                </template>
                            </v-card>
                        </v-col>
                    </template>
                </v-card>
            </v-col>

            <v-col cols = 12 md = 6>
                <v-card title = 'Cell lysis strategy' subtitle = 'Design' variant = 'elevated' class = 'glass-card elevate' v-reveal>
                    <template v-slot:text>
                        <v-col>
                            <v-card variant = 'tonal' v-ripple>
                                <template v-slot:text>
                                    To ensure safe enzyme release, we integrated a λ prophage with a cI857 temperature-sensitive mutationinto all strains.
                                </template>
                            </v-card>
                        </v-col>
                        <v-col>
                            <v-card variant = 'tonal' v-ripple>
                                <template v-slot:text>
                                    At lower temperatures (e.g., 30°C), IPTG induction activates the lac promoter, driving T7RNAP expression, which in turn drives the expression of T7-promoter-controlled enzymes.
                                </template>
                            </v-card>
                        </v-col>
                        <v-col>
                            <v-card variant = 'tonal' v-ripple>
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

    <v-row justify = end><v-col cols = 12 md = 8 class = 'pa-8'>
        <v-row><v-col>
            <v-card variant = 'elevated' class = 'scroller glass-card elevate' id = 'Build' v-reveal data-title = 'Build'>
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
                    <div class = 'subsection' id = 'Build-Overview' data-title = 'Overview'>
                      <h3>Overview</h3>
                      <p>High-level plan for plasmid construction, transformation, and verification via sequencing.</p>
                    </div>
                    <div class = 'subsection' id = 'Build-Primers' data-title = 'Primers'>
                      <h3>Primer Design</h3>
                      <p>Primer sets designed with melting temperature balancing and minimal dimer/hairpin formation.</p>
                    </div>
                    <div class = 'subsection' id = 'Build-Assembly' data-title = 'Assembly'>
                      <h3>Assembly Plan</h3>
                      <p>Gibson assembly with 20–40 bp overlaps; antibiotic selection followed by colony PCR.</p>
                    </div>
                </template>
            </v-card>
        </v-col></v-row>
    </v-col><v-col cols = 1 /></v-row>

    <v-row justify = end><v-col cols = 12 md = 8 class = 'pa-8'>
        <v-row><v-col><v-card id = Test title = 'Test' class = 'text-center glass-card elevate' text = 'We plan to evaluate whether our system can effectively produce and release enzymes in a controllable manner, validating its potential for biofilm clearance applications.' variant = 'elevated' /></v-col></v-row>
        <v-row>
            <v-col cols = 12 md = 6>
                <v-card title = 'Enzyme expression testing' variant = 'elevated' class = 'glass-card elevate'>
                    <template v-slot:text>
                        <v-col>
                            <v-card variant = 'tonal' v-ripple>
                                <template v-slot:text>
                                    Expression of the three enzymes will be confirmed using SDS-PAGE .
                                </template>
                            </v-card>
                        </v-col>
                        <v-col>
                            <v-card variant = 'tonal' v-ripple>
                                <template v-slot:text>
                                    IPTG will be used to induce expression via lac and T7 promoters.
                                </template>
                            </v-card>
                        </v-col>
                    </template>
                </v-card>
            </v-col>
            <v-col cols = 12 md = 6>
                <v-card title = 'Lysis system validation' variant = 'elevated' class = 'glass-card elevate'>
                    <template v-slot:text>
                        <v-col>
                            <v-card variant = 'tonal' v-ripple>
                                <template v-slot:text>
                                    Strains will be grown at 30°C and shifted to 37°C to trigger the cI857 lysis mechanism.
                                </template>
                            </v-card>
                        </v-col>
                        <v-col>
                            <v-card variant = 'tonal' v-ripple>
                                <template v-slot:text>
                                    Cell lysis will be assessed visually and via optical density monitoring.
                                </template>
                            </v-card>
                        </v-col>
                    </template>
                </v-card>
            </v-col>
            <v-col cols = 12 md = 6>
                <v-card title = 'Extracellular enzyme release' variant = 'elevated' class = 'glass-card elevate'>
                    <template v-slot:text>
                        <v-col>
                            <v-card variant = 'tonal' v-ripple>
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
    
    <site_footer />
    </v-main>
    </v-app>
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
</style>
