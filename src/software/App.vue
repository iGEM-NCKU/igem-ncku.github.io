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
                        <v-card :variant="alpha.card.theme" class="text-box pa-5 scroll-box scroller" id = 'Machine-Learning-Model'>
                                <v-card-title style="font-size: 24px;">Machine learning Model</v-card-title>
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

</style>