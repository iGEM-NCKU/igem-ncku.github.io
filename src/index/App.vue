<template>
    <v-app>
    <page_loader :loading = 'loading' />
    <title_nav />

    <!-- {{ mobile }} -->
    
    <v-main>
    <!-- Compact hero with tagline and quick links -->
    <v-container class = 'mt-6'>
        <v-row>
            <v-col cols = 12>
                <v-card class = 'glass-card elevate text-center' image = banner.png>
                    <template #title>
                        <span class = 'text-primary'>bye</span><b class = 'text-accent'>film</b>
                    </template>
                    <template #subtitle>
                        Breaking biofilms, empowering recovery
                    </template>
                    <template #text>
                        <v-btn size = small color = 'primary' rounded = xl class = 'ma-1' href = 'description'>Project</v-btn>
                        <v-btn size = small color = 'primary' rounded = xl class = 'ma-1' href = 'wetlab'>WetLab</v-btn>
                        <v-btn size = small color = 'primary' rounded = xl class = 'ma-1' href = 'drylab'>DryLab</v-btn>
                        <v-btn size = small color = 'primary' rounded = xl class = 'ma-1' href = 'integrated-human-practices'>IHP</v-btn>
                        <v-btn size = small color = 'primary' rounded = xl class = 'ma-1' href = 'members'>Team</v-btn>
                    </template>
                </v-card>
            </v-col>
        </v-row>
    </v-container>

    <v-container>
        <v-row align = start>
            <v-col v-for = 'i in pre' :key = 'i' md = 6 cols = 12 lg = 3>
                <v-hover>
                    <template v-slot:default = '{isHovering, props}'>
                        <a :href = 'i'>
                            <v-card
                                v-bind = 'props'
                                v-ripple
                                class = 'glass-card elevate'
                                variant = 'elevated'
                                :title = 'title(i)'
                                :text = 'i'
                                :color = 'isHovering ? `primary` : ``'
                            />
                        </a>
                    </template>
                </v-hover>
            </v-col>
        </v-row>
        <v-divider class = 'my-6' />

        <v-row>
            <v-col cols = 12>
                <v-card class = 'text-center glass-card elevate' subtitle = 'The iGEM Tainan 2025' variant = 'elevated' v-reveal>
                    <template v-slot:title>
                        Bye<b class = 'text-primary'>film</b>
                    </template>
                    <!-- dk -->
                    <v-img src = banner.png max-height = 200px />
                </v-card>
            </v-col>
        </v-row>
        <v-divider class = 'my-6' />

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
                    class = 'text-right glass-card elevate'
                    subtitle = 'The iGEM Tainan 2025'
                    image = video.png
                    @click = 'video_play = true'
                    variant = 'elevated' v-reveal
                >
                    <template v-slot:title>
                        Promotion <b class = 'text-primary'> Video </b>
                    </template>
                    <!-- dk -->
                    <template v-slot:text>
                        <v-btn color = 'primary' variant = 'elevated' @click = 'video_play = true'>Watch video</v-btn>
                    </template>
                </v-card>
            </v-col>
        </v-row>
    </v-container>

    <div class = 'scroller'>
        <div id = 'filter-inside' class = 'glass-card elevate'>
            <v-card variant = plain>
                <template #title>
                    Here is the title
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
        <v-row>
            <v-col cols = 12 sm = 6>
                <v-card subtitle = Introduction variant = 'elevated' class = 'glass-card elevate' v-reveal>
                    <template v-slot:title>
                        What is <b class = 'text-primary'> iGEM </b>
                    </template>
                    <template v-slot:text>
                        <b>
                            <a href = http://igem.org/Main_Page> International Genetically Engineered Machine Competition </a>
                        </b>
                    </template>
                </v-card>
            </v-col>
            <v-col cols = 12 sm = 6>
                <v-card subtitle = Introduction variant = 'elevated' class = 'glass-card elevate' v-reveal>
                    <template v-slot:title>
                        What is <b class = 'text-primary'> Synthetic Biology </b>
                    </template>
                    <template v-slot:text>
                        <b>
                             「合成生物學」…
                        </b>
                    </template>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
    
    </v-main>
    <site_footer />
    </v-app>
</template>

<script>
/* eslint-disable */ 
import { useDisplay } from 'vuetify'
import title_nav from '@/title.vue'
import page_loader from '@/loader.vue'
import site_footer from '@/footer.vue'

export default {
    name: 'App',
    data() {
        return {
            loading: true,
            pre: ['wetlab', 'integrated-human-practices', 'education', 'members'],
            mobile: useDisplay(),
            video_play: false
        }
    },
    components: { title_nav, page_loader, site_footer },
    mounted() {
        setTimeout(() => { this.loading = false }, 100);
    },
    methods: {
        title(x) {
            while(x.indexOf('-') != -1) x = x.replace('-', ' ');
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
    background-color: #000;
    min-height: 500px;
    /* background-image intentionally omitted for build stability; add via inline style if needed */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    backdrop-filter: blur(10px);
}
#filter-inside {
    background-color: rgba(255, 255, 255, .34);
    width: min(900px, 85vw);
    z-index: 10;
    position: relative;
    margin: 60px auto;
    padding: 16px;
    backdrop-filter: blur(18px);
    border-radius: var(--radius);
}
</style>
