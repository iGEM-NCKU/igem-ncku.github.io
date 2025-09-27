<template>
  <v-footer height="auto" class="glass elevate mt-10" style="border-radius: var(--radius); position: related;">
    <v-container class="py-6">
      <v-row>
        <v-col cols="12" md="6" class="mb-4">
          <div class="d-flex align-center mb-2">
            <img src="icon.png" height="28" class="mr-2" alt="ByeFilm" />
            <div class="text-h6"><span class="text-primary">Bye</span><b class="text-accent">film</b></div>
          </div>
          <div class="text-muted" style="font-size: 0.95rem;">
            Breaking biofilms, empowering recovery.
          </div>
        </v-col>

        

        <v-col cols="12" sm="6" md="6">
          <div class="text-subtitle-1" style="font-family: 'Nunito', 'Inter', sans-serif; font-weight: 700;">Contact</div>
          <div class="text-muted" style="font-size: 0.95rem;">
            NCKU iGEM — Tainan, Taiwan
          </div>
          <div class="mt-2">
            <v-btn icon="mdi-instagram" variant="text" color="primary" href="https://www.instagram.com/igemncku/" target="_blank" aria-label="Instagram" />
            <v-btn icon="mdi-linkedin" variant="text" color="primary" href="https://www.linkedin.com/" target="_blank" aria-label="LinkedIn" />
            <v-btn icon="mdi-github" variant="text" color="primary" href="https://github.com/" target="_blank" aria-label="GitHub" />
            <v-btn icon="mdi-email-outline" variant="text" color="primary" href="mailto:igemncku@gmail.com" aria-label="Email" />
            <v-btn icon="mdi-arrow-up" variant="text" color="primary" href="#top" aria-label="Back to top" @click.prevent="goTop" />
          </div>
        </v-col>
      </v-row>

      <!-- Sponsors -->
      <v-row class="align-center mt-4">
        <v-col cols="12">
          <div class="text-subtitle-1 mb-2" style="font-family: 'Nunito', 'Inter', sans-serif; font-weight: 700;">Sponsors</div>
          <div class="d-flex flex-wrap align-center" style="gap: 16px;">
            <template v-for="s in sponsors" :key="s.name">
              <v-tooltip :text = s.popup>
                <template #activator = '{props}'>
                  <v-img class = 'cursor-help' v-bind = props @click = 'gourl(s.url)' v-if="s.logo" :src="s.logo" :alt="s.name" height="50" contain style="max-width: 140px;" />
                  <v-chip v-else color="primary" variant="tonal" class="text-capitalize">{{ s.name }}</v-chip>
                </template>
              </v-tooltip>
            </template>
          </div>
        </v-col>
      </v-row>
      <v-divider class="my-4 soft-divider" />
      <v-row class="text-center">
        <v-col cols="12" class="text-muted" style="font-size: 0.9rem;">
          © {{ new Date().getFullYear() }} NCKU iGEM. Content licensed under
          <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener">CC BY 4.0</a>.
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: 'site_footer',
  data() {
    return {
      sponsors: [
        {name: 'NCKU', popup: 'Our school in Tainan:D', url: 'https://web.ncku.edu.tw', logo: 'https://static.igem.wiki/teams/6003/logo/national-cheng-kung-university-logo.webp'},
        {name: 'MoE', popup: 'Good sponsor', url: 'https://english.moe.gov.tw/mp-1.html', logo: 'https://static.igem.wiki/teams/6003/logo/moe-logo.webp'},
        { name: 'IDT', popup: 'Also good sponsor:D', url: 'https://www.idtdna.com/', logo: 'https://static.igem.wiki/teams/6003/logo/idt-logo.webp' },
        { name: 'IV-Tech', popup: 'Excellent sponsor ouob', url: 'https://www.ivt.com.tw', logo: 'IV-tech.png' }
      ],
    }
  },
  methods: {
    goTop() { window.scrollTo({ top: 0, behavior: 'smooth' }) },
    gourl(x) {
      location.href = x;
    }
  }
}
</script>

<style scoped>
</style>
