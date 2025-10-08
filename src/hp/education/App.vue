<template>
    <v-app>
    <page_loader :loading = 'loading' />
    <title_nav />
    
    <v-main>
    <sidenav name = 'Education' />
    
    <v-row justify = end>
        <v-col cols = 12 md = 7 class = 'pa-5'>
            <v-card class = 'ma-3' v-if = 'data[0][0].text !== ``'>
                <template #text>
                    <div v-for = 'k in data[0]' :key = k>
                        <v-img v-if = 'k.type == `img`' :src = 'get_image(k.text)' />
                        <div v-html = 'k.text' v-else />
                    </div>
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
                                <v-img v-if = 'k.type == `img`' :src = 'get_image(k.text)' />
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
                                            <v-img v-if = 'l.type == `img`' :src = 'get_image(l.text)' />
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
            data: [[{'type': 'text', 'text': ''}], [{'level': 1, 'title': 'Overview', 'description': [{'type': 'text', 'text': 'Through our surveys and questionnaires, we uncovered a significant gap in the public’s understanding of biofilms, biotechnology, and synthetic biology. This insight led us to make it a priority to <b>break down the barriers that prevent people from accessing cutting-edge knowledge in these fields</b>. We realized that many individuals, from high school students to adults, lacked even basic awareness about biofilms and their impact on healthcare, and this knowledge gap needed to be addressed.\nTo close this gap, we organized a <b>comprehensive educational workshop aimed at high school students</b>. This workshop was designed to provide students with an in-depth understanding of biofilms, synthetic biology, and their real-world applications, ensuring that the content was accessible and engaging. At the conclusion of the workshop, we <b>gathered valuable feedback</b> from the participants to refine and improve our educational approach. We also sought additional insights to enhance the effectiveness of future educational initiatives. Our goal is not only to share knowledge but to <b>create a more informed society</b>, empowering the next generation to engage with and contribute to the advancements in synthetic biology.\n'}], 'text': [{'level': 2, 'title': 'Biofilm interactive game', 'description': [{'type': 'text', 'text': '<aside>\n💡\nThe <b>Biofilm Interactive Game</b> was developed in collaboration with the <b>Dry Lab Team</b> to teach synthetic biology by simulating how engineered enzymes break down harmful biofilms in real-world infections.\n</aside>\n<br>- <b>Aim</b>\n<br>- To simplify complex biofilm science and provide an interactive experience that engages players in understanding how biofilms form and how synthetic biology can help combat them.\n<br>- <b>Goal</b>\n<br>- To educate users about biofilm-related challenges in healthcare while showing how engineered enzymes can be used as a treatment.\n<br>- <b>Impact</b>\n<br>- To bridge the knowledge gap, raising awareness and encouraging deeper understanding of biofilms and synthetic biology, thus empowering users to engage with these concepts in a fun and educational way.\n'}], 'text': [{'level': 3, 'title': 'The Rules of the game', 'description': [{'type': 'text', 'text': 'We developed an educational tower defense game where the enemies are bacteria equipped with one to three layers of biofilm shields.\nThe bacterial species include <i>Staphylococcus aureus</i>, <i>Mycobacterium</i>, <i>Escherichia coli</i>, <i>Pseudomonas aeruginosa</i>, and <i>Streptococcus</i>.\nThere are two types of defense towers: enzyme towers and antibiotic towers.\nEnzyme towers can only target biofilm shields:\nDispersin B Tower attacks PNAG-based polysaccharide shields.\nProteinase K Tower targets protein shields.\nDNase I Tower breaks down eDNA shields.\nOnly the outermost shield can be attacked at any given time.\nOnce a bacterium’s shields are completely destroyed, enzyme towers can no longer deal damage.\nAt this stage, players must deploy antibiotic towers to eliminate the unshielded bacteria.\nHowever, antibiotic towers are ineffective until the entire biofilm has been degraded—mimicking how antibiotics cannot penetrate intact biofilms in real infections.\nTo simulate the limited persistence of enzymes and antibiotics in the human body, both types of towers automatically disappear after a certain duration.\nThe shield compositions are randomly generated to represent the unpredictable structure of natural biofilms.\nFinally, if a bacterium successfully reaches the end point, a giant biofilm will form at a random location on the map.\nThis represents an established infection site that continuously releases new bacteria—illustrating how uncontrolled biofilm growth leads to persistent infection.'}, {'type': 'img', 'text': 1}], 'text': undefined}]}, {'level': 2, 'title': 'Popular science Reels on Instagram', 'description': [{'type': 'text', 'text': '<aside>\n💡\nThese\xa0<b>short videos</b>\xa0were designed to\xa0<b>make complex scientific ideas easier to understand</b>\xa0and\xa0<b>more engaging for everyone</b>.\n</aside>\nThrough\xa0<b>concise, visually appealing storytelling</b>, they explain\n<br>- <b>what biofilms are</b>,\n<br>- <b>how they affect healthcare</b>, and\n<br>- <b>how synthetic biology can offer real solutions</b>.\nBy presenting science in a\xa0<b>fun and accessible way</b>, the reels help\n<br>- <b>students, professionals, and the public</b>\xa0discover the\xa0<b>relevance of biotechnology</b>\xa0in daily life,\n<br>- and\xa0<b>spark curiosity</b>\xa0to explore these topics further.\n'}], 'text': [{'level': 3, 'title': '1. Introduction to the biofilm', 'description': [{'type': 'img', 'text': 2}], 'text': undefined}, {'level': 3, 'title': '2. Introduction to the PJI', 'description': [{'type': 'text', 'text': '<aside>\n💡\nWe explains <b>Periprosthetic Joint Infection (PJI)</b> — an infection that occurs when bacteria infect an artificial joint, like a knee or hip replacement. We break down the concept by describing how bacteria can enter the body after surgery, form a <b>biofilm</b> (a slimy shield) on the joint, and become <b>resistant to treatment</b>.\n</aside>\n<br>- <b>Aim</b>\n<br>- To make PJI understandable and relatable by simplifying the complex biology involved, while emphasizing the seriousness of the issue.\n<br>- <b>Goal</b>\n<br>- To increase awareness of biofilm-related infections, showing how tiny bacteria can cause <b>major health consequences</b>.\n<br>- <b>Impact</b>\n<br>- It educates the audience about PJI and biofilms, while highlighting the need for more effective treatments to combat these infections.'}, {'type': 'img', 'text': 3}, {'type': 'text', 'text': '( Click to see the reels )'}], 'text': undefined}, {'level': 3, 'title': '3.How MRSA and Biofilms Make Infections Hard to Treat', 'description': [{'type': 'img', 'text': 4}], 'text': undefined}, {'level': 3, 'title': '4. How Biofilms Make Infections Hard to Treat', 'description': [{'type': 'text', 'text': '<aside>\n💡\nWe dives into why <b>biofilms</b> are the real culprit behind hard-to-treat infections, like <b>Periprosthetic Joint Infection (PJI)</b>, despite following all the right procedures. We break down how bacteria, once they enter the body, don’t just float around — they <b>anchor</b> themselves to surfaces like implants, build a <b>slimy fortress</b>, and hide from antibiotics, immune cells, and disinfectants.\n</aside>\n<br>- <b>Aim</b>\n<br>- To make viewers realize the true danger of biofilms, showing how they turn minor infections into major challenges.\n<br>- <b>Goal</b>\n<br>- To raise awareness of these hidden threats and encourage people to <b>talk to their doctors</b> about biofilms.\n<br>- <b>Impact</b>\n<br>- Empowering people to recognize the silent risks around them and push for smarter, more informed healthcare choices.'}, {'type': 'img', 'text': 5}, {'type': 'text', 'text': '( Click to see the reels )'}], 'text': undefined}]}, {'level': 2, 'title': 'Biofilm Workshop for high school students', 'description': [{'type': 'text', 'text': '<aside>\n💡\nOur team hosted an interactive <b>workshop for high school students</b> aimed at introducing them to the exciting world of <b>iGEM</b> and <b>biofilm science</b>. We began the session by providing a broad introduction to <b>iGEM</b>, explaining the competition’s focus on <b>synthetic biology</b> and how our team tackles real-world issues like <b>biofilm-related infections</b>. To kick things off in a fun way, we included an <b>icebreaker activity</b> that encouraged students to collaborate and think creatively.\n</aside>\n<br>- <b>Aim</b>\n<br>- To inspire the students to explore <b>synthetic biology</b> and foster an interest in <b>biotechnology</b>. We wanted to give them a hands-on experience of how iGEM teams solve global challenges by emphasizing <b>problem-solving</b>, <b>collaboration</b>, and <b>creative thinking</b>. Through <b>interactive experiments</b> and <b>group brainstorming</b>, students gained a deeper understanding of <b>biofilms</b> and how synthetic biology can offer innovative solutions to medical issues like <b>PJI</b> (periprosthetic joint infection).\n<br>- <b>Goal</b>\n<br>- Not only to introduce students to the world of iGEM but also to engage them in a learning process that would open their eyes to the <b>potential of biotechnology</b> in solving global problems.\n<br>- <b>Impact</b>\n<br>- It was felt as students were able to grasp complex scientific concepts through fun, hands-on activities, increasing their awareness of biofilms and sparking their curiosity about the future of science and technology.'}, {'type': 'img', 'text': 6}, {'type': 'text', 'text': ''}], 'text': [{'level': 3, 'title': 'The workshop Schedule (Overview)', 'description': [{'type': 'img', 'text': 7}], 'text': undefined}, {'level': 3, 'title': '1. Lecture', 'description': [{'type': 'text', 'text': 'The workshop began with a lecture introducing synthetic biology and the iGEM competition. Students learned how DNA sequences can be designed and applied in real-world contexts such as medicine and environmental protection. We also presented our project on engineering E. coli to produce biofilm-degrading enzymes, showing how iGEM teams transform ideas into impactful research. The session emphasized that synthetic biology combines science, creativity, and ethics to solve real-world problems.'}, {'type': 'img', 'text': 8}], 'text': undefined}, {'level': 3, 'title': '2. Experiments', 'description': [{'type': 'text', 'text': 'Students then participated in three hands-on experiments designed to connect theory with practice:\n<b>Biofilm Simulation Experiment:</b>\nStudents used simple materials to simulate biofilm formation and observed how the “biofilm” resisted external substances, mimicking bacterial defense mechanisms. This helped them visualize why biofilms make infections difficult to treat.'}, {'type': 'img', 'text': 9}, {'type': 'text', 'text': '<b>Environmental Microbiology Experiment</b>:\nThrough culturing bacteria with and without alcohol and antibiotics, students explored how environmental factors affect microbial survival. This experiment highlighted the importance of proper disinfection and the role of antibiotics in controlling bacterial growth.'}, {'type': 'img', 'text': 10}, {'type': 'text', 'text': '<b>GFP Fluorescence Graffiti Experiment:</b>\nParticipants used E. coli expressing green fluorescent protein (GFP) to draw fluorescent patterns, learning about gene expression and protein visualization. This activity demonstrated how engineered bacteria can express visible traits, linking art and science to inspire curiosity in genetic engineering.'}, {'type': 'img', 'text': 11}, {'type': 'text', 'text': '1. <b>Brainstorming</b>\nAfter the experiments, students were divided into groups for a design challenge simulating the iGEM brainstorming process. Using past NCKU iGEM projects as examples, they identified real-world problems, discussed potential synthetic biology solutions, and evaluated risks and feasibility. This session encouraged creative thinking, teamwork, and practical understanding of how iGEM teams transform ideas into viable project proposals.'}, {'type': 'img', 'text': 12}], 'text': undefined}, {'level': 3, 'title': 'The feedback', 'description': [{'type': 'text', 'text': 'To assess the educational impact of our Synthetic Biology Workshop, we conducted a post-event survey among all participants. The results clearly demonstrated that the workshop was both engaging and effective in improving students’ understanding of scientific concepts while maintaining high overall satisfaction.'}, {'type': 'img', 'text': 13}, {'type': 'text', 'text': 'Before the workshop, most students reported only a basic or limited understanding of synthetic biology, with the majority rating themselves at Level 2 (basic awareness). After the workshop, the distribution shifted dramatically—Level 4 and Level 5 responses increased from 3 to 13 participants, showing that nearly all attendees gained a strong grasp of the topic. The chart below visualizes this improvement, reflecting how hands-on experiments and interactive lectures deepened conceptual understanding'}, {'type': 'img', 'text': 14}, {'type': 'text', 'text': 'Feedback on the overall experience was overwhelmingly positive. Over 90% of students rated the workshop 4 or 5 out of 5, indicating that the balance between lectures, experiments, and group discussion successfully captured participants’ interest.\nThe survey results highlight the workshop’s success in promoting active learning and scientific curiosity among high school students. By combining accessible explanations with practical experience, we not only increased students’ knowledge of synthetic biology but also inspired confidence and enthusiasm for future participation in iGEM-related activities.'}, {'type': 'img', 'text': 15}], 'text': undefined}]}]}]]
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
            while(x.indexOf('&') != -1) x = x.replace('&', 'and');
            if(x.indexOf('(') != -1) x = x.substr(0, x.indexOf('('));
            return x.toLowerCase();
        },
        get_image(x) {
            var token = this.tokenize('Education');
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