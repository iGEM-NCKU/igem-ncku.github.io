<template>
    <div class = bs>
        <v-card class = 'bs align-content-center text-white' id = seven align = middle justify = center min-height = 100vh variant = text>
            <template #image>
                <v-img src = https://static.igem.wiki/teams/6003/img/team.webp cover id = 'seven_img' />
            </template>
            <template #text>
                <br><br>
                <v-row>
                    <v-col cols = 12 md = 4>
                        <v-hover>
                            <template #default = '{isHovering, props}'>
                                <v-card :color = 'isHovering ? `primary` : undefined' v-bind = props :min-height = '$vuetify.display.mdAndUp ? `70vh` : undefined' class = align-content-center :variant = '!isHovering ? `tonal` : `flat`' v-ripple>
                                    <template #text>
                                        <!-- <h1 v-if = '!isHovering' style = 'font-size: 100px;'> 1 </h1> -->
                                        <p :class = '$vuetify.display.mdAndUp ? `stext` : undefined'>
                                            To strengthen existing treatment methods and address the issue of high antibiotic resistance in biofilms, our team has proposed ByeFilm.
                                        </p>
                                    </template>
                                </v-card>
                            </template>
                        </v-hover>
                    </v-col>
                    <v-col cols = 12 md = 4>
                        <v-hover>
                            <template #default = '{isHovering, props}'>
                                <v-card :color = 'isHovering ? `primary` : undefined' v-bind = props :min-height = '$vuetify.display.mdAndUp ? `70vh` : undefined' class = align-content-center :variant = '!isHovering ? `tonal` : `flat`' v-ripple>
                                    <template #text>
                                        <!-- <h1 v-if = '!isHovering' style = 'font-size: 100px;'> 2 </h1> -->
                                        <p :class = '$vuetify.display.mdAndUp ? `stext` : undefined'>
                                        Our engineered <font :color = emphasize_color><i> E. coli </i></font> is equipped with three enzymes that degrade the major components of the biofilm produced by <i> Staphylococcus aureus </i>, the most common clinical pathogen causing PJI infections. These enzymes specifically target PNAG, proteins, and eDNA.
                                        <br>
                                        Since previous studies have failed to ensure efficient biofilm degradation due to the complexity of biofilm
                                        , we incorporated a machine learning model to predict and recommend the optimal enzyme production ratio according to clinical conditions in the future, aiming to provide the most effective biofilm-degrading composition through artificial intelligence.
                                        </p>
                                    </template>
                                </v-card>
                            </template>
                        </v-hover>
                    </v-col>
                    <v-col cols = 12 md = 4>
                        <v-hover>
                            <template #default = '{isHovering, props}'>
                                <v-card :color = 'isHovering ? `primary` : undefined' v-bind = props :min-height = '$vuetify.display.mdAndUp ? `70vh` : undefined' class = align-content-center :variant = '!isHovering ? `tonal` : `flat`' v-ripple>
                                    <template #text>
                                        <!-- <h1 v-if = '!isHovering' style = 'font-size: 100px;'> 3 </h1> -->
                                        <p :class = '$vuetify.display.mdAndUp ? `stext` : undefined'>
                                            We envision that biofilm-associated infections can be treated in the future using non-physical approaches, which will not only reduce reliance on antibiotics but also avoid prolonged and time-consuming hospitalization for patient observation.
                                        </p>
                                    </template>
                                </v-card>
                            </template>
                        </v-hover>
                    </v-col>
                </v-row>
                <v-col cols = 12 id = 'white_hover_hint'>
                    <v-card variant = plain color = grey-darken-3 style = 'font-size: 10px;'>
                        <v-icon> fa-solid fa-arrow-pointer </v-icon>
                        <b class = stext> Hover to view </b>
                        <br>
                        <v-img src = logo.png max-height = 7vh class = 'ma-2' />
                    </v-card>
                </v-col>
            </template>
        </v-card>
    </div>
</template>

<script>
 /* eslint-disable */ 
import $ from 'jquery'
import { animate, stagger, onScroll, text } from 'animejs';

export default {   
    name: 'white',
    data() {
        return {
            emphasize_color: 'orange'
        }
    },
    mounted() {
        M.AutoInit();

        animate('#seven_img', {
            filter: 'blur(50px)',
            autoplay: onScroll({
                enter: 'center top',
                leave: 'top top',
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
#white_hover_hint {
    position: sticky;
    z-index: 10;
    top: 90vh;
    left: 0px;
}
</style>