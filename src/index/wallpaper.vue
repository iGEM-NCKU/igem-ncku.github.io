<template>
    <div class = 'place_holder'>
        <logo />
    </div>
    <div class = 'place_holder'>
        <man_walking />
    </div>
    <div class = 'place_holder'>
        <legs />
    </div>
</template>

<script>
 /* eslint-disable */ 
import $ from 'jquery'
import { animate, stagger, onScroll, text } from 'animejs';

import logo from '@/index/animates/logo.vue';
import man_walking from '@/index/animates/man_walking.vue';
import legs from '@/index/animates/legs.vue';

export default {   
    name: 'home_wallpaper',
    components: {
        man_walking,
        legs,
        logo
    },
    mounted() {
        M.AutoInit();
    },
    methods: {
    }
}
</script>

<style scoped>
.place_holder {
    position: relative;
    height: 200vh;
    width: 100vw;
}
</style>