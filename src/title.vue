<template>
    <v-progress-linear
        v-model = scroll.progress
        style = 'position:fixed; left:0; top:0; width:100vw; z-index:1100; pointer-events:none;'
        color = 'primary'
        buffer-color = 'primary'
        height = 4
        :buffer-value = scroll.progress_bottom
        buffer-opacity = .3
     />
    <v-app-bar
      flat
      class="glass elevate"
      style="position:sticky; top:0; z-index:1000; border-radius:0; border-top-left-radius:0; border-top-right-radius:0; border-bottom-left-radius: var(--radius); border-bottom-right-radius: var(--radius);"
    >
      <v-toolbar-title class="d-flex align-center">
        <img src="icon.png" height="24" class="mr-2" />
        <a href="index.html" class="unfocused stroke" style="font-weight:900;">
          <span class="text-primary">bye</span><span class="film_ani text-accent">film</span>
        </a>
      </v-toolbar-title>
      <v-spacer />
      <template v-for="(items, label) in f" :key="label">
        <v-menu open-on-hover location="bottom" v-if="$vuetify.display.mdAndUp">
          <template #activator="{ props }">
            <v-btn v-bind="props" variant="text" color="primary">{{ label }}</v-btn>
          </template>
          <v-list>
            <v-list-item v-for="url in items" :key="url" :href="url">
              <v-list-item-title>{{ title(url) }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
      <v-app-bar-nav-icon class="d-md-none" aria-label="Open navigation" @click="drawer = true" />
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" location="right" temporary>
      <v-list>
        <v-list-group v-for="(items, label) in f" :key="'m-'+label" :value="false">
          <template #activator="{ props }">
            <v-list-item v-bind="props" :title="label" />
          </template>
          <v-list-item v-for="url in items" :key="'mi-'+url" :title="title(url)" :href="url" />
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <v-fab-transition>
      <v-btn v-show="showTop" icon="mdi-arrow-up" color="primary" style="position:fixed; right:24px; bottom:24px; z-index:1001;" @click="goTop" />
    </v-fab-transition>

    <!-- <div class = subnav>
            <a href = '#'> <b class = right> Link 1 </b> </a><br>
            <a href = '#'> <b class = right> Link 2 </b> </a>
    </div> -->

    <!-- <transition name = fade>
        <img src = 'https://igem.ncku.edu.tw/images/slide2.png' v-if = 'show_nav' class = 'title_img' />
    </transition> -->
    
</template>

<script>
// Simple, professional header without jQuery/Materialize hooks

export default {
    name: 'title_nav',
    data() {
        return {
            pre: ['education', 'integrated-human-practices', 'members', 'wetlab', 'introduction-to-problems', 'software', 'model', ],
            f: {
                'Team': ['attributions', 'members'],
                'Project': ['description', 'engineering', 'experiments', 'notebook', 'results'],
                'Labs': ['drylab', 'wetlab', 'integrated-human-practices'],
            },
            drawer: false,
            scroll: {
                progress: 0,
                progress_bottom: 0,
                now: 0,
                length: 0,
                height: 0,
                ticking: false
            },
            showTop: false
        }
    },
    mounted() {
        window.addEventListener('scroll', this.onScroll, { passive: true });
        this.update_scroll();
    },
    methods: {
        onScroll() {
            if (this.scroll.ticking) return;
            this.scroll.ticking = true;
            requestAnimationFrame(() => {
                this.update_scroll();
                this.scroll.ticking = false;
            });
        },
        title(x) {
            while(x.indexOf('-') != -1) x = x.replace('-', ' ');
            var f = [];
            for(var i of x.split(' ')) {
                f.push(i[0].toUpperCase() + i.substr(1).toLowerCase());
            }
            return (f.join(' '));
        },
        update_scroll() {
            const doc = document.documentElement;
            this.scroll.height = window.innerHeight;
            this.scroll.length = doc.scrollHeight; // total document height
            this.scroll.now = window.scrollY || doc.scrollTop || 0;
            const track = Math.max(1, this.scroll.length - this.scroll.height);
            const pct = (this.scroll.now / track) * 100;
            this.scroll.progress = Math.max(0, Math.min(100, pct));
            this.showTop = this.scroll.now > 300;
        },
        goTop() { window.scrollTo({ top: 0, behavior: 'smooth' }) }
    }
}
</script>

<style scoped>
* { transition: all 0.3s; }
a.unfocused, a.unfocused:visited, a.unfocused:hover, a.unfocused:active { color: inherit; }

.film_ani { animation: film 6s ease 0s infinite alternate; }
@keyframes film {
    0% { color: var(--color-secondary); }
    33% { color: var(--color-primary); }
    66% { color: var(--color-accent); }
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


.stroke {
    /* -webkit-text-stroke: .5px #efe4d1; */
    /* text-stroke: 1.5px #efe4d1; */
    text-shadow:
        -1px -1px 0 #fff,
        1px -1px 0 #fff,
        -1px 1px 0 #fff,
        1px 1px 0 #fff;
}
.title_showcase { position: fixed; background: rgba(255,255,255,0.86); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,0.7); border-radius: var(--radius); z-index: 100; }
</style>
