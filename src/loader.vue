<template>
    <transition name = fade>
        <div class = 'screen center-align valign-wrapper' v-if = loading>
            <div class = center v-if = old>
                <div class = center-align>
                    <div class="preloader-wrapper big active">
                        <template v-for = 'i in [`blue`, `red`, `yellow`, `green`]' :key = 'i'>
                        <div class="spinner-layer" :class = '`spinner-${i}`'>
                            <div class="circle-clipper left">
                            <div class="circle"></div>
                            </div><div class="gap-patch">
                            <div class="circle"></div>
                            </div><div class="circle-clipper right">
                            <div class="circle"></div>
                            </div>
                        </div>
                        </template>
                    </div>
                    <br>
                    <b> 請稍等 </b>
                </div>
            </div>

            <div class = ct>
                <load v-if = '!rev & !old'></load>
                <loadrev v-if = 'rev & !old'></loadrev>
            </div>
        </div>
    </transition>
</template>

<script>
/* eslint-disable */
// import $ from 'jquery'
import M from 'materialize-css'

import load from '@/loader/load.vue'
import loadrev from '@/loader/loadrev.vue'

export default {
    name: 'page_loader',
    data() {
        return {
            show: false,
            old: false,
            rev: false,
            delayMs: 250,       // don't show unless load > 250ms
            minShowMs: 400,     // keep visible at least 400ms to avoid flicker
            _pendingTimer: null,
            _hideTimer: null,
            _revTimer: null,
            _visibleAt: 0,
            _revScheduled: false
        }
    },
    props: [
        'loading'
    ],
    components: {
        load,
        loadrev
    },
    mounted() {
        M.AutoInit();
        this.applyLoading(this.loading);
    },
    beforeUnmount() {
        if (this._revTimer) clearTimeout(this._revTimer)
        if (this._pendingTimer) clearTimeout(this._pendingTimer)
        if (this._hideTimer) clearTimeout(this._hideTimer)
    },
    watch: {
        loading(nv) { this.applyLoading(nv) },
        show(nv) {
            // Schedule a one-time animation variant switch if loading is long
            if (nv && !this._revScheduled) {
                this._revScheduled = true
                this.rev = false
                this._revTimer = setTimeout(() => { this.rev = true }, 1200)
            }
        }
    },
    methods: {
        applyLoading(start) {
            if (start) {
                if (this._hideTimer) { clearTimeout(this._hideTimer); this._hideTimer = null }
                if (this._pendingTimer) clearTimeout(this._pendingTimer)
                this._revScheduled = false
                this._pendingTimer = setTimeout(() => {
                    this.show = true
                    this._visibleAt = Date.now()
                }, this.delayMs)
            } else {
                // stop pending show
                if (this._pendingTimer) { clearTimeout(this._pendingTimer); this._pendingTimer = null }
                const elapsed = Date.now() - (this._visibleAt || Date.now())
                const wait = Math.max(0, this.minShowMs - elapsed)
                if (this.show) {
                    this._hideTimer = setTimeout(() => { this.show = false }, wait)
                } else {
                    this.show = false
                }
            }
        }
    }
}
</script>

<style>
* {
    transition: 0.5s all;
}
body {
    font-family: 'font', sans-serif;
    /* background-image: linear-gradient(to bottom, #49a06f, wheat); */
    background-color: #FBF7EF;
}
@font-face {
    font-family: 'font';
    src: url('../public/fonts/CreHappiness-B.ttf');
}
.screen {
  background-color: rgba(255, 255, 255, .75);
  z-index: 500;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  position: fixed;
  backdrop-filter: blur(50px);
}
.blur {
  z-index: 10;
  background-color: rgba(255, 255, 255, .75);
  backdrop-filter: blur(10px);
  position: absolute;
}
.center {
  position: fixed;
  left: calc(50% - 70px);
  transform: translateX(50%);
}
.ct {
  position: fixed;
  left: calc(50% - 700px);
  transform: translateX(50%);
}
.bold {
  font-weight: 700;
}
.ani {
    animation: loader 1s ease 0s 1;
    opacity: 0%;
}
@keyframes loader {
    0% {
        opacity: 0%;
    }
    100% {
        opacity: 100%;
    }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.fade-enter-to, .fade-leave-from {
  opacity: 1;
}

/* Warm spinner accent */
.preloader-wrapper.big .spinner-layer { border-color: var(--color-primary) !important; }
</style>
