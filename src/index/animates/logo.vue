<template>
    <div class = bs>
        <v-card class = 'bs' id = zero align = center justify = middle min-height="100vh">
            <v-img src = 'https://static.igem.wiki/teams/6003/logo/banner.webp' id = logo max-height = 50vh />
        </v-card>
        <v-img src = 'https://static.igem.wiki/teams/6003/img/cute.webp' id = cute @click = cute />
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
        animate('#logo', {
            // transform: 'scale(0.1)',
            y: '-3rem',
            opacity: 0.5,
            autoplay: onScroll({
                enter: 'top top',
                leave: 'top bottom',
                sync: true
            })
        })
        animate('#cute', {
            y: '-10rem',
            opacity: 0.3,
            autoplay: onScroll({
                enter: 'center top',
                leave: 'top bottom',
                sync: true
            })
        })
        animate('#cute', {
            x: [
                {to: '5rem', duration: 1000},
                {to: 0, duration: 500}
            ],
            loop: true
        })
    },
    methods: {
        cute() {
            animate('#cute', {
                // x: [
                //     {to: '-100rem', duration: 1000},
                //     {to: '0', duration: 1000}
                // ],
                y: [
                    {to: '-25rem', duration: 500},
                    // {to: '100rem', duration: 1000},
                    {to: 0, duration: 500}
                ],
                rotate: '1turn'
            })
        }
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
#zero {
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 50%;
    background: linear-gradient(#B0DC91, #FBF7EF);
}
#cute {
    position: fixed;
    top: 40vh;
    left: 70vw;
    width: 100px;
    z-index: 1;
}
</style>