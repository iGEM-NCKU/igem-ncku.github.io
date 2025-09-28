<template>
    <div class = bs>
        <v-card class = 'bs' id = one>
            <div class = 'center-align valign-center bs'>
                <div for = one>
                    <h1 id = 'title_knee_new_life'> <b> A new knee, A new life ? </b> </h1>
                    <div class = 'scroll container'>
                        <h2 id = 'not_always'> Not always </h2>
                        {{ dock_observer.one }}
                    </div>
                </div>
            </div>
        </v-card>
    </div>
</template>

<script>
 /* eslint-disable */ 
import $ from 'jquery'
import { animate, stagger, onScroll, text } from 'animejs';

export default {   
    name: 'home_wallpaper',
    data() {
        return {
            ouob: true,
            dock_observer: {}
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
        animate('.dock', {
            autoplay: onScroll({
                container: '.scroll-container',
                enter: 'top topz',
                leave: 'bottom bottom',
                sync: 'inOutCirc',
                onEnter: (e) => {
                    this.dock_observer[e.target.id] = true;
                    console.log(`Enter - ${e.target.id}`)
                },
                onLeave: (e) => {
                    this.dock_observer[e.target.id] = false;
                    console.log(`Leave - ${e.target.id}`)
                }
            })
        })
        // addEventListener('scroll', () => {
        //     for(var i in this.dock_observer) {
        //         if(this.dock_observer[i] == true) {
        //             $(`div[for=${i}]`).css({
        //                 'background-color': 'red',
        //                 top: window.scrollY - $(`#${i}`).position().top
        //             }, 0)
        //         }
        //     }
        // })
    },
    methods: {
    }
}
</script>

<style scoped>
.bs {
    position: relative;
    height: 100vh;
    width: 100vw;
    /* backdrop-filter: blur(10px); */
}
.center-align {
    /* position: absolute; */
    top: 50%;
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
.docked {
    z-index: 1000;
    width: 100%;
    text-align: center;
    top: 50vh;
    left: 0px;
}
</style>