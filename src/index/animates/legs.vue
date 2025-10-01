<template>
    <div class = bs>
        <v-card class = 'bs' id = two align = start>
            <template #image>
                <video id = 'legs' src = 'assets/legs.mp4' control = false preload muted autoplay loop></video>
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
        animate('#legs', {
            filter: "blur(0px)",
            autoplay: onScroll({
                enter: 'top+=200px top',
                leave: 'top top',
                sync: true
            })
        })
        animate('.title', {
            y: '50vh',
            autoplay: onScroll({
                enter: 'top top',
                leave: 'top bottom',
                sync: true
            })
        })
    },
    methods: {
    }
}
</script>

<style scoped>
.bs {
    position: sticky;
    height: 100vh;
    width: 100vw;
    top: 0;
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
#legs {
    filter: blur(50px);
}
</style>