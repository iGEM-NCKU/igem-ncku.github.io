<template>
    <v-layout>
        <page_loader :loading = 'loading' @click = 'loading = false' />
        <title_nav />
<!-- 
        <v-app-bar variant = text scroll-behavior="collapse elevate fade-image" color = green>
            <template v-slot:prepend>
                <v-app-bar-nav-icon></v-app-bar-nav-icon>
                <v-app-bar-title> <a href = '.'> ByeFilm </a> </v-app-bar-title>
            </template>
            <template v-slot:append>
                <div class = text-center>
                    <v-menu open-on-hover>
                        <template v-slot:activator = '{props}'>
                            <v-btn v-bind = props> TEST </v-btn>
                        </template>
                        <v-list>
                            <v-list-item v-for = 'i in 10' :key = i :value = 'i'>
                                <v-list-item-title> {{ i }} </v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </div>
            </template>
        </v-app-bar> -->
        
        <v-row>
            <v-col cols = 2 style = 'position: fixed;' v-if = '$vuetify.display.mdAndUp' class = 'ma-5'>
                <br><br><br><br>
                <v-card :subtitle="i" v-for = 'i in 10' :key = i></v-card>
            </v-col>
        </v-row>
        <v-row justify = end>
            <v-col cols = 9 class = 'ma-5 pa-5'>
                <v-main>
            
                    <v-card>
                        <template v-slot:text>
                            <div class="text-center">
                                <v-menu
                                open-on-hover
                                >
                                <template v-slot:activator="{ props }">
                                    <v-btn
                                    color="primary"
                                    v-bind="props"
                                    >
                                    Dropdown
                                    </v-btn>
                                </template>

                                <v-list>
                                    <v-list-item
                                    v-for="(item, index) in [1,2,3,4,5]"
                                    :key="index"
                                    :value="index"
                                    >
                                    <v-list-item-title color = black>{{ item }}</v-list-item-title>
                                    </v-list-item>
                                </v-list>
                                </v-menu>
                            </div>
                        </template>
                    </v-card>
        
                    {{ p }}
        
                    <v-container v-scroll.self = 'check' class = 'overflow-y-auto' max-height = '400px'>
                        {{ now }}<br>
                        {{ p }}
                        <v-row>
                            <v-col cols = 12 v-for = 'i in 100' :key = 'i' :id = '`t${i}`'>
                                <v-card :title = '`Testing ${i}`' subtitle = 'ouob' :class = 'this?.p?.top < 0 ? `rainbow` : undefined' />
                            </v-col>
                        </v-row>
                    </v-container>
        
                    <v-card :title = i v-for = 'i in 100' :key = i v-ripple class = rainbow />
                </v-main>
            </v-col>
            <v-col cols = 1></v-col>
        </v-row>
    </v-layout>
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
            loading: true,
            now: 0,
            p: undefined
        }
    },
    components: {
        title_nav,
        page_loader
    },
    mounted() {
        M.AutoInit();
        setInterval(() => {
            // console.log('1');
            this.update();
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
        },
        check(e) {
            // console.log(e);
            this.now++;
        },
        update() {
            this.p = $('#t1').first().position();
            // console.log($('#t1').position());
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