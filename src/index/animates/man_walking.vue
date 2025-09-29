<template>
    <div id = one>
        <v-card class = 'bs'>
            <template #image>
                <video id = 'man_walking' src = 'assets/a man walking.mp4' control = false preload muted loop autoplay></video>
            </template>
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
    name: 'man_walking',
    data() {
        return {
            ouob: true,
            dock_observer: {}
        }
    },
    mounted() {
        M.AutoInit();
        animate('#man_walking', {
            filter: "blur(50px)",
            autoplay: onScroll({
                container: '.scroll-container',
                enter: 'middle+=200px top',
                leave: 'bottom-=400 bottom',
                sync: 'inOutCirc',
            })
        });
        animate('#one', {
            autoplay: onScroll({
                enter: 'top bottom',
                leave: 'top-=50px bottom',
                sync: 'inOutCirc',
                onUpdate: self => {
                    console.log(self.progress);
                    $('#one').css({
                        opacity: 1 - self.progress
                    })
                }
            })
        });
        animate('#title_knee_new_life', {
            y: '20rem',
            color: '#FFFFFF',
            ease: 'linear',
            delay: stagger(100, { from: 'last' }),
            'text-decoration-thickness': '3px',
            autoplay: onScroll({
                container: '.scroll-container',
                enter: 'center+=200px top',
                leave: 'center bottom',
                sync: true
            })
        });
        animate('#not_always', {
            y: '5rem',
            ease: 'linear',
            delay: stagger(100, { from: 'last' }),
            opacity: 1,
            autoplay: onScroll({
                container: '.scroll-container',
                enter: 'center+=200px top',
                leave: 'center bottom',
                sync: true
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
    top: 30%;
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
#one {
    /* opacity: 0; */
    z-index: 1;
    position: relative;
}
.docked {
    z-index: 1000;
    width: 100%;
    text-align: center;
    top: 50vh;
    left: 0px;
}
#man_walking {
    height: 100vh;
    position: sticky;
    top: 0;
}
#one {
    position: sticky;
    top: 0;
}
</style>