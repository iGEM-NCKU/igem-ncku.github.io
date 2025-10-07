<template>
    <v-app>
    <page_loader :loading = 'loading' />
    <title_nav />
    
    <v-main>
    <sidenav name = 'Overview' />
    
    <v-row justify = end>
        <v-col cols = 12 md = 7 class = 'pa-5'>
            <v-card class = 'ma-3 scroller' title = 'Storyline' subtitle = 'Pre-Project Exploration — From Multiple Ideas to One Feasible Path' id = 'Pre-Project-Exploration'>
                <hp_timeline />
            </v-card>
            <v-card class = 'ma-3 scroller' title = 'Storyline' subtitle = 'From Exploration to Reflection — How We Shaped Byefilm' id = 'From-Exploration-to-Reflection'>
                <hp_long />
            </v-card>
        </v-col><v-col cols = 1 /></v-row>
    </v-main></v-app>
    
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

import hp_timeline from '@/hp/timeline.vue'
import hp_long from '@/hp/long.vue'

export default {
    name: 'App',
    data() {
        return {
            loading: true,
            data: undefined
        }
    },
    components: {
        title_nav,
        page_loader,
        sidenav,
        site_footer,
        hp_timeline,
        hp_long
    },
    mounted() {
        M.AutoInit();
        setTimeout(() => {
            this.loading = false;
        }, 100);
    },
    methods: {
        tokenize(x) {
            while(x.indexOf(' ') != -1) x = x.replace(' ', '-');
            return x;
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