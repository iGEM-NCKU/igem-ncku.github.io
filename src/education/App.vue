<template>
    <v-app>
    <page_loader :loading = 'loading' />
    <title_nav />
    <sidenav name = 'Education' />
    
    <v-main>
    <v-row justify = end><v-col cols = 12 md = 8 class = 'pa-5'>
        <v-row class = text-center>
            <v-col>
                <v-card title = 'Education' subtitle = 'Educational stuff' id = Education class = scroller>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-card title = 'Games' subtitle = 'Education' id = Games class = scroller>
                    <template v-slot:text>
                        To make our project more accessible and engaging, we are developing an educational mini-game that helps players understand the core concepts of our synthetic biology strategy. Inspired by real lab experiments, the game lets players design their own “enzyme troops” to mimic the bio-tools we use to target biofilms. Players analyze bacterial “towers” (representing biofilms), identify their weaknesses, and deploy their enzyme troops strategically to break them down. By turning science into interactive gameplay, we aim to spark curiosity and make learning about biofilms and synthetic biology fun and memorable.
                        <br>
                        <v-img src = 'https://hackmd.io/_uploads/ryKJAsnUxx.png' />
                    </template>
                </v-card>
            </v-col>

            <v-col>
                <a href = 'https://www.instagram.com/igemncku/' target = '_blank'>
                    <v-card title = 'Instagram Reels' subtitle = 'Education' v-ripple id = 'Instagram Reels' class = scroller>
                        <template v-slot:text>
                            We also created short reels in Instagram to help people understand more about our project and how we manage to develop a solution to cure the desease.
                            <v-col>
                                <v-card variant = tonal class = rainbow>
                                    <template v-slot:text>
                                        Check our instagram page to view for more @igemncku
                                    </template>
                                </v-card>
                            </v-col>
                        </template>
                    </v-card>
                </a>
            </v-col>
        </v-row>
    </v-col><v-col cols = 1 /></v-row>
    </v-main>
    <site_footer />
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
.rainbow {
    animation: rb 10s ease 0s 10000;
}
@keyframes rb {
    0% {
        color: red;
    }
    14% {
        color: orange;
    }
    28% {
        color: yellow;
    }
    43% {
        color: green;
    }
    57% {
        color: blue;
    }
    71% {
        color: blueviolet;
    }
    86% {
        color: purple;
    }
    100% {
        color: red;
    }
}
</style>