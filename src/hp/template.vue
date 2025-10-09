<template>
    <v-app>
    <page_loader :loading = 'loading' />
    <title_nav />
    
    <v-main>
    <sidenav name = '<name>' />
    <image_previewer />
    
    <v-row justify = end>
        <v-col cols = 12 md = 7 class = 'pa-5'>
            <v-card class = 'ma-3' v-if = 'data[0][0].text !== ``'>
                <template #text>
                    <template v-for = 'k in data[0]' :key = k>
                        <v-img class = 'preview cursor-help' v-if = 'k.type == `img`' :src = 'get_image(k.text)' />
                        <template v-else-if = 'k.type == `icon`'><br><br><v-icon> {{ k.text }} </v-icon></template>
                        <template v-else-if = 'k.type == `subicon`'><br>&nbsp;<v-icon> {{ k.text }} </v-icon></template>
                        <span v-html = 'k.text' v-else />
                    </template>
                </template>
            </v-card>
            <div v-for = 'i in data[1]' :key = i :id = 'tokenize(i.title)' class = scroller>
                <v-card class = 'ma-3'>
                    <template #title>
                        <div v-html = 'i.title' />
                    </template>
                    <template #text>
                        <div v-html = 'i.description.map((e) => e.text).join(``)' />
                    </template>
                </v-card>
                <template v-if = i.text>
                    <v-card v-for = 'j in i.text' :key = j class = 'ma-3 subtitle' :id = tokenize(j.title)>
                        <template #title>
                            <div v-html = 'j.title' />
                        </template>
                        <template #text>
                            <template v-for = 'k in j.description' :key = k>
                                <v-img class = 'preview cursor-help' v-if = 'k.type == `img`' :src = 'get_image(k.text)' />
                                <template v-else-if = 'k.type == `icon`'><br><br><v-icon> {{ k.text }} </v-icon></template>
                                <template v-else-if = 'k.type == `subicon`'><br>&nbsp;<v-icon> {{ k.text }} </v-icon></template>
                                <span v-html = 'k.text' v-else />
                            </template>
                        </template>

                        <v-row v-if = j.text>
                            <v-col>
                                <v-card v-for = 'k in j.text' :key = k variant = tonal class = 'ma-3'>
                                    <template #title>
                                        <div v-html = k.title />
                                    </template>
                                    <template #text>
                                        <template v-for = 'l in k.description' :key = l>
                                            <v-img class = 'preview cursor-help' v-if = 'l.type == `img`' :src = 'get_image(l.text)' />
                                            <template v-else-if = 'l.type == `icon`'><br><br><v-icon> {{ l.text }} </v-icon></template>
                                            <template v-else-if = 'l.type == `subicon`'><br>&nbsp;<v-icon> {{ l.text }} </v-icon></template>
                                            <span v-html = 'l.text' v-else />
                                        </template>
                                    </template>
                                    {{ k.text }}
                                </v-card>
                            </v-col>
                        </v-row>
                        <!-- {{ j.text }} -->
                    </v-card>
                </template>
            </div>
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
import image_previewer from '@/preview.vue'

export default {
    name: 'App',
    data() {
        return {
            loading: true,
            data: <data>
        }
    },
    components: {
        title_nav,
        page_loader,
        sidenav,
        site_footer,
        image_previewer
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
            while(x.indexOf('<b>') != -1) x = x.replace('<b>', '-');
            while(x.indexOf('</b>') != -1) x = x.replace('</b>', '-');
            while(x.indexOf('<i>') != -1) x = x.replace('<i>', '-');
            while(x.indexOf('</i>') != -1) x = x.replace('</i>', '-');
            while(x.indexOf('&') != -1) x = x.replace('&', 'and');
            if(x.indexOf('(') != -1) x = x.substr(0, x.indexOf('('));
            return x.toLowerCase();
        },
        get_image(x) {
            var token = this.tokenize('<name>');
            {/* return x; */}
            return `https://static.igem.wiki/teams/6003/hp/${token}/${x}.avif`;
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