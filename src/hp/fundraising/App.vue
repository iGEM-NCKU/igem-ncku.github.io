<template>
    <v-app>
    <page_loader :loading = 'loading' />
    <title_nav />
    
    <v-main>
    <sidenav name = 'Fundraising' />
    <image_previewer />
    
    <v-row justify = end>
        <v-col cols = 12 md = 7 class = 'pa-5'>
            <v-img style="margin-bottom: -8%; margin-top: -7%;" src = "https://static.igem.wiki/teams/6003/title/9.avif"/>  
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
            data: [[{'type': 'text', 'text': 'Throughout our journey, we experienced firsthand how challenging the fundraising process can be.\n<br><br>\nFrom reaching out to sponsors and applying for grants to organizing crowdfunding campaigns, we learned that\n<br><br>\n> <b>not every iGEM team begins with enough financial support to cover all competition expenses</b>\n>\n<br><br>\nThis experience taught us the importance of persistence, communication, and creativity in securing resources.\n<br><br>\nWe hope to share our fundraising journey and insights to\n<br><br>\n> <b>help future iGEM teams navigate this process more smoothly,</b> empowering more students to bring their ideas to life and represent their universities on the global stage.\n>'}], [{'level': 1, 'title': 'Our plan for fundraising', 'description': [{'type': 'text', 'text': 'To support our participation in <b>iGEM 2025</b>, we carried out a series of fundraising activities through both institutional and public channels. Our efforts began within the university, where we sought support from our <b>principal investigator</b>, <b>faculty members</b>, and the <b>school administration</b>. With their approval, we prepared proposals outlining our objectives, experimental design, and expected impact.\n<br><br>\nAfter securing internal endorsement, we reached out to <b>local government offices</b>, <b>business partners</b>, and <b>research institutions</b> to gain broader recognition and sponsorship. As one team member noted,\n<br><br>\n> <i>“Fundraising was not only about resources—it was about communicating the value of our project to society.”</i>\n>\n<br><br>\nIn addition, we launched <b>public fundraising and crowdfunding campaigns</b>, inviting the community to participate in our journey. Through these combined efforts, we built a strong support network that helped sustain both our research and outreach goals.'}], 'text': [{'level': 2, 'title': 'Channel', 'description': [{'type': 'text', 'text': 'Our fundraising efforts were carried out through several channels, ranging from <b>school subsidies</b> to <b>government and public support</b>. Each level of outreach represented a new opportunity to connect with different communities and communicate the importance of our project. From internal funding within the university to partnerships with local institutions and public crowdfunding, every contribution played a role in advancing our iGEM journey.\n<br><br>\n> <i>“Science can only flowers in an atmosphere of free speech and mutual understanding”   <b>Albert Einstein</b></i>\n>'}], 'text': [{'level': 3, 'title': 'Subsidy from school', 'description': [{'type': 'text', 'text': 'Our fundraising journey began within the university, starting with outreach to our principal investigators (PIs), who helped us connect with the school principal and administration. With their guidance, we prepared a formal proposal outlining our project’s goals, educational significance, and expected outcomes. This internal support became the foundation of our fundraising efforts and provided our first source of funding.'}, {'type': 'img', 'text': 1}, {'type': 'text', 'text': 'However, as the cost of participating in iGEM exceeded the available school subsidy, we realized the need to <b>extend our outreach beyond the university.</b> This experience taught us the importance of seeking diverse funding sources and communicating our project’s broader value to different sectors of society.'}], 'text': undefined}, {'level': 3, 'title': 'Subsidy from the government', 'description': [{'type': 'text', 'text': 'After securing initial support from the university, we expanded our outreach to the <b>government level</b>, where several programs provide financial assistance to students representing Taiwan in international competitions. We applied for subsidy programs offered by both the <b>Ministry of Education</b> and the <b>Department of Youth,</b> <b>Taipei City Government.</b> Through these applications, we presented iGEM as not only a scientific competition but also an opportunity to promote education, innovation, and cross-cultural exchange.\n<br><br>\nWhile these programs provided partial funding, the experience encouraged us to <b>continue broadening our network and seeking new opportunities</b>. Reaching out to public institutions strengthened our understanding of how government and academia can work together to support youth innovation, laying the groundwork for further collaboration.\n<br><br>\n> <i>“Education is the most powerfull weapon with you can you use to change the world” <b>Nelson Mandela</b></i>\n>'}], 'text': undefined}, {'level': 3, 'title': 'Crowd Funding through the trustable platform', 'description': [{'type': 'text', 'text': 'As the sponsorships from the school and government were not sufficient to cover all project expenses, we decided to launch a <b>crowdfunding campaign</b> to gain broader public support. To ensure transparency and credibility, we chose <b>Zec Zec</b>, one of the largest and most trusted crowdfunding platforms in Taiwan. Through this platform, we shared our story, goals, and progress with the public, inviting more people to join our iGEM journey.\n<br><br>\nCrowdfunding not only provided additional financial support but also helped us build stronger connections with the community. It became a bridge between science and the public, showing how collective participation can drive innovation.\n<br><br>\n> <i>“If you want to go fast, go alone. If you want to go far, go together.”\n<b>Bill Gates</b></i>\n>'}, {'type': 'img', 'text': 2}, {'type': 'text', 'text': 'https://www.zeczec.com/projects/igemncku2025'}], 'text': undefined}, {'level': 3, 'title': 'Donation from the school Alumni', 'description': [{'type': 'text', 'text': 'Another important channel we explored was <b>reaching out to university alumni</b> for sponsorship and mentorship. Alumni often share a strong sense of connection and pride in supporting student innovation, making them valuable partners for iGEM teams. Their professional experience and networks can open doors to new funding opportunities and industry collaborations.\n<br><br>\nReconnecting with alumni not only expands financial support but also strengthens the link between current students and past contributors to the scientific community. Establishing this bridge ensures that knowledge, experience, and inspiration continue to pass on to future teams—creating a sustainable foundation for long-term growth.\n<br><br>\n> <i>“Great things in business are never done by one person; they are done by a team of people” <b>Steve Jobs</b></i>\n>'}], 'text': undefined}, {'level': 3, 'title': 'Sponsorship from the business', 'description': [{'type': 'text', 'text': 'To further expand our funding network, we also <b>reached out to local businesses and industry partners</b> for sponsorship. Collaborating with businesses can provide not only financial support but also valuable connections to real-world applications of biotechnology. Reaching out to companies allows iGEM teams to demonstrate how their projects align with innovation, sustainability, and social responsibility—values that many businesses actively support.\n<br><br>\nHowever, corporate sponsorship often requires a <b>formal administrative process</b>, including the issuance of official invoices or receipts. To streamline this, it is recommended to <b>establish a registered student club or organization within the school</b>, which makes the financial procedures more transparent and compliant with institutional policies. This approach ensures that sponsorships are properly managed and can continue smoothly in future collaborations.\n<br><br>\n> <i>“best way to created the future is the create it”\n<b>Peter Drucker</b></i>\n>'}], 'text': undefined}]}]}, {'level': 1, 'title': 'Key Takeaways', 'description': [{'type': 'text', 'text': ''}, {'type': 'icon', 'text': 'fa-solid fa-check'}, {'type': 'text', 'text': 'School and government resources are extremely valuable — always start by exploring available institutional support and actively reach out to relevant offices for assistance.'}, {'type': 'icon', 'text': 'fa-solid fa-check'}, {'type': 'text', 'text': 'Proactively contacting related organizations is crucial (e.g., alumni networks or biotech companies connected to your project topic), as it can significantly increase sponsorship opportunities.'}, {'type': 'icon', 'text': 'fa-solid fa-check'}, {'type': 'text', 'text': 'Crowdfunding can also be an effective fundraising option, but it requires substantial time and effort for marketing and promotion.'}, {'type': 'icon', 'text': 'fa-solid fa-check'}, {'type': 'text', 'text': 'When seeking corporate sponsorship, remember that companies often require official receipts issued by the university; therefore, establishing a registered student club or organization is highly recommended to obtain administrative recognition.'}], 'text': undefined}]]
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
            var token = this.tokenize('Fundraising');
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