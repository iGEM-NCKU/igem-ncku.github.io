<template>
    <v-app>
    <page_loader :loading = 'loading' />
    <title_nav />
    
    <v-main>
    <sidenav name = 'Education' />
    <image_previewer />
    
    <v-row justify = end>
        <v-col cols = 12 md = 7 class = 'pa-5'>
            <v-img style="margin-bottom: -8%; margin-top: -7%;" src = "https://static.igem.wiki/teams/6003/title/6.avif"/>  
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
                        <div v-html = 'i.title' style = 'font-size: 30px' />
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
                                <template v-else-if = 'k.type == `pdf`'>
                                    <v-hover>
                                        <template #default = '{isHovering, props}'>
                                            <a href = 'https://static.igem.wiki/teams/6003/hp/entrepreneurship/entrepreneurship-4.pdf' target = '_blank'>
                                                <v-card title = PDF subtitle = 'Click to view' v-bind = props :color = 'isHovering ? `primary` : undefined' v-ripple class = ma-3 prepend-icon = 'fa-solid fa-file-pdf' />
                                            </a>
                                        </template>
                                    </v-hover>
                                </template>
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
            data: [[{'type': 'text', 'text': ''}], [{'level': 1, 'title': 'Overview', 'description': [{'type': 'text', 'text': 'Through our surveys and questionnaires, we uncovered a significant gap in the public’s understanding of biofilms, biotechnology, and synthetic biology. This insight led us to make it a priority to <b>break down the barriers that prevent people from accessing cutting-edge knowledge in these fields</b>. We realized that many individuals, from high school students to adults, lacked even basic awareness about biofilms and their impact on healthcare, and this knowledge gap needed to be addressed.\n<br><br>\nTo close this gap, we organized a <b>comprehensive educational workshop aimed at high school students</b>. This workshop was designed to provide students with an in-depth understanding of biofilms, synthetic biology, and their real-world applications, ensuring that the content was accessible and engaging. At the conclusion of the workshop, we <b>gathered valuable feedback</b> from the participants to refine and improve our educational approach. We also sought additional insights to enhance the effectiveness of future educational initiatives. Our goal is not only to share knowledge but to <b>create a more informed society</b>, empowering the next generation to engage with and contribute to the advancements in synthetic biology.'}], 'text': [{'level': 2, 'title': 'Biofilm interactive game', 'description': [{'type': 'text', 'text': '💡\n<br><br>\nThe <b>Biofilm Interactive Game</b> was developed in collaboration with the <b>Dry Lab Team</b> to teach synthetic biology by simulating how engineered enzymes break down harmful biofilms in real-world infections.'}, {'type': 'icon', 'text': 'fa-solid fa-check'}, {'type': 'text', 'text': '<b>Aim</b>'}, {'type': 'icon', 'text': 'fa-solid fa-check'}, {'type': 'text', 'text': 'To simplify complex biofilm science and provide an interactive experience that engages players in understanding how biofilms form and how synthetic biology can help combat them.'}, {'type': 'icon', 'text': 'fa-solid fa-check'}, {'type': 'text', 'text': '<b>Goal</b>'}, {'type': 'icon', 'text': 'fa-solid fa-check'}, {'type': 'text', 'text': 'To educate users about biofilm-related challenges in healthcare while showing how engineered enzymes can be used as a treatment.'}, {'type': 'icon', 'text': 'fa-solid fa-check'}, {'type': 'text', 'text': '<b>Impact</b>'}, {'type': 'icon', 'text': 'fa-solid fa-check'}, {'type': 'text', 'text': 'To bridge the knowledge gap, raising awareness and encouraging deeper understanding of biofilms and synthetic biology, thus empowering users to engage with these concepts in a fun and educational way.'}], 'text': [{'level': 3, 'title': 'The Rules of the game', 'description': [{'type': 'text', 'text': 'We developed an educational tower defense game where the enemies are bacteria equipped with one to three layers of biofilm shields.\nThe bacterial species include <i>Staphylococcus aureus</i>, <i>Mycobacterium</i>, <i>Escherichia coli</i>, <i>Pseudomonas aeruginosa</i>, and <i>Streptococcus</i>.\n<br><br>\nThere are two types of defense towers: enzyme towers and antibiotic towers.\n<br><br>\nEnzyme towers can only target biofilm shields:\n<br><br>\nDispersin B Tower attacks PNAG-based polysaccharide shields.\n<br><br>\nProteinase K Tower targets protein shields.\n<br><br>\nDNase I Tower breaks down eDNA shields.\n<br><br>\nOnly the outermost shield can be attacked at any given time.\n<br><br>\nOnce a bacterium’s shields are completely destroyed, enzyme towers can no longer deal damage.\nAt this stage, players must deploy antibiotic towers to eliminate the unshielded bacteria.\nHowever, antibiotic towers are ineffective until the entire biofilm has been degraded—mimicking how antibiotics cannot penetrate intact biofilms in real infections.\n<br><br>\nTo simulate the limited persistence of enzymes and antibiotics in the human body, both types of towers automatically disappear after a certain duration.\n<br><br>\nThe shield compositions are randomly generated to represent the unpredictable structure of natural biofilms.\n<br><br>\nFinally, if a bacterium successfully reaches the end point, a giant biofilm will form at a random location on the map.\nThis represents an established infection site that continuously releases new bacteria—illustrating how uncontrolled biofilm growth leads to persistent infection.'}, {'type': 'img', 'text': 1}, {'type': 'text', 'text': ''}], 'text': undefined}]}, {'level': 2, 'title': 'Popular science Reels on Instagram', 'description': [{'type': 'text', 'text': '💡\n<br><br>\nThese\xa0<b>short videos</b>\xa0were designed to\xa0<b>make complex scientific ideas easier to understand</b>\xa0and\xa0<b>more engaging for everyone</b>.\n<br><br>\nThrough\xa0<b>concise, visually appealing storytelling</b>, they explain'}, {'type': 'icon', 'text': 'fa-solid fa-check'}, {'type': 'text', 'text': '<b>what biofilms are</b>,'}, {'type': 'icon', 'text': 'fa-solid fa-check'}, {'type': 'text', 'text': '<b>how they affect healthcare</b>, and'}, {'type': 'icon', 'text': 'fa-solid fa-check'}, {'type': 'text', 'text': '<b>how synthetic biology can offer real solutions</b>.\n<br><br>\nBy presenting science in a\xa0<b>fun and accessible way</b>, the reels help'}, {'type': 'icon', 'text': 'fa-solid fa-check'}, {'type': 'text', 'text': '<b>students, professionals, and the public</b>\xa0discover the\xa0<b>relevance of biotechnology</b>\xa0in daily life,'}, {'type': 'icon', 'text': 'fa-solid fa-check'}, {'type': 'text', 'text': 'and\xa0<b>spark curiosity</b>\xa0to explore these topics further.'}], 'text': [{'level': 3, 'title': '1. Introduction to the biofilm', 'description': [{'type': 'text', 'text': ''}, {'type': 'img', 'text': 2}, {'type': 'text', 'text': '💡\n<br><br>\nWe introduces <b>biofilm</b> by using a relatable everyday example — the slimy feeling on teeth when you forget to brush. We explain that biofilm isn’t just on your teeth but is present in many places, like water bottles and hospital tools, where it forms protective bacterial communities.'}, {'type': 'icon', 'text': 'fa-solid fa-check'}, {'type': 'text', 'text': '<b>Aim</b>\n<br><br>\nTo raise awareness about how biofilms can cause stubborn infections and health issues, while also encouraging better hygiene practices.'}, {'type': 'icon', 'text': 'fa-solid fa-check'}, {'type': 'text', 'text': "<b>Goal</b>\n<br><br>\nTo simplify a complex scientific concept and make it relevant to viewers' lives."}, {'type': 'icon', 'text': 'fa-solid fa-check'}, {'type': 'text', 'text': '<b>Impact</b>\n<br><br>\nIt helps people understand biofilms and the hidden risks they pose, while also promoting healthier habits to minimize biofilm buildup and its associated dangers.'}], 'text': undefined}, {'level': 3, 'title': '2. Introduction to the PJI', 'description': [{'type': 'text', 'text': '💡\n<br><br>\nWe explains <b>Periprosthetic Joint Infection (PJI)</b> — an infection that occurs when bacteria infect an artificial joint, like a knee or hip replacement. We break down the concept by describing how bacteria can enter the body after surgery, form a <b>biofilm</b> (a slimy shield) on the joint, and become <b>resistant to treatment</b>.'}, {'type': 'icon', 'text': 'fa-solid fa-check'}, {'type': 'text', 'text': '<b>Aim</b>'}, {'type': 'icon', 'text': 'fa-solid fa-check'}, {'type': 'text', 'text': 'To make PJI understandable and relatable by simplifying the complex biology involved, while emphasizing the seriousness of the issue.'}, {'type': 'icon', 'text': 'fa-solid fa-check'}, {'type': 'text', 'text': '<b>Goal</b>'}, {'type': 'icon', 'text': 'fa-solid fa-check'}, {'type': 'text', 'text': 'To increase awareness of biofilm-related infections, showing how tiny bacteria can cause <b>major health consequences</b>.'}, {'type': 'icon', 'text': 'fa-solid fa-check'}, {'type': 'text', 'text': '<b>Impact</b>'}, {'type': 'icon', 'text': 'fa-solid fa-check'}, {'type': 'text', 'text': 'It educates the audience about PJI and biofilms, while highlighting the need for more effective treatments to combat these infections.'}, {'type': 'img', 'text': 3}, {'type': 'text', 'text': '( Click to see the reels )'}], 'text': undefined}, {'level': 3, 'title': '3.How MRSA and Biofilms Make Infections Hard to Treat', 'description': [{'type': 'text', 'text': ''}, {'type': 'img', 'text': 4}, {'type': 'text', 'text': '( Click to see the reels )\n<br><br>\n💡\n<br><br>\nWe introduce <b>MRSA (Methicillin-Resistant Staphylococcus aureus)</b>, a strain of bacteria that has evolved to resist many common antibiotics. When MRSA enters the body through a cut, surgery, or catheter, it can form a <b>biofilm</b>. This makes infections particularly hard to treat and highlights the need for smarter, targeted solutions in biotechnology.'}, {'type': 'icon', 'text': 'fa-solid fa-check'}, {'type': 'text', 'text': '<b>Aim</b>'}, {'type': 'icon', 'text': 'fa-solid fa-check'}, {'type': 'text', 'text': 'Toshow viewers that MRSA isn’t just a hospital problem; it’s spreading in places like gyms, locker rooms, and schools.'}, {'type': 'icon', 'text': 'fa-solid fa-check'}, {'type': 'text', 'text': '<b>Goal</b>'}, {'type': 'icon', 'text': 'fa-solid fa-check'}, {'type': 'text', 'text': 'To raise awareness about how biofilms make bacteria like MRSA <b>even harder to fight</b>, emphasizing the need for <b>smarter, more targeted solutions</b>.'}, {'type': 'icon', 'text': 'fa-solid fa-check'}, {'type': 'text', 'text': '<b>Impact</b>'}, {'type': 'icon', 'text': 'fa-solid fa-check'}, {'type': 'text', 'text': 'By educating the public on biofilms and their role in infections like MRSA, we hope to inspire action and support for <b>innovative approaches</b> to combat these resilient bacteria.'}], 'text': undefined}, {'level': 3, 'title': '4. How Biofilms Make Infections Hard to Treat', 'description': [{'type': 'text', 'text': '💡\n<br><br>\nWe dives into why <b>biofilms</b> are the real culprit behind hard-to-treat infections, like <b>Periprosthetic Joint Infection (PJI)</b>, despite following all the right procedures. We break down how bacteria, once they enter the body, don’t just float around — they <b>anchor</b> themselves to surfaces like implants, build a <b>slimy fortress</b>, and hide from antibiotics, immune cells, and disinfectants.'}, {'type': 'icon', 'text': 'fa-solid fa-check'}, {'type': 'text', 'text': '<b>Aim</b>'}, {'type': 'icon', 'text': 'fa-solid fa-check'}, {'type': 'text', 'text': 'To make viewers realize the true danger of biofilms, showing how they turn minor infections into major challenges.'}, {'type': 'icon', 'text': 'fa-solid fa-check'}, {'type': 'text', 'text': '<b>Goal</b>'}, {'type': 'icon', 'text': 'fa-solid fa-check'}, {'type': 'text', 'text': 'To raise awareness of these hidden threats and encourage people to <b>talk to their doctors</b> about biofilms.'}, {'type': 'icon', 'text': 'fa-solid fa-check'}, {'type': 'text', 'text': '<b>Impact</b>'}, {'type': 'icon', 'text': 'fa-solid fa-check'}, {'type': 'text', 'text': 'Empowering people to recognize the silent risks around them and push for smarter, more informed healthcare choices.'}, {'type': 'img', 'text': 5}, {'type': 'text', 'text': '( Click to see the reels )'}], 'text': undefined}]}, {'level': 2, 'title': 'Biofilm Workshop for high school students', 'description': [{'type': 'text', 'text': '💡\n<br><br>\nOur team hosted an interactive <b>workshop for high school students</b> aimed at introducing them to the exciting world of <b>iGEM</b> and <b>biofilm science</b>. We began the session by providing a broad introduction to <b>iGEM</b>, explaining the competition’s focus on <b>synthetic biology</b> and how our team tackles real-world issues like <b>biofilm-related infections</b>. To kick things off in a fun way, we included an <b>icebreaker activity</b> that encouraged students to collaborate and think creatively.'}, {'type': 'icon', 'text': 'fa-solid fa-check'}, {'type': 'text', 'text': '<b>Aim</b>'}, {'type': 'icon', 'text': 'fa-solid fa-check'}, {'type': 'text', 'text': 'To inspire the students to explore <b>synthetic biology</b> and foster an interest in <b>biotechnology</b>. We wanted to give them a hands-on experience of how iGEM teams solve global challenges by emphasizing <b>problem-solving</b>, <b>collaboration</b>, and <b>creative thinking</b>. Through <b>interactive experiments</b> and <b>group brainstorming</b>, students gained a deeper understanding of <b>biofilms</b> and how synthetic biology can offer innovative solutions to medical issues like <b>PJI</b> (periprosthetic joint infection).'}, {'type': 'icon', 'text': 'fa-solid fa-check'}, {'type': 'text', 'text': '<b>Goal</b>'}, {'type': 'icon', 'text': 'fa-solid fa-check'}, {'type': 'text', 'text': 'Not only to introduce students to the world of iGEM but also to engage them in a learning process that would open their eyes to the <b>potential of biotechnology</b> in solving global problems.'}, {'type': 'icon', 'text': 'fa-solid fa-check'}, {'type': 'text', 'text': '<b>Impact</b>'}, {'type': 'icon', 'text': 'fa-solid fa-check'}, {'type': 'text', 'text': 'It was felt as students were able to grasp complex scientific concepts through fun, hands-on activities, increasing their awareness of biofilms and sparking their curiosity about the future of science and technology.'}, {'type': 'img', 'text': 6}, {'type': 'text', 'text': ''}], 'text': [{'level': 3, 'title': 'The workshop Schedule (Overview)', 'description': [{'type': 'text', 'text': ''}, {'type': 'img', 'text': 7}, {'type': 'text', 'text': ''}], 'text': undefined}, {'level': 3, 'title': '1. Lecture', 'description': [{'type': 'text', 'text': 'The workshop began with a lecture introducing synthetic biology and the iGEM competition. Students learned how DNA sequences can be designed and applied in real-world contexts such as medicine and environmental protection. We also presented our project on engineering E. coli to produce biofilm-degrading enzymes, showing how iGEM teams transform ideas into impactful research. The session emphasized that synthetic biology combines science, creativity, and ethics to solve real-world problems.'}, {'type': 'img', 'text': 8}, {'type': 'text', 'text': ''}], 'text': undefined}, {'level': 3, 'title': '2. Experiments', 'description': [{'type': 'text', 'text': 'Students then participated in three hands-on experiments designed to connect theory with practice:\n<br><br>\n<b>Biofilm Simulation Experiment:</b>\nStudents used simple materials to simulate biofilm formation and observed how the “biofilm” resisted external substances, mimicking bacterial defense mechanisms. This helped them visualize why biofilms make infections difficult to treat.'}, {'type': 'img', 'text': 9}, {'type': 'text', 'text': '<b>Environmental Microbiology Experiment</b>:\nThrough culturing bacteria with and without alcohol and antibiotics, students explored how environmental factors affect microbial survival. This experiment highlighted the importance of proper disinfection and the role of antibiotics in controlling bacterial growth.'}, {'type': 'img', 'text': 10}, {'type': 'text', 'text': '<b>GFP Fluorescence Graffiti Experiment:</b>\nParticipants used E. coli expressing green fluorescent protein (GFP) to draw fluorescent patterns, learning about gene expression and protein visualization. This activity demonstrated how engineered bacteria can express visible traits, linking art and science to inspire curiosity in genetic engineering.'}, {'type': 'img', 'text': 11}, {'type': 'text', 'text': '1. <b>Brainstorming</b>\n<br><br>\nAfter the experiments, students were divided into groups for a design challenge simulating the iGEM brainstorming process. Using past NCKU iGEM projects as examples, they identified real-world problems, discussed potential synthetic biology solutions, and evaluated risks and feasibility. This session encouraged creative thinking, teamwork, and practical understanding of how iGEM teams transform ideas into viable project proposals.'}, {'type': 'img', 'text': 12}, {'type': 'text', 'text': ''}], 'text': undefined}, {'level': 3, 'title': 'The feedback', 'description': [{'type': 'text', 'text': 'To assess the educational impact of our Synthetic Biology Workshop, we conducted a post-event survey among all participants. The results clearly demonstrated that the workshop was both engaging and effective in improving students’ understanding of scientific concepts while maintaining high overall satisfaction.'}, {'type': 'img', 'text': 13}, {'type': 'text', 'text': 'Before the workshop, most students reported only a basic or limited understanding of synthetic biology, with the majority rating themselves at Level 2 (basic awareness). After the workshop, the distribution shifted dramatically—Level 4 and Level 5 responses increased from 3 to 13 participants, showing that nearly all attendees gained a strong grasp of the topic. The chart below visualizes this improvement, reflecting how hands-on experiments and interactive lectures deepened conceptual understanding'}, {'type': 'img', 'text': 14}, {'type': 'text', 'text': 'Feedback on the overall experience was overwhelmingly positive. Over 90% of students rated the workshop 4 or 5 out of 5, indicating that the balance between lectures, experiments, and group discussion successfully captured participants’ interest.\n<br><br>\nThe survey results highlight the workshop’s success in promoting active learning and scientific curiosity among high school students. By combining accessible explanations with practical experience, we not only increased students’ knowledge of synthetic biology but also inspired confidence and enthusiasm for future participation in iGEM-related activities.'}, {'type': 'img', 'text': 15}], 'text': undefined}]}]}]]
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