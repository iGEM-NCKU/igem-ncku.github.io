<template>
    <div class = 'bs align-content-center'>
        <v-card class = 'bs' id = two align = start>
            <template #image>
                <v-img src = 'https://static.igem.wiki/teams/6003/img/knee-pain.webp' cover id = knee />
            </template>
            <div id = knee_scale>
                <v-img src = 'https://static.igem.wiki/teams/6003/img/scale.webp' />
                <br>
                <b class = right> Periprosthetic Joint Infection (PJI) </b>
            </div>
        </v-card>
        <v-card style = 'z-index: 10' variant = plain class = 'text-center' id = 'two_text'>
            <!-- <template #title>
                ouob
            </template> -->
            <template #text>
                <v-card variant = text class = stext>
                    Although the incidence of PJI reported after TKA is in the range of 0.5-2%, the overall global burden is substantial
                    Once PJI occurs, its consequences can be catastrophic, causing significant impacts on society, families, and individuals.
                    <br>
                    Even the surgical methods are available to treat PJI, they not only cause invasive harm to patients but also cannot guarantee that the infection will not recur.
                </v-card>
                    
                <v-card variant = text>
                    <template #title>
                        In addition...
                    </template>
                    
                    <template #text>
                        <div style = 'font-size: 20px;'>
                            Repeated implantation can lead to bone loss, making the replacement of artificial joints increasingly difficult.
                            <br>
                            To enhance local treatment efficacy, systemic antibiotic concentrations are increased.
                            <br>
                            Extensive use of antibiotics increases the risk of antibiotic resistance.
                            <br>
                            Certain patients, such as those with diabetes, are difficult to treat through surgery.
                        </div>
                    </template>
                </v-card>
            </template>
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
        var n = window.innerHeight;
        var m = window.innerWidth;
        animate('#knee', {
            x: '-5rem',
            reversed: true,
            autoplay: onScroll({
                enter: 'center top',
                leave: 'top top',
                sync: true
            })
        })
        animate('#knee_scale', {
            opacity: 0,
            y: '-5rem',
            reversed: true,
            autoplay: onScroll({
                enter: `bottom center+=${n >> 1}`,
                leave: `bottom center+=${n}`,
                sync: true
            })
        })
        animate('#two', {
            filter: 'blur(20px)',
            autoplay: onScroll({
                enter: `bottom center+=${n * 1.5}`,
                leave: `bottom center+=${n << 1}`,
                sync: true,
                onUpdate: (e) => $('#two').css({transform: `scale(${1 + e.progress / 3})`})
            })
        })
        animate('#two_text', {
            filter: 'blur(5px)',
            opacity: 0,
            reversed: true,
            autoplay: onScroll({
                enter: `bottom center+=${n}`,
                leave: `bottom center+=${n << 1}`,
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
.legs_title {
    top: 200px;
}
#knee_scale {
    position: absolute;
    top: 30vh;
    left: 50vw;
    width: 40vw;
}
/* #legs {
    filter: blur(50px);
} */
</style>