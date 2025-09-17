<template>
  <div :style="{ position: 'fixed', top: offsetTop }" class="ma-5" v-if="$vuetify.display.mdAndUp">
    <v-card min-width="260" class="pa-2">
      <v-card-title class="text-primary">{{ name || 'Navigation' }}</v-card-title>
      <v-divider class="mb-2" />
      <v-list density="comfortable" nav>
        <v-list-group
          v-for="(sec, i) in sections"
          :key="sec.id"
          :value="expanded[i]"
        >
          <template #activator="{ props }">
            <v-list-item
              v-bind="props"
              :title="labelize(sec.label)"
              :prepend-icon="iconFor(sec.label)"
              :active="i === activeTop && activeSub === -1"
              @click="goto('#' + sec.id)"
            />
          </template>
          <v-list-item
            v-for="(sub, j) in sec.subs"
            :key="sub.id"
            :title="labelize(sub.label)"
            :prepend-icon="iconFor(sub.label)"
            :active="i === activeTop && j === activeSub"
            @click="goto('#' + sub.id)"
          />
        </v-list-group>
      </v-list>
    </v-card>
  </div>
  
</template>

<script>
/* eslint-disable */
import { useGoTo } from 'vuetify/lib/composables/goto'

export default {
  name: 'sidenav',
  props: { name: '', offsetTop: { type: String, default: '96px' } },
  data() {
    return {
      sections: [], // [{ id, label, subs: [{id,label}] }]
      expanded: [],
      activeTop: -1,
      activeSub: -1,
      observer: null,
      goTo: useGoTo(),
    }
  },
  mounted() {
    this.initHeadings()
  },
  beforeUnmount() {
    if (this.observer) this.observer.disconnect()
  },
  methods: {
    labelize(x) {
      if (!x) return ''
      return x
        .toString()
        .replace(/[-_]+/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()
        .replace(/\b\w/g, c => c.toUpperCase())
    },
    initHeadings() {
      const topEls = Array.from(document.querySelectorAll('.scroller'))
      this.sections = topEls
        .filter(el => el.id)
        .map(el => {
          const subs = Array.from(el.querySelectorAll('.subsection[id]'))
            .map(s => ({ id: s.id, label: s.getAttribute('data-title') || s.id }))
          return { id: el.id, label: el.getAttribute('data-title') || el.id, subs }
        })
      // Open the section closest to the top (fallback to first)
      const idx = this.sectionIndexNearTop()
      this.setExpandedIndex(idx)

      // Observe both top sections and subsections
      const opts = { root: null, rootMargin: '0px 0px -60% 0px', threshold: 0.1 }
      this.observer = new IntersectionObserver(this.onIntersect, opts)
      this.sections.forEach((sec) => {
        const el = document.getElementById(sec.id)
        if (el) this.observer.observe(el)
        sec.subs.forEach((sub) => {
          const el2 = document.getElementById(sub.id)
          if (el2) this.observer.observe(el2)
        })
      })
    },
    onIntersect(entries) {
      const visible = entries.filter(e => e.isIntersecting)
      if (!visible.length) return
      // Prefer the element closest to top
      visible.sort((a, b) => Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top))
      const id = visible[0].target.id

      // Subsections first
      for (let i = 0; i < this.sections.length; i++) {
        const j = this.sections[i].subs.findIndex(s => s.id === id)
        if (j !== -1) {
          this.activeTop = i
          this.activeSub = j
          this.setExpandedIndex(i)
          return
        }
      }
      // Then top-level
      const ti = this.sections.findIndex(s => s.id === id)
      if (ti !== -1) {
        this.activeTop = ti
        this.activeSub = -1
        this.setExpandedIndex(ti)
      }
    },
    goto(hash) {
      const id = (hash || '').replace('#','')
      this.openForId(id)
      this.goTo(hash, {
        container: 'html',
        duration: 400,
        easing: 'easeInOutCubic',
        offset: -100,
      })
    },
    openForId(id) {
      if (!id) return
      for (let i = 0; i < this.sections.length; i++) {
        if (this.sections[i].id === id) { this.setExpandedIndex(i); return }
        const j = this.sections[i].subs.findIndex(s => s.id === id)
        if (j !== -1) { this.setExpandedIndex(i); return }
      }
    },
    sectionIndexNearTop() {
      let best = 0
      let bestDelta = Infinity
      this.sections.forEach((s, idx) => {
        const el = document.getElementById(s.id)
        if (!el) return
        const top = Math.abs(el.getBoundingClientRect().top)
        if (top < bestDelta) { best = idx; bestDelta = top }
      })
      return best
    },
    setExpandedIndex(index) {
      this.expanded = this.sections.map((_, i) => i === index)
    },
    iconFor(raw) {
      const x = this.labelize(raw).toLowerCase()
      if (x.includes('model')) return 'mdi-chart-line'
      if (x.includes('assumption')) return 'mdi-lightbulb-on-outline'
      if (x.includes('parameter')) return 'mdi-tune-variant'
      if (x.includes('software')) return 'mdi-laptop'
      if (x.includes('tech') || x.includes('stack')) return 'mdi-cogs'
      if (x.includes('output')) return 'mdi-chart-box-outline'
      if (x.includes('build')) return 'mdi-hammer-wrench'
      if (x.includes('overview')) return 'mdi-information-outline'
      if (x.includes('primer')) return 'mdi-format-list-bulleted'
      if (x.includes('assembly')) return 'mdi-puzzle-outline'
      return 'mdi-chevron-right'
    }
  }
}
</script>

<style scoped>
.sidenav :deep(.v-list-item--active) { color: var(--color-primary) }
</style>

