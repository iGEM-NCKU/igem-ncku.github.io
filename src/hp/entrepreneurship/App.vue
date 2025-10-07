<template>
    <v-app>
    <page_loader :loading = 'loading' />
    <title_nav />
    
    <v-main>
    <sidenav name = 'Entrepreneurship' />
    
    <v-row justify = end>
        <v-col cols = 12 md = 7 class = 'pa-5'>
            <v-card class = 'ma-3' v-if = 'data[0][0].text !== ``'>
                <template #text>
                    <div v-html = 'data[0].map((e) => e.text).join(``)' />
                </template>
            </v-card>
            <div v-for = 'i in data[1]' :key = i :id = 'tokenize(i.title)' class = scroller>
                <v-card class = 'ma-3'>
                    <template #title>
                        <div v-html = 'i.title' />
                    </template>
                    <template #text>
                        <div v-html = 'i.description.map((e) => e.text).join(``)' />
                    </template>
                </v-card>
                <template v-if = i.text>
                    <v-card v-for = 'j in i.text' :key = j class = 'ma-3 subtitle' :id = tokenize(j.title)>
                        <template #title>
                            <div v-html = 'j.title' />
                        </template>
                        <template #text>
                            <div v-for = 'k in j.description' :key = k>
                                <v-img v-if = 'k.type == `img`' v-text = '[Image]' />
                                <div v-html = 'k.text' v-else />
                            </div>
                        </template>

                        <v-row v-if = j.text>
                            <v-col>
                                <v-card v-for = 'k in j.text' :key = k variant = tonal class = 'ma-3'>
                                    <template #title>
                                        <div v-html = k.title />
                                    </template>
                                    <template #text>
                                        <div v-for = 'l in k.description' :key = l>
                                            <v-img v-if = 'l.type == `img`' v-text = '[Image]' />
                                            <div v-html = 'l.text' v-else />
                                        </div>
                                    </template>
                                    {{ k.text }}
                                </v-card>
                            </v-col>
                        </v-row>
                        <!-- {{ j.text }} -->
                    </v-card>
                </template>
            </div>
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
            data: [[{'type': 'text', 'text': 'Our project doesn’t stop at the laboratory bench. While we have focused on engineering bacteria capable of producing enzymes that break down stubborn biofilms, we understand that true impact comes when technology can be transformed into something that reaches people’s lives. To bring our solution closer to clinical and commercial reality, we began exploring the feasibility of product development — from safety design to delivery strategy and scalability.\nTo take this vision a step further, we joined NCKU’s\xa0<b>Dream Come True Innovation Program</b>, where we started to translate our scientific findings into potential real-world products. We imagine a future where our system can evolve into\xa0<b>a customizable enzyme formulation</b>\xa0or\xa0<b>a smart injection kit</b>\xa0that works alongside antibiotics to treat implant-related infections safely and effectively — reducing surgery risks, shortening recovery time, and empowering hospitals with a new, low-invasive option.\n'}], [{'level': 1, 'title': '2025 NCKU Innovation Dreams Come True Project', 'description': [{'type': 'text', 'text': 'The <b>Dream Come True Innovation Program</b> at National Cheng Kung University (NCKU) is designed to help students turn innovative ideas into real-world solutions through mentorship, funding, and entrepreneurship training.\nAlthough our team did not complete the entire program, the experience offered us valuable insights into\n> <b>market validation, intellectual property, and business modeling</b>\nIt allowed us to reflect on how scientific research like Byefilm can evolve into a feasible medical product, and how interdisciplinary collaboration is essential to bridge biotechnology and real-world impact.'}, {'type': 'img', 'text': 'ignored'}, {'type': 'text', 'text': 'Participants and mentors of the\xa0<i>Dream Come True Innovation Program</i>\xa0at National Cheng Kung University, where student teams present and refine their startup ideas.'}, {'type': 'img', 'text': 'ignored'}, {'type': 'text', 'text': 'The Byefilm team representing NCKU-Tainan iGEM 2025 at the\xa0<i>Dream Come True Innovation Program</i>\xa0pitching session.'}, {'type': 'img', 'text': 'ignored'}, {'type': 'text', 'text': 'Byefilm’s registration tags for the\xa0<i>Dream Come True Innovation Program</i>\xa0final presentation and networking event.\n'}], 'text': [{'level': 2, 'title': 'Our Business Plan for Dream Come True Project', 'description': [{'type': 'text', 'text': '<aside>\n💡\nByefilm aims to translate our biofilm-degrading technology into practical medical solutions.\n</aside>\nOur business model focuses on a <b>two-phase pathway</b>\n— first developing a <b>customizable enzyme formulation</b> for clinical use, then advancing toward a <b>minimally invasive injection system</b> that can be integrated into hospital treatment workflows.\nThrough collaborations with medical partners and biotech accelerators, we envision building a sustainable platform that bridges <b>synthetic biology innovation and real-world healthcare applications</b>\n[Business Plan.pdf](attachment:681b2e60-9011-4ef7-b3a0-c50ff3d5030a:Business_Plan.pdf)'}], 'text': undefined}, {'level': 2, 'title': 'Our reflection', 'description': [{'type': 'text', 'text': 'Although our team did not complete the entire program, we gained valuable insights throughout the process.\nAfter consulting with professors experienced in technology transfer and commercialization, we realized the\n> <b>complexity and long timeline of bringing a biotechnological product to market</b>\nWe also acknowledged that our project is still in an early conceptual stage, with many aspects requiring further validation and refinement.\nRecognizing that commercialization is still a distant goal, we decided to <b>withdraw from the program</b> to focus on strengthening the research foundation of our project.\nNevertheless, we are deeply grateful to the <b>NCKU IHQ Startup Accelerator</b> for providing us with this opportunity.\nEven though we did not finish the entire journey, the experience taught us invaluable lessons about bridging science and entrepreneurship.'}], 'text': undefined}]}]]
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
    },
    methods: {
        tokenize(x) {
            while(x.indexOf(' ') != -1) x = x.replace(' ', '-');
            while(x.indexOf('<b>') != -1) x = x.replace('<b>', '-');
            while(x.indexOf('</b>') != -1) x = x.replace('</b>', '-');
            while(x.indexOf('<i>') != -1) x = x.replace('<i>', '-');
            while(x.indexOf('</i>') != -1) x = x.replace('</i>', '-');
            return x.toLowerCase();
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