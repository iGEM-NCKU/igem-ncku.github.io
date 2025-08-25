<template>
    <page_loader :loading = 'loading' />
    <title_nav />

    <div style = 'position: fixed' class = 'ma-5' v-if = '$vuetify.display.mdAndUp'>
        <!-- {{ scroller.now }} -->
        <v-hover>
            <template v-slot:default = '{isHovering, props}'>
                <v-card :variant = alpha.sidenav.style prepend-avatar = icon.png>
                    <template v-slot:title>
                        <div v-bind = props>
                            <!-- {{ isHovering ? `< Back` : `Navigation` }} -->
                            <a href = '.' v-text = '`< Back`' v-if = isHovering></a>
                            <b v-else> Navigation </b>
                        </div>
                    </template>
                    <template v-slot:subtitle>
                        <a href = '.' v-if = isHovering> Click to return to Homepage </a>
                        <b v-else> Human Practice </b>
                    </template>
                    <template v-slot:text>
                        <a :href = '`#${i}`' v-for = 'i, j in scroller.name' :key = 'i'>
                            <v-hover>
                                <template v-slot:default = '{isHovering, props}'>
                                    <v-card :text = 'i' :color = 'isHovering || j == this.scroller.now ? `orange` : undefined' :variant = 'j == this.scroller.now ? `outlined` : `tonal`' v-ripple v-bind = props />
                                </template>
                            </v-hover>
                        </a>
                    </template>
                </v-card>
            </template>
        </v-hover>
    </div>
    
    <v-row justify = end><v-col cols = 12 md = 8 class = 'pa-5'>
        <v-row class = text-center>
            <v-col>
                <v-card :variant = 'alpha.card.theme' title = 'Introduction to Problem' class = scroller id = 'Introduction-to-Problem'>
                    <template v-slot:text>
                        <p> Total Knee Arthroplasty (TKA) is a widely performed surgical procedure designed to restore joint function and improve quality of life for patients with severe knee damage. In the United States alone, over 800,000 TKA surgeries are performed annually. However, despite the success of most procedures, some patients experience unexpected and severe complications. </p>
                            <br>
                        <p> One of the most serious complications is Periprosthetic Joint Infection (PJI). PJI occurs when bacteria infect the area surrounding the implanted joint. It is often not detected immediately. Early symptoms—such as mild swelling, joint warmth, or low-grade fever—can easily be mistaken for normal post-surgical responses. </p>
                            <br>
                        <p> The real danger behind PJI lies in the formation of bacterial biofilms on the implant surface. Biofilms are communities of bacteria enclosed within a protective matrix that adheres strongly to the implant. Once established, they are highly resistant to both antibiotics and the body’s immune system. </p>
                            <br>
                        <p> Among the bacterial species responsible, Staphylococcus aureus is the most common, accounting for nearly 60% of PJI cases. Overall, biofilm-associated infections are responsible for over 80% of chronic implant infections, making them a major clinical concern. </p>
                            <br>
                        <p> Treating PJI is difficult and often requires multiple surgeries, long-term intravenous antibiotics, and in some cases, complete removal of the implant. This leads to prolonged recovery, increased healthcare costs, and psychological stress for patients who expected a restored life, not a long-term battle with infection. </p>
                            <br>
                        <p> Given the limitations of current treatments, new approaches are urgently needed. Our iGEM team aims to develop a synthetic biology-based solution that targets and disrupts biofilm formation at the root—offering a potential alternative or complement to traditional antibiotic therapy. </p>
                    </template>
                </v-card>
            </v-col>
        </v-row>
        <v-row class = text-center>
            <v-col>
                <v-card :variant = 'alpha.card.theme' title = 'Education' subtitle = 'Educational stuff' class = scroller id = 'Educational'>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols = 12 md = 6>
                <v-card :variant = 'alpha.card.theme' title = 'Games' subtitle = 'Education'>
                    <template v-slot:text>
                        To make our project more accessible and engaging, we are developing an educational mini-game that helps players understand the core concepts of our synthetic biology strategy. Inspired by real lab experiments, the game lets players design their own “enzyme troops” to mimic the bio-tools we use to target biofilms. Players analyze bacterial “towers” (representing biofilms), identify their weaknesses, and deploy their enzyme troops strategically to break them down. By turning science into interactive gameplay, we aim to spark curiosity and make learning about biofilms and synthetic biology fun and memorable.
                        <br>
                        <v-img src = 'https://hackmd.io/_uploads/ryKJAsnUxx.png' />
                    </template>
                </v-card>
            </v-col>

            <v-col cols = 12 md = 6>
                <a href = 'https://www.instagram.com/igemncku/' target = '_blank'>
                    <v-card :variant = 'alpha.card.theme' title = 'Instagram Reels' subtitle = 'Education' v-ripple>
                        <template v-slot:text>
                            We also created short reels in Instagram to help people understand more about our project and how we manage to develop a solution to cure the desease.
                            <v-col>
                                <v-card variant = tonal class = rainbow>
                                    <template v-slot:text>
                                        Check our instagram page to view for more @igemncku
                                    </template>
                                </v-card>
                            </v-col>
                        </template>
                    </v-card>
                </a>
            </v-col>
        </v-row>
    </v-col><v-col cols = 1 /></v-row>

    <v-row justify = end><v-col cols = 12 md = 8 class = 'pa-5'>
        <v-row class = text-center>
            <v-col>
                <v-card :variant = 'alpha.card.theme' title = 'Intergrated Human Practice' subtitle = 'IHP stuff' class = scroller id = 'Intergrated-Human-Practice'>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-card :variant = 'alpha.card.theme' title = 'Overview' subtitle = 'Intergrated Human Practice'>
                    <template v-slot:text>
                        To ensure our project addressed a real-world need, we placed Integrated Human Practices at the heart of our design process. By engaging with orthopedic surgeons, infection specialists, synthetic biologists, and even patients who had experienced Total Knee Arthroplasty (TKA), we gained critical insights into the devastating impact of Periprosthetic Joint Infections (PJI) and the limitations of current treatments. These discussions highlighted the urgent need for solutions that can effectively disrupt biofilms, especially those formed by Staphylococcus aureus, and helped shape our idea of engineering E. coli to target these infections. Concerns raised about biosafety and clinical applicability also guided our development of containment strategies and localized delivery methods. Through this continuous dialogue, Human Practices didn’t just support our project—it actively shaped our decisions, helping us build a solution that is not only innovative, but also ethically and clinically grounded.
                    </template>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-card :variant = 'alpha.card.theme' title = 'Brainstorming' subtitle = 'Intergrated Human Practice'>
                    <v-row>
                        <v-col v-for = "i in 'https://hackmd.io/_uploads/S1uaRj2Llx.png https://hackmd.io/_uploads/B1jOAon8ex.png https://hackmd.io/_uploads/BJYo1238xg.png https://hackmd.io/_uploads/H1xRy2h8xl.png'.split(' ')" :key = 'i'>
                            <v-img :src = 'i' />
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-card :variant = 'alpha.card.theme' title = 'Interviews' subtitle = 'Intergrated Human Practice'>
                    <template v-slot:text>
                        <v-col><v-card variant = tonal><template v-slot:text>
                            <p> To deepen our understanding of the real-world challenges behind Periprosthetic Joint Infection (PJI), we interviewed Dr. Lin, an experienced orthopedic surgeon, and had the rare opportunity to observe a Total Knee Arthroplasty (TKA) surgery firsthand. </p>

                            <v-row>
                                <v-img src = 'https://hackmd.io/_uploads/HJcjBh38ee.png' />
                                <v-img src = 'https://hackmd.io/_uploads/HJzaBh28eg.png' />
                            </v-row>

                            <p> This experience gave us valuable clinical insights into the complexity of implant infections and strengthened the relevance of our project. In addition, we reached out to NCKU iGEM alumni, including former team leaders Sabrina, to gather feedback on our project design and outreach strategy. Their guidance helped us refine our goals, avoid common pitfalls, and strengthen our approach through shared experience and mentorship. </p>
                        </template></v-card></v-col>
                    </template>
                </v-card>
            </v-col>
        </v-row>
    </v-col><v-col cols = 1 /></v-row>
    
    <v-row justify = end><v-col cols = 12 md = 8 class = 'pa-5'>
        <v-row class = 'text-center'><v-col>
            <v-card :variant = 'alpha.card.theme' title = 'Outreach with other teams'></v-card>
        </v-col></v-row>
        <v-row>
            <v-col>
                <v-card :variant = 'alpha.card.theme' title = 'Online idea exchange' subtitle = 'Outreach with other teams' class = scroller id = 'Outreach-with-other-teams' text = 'As part of our commitment to building a strong and collaborative synthetic biology community, we reached out to fellow iGEM teams to exchange ideas, share feedback, and explore opportunities for future collaboration. These conversations allowed us to learn from diverse perspectives, gain constructive input on our project design, and offer our support in return. Through open dialogue, we not only improved our scientific thinking but also built meaningful connections that reflect the true spirit of iGEM—innovation through cooperation.' />
            </v-col>
        </v-row>
        <v-row align = end>
            <v-col cols = 12 md = 6>
                <v-card :variant = 'alpha.card.theme' title = 'NYCU Taiwan' subtitle = 'Online idea exchange'>
                    <template v-slot:text>
                        <v-img src = 'https://hackmd.io/_uploads/rJ7Sm2hLgg.png' />
                    </template>
                </v-card>
            </v-col>
            <v-col cols = 12 md = 6>
                <v-card :variant = 'alpha.card.theme' title = 'CSMU Taiwan' subtitle = 'Online idea exchange'>
                    <template v-slot:text>
                        <v-img src = 'https://hackmd.io/_uploads/B10G4nhUee.png' />
                    </template>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols = 12 md = 6>
                <v-card :variant = 'alpha.card.theme' title = 'UTokyo' subtitle = 'Online idea exchange'>
                    <template v-slot:text>
                        <v-img src = 'https://hackmd.io/_uploads/B12rNnhIgg.png' />
                    </template>
                </v-card>
            </v-col>
            <v-col cols = 12 md = 6>
                <v-card :variant = 'alpha.card.theme' title = 'CCU Taiwan' subtitle = 'Online idea exchange'>
                    <template v-slot:text>
                        <v-img src = 'https://hackmd.io/_uploads/r1pwVnh8xg.png' />
                    </template>
                </v-card>
            </v-col>
        </v-row>
    </v-col><v-col cols = 1 /></v-row>

    <v-row justify = end><v-col cols = 12 md = 8 class = 'pa-5'>
        <v-row><v-col>
            <v-card title = 'Testing Area'>
                <template v-slot:text>
                    <v-card title = 'Card Theme'>
                        <template v-slot:text>
                            <v-btn v-for = 'i in alpha.card.f' :key = 'i' :color = 'alpha.card.theme == i ? `green` : undefined' @click = 'alpha.card.theme = i'> {{ i ? i : 'NORMAL' }} </v-btn>
                        </template>
                    </v-card>
                    <v-card title = 'Sidenav Theme'>
                        <template v-slot:text>
                            <v-btn v-for = 'i in alpha.card.f' :key = 'i' :color = 'alpha.sidenav.style == i ? `green` : undefined' @click = 'alpha.sidenav.style = i'> {{ i ? i : 'NORMAL' }} </v-btn>
                        </template>
                    </v-card>
                </template>
            </v-card>
        </v-col></v-row>
    </v-col><v-col cols = 1 /></v-row>
    
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
            scroller: {
                now: -1,
                name: []
            },
            alpha: {
                card: {
                    theme: undefined,
                    f: ['outlined', undefined, 'tonal', 'text', 'plain', 'flat']
                },
                sidenav: {
                    style: undefined
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
        setTimeout(() => {
            this.loading = false;
        }, 100);
        if(localStorage.getItem('alpha.theme') != undefined) this.alpha.card.theme = localStorage.getItem('alpha.theme');
        this.scroller.name = $('.scroller');

        this.init_scroller();
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
        init_scroller() {
            this.scroller.name = ($('.scroller').map(function(index) {
                return this.id;
            }).get());
            setInterval(() => {
                var overed = (x) => {
                    return $(`#${this.scroller.name[i]}`).position().top <= window.scrollY + 100;
                }
                var flag = false;
                for(var i in this.scroller.name) {
                    if(!overed(i)) {
                        this.scroller.now = (i - 1 < 0 ? 0 : i - 1);
                        flag = true;
                        break;
                    }
                }
                if(!flag) this.scroller.now = this.scroller.name.length - 1;
            }, 100);
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
.rainbow {
    animation: rb 10s ease 0s 10000;
}
@keyframes rb {
    0% {
        color: red;
    }
    14% {
        color: orange;
    }
    28% {
        color: yellow;
    }
    43% {
        color: green;
    }
    57% {
        color: blue;
    }
    71% {
        color: blueviolet;
    }
    86% {
        color: purple;
    }
    100% {
        color: red;
    }
}
</style>