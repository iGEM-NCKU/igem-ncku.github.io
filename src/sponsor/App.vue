<template>
    <v-app>
    <page_loader :loading = 'loading' />
    <title_nav />
    
    <v-main>
           

        <v-row justify = end><v-col cols = 12 md = 9 class = 'pa-5'>
         <v-row class = 'text-center scroller' id = 'Sponsor' >
                <v-col >
                    <v-card :variant="alpha.card.theme" class="text-box pa-5 scroll-box" id = Sponsor>
                                    <v-card-title style="font-size: 32px;"><b>Sponsor & Partnership</b></v-card-title>
                                    <div
                                    id="Sponsor"
                                    title="Sponsor"
                                    class="text-content"
                                    
                                    >
                                    <p>Our iGEM journey would not have been possible without the generous support of our sponsors and partners. From university departments and government programs to businesses and individual contributors, each played a vital role in helping us turn our ideas into reality. Their financial assistance, mentorship, and encouragement allowed us to focus on what mattered most—advancing our research and promoting synthetic biology to a wider audience.</p>

                                    <p>This page is dedicated to expressing our sincere gratitude to everyone who believed in our vision and contributed to our growth. Their trust and collaboration remind us that science thrives through collective effort, and every success we achieve is shared with those who supported us along the way.</p>
                               <br>
                                    <p><em>“Alone we can do so little; together we can do so much.”</em><br>
                                    — <b>Helen Keller</b></p>
                                   
                                    </div>
                    </v-card>
                </v-col>
            </v-row>
            <v-row class = 'text-center scroller' id = 'Sponsor' >
                <v-col >
                    <v-card :variant="alpha.card.theme" class="text-box pa-5 scroll-box" id = Sponsor color="#bded98">
                                    <v-card-title style="font-size: 32px;"><b>Corporate Sponsor</b></v-card-title>                               
                    </v-card>
                </v-col>
            </v-row>
        <v-row>
            <v-col cols = 12 md = 3>
                <v-card color="#9aad8b">
                          <div
                        id="Sponsor"
                        title="Sponsor"                      
                        >
                        <a href="https://www.ncku.edu.tw" target="_blank" rel="noopener">
                        <v-img class = "preview mx-auto" 
                                :max-width= "800"
                                src = " https://static.igem.wiki/teams/6003/sponsor/1.avif"/></a>
                                </div>                     
                </v-card>
            </v-col>
             <v-col cols = 12 md = 9>
                <v-card title = 'National Cheng Kung University' subtitle = '' :variant = 'alpha.card.theme'>
                         <div
                        id="Sponsor"
                        title="Sponsor"
                        class="text-content"
                        text-align = 'start'
                        >
                        <p><b>National Cheng Kung University (NCKU)</b> is one of Taiwan’s leading research universities, renowned for its strong emphasis on innovation, interdisciplinary collaboration, and global engagement. The university has long supported students in exploring the frontiers of science and technology, fostering an environment where creativity and research excellence thrive.</p>

                        <p>We sincerely thank NCKU for its continued support of our iGEM journey. From providing essential research facilities and academic guidance to offering financial assistance, NCKU has been a cornerstone of our progress. This support not only empowered us to carry out our project but also reflected the university’s commitment to nurturing young scientists dedicated to solving real-world challenges through synthetic biology.</p>                      
                        </div>  
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols = 12 md = 3>
                <v-card color="#9aad8b">
                         <div
                        id="Sponsor"
                        title="Sponsor"                      
                        >
                        <a href="https://english.moe.gov.tw/mp-1.html" target="_blank" rel="noopener">
                        <v-img class = "preview mx-auto" 
                                :max-width= "800"
                                src = "https://static.igem.wiki/teams/6003/sponsor/2.avif"/></a>
                                </div>                      
                </v-card>
            </v-col>
             <v-col cols = 12 md = 9>
                <v-card title = 'Ministry of Education, Republic of China (Taiwan)' subtitle = '' :variant = 'alpha.card.theme'>
                         <div
                        id="Sponsor"
                        title="Sponsor"
                        class="text-content"
                        text-align = 'start'
                        >
                        <p>The <b>Ministry of Education (MOE), Taiwan</b> plays a vital role in promoting academic excellence, international collaboration, and youth innovation. Through various subsidy and exchange programs, the MOE empowers students to participate in global research initiatives, fostering scientific curiosity and cultural exchange on the world stage.</p>

                        <p>We deeply appreciate the Ministry of Education’s support for our participation in iGEM 2025. Their funding and encouragement allowed us to represent Taiwan in an international scientific community and to showcase the creativity and determination of young Taiwanese researchers. This support reflects the Ministry’s ongoing commitment to nurturing future leaders who will drive innovation and advance education in Taiwan and beyond.</p>
                        </div>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols = 12 md = 3>
                <v-card color="#9aad8b">
                         <div
                        id="Sponsor"
                        title="Sponsor"                      
                        >
                        <a href="https://www.dike.tw/?srsltid=AfmBOopnaoKyRiftdwEApzwFduPi21Pg5cVBT08SRs_tRWPoQ1pb15i7" target="_blank" rel="noopener">
                        <v-img class = "preview mx-auto" 
                                :max-width= "800"
                                src = "https://static.igem.wiki/teams/6003/sponsor/3.avif"/></a>
                                </div>                    
                </v-card>
            </v-col>
             <v-col cols = 12 md = 9>
                <v-card title = 'DIKE, Double Life International ' subtitle = '' :variant = 'alpha.card.theme'>
                         <div
                        id="Sponsor"
                        title="Sponsor"
                        class="text-content"
                        text-align = 'start'
                        >
                        
                            <p><b>DIKE Company</b> is a Taiwanese brand known for its commitment to quality, innovation, and practical design across <b>a wide range of electronic and lifestyle products.</b> With a focus on combining technology and creativity, DIKE continues to support projects that inspire young people to think beyond boundaries and apply innovation to everyday life.</p>

                            <p>We sincerely thank <b>DIKE Company</b> for their generous support of our iGEM 2025 journey. Their sponsorship not only provided essential resources but also motivated us to uphold the same spirit of innovation and reliability that defines their brand. With DIKE’s support, we were able to move one step closer to turning our vision into reality.</p>
                        </div>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols = 12 md = 3>
                <v-card color="#9aad8b">
                          <div
                        id="Sponsor"
                        title="Sponsor"                      
                        >
                        <a href="https://tpyd.gov.taipei/en/" target="_blank" rel="noopener">
                        <v-img class = "preview mx-auto" 
                                :max-width= "800"
                                src = "https://static.igem.wiki/teams/6003/sponsor/4.avif"/></a>
                                </div>                       
                </v-card>
            </v-col>
             <v-col cols = 12 md = 9>
                <v-card title = 'Department for Youth, Taipei City Government' subtitle = '' :variant = 'alpha.card.theme'>
                         <div
                        id="Sponsor"
                        title="Sponsor"
                        class="text-content"
                        text-align = 'start'
                        >

                            <p>The <b>Department for Youth, Taipei City Government</b> is dedicated to empowering young people through education, innovation, and international engagement. By supporting youth-led initiatives and global competitions, the department encourages students to broaden their perspectives, develop leadership skills, and contribute meaningfully to society.</p>

                            <p>We sincerely thank the <b>Department for Youth, Taipei City Government</b> for their generous support of our iGEM 2025 journey. Their recognition and funding made it possible for us to represent Taipei and Taiwan on the global stage, promoting the spirit of innovation and collaboration among young scientists. Their encouragement continues to inspire us to pursue excellence and give back to the community that supports us.</p>

                        </div>
                </v-card>
            </v-col>
        </v-row>
                                    <!--間隔-->
        <v-row>
            <v-col cols = 12 md = 3>
                <v-card color="#9aad8b">
                         <div
                        id="Sponsor"
                        title="Sponsor"                      
                        >
                        <a href="https://www.alumni-ncku.tw/%E9%97%9C%E6%96%BC%E6%A0%A1%E5%8F%8B%E7%B8%BD%E6%9C%83/" target="_blank" rel="noopener">
                        <v-img class = "preview mx-auto" 
                                :max-width= "800"
                                src = "https://static.igem.wiki/teams/6003/sponsor/5.avif"/></a>
                                </div>                    
                </v-card>
            </v-col>
             <v-col cols = 12 md = 9>
                <v-card title = 'NCKU Global Alumni Association' subtitle = '' :variant = 'alpha.card.theme'>
                         <div
                        id="Sponsor"
                        title="Sponsor"
                        class="text-content"
                        text-align = 'start'
                        >
                    
<p>The <b>NCKU Global Alumni Association</b> serves as a bridge connecting National Cheng Kung University graduates across the world, fostering a strong network of collaboration, mentorship, and shared pride. The association actively supports academic exchange, research development, and student innovation, continuing NCKU’s legacy of excellence beyond the campus.</p>

<p>We extend our heartfelt thanks to the <b>NCKU Global Alumni Association</b> for their generous sponsorship and encouragement. Their support not only strengthened our ability to participate in iGEM 2025 but also reminded us of the lasting bond between NCKU students and alumni. Through their contribution, we were able to carry forward the university’s spirit of global connection, innovation, and community.</p>


                        </div>
                </v-card>
            </v-col>
        </v-row>
                                   <!--間隔-->
        <v-row>
            <v-col cols = 12 md = 3>
                <v-card color="#9aad8b">
                         <div
                        id="Sponsor"
                        title="Sponsor"                      
                        >
                        <a href="https://www.ivt.com.tw/" target="_blank" rel="noopener">
                        <v-img class = "preview mx-auto" 
                                :max-width= "800"
                                src = "https://static.igem.wiki/teams/6003/sponsor/6.avif"/></a>
                                </div>                    
                </v-card>
            </v-col>
             <v-col cols = 12 md = 9>
                <v-card title = 'IV TECHNOLOGIES CO., LTD' subtitle = '' :variant = 'alpha.card.theme'>
                         <div
                        id="Sponsor"
                        title="Sponsor"
                        class="text-content"
                        text-align = 'start'
                        >
               
<p><b>IV Technologies Co., Ltd. (智勝科技)</b> is a <b>Taiwanese company specializing in the development and manufacturing of Chemical Mechanical Planarization (CMP) consumables</b> for the semiconductor and optoelectronics industries. Founded in 2002, the company has become one of Taiwan’s leading suppliers of CMP polishing pads, silicone films, and wafer drive wheels, maintaining a strong reputation for precision and quality in advanced material engineering.</p>

<p>We sincerely thank <b>IV Technologies Co., Ltd.</b> for their generous sponsorship and support of our iGEM 2025 project. Their commitment to technological excellence and innovation reflects the same spirit that drives our team’s pursuit of scientific progress. With their support, we were able to further our research and represent Taiwan’s growing strength in both science and technology on the global stage.</p>


                        </div>
                </v-card>
            </v-col>
        </v-row>
                                   <!--間隔-->
        <v-row>
            <v-col cols = 12 md = 3>
                <v-card color="#9aad8b">
                         <div
                        id="Sponsor"
                        title="Sponsor"                      
                        >
                        <a href="https://www.facebook.com/groups/NCKUThailand/" target="_blank" rel="noopener">
                        <v-img class = "preview mx-auto" 
                                :max-width= "800"
                                src = " https://static.igem.wiki/teams/6003/sponsor/7.avif"/></a>
                                </div>                    
                </v-card>
            </v-col>
             <v-col cols = 12 md = 9>
                <v-card title = 'NCKU Alumni Association of Thailand' subtitle = '' :variant = 'alpha.card.theme'>
                         <div
                        id="Sponsor"
                        title="Sponsor"
                        class="text-content"
                        text-align = 'start'
                        >
                            <p>We are deeply grateful to the <b>NCKU Alumni Association of Thailand</b> for their generous support of our journey to the iGEM competition.</p>

                            <p>As one of the most active overseas alumni communities, the association has continuously supported NCKU students in pursuing international academic and research experiences.</p>

                            <p>Their encouragement and sponsorship not only eased our financial challenges but also reminded us of the strong global network that connects NCKU alumni across borders.</p>

                        </div>
                </v-card>
            </v-col>
        </v-row>
                                   <!--間隔-->
        <v-row>
            <v-col cols = 12 md = 3>
                <v-card color="#9aad8b">
                         <div
                        id="Sponsor"
                        title="Sponsor"                      
                        >
                        <a href="https://www.facebook.com/groups/401745790567546/?locale=zh_TW" target="_blank" rel="noopener">
                        <v-img class = "preview mx-auto" 
                                :max-width= "800"
                                src = "https://static.igem.wiki/teams/6003/sponsor/8.avif"/></a>
                                </div>                    
                </v-card>
            </v-col>
             <v-col cols = 12 md = 9>
                <v-card title = 'NCKU MSEAA' subtitle = '' :variant = 'alpha.card.theme'>
                         <div
                        id="Sponsor"
                        title="Sponsor"
                        class="text-content"
                        text-align = 'start'
                        >
                        <p>We would like to express our sincere gratitude to the <b>NCKU Materials Science and Engineering Alumni Association (NCKU MSEAA)</b> for their generous support of our team.</p>

                        <p>Their contribution played an important role in helping us bring <em>Byefilm</em> to the international stage and continue our research with confidence.</p>

                        <p>Beyond financial assistance, their encouragement represents the enduring connection between NCKU alumni and current students — a reminder that innovation is always built upon a strong and supportive community.</p>

                        </div>
                </v-card>
            </v-col>
        </v-row>
                                   <!--間隔-->
        <v-row>
            <v-col cols = 12 md = 3>
                <v-card color="#9aad8b">
                         <div
                        id="Sponsor"
                        title="Sponsor"                      
                        >
                        <a href="https://sg.idtdna.com/page" target="_blank" rel="noopener">
                        <v-img class = "preview mx-auto" 
                                :max-width= "800"
                                src = " https://static.igem.wiki/teams/6003/sponsor/9.avif"/></a>
                                </div>                    
                </v-card>
            </v-col>
             <v-col cols = 12 md = 9>
                <v-card title = 'Integrated DNA Technologies (IDT)' subtitle = '' :variant = 'alpha.card.theme'>
                         <div
                        id="Sponsor"
                        title="Sponsor"
                        class="text-content"
                        text-align = 'start'
                        >
                        <p><b>Integrated DNA Technologies (IDT)</b> is a leader in the development and manufacture of products for research and diagnostic life sciences. As one of the world’s largest suppliers of custom nucleic acids, IDT serves academic research, biotechnology, and pharmaceutical development communities with products that support applications including synthetic biology, next generation sequencing (NGS), gene amplification, SNP detection, expression profiling, and gene quantification.</p>

                        <p>Platform-independent NGS products are available in addition to DNA and RNA oligonucleotides, qPCR assays, siRNA duplexes, gBlocks™ Gene Fragments for gene construction, and custom gene synthesis.</p>

                        </div>
                </v-card>
            </v-col>
        </v-row>
                                   <!--間隔-->
       <v-row class = 'text-center scroller' id = 'Sponsor' >
                <v-col >
                    <v-card :variant="alpha.card.theme" class="text-box pa-5 scroll-box" id = Sponsor color="#bded98">
                                    <v-card-title style="font-size: 32px;"><b>Individual Sponsor</b></v-card-title>  
                                      <div
                        id="Sponsor"
                        title="Sponsor"
                        class="text-content"
                        text-align = 'start'
                        >
                        <p>We would like to express our heartfelt gratitude to all the <b>individual donors</b> who supported us through our crowdfunding campaign.</p>

                        <p>Your generosity — whether through a small contribution, a message of encouragement, or simply sharing our story — gave us the motivation to keep moving forward.</p>

                        <p>Every donation represented not only financial help, but also trust in our vision to make biotechnology more meaningful and accessible.</p>

                        <p>Your support reminds us that behind every scientific project stands a community that believes in its potential.</p>

                        <p>Thank you for being part of <b>Byefilm’s</b> journey. 💚</p>
`
                        </div>                            
                    </v-card>
                </v-col>
            </v-row>
            <v-row class = 'text-center scroller'>
            <v-col cols = 12 md = 6>
                <v-card color="#FFFFFF">
                         <v-card-title style="font-size: 32px;"><b> Chun-Yang Lin</b></v-card-title>                      
                </v-card>
            </v-col>
             <v-col cols = 12 md = 6>
                <v-card color="#FFFFFF">
                           <v-card-title style="font-size: 32px;"><b> Jacky HC Lin</b></v-card-title>                      
                </v-card>
            </v-col>
        </v-row>
        <v-row class = 'text-center scroller' id = 'Sponsor' >
                <v-col >
                    <v-card :variant="alpha.card.theme" class="text-box pa-5 scroll-box" id = Sponsor color="#bded98">
                                    <v-card-title style="font-size: 32px;"><b>Our Partner</b></v-card-title>                                       
                    </v-card>
                </v-col>
            </v-row>
                                       <!--間隔-->
        <v-row>
            <v-col cols = 12 md = 3>
                <v-card color="#9aad8b">
                         <div
                        id="Sponsor"
                        title="Sponsor"                      
                        >
                        <a href="https://www.future.ncku.edu.tw/en" target="_blank" rel="noopener">
                        <v-img class = "preview mx-auto" 
                                :max-width= "800"
                                src = "https://static.igem.wiki/teams/6003/sponsor/9-1.avif"/></a>
                                </div>                    
                </v-card>
            </v-col>
             <v-col cols = 12 md = 9>
                <v-card title = 'NCKU Atelier Future' subtitle = '' :variant = 'alpha.card.theme'>
                         <div
                        id="Sponsor"
                        title="Sponsor"
                        class="text-content"
                        text-align = 'start'>

                            <p><b>NCKU Atelier Future</b> is an interdisciplinary innovation hub within National Cheng Kung University that provides a dynamic environment for collaboration, creativity, and entrepreneurship. The space serves as a platform for students and researchers to turn ideas into reality by offering professional guidance, shared resources, and administrative support. Through its programs and mentorship, Atelier Future plays a central role in cultivating innovation and supporting student-led initiatives at NCKU.</p>

                            <p>We are deeply grateful to <b>NCKU Atelier Future</b> for their invaluable partnership and continuous support throughout our iGEM 2025 journey. Beyond providing <b>venues and meeting rooms</b> for our regular discussions, interviews, and workshops, Atelier Future also offered <b>guidance on our fundraising strategy</b> and assisted with the <b>administrative processes</b> needed to formally establish our iGEM club within the university. Their professional advice and encouragement helped us navigate complex procedures smoothly and build a stronger organizational foundation.</p>

                            <p>Atelier Future’s involvement went far beyond logistical support—it fostered a sense of community and growth that motivated our team to aim higher. Their guidance has been instrumental in shaping both our project development and team structure, and we are sincerely thankful for their trust and commitment to empowering young innovators at NCKU.</p>


                        </div>
                </v-card>
            </v-col>
        </v-row>

        
    </v-col><v-col cols = 1 /></v-row>


    
    
    <site_footer></site_footer>
</v-main></v-app>
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
            alpha: {
                card: {
                    theme: undefined,
                    f: ['outlined', undefined, 'tonal', 'text', 'plain', 'flat']
                },
                subcard: {
                    theme: 'tonal',
                    f: ['outlined', undefined, 'tonal', 'text', 'plain', 'flat']
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
    },
    methods: {
        title(x) {
            x = x.replace('-', ' ');
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
a.unfocused, a.unfocused:visited, a.unfocused:hover, a.unfocused:active {
    color: inherit;
}
.text-content {
  font-size: 18px;      
  line-height: 1.6;    
  color: #333;     
   padding-left: 30px; 
}

</style>