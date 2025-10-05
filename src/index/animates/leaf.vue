<template>
    <div class = bs>
        <v-card class = 'bs align-content-center text-white' id = four align = middle justify = center min-height = 100vh>
            <template #image>
                <v-img id = 'leaf' src = 'https://static.igem.wiki/teams/6003/img/cover.webp' cover />
            </template>
            <template #text>
                <div id = 'leaf_text'>
                    <h3>
                    Have you walked today?
                    </h3>
                    <p>
                    “In 2019, about <font :color = 'emphasize_color'> 528 million </font> people worldwide were living with osteoarthritis; an increase of 113% since 1990"
                    <br>
                    <b class = 'text-grey' style = 'font-size: smaller;'> World Health organization 2023 </b>
                    </p>
                    <br>
                    <p>
                    “With <font :color = 'emphasize_color'> ageing populations </font> and increasing rates of obesity and injury, the <font :color = 'emphasize_color'> prevalence of osteoarthritis </font> is expected to continue to increase globally.”
                    <br>
                    <b class = 'text-grey' style = 'font-size: smaller;'> World Health organization 2023 </b>
                    </p>
                </div>
            </template>
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
        animate('#leaf_text', {
            filter: "blur(10px)",
            opacity: 0,
            reversed: true,
            autoplay: onScroll({
                enter: 'bottom top',
                leave: 'center top',
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
/* #legs {
    filter: blur(50px);
} */
</style>