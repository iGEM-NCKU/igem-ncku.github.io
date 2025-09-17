<template>
    <v-app>
    <page_loader :loading = 'loading' />
    <title_nav />

    <!-- {{ mobile }} -->
    
    <v-main class="home-main">
      <!-- Full hero like ZJU: big title, subtitle, CTAs -->
      <section class="hero">
        <div class="hero-img">
          <div class="hero-overlay">
            <!-- Centered logo only -->
            <img src="logo.svg" alt="Byefilm" class="hero-logo" />
          </div>
        </div>
      </section>

      <!-- Explore cards -->
      <v-container id="start">
        <v-row>
          <v-col cols="12">
            <div class="text-subtitle-1 mb-2" style="font-family:'Nunito','Inter',sans-serif; font-weight:700;">Explore</div>
          </v-col>
          <v-col v-for="i in pre" :key="i" md="6" cols="12" lg="3">
            <v-hover>
              <template #default="{ isHovering, props }">
                <a :href="i" class="unfocused">
                  <v-card
                    v-bind="props"
                    v-ripple
                    class="glass-card elevate"
                    variant="elevated"
                    :title="title(i)"
                    :text="i"
                    :color="isHovering ? 'primary' : ''"
                  />
                </a>
              </template>
            </v-hover>
          </v-col>
        </v-row>
      </v-container>

      <!-- Promo video, simple and centered -->
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-card class="glass-card elevate text-center" variant="elevated" v-reveal>
              <template #title>Promotion <b class="text-primary">Video</b></template>
              <template #text>
                <v-btn color="primary" rounded="xl" @click="video_play = true">Watch video</v-btn>
              </template>
            </v-card>
          </v-col>
        </v-row>
        <page_loader :loading="video_loading" />
        <v-dialog v-model="video_play" width="auto">
          <v-card>
            <iframe title="NCKU-Tainan: Byefilm – Promotion" width="560" height="315" src="https://video.igem.org/videos/embed/sBDRwoa4gaBw365v6svKyc?autoplay=1" frameborder="0" allowfullscreen sandbox="allow-same-origin allow-scripts allow-popups allow-forms" @load="onVideoLoaded"></iframe>
          </v-card>
        </v-dialog>
      </v-container>

      <!-- About iGEM and SynBio -->
      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <v-card subtitle="Introduction" variant="elevated" class="glass-card elevate" v-reveal>
              <template #title>What is <b class="text-primary">iGEM</b>?</template>
              <template #text>
                <b><a href="http://igem.org/Main_Page" target="_blank" rel="noopener">International Genetically Engineered Machine Competition</a></b>
              </template>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-card subtitle="Introduction" variant="elevated" class="glass-card elevate" v-reveal>
              <template #title>What is <b class="text-primary">Synthetic Biology</b>?</template>
              <template #text>
                <b>「合成生物學」…</b>
              </template>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <site_footer />
    </v-app>
</template>

<script>
/* eslint-disable */ 
import { useDisplay } from 'vuetify'
import title_nav from '@/title.vue'
import page_loader from '@/loader.vue'
import site_footer from '@/footer.vue'

export default {
    name: 'App',
    data() {
        return {
            loading: true,
            pre: ['wetlab', 'integrated-human-practices', 'education', 'members'],
            mobile: useDisplay(),
            video_play: false,
            video_loading: false
        }
    },
    components: { title_nav, page_loader, site_footer },
    mounted() {
        setTimeout(() => { this.loading = false }, 100);
    },
    watch: {
        video_play(nv) {
            if (nv) this.video_loading = true; else this.video_loading = false;
        }
    },
    methods: {
        title(x) {
            while(x.indexOf('-') != -1) x = x.replace('-', ' ');
            var f = [];
            for(var i of x.split(' ')) {
                f.push(i[0].toUpperCase() + i.substr(1).toLowerCase());
            }
            return (f.join(' '));
        },
        onVideoLoaded() {
            this.video_loading = false;
        }
    }
}
</script>

<style>
* {
  transition: 1s all;
}
.home-main { min-height: calc(100vh - 160px); display: block; }
.hero { position: relative; height: 78vh; border-radius: var(--radius); overflow: hidden; }
.hero-img { height: 100%; }
.hero-overlay { position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; background: linear-gradient(180deg, rgba(250,247,239,0.55) 0%, rgba(250,247,239,0.92) 60%, rgba(250,247,239,1) 100%); padding: 24px; }
.hero-title { display: none; }
.hero-sub { display: none; }
.hero-down { display: none; }

/* Label style like the reference image */
.label { display: inline-block; padding: 6px 14px; border-radius: 10px; background: #2b5fd6; color: #fff; box-shadow: 0 6px 18px rgba(0,0,0,0.15); }
.label-lg { padding: 8px 18px; }

/* CTA buttons like pills */
.hero-cta .v-btn { text-transform: uppercase; letter-spacing: .06em; font-weight: 800; box-shadow: 0 10px 22px rgba(15,92,77,0.25); }

/* Centered logo in hero */
.hero-logo { width: clamp(260px, 40vw, 680px); height: auto; filter: drop-shadow(0 10px 22px rgba(0,0,0,0.12)); }
.blur {
  z-index: 10;
  background-color: rgba(255, 255, 255, .75);
  backdrop-filter: blur(5px);
  position: absolute;

}
.center {
  position: fixed;
  left: calc(50% - 70px);
  transform: translateX(50%);
}
.bold {
  font-weight: 700;
}
a.unfocused, a.unfocused:visited, a.unfocused:hover, a.unfocused:active {
    color: inherit;
}
.button {
    text-decoration: none;
}
.placeholder {
    background-color: transparent;
    /* display: block; */
    height: 120px;
    /* position: absolute; */
}
.msgbox {
    z-index: 1000;
    position: fixed;
    backdrop-filter: blur(20px);
    background-color: rgba(100, 100, 100, .75);
    top: 10vh;
    left: 35vw;
    width: 30vw;
    height: 50vh;
    border-radius: 10px;
}
.scroller {
    background-color: #000;
    min-height: 500px;
    /* background-image intentionally omitted for build stability; add via inline style if needed */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    backdrop-filter: blur(10px);
}
#filter-inside {
    background-color: rgba(255, 255, 255, .34);
    width: min(900px, 85vw);
    z-index: 10;
    position: relative;
    margin: 60px auto;
    padding: 16px;
    backdrop-filter: blur(18px);
    border-radius: var(--radius);
}
</style>
