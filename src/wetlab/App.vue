<template>
  <v-app>
  <page_loader :loading="loading" />
  <title_nav />
  <sidenav name="WetLab" />

  <v-main>
  <v-row justify="end">
    <v-col cols="12" md="8" class="pa-8">
      <v-row class="text-center scroller" id="Design">
        <v-col>
          <v-card title="Design" variant="elevated" class="glass-card elevate" v-reveal>
            <template #text>
              <p class="text-muted">
                To efficiently degrade biofilms, we combine expression of three biofilm-degrading
                enzymes with a temperature-controlled cell lysis mechanism.
              </p>
            </template>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="6">
          <v-card title="Three enzyme expression constructs" subtitle="Design" variant="elevated" class="glass-card elevate" v-reveal>
            <template #text>
              <v-col>
                <v-card title="Proteinase K + pTrc99A" color="primary" v-ripple class="glass-card elevate">
                  <template #text>Driven by a lac promoter.</template>
                </v-card>
              </v-col>
              <v-col>
                <v-card title="Dispersin B + pET28c" color="secondary" v-ripple class="glass-card elevate">
                  <template #text>Driven by a T7 promoter.</template>
                </v-card>
              </v-col>
              <v-col>
                <v-card title="DNase I + pET28c" color="secondary" v-ripple class="glass-card elevate">
                  <template #text>Also driven by a T7 promoter.</template>
                </v-card>
              </v-col>
            </template>
          </v-card>
        </v-col>

        <v-col cols="12" md="6">
          <v-card title="Host strain planning" subtitle="Design" variant="elevated" class="glass-card elevate scroller" v-reveal id="Host-Strain-Planning" data-title="Host Strain Planning">
            <v-col>
              <v-card variant="tonal" v-ripple>
                <template #text>
                  Proteinase K plasmid in MG1655 λcI857 enables heat-induced lysis.
                </template>
              </v-card>
            </v-col>
            <v-col>
              <v-card variant="tonal" v-ripple>
                <template #text>
                  Dispersin B and DNase I introduced into MG1655 λcI857 ΔlacZ::T7RNAP-kan to provide T7 polymerase.
                </template>
              </v-card>
            </v-col>
            <div class="subsection" id="Host-Selection" data-title="Selection">
              <h3>Selection</h3>
              <p>Kanamycin selection for T7 polymerase cassette, and IPTG induction tests to validate activity.</p>
            </div>
            <div class="subsection" id="Host-Verification" data-title="Verification">
              <h3>Verification</h3>
              <p>Colony PCR and Sanger sequencing for correct integration.</p>
            </div>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="6">
          <v-card title="T7 RNA Polymerase integration" subtitle="Design" variant="elevated" class="glass-card elevate">
            <template #text>
              <v-col>
                <v-card variant="tonal" v-ripple>
                  <template #text>
                    T7 RNA polymerase gene PCR-amplified from BL21(DE3).
                  </template>
                </v-card>
              </v-col>
              <v-col>
                <v-card variant="tonal" v-ripple>
                  <template #text>
                    Kanamycin resistance cassette PCR-amplified from KEIO lacY::kan.
                  </template>
                </v-card>
              </v-col>
              <v-col>
                <v-card variant="tonal" v-ripple>
                  <template #text>
                    T7RNAP-kanR fusion integrated via Red recombination; moved into MG1655 and lysogenized.
                  </template>
                </v-card>
              </v-col>
            </template>
          </v-card>
        </v-col>

        <v-col cols="12" md="6">
          <v-card title="Cell lysis strategy" subtitle="Design" variant="elevated" class="glass-card elevate scroller" v-reveal id="Cell-Lysis-Strategy" data-title="Cell Lysis Strategy">
            <template #text>
              <v-col>
                <v-card variant="tonal" v-ripple>
                  <template #text>
                    λ prophage with cI857 mutation ensures temperature‑triggered lysis.
                  </template>
                </v-card>
              </v-col>
              <v-col>
                <v-card variant="tonal" v-ripple>
                  <template #text>
                    At 30°C, IPTG induction drives T7RNAP and enzyme expression.
                  </template>
                </v-card>
              </v-col>
              <v-col>
                <v-card variant="tonal" v-ripple>
                  <template #text>
                    At 37°C, cI857 triggers lysis and enzyme release.
                  </template>
                </v-card>
              </v-col>
              <div class="subsection" id="Lysis-Safety" data-title="Safety">
                <h3>Safety</h3>
                <p>Failsafe measures include temperature shift thresholds and growth condition controls.</p>
              </div>
            </template>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="1" />
  </v-row>

  <v-row justify="end">
    <v-col cols="12" md="8" class="pa-8">
      <v-row>
        <v-col>
          <v-card id="Build" class="scroller glass-card elevate" title="Build" variant="elevated" v-reveal>
            <template #text>
              In this phase we designed primers and plasmids to express biofilm‑disrupting enzymes and a suicide module for biosafety.
            </template>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="1" />
  </v-row>

  <v-row justify="end">
    <v-col cols="12" md="8" class="pa-8">
      <v-row>
        <v-col>
          <v-card id="Test" title="Test" class="text-center glass-card elevate" text="We will validate expression and lysis, and verify extracellular biofilm‑degrading activity." variant="elevated" v-reveal />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <v-card title="Enzyme expression testing" variant="elevated" class="glass-card elevate">
            <template #text>
              <v-col>
                <v-card variant="tonal" v-ripple><template #text>Confirm expression with SDS‑PAGE.</template></v-card>
              </v-col>
              <v-col>
                <v-card variant="tonal" v-ripple><template #text>Induce expression via lac/T7 promoters with IPTG.</template></v-card>
              </v-col>
            </template>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card title="Lysis system validation" variant="elevated" class="glass-card elevate">
            <template #text>
              <v-col>
                <v-card variant="tonal" v-ripple><template #text>Shift cultures to 37°C to trigger cI857 lysis.</template></v-card>
              </v-col>
              <v-col>
                <v-card variant="tonal" v-ripple><template #text>Assess lysis visually and by OD monitoring.</template></v-card>
              </v-col>
            </template>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card title="Extracellular enzyme release" variant="elevated" class="glass-card elevate">
            <template #text>
              <v-col>
                <v-card variant="tonal" v-ripple><template #text>Test supernatants for biofilm‑degrading activity.</template></v-card>
              </v-col>
            </template>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="1" />
  </v-row>

  <site_footer />
  </v-main>
  </v-app>
</template>

<script>
/* eslint-disable */
import M from 'materialize-css'
import title_nav from '@/title.vue'
import page_loader from '@/loader.vue'
import sidenav from '@/sidenav.vue'
import site_footer from '@/footer.vue'

export default {
  name: 'App',
  data() {
    return { loading: true }
  },
  components: { title_nav, page_loader, sidenav, site_footer },
  mounted() {
    M.AutoInit()
    setTimeout(() => { this.loading = false }, 100)
  },
}
</script>

<style>
* { transition: 1s all; }
.blur { z-index: 10; background-color: rgba(255,255,255,.75); backdrop-filter: blur(5px); position: absolute; }
</style>
