<template>
    <v-app>
    <page_loader :loading = 'loading' />
    <title_nav />
    
    <v-main>
    <sidenav name = 'Connecting with iGEMers' />
    <image_previewer />
    
    <v-row justify = end>
        <v-col cols = 12 md = 7 class = 'pa-5'>
            <v-card class = 'ma-3' v-if = 'data[0][0].text !== ``'>
                <template #text>
                    <template v-for = 'k in data[0]' :key = k>
                        <v-img class = 'preview cursor-help' v-if = 'k.type == `img`' :src = 'get_image(k.text)' />
                        <template v-else-if = 'k.type == `icon`'><br><br><v-icon> {{ k.text }} </v-icon></template>
                        <template v-else-if = 'k.type == `subicon`'><br>&nbsp;<v-icon> {{ k.text }} </v-icon></template>
                        <span v-html = 'k.text' v-else />
                    </template>
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
                            <template v-for = 'k in j.description' :key = k>
                                <v-img class = 'preview cursor-help' v-if = 'k.type == `img`' :src = 'get_image(k.text)' />
                                <template v-else-if = 'k.type == `icon`'><br><br><v-icon> {{ k.text }} </v-icon></template>
                                <template v-else-if = 'k.type == `subicon`'><br>&nbsp;<v-icon> {{ k.text }} </v-icon></template>
                                <span v-html = 'k.text' v-else />
                            </template>
                        </template>

                        <v-row v-if = j.text>
                            <v-col>
                                <v-card v-for = 'k in j.text' :key = k variant = tonal class = 'ma-3'>
                                    <template #title>
                                        <div v-html = k.title />
                                    </template>
                                    <template #text>
                                        <template v-for = 'l in k.description' :key = l>
                                            <v-img class = 'preview cursor-help' v-if = 'l.type == `img`' :src = 'get_image(l.text)' />
                                            <template v-else-if = 'l.type == `icon`'><br><br><v-icon> {{ l.text }} </v-icon></template>
                                            <template v-else-if = 'l.type == `subicon`'><br>&nbsp;<v-icon> {{ l.text }} </v-icon></template>
                                            <span v-html = 'l.text' v-else />
                                        </template>
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
import image_previewer from '@/preview.vue'

export default {
    name: 'App',
    data() {
        return {
            loading: true,
            data: [[{'type': 'text', 'text': 'We understood that achieving meaningful impact would not be possible on our own. That’s why we placed a strong emphasis on <b>outreach</b> and <b>networking</b>, recognizing that by connecting with others, we could amplify the reach of our project and create greater value. By engaging with fellow iGEMers, we not only shared our ideas but also supported others in their journey, helping to spread knowledge and inspire a broader collective effort in advancing biotechnology.'}], [{'level': 1, 'title': 'Team-to-Team Exchange', 'description': [{'type': 'text', 'text': 'As part of our commitment to building a strong and collaborative synthetic biology community, we reached out to fellow iGEM teams to exchange ideas, share feedback, and explore opportunities for future collaboration. These conversations allowed us to learn from diverse perspectives, gain constructive input on our project design, and offer our support in return. Through open dialogue, we not only improved our scientific thinking but also built meaningful connections that reflect the true spirit of iGEM—innovation through cooperation.'}], 'text': [{'level': 2, 'title': 'NYCU-Formosa', 'description': [{'type': 'text', 'text': '> We held an online meeting with the NYCU iGEM team to share project progress and discuss possible collaboration ideas. Their project focused on optimizing <i>plasmid integration</i> techniques for genome editing, combining biology and electrical engineering expertise.\n>'}, {'type': 'img', 'text': 1}, {'type': 'text', 'text': ''}, {'type': 'icon', 'text': 'fa-solid fa-check'}, {'type': 'text', 'text': '<b>Reflection</b>\n<br><br>\nWe realized that our presentation could be improved to convey complex ideas more clearly and engage our peers better.'}, {'type': 'icon', 'text': 'fa-solid fa-check'}, {'type': 'text', 'text': '<b>Learning Points</b>'}, {'type': 'icon', 'text': 'fa-solid fa-check'}, {'type': 'text', 'text': 'Learned about NYCU’s innovative approach to genome integration and their efficient team structure.'}, {'type': 'icon', 'text': 'fa-solid fa-check'}, {'type': 'text', 'text': 'Inspired by their interdisciplinary collaboration between biology and engineering students.'}, {'type': 'icon', 'text': 'fa-solid fa-check'}, {'type': 'text', 'text': 'Understood the importance of well-structured project sharing in fostering cross-team understanding.'}], 'text': undefined}, {'level': 2, 'title': 'CSMU-Taiwan', 'description': [{'type': 'text', 'text': '> We met with the China Medical University (CSMU) iGEM team to share project ideas and experiences in fundraising and market analysis. Their team focuses on developing biopharmaceutical approaches such as IL-23 biologics for ulcerative colitis.\n>'}, {'type': 'img', 'text': 2}, {'type': 'text', 'text': ''}, {'type': 'icon', 'text': 'fa-solid fa-check'}, {'type': 'text', 'text': '<b>Reflection:</b>\n<br><br>\nWe found similarities in our teams’ challenges—especially in <b>fundraising</b> and <b>sponsor outreach</b>—and discussed how early communication with doctors and companies can shape project direction.'}, {'type': 'icon', 'text': 'fa-solid fa-check'}, {'type': 'text', 'text': '<b>Learning Points:</b>'}, {'type': 'icon', 'text': 'fa-solid fa-check'}, {'type': 'text', 'text': 'Understood how medical-centered teams approach HP through interviews with clinicians.'}, {'type': 'icon', 'text': 'fa-solid fa-check'}, {'type': 'text', 'text': 'Realized the importance of building continuity between iGEM generations for sustainable progress.'}, {'type': 'icon', 'text': 'fa-solid fa-check'}, {'type': 'text', 'text': 'Inspired to improve our own fundraising and stakeholder engagement strategies.'}], 'text': undefined}, {'level': 2, 'title': 'CCU-Taiwan', 'description': [{'type': 'text', 'text': '> We met with the <b>iGEM CCU (National Chung Cheng University)</b> team to exchange project ideas and experiences. Their project focuses on addressing <b>diabetic foot infections</b>, aiming to create a synthetic biology-based therapeutic solution for chronic wounds.\n>\n>\n> During the discussion, both teams shared updates on research design, team structure, and Human Practices approaches.\n>'}, {'type': 'img', 'text': 3}, {'type': 'text', 'text': ''}, {'type': 'icon', 'text': 'fa-solid fa-check'}, {'type': 'text', 'text': '<b>Reflection:</b>\nThrough this exchange, we realized how crucial it is to understand the patient’s perspective when designing biomedical solutions. The CCU team’s approach—conducting interviews with patients and healthcare professionals—reminded us that Human Practices should not only collect feedback but also shape how we define our problem and impact.'}, {'type': 'icon', 'text': 'fa-solid fa-check'}, {'type': 'text', 'text': '<b>Learning Points:</b>'}, {'type': 'icon', 'text': 'fa-solid fa-check'}, {'type': 'text', 'text': 'Learned how CCU integrates clinical interviews into their design cycle to capture real patient experiences.'}, {'type': 'icon', 'text': 'fa-solid fa-check'}, {'type': 'text', 'text': 'Recognized the importance of cross-team collaboration in refining both experimental and Human Practices strategies.'}, {'type': 'icon', 'text': 'fa-solid fa-check'}, {'type': 'text', 'text': 'Inspired to think more deeply about how user needs and social context can guide our own biomedical design process.'}], 'text': undefined}, {'level': 2, 'title': 'UTokyo', 'description': [{'type': 'text', 'text': '> The University of Tokyo iGEM team introduced their project that records temporal gene expression dynamics, using RNA switches and prime editing to create a “video” of cellular processes. We also presented Byefilm and discussed potential collaboration opportunities.\n>'}, {'type': 'img', 'text': 4}, {'type': 'text', 'text': ''}, {'type': 'img', 'text': 5}, {'type': 'text', 'text': ''}, {'type': 'icon', 'text': 'fa-solid fa-check'}, {'type': 'text', 'text': '<b>Reflection:</b>\n<br><br>\nWe learned the importance of clear time management and proper meeting moderation, as the session went longer than expected.'}, {'type': 'icon', 'text': 'fa-solid fa-check'}, {'type': 'text', 'text': '<b>Learning Points:</b>'}, {'type': 'icon', 'text': 'fa-solid fa-check'}, {'type': 'text', 'text': 'Gained insights into how Japan’s iGEM teams structure projects around fundamental research questions.'}, {'type': 'icon', 'text': 'fa-solid fa-check'}, {'type': 'text', 'text': 'Learned from UTokyo’s scientific rigor and their creative metaphor — “from photo to video” — for explaining technical concepts.'}, {'type': 'icon', 'text': 'fa-solid fa-check'}, {'type': 'text', 'text': 'Recognized the need for stronger facilitation and agenda setting in international collaboration meetings.'}], 'text': undefined}, {'level': 2, 'title': 'Science Tokyo', 'description': [{'type': 'text', 'text': '> We had the opportunity to connect online with the <b>Science Tokyo (Tokyo Tech)</b> iGEM team, who kindly reached out to us first to explore potential collaboration opportunities. Both teams shared their project goals and research directions in a friendly discussion.\n>'}, {'type': 'icon', 'text': 'fa-solid fa-check'}, {'type': 'text', 'text': '<b>Reflection:</b>\n<br><br>\nAlthough we eventually found that our project themes were quite different and faced time and budget constraints that made collaboration difficult, the conversation was meaningful. It reminded us how valuable these international exchanges can be in building mutual understanding and inspiration within the global iGEM community.'}, {'type': 'icon', 'text': 'fa-solid fa-check'}, {'type': 'text', 'text': '<b>Learning Points:</b>'}, {'type': 'icon', 'text': 'fa-solid fa-check'}, {'type': 'text', 'text': 'Appreciated the initiative and openness from Science Tokyo in reaching out for cross-team dialogue.'}, {'type': 'icon', 'text': 'fa-solid fa-check'}, {'type': 'text', 'text': 'Learned how early communication helps clarify whether collaboration is feasible in scope and timeline.'}, {'type': 'icon', 'text': 'fa-solid fa-check'}, {'type': 'text', 'text': 'Strengthened our connection with another team sharing similar enthusiasm for synthetic biology and real-world impact.'}], 'text': undefined}]}, {'level': 1, 'title': 'Learning from Alumni', 'description': [{'type': 'text', 'text': ''}], 'text': [{'level': 2, 'title': 'Sabrina Yeo (Team Lead, iGEM NCKU-Tainan 2019)', 'description': [{'type': 'text', 'text': '> We invited Sabrina Yeo, the former team lead of iGEM NCKU-Tainan 2019 and Asia–Oceania iGEM Ambassador, to share her experience as a Grand Prize winner and mentor for multiple iGEM teams.\nThrough this conversation, she provided practical advice on project presentation, Human Practices integration, wiki design, and overall team management.\n>'}, {'type': 'img', 'text': 6}, {'type': 'text', 'text': ''}, {'type': 'img', 'text': 7}, {'type': 'text', 'text': ''}, {'type': 'icon', 'text': 'fa-solid fa-check'}, {'type': 'text', 'text': '<b>Reflection:</b>\nHer insights reminded us to prioritize the “big picture”—communicating our project’s purpose and impact clearly, rather than focusing solely on technical details.\nWe also realized the importance of planning Human Practices strategically from the beginning, ensuring every interview and outreach effort meaningfully connects to our core project goals.'}, {'type': 'icon', 'text': 'fa-solid fa-check'}, {'type': 'text', 'text': '<b>Learning Points:</b>'}, {'type': 'icon', 'text': 'fa-solid fa-check'}, {'type': 'text', 'text': 'Presentation & Communication: Focus on clarity and persuasion; judges value how well a team explains its story, not just data.'}, {'type': 'icon', 'text': 'fa-solid fa-check'}, {'type': 'text', 'text': 'Human Practices Integration: Align every stakeholder interview with the project cycle to demonstrate impact and reflection.'}, {'type': 'icon', 'text': 'fa-solid fa-check'}, {'type': 'text', 'text': 'Wiki Design: Keep navigation simple and intuitive—information clarity matters more than fancy visuals.'}, {'type': 'icon', 'text': 'fa-solid fa-check'}, {'type': 'text', 'text': 'Team Management: Build a solid structure early; track progress with clear timelines and delegation to sub-team leaders.'}, {'type': 'icon', 'text': 'fa-solid fa-check'}, {'type': 'text', 'text': 'Scientific Planning: Develop theoretical logic and modeling backups even when data is limited; strong reasoning can compensate for experimental constraints.'}, {'type': 'icon', 'text': 'fa-solid fa-check'}, {'type': 'text', 'text': 'Judging Insight: 90% of evaluation relies on the wiki—effective storytelling and accessible presentation are key to success.'}], 'text': undefined}]}, {'level': 1, 'title': 'Academic Exchange And Feedback', 'description': [{'type': 'text', 'text': 'Connecting with Peers and Experts Across Taiwan'}], 'text': [{'level': 2, 'title': 'TGEM_Taiwan iGEM Seminar', 'description': [{'type': 'text', 'text': '> The <b>Taiwan iGEM Seminar (TGEM)</b> brought together both <b>high school and university iGEM teams</b> across Taiwan to share their project progress and receive professional feedback from biology experts.\n>\n>\n> During this event, the NCKU_Tainan team presented the <i>Byefilm</i> project, introducing our enzyme-based therapy design and safety considerations.\n>'}, {'type': 'img', 'text': 8}, {'type': 'text', 'text': ''}, {'type': 'img', 'text': 9}, {'type': 'text', 'text': ''}, {'type': 'icon', 'text': 'fa-solid fa-check'}, {'type': 'text', 'text': '<b>Expert Feedback & Discussion Points:</b>'}, {'type': 'icon', 'text': 'fa-solid fa-check'}, {'type': 'text', 'text': 'How can we ensure that engineered bacteria are precisely injected into the joint space?'}, {'type': 'icon', 'text': 'fa-solid fa-check'}, {'type': 'text', 'text': 'Will the bacteria remain localized, or could they form secondary infections?'}, {'type': 'icon', 'text': 'fa-solid fa-check'}, {'type': 'text', 'text': 'What if lysis efficiency is incomplete—could residual bacteria pose a risk?'}, {'type': 'icon', 'text': 'fa-solid fa-check'}, {'type': 'text', 'text': 'Would using <i>ClearColi</i> or liposome encapsulation improve biosafety?'}, {'type': 'icon', 'text': 'fa-solid fa-check'}, {'type': 'text', 'text': 'Could combining <i>lysis E</i> and <i>lysis O</i> enhance the overall lysis rate?'}, {'type': 'icon', 'text': 'fa-solid fa-check'}, {'type': 'text', 'text': 'How might the immune system respond to bacterial fragments after lysis?'}, {'type': 'icon', 'text': 'fa-solid fa-check'}, {'type': 'text', 'text': '<b>Reflection:</b>\n<br><br>\nReceiving direct feedback from experts allowed us to identify potential <b>safety and delivery challenges</b> early in development. We realized the importance of integrating biosafety and immune response design into every stage of our project.'}, {'type': 'icon', 'text': 'fa-solid fa-check'}, {'type': 'text', 'text': '<b>Learning Points:</b>'}, {'type': 'icon', 'text': 'fa-solid fa-check'}, {'type': 'text', 'text': 'Gained valuable expert perspectives on biosafety and delivery mechanisms.'}, {'type': 'icon', 'text': 'fa-solid fa-check'}, {'type': 'text', 'text': 'Learned how to refine experimental design for clinical applicability.'}, {'type': 'icon', 'text': 'fa-solid fa-check'}, {'type': 'text', 'text': 'Appreciated the collaborative and educational atmosphere of TGEM, which encourages teams to grow through constructive scientific dialogue.'}], 'text': undefined}]}]]
        }
    },
    components: {
        title_nav,
        page_loader,
        sidenav,
        site_footer,
        image_previewer
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
            while(x.indexOf('&') != -1) x = x.replace('&', 'and');
            if(x.indexOf('(') != -1) x = x.substr(0, x.indexOf('('));
            return x.toLowerCase();
        },
        get_image(x) {
            var token = this.tokenize('Connecting with iGEMers');
            {/* return x; */}
            return `https://static.igem.wiki/teams/6003/hp/${token}/${x}.avif`;
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