
<template>
    <v-app>
        <page_loader :loading = 'loading' />
        <title_nav />

        <v-main>
        <sidenav name = 'software' />
        <v-row justify = end><v-col cols = 12 md = 8 class = 'pa-5'>
            <!-- <v-row class = 'text-center scroller' id = 'Design'>
                <v-col>
                    <v-card title = 'Design' :variant = 'alpha.card.theme'>
                        <template v-slot:text>
                            <p class = 'grey-text'>
                                To efficiently degrade biofilms, we designed a system that combines the expression of
                                three biofilm-degrading enzymes with a temperature-controlled cell lysis mechanism.
                            </p>
                        </template>
                    </v-card>
                </v-col>
            </v-row> -->
            <v-container>
                <v-row>
                    <v-col cols="12">
                        <v-card class="d-flex justify-center wallpaper-card"
                            id ='wallpaper'>
                            <template v-slot:text>
                                <div class="wallpaper-text">
                                    A better way to create enzyme
                                </div>
                            </template>
                        </v-card>
                        <v-card :variant="alpha.card.theme" class="text-box pa-5 scroll-box">
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
                    </v-col>
                </v-row>
            </v-container>
        </v-col><v-col cols = 1 /></v-row>
        </v-main>
    </v-app>
    
    <site_footer></site_footer>
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
#wallpaper{
    background-image: url('https://static.igem.wiki/teams/6003/software/endzyme-logo.webp');
}
.wallpaper-card {
    height: 300px;
     background-color: transparent !important;
    box-shadow: none !important;
    background-position: center;     
    background-size: cover;            
    background-repeat: no-repeat;      
}

.wallpaper-text {
    position: absolute;
    top:260px;
    left:350px;           
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

</style>