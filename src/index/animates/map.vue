<template>
    <div class = bs>
        <v-card class = 'bs align-content-center text-white' id = five align = middle justify = center min-height = 100vh>
            <template #image>
                <v-img src = img/Taiwan.jpg cover id = taiwan />
            </template>
            <template #text>
                <div :id = '$vuetify.display.mdAndUp ? `map_text` : undefined' class = 'align-content-center'>
<h3> Total knee arthroplasty </h3>
<p>
, or TKA, is one of the most common and effective surgeries in modern medicine.
</p>
<p>
As societies age, the demand for TKA continues to rise, offering hope to those who suffer from severe joint disease.
</p>

<p>
In 2019, the annual volume of primary TKA was 480,958
Between 2000 and 2019, the estimated annual volume 
of TKA increased by 156% on average.
</p>
<p>
By 2040, the number of TKA is projected to be 1,222,988
 (95% FI, 988,714 to 1,512,772). 
</p>
<p>
By 2060, the number of TKAs is projected to be 2,917,959
 (95% FI, 2,160,951 to 3,940,156).
</p>
<br>
<p class = 'text-grey'>
文獻:Projections and Epidemiology of Primary Hip and Knee Arthroplasty in Medicare Patients to 2040-2060
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
    name: 'world_map',
    data() {
        return {
            emphasize_color: 'orange'
        }
    },
    mounted() {
        M.AutoInit();
        animate('#map_text', {
            x: '-5rem',
            opacity: .1,
            reversed: true,
            autoplay: onScroll({
                enter: 'center+=200px top',
                leave: 'top center',
                sync: true
            })
        })
        animate('#taiwan', {
            reversed: true,
            autoplay: onScroll({
                enter: 'top top',
                leave: 'bottom-=100px bottom', 
                sync: true,
                onUpdate: (e) => {
                    console.log(e.progress)
                    console.log($('#taiwan').css);
                    $('#taiwan').css({
                        transform: `scale(${1 + e.progress})`
                    })
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
    opacity: 10%;
}
#map_text {
    position: absolute;
    /* opacity: 0.1; */
    top: 30%;
    left: 50vw;
}
/* #legs {
    filter: blur(50px);
} */
</style>