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
            <v-btn text = 'Instagram' variant="text" color="primary" href="https://www.instagram.com/igemncku/" target="_blank" aria-label="Instagram" />
            <v-btn text = 'GitHub' variant="text" color="primary" href="https://github.com/igem-ncku" target="_blank" aria-label="GitHub" />
            <v-btn text = 'E-mail' variant="text" color="primary" href="mailto:igemncku@gmail.com" aria-label="Email" />
            <v-btn text = 'Top' variant="text" color="primary" href="#top" aria-label="Back to top" @click.prevent="goTop" />
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
          © {{ new Date().getFullYear() }} - Content on this site is licensed under a 
          <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener">Creative Commons Attribution 4.0 International license</a>.
        </v-col>
        <v-col cols="12" class="text-muted" style="font-size: 0.9rem;">
          The repository used to create this website is available at 
          <a href="https://gitlab.igem.org/2025/ncku-tainan" target="_blank" rel="noopener">https://gitlab.igem.org/2025/ncku-tainan</a>.
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
        { name: 'IV-Tech', popup: 'Excellent sponsor ouob', url: 'https://www.ivt.com.tw', logo: 'https://static.igem.wiki/teams/6003/logo/logo-20140117-2-2-11zon-11zon.webp' },
        { name: 'DIKE', popup: 'Sponsor ouob', url: 'https://www.dike.tw/?srsltid=AfmBOopnaoKyRiftdwEApzwFduPi21Pg5cVBT08SRs_tRWPoQ1pb15i7', logo: 'https://static.igem.wiki/teams/6003/logo/dike.webp'},
        {name: 'MSEAA', popup: 'Sponsor ouob', url: 'https://www.facebook.com/groups/401745790567546/?locale=zh_TW', logo: 'https://static.igem.wiki/teams/6003/logo/mseaa-logo.webp'},
        {name: 'Department for Youth, Taipei City Government', popup: 'Sponsor ouob', url: 'https://tpyd.gov.taipei/en/', logo: 'https://static.igem.wiki/teams/6003/sponsor/4.avif'},
        {name: 'NCKU Global Alumni Association', popup: 'Sponsor ouob', url: 'https://www.alumni-ncku.tw/%E9%97%9C%E6%96%BC%E6%A0%A1%E5%8F%8B%E7%B8%BD%E6%9C%83/', logo: 'https://static.igem.wiki/teams/6003/logo/alumni.avif'},
        {name: 'NCKU Alumni Association of Thailand', popup: 'Sponsor ouob', url: 'https://www.facebook.com/groups/NCKUThailand/', logo: 'https://static.igem.wiki/teams/6003/sponsor/7.avif'}
        
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
