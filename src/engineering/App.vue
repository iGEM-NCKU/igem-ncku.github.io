<template>
  <appLayout>
    <v-container class="d-flex justify-center" style="height: 35vh;">
      <div class="circle-container">
        <v-btn class="circle-btn" @click="prevCard">Prev</v-btn>
        <div class="cards">
          <v-card
            v-for="(item, i) in items"
            :key="i"
            class="circle-card"
            :style="getCardStyle(i)"
            @click="openDialog(item)"
          >
            <v-card-title>{{ item.title }}</v-card-title>
          </v-card>
        </div>
        <v-btn class="circle-btn" @click="nextCard">Next</v-btn>
      </div>
    </v-container>

    <!-- Dialog to display selected item details -->
    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <v-card-title class="headline">{{ selectedItem.title }}</v-card-title>
        <v-card-text>{{ selectedItem.text }}</v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="dialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </appLayout>
</template>

<script>
import appLayout from '@/AppLayout.vue'

export default {
  data() {
    return {
      dialog: false,  // 控制 dialog 的顯示
      selectedItem: {},  // 用來存儲選中的卡片內容
      items: [
        { title: 'Design', subtitle: 'Subtitle 1', text: 'This is some description for Design.' },
        { title: 'Build', subtitle: 'Subtitle 2', text: 'This is some description for Build.' },
        { title: 'Test', subtitle: 'Subtitle 3', text: 'This is some description for Test.' },
        { title: 'Learn', subtitle: 'Subtitle 4', text: 'This is some description for Learn.' },
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
    },
    openDialog(item) {
      this.selectedItem = item;  // 更新選中的項目
      this.dialog = true;  // 打開對話框
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
  height: 200px;
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
