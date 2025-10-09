<template>
    <v-app>
    <page_loader :loading = 'loading' />
    <title_nav />
    
    <v-main>
    <sidenav name = 'notebook' />
    <v-row justify = end><v-col cols = 12 md = 8 class = 'pa-5'>
        <v-img style="margin-bottom: -10%; margin-top: -13%;" src = "https://static.igem.wiki/teams/6003/title/3.avif"/>
        <v-row class = 'text-center scroller' id = 'Notebook'>
        <v-expansion-panels class="my-4">
        <v-expansion-panel
            v-for="(item, i) in items"
            :key="i"
        >
        <template #title>
                  {{ item.title }}
                </template>
                <template #text>
                  <!-- 直接吃 HTML 內容 -->
                  <div class="panel-html" v-html="item.html"></div>
                </template>
        </v-expansion-panel>
        </v-expansion-panels>
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

import { notebookItems } from './notebook.js'


export default {
    name: 'App',
    data() {
        return {
            loading: true,
            items: notebookItems
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