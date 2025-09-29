<template>
    <div class = bs>
        <v-card class = 'bs' id = one align = start>
            <template #image>
                <video id = 'legs' src = 'assets/legs.mp4' control = false preload muted autoplay speed = '3'></video>
            </template>
            <div class = 'title'>
                <h3> In US </h3>
                <h1> 800, 000 </h1>
            </div>
            <div class = 'text-grey title'>
                <h5> Total knee Arthroplasty (TKA) </h5>
            </div>
        </v-card>
    </div>
</template>

<script>
 /* eslint-disable */ 
import $ from 'jquery'
import { animate, stagger, onScroll, text } from 'animejs';

export default {   
    name: 'legs',
    data() {
        return {
            test: 0
        }
    },
    mounted() {
        M.AutoInit();
        // animate(document.getElementById('legs'), {
        //     currentTime: 10,
        //     // loop: true,
        //     autoplay: onScroll({
        //         enter: 'bottom',
        //         leave: 'top',
        //         sync: 'inOutCirc',
        //         onUpdate: () => {
        //             this.test = document.getElementById('legs').currentTime
        //         }
        //     })
        // })
        animate('.title', {
            y: '80vh',
            autoplay: onScroll({
                enter: 'top+=100vh top',
                leave: 'top bottom',
                sync: 'inOutCirc'
            })
        })
    },
    methods: {
    }
}
</script>

<style scoped>
.bs {
    position: relative;
    height: 150vh;
    width: 100vw;
    margin-top: -100vh;
    /* z-index: -1; */
    /* backdrop-filter: blur(10px); */
}
.ct {
    /* position: absolute; */
    top: 50%;
    width: 100vw;
    /* text-align: center; */
}
</style>