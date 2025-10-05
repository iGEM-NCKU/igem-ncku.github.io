<template>
    <div class = 'place_holder'>
        <logo />
    </div>
    <div class = 'place_holder'>
        <leaf />
    </div>
    <div class = 'place_holder_two'>
        <world_map />
    </div>
    <div class = 'place_holder'>
        <man_walking />
    </div>
    <div class = 'place_holder_two'>
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
import leaf from '@/index/animates/leaf.vue';
import world_map from '@/index/animates/map.vue';

export default {   
    name: 'home_wallpaper',
    components: {
        man_walking,
        legs,
        logo,
        leaf,
        world_map
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
.place_holder_two {
    position: relative;
    height: 400vh;
    width: 100vw;
}
</style>