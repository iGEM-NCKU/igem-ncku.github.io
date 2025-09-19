<template>
    <page_loader :loading = 'loading' @click = 'loading = false' />
    <title_nav />

    {{ q }}

    <v-list>
        <v-list-group v-model:opened = q :active = true>
            <template #activator = '{props}'>
                <v-list-item v-bind = props active v-model:opened = q opened>
                    ouob
                </v-list-item>
            </template>
            <v-list-item v-for = 'i in 100' :key = i active>
                {{ i }}
            </v-list-item>
        </v-list-group>
    </v-list>
        
    <site_footer></site_footer>
</template>

<script>
 /* eslint-disable */ 
import $ from 'jquery'
import M from 'materialize-css'

import title_nav from '@/title.vue'
import page_loader from '@/loader.vue'
import site_footer from '@/footer.vue'

export default {
    name: 'App',
    data() {
        return {
            q: true,
            loading: true,
            now: 0,
            p: undefined
        }
    },
    components: {
        title_nav,
        page_loader,
        site_footer
    },
    mounted() {
        M.AutoInit();
        setInterval(() => {
            // console.log('1');
            this.update();
        }, 100);
    },
    methods: {
        title(x) {
            x = x.replace('-', ' ');
            var f = [];
            for(var i of x.split(' ')) {
                f.push(i[0].toUpperCase() + i.substr(1).toLowerCase());
            }
            return (f.join(' '));
        },
        check(e) {
            // console.log(e);
            this.now++;
        },
        update() {
            this.p = $('#t1').first().position();
            // console.log($('#t1').position());
        }
    }
}
</script>

<style>
* {
  transition: 1s all;
}
.blur {
  z-index: 10;
  background-color: rgba(255, 255, 255, .75);
  backdrop-filter: blur(5px);
  position: absolute;

}
a.unfocused, a.unfocused:visited, a.unfocused:hover, a.unfocused:active {
    color: inherit;
}
.rainbow {
    animation: rb 10s ease 0s 10000;
}
@keyframes rb {
    0% {
        color: red;
    }
    14% {
        color: orange;
    }
    28% {
        color: yellow;
    }
    43% {
        color: green;
    }
    57% {
        color: blue;
    }
    71% {
        color: blueviolet;
    }
    86% {
        color: purple;
    }
    100% {
        color: red;
    }
}
</style>