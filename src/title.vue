<template>
    <v-progress-linear
        v-model = scroll.progress
        style = 'position:fixed; z-index: 100;'
        color = green
        buffer-color = 'green lighten-2'
        height = 5
        :buffer-value = scroll.progress_bottom
        buffer-opacity = .3
     />
    <navi class = 'block' @click = 'show_nav ^= 1' :class = 'show_nav ? `tmp` : ``'>
        <!-- {{ alpha }} -->
        <a href = 'index.html' class = 'unfocused'>
            <!-- <img src = 'logo.png' width = '10%' /> -->
            Bye<font color = green class = film_ani>film</font>
        </a>
        <i class = 'material-icons right'> apps </i>
        <div :style = 'show_nav ? `font-size: 20px` : `font-size: 0px`'>
            <div v-for = 'i in pre' :key = 'i'>
                <a :href = 'i'> {{ title(i) }} </a>
            </div>
        </div>
    </navi>

    <!-- <transition name = fade>
        <img src = 'https://igem.ncku.edu.tw/images/slide2.png' v-if = 'show_nav' class = 'title_img' />
    </transition> -->
    
    <br><br><br><br><br>
</template>

<script>
// import $ from 'jquery'
import M from 'materialize-css'

export default {
    name: 'title_nav',
    data() {
        return {
            pre: ['education', 'human-practices', 'members', 'wetlab', 'introduction-to-problems'],
            show_nav: false,
            scroll: {
                progress: 0,
                progress_bottom: 0,
                now: 0,
                length: 0,
                height: 0
            }
        }
    },
    mounted() {
        M.AutoInit();
        window.onscroll = this.update_scroll;
    },
    methods: {
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
            this.scroll.progress = this.scroll.now / this.scroll.length * 100;
            this.scroll.progress_bottom = (this.scroll.now + this.scroll.height) / this.scroll.length * 100;
        }
    }
}
</script>

<style scoped>
* {
    transition: all 1s;
}
.bold {
  font-weight: 700;
}
a.unfocused, a.unfocused:visited, a.unfocused:hover, a.unfocused:active {
    color: inherit;
}
.block {
    background-color: rgba(200, 255, 200, .5);
    text-decoration: none;
    color: black;
    transition: 1s all;
    /* display: flex; */
    padding: 10px;
    font-size: large;
    font-weight: 100;
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
.block:hover {
    background-color: rgba(0, 100, 50, .8);
    font-size: xx-large;
    backdrop-filter: blur(25px);
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
    background-color: rgba(0, 100, 0, .1);
    text-decoration: none;
    color: wheat;
    font-size: xx-large;
    transition: 1s all;
    font-weight: 900;
    backdrop-filter: blur(5px);
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
</style>