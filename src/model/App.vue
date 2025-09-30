<template>
  <v-app>
    <page_loader :loading="loading" />
    <title_nav />

    <v-main>
      <v-container>
        <v-hover>
          <template #default = '{isHovering, props}'>
            <a href = 'https://johan-susilo.github.io/biofilm-ml-model/' target = '_blank'>
              <v-card v-bind = props :color = 'isHovering ? `primary` : undefined' v-ripple :variant = 'isHovering ? undefined : `tonal`' :class = 'isHovering ? undefined : `rainbow`'>
                <template #title>
                  <b> Byefilm Prediction Tool </b>
                </template>
                <template #subtitle>
                  ML-model
                </template>
                <template #text>
                  We have served out model on a website, Here you can see how it works.
                </template>
                <template #prepend>
                  <v-icon> fa-solid fa-server </v-icon>
                </template>
              </v-card>
            </a>
          </template>
        </v-hover>
      </v-container>
    </v-main>

    <site_footer />
  </v-app>
</template>

<script>
/* eslint-disable */
import title_nav from '@/title.vue'
import page_loader from '@/loader.vue'
import site_footer from '@/footer.vue'
import '../styles/ml-model.css'

export default {
  name: 'MLModelApp',
  data() {
    return {
      loading: true,
      alpha: { card: { style: undefined } },
    }
  },
  components: { title_nav, page_loader, site_footer },
  methods: {
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 100);
  }
}
</script>

<style scoped>
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