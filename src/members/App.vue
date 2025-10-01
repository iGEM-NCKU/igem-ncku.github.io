<template>
    <v-app>
        <page_loader :loading='loading' />
        <title_nav />

        <v-main>
            <v-container>
                <v-row>
                    <v-col v-for="i, j in members" :key="i" cols="12" sm="6" lg="4">
                        <!-- frontttt -->

                        <v-dialog v-model='view[j]' class = 'text-center pa-4' width = auto>
                            <template #activator='{ props }'>
                                <v-card v-bind="props" height="500px" class="glass-card elevate"
                                    :image="`members_picture/${i}.jpg`" :title="i"
                                    v-ripple v-reveal>
                                </v-card>
                            </template>
                            
                            <v-card width = 500px align = center justify = center :prepend-avatar = "`members_picture/${i}.jpg`">
                                <template #image>
                                    <v-img :src = "`members_picture/${i}.jpg`" class = 'align-end' cover style = 'filter: blur(10px); opacity: 50%' />
                                </template>
                                
                                <template #title>
                                    {{ i }}
                                </template>
                                <template #subtitle>
                                    Byefilm
                                </template>
                                <template #text>
                                    <v-card :title = members_info[i].Major subtitle = Major prepend-icon = 'fa-solid fa-graduation-cap' color = amber-darken-2 variant = tonal class = 'pa-3 ma-3' />
                                    <v-card :title = "members_info[i].Group.join(' / ')" subtitle = Group prepend-icon = 'fa-solid fa-flask' color = green variant = tonal class = 'pa-3 ma-3' />
                                    <v-card :title = members_info[i].Position subtitle = Position prepend-icon = 'fa-solid fa-map-pin' color = blue variant = tonal class = 'pa-3 ma-3' />

                                    <!-- <div v-for='j, k in members_info[i]' :key=k>
                                        <v-chip v-text=k rounded=none variant=outlined class='ma-2' />
                                        <br>
                                        <template v-if='k == `Group`'>
                                            <v-chip v-text=l variant=elevated v-for='l in j' :key=l class='ma-2' />
                                        </template>
                                        <v-chip v-text=j variant=elevated v-else class='ma-2' />
                                    </div> -->
                                </template>
                                <template #actions>
                                    <v-btn @click='view[j] = false'> ok </v-btn>
                                </template>
                            </v-card>

                        </v-dialog>
                    </v-col>
                </v-row>
            </v-container>

        </v-main>
    </v-app>

    <site_footer></site_footer>
</template>

<script>
 /* eslint-disable */ 
import $ from 'jquery'
import M from 'materialize-css'

import title_nav from '@/title.vue'
import page_loader from '@/loader.vue'
import site_footer from '@/footer.vue'

export default {
    name: 'App',
    data() {
        return {
            loading: true,
            members: ['Aaron', 'Jerry', 'Johan', 'Kathleen', 'Kelly', 'Richie', 'Sue', 'Yin', 'ysh'],
            members_info: {
                'Aaron': {
                    'Major': 'International Bachelor Degree Program on Energy',
                    'Group': ['Human Practice'],
                    'Position': 'Member'
                },
                'Jerry': {
                    'Major': 'Life Sciences',
                    'Group': ['Wet Lab'],
                    'Position': 'Leader'
                },
                'Johan': {
                    'Major': 'Depart. of Biotechnology and Bioindustry Sciences',
                    'Group': ['Dry Lab'],
                    'Position': 'Member'
                },
                'Kathleen': {
                    'Major': 'International business',
                    'Group': ['Human Practice'],
                    'Position': 'Leader'
                },
                'Kelly': {
                    'Major': 'Life Sciences',
                    'Group': ['Wet Lab', 'Dry Lab', 'Human Practice'],
                    'Position': 'Leader'
                },
                'Richie': {
                    'Major': 'Life Sciences',
                    'Group': ['Dry Lab'],
                    'Position': 'Leader'
                },
                'Sue': {
                    'Major': 'Bio-Chemistry',
                    'Group': ['Wet Lab', 'Human Practice'],
                    'Position': 'Member'
                },
                'Yin': {
                    'Major': 'Life Sciences',
                    'Group': ['Wet Lab'],
                    'Position': 'Member'
                },
                'ysh': {
                    'Major': 'Electrical Engineering',
                    'Group': ['Dry Lab'],
                    'Position': 'Member'
                },
            },
            flippedCard: null,
            view: [],
            yes: false
        }
    },
    components: {
        title_nav,
        page_loader,
        site_footer
    },
    mounted() {
        M.AutoInit();
        this.view = new Array(this.members.length);
        setTimeout(() => {
            this.loading = false;
        }, 100);
    },
    methods: {
        title(x) {
            x = x.replace('-', ' ');
            var f = [];
            for(var i of x.split(' ')) {
                f.push(i[0].toUpperCase() + i.substr(1).toLowerCase());
            }
            return (f.join(' '));
        },
        flipCard(card) {
        this.flippedCard = this.flippedCard === card ? null : card;
    }
    }
}
</script>

<style>
* {
  transition: 1s all;
}
.dim {
    filter: brightness(50%);
}

.flip-container {
  perspective: 1000px; 
}

.flip-card {
  width: 100%;
  height: 500px;
  position: relative;
  transform-style: preserve-3d;
  cursor: pointer;
}

.flip-card-inner {
  position: absolute;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
}

.flip-card.flipped .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.flip-card-back {
  transform: rotateY(180deg);
}

* {
    transition: all 1s;
}

@keyframes carz {
    0% {
        /* position: relative; */
    }
    100% {
        position: fixed;
        top: 50px;
        left: 50px;
    }
}

.test {
    animation: carz 1s;
    position: fixed;
    top: 50px;
    left: 50px;
}
</style>
