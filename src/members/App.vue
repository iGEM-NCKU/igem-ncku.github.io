<template>
    <page_loader :loading = 'loading' />
    <title_nav />

    <v-container v-if = '!alpha.newview'>
        <v-row>
            <v-col v-for = 'i in members' :key = 'i' cols = 12 sm = 6 lg = 4>
                <v-hover>
                    <template v-slot:default = '{isHovering, props}'>
                        <v-card v-bind = 'props'
                            height = 500px
                            
                            :image = '`members_picture/${i}.jpg`'
                            :title = 'i'
                            :class = 'isHovering ? `dim` : undefined' v-ripple
                        >
                            <template v-slot:text v-if = 'isHovering'>
                                <b style = 'filter: none;' class = 'text'>
                                    一位隊員
                                </b>
                            </template>
                        </v-card>
                    </template>
                </v-hover>
            </v-col>
        </v-row>
    </v-container>
    
    <v-container v-else>
        <div justify = center>
            <v-row>
                <div v-for = 'i in members' :key = 'i'>
                    <v-hover>
                        <template v-slot:default = '{isHovering, props}'>
                            <v-col>
                                <v-card :title = 'i' subtitle = 'Members' :image = '`members_picture/${i}.jpg`' v-bind = 'props'>
                                    <v-img src = '' height = 500px cover :width = 'isHovering ? `500px` : undefined' />
                                </v-card>
                            </v-col>
                        </template>
                    </v-hover>
                </div>
            </v-row>
        </div>
    </v-container>

    <v-container>
        <v-row><v-col>
            <v-card title = 'Testing Area' color = 'grey'>
                <template v-slot:text>
                    <v-card subtitle = 'Enable new view of gallery' :color = 'alpha.newview ? `green` : undefined' v-ripple @click = 'alpha.newview ^= 1'>
                        <template v-slot:text>
                            <v-btn rounded = xl @click = 'alpha.newview ^= 1'> switch : {{ alpha.newview ? 'ON' : 'OFF' }} </v-btn>
                        </template>
                    </v-card>
                </template>
            </v-card>
        </v-col></v-row>
    </v-container>
</template>

<script>
 /* eslint-disable */ 
import $ from 'jquery'
import M from 'materialize-css'

import title_nav from '@/title.vue'
import page_loader from '@/loader.vue'
import { mdiAlphaA } from '@mdi/js'

export default {
    name: 'App',
    data() {
        return {
            loading: true,
            members: ['Aaron', 'Jerry', 'Johan', 'Kathleen', 'Kelly', 'Richie', 'Sue', 'Yin', 'ysh'],
            view: [],
            alpha: {
                newview: false
            }
        }
    },
    components: {
        title_nav,
        page_loader
    },
    mounted() {
        M.AutoInit();
        this.view = new Array(this.members.length);
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
.dim {
    filter: brightness(50%);
}
</style>