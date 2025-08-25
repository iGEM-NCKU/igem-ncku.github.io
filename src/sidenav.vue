<template>
    <div style = 'position: fixed' class = 'ma-5' v-if = '$vuetify.display.mdAndUp' >
        <!-- {{ scroller.now }} -->
        <v-hover>
            <template v-slot:default = '{isHovering, props}'>
                <v-card min-width = '20vw'>
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
                        <a :href = '`#${i}`' v-for = 'i, j in scroller.name' :key = 'i'>
                            <v-hover>
                                <template v-slot:default = '{isHovering, props}'>
                                    <v-card :text = 'i' :color = 'isHovering || j == this.scroller.now ? `orange` : undefined' :variant = 'j == this.scroller.now ? `outlined` : `tonal`' v-ripple v-bind = props />
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

export default {
    name: 'sidenav',
    data() {
        return {
            scroller: {
                now: -1,
                name: []
            }
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
            setInterval(() => {
                var overed = (x) => {
                    return $(`#${this.scroller.name[i]}`).position().top <= window.scrollY + 100;
                }
                var flag = false;
                for(var i in this.scroller.name) {
                    if(!overed(i)) {
                        this.scroller.now = (i - 1 < 0 ? 0 : i - 1);
                        flag = true;
                        break;
                    }
                }
                if(!flag) this.scroller.now = this.scroller.name.length - 1;
            }, 100);
        }
    }
}
</script>

<style>
</style>