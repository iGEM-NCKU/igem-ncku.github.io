<template>
    <page_loader :loading = 'loading' />
    <title_nav />
    
    <v-container>
        <v-row align = start>
            <v-col v-for = 'i in pre' :key = 'i' cols = 3>
                <v-hover>
                    <template v-slot:default = '{isHovering, props}'>
                        <a :href = 'i'>
                            <v-card
                                v-bind = 'props'
                                v-ripple
                                
                                :variant = 'alpha.card.style'
                                :title = 'title(i)'
                                :text = 'i'
                                :color = 'isHovering ? `amber` : ``'
                            />
                        </a>
                    </template>
                </v-hover>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols = 12>
                <v-card class = 'text-center' subtitle = 'The iGEM Tainan 2025' :variant = 'alpha.card.style'>
                    <template v-slot:title>
                        Bye<b class = 'green-text'>film</b>
                    </template>
                    <!-- dk -->
                    <v-img src = banner.png max-height = 200px />
                </v-card>
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <v-card subtitle = Introduction :variant = 'alpha.card.style'>
                    <template v-slot:title>
                        What is <b class = amber-text> iGEM </b>
                    </template>
                    <template v-slot:text>
                        <b>
                            <a href = http://igem.org/Main_Page> International Genetically Engineered Machine Competition </a>
                            ，簡稱 iGEM，是全球最高等級的合成生物學競賽，每年由美國麻省理工學院（Massachusetts Institute of Technology , MIT）主辦。 合成生物學，為新興學科，融合了生物、工程、物理、計算機科學和其他多項領域的綜合性科學工程，大賽目的在於「促進跨學科領域研究與合作，利用工程手段創造標準化的生物元件（Bio-Brick），並利用它們構建具有各種實用價值的微生物遺傳體，並解決社會問題。」曾多次被 Nature 等國際權威科學雜誌報導，每年約有200多隊，來自超過30個國家參賽。 
                        </b>
                    </template>
                </v-card>
            </v-col>
            <v-col>
                <v-card subtitle = Introduction :variant = 'alpha.card.style'>
                    <template v-slot:title>
                        What is <b class = 'orange-text'> Synthetic Biology </b>
                    </template>
                    <template v-slot:text>
                        <b>
                             「合成生物學」是項融合了生物、工程科學、物理、化學、計算機科學和其他多項領域的綜合性科學工程。2004年美國MIT出版的
                             <a href = 'http://www.rle.mit.edu/thz/documents/10_emerging_tech.pdf'> 《Technology Review》</a>
                             將合成生物學列為將改變世界的十大新技術之一。簡單地說，合成生物學通過設計和構建自然界中不存在的人工生物系統來解決能源、材料、健康和環保等問題。透過合成生物學設計的新元件，組裝出真正的生物系統，並令其在活體細胞中工作。
                        </b>
                    </template>
                </v-card>
            </v-col>
        </v-row>

        
        <v-row>
            <v-col>
                <v-card subtitle = 'About us' :variant = 'alpha.card.style'>
                    <template v-slot:title>
                        <b class = 'cyan-text'> Why </b> we do
                    </template>
                    <template v-slot:text>
                        <b>
                            成功大學擁有最完整的學院與系所，並接近南部科學工業園區。我們的使命是從大學出發，運用各自的背景專業、結合這片土地的優勢，去連結世界，透過合成生物學，開創出新的跨領域合作風氣、環境與開創藍海。 
                        </b>
                    </template>
                </v-card>
            </v-col>
            <v-col>
                <v-card subtitle = 'About us' :variant = 'alpha.card.style'>
                    <template v-slot:title>
                        <b class = 'cyan-text'> How </b> we do
                    </template>
                    <template v-slot:text>
                        <b>
                            透過跨領域的整合，促成對話與合作，讓討論的所產生的火花成為產品的原型，並且站在巨人的肩膀上，動手解決問題。 
                        </b>
                    </template>
                </v-card>
            </v-col>
            <v-col>
                <v-card subtitle = 'About us' :variant = 'alpha.card.style'>
                    <template v-slot:title>
                        <b class = 'cyan-text'> What </b> we do
                    </template>
                    <template v-slot:text>
                        <b>
                            將近半年的Pre-Training，打好彼此的專業知識基礎，解決各領域的成員在溝通上的障礙；寒假時期定訂出最後比賽計畫與方向；下學期各部門專業分工；並於暑假時舉辦亞洲太平洋交流會，邀請海外國家團隊，來台南一同交流、展現成果，創造更好的跨領域環境，並透過實作去真正的解決問題。 
                        </b>
                    </template>
                </v-card>
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <v-card subtitle = Byefilm!! title = 'Who are we' :variant = 'alpha.card.style'>
                    <template v-slot:text>
                        <b>
                            團隊成立於 2024 年暑假末，起初為一些化工系的大學部學生，發現成功大學雖為全台最綜合學科大學，大學部卻鮮少有跨領域整合團隊，朝著一個目標而努力實踐，甚至將成果打上國際舞台，看見世界之大。

                            因此，在 2024 年九月與十月時，經由一系列團隊招募活動，最後聚集了10個系所的25位同學，一同聚集與此，發揮各自所長，像最後的目標努力，並讓成功大學的跨領域合作，被世界看到，並獲得重視，最後產生成功大學的跨領域合作風氣與漣漪。 
                        </b>
                    </template>
                </v-card>
            </v-col>
        </v-row>
            
    </v-container>
    
    <v-container>
        <v-card title = 'Testing Area' color = 'grey'>
            <v-card subtitle = 'Card Style' color = 'cyan'>
                <template v-slot:text>
                    <v-btn v-for = 'i in alpha.card.f' :key = 'i' rounded = 'xl' @click = 'alpha.card.style = i'>
                        {{ i ? i : 'normal' }}
                    </v-btn>
                </template>
            </v-card>
        </v-card>
    </v-container>
    
    <v-btn block rounded = 'xl' color = 'cyan' variant = outlined>
        <v-icon icon = 'mdi-domain' />
        Button
    </v-btn>
</template>

<script>
 /* eslint-disable */ 
import $ from 'jquery'
import M from 'materialize-css'

import title_nav from '@/title.vue'
import page_loader from '@/loader.vue'

export default {
    name: 'App',
    data() {
        return {
            loading: true,
            pre: ['wetlab', 'human-practices', 'medal', 'members'],
            vw: [],
            show_nav: false,
            alpha: {
                card: {
                    style: undefined,
                    f: ['outlined', undefined, 'tonal', 'text', 'plain', 'flat']
                },
                page: {
                    color: 'wheat'
                }
            }
        }
    },
    components: {
        title_nav,
        page_loader
    },
    mounted() {
        M.AutoInit();
        this.title('this is a book');
        $.get('.')
        this.vw = new Array(this.pre.length);
        setTimeout(() => {
            this.loading = false;
        }, 100);
    },
    methods: {
        submit() {
            M.toast({html: 'submit'});
            return;
        },
        title(x) {
            x = x.replace('-', ' ');
            var f = [];
            for(var i of x.split(' ')) {
                f.push(i[0].toUpperCase() + i.substr(1).toLowerCase());
            }
            return (f.join(' '));
        },
        view(i) {
            this.vw[i] = true;
        },
        endview(i) {
            this.vw[i] = false;
        },
        set_html_color(x) {
            this.alpha.page.color = x;
        }
    }
}
</script>

<style>
* {
  transition: 1s all;
}
body {
    background-color: wheat;
}
.blur {
  z-index: 10;
  background-color: rgba(255, 255, 255, .75);
  backdrop-filter: blur(5px);
  position: absolute;

}
.center {
  position: fixed;
  left: calc(50% - 70px);
  transform: translateX(50%);
}
.bold {
  font-weight: 700;
}
a.unfocused, a.unfocused:visited, a.unfocused:hover, a.unfocused:active {
    color: inherit;
}
.button {
    text-decoration: none;
}
.placeholder {
    background-color: transparent;
    /* display: block; */
    height: 120px;
    /* position: absolute; */
}
.msgbox {
    z-index: 1000;
    position: fixed;
    backdrop-filter: blur(20px);
    background-color: rgba(100, 100, 100, .75);
    top: 10vh;
    left: 35vw;
    width: 30vw;
    height: 50vh;
    border-radius: 10px;
}
</style>