/* eslint-disable */
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import $ from 'jquery';
window.$ = window.jQuery = $;

import { createApp } from 'vue'
import App from './App.vue'

import vuetify from '../plugins/vuetify'
import reveal from '../plugins/reveal'

createApp(App).use(vuetify).use(reveal).mount('#app')

