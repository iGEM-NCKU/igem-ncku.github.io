<template>
    
    <navi class = 'block' @click = 'show_nav ^= 1' :class = 'show_nav ? `tmp` : ``'>
        <a href = 'index.html' class = 'unfocused' @mouseenter = "submit">
            <!-- <img src = 'logo.png' width = '10%' /> -->
            Bye<font color = 'green'>film</font>
        </a>
        <i class = 'material-icons right'> apps </i>
        <div :style = 'show_nav ? `font-size: 20px` : `font-size: 0px`'>
            <div v-for = 'i in pre' :key = 'i'>
                <a :href = 'i'> {{ title(i) }} </a>
            </div>
        </div>
    </navi>

    <img src = 'https://igem.ncku.edu.tw/images/slide2.png' v-if = 'show_nav' class = 'title_img' />
    
    <br><br><br><br><br>
</template>

<script>
// import $ from 'jquery'
import M from 'materialize-css'

export default {
    name: 'title_nav',
    data() {
        return {
            pre: ['attributions', 'education', 'engineering', 'experiments', 'human-practices', 'medal', 'members', 'model', 'results', 'software'],
            show_nav: false
        }
    },
    mounted() {
        M.AutoInit();
    },
    methods: {
        submit() {
            M.toast({html: 'submit'});
            return;
        },
        title(x) {
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
    width: calc(100vw - 30px * 2);
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
}
</style>