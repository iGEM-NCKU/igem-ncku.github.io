<template>
    <page_loader :loading = 'loading' />
    <title_nav />
    
    <v-container>
        <v-row class = text-center>
            <v-col>
                <v-card title = 'Design'>
                    <template v-slot:text>
                        <p class = 'grey-text'>
                            To efficiently degrade biofilms, we designed a system that combines the expression of
                            three biofilm-degrading enzymes with a temperature-controlled cell lysis mechanism.
                        </p>
                    </template>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-card title = 'Three enzyme expression constructs' subtitle = 'Design'>
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

            <v-col>
                <v-card title = 'Host strain planning' subtitle = 'Design'>
                    <v-col>
                        <v-card variant = tonal v-ripple>
                            <template v-slot:text>
                                The Proteinase K plasmid is transformed into MG1655 λcI857, which carries a temperature-sensitive λ prophage system for heat-induced lysis.
                            </template>
                        </v-card>
                    </v-col>
                    <v-col>
                        <v-card variant = tonal v-ripple>
                            <template v-slot:text>
                                The Dispersin B and DNase I plasmids are introduced into MG1655 λcI857 ΔlacZ::T7RNAP-kan, since MG1655 does not naturally express T7 polymerase.
                            </template>
                        </v-card>
                    </v-col>
                </v-card>
            </v-col>
        </v-row>
        
        <v-row>
            <v-col>
                <v-card title = 'T7 RNA Polymerase integration' subtitle = 'Design'>
                    <template v-slot:text>
                        <v-col>
                            <v-card variant = tonal v-ripple>
                                <template v-slot:text>
                                    T7 RNA polymerase gene was PCR-amplified from E. coli BL21(DE3).
                                </template>
                            </v-card>
                        </v-col>
                        <v-col>
                            <v-card variant = tonal v-ripple>
                                <template v-slot:text>
                                    A kanamycin resistance cassette was PCR-amplified from KEIO lacY::kan.
                                </template>
                            </v-card>
                        </v-col>
                        <v-col>
                            <v-card variant = tonal v-ripple>
                                <template v-slot:text>
                                    To construct our T7 expression system, we first fused the T7 RNA polymerase (T7RNAP) gene with a kanamycin resistance marker (kanR) using overlapping PCR. This fusion fragment was then integrated into a Red(Cm) strain—provided by our advisor—via Red recombination. Next, we plan to transfer the T7RNAP-kanR cassette into E. coliMG1655 through P1 phage transduction, followed by λ phage infection to establish a lysogenic strain.
                                </template>
                            </v-card>
                        </v-col>
                    </template>
                </v-card>
            </v-col>

            <v-col>
                <v-card title = 'Cell lysis strategy' subtitle = 'Design'>
                    <template v-slot:text>
                        <v-col>
                            <v-card variant = tonal v-ripple>
                                <template v-slot:text>
                                    To ensure safe enzyme release, we integrated a λ prophage with a cI857 temperature-sensitive mutationinto all strains.
                                </template>
                            </v-card>
                        </v-col>
                        <v-col>
                            <v-card variant = tonal v-ripple>
                                <template v-slot:text>
                                    At lower temperatures (e.g., 30°C), IPTG induction activates the lac promoter, driving T7RNAP expression, which in turn drives the expression of T7-promoter-controlled enzymes.
                                </template>
                            </v-card>
                        </v-col>
                        <v-col>
                            <v-card variant = tonal v-ripple>
                                <template v-slot:text>
                                    At 37°C, the λcI857 system is activated, leading to cell lysis and the release of accumulated enzymes into the environment.
                                </template>
                            </v-card>
                        </v-col>
                    </template>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
    
</template>

<script>
 /* eslint-disable */ 
import $ from 'jquery'
import M from 'materialize-css'

import title_nav from '@/title.vue'
import page_loader from '@/loader.vue'

export default {
    name: 'App',
    data() {
        return {
            loading: true
        }
    },
    components: {
        title_nav,
        page_loader
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
body {
    background-color: wheat;
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