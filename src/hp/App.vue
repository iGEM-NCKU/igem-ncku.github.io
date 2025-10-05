<template>
    <v-app>
    <page_loader :loading = 'loading' />
    <title_nav />
    
    <v-main>
    <sidenav name = 'Integrated Human Practice' />
    <v-row justify = end>
        <v-col cols = 12 md = 8 class = 'pa-5'>
        <v-row>
            <v-col>
                <v-card :variant = 'alpha.card.theme' class = scroller id = 'Overview'>
                    <v-card-title style="font-size: 40px;"><b>Overview</b></v-card-title>
                    <div
                                id="Introduction"
                                title="Introduction"
                                class="text-content"
                    >
                    <br>
                    <p>The NCKU-Tainan 2025 iGEM team is proud to present <em>Byefilm</em>, a project designed to address the critical issue of periprosthetic joint infections (PJI) without resorting to invasive surgery. Our innovative approach uses engineered <em>Staphylococcus aureus</em> bacteria as a delivery system for enzymes that break down biofilms in infected joints. <strong>Through precise thermal control, the bacteria activate only when needed, ensuring targeted and safe treatment.</strong> From the outset, we placed a great emphasis on <strong>Human Practices</strong> to ensure that our work not only advanced science but also made a meaningful impact on society.</p>
                    <p><em>Byefilm</em> began with an essential question: <strong>Could our technology really make a difference in the clinic?</strong> To answer this, we consulted orthopedic surgeons specializing in total knee arthroplasty, who confirmed that while PJIs are rare, they are devastating for both patients and healthcare professionals. This validation reaffirmed our belief in the potential clinical impact of our project and guided the development of our solution.</p>
                    <p>However, medicine is not only about what happens in the lab or the operating room — it is also deeply connected to society. To align our work with real-world concerns, we engaged with the public through surveys and interviews, uncovering a significant knowledge gap about biofilms and biotechnology. Concerns about the safety of using genetically engineered bacteria for medical purposes were widespread, prompting us to consult with infectious disease experts and biosafety professionals. These crucial <strong>Human Practices</strong> insights were instrumental in refining the safety aspects of our project, ensuring it was both innovative and responsible. Please see our <strong>Integrated Human Practices</strong> section for more detailed information.</p>
                    <p>As we continued to refine our design, we also placed a strong focus on educating the public about biofilms and synthetic biology. We organized <strong>workshops for high school students, created informative social media content, and even developed an educational game</strong>, all aimed at breaking down complex scientific topics and making them more accessible. We are thrilled by the positive response, with our educational efforts reaching over <strong>1,500 people worldwide</strong>. For more details, please refer to our <strong>Education</strong> section.</p>
                    <p>The journey of <em>Byefilm</em> has shown us that science is not just about discovery but about creating a positive impact on both individuals and society. By listening to the needs of doctors, patients, and the public, we’ve developed a solution that balances innovation with responsibility, ensuring that our work has the potential to heal, educate, and inspire.</p>
                    </div>
                </v-card>
            </v-col>
        </v-row>
        <div class = scroller id = 'Integrated-Human-Practice' >
            <v-row>
                <v-col>
                    <v-card :variant = 'alpha.card.theme'>
                        <v-card-title style="font-size: 32px;"><b>Integrated-Human-Practice</b></v-card-title>
                        <div
                                id="Integrated-Human-Practice"
                                title="Integrated-Human-Practice"
                                class="text-content"
                                >
                                <br>
                                <p>Human Practices has been integral to shaping <em>Byefilm</em>, influencing not only our scientific approach but also our project’s real-world impact. By engaging with stakeholders across various sectors, including orthopedic surgeons, infectious disease experts, and biosafety professionals, we optimized our design to ensure it was feasible, safe, and aligned with clinical and societal needs. Early consultations with healthcare professionals confirmed the clinical value of our project, while public surveys revealed a significant knowledge gap about biofilms and biotechnology, guiding us to focus on education and safety. This engagement allowed us to refine our solution, ensuring it addressed not just technical challenges but also public and ethical concerns.</p>
                                <p>Throughout our journey, we applied a structured approach to <strong>Human Practices</strong>, primarily focusing on the core values emphasized by the iGEM Judging Handbook: <strong>Reflection</strong>, <strong>Responsibility</strong>, and <strong>Implementation</strong>. We continuously <strong>reflected</strong> on our design and assumptions, using tools such as the <strong>Reflection Loop</strong> to assess feedback and make iterative improvements. By doing so, we ensured that our project was not only scientifically robust but also adaptable to the evolving needs of stakeholders. We also took <strong>responsibility</strong> for the ethical implications of our technology, addressing concerns about the use of genetically modified bacteria through in-depth discussions with biosafety experts and ethicists. Finally, we focused on the <strong>implementation</strong> of our solution by translating our insights into actionable steps, such as the development of educational outreach programs to address public misconceptions about biotechnology. By integrating these three principles into our project, <em>Byefilm</em> evolved into a solution that not only tackles a critical medical issue but also considers its broader societal implications, making it both a scientifically innovative and socially responsible project.</p>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
            <!-- <v-row>
                <v-col cols = 12 md = 6>
                    <v-card :variant = 'alpha.card.theme' title = 'Games' subtitle = 'Education' class = subtitle id = 'Games'>
                        <template v-slot:text>
                            To make our project more accessible and engaging, we are developing an educational mini-game that helps players understand the core concepts of our synthetic biology strategy. Inspired by real lab experiments, the game lets players design their own “enzyme troops” to mimic the bio-tools we use to target biofilms. Players analyze bacterial “towers” (representing biofilms), identify their weaknesses, and deploy their enzyme troops strategically to break them down. By turning science into interactive gameplay, we aim to spark curiosity and make learning about biofilms and synthetic biology fun and memorable.
                            <br>
                            <v-img src = 'https://hackmd.io/_uploads/ryKJAsnUxx.png' />
                        </template>
                    </v-card>
                </v-col>

                <v-col cols = 12 md = 6>
                    <a href = 'https://www.instagram.com/igemncku/' target = '_blank'>
                        <v-card :variant = 'alpha.card.theme' title = 'Instagram Reels' subtitle = 'Education' v-ripple class = subtitle id = 'Instagram-Reels'>
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
            </v-row> -->
        </div>
        <v-row>
            <v-col>
                <v-card :variant = 'alpha.card.theme' class = scroller id = 'Education'>
                    <v-card-title style="font-size: 40px;"><b>Education</b></v-card-title>
                    <div
                                id="Education"
                                title="Education"
                                class="text-content"
                    >
                    <br>
                <p>Through our surveys and questionnaires, we uncovered a significant gap in the public’s understanding of biofilms, biotechnology, and synthetic biology. This insight led us to make it a priority to <strong>break down the barriers that prevent people from accessing cutting-edge knowledge in these fields</strong>. We realized that many individuals, from high school students to adults, lacked even basic awareness about biofilms and their impact on healthcare, and this knowledge gap needed to be addressed.</p>
                <p>To close this gap, we organized a c<strong>omprehensive educational workshop aimed at high school students</strong>. This workshop was designed to provide students with an in-depth understanding of biofilms, synthetic biology, and their real-world applications, ensuring that the content was accessible and engaging. At the conclusion of the workshop, we <strong>gathered valuable feedback</strong> from the participants to refine and improve our educational approach. We also sought additional insights to enhance the effectiveness of future educational initiatives. Our goal is not only to share knowledge but to <strong>create a more informed society</strong>, empowering the next generation to engage with and contribute to the advancements in synthetic biology.</p>
                </div>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-card :variant = 'alpha.card.theme' class = scroller id = 'Connecting-with-iGEMers'>
                    <v-card-title style="font-size: 40px;"><b>Connecting with iGEMers</b></v-card-title>
                    <div
                                id="Connecting with iGEMers"
                                title="Connecting with iGEMers"
                                class="text-content"
                    >
                    <br>
                    <p>We understood that achieving meaningful impact would not be possible on our own. That’s why we placed a strong emphasis on outreach and networking, recognizing that by connecting with others, we could amplify the reach of our project and create greater value. By engaging with fellow iGEMers, we not only shared our ideas but also supported others in their journey, helping to spread knowledge and inspire a broader collective effort in advancing biotechnology.</p>
                </div>
                </v-card>
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
    
    <!-- <v-row justify = end><v-col cols = 12 md = 8 class = 'pa-5'>
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
    </v-col><v-col cols = 1 /></v-row> -->

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

    </v-main></v-app>
    
    <site_footer></site_footer>
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
        page_loader,
        sidenav,
        site_footer
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
.text-content {
  font-size: 24px;      
  line-height: 1.6;    
  color: #333;     
  padding-left: 30px; 
}
</style>