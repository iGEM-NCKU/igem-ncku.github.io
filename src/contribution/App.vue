<template>
    <v-app>
    <page_loader :loading = 'loading' />
    <title_nav />
    
    <v-main>
    <sidenav name = 'Contribution' />
    <v-row justify = end><v-col cols = 12 md = 8 class = 'pa-5'>
        <v-row class = 'text-center scroller' id = 'Contribution'>
            <v-col>
                <v-img style="margin-bottom: -8%; margin-top: -7%;" src = "https://static.igem.wiki/teams/6003/title/20-5.avif"/>  
                <v-card :variant="alpha.card.theme" class="text-box pa-5 scroll-box">
                                <div
                                id="Contribution"
                                title="Contribution"
                                class="text-content"
                                style="color: gray;"
                                >
                                <p>Our contributions span wet-lab experimentation, software tool development, and human practices integration.</p>
                                <p>We aim to provide future iGEM teams with safer, more efficient, and more scalable biological solutions.</p>
                                </div>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols = 12 md = 6>
                <v-card title = '1. Experimental Contribution' subtitle = '' :variant = 'alpha.card.theme'>
                    <v-card-subtitle id = Discovery from the Red Recombination System class="subtitle" style="font-size: 24px;">Discovery from the Red Recombination System</v-card-subtitle>
                         <div
                        id="Contribution"
                        title="Contribution"
                        class="text-content"
                        >
                        <p><strong>Finding:</strong>
                        During our Red recombination–based phage integration experiments, we discovered that <strong>two bacteriophages cannot coexist stably within the same host cell</strong>. This incompatibility may arise from genetic interference or competition that affects host growth.</p>
                        <p><strong>Significance:</strong>
                        This finding highlights an important consideration for future teams designing <strong>multi-phage systems</strong> — ensuring genome stability and phage compatibility within the same bacterial chassis.</p>
                        </div>
                </v-card>
            </v-col>
             <v-col cols = 12 md = 6>
                <v-card title = '2. Multi-Enzymatic Biofilm Treatment Concept' subtitle = '' :variant = 'alpha.card.theme'>
                         <div
                        id="Contribution"
                        title="Contribution"
                        class="text-content"
                        >
                        <p><strong>Contribution:</strong>
                        We explored the concept of <strong>multi-enzymatic synergy</strong> in biofilm degradation, demonstrating that combinations of enzymes can have varying levels of cooperative effects when degrading complex, multilayered biofilms.</p>
                        <p><strong>Methodological Contribution:</strong>
                        We designed an experimental workflow that allows teams to test <strong>single-enzyme vs. multi-enzyme effects</strong> systematically. This modular approach encourages future teams to design biofilm-degrading systems that can be <strong>independently tested and optimized</strong>.</p>
                        <p><strong>Value for Future Teams:</strong>
                        Our results and workflow can be extended to other <strong>biofilm-related infections or industrial surface-cleaning applications</strong>, and provide a foundation for collecting multi-enzyme biofilm degradation datasets.
                       </p>
                        </div>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols = 12 md = 6>
                <v-card title = '3. Predictive Modeling for Multi-Enzyme Systems' subtitle = '' :variant = 'alpha.card.theme'>
                         <div
                        id="Contribution"
                        title="Contribution"
                        class="text-content"
                        >
                        <p><strong>Contribution:</strong>
                        We developed a preliminary <strong>predictive model</strong> for evaluating the degradation efficiency of enzyme combinations. The model integrates experimental parameters such as <strong>total enzyme volume (µL)</strong>, <strong>control OD600 values</strong>, and <strong>enzyme ratio profiles</strong>, serving as input features to predict synergistic outcomes.</p>
                        <p><strong>Impact:</strong>
                        This provides a starting point for a <strong>digital simulation platform</strong> that can reduce the need for excessive wet-lab experiments and guide teams toward optimal enzyme ratios.</p>
                        <p><strong>Future Extension:</strong>
                        The model can be adapted for multi-species biofilm systems or alternative enzymes targeting diverse microbial structures.</p>
                        </div>
                </v-card>
            </v-col>
             <v-col cols = 12 md = 6>
                <v-card title = '4. Computational Tool Improvement' subtitle = '' :variant = 'alpha.card.theme'>
                        <v-card-subtitle id = Discovery from the Red Recombination System class="subtitle" style="font-size: 24px;">Automated Grid Box Selection for AutoDock</v-card-subtitle>
                        <div
                        id="Contribution"
                        title="Contribution"
                        class="text-content"
                        >
                        <p><strong>Problem:</strong>
                        AutoDock molecular docking requires manual configuration of the <strong>grid box</strong>, which is time-consuming and error-prone for large-scale simulations—especially when structural data for some enzymes are limited.</p>
                        <p><strong>Our Contribution:</strong>
                        We developed an <strong>automated script</strong> that identifies protein active pockets and generates optimal grid box coordinates automatically. This significantly improves docking efficiency and reproducibility across batches.</p>
                        <p><strong>Application Value:</strong>
                        This tool can benefit future iGEM teams using AutoDock by enabling <strong>high-throughput molecular docking</strong> and reducing setup time.
                        </p>
                        </div>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols = 12 md = 6>
                <v-card title = '5. Novel Enzyme Design Pipeline' subtitle = '' :variant = 'alpha.card.theme'>
                         <div
                        id="Contribution"
                        title="Contribution"
                        class="text-content"
                        >
                        <p><strong>Concept:</strong>
                        We proposed a simplified <strong>enzyme design pipeline</strong> that integrates sequence alignment, structure modeling, and function prediction to facilitate the engineering of novel enzymes.</p>
                        <p><strong>Highlights:</strong></p>
                        <ul>
                        <li>Lowers the entry barrier for teams new to protein engineering.</li>
                        <li>Provides reusable and customizable <strong>scripts and workflows</strong> for future design projects.</li>
                        </ul>
                        <p><strong>Potential Applications:</strong>
                        The pipeline can be easily adapted for <strong>degradative enzymes, antimicrobial peptides, or enzyme optimization projects</strong> in various iGEM tracks.
                        </p>
                        </div>
                </v-card>
            </v-col>
             <v-col cols = 12 md = 6>
                <v-card title = '6. Integrated Human Practices (IHP) Contribution' subtitle = '' :variant = 'alpha.card.theme'>
                        <div
                        id="Contribution"
                        title="Contribution"
                        class="text-content"
                        >
                        <p><strong>Background:</strong>
                        Non-gastrointestinal bacterial therapies—such as those targeting <strong>joint, skin, or implant-surface infections</strong>—remain underexplored but highly relevant to clinical applications.
                        Our IHP efforts focused on identifying <strong>biosafety, regulatory, and translational challenges</strong> associated with live bacterial therapeutics, especially those intended for non-intestinal use.</p>
                        <p><strong>Our Actions:</strong>
                        We conducted interviews and consultations with a diverse group of stakeholders, including:</p>
                        <ul>
                        <li>Clinicians from multiple medical fields</li>
                        <li>Patients and caregivers</li>
                        <li>Technology transfer experts</li>
                        <li>Biomedical entrepreneurs</li>
                        <li>Bioengineering and biosafety scholars</li>
                        </ul>
                        <p>These discussions helped us shape our <strong>project mission</strong>, refine our <strong>safety framework</strong>, and connect scientific design with <strong>real-world medical perspectives</strong>.</p>
                        <p><strong>Key Contributions:</strong></p>
                        <ul>
                        <li>Raised awareness that even low-incidence infections (like PJI) involve complex, long-term treatment challenges for clinicians and patients.</li>
                        <li>Compiled <strong>cross-disciplinary insights</strong> on the practicality and ethical implications of live bacterial therapies.</li>
                        </ul>
                        </div>
                </v-card>
            </v-col>
        </v-row>
        <v-row class = 'text-center scroller' id = 'Conclusion'>
            <v-col>
                <v-card :variant="alpha.card.theme" class="text-box pa-5 scroll-box" id = Conclusion>
                                <v-card-title style="font-size: 32px;"><b>Conclusion</b></v-card-title>
                                <div
                                id="Conclusion"
                                title="Conclusion"
                                class="text-content"
                                >
                                <p>Through these contributions, our team hopes to inspire future iGEM projects to:</p>
                                <ul>
                                <li>Pursue <strong>multi-functional and modular system designs</strong>,</li>
                                <li>Incorporate <strong>computational foresight</strong> in wet-lab planning,</li>
                                <li>Develop <strong>tools that can be shared and reused</strong>, and</li>
                                <li>Engage deeply with the <strong>societal context</strong> of biotechnology.</li>
                                </ul>
                                </div>
                </v-card>
            </v-col>
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

</style>