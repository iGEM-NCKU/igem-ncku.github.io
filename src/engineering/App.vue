<template>
  <appLayout>
    <v-container class="d-flex justify-center" style="height: 35vh;">
      <div class="circle-container">
        <v-btn class="circle-btn" @click="prevCard">Prev</v-btn>
        <div class="cards">
          <!-- 顯示卡片標題及描述在卡片上方 -->
          <v-card
            v-for="(item, i) in items"
            :key="i"
            class="circle-card"
            :style="getCardStyle(i)"
          >
            <v-card-title>{{ item.title }}</v-card-title>
            <v-card-text>{{ item.text }}</v-card-text>
          </v-card>
        </div>
        <v-btn class="circle-btn" @click="nextCard">Next</v-btn>
      </div>
    </v-container>
  </appLayout>
</template>

<script>
import appLayout from '@/AppLayout.vue'

export default {
  data() {
    return {
      items: [
        { title: 'Design', text: 'This is some description for Design.' },
        { title: 'Build', text: 'This is some description for Build.' },
        { title: 'Test', text: 'This is some description for Test.' },
        { title: 'Learn', text: 'This is some description for Learn.' },
      ],
      totalCards: 4, 
      radius: 200,  
      angle: 0,  
    };
  },
  components: {
    appLayout
  },
  methods: {
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
    },
    nextCard() {
      this.angle -= 90; 
    },
  },
};
</script>


<style scoped>
.circle-container {
  position: absolute;
  width: 600px;
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
  right: 10vw;
  transform-style: preserve-3d; 
  transform-origin: center center;
}

.circle-card {
  width: 400px;
  height: 400px;
  background-color: rgb(0, 124, 27);
  text-align: center;
  border-radius: 10px;
  position: absolute;
  transition: transform 1s ease;
  cursor: pointer;
}

.circle-btn {
  position: absolute;
  top: 20vw;
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
  left: -280px;
}

.circle-btn:last-child {
  right: -200px;
}

.v-dialog .v-card {
  transform: scale(1.1);
  transition: transform 0.3s ease;
}
</style>
