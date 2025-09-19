<template>
    <v-progress-linear
        v-model = scroll.progress
        style = 'position:fixed; z-index: 100;'
        color = '#004733'
        buffer-color = 'green lighten-2'
        height = 5
        :buffer-value = scroll.progress_bottom
        buffer-opacity = .3
     />
     <v-card style = 'position: fixed; z-index: 1000;' :style = '`top: ${200 + 80 * k}px;`' v-for = 'i, j, k in scroll' :key = j>
        <template #title>
            <b> {{ j }} </b>
        </template>
        <template #subtitle>
            <b> {{ i }} </b>
        </template>
     </v-card>
    <navi class = 'block glass' @click = 'show_nav ^= 1' :class = 'show_nav ? `tmp` : ``'>
        <img src = icon.png height = 20px />
        <!-- {{ alpha }} -->
        <a href = 'index.html' class = 'unfocused stroke'>
            <!-- <img src = 'logo.png' width = '10%' /> -->
            Bye<font color = green class = film_ani>film</font>
        </a>
        <v-hover v-for = 'i, j in f' :key = i :value = j>
            <template #default = '{isHovering, props}'>
                <div v-bind = props class = right>
                    <div :id = '`title-button-${j}`' v-if = '!show_nav'>
                        <b> {{ j }} </b>&nbsp;&nbsp;
                    </div>
                    <v-card class = 'title_showcase' :id = '`title-${j}`' :style = 'isHovering ? undefined : `display: none;`'>
                        <template #title>
                            {{ j }}
                        </template>
                        <template #subtitle>
                            <v-btn v-for = 'subtitle in i' :key = subtitle :href = subtitle>
                                {{ title(subtitle) }}
                            </v-btn>
                        </template>
                    </v-card>
                </div>
            </template>
        </v-hover>

        <!-- <i class = 'material-icons right'> apps </i> -->
        <!-- <b class = right @mouseenter = show_subnav @mouseleave = hide_subnav id = menu> MENU </b> -->
        <div :style = 'show_nav ? `font-size: 40px;` : `font-size: 0px`'>
            <v-hover v-for = 'i, j in f' :key = 'i' :value = 'j'>
                <template v-slot:default = '{isHovering, props}'>
                    <div v-bind = props @click = undefined>
                        <!-- {{ k }} -->
                        <b> {{ j }} </b>
                        <!-- <a :href = 'i' style = 'color: white; '> {{ title(i) }} </a> -->
                        <div v-if = 'isHovering && show_nav'>
                            <div v-for = 'url in i' :key = 'url' style = 'padding-left: 30px; font-size: medium'>
                                <a :href = url style = 'color: white;'> {{ title(url) }} </a>
                            </div>
                        </div>
                    </div>
                </template>
            </v-hover>
        </div>
    </navi>

    <!-- <div class = subnav>
            <a href = '#'> <b class = right> Link 1 </b> </a><br>
            <a href = '#'> <b class = right> Link 2 </b> </a>
    </div> -->

    <!-- <transition name = fade>
        <img src = 'https://igem.ncku.edu.tw/images/slide2.png' v-if = 'show_nav' class = 'title_img' />
    </transition> -->
    
    <br><br><br><br><br>
</template>

<script>
import $ from 'jquery'
import M from 'materialize-css'

export default {
    name: 'title_nav',
    data() {
        return {
            pre: ['education', 'integrated-human-practices', 'members', 'wetlab', 'introduction-to-problems', 'software', 'model', ],
            f: {
                'Team': ['attributions', 'members'],
                'Project': ['description', 'engineering', 'experiments', 'notebook', 'results'],
                'Labs': ['drylab', 'wetlab', 'integrated-human-practices'],
            },
            show_nav: false,
            scroll: {
                progress: 0,
                progress_bottom: 0,
                now: 0,
                length: 0,
                height: 0
            },
            hide: []
        }
    },
    mounted() {
        M.AutoInit();
        window.addEventListener('scroll', this.update_scroll);
        this.hide = new Array(this.f.length);
        this.init_subnav();
    },
    methods: {
        init_subnav() {
            for(var i in this.f) {
                let j = this.f[i];j;
                console.log(`#title-button-${i}`);
                console.log($(`#title-button-${i}`).first().position().left);
                $(`#title-${i}`).css({
                    right: window.innerWidth - ($(`#title-button-${i}`).first().position().left + $(`#title-button-${i}`).first().innerWidth())
                });
            }
        },
        title(x) {
            while(x.indexOf('-') != -1) x = x.replace('-', ' ');
            var f = [];
            for(var i of x.split(' ')) {
                f.push(i[0].toUpperCase() + i.substr(1).toLowerCase());
            }
            return (f.join(' '));
        },
        update_scroll() {
            this.scroll.length = document.body.clientHeight;
            this.scroll.height = window.innerHeight;
            this.scroll.now = window.scrollY;
            this.scroll.progress = this.scroll.now / this.scroll.length * 100 + this.scroll.height * this.scroll.now / ((this.scroll.length - this.scroll.height) * this.scroll.length) * 100;
            // this.scroll.progress_bottom = (this.scroll.now + this.scroll.height) / this.scroll.length * 100;
        },
        show_subnav() {
            var now = ($('#menu').first().position());
            var x = now.top;
            var y = now.left;
            x += ($('#menu').first().height());
            console.log(`${x} ${y}`);
            $('.subnav').first().css({top: x, left: y, 'z-index': 1000});
            $('.subnav').show();
        },
        hide_subnav() {
            $('.subnav').hide();
        }
    }
}
</script>

<style scoped>
* {
    transition: all 0.3s;
}
.bold {
  font-weight: 700;
}
a.unfocused, a.unfocused:visited, a.unfocused:hover, a.unfocused:active {
    color: inherit;
}
.block {
    background-color: rgba(255, 255, 255, .7);
    text-decoration: none;
    color: black;
    transition: 1s all;
    /* display: flex; */
    padding: 10px;
    font-size: large;
    font-weight: 900;
    backdrop-filter: blur(25px);
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 100;
    width: calc(100vw - 15px * 2);
    border-radius: 10px;
    margin: 15px;
    padding: 15px;
}
v-btn:hover {
    text-align: center;
}
@keyframes test {
    25% {
        left: calc(50vw - 100px);
        height: 200px;
        width: 200px;
        border-radius: 100%;
        font-size: 0px;
    }
    50% {
        top: calc(50vh - 100px);
    }
    100% {
        top: 0px;
        left: 0px;
        width: 100vw;
        height: 100vh;
        border-radius: 0px;
        font-size: normal;
        /* opacity: 70%; */
    }
}
.tmp {
    /* animation-name: test;
    animation-fill-mode: backwards;
    animation-duration: 2s; */
    /* animation: test 2s ease 0s 1 alternate backwards; */

    width: 100vw;
    height: 100vh;
    border-radius: 0px;
    margin: 0px;
    padding: 20px;
    background-color: rgba(150, 150, 150, .3);
    text-decoration: none;
    font-weight: 900;
    backdrop-filter: blur(50px);
}
navi>a:hover {
    height: 100%;
    background-color: grey;
    border-radius: 10px;
}
.title_img {
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 10;
}
.subnav {
    position: fixed;
    top: 500px;
    background-color: grey;
    border-radius: 10px;
    padding: 10px;
    /* filter: blur(10px); */
    opacity: 70%;
}

.film_ani {
    animation: film 5s ease 0s;
}
@keyframes film {
    0% {
        color: orange;
    }
    25% {
        color: red;
    }
    50% {
        color: blue;
    }
    75% {
        color: green;
    }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.fade-enter-to, .fade-leave-from {
  opacity: 1;
}


.stroke {
    /* -webkit-text-stroke: .5px #efe4d1; */
    /* text-stroke: 1.5px #efe4d1; */
    text-shadow:
        -1px -1px 0 #fff,
        1px -1px 0 #fff,
        -1px 1px 0 #fff,
        1px 1px 0 #fff;
}
.title_showcase {
    position: fixed;
    /* top: 10px;
    left: 50px; */
    /* right: 1200px; */
    background-color: rgba(255, 255, 255, .75);
    backdrop-filter: blur(10px);
    z-index: 100;
}
</style>
