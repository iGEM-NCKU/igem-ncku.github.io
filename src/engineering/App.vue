<template>
    <v-app>
      <page_loader :loading = 'loading' />
      <title_nav />
      <v-main>
        <sidenav name = 'software' />
      <v-row justify = end>
        <v-col cols = 12 md = 8 class = 'pa-5'>
          
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
          </v-col>
          <v-col cols = 1 />
        </v-row>
      </v-main>
    </v-app>
    <site_footer></site_footer>
</template>

<script>

import title_nav from '@/title.vue'
import page_loader from '@/loader.vue'
import site_footer from '@/footer.vue'
import sidenav from '@/sidenav.vue'
export default {
  data() {
    return {
      items: [
        { title: 'Design 1- Plasmids Construction', text: '<p>Our project aimed to disrupt pathogenic biofilms by engineering <em>E. coli</em> to produce a cocktail of biofilm-degrading enzymes. Since the biofilm extracellular polymeric substance (EPS) is composed of polysaccharides, extracellular DNA, and proteins, we selected three enzymes to target these key components:</p><ul><li>Dispersin B: Degrades PNAG polysaccharides.</li><li>DNase I: Cleavages extracellular DNA that stabilizes the biofilm.</li><li>Proteinase K: Hydrolyzes adhesive biofilm protein.</li></ul>' },
        { title: 'Build', text: '<strong>This</strong> is <em>some</em> <u>description</u> for <i>Card 1</i>.<strong>This</strong> is <em>some</em> <u>description</u> for <i>Card 1</i>.<strong>This</strong> is <em>some</em> <u>description</u> for <i>Card 1</i>.<strong>This</strong> is <em>some</em> <u>description</u> for <i>Card 1</i>.<strong>This</strong> is <em>some</em> <u>description</u> for <i>Card 1</i>.<strong>This</strong> is <em>some</em> <u>description</u> for <i>Card 1</i>.<strong>This</strong> is <em>some</em> <u>description</u> for <i>Card 1</i>.<strong>This</strong> is <em>some</em> <u>description</u> for <i>Card 1</i>.<strong>This</strong> is <em>some</em> <u>description</u> for <i>Card 1</i>.<strong>This</strong> is <em>some</em> <u>description</u> for <i>Card 1</i>.<strong>This</strong> is <em>some</em> <u>description</u> for <i>Card 1</i>.<strong>This</strong> is <em>some</em> <u>description</u> for <i>Card 1</i>.<strong>This</strong> is <em>some</em> <u>description</u> for <i>Card 1</i>.<strong>This</strong> is <em>some</em> <u>description</u> for <i>Card 1</i>.<strong>This</strong> is <em>some</em> <u>description</u> for <i>Card 1</i>.<strong>This</strong> is <em>some</em> <u>description</u> for <i>Card 1</i>.' },
        { title: 'Test', text: 'This is some description for Test.' },
        { title: 'Learn', text: 'This is some description for Learn.' },
      ],
      totalCards: 4, 
      radius: 400,  
      angle: 0,  
    };
  },
  components: {
    title_nav,
    page_loader,
    site_footer,
    sidenav
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
  width: 50vw;
  height: 100%;
  transform-style: preserve-3d; 
  transform-origin: center center;
}

.circle-card {
  width: 30vw;
  height: 50vh;
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

</style>
