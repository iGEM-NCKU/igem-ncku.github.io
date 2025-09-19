<template>
    <div style = 'position: fixed' class = 'ma-5' v-if = '$vuetify.display.mdAndUp' >
        <!-- {{ scroller.now }} -->
          <!-- <b class = stroke>1</b> -->
        <v-hover>
            <template v-slot:default = '{isHovering, props}'>
                <v-card min-width = '20vw' prepend-avatar = icon.png>
                    <template v-slot:title>
                        <div v-bind = props>
                            <!-- {{ isHovering ? `< Back` : `Navigation` }} -->
                            <a href = '.' v-text = '`< Back`' v-if = isHovering></a>
                            <b v-else> Navigation </b>
                        </div>
                    </template>
                    <template v-slot:subtitle>
                        <a href = '.' v-if = isHovering> Click to return to Homepage </a>
                        <b v-else> {{ name }} </b>
                    </template>
                    <template v-slot:text>
                        <a @click = 'goto(`#${i}`)' v-for = 'i, j in scroller.name' :key = 'i'>
                            <v-hover>
                                <template v-slot:default = '{isHovering, props}'>
                                    <v-card :color = 'isHovering || j == this.scroller.now ? `orange` : undefined' :variant = 'j == this.scroller.now ? `outlined` : `tonal`' v-ripple v-bind = props>
                                        <template v-slot:text>
                                            <b class = 'stroke'> {{ i }} </b>
                                        </template>
                                    </v-card>
                                </template>
                            </v-hover>
                        </a>
                    </template>
                </v-card>
            </template>
        </v-hover>
    </div>
</template>

<script>
 /* eslint-disable */ 
import $ from 'jquery'
import M from 'materialize-css'

import { useGoTo } from 'vuetify/lib/composables/goto'

export default {
    name: 'sidenav',
    data() {
        return {
            scroller: {
                now: -1,
                name: []
            },
            goTo: useGoTo()
        }
    },
    props: {
        name: ''
    },
    mounted() {
        M.AutoInit();
        this.scroller.name = $('.scroller');

        this.init_scroller();
    },
    methods: {
        init_scroller() {
            this.scroller.name = ($('.scroller').map(function(index) {
                return this.id;
            }).get());
            console.log(this.scroller.name);
            window.onscroll = (() => {
                var overed = (x) => {
                    return $(`#${this.scroller.name[i]}`)?.position()?.top <= window.scrollY + 100;
                }
                var flag = false;
                for(var i in this.scroller.name) {
                    console.log(i);
                    if(!overed(i)) {
                        this.scroller.now = (i - 1 < 0 ? 0 : i - 1);
                        flag = true;
                        break;
                    }
                }
                if(!flag) this.scroller.now = this.scroller.name.length - 1;
            });
        },
        goto(x) {
            // M.toast({html: `going to ${x}`, classes: 'amber rounded'});
            this.goTo(x, {
                container: 'html',
                duration: 300,
                easing: 'easeInOutCubic',
                offset: -100
            });
        }
    }
}
</script>

<style scoped>
.stroke {
    /* -webkit-text-stroke: .5px #efe4d1; */
    /* text-stroke: 1.5px #efe4d1; */
    text-shadow:
        -1px -1px 0 #fff,
        1px -1px 0 #fff,
        -1px 1px 0 #fff,
        1px 1px 0 #fff;
}
</style>