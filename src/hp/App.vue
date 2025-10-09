<template>
    <v-app>
    <page_loader :loading = 'loading' />
    <title_nav />
    
    <v-main>
    <sidenav name = 'Integrated Human Practice' />
    
    <v-row justify = end>
        <v-col cols = 12 md = 7 class = 'pa-5'>
             <v-img style="margin-bottom: -8%; margin-top: -7%;" src = "https://static.igem.wiki/teams/6003/title/4.avif"/>  
            <v-hover v-for = 'i in data' :key = i>
                <template #default = '{isHovering, props}'>
                    <a :href = 'i.block ? undefined : `hp_${tokenize(i.title.toLowerCase())}.html`'>
                        <v-card :title = i.title class = 'scroller ma-3' :id = 'tokenize(i.title)' v-bind = props :color = 'isHovering && !i.block ? `primary` : undefined' v-ripple>
                            <template #text>
                                <div v-html = i.text />
                                <v-card prepend-icon = 'fa-solid fa-lightbulb' v-if = 'i.quote != ``' color = cyan variant = tonal>
                                    <template #text>
                                        <div v-html = i.quote />
                                    </template>
                                </v-card>
                            </template>
                            <template #actions v-if = '!i.block'>
                                <v-divider />
                                <a :href = '`hp_${tokenize(i.title.toLowerCase())}.html`'><v-btn append-icon = 'fa-solid fa-arrow-right' text = 'Show me more' :color = 'isHovering ? `white` : undefined' /></a>
                                <!-- <v-icon> fa-solid fa-arrow-right </v-icon> -->
                            </template>
                        </v-card>
                    </a>
                </template>
            </v-hover>
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

import hp_timeline from '@/hp/timeline.vue'
import hp_long from '@/hp/long.vue'

export default {
    name: 'App',
    data() {
        return {
            loading: true,
            data: [{'title': 'Overview', 'block': true, 'text': 'The NCKU-Tainan 2025 iGEM team is proud to present <i>Byefilm</i>, a project designed to address the critical issue of periprosthetic joint infections (PJI) without resorting to invasive surgery. Our innovative approach uses engineered <i>Staphylococcus aureus</i> bacteria as a delivery system for enzymes that break down biofilms in infected joints. <b>Through precise thermal control, the bacteria activate only when needed, ensuring targeted and safe treatment.</b> From the outset, we placed a great emphasis on <b>Human Practices</b> to ensure that our work not only advanced science but also made a meaningful impact on society.<br><i>Byefilm</i> began with an essential question: <b>Could our technology really make a difference in the clinic?</b> To answer this, we consulted orthopedic surgeons specializing in total knee arthroplasty, who confirmed that while PJIs are rare, they are devastating for both patients and healthcare professionals. This validation reaffirmed our belief in the potential clinical impact of our project and guided the development of our solution.<br>However, medicine is not only about what happens in the lab or the operating room — it is also deeply connected to society. To align our work with real-world concerns, we engaged with the public through surveys and interviews, uncovering a significant knowledge gap about biofilms and biotechnology. Concerns about the safety of using genetically engineered bacteria for medical purposes were widespread, prompting us to consult with infectious disease experts and biosafety professionals. These crucial <b>Human Practices</b> insights were instrumental in refining the safety aspects of our project, ensuring it was both innovative and responsible. Please see our <b>Integrated Human Practices</b> section for more detailed information.<br>As we continued to refine our design, we also placed a strong focus on educating the public about biofilms and synthetic biology. We organized <b>workshops for high school students, created informative social media content, and even developed an educational game</b>, all aimed at breaking down complex scientific topics and making them more accessible. We are thrilled by the positive response, with our educational efforts reaching over <b>1,500 people worldwide</b>. For more details, please refer to our <b>Education</b> section.<br>The journey of <i>Byefilm</i> has shown us that science is not just about discovery but about creating a positive impact on both individuals and society. By listening to the needs of doctors, patients, and the public, we’ve developed a solution that balances innovation with responsibility, ensuring that our work has the potential to heal, educate, and inspire.', 'quote': ''}, {'title': 'Integrated Human Practice', 'text': 'Human Practices has been integral to shaping <i>Byefilm</i>, influencing not only our scientific approach but also our project’s real-world impact. By engaging with stakeholders across various sectors, including orthopedic surgeons, infectious disease experts, and biosafety professionals, we optimized our design to ensure it was feasible, safe, and aligned with clinical and societal needs. Early consultations with healthcare professionals confirmed the clinical value of our project, while public surveys revealed a significant knowledge gap about biofilms and biotechnology, guiding us to focus on education and safety. This engagement allowed us to refine our solution, ensuring it addressed not just technical challenges but also public and ethical concerns.<br>Throughout our journey, we applied a structured approach to <b>Human Practices</b>, primarily focusing on the core values emphasized by the iGEM Judging Handbook: <b>Reflection</b>, <b>Responsibility</b>, and <b>Implementation</b>. We continuously <b>reflected</b> on our design and assumptions, using tools such as the <b>Reflection Loop</b> to assess feedback and make iterative improvements. By doing so, we ensured that our project was not only scientifically robust but also adaptable to the evolving needs of stakeholders. We also took <b>responsibility</b> for the ethical implications of our technology, addressing concerns about the use of genetically modified bacteria through in-depth discussions with biosafety experts and ethicists. Finally, we focused on the <b>implementation</b> of our solution by translating our insights into actionable steps, such as the development of educational outreach programs to address public misconceptions about biotechnology. By integrating these three principles into our project, <i>Byefilm</i> evolved into a solution that not only tackles a critical medical issue but also considers its broader societal implications, making it both a scientifically innovative and socially responsible project.', 'quote': ''}, {'title': 'Education', 'text': 'Through our surveys and questionnaires, we uncovered a significant gap in the public’s understanding of biofilms, biotechnology, and synthetic biology. This insight led us to make it a priority to <b>break down the barriers that prevent people from accessing cutting-edge knowledge in these fields</b>. We realized that many individuals, from high school students to adults, lacked even basic awareness about biofilms and their impact on healthcare, and this knowledge gap needed to be addressed.<br>To close this gap, we organized a c<b>omprehensive educational workshop aimed at high school students</b>. This workshop was designed to provide students with an in-depth understanding of biofilms, synthetic biology, and their real-world applications, ensuring that the content was accessible and engaging. At the conclusion of the workshop, we <b>gathered valuable feedback</b> from the participants to refine and improve our educational approach. We also sought additional insights to enhance the effectiveness of future educational initiatives. Our goal is not only to share knowledge but to <b>create a more informed society</b>, empowering the next generation to engage with and contribute to the advancements in synthetic biology.', 'quote': ''}, {'title': 'Connecting with iGEMers', 'text': 'We understood that achieving meaningful impact would not be possible on our own. That’s why we placed a strong emphasis on <b>outreach</b> and <b>networking</b>, recognizing that by connecting with others, we could amplify the reach of our project and create greater value. By engaging with fellow iGEMers, we not only shared our ideas but also supported others in their journey, helping to spread knowledge and inspire a broader collective effort in advancing biotechnology.', 'quote': ''}, {'title': 'Entrepreneurship', 'text': 'Our project doesn’t stop at the laboratory bench. While we have focused on engineering bacteria capable of producing enzymes that break down stubborn biofilms, we understand that true impact comes when technology can be transformed into something that reaches people’s lives. To bring our solution closer to clinical and commercial reality, we began exploring the feasibility of product development — from safety design to delivery strategy and scalability.<br>To take this vision a step further, we joined NCKU’s\xa0<b>Dream Come True Innovation Program</b>, where we started to translate our scientific findings into potential real-world products. We imagine a future where our system can evolve into\xa0<b>a customizable enzyme formulation</b>\xa0or\xa0<b>a smart injection kit</b>\xa0that works alongside antibiotics to treat implant-related infections safely and effectively — reducing surgery risks, shortening recovery time, and empowering hospitals with a new, low-invasive option.', 'quote': ''}, {'title': 'Fundraising', 'text': 'Throughout our journey, we experienced firsthand how challenging the fundraising process can be.<br>From reaching out to sponsors and applying for grants to organizing crowdfunding campaigns, we learned that<br><b>not every iGEM team begins with enough financial support to cover all competition expenses</b><br>This experience taught us the importance of persistence, communication, and creativity in securing resources.<br>We hope to share our fundraising journey and insights to', 'quote': '<b>help future iGEM teams navigate this process more smoothly,</b> empowering more students to bring their ideas to life and represent their universities on the global stage.'}]
        }
    },
    components: {
        title_nav,
        page_loader,
        sidenav,
        site_footer,
        hp_timeline,
        hp_long
    },
    mounted() {
        M.AutoInit();
        setTimeout(() => {
            this.loading = false;
        }, 100);
    },
    methods: {
        tokenize(x) {
            while(x.indexOf(' ') != -1) x = x.replace(' ', '-');
            return x;
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
/* .text-content {
  font-size: 24px;      
  line-height: 1.6;    
  color: #333;     
  padding-left: 30px; 
} */
</style>