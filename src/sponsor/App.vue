<template>
    <v-app>
    <page_loader :loading = 'loading' />
    <title_nav />
    
    <v-main>
    <sidenav name = 'Sponsor' />
    <v-row justify = end><v-col cols = 12 md = 8 class = 'pa-5'>
        
        <v-row>
            <v-col cols = 12 md = 3>
                <v-card >
                         <div
                        id="Contribution"
                        title="Contribution"                      
                        >
                        <v-img class = "preview mx-auto" 
                                :max-width= "800"
                                src = " https://static.igem.wiki/teams/6003/logo/national-cheng-kung-university-logo.webp"/>
                                </div>                      
                </v-card>
            </v-col>
             <v-col cols = 12 md = 9>
                <v-card title = 'NCKU' subtitle = '' :variant = 'alpha.card.theme'>
                         <div
                        id="Sponsor"
                        title="Sponsor"
                        class="text-content"
                        text-align = 'start'
                        >
                        <p><strong>Contribution:</strong>
                        We explored the concept of <strong>multi-enzymatic synergy</strong> in biofilm degradation, demonstrating that combinations of enzymes can have varying levels of cooperative effects when degrading complex, multilayered biofilms.</p>
                        <p><strong>Methodological Contribution:</strong>
                        We designed an experimental workflow that allows teams to test <strong>single-enzyme vs. multi-enzyme effects</strong> systematically. This modular approach encourages future teams to design biofilm-degrading systems that can be <strong>independently tested and optimized</strong>.</p>
                        
                       
                        </div>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols = 12 md = 3>
                <v-card >
                         <div
                        id="Contribution"
                        title="Contribution"                      
                        >
                        <v-img class = "preview mx-auto" 
                                :max-width= "800"
                                src = " https://static.igem.wiki/teams/6003/logo/national-cheng-kung-university-logo.webp"/>
                                </div>                      
                </v-card>
            </v-col>
             <v-col cols = 12 md = 9>
                <v-card title = 'NCKU' subtitle = '' :variant = 'alpha.card.theme'>
                         <div
                        id="Sponsor"
                        title="Sponsor"
                        class="text-content"
                        text-align = 'start'
                        >
                        <p><strong>Contribution:</strong>
                        We explored the concept of <strong>multi-enzymatic synergy</strong> in biofilm degradation, demonstrating that combinations of enzymes can have varying levels of cooperative effects when degrading complex, multilayered biofilms.</p>
                        <p><strong>Methodological Contribution:</strong>
                        We designed an experimental workflow that allows teams to test <strong>single-enzyme vs. multi-enzyme effects</strong> systematically. This modular approach encourages future teams to design biofilm-degrading systems that can be <strong>independently tested and optimized</strong>.</p>
                        
                       
                        </div>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols = 12 md = 3>
                <v-card >
                         <div
                        id="Contribution"
                        title="Contribution"                      
                        >
                        <v-img class = "preview mx-auto" 
                                :max-width= "800"
                                src = " https://static.igem.wiki/teams/6003/logo/national-cheng-kung-university-logo.webp"/>
                                </div>                      
                </v-card>
            </v-col>
             <v-col cols = 12 md = 9>
                <v-card title = 'NCKU' subtitle = '' :variant = 'alpha.card.theme'>
                         <div
                        id="Sponsor"
                        title="Sponsor"
                        class="text-content"
                        text-align = 'start'
                        >
                        <p><strong>Contribution:</strong>
                        We explored the concept of <strong>multi-enzymatic synergy</strong> in biofilm degradation, demonstrating that combinations of enzymes can have varying levels of cooperative effects when degrading complex, multilayered biofilms.</p>
                        <p><strong>Methodological Contribution:</strong>
                        We designed an experimental workflow that allows teams to test <strong>single-enzyme vs. multi-enzyme effects</strong> systematically. This modular approach encourages future teams to design biofilm-degrading systems that can be <strong>independently tested and optimized</strong>.</p>
                        
                       
                        </div>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols = 12 md = 3>
                <v-card >
                         <div
                        id="Contribution"
                        title="Contribution"                      
                        >
                        <v-img class = "preview mx-auto" 
                                :max-width= "800"
                                src = " https://static.igem.wiki/teams/6003/logo/national-cheng-kung-university-logo.webp"/>
                                </div>                      
                </v-card>
            </v-col>
             <v-col cols = 12 md = 9>
                <v-card title = 'NCKU' subtitle = '' :variant = 'alpha.card.theme'>
                         <div
                        id="Sponsor"
                        title="Sponsor"
                        class="text-content"
                        text-align = 'start'
                        >
                        <p><strong>Contribution:</strong>
                        We explored the concept of <strong>multi-enzymatic synergy</strong> in biofilm degradation, demonstrating that combinations of enzymes can have varying levels of cooperative effects when degrading complex, multilayered biofilms.</p>
                        <p><strong>Methodological Contribution:</strong>
                        We designed an experimental workflow that allows teams to test <strong>single-enzyme vs. multi-enzyme effects</strong> systematically. This modular approach encourages future teams to design biofilm-degrading systems that can be <strong>independently tested and optimized</strong>.</p>
                        
                       
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