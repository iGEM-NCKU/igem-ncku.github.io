<template>
    <div class = bs>
        <v-card class = 'bs align-content-center text-white' id = four align = middle justify = center min-height = 100vh>
            <template #image>
                <v-img id = 'promotion' src = 'img/Byefilm.jpg' cover />
            </template>
            <!-- <template #text>
                <iframe title="NCKU-Tainan: Byefilm – Breaking biofilms, empowering recovery (2025) - Project Promotion [English]"
                width="560"
                height="315"
                src="https://video.igem.org/videos/embed/sBDRwoa4gaBw365v6svKyc"
                frameborder="0"
                allowfullscreen=""
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms"></iframe>
            </template> -->

            <template #title>
                You've done the homepage part
            </template>
            <template #subtitle>
                Choose where to go...
            </template>
            <v-row justify = center>
                <v-col cols = 12 md = 5>
                    <v-hover>
                        <template #default = '{isHovering, props}'>
                            <v-card v-bind = props :color = 'isHovering ? `primary` : `red`' variant = tonal>
                                <v-icon> fa-solid fa-video fa-2xl fa-beat </v-icon>
                                <v-card-title>
                                    Promotion Video
                                </v-card-title>
                            </v-card>
                        </template>
                    </v-hover>
                </v-col>
                <v-col cols = 12 md = 5>
                    <v-hover>
                        <template #default = '{isHovering, props}'>
                            <v-card v-bind = props :color = 'isHovering ? `primary` : `orange`' variant = tonal>
                                <v-icon> fa-solid fa-book fa-2xl fa-beat </v-icon>
                                <v-card-title>
                                    Go to other pages
                                </v-card-title>
                            </v-card>
                        </template>
                    </v-hover>
                </v-col>
            </v-row>
        </v-card>
    </div>
</template>

<script>
 /* eslint-disable */ 
import $ from 'jquery'
import { animate, stagger, onScroll, text } from 'animejs';

export default {   
    name: 'leaf',
    data() {
        return {
            emphasize_color: 'orange'
        }
    },
    mounted() {
        M.AutoInit();
        // animate('#leaf', {
        //     filter: "blur(50px)",
        //     autoplay: onScroll({
        //         enter: 'center top',
        //         leave: 'top middle',
        //         sync: true,
        //         // debug: true
        //     })
        // })
        animate('#promotion', {
            filter: 'blur(50px)',
            autoplay: onScroll({
                enter: 'bottom center',
                leave: 'top center',
                sync: true,
                // debug: true
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
#leaf_text {
    color: white;
    font-size: x-large;
    opacity: 1;
    filter: unset;
}
#promotion {
    filter: blur(5px) brightness(-0.2);
}
/* #legs {
    filter: blur(50px);
} */
</style>