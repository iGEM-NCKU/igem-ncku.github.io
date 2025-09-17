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
      density="comfortable"
      style="position:sticky; top:0; z-index:1000; border-radius:0; border-top-left-radius:0; border-top-right-radius:0; border-bottom-left-radius: var(--radius); border-bottom-right-radius: var(--radius);"
    >
      <v-toolbar-title class="d-flex align-center">
        <img src="icon.png" height="28" class="mr-2" alt="ByeFilm" />
        <a href="index.html" class="unfocused stroke brand" aria-label="Go to home">
          <span class="text-primary">bye</span><span class="film_ani text-accent">film</span>
        </a>
      </v-toolbar-title>
      <v-spacer />

      <!-- Desktop navigation with informative dropdowns -->
      <template v-for="group in menu" :key="group.label">
        <v-menu open-on-hover location="bottom" v-if="$vuetify.display.mdAndUp">
          <template #activator="{ props }">
            <v-btn v-bind="props" variant="text" color="primary" :class="{ 'text-primary': activeGroup === group.label }">
              {{ group.label }}
            </v-btn>
          </template>
          <v-card min-width="320" class="glass-card">
            <v-list>
              <v-list-item
                v-for="item in group.items"
                :key="item.href"
                :href="item.href"
                :prepend-icon="item.icon"
                :title="item.title"
                :subtitle="item.subtitle"
                :active="isActive(item.href)"
              />
            </v-list>
          </v-card>
        </v-menu>
      </template>

      <!-- Search and mobile drawer toggle -->
      <v-btn icon="mdi-magnify" class="mr-1" color="primary" @click="openSearch" aria-label="Search" />
      <v-app-bar-nav-icon class="d-md-none" aria-label="Open navigation" @click="drawer = true" />
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" location="right" temporary>
      <v-list>
        <v-list-group v-for="group in menu" :key="'m-'+group.label" :value="false">
          <template #activator="{ props }">
            <v-list-item v-bind="props" :title="group.label" />
          </template>
          <v-list-item v-for="item in group.items" :key="'mi-'+item.href" :title="item.title" :subtitle="item.subtitle" :href="item.href" :prepend-icon="item.icon" />
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <!-- Quick search dialog -->
    <v-dialog v-model="search.open" width="640">
      <v-card>
        <v-card-title class="text-primary" style="font-family: 'Nunito', 'Inter', sans-serif;">Search</v-card-title>
        <v-card-text>
          <v-text-field
            v-model="search.q"
            autofocus
            color="primary"
            placeholder="Type to search pages…"
            prepend-inner-icon="mdi-magnify"
            variant="solo"
            @keydown.esc="search.open = false"
          />
          <v-list density="comfortable">
            <v-list-item
              v-for="r in filteredResults"
              :key="r.href"
              :href="r.href"
              :title="r.title"
              :subtitle="r.group"
              :prepend-icon="r.icon"
            />
            <div v-if="filteredResults.length === 0" class="text-muted">No matches.</div>
          </v-list>
        </v-card-text>
      </v-card>
    </v-dialog>

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
/* eslint-disable */
// Simple, professional header without jQuery/Materialize hooks

export default {
    name: 'title_nav',
    data() {
        return {
            drawer: false,
            menu: [
              {
                label: 'Project',
                items: [
                  { title: 'Overview', subtitle: 'Start here', href: 'index.html', icon: 'mdi-home-outline' },
                  { title: 'Introduction', subtitle: 'Problem + context', href: 'introduction-to-problems', icon: 'mdi-book-open-blank-variant' },
                ],
              },
              {
                label: 'WetLab',
                items: [
                  { title: 'Overview', subtitle: 'WetLab page top', href: 'wetlab', icon: 'mdi-flask-round-bottom' },
                  { title: 'Design', subtitle: 'Genetic plan', href: 'wetlab#Design', icon: 'mdi-dna' },
                  { title: 'Build & Test', subtitle: 'Experiments', href: 'wetlab#Build', icon: 'mdi-flask-outline' },
                ],
              },
              {
                label: 'DryLab',
                items: [
                  { title: 'Overview', subtitle: 'DryLab page top', href: 'drylab', icon: 'mdi-cogs' },
                  { title: 'Model', subtitle: 'Theory + simulation', href: 'drylab#Model', icon: 'mdi-chart-line' },
                  { title: 'Software', subtitle: 'Tools & visuals', href: 'drylab#Software', icon: 'mdi-laptop' },
                ],
              },
              {
                label: 'Human Practices',
                items: [
                  { title: 'Overview', subtitle: 'HP page top', href: 'integrated-human-practices', icon: 'mdi-account-heart-outline' },
                  { title: 'Integrated HP', subtitle: 'Stakeholder insights', href: 'integrated-human-practices', icon: 'mdi-account-group-outline' },
                  { title: 'Education', subtitle: 'Outreach & engagement', href: 'education', icon: 'mdi-school-outline' },
                ],
              },
              {
                label: 'Team',
                items: [
                  { title: 'Members', subtitle: 'Meet the team', href: 'members', icon: 'mdi-account-badge-outline' },
                ],
              },
            ],
            scroll: {
                progress: 0,
                progress_bottom: 0,
                now: 0,
                length: 0,
                height: 0,
                ticking: false
            },
            showTop: false,
            activeGroup: '',
            search: { open: false, q: '' },
        }
    },
    computed: {
      linkIndex() {
        const res = []
        this.menu.forEach(g => g.items.forEach(it => res.push({ ...it, group: g.label })))
        return res
      },
      filteredResults() {
        const q = (this.search.q || '').toLowerCase().trim()
        if (!q) return this.linkIndex
        return this.linkIndex.filter(it =>
          it.title.toLowerCase().includes(q) ||
          (it.subtitle || '').toLowerCase().includes(q) ||
          it.group.toLowerCase().includes(q)
        )
      }
    },
    mounted() {
        window.addEventListener('scroll', this.onScroll, { passive: true });
        window.addEventListener('keydown', this.onKeyDown)
        this.update_scroll();
        this.updateActiveGroup();
        try { if ('scrollRestoration' in history) history.scrollRestoration = 'manual' } catch (e) {}
        if (!window.location.hash) window.scrollTo(0, 0)
    },
    beforeUnmount() {
      window.removeEventListener('keydown', this.onKeyDown)
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
        update_scroll() {
            const doc = document.documentElement;
            this.scroll.height = window.innerHeight;
            this.scroll.length = doc.scrollHeight; // total document height
            this.scroll.now = window.scrollY || doc.scrollTop || 0;
            const track = Math.max(1, this.scroll.length - this.scroll.height);
            const pct = (this.scroll.now / track) * 100;
            this.scroll.progress = Math.max(0, Math.min(100, pct));
            this.showTop = this.scroll.now > 300;
            this.updateActiveGroup();
        },
        goTop() { window.scrollTo({ top: 0, behavior: 'smooth' }) },
        isActive(href) {
          const path = window.location.pathname.replace(/\/$/, '')
          const base = href.split('#')[0]
          return path.endsWith('/' + base)
        },
        updateActiveGroup() {
          const path = window.location.pathname
          for (const g of this.menu) {
            if (g.items.some(it => path.endsWith('/' + it.href.split('#')[0]))) {
              this.activeGroup = g.label
              return
            }
          }
          this.activeGroup = ''
        },
        openSearch() { this.search.open = true; this.$nextTick(() => { /* focus handled by autofocus */ }) },
        onKeyDown(e) {
          if (e.key === '/' && !this.search.open) {
            e.preventDefault();
            this.openSearch();
          } else if (e.key === 'Escape' && this.search.open) {
            this.search.open = false
          }
        },
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

.brand { font-weight: 900; font-family: 'Nunito', 'Inter', sans-serif; }
</style>
