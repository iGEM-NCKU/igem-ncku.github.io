<template>
    <div class = bs>
        <v-card class = 'bs' id = two align = center justify = middle min-height="100vh">
            <v-img src = 'logo.svg' id = logo max-height = 50vh />
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
                enter: 'top top',
                leave: 'top-=200px top',
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
#two {
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 50%;
}
</style>