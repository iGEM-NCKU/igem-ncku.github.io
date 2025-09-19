<template>
    <page_loader :loading = 'loading' />
    <title_nav />
    
    <v-app><v-main>
    <v-container>
        <v-row class = text-center>
            <v-col>
                <v-card title = 'Introduction to Problem'>
                    <template v-slot:text>
                        <p> Total Knee Arthroplasty (TKA) is a widely performed surgical procedure designed to restore joint function and improve quality of life for patients with severe knee damage. In the United States alone, over 800,000 TKA surgeries are performed annually. However, despite the success of most procedures, some patients experience unexpected and severe complications. </p>
                            <br>
                        <p> One of the most serious complications is Periprosthetic Joint Infection (PJI). PJI occurs when bacteria infect the area surrounding the implanted joint. It is often not detected immediately. Early symptoms—such as mild swelling, joint warmth, or low-grade fever—can easily be mistaken for normal post-surgical responses. </p>
                            <br>
                        <p> The real danger behind PJI lies in the formation of bacterial biofilms on the implant surface. Biofilms are communities of bacteria enclosed within a protective matrix that adheres strongly to the implant. Once established, they are highly resistant to both antibiotics and the body’s immune system. </p>
                            <br>
                        <p> Among the bacterial species responsible, Staphylococcus aureus is the most common, accounting for nearly 60% of PJI cases. Overall, biofilm-associated infections are responsible for over 80% of chronic implant infections, making them a major clinical concern. </p>
                            <br>
                        <p> Treating PJI is difficult and often requires multiple surgeries, long-term intravenous antibiotics, and in some cases, complete removal of the implant. This leads to prolonged recovery, increased healthcare costs, and psychological stress for patients who expected a restored life, not a long-term battle with infection. </p>
                            <br>
                        <p> Given the limitations of current treatments, new approaches are urgently needed. Our iGEM team aims to develop a synthetic biology-based solution that targets and disrupts biofilm formation at the root—offering a potential alternative or complement to traditional antibiotic therapy. </p>
                    </template>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
    </v-main></v-app>

    <site_footer></site_footer>
</template>

<script>
 /* eslint-disable */ 
import $ from 'jquery'
import M from 'materialize-css'

import title_nav from '@/title.vue'
import page_loader from '@/loader.vue'
import site_footer from '@/footer.vue'

export default {
    name: 'App',
    data() {
        return {
            loading: true
        }
    },
    components: {
        title_nav,
        page_loader,
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