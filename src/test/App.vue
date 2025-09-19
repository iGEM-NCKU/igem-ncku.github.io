<template>
  <page_loader :loading="loading" @click="loading = false" />
  <title_nav />

  <div>{{ q }}</div>

  <v-list>
    <v-list-group v-model:opened = "q" :value = q>
      <template #activator="{ props }">
        <v-list-item v-bind="props">
          <v-list-item-title>ouob</v-list-item-title>
        </v-list-item>
      </template>

      <v-list-item v-for="i in 100" :key="i">
        {{ i }}
      </v-list-item>
    </v-list-group>
  </v-list>

  <site_footer />
</template>

<script>
import $ from 'jquery'
import M from 'materialize-css'

import title_nav from '@/title.vue'
import page_loader from '@/loader.vue'
import site_footer from '@/footer.vue'

export default {
  name: 'App',
  components: {
    title_nav,
    page_loader,
    site_footer,
  },
  data() {
    return {
      q: true,       // Controls whether the list group is open
      loading: true,
      now: 0,
      p: undefined,
    }
  },
  mounted() {
    M.AutoInit()

    setInterval(() => {
      this.update()
    }, 100)

    setInterval(() => {
      this.q = !this.q  // Toggle list group open/close every second
    }, 1000)
  },
  methods: {
    title(x) {
      return x
        .replace('-', ' ')
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ')
    },
    check() {
      this.now++
    },
    update() {
      this.p = $('#t1').first().position()
    },
  },
}
</script>

<style>
* {
  transition: 1s all;
}
.blur {
  z-index: 10;
  background-color: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(5px);
  position: absolute;
}
a.unfocused,
a.unfocused:visited,
a.unfocused:hover,
a.unfocused:active {
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
