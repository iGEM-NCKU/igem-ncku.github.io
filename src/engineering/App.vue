<template>
    <v-app>
      <page_loader :loading = 'loading' />
      <title_nav />
      <v-main>
        <!-- <sidenav name = 'software' /> -->
      <v-row justify = center>
        <v-col cols = 12 md = 8 class = 'pa-5'>
        <div class = 'place_holder' justify = center>
            <v-card-title style="font-size: 32px;"><b>Cycle 1.</b></v-card-title>
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
                  <v-card-title style="font-size: 32px;">{{ item.title }}</v-card-title>
                    <div class="scroll-body">
                      <div class="text-content" v-html="item.text"></div>
                    </div>
                    <v-card-text></v-card-text>
                  
                </v-card>
              </div>
              </div>
              </div>
              </v-col>
        </v-row>
      </v-main>
    </v-app>
    <v-footer app height="64">
    </v-footer>
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
        { title: 'Enzyme Plasmid Engineering', text: '<p>To degrade the biofilm formed by <em>Staphylococcus aureus</em>, we first conducted a literature review to identify suitable enzymes capable of disrupting its extracellular polymeric substances (EPS). The <em>S. aureus</em> biofilm matrix is mainly composed of polysaccharides, extracellular DNA, and proteins, which provide structural stability and protection to the bacterial community.</p><p>Based on these components, we selected three enzymes that specifically target different elements of the EPS:</p><ul><li><strong>Dispersin B</strong> – Degrades poly-β-1,6-N-acetylglucosamine (PNAG), a major polysaccharide in the biofilm matrix.</li><li><strong>DNase I</strong> – Cleaves extracellular DNA that serves as a scaffold within the biofilm.</li><li><strong>Proteinase K</strong> – Hydrolyzes adhesive and structural proteins, weakening the biofilm integrity.</li></ul><p>By combining these enzymes, our engineered <em>E. coli</em> is designed to produce a synergistic biofilm-degrading cocktail capable of efficiently dispersing <em>S. aureus</em> biofilms.</p> <img class = img src = "https://static.igem.wiki/teams/6003/engineering/1-t.webp"></img>' },
        { title: 'Build', text: '<p>Proteinase K was cloned into the pTrc99a vector, which carries an Ampicillin resistance gene and a lac promoter for IPTG-inducible expression. The proteinase K gene was amplified and ligated into pTrc99a using EcoRI and PstI restriction sites. The recombinant plasmid was first transformed into E. coli TOP10 for amplification and sequence verification, including colony PCR and restriction digestion analysis, and was subsequently introduced into <em>E. coli</em> MG1655 λ cI857 for protein expression.</p><p>This construct enables controllable Proteinase K production under the lac promoter and allows temperature-induced cell lysis via the λ cI857 system when the temperature rises to approximately 40 °C, facilitating the release of intracellular enzymes.</p><img class = "img" src = "https://static.igem.wiki/teams/6003/engineering/pro-20k-20cloning-20map.webp"></img><p>figue 1. Schematic Map of the pTrc99a-Pro K Plasmid</p>' },
        { title: 'Test', text: '<p>To verify the successful construction and expression of Proteinase K, we first performed colony PCR, which confirmed the presence of the expected proteinase K fragment in the recombinant plasmid. Subsequently, we attempted protein expression in E. coli MG1655 λ cI857 and analyzed the protein expression by SDS-PAGE. However, the expected Proteinase K band was barely detectable, and the band pattern was almost identical to that of the MG1655 λ cI857 control, suggesting low expression or poor solubility under the tested conditions.</p><div style="display:flex; justify-content:center; gap:20px; flex-wrap:wrap;"><figure style="width:45%; text-align:center;"><img src="https://static.igem.wiki/teams/6003/engineering/prok-20colony-20pcr.webp" style="width:45%; border-radius:10px;"><figcaption style="font-size:14px; color:#555; margin-top:6px;">figue 2.PCR Amplification of Proteinase K Gene</figcaption></figure> <figure style="width:40%; text-align:center;"><img src="https://static.igem.wiki/teams/6003/engineering/sds-20prok.webp" style="width:40%; border-radius:10px;"><figcaption style="font-size:14px; color:#555; margin-top:6px;">figue 3.SDS-PAGE Analysis of Proteinase K Expression</figcaption></figure></div><p>To verify the successful construction and expression of Proteinase K, we first performed colony PCR, which confirmed the presence of the expected proteinase K fragment in the recombinant plasmid. Subsequently, we attempted protein expression in E. coli MG1655 λ cI857 and analyzed the protein expression by SDS-PAGE. However, the expected Proteinase K band was barely detectable, and the band pattern was almost identical to that of the MG1655 λ cI857 control, suggesting low expression or poor solubility under the tested conditions.</p><img class = "img" src = "https://static.igem.wiki/teams/6003/engineering/milk-20plate.webp"><p>figue 4.Growth and Enzymatic Activity of Proteinase K on Milk Agar Plate</p><p>These results indicate that, while the construct was successfully assembled, further optimization is required to achieve detectable Proteinase K expression and activity. Possible contributing factors include insufficient induction conditions, protein instability, formation of inclusion bodies, or suboptimal assay sensitivity.</p>' },
        { title: 'Learn', text: '<p>From the test results, we inferred that the low or undetectable Proteinase K expression could be due to limitations in transcriptional or translational efficiency under the lac promoter, protein instability, or formation of inclusion bodies in <em>E. coli</em> MG1655 λ cI857. Additionally, the enzymatic assay might not have been sensitive enough to detect weak activity.</p><p>It is also possible that Proteinase K exhibits optimal activity only at higher temperatures (around 50–66 °C), while our host strain <em>E. coli</em> MG1655 λ cI857 undergoes lysis at approximately 40 °C due to the λ cI857 system. This temperature constraint prevented us from testing Proteinase K under its ideal reaction conditions. Furthermore, Proteinase K may have intrinsic toxicity to <em>E. coli</em> cells, potentially reducing expression levels or affecting protein stability.</p><p>From these findings, we learned that Proteinase K may not be compatible with our current expression system due to host and temperature limitations. Therefore, we decided not to further optimize Proteinase K expression and instead focused on the other biofilm-degrading enzymes in the following experiments.</p><img class = img src = "https://static.igem.wiki/teams/6003/engineering/screenshot-202025-10-06-20at-201-11-44-e2-80-afam.webp"></img>' },
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
  position: relative;
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
  height: 200vh;
}
.text-content {
  font-size: 18px;
  text-align: justify; 
  text-justify: inter-word;
}
.img {
  max-width: 100%;
}
.scroll-body {
  overflow: auto;
  padding: 8px 16px 16px;
  max-height: calc(80vh - 56px - 48px - 16px);
}
</style>
