<template>
  <v-app>
    <page_loader :loading = 'loading' />
    <title_nav />

    <!-- {{ mobile }} -->
    
    <v-main>
        <!-- <v-icon>fa-solid fa-home</v-icon>
        <v-btn icon = 'mdi-alpha-r-circle-outline mdi-set' class = mdi-alpha-r-circle-outline></v-btn>
        <v-icon class = 'mdi-alpha-r-circle-outline mdi-set'></v-icon> -->

    <div class = 'scroller'>
        <div id = 'filter-inside'>
            <!-- We should put some text here, right? -->

            <v-card variant = plain>
                <template #title>
                    <b class = 'white-text'> Here is the title </b>
                </template>
                <template #subtitle>
                    Here comes the subtitle
                </template>
                <template #text>
                    This is a book
                </template>
            </v-card>
        </div>
    </div>


    <v-container>

        <page_loader :loading = video_play />
        <v-dialog v-model = 'video_play' width = auto>
            <!-- For video -->
            <v-card justify = center>
                <iframe title="NCKU-Tainan: Byefilm – Breaking biofilms, empowering recovery (2025) - Project Promotion [English]" width="560" height="315" src="https://video.igem.org/videos/embed/sBDRwoa4gaBw365v6svKyc?autoplay=1" frameborder="0" allowfullscreen="" sandbox="allow-same-origin allow-scripts allow-popups allow-forms"></iframe>
            </v-card>
        </v-dialog>

        <v-row>
            <v-col cols = 12>
                <v-card
                    class = 'text-right'
                    subtitle = 'The iGEM Tainan 2025'
                    color = black
                    image = video.png
                    style = 'backdrop-filter: blur(10px)'
                    @click = 'video_play = true'
                    :variant = 'alpha.card.style'
                >
                    <template v-slot:title>
                        Promotion <b class = 'green-text'> Video </b>
                    </template>
                    <!-- dk -->
                    <template v-slot:text>
                        <a class = 'btn-large hoverable pulse green' @click = 'video_play = true'> SHOW ME THIS </a>
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

    </v-main></v-app>

    <site_footer></site_footer>
</template>

<script>
 /* eslint-disable */ 
import $ from 'jquery'
// import M from 'materialize-css'

import title_nav from '@/title.vue'
import page_loader from '@/loader.vue'
import site_footer from '@/footer.vue'

import { useDisplay } from 'vuetify'

export default {   
    name: 'App',
    data() {
        return {
            loading: true,
            pre: ['wetlab', 'integrated-human-practices', 'education', 'members'],
            vw: [],
            show_nav: false,
            alpha: {
                card: {
                    style: undefined,
                    f: ['outlined', undefined, 'tonal', 'text', 'plain', 'flat']
                },
                page: {
                    color: '#f2ffde'
                }
            },
            mobile: useDisplay(),
            video_play: false
        }
    },
    components: {
        title_nav,
        page_loader,
        site_footer
    },
    mounted() {
        M.AutoInit();
        this.title('this is a book');
        $.get('.')
        this.vw = new Array(this.pre.length);
        setTimeout(() => {
            this.loading = false;
        }, 100);
        setInterval(() => {
            var currently_position = (window.scrollY);
            var page_length = (document.body.clientHeight);
            var window_height = (window.innerHeight);
            var now = ($('#filter-inside').position().top);
            var height = ($('#filter-inside').height());

            var max = (a, b) => (a > b ? a : b);
            var min = (a, b) => (a ^ b ^ max(a, b));
            
            if($('#filter-inside').position().top <= window_height) {
                let scale = currently_position * 1.0 / height;
                $('.scroller').css({
                    transform: `scale(${1 + scale})`
                })

                let sc = `${min(max(10, 60 - (Math.floor(now * 40) / max(1, (window_height - height)) + 10)), 50)}%`;
                console.log(sc);
                $('#filter-inside').css({
                    left: sc
                }, 0);
            }
        }, 100);
    },
    methods: {
        submit() {
            M.toast({html: 'submit'});
            return;
        },
        title(x) {
            while(x.indexOf('-') != -1) x = x.replace('-', ' ');
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
.scroller {
    background-color: black;
    min-height: 500vh;
    background-image: url('/public/TGEM_NCKU-Tainan.jpg');
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    backdrop-filter: blur(10px);
    display: block;
}
#filter-inside {
    background-color: rgba(255, 255, 255, .34);
    width: 45vw;
    height: 80%;
    z-index: 10;
    position: fixed;
    top: 10%;
    left: 50vw;
    backdrop-filter: blur(30px);
    border-radius: 10px;
}
</style>