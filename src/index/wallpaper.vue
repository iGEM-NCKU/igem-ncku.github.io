<template>
    <man_walking />
    <legs />
</template>

<script>
 /* eslint-disable */ 
import $ from 'jquery'
import { animate, stagger, onScroll, text } from 'animejs';

import man_walking from '@/index/animates/man_walking.vue';
import legs from '@/index/animates/legs.vue';

export default {   
    name: 'home_wallpaper',
    components: {
        man_walking,
        legs
    },
    mounted() {
        M.AutoInit();
    },
    methods: {
    }
}
</script>

<style scoped>
</style>