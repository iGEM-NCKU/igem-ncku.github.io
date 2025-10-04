<template>
    <v-app>
      <page_loader :loading = 'loading' />
      <title_nav />
      <v-main>
        <!-- <sidenav name = 'software' /> -->
      <v-row justify = center>
        <v-col cols = 12 md = 8 class = 'pa-5'>
        <div class = 'place_holder' justify = center>
            <v-card-title style="font-size: 32px;"><b>Cycle 1</b></v-card-title>
            <div class="circle-container">
              <div class="cards">
                <v-card
                  v-for="(item, i) in items"
                  :key="i"
                  class="circle-card"
                  :style="getCardStyle(i)"
                >
                <v-card-actions style="justify-content: space-between;">
                  <v-btn @click="prevCard">Prev</v-btn>
                  <v-btn @click="nextCard">Next</v-btn>
                </v-card-actions>
                  <v-card-title>{{ item.title }}</v-card-title>
                    <div class="text-content" v-html="item.text"></div>
                  <v-card-text></v-card-text>
                  
                </v-card>
              </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-main>
    </v-app>
    <site_footer></site_footer>
</template>

<script>

import title_nav from '@/title.vue'
import page_loader from '@/loader.vue'
import site_footer from '@/footer.vue'
export default {
  data() {
    return {
      items: [
        { title: 'Design 1- Plasmids Construction', text: '<p>Our project aimed to disrupt pathogenic biofilms by engineering <em>E. coli</em> to produce a cocktail of biofilm-degrading enzymes. Since the biofilm extracellular polymeric substance (EPS) is composed of polysaccharides, extracellular DNA, and proteins, we selected three enzymes to target these key components:</p><ul><li>Dispersin B: Degrades PNAG polysaccharides.</li><li>DNase I: Cleavages extracellular DNA that stabilizes the biofilm.</li><li>Proteinase K: Hydrolyzes adhesive biofilm protein.</li></ul>' },
        { title: 'Build', text: '<p>For the expression host, we designed a stepwise construction strategy:</p><p><strong>Constructing the T7RNAP–CmR–lacZ Cassette</strong></p><p>We first generated the integration cassette. Specifically, we used PCR to amplify the T7 RNA polymerase (T7RNAP) gene from <em>E. coli</em> BL21(DE3), the chloramphenicol resistance marker (CmR) from plasmid pACYC184, and a truncated lacZ fragment from <em>E. coli</em> MG1655. These fragments were fused into a single T7RNAP–CmR–lacZ cassette using overlapping PCR.</p><p>We introduced this cassette into the Red(Km) strain using Red recombination, because the λ-Red system enables highly efficient integration of large DNA fragments. This step provided a reliable platform to stably insert and validate the cassette before moving into our final chassis.</p><p><strong>Transferring T7RNAP into MG1655</strong></p><p>After establishing the cassette in Red(Km), we used P1 transduction to transfer the T7RNAP fragment into <em>E. coli</em> MG1655. We chose MG1655 because it is a K-12 derivative with a well-annotated genome, widely regarded as safe and stable for synthetic biology. This ensured that our engineered system was based on a reliable strain.</p><p><strong>Integrating λcI857 for Kill-Switch Control</strong></p><p>Finally, we infected the MG1655 strain carrying T7RNAP with λcI857 phage. This allowed us to establish a temperature-sensitive control system. When cultured above 37 °C, the λcI857 repressor becomes inactive, inducing gene expression and triggering lysis. This mechanism was designed to achieve both enzyme release and self-lysis of the engineered bacteria.</p><p><strong>Plasmid Construction</strong></p><p>In parallel, we designed plasmids for enzyme expression:</p><ul><li><em>Dispersin B</em>: pET28c under the T7 promoter (KanR).</li><li><em>DNase I</em>: pET28c under the T7 promoter (KanR).</li><li><em>Proteinase K</em>: pTrc99A under the IPTG-inducible Trc promoter (AmpR).</li></ul><p>Each plasmid was transformed into the engineered host, creating three modular strains for downstream testing.</p>' },
        { title: 'Test', text: 'This is some description for Test.' },
        { title: 'Learn', text: 'This is some description for Learn.' },
      ],
      totalCards: 4, 
      radius: 320,  
      angle: 0,  
    };
  },
  components: {
    title_nav,
    page_loader,
    site_footer,
  },
  methods: {
    getCardStyle(index) {
      const angle = (index / this.totalCards) * 360; 
      const rotateY = angle + this.angle; 
      const opacity = Math.abs(rotateY % 360) < 90 ? 1 : 0; 
      return {
        transform: `rotateY(${rotateY}deg) translateZ(${this.radius}px)`,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transformOrigin: 'center center',
        transition: 'transform 1s ease, opacity 1s ease', 
        opacity: opacity,
      };
    },
    prevCard() {
      this.angle += 90; 
    },
    nextCard() {
      this.angle -= 90; 
    },
  },
};
</script>


<style>
.circle-container {
  /* position: relative; */
  /* width: 600px; */
  /* height: 400px; */
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: center; */
  perspective: 90vw; 
}

.cards {
  /* position: relative; */
  width: 40vw;
  height: 100%;
  transform-style: preserve-3d; 
  transform-origin: center center;
  margin-left: -20%;
}

.circle-card {
  width: 50vw;
  height: 80vh;
  background-color: rgb(0, 124, 27);
  text-align: center;
  transition: transform 1s ease;
}

.left-btn {
  position: relative;
  bottom: 10px;
}

.right-btn {
  position: relative;
  bottom: 10px;
}
/* .v-dialog .v-card {
  transform: scale(1.1);
  transition: transform 0.3s ease;
} 
.markmap {
    position: relative;
}
.markmap > svg {
  width: 100%;
  height: 300px;

} */
/* .text-content p { */
  /* max-width: 20%; */
  /* padding: 2000px; */
/* } */
.place_holder {
  height: 100vh;
}
</style>
