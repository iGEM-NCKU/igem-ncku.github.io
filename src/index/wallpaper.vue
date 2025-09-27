<template>
    <div class = bs>
        <v-card title = 這裡應該要有影片 class = bs>
            <div class = 'center-align valign-center bs'>
                <div class = start></div>
                <h1 id = 'title_knee_new_life'> <b> A new knee, A new life ? </b> </h1>
                <div class = 'scroll container'>
                    <h2 id = 'not_always'> Not always </h2>
                </div>
                <div class = end></div>
            </div>
        </v-card>
    </div>
</template>

<script>
 /* eslint-disable */ 
import $ from 'jquery'
import { animate, stagger, onScroll } from 'animejs';

export default {   
    name: 'home_wallpaper',
    data() {
        return {
            ouob: true
        }
    },
    mounted() {
        M.AutoInit();
        animate('#title_knee_new_life', {
            ease: 'linear',
            delay: stagger(100, { from: 'last' }),
            'text-decoration-thickness': '3px',
            autoplay: onScroll({
                container: '.scroll-container',
                enter: 'bottom-=300 topz',
                leave: 'bottom-=400 bottom',
                sync: 'inOutCirc'
            })
        });
        animate('#not_always', {
            y: '-3rem',
            ease: 'linear',
            delay: stagger(100, { from: 'last' }),
            opacity: 1,
            autoplay: onScroll({
                container: '.scroll-container',
                enter: 'bottom-=300 topz',
                leave: 'bottom-=400 bottom',
                sync: 'inOutCirc'
            })
        });
    },
    methods: {
    }
}
</script>

<style scoped>
.bs {
    position: relative;
    height: 200vh;
    width: 100vw;
    backdrop-filter: blur(10px);
}
.start {
    position: absolute;
    top: 25%;
    width: 10px;
    height: 10px;
    background-color: black;
}
.end {
    position: relative;
    bottom: 100%;
    width: 10px;
    height: 10px;
    background-color: black;
}
.center-align {
    position: absolute;
    top: 50vh;
    left: 0px;
    width: 100vw;
    text-align: center;
}
#title_knee_new_life {
    font-size: 75px;
    text-decoration: line-through;
    text-decoration-color: red;
    text-decoration-thickness: 0px;
}
#not_always {
    color: red;
    font-weight: 900;
    opacity: 0%;
}
</style>