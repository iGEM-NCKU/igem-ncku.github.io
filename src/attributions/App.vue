<template>
    <v-app>
    <page_loader :loading = 'loading' />
    <title_nav />
    
    <v-main>
        <div class="row mt-4">
            <iframe
                style='width: 100%'
                id="igem-attribution-form"
                src="https://teams.igem.org/wiki/6003/attributions">
            >
            </iframe>
        </div>

        </v-main>
    </v-app>
</template>

<script>
 /* eslint-disable */ 
import $ from 'jquery'
import M from 'materialize-css'

import title_nav from '@/title.vue'
import page_loader from '@/loader.vue'
import sidenav from '@/sidenav.vue'
import site_footer from '@/footer.vue'

export default {
    name: 'App',
    data() {
        return {
            loading: true,
            alpha: {
                card: {
                    theme: undefined,
                    f: ['outlined', undefined, 'tonal', 'text', 'plain', 'flat']
                },
                subcard: {
                    theme: 'tonal',
                    f: ['outlined', undefined, 'tonal', 'text', 'plain', 'flat']
                }
            }
        }
    },
    components: {
        title_nav,
        page_loader,
        sidenav,
        site_footer
    },
    mounted() {
        M.AutoInit();
        setTimeout(() => {
            this.loading = false;
        }, 100);
        window.addEventListener("message", function (e) {
        if (e.origin === "https://teams.igem.org") {
            const {type, data} = JSON.parse(e.data);
            if (type === "igem-attribution-form") {
            const element = document.getElementById("igem-attribution-form");
            element.style.height = `${data + 100}px`;
            }
        }
        });
    },
    methods: {
        title(x) {
            x = x.replace('-', ' ');
            var f = [];
            for(var i of x.split(' ')) {
                f.push(i[0].toUpperCase() + i.substr(1).toLowerCase());
            }
            return (f.join(' '));
        }
    }
}
</script>

<style>
* {
  transition: 1s all;
}
.blur {
  z-index: 10;
  background-color: rgba(255, 255, 255, .75);
  backdrop-filter: blur(5px);
  position: absolute;

}
a.unfocused, a.unfocused:visited, a.unfocused:hover, a.unfocused:active {
    color: inherit;
}
</style>

<!--
<template>
  <v-app>
    <page_loader :loading="loading" />
    <title_nav />

    <v-main>
         <v-row justify = end><v-col cols = 12 md = 9 class = 'pa-5'>
            <v-row class = 'text-center scroller' id = 'Sponsor' >
                <v-col >
                    <v-card :variant="alpha.card.theme" class="text-box pa-5 scroll-box" id = Sponsor>
     
      <div class="row mt-4">
        <iframe
          style="width: 80%"
          id="igem-attribution-form"
          src="https://teams.igem.org/wiki/6003/attributions">
        </iframe>
      </div>
      </v-card>
      </v-col></v-row>
      </v-col><v-col cols = 1 /></v-row>
    </v-main>
  </v-app>
</template>

<script>
/* eslint-disable */
import $ from 'jquery'
import M from 'materialize-css'

import title_nav from '@/title.vue'
import page_loader from '@/loader.vue'
import sidenav from '@/sidenav.vue'
import site_footer from '@/footer.vue'

export default {
  name: 'App',
  data() {
    return {
      loading: true,
      alpha: {
        card: {
          theme: undefined,
          f: ['outlined', undefined, 'tonal', 'text', 'plain', 'flat']
        },
        subcard: {
          theme: 'tonal',
          f: ['outlined', undefined, 'tonal', 'text', 'plain', 'flat']
        }
      }
    }
  },
  components: {
    title_nav,
    page_loader,
    sidenav,
    site_footer
  },
  mounted() {
    // 初始化 Materialize
    M.AutoInit()

    // 模擬載入完成
    setTimeout(() => {
      this.loading = false
    }, 100)

    // ✅ iframe 高度自動調整（原本 template 裡的 script 搬到這裡）
    window.addEventListener('message', (e) => {
      if (e.origin === 'https://teams.igem.org') {
        const { type, data } = JSON.parse(e.data)
        if (type === 'igem-attribution-form') {
          const element = document.getElementById('igem-attribution-form')
          if (element) {
            element.style.height = `${data + 100}px`
          }
        }
      }
    })
  },
  methods: {
    title(x) {
      x = x.replace('-', ' ')
      return x
        .split(' ')
        .map((i) => i[0].toUpperCase() + i.substr(1).toLowerCase())
        .join(' ')
    }
  }
}
</script>

<style>
* {
  transition: 1s all;
}
.blur {
  z-index: 10;
  background-color: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(5px);
  position: absolute;
}
a.unfocused,
a.unfocused:visited,
a.unfocused:hover,
a.unfocused:active {
  color: inherit;
}
</style>
-->