<template>
    <v-app>
        <page_loader :loading='loading' />
        <title_nav />
        <v-main>
            <sidenav name='experiments' />
            <v-container class="d-flex justify-center" style="height: 35vh;">
                <div class="circle-container">
                    <v-btn class="circle-btn" @click="prevCard">Prev</v-btn>
                    <div class="cards">
                        <v-card
                            v-for="(item, i) in items"
                            :key="i"
                            class="circle-card"
                            :style="getCardStyle(i)"
                        >
                            <v-card-title>{{ item.title }}</v-card-title>
                        </v-card>
                    </div>
                    <v-btn class="circle-btn" @click="nextCard">Next</v-btn>
                </div>
            </v-container>

            <!-- Below container to display selected item details automatically -->
            <v-container class="my-4 d-flex justify-center align-center">
                <v-card v-if="selectedItem.title">
                    <v-card-title>{{ selectedItem.title }}</v-card-title>
                    <v-card-text>{{ selectedItem.text }}</v-card-text>
                </v-card>
            </v-container>

        </v-main>
    </v-app>

    <site_footer></site_footer>
</template>

<script>
import title_nav from '@/title.vue'
import page_loader from '@/loader.vue'
import sidenav from '@/sidenav.vue'
import site_footer from '@/footer.vue'

export default {
  data() {
    return {
      dialog: false,  // 控制 dialog 顯示
      selectedItem: {},  // 被選中的卡片內容
      items: [
        { title: 'Card 1', subtitle: 'Subtitle 1', text: 'This is some description for Card 1.' },
        { title: 'Card 2', subtitle: 'Subtitle 2', text: 'This is some description for Card 2.' },
        { title: 'Card 3', subtitle: 'Subtitle 3', text: 'This is some description for Card 3.' },
        { title: 'Card 4', subtitle: 'Subtitle 4', text: 'This is some description for Card 4.' },
      ],
      totalCards: 4, 
      radius: 200,  
      angle: 0,  
    };
  },
  components: {
    title_nav,
    page_loader,
    sidenav,
    site_footer
  },
  methods: {
    getWrapperStyle() {
      return {
        transform: `rotateY(${this.angle}deg)`,
        transition: 'transform 1s ease', 
      };
    },
    getCardStyle(index) {
      const angle = (index / this.totalCards) * 360; 
      const rotateY = angle + this.angle; 
      return {
        transform: `rotateY(${rotateY}deg) translateZ(${this.radius}px)`,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transformOrigin: 'center center',
        transition: 'transform 1s ease', 
      };
    },
    prevCard() {
      this.angle += 90; 
      this.updateSelectedItem();
    },
    nextCard() {
      this.angle -= 90; 
      this.updateSelectedItem();
    },
    updateSelectedItem() {
      const index = Math.abs(Math.floor((this.angle / 360) * this.totalCards)) % this.totalCards;
      this.selectedItem = this.items[index]; 
    }
  },
  watch: {
    angle() {
      this.updateSelectedItem();
    }
  },
  mounted() {
    this.updateSelectedItem();
  }
};
</script>

<style scoped>
.circle-container {
  position: absolute;
  width: 400px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 1000px; 
}

.cards {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d; 
  transform-origin: center center;
}

.circle-card {
  width: 150px;
  height: 100px;
  background-color: rgb(0, 80, 56);
  text-align: center;
  border-radius: 10px;
  position: absolute;
  transition: transform 1s ease;
  cursor: pointer;
}

.circle-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 24px;
  background-color: rgba(0, 0, 0, 0.2);
  color: white;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 1;
}

.circle-btn:first-child {
  left: -40px;
}

.circle-btn:last-child {
  right: -200px;
}

.v-dialog .v-card {
  transform: scale(1.1);
  transition: transform 0.3s ease;
}
</style>
