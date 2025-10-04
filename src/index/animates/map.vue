<template>
    <div class = bs>
        <v-card class = 'bs align-content-center text-white' id = five align = middle justify = center min-height = 100vh>
            <template #image>
                <v-img src = img/Taiwan.jpg cover />
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
/* #legs {
    filter: blur(50px);
} */
</style>