<template>
    <div><v-row><v-col>
                <v-card>
                    <div class='subtitle' id='Pre-project-exploration' />
                    <v-timeline align=center>
                        <v-timeline-item v-for='i in people' :key=i>
                            <v-card @click='i.operator = true'>
                                <template #text>
                                    <v-hover v-for='j in i.name' :key=j>
                                        <template #default='{isHovering, props}'>
                                            <v-row>
                                                <v-col>
                                                    <v-card v-bind=props variant=tonal :title=j[0] :subtitle=j[1]
                                                        :color='isHovering ? `primary` : undefined' v-ripple />
                                                </v-col>
                                            </v-row>
                                        </template>
                                    </v-hover>
                                </template>
                            </v-card>
                        </v-timeline-item>
                    </v-timeline>
                </v-card>
            </v-col></v-row>

        <v-dialog v-model=people[0].operator>
            <v-card>
                <template #actions>
                    <v-divider />
                    <!-- <v-list-item append-icon = 'fa-solid fa-close' lines = 2 subtitle = 'CLOSE' @click = 'people[0].operator = false' color = red /> -->
                    <v-btn text=close v-ripple color=red prepend-icon='fa-solid fa-close'
                        @click='people[0].operator = false' class='pa-2' />
                </template>
                <template #title>
                    Timeline
                </template>
                <template #subtitle>
                    <v-chip v-for='i in people[0].name' :key='i' class='ma-1'>
                        {{ i[0] }}
                    </v-chip>
                </template>
                <template #text>
                    <v-card variant=tonal color=cyan prepend-icon='fa-solid fa-lightbulb' class=ma-1>
                        <template #subtitle>
                            At first, we were inspired by <b> Braak's </b> hypothesis,
                            <br>
                            which suggests that Parkinson’s disease (PD) may originate in the gut or olfactory system
                            before progressing to the brain.
                            <br>
                            We envisioned engineering bacteria or lipid nanoparticles (LNPs) to deliver RNA molecules
                            capable of modulating α-synuclein aggregation — a key factor in PD pathology.
                        </template>
                    </v-card>

                    Insights from interviews:

                    <v-row>
                        <v-col>
                            <v-card variant=tonal color=primary class=ma-1 prepend-icon='fa-solid fa-book'>
                                <template #text>
                                    <p>
                                        Prof. Wang explained that while LNP technology is conceptually viable,
                                        <br>
                                        it often requires animal testing and complex pharmacokinetic analysis,
                                        <br>
                                        beyond what an undergraduate wet lab can safely conduct.
                                    </p>
                                </template>
                            </v-card>
                        </v-col>
                        <v-col>
                            <v-card variant=tonal color=primary class=ma-1 prepend-icon='fa-solid fa-book'>
                                <template #text>
                                    <p>
                                        Prof. Chen confirmed that neurological research demands highly specific cell and
                                        tissue models,
                                        <br>
                                        which would be inaccessible in our school environment.
                                    </p>
                                </template>
                            </v-card>
                        </v-col>
                        <v-col>
                            <v-card variant=tonal color=primary class=ma-1 prepend-icon='fa-solid fa-book'>
                                <template #text>
                                    <p>
                                        Both professors advised us to start from a simpler,
                                        <br>
                                        biosafety-level-1 model before moving into human disease.
                                    </p>
                                </template>
                            </v-card>
                        </v-col>
                    </v-row>

                    <v-card variant=plain prepend-icon='fa-solid fa-square-poll-horizontal' title='Outcome'
                        text='We realized that the PD project, though conceptually fascinating, required resources far exceeding our capacity — including BSL-2 facilities, animal models, and human sample permissions. We therefore set it aside, but it taught us to think critically about scalability and feasibility.' />

                </template>
            </v-card>
        </v-dialog>
        <v-dialog v-model=people[1].operator>
            <v-card>
                <template #actions>
                    <v-divider />
                    <!-- <v-list-item append-icon = 'fa-solid fa-close' lines = 2 subtitle = 'CLOSE' @click = 'people[1].operator = false' color = red /> -->
                    <v-btn text=close v-ripple color=red prepend-icon='fa-solid fa-close'
                        @click='people[1].operator = false' class='pa-2' />
                </template>
                <template #title>
                    Timeline
                </template>
                <template #subtitle>
                    <v-chip v-for='i in people[1].name' :key='i' class='ma-1'>
                        {{ i[0] }}
                    </v-chip>
                </template>
                <template #text>
                    <v-card variant=tonal color=cyan prepend-icon='fa-solid fa-lightbulb' class=ma-1>
                        <template #subtitle>
                            Our second idea focused on Brown Root Rot,
                            <br>
                            a devastating soil-borne fungal disease caused by Phellinus noxius,
                            <br>
                            known for destroying urban trees and crops across Asia.
                            <br>
                            We envisioned a synthetic biology approach using engineered microbes or fungal viruses to
                            inhibit or weaken the pathogen.
                        </template>
                    </v-card>

                    Insights from interviews:

                    <v-row>
                        <v-col>
                            <v-card variant=tonal color=primary class=ma-1 prepend-icon='fa-solid fa-book'>
                                <template #text>
                                    <p>
                                        Prof. Huang pointed out that while the idea was creative,
                                        <br>
                                        fungal viruses are extremely rare and poorly characterized,
                                        <br>
                                        meaning any progress would rely on developing new vectors from scratch.
                                    </p>
                                </template>
                            </v-card>
                        </v-col>
                        <v-col>
                            <v-card variant=tonal color=primary class=ma-1 prepend-icon='fa-solid fa-book'>
                                <template #text>
                                    <p>
                                        Prof. Chang emphasized the lack of genomic databases and model systems for woody plants,
                                        <br>
                                        making molecular validation slow and uncertain.
                                    </p>
                                </template>
                            </v-card>
                        </v-col>
                        <v-col>
                            <v-card variant=tonal color=primary class=ma-1 prepend-icon='fa-solid fa-book'>
                                <template #text>
                                    <p>
                                        Prof. Chung explained that BRR infects deep xylem tissues,
                                        <br>
                                        where drugs or microbes cannot easily reach,
                                        <br>
                                        and experimental cycles for tree roots can take months to years.
                                    </p>
                                </template>
                            </v-card>
                        </v-col>
                    </v-row>

                    <v-card variant=plain prepend-icon='fa-solid fa-square-poll-horizontal' title='Outcome'
                        text='We concluded that, despite its environmental relevance, the BRR topic was experimentally inaccessible and data-limited. This exploration deepened our understanding of ecological biotechnology but revealed the importance of choosing a topic with measurable, timely results.' />

                </template>
            </v-card>
        </v-dialog>
        <v-dialog v-model=people[2].operator>
            <v-card>
                <template #actions>
                    <v-divider />
                    <!-- <v-list-item append-icon = 'fa-solid fa-close' lines = 2 subtitle = 'CLOSE' @click = 'people[2].operator = false' color = red /> -->
                    <v-btn text=close v-ripple color=red prepend-icon='fa-solid fa-close'
                        @click='people[2].operator = false' class='pa-2' />
                </template>
                <template #title>
                    Timeline
                </template>
                <template #subtitle>
                    <v-chip v-for='i in people[1].name' :key='i' class='ma-1'>
                        {{ i[0] }}
                    </v-chip>
                </template>
                <template #text>
                    <v-card variant=tonal color=cyan prepend-icon='fa-solid fa-lightbulb' class=ma-1>
                        <template #subtitle>
                            While reviewing unmet clinical needs,
                            <br>
                            Dr. Wu encouraged us to investigate post-operative infections — particularly those involving
                            biofilms on medical implants.
                            <br>
                            Later, Dr. Lin provided clinical insight into periprosthetic joint infection (PJI),
                            <br>
                            describing how biofilms formed by Staphylococcus aureus resist antibiotics and often require
                            surgical removal.
                        </template>
                    </v-card>

                    Insights from interviews:
                    
                    <v-row>
                        <v-col>
                            <v-card variant=tonal color=primary class=ma-1 prepend-icon='fa-solid fa-book'>
                                <template #text>
                                    <p>
                                        Biofilm infections were common enough to be clinically significant yet
                                        <br>
                                        <b>safe to model using non-pathogenic bacteria</b>.
                                    </p>
                                </template>
                            </v-card>
                        </v-col>
                        <v-col>
                            <v-card variant=tonal color=primary class=ma-1 prepend-icon='fa-solid fa-book'>
                                <template #text>
                                    <p>
                                        The topic linked medicine,
                                        <br>
                                        microbiology,
                                        <br>
                                        and design thinking — fitting both <b>our lab’s capacity</b> and <b>the iGEM spirit of
                                            interdisciplinary innovation</b>.
                                    </p>
                                </template>
                            </v-card>
                        </v-col>
                        <v-col>
                            <v-card variant=tonal color=primary class=ma-1 prepend-icon='fa-solid fa-book'>
                                <template #text>
                                    <p>
                                        It also carried clear <b>societal relevance</b>: antibiotic resistance,
                                        <br>
                                        hospital infections,
                                        <br>
                                        and patient quality of life.
                                    </p>
                                </template>
                            </v-card>
                        </v-col>
                    </v-row>

                    <v-card variant=plain prepend-icon='fa-solid fa-square-poll-horizontal' title='Outcome'
                        text='These discussions inspired the foundation of Byefilm — an innovative project targeting biofilm degradation in PJI using engineered enzymes. It combined what we learned from the previous two ideas: clinical importance (from Parkinson’s) and environmental resilience (from BRR), but within a manageable experimental and biosafety scope.' />

                </template>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
 /* eslint-disable */ 
import $ from 'jquery'
import M from 'materialize-css'

export default {
    name: 'App',
    data() {
        return {
            people: [
                {
                    name: [['Prof. 王昭雯', 'Molecular Biology'], ['Prof. 陳珮君', 'Physiology, NCKU']],
                    operator: false
                },
                {
                    name: [['Prof. 黃兆立', 'Life Science, NCKU'], ['Prof. 張文綺', 'Plant Pathology, NCKU'], ['Prof. 鍾嘉綾', 'Plant Pathology, NTU']],
                    operator: false
                },
                {
                    name: [['Dr. 吳炳慶', 'Biodesign Program'], ['Dr. 林政立', 'Orthopedic Surgeon, NCKU Hospital']],
                    operator: false
                }
            ]
        }
    },
    mounted() {
        M.AutoInit();
    },
    methods: {
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