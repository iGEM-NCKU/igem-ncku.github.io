<template>
    <v-app>
    <page_loader :loading = 'loading' />
    <title_nav />
    <image_previewer />
    
    <v-main>
    <sidenav name = 'Description' />
    <v-row justify = end><v-col cols = 12 md = 7 class = 'pa-5'>
        <v-img style="margin-bottom: -10%; margin-top: -10%;" src = "https://static.igem.wiki/teams/6003/title/20-2.avif"/>
        <v-row><v-col>
        <v-card :variant="alpha.card.theme" class="text-box pa-5 scroll-box scroller" id = The-Problem>
            <v-card-title style="font-size: 32px;"><b>The Problem</b></v-card-title>
                <div
                id="The Problem"
                title="The Problem"
                class="text-content"
                >
                <p>With global aging accelerating, <b>degenerative joint diseases</b> have become one of the leading causes of disability. Total Knee Arthroplasty (TKA) — an artificial knee replacement — is often the last and most effective solution for restoring mobility and quality of life.</p>
                <p>However, beneath this surgical success lies a hidden threat: <b>Periprosthetic Joint Infection (PJI)</b> — an infection that forms around the implant surface after surgery. Although its incidence is only around <em>0.5–2%</em>, once it occurs, it leads to catastrophic consequences such as <b>repeated surgeries, long-term antibiotic use, chronic pain, or even amputation</b>.</p>
                <p>The main culprit is <b>biofilm formation</b> — a structured bacterial community encased in a protective extracellular matrix made of <b>polysaccharides, proteins, and extracellular DNA (eDNA)</b>. Once established, biofilms block antibiotics and immune responses, turning a treatable infection into a chronic, relapsing one.</p>
                
                </div>
                <v-img class = "preview mx-auto"
                :max-width= "800"
                src="https://static.igem.wiki/teams/6003/description/description1.webp"               
                />
                <div
                class="text-content"
                >
                <p><em>Fig1. Biofilm-associated PJI requires invasive surgical removal and remains one of the toughest orthopedic infections to treat.</em></p>
                </div>
        </v-card>
        </v-col></v-row>
        
        <v-row><v-col>
            <v-card :variant="alpha.card.theme" class="text-box pa-5 scroll-box scroller" id = Inspiration>
            <v-card-title style="font-size: 32px;"><b>Inspiration</b></v-card-title>
                                <div
                                id="Inspiration"
                                title="Inspiration"
                                class="text-content"
                                >
                                <p>At the start of our project, we wanted to address a <em>global</em> issue — bacterial infections. Through literature and clinical consultation, we discovered that <b>biofilms are the hidden foundation of chronic infections</b>.</p>
                                <p>We found that despite decades of research, <b>modern medicine still lacks effective ways to remove biofilms</b>. Antibiotic-resistant infections persist not only because of resistance genes, but because <b>biofilms physically shield bacteria</b>.</p>
                                <p>After consulting orthopedic surgeons, we learned that while some <b>anti-adhesive or antimicrobial implant coatings</b> exist, they cannot replace <b>load-bearing prosthetics</b> due to their mechanical weakness. Moreover, once biofilms form deep around implants, <b>there are no non-surgical options</b> to remove them.</p>
                                <p>This raised a fundamental question that guided our entire project:</p>
                                <blockquote><b>Can we design a minimally invasive treatment that breaks down biofilms, allowing antibiotics to work again — without surgery?</b></blockquote>
                                <p>This challenge inspired <b>ByeFilm</b>, our synthetic biology solution to PJI.</p>
                                </div>
            </v-card>
        </v-col></v-row>
        <v-row><v-col>
            <v-card :variant="alpha.card.theme" class="text-box pa-5 scroll-box scroller" id = Main-Goals>
            <v-card-title style="font-size: 32px;"><b>Main Goals</b></v-card-title>
                                <div
                                id="Main-Goals"
                                title="Main-Goals"
                                class="text-content"
                                >
                                <p>We aim to create an <b>engineered bacterial system</b> that can:</p>
                                <ol>
                                <li><b>Degrade biofilms formed by <em>Staphylococcus aureus</em></b> — the most common pathogen in PJIs.</li>
                                <li><b>Enable local, enzyme-based therapy</b> to enhance antibiotic penetration.</li>
                                <li><b>Ensure biosafety and containment</b> via a built-in thermal lysis mechanism.</li>
                                <li><b>Reduce surgical intervention</b> and improve patient recovery.</li>
                                </ol>
                                </div>
                
            </v-card>
        </v-col></v-row>
        <v-row><v-col>
            <v-card :variant="alpha.card.theme" class="text-box pa-5 scroll-box scroller" id = The-Solution-ByeFilm>
            <v-card-title style="font-size: 32px;"><b>The Solution: ByeFilm</b></v-card-title>
            <v-card-subtitle id = "Multi-Enzyme-Synergy" class = "subtitle" style="font-size: 24px;"><b>Multi-Enzyme Synergy:</b></v-card-subtitle>
                                <div
                                id="The-Solution:-ByeFilm"
                                title="The-Solution:-ByeFilm"
                                class="text-content"
                                >
                                <p>We engineered <em>E. coli</em> to secrete <b>three complementary biofilm-degrading enzymes</b>, each targeting a key biofilm component:</p>

                                <table>
                                <thead>
                                    <tr>
                                    <th>Enzyme</th>
                                    <th>Function</th>
                                    <th>Target</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td><b>Dispersin B</b></td>
                                    <td>Hydrolyzes β-1,6-N-acetylglucosamine</td>
                                    <td>Polysaccharide layer</td>
                                    </tr>
                                    <tr>
                                    <td><b>Proteinase K</b></td>
                                    <td>Degrades extracellular structural proteins</td>
                                    <td>Protein layer</td>
                                    </tr>
                                    <tr>
                                    <td><b>DNase I</b></td>
                                    <td>Cleaves extracellular DNA scaffolds</td>
                                    <td>eDNA layer</td>
                                    </tr>
                                </tbody>
                                </table>
<br>
                                <p>Together, these enzymes dismantle biofilms <b>layer by layer</b>, exposing the bacteria to antibiotics and immune defenses. Our design was inspired by the 2015 Oxford iGEM team’s dual-enzyme secretion system and expanded with <b>multi-layer degradation</b> based on the review <em>“Strategy to Combat Biofilms: A Focus on Biofilm Dispersal Enzymes.”</em></p>
                                </div>
            <v-card-subtitle id = "Temperature-Dependent-Safety-Switch" class = "subtitle" style="font-size: 24px;"><b>Temperature-Dependent Safety Switch:</b></v-card-subtitle>
                                <div
                                id="Temperature-Dependent-Safety-Switch"
                                title="Temperature-Dependent Safety Switch"
                                class="text-content"
                                >    
                                
                                <p>To ensure <b>precise control and biosafety</b>, we employed the <b>λcI857 thermal switch</b>, integrated as a whole λ phage into the genome. This switch keeps the bacteria stable at low temperatures, but triggers <b>autolysis and enzyme release when exposed to ≥37°C</b> — the human body temperature.</p>

                                <p><b>This ensures that:</b></p>
                                <ul>
                                    <li>1. Enzymes are released <em>only within infection sites</em> (the warm body environment).</li>
                                    <li>2. Engineered bacteria cannot persist in the host or environment.</li>
                                    <li>3. Treatment remains localized and self-limiting.</li>
                                </ul>
            <v-img class = "preview mx-auto" 
                                :max-width= "800"
                                src = " https://static.igem.wiki/teams/6003/description/description2.webp"/>
                                </div>
                                <div class="text-content">
                                    <p><em>Fig2. Engineered E. coli carrying λcI857 undergoes heat-triggered lysis, releasing biofilm-degrading enzymes in situ.</em></p>
                                </div>
            </v-card>
        </v-col></v-row>
        <v-row><v-col>
            <v-card :variant="alpha.card.theme" class="text-box pa-5 scroll-box scroller" id = Tackling-a-Global-Issue-with-Synthetic-Biology>
            <v-card-title style="font-size: 32px;"><b>Tackling a Global Issue with Synthetic Biology</b></v-card-title>
                                <div
                                id="Tackling a Global Issue with Synthetic Biology"
                                title="Tackling a Global Issue with Synthetic Biology"
                                class="text-content"
                                >
                                <p>Biofilm infections are not only limited to joint implants — they are also responsible for <b>catheter infections, chronic wounds, and dental plaque</b>. Our approach demonstrates how <b>synthetic biology can be used to design targeted, controllable, and safe microbial therapies</b> for complex infection models.</p>
                                <p>By integrating <b>biomedical engineering</b>, <b>genetic circuit design</b>, and <b>clinical insight</b>, ByeFilm provides a new framework for treating chronic infections where antibiotics alone fail.</p>
                                </div>
            </v-card>

        </v-col></v-row>
        <v-row><v-col>
            <v-card :variant="alpha.card.theme" class="text-box pa-5 scroll-box scroller" id = Future-Visions>
            <v-card-title style="font-size: 32px;"><b>Future Visions</b></v-card-title>
                                <div
                                id="Future-Visions"
                                title="Future-Visions"
                                class="text-content"
                                >
                                <p>In the long term, we envision:</p>

                                <ul>
                                <li>Developing <b>enzyme formulations</b> derived from ByeFilm for injectable therapies.</li>
                                <li>Adapting our system to other implant-related infections (e.g., hip prostheses, dental implants).</li>
                                <li>Incorporating <b>biosensors</b> to detect biofilm presence and dynamically regulate enzyme release.</li>
                                </ul>

                                <p>Ultimately, ByeFilm aims to <b>restore the effectiveness of antibiotics</b> and <b>reduce the need for invasive revision surgeries</b>, improving patients’ lives while lowering healthcare burdens.</p>
                                </div>
            </v-card>
            

        </v-col></v-row>
        <v-row><v-col>
            <v-card :variant="alpha.card.theme" class="text-box pa-5 scroll-box scroller" id = References>
            <v-card-title style="font-size: 32px;"><b>References</b></v-card-title>
                                <div
                                id=" References"
                                title="References"
                                class="text-content"
                                >
                                <ol>
                                <li>Shichman, Ittai et al. “Projections and Epidemiology of Primary Hip and Knee Arthroplasty in Medicare Patients to 2040-2060.” JB & JS open access vol. 8,1 e22.00112. 28 Feb. 2023, doi:10.2106/JBJS.OA.22.00112</li>
                                <li>Ma, Tao et al. “Incidence of periprosthetic joint infection after primary total knee arthroplasty shows significant variation : a synthesis of meta-analysis and bibliometric analysis.” Journal of orthopaedic surgery and research vol. 19,1 649. 12 Oct. 2024, doi:10.1186/s13018-024-05099-8</li>
                                <li>Li, Cheng et al. “Management of Periprosthetic Joint Infection.” Hip & pelvis vol. 30,3 (2018): 138-146. doi:10.5371/hp.2018.30.3.138</li>
                                <li>Ballister, Edward R et al. “The emerging landscape of engineered bacteria cancer therapies.” Nature biotechnology vol. 43,5 (2025): 672-676. doi:10.1038/s41587-025-02623-x</li>
                                <li>Yakandawala, Nandadeva et al. “Enhanced expression of engineered ACA-less beta-1, 6-N-acetylglucosaminidase (dispersin B) in Escherichia coli.” Journal of industrial microbiology & biotechnology vol. 36,10 (2009): 1297-305. doi:10.1007/s10295-009-0613-0</li>
                                <li>Gunkel, F A, and H G Gassen. “Proteinase K from Tritirachium album Limber. Characterization of the chromosomal gene and expression of the cDNA in Escherichia coli.” European journal of biochemistry vol. 179,1 (1989): 185-94. doi:10.1111/j.1432-1033.1989.tb14539.x</li>
                                <li>Chen, C Y et al. “Cloning, sequencing and expression of a cDNA encoding bovine pancreatic deoxyribonuclease I in Escherichia coli: purification and characterization of the recombinant enzyme.” Gene vol. 206,2 (1998): 181-4. doi:10.1016/s0378-1119(97)00582-9</li>        
                                <li>Wang, Shaochi et al. “Strategy to combat biofilms: a focus on biofilm dispersal enzymes.” NPJ biofilms and microbiomes vol. 9,1 63. 7 Sep. 2023, doi:10.1038/s41522-023-00427-y</li>
                                <li>Di Domenico, Enea Gino et al. “The Current Knowledge on the Pathogenesis of Tissue and Medical Device-Related Biofilm Infections.” Microorganisms vol. 10,7 1259. 21 Jun. 2022, doi:10.3390/microorganisms10071259</li>
                                </ol>
                                </div>
                                
            </v-card>
            

        </v-col></v-row>
        
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

import image_previewer from '@/preview.vue'

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
            },
            preview: false
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
.text-content p {
  margin-bottom: 1.5em;
}

</style>