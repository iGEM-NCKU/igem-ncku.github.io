\<template>
  <v-app>
    <page_loader :loading="loading" />
    <title_nav />
    
    <v-main class="with-sidenav">
      <sidenav name="engineering"/>
      <v-row justify="end">
        <v-row>
          <v-col cols="12" md="8" class="mx-auto">
            <v-card-title class = scroller id = Enzyme-Plasmid-Engineering style="font-size: 32px; margin-left:25%;"><b>Enzyme Plasmid Engineering</b></v-card-title>
          </v-col>
        </v-row>
      </v-row>

      <v-row justify="end">
        <v-row>
        </v-row>
          <v-col
            v-for="(cycle, i) in cycles.slice(0,4)"
            :key="`cycle1-${i}`"
            cols="12" md="8"
          >
            <v-card class="cycle-card" @click="openDialog(i)" role="button" tabindex="0">
              <v-card-title class="text-h6">{{ cycle.title }}</v-card-title>
              <v-card-text class="line-clamp">
                <div v-html="cycle.summary"></div>
              </v-card-text>
              <v-card-actions>
                <v-btn variant="flat" @click.stop="openDialog(i)">Click Me</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        <v-row justify="end">
        <v-row>
          <v-col cols="12" md="8" class="mx-auto">
            <v-card-title class = scroller id = C2 style="font-size: 32px; margin-left:25%;"><b>C2</b></v-card-title>
          </v-col>
        </v-row>
      </v-row>
        <v-row justify="end">
        <v-row>
        </v-row>
          <v-col
            v-for="(cycle, i) in cycles.slice(4,8)"
            :key="`cycle2-${i}`"
            cols="12" md="8"
          >
            <v-card class="cycle-card" @click="openDialog(i+4)" role="button" tabindex="0">
              <v-card-title class="text-h6">{{ cycle.title }}</v-card-title>
              <v-card-text class="line-clamp">
                <div v-html="cycle.summary"></div>
              </v-card-text>
              <v-card-actions>
                <v-btn variant="flat" @click.stop="openDialog(i+4)">Click Me</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        <v-row justify="end">
        <v-row>
          <v-col cols="12" md="8" class="mx-auto">
            <v-card-title class = scroller id = C3 style="font-size: 32px; margin-left:25%;"><b>C2</b></v-card-title>
          </v-col>
        </v-row>
      </v-row>
        <v-row justify="end">
        <v-row>
        </v-row>
          <v-col
            v-for="(cycle, i) in cycles.slice(8,12)"
            :key="`cycle2-${i}`"
            cols="12" md="8"
          >
            <v-card class="cycle-card" @click="openDialog(i+8)" role="button" tabindex="0">
              <v-card-title class="text-h6">{{ cycle.title }}</v-card-title>
              <v-card-text class="line-clamp">
                <div v-html="cycle.summary"></div>
              </v-card-text>
              <v-card-actions>
                <v-btn variant="flat" @click.stop="openDialog(i+8)">Click Me</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        <v-row justify="end">
        <v-row>
          <v-col cols="12" md="8" class="mx-auto">
            <v-card-title class = scroller id = C4 style="font-size: 32px; margin-left:25%;"><b>C2</b></v-card-title>
          </v-col>
        </v-row>
      </v-row>
        <v-row justify="end">
        <v-row>
        </v-row>
          <v-col
            v-for="(cycle, i) in cycles.slice(12,16)"
            :key="`cycle2-${i}`"
            cols="12" md="8"
          >
            <v-card class="cycle-card" @click="openDialog(i+12)" role="button" tabindex="0">
              <v-card-title class="text-h6">{{ cycle.title }}</v-card-title>
              <v-card-text class="line-clamp">
                <div v-html="cycle.summary"></div>
              </v-card-text>
              <v-card-actions>
                <v-btn variant="flat" @click.stop="openDialog(i+12)">Click Me</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        <v-row justify="end">
        <v-row>
          <v-col cols="12" md="8" class="mx-auto">
            <v-card-title class = scroller id = C5 style="font-size: 32px; margin-left:25%;"><b>C2</b></v-card-title>
          </v-col>
        </v-row>
      </v-row>
        <v-row justify="end">
        <v-row>
        </v-row>
          <v-col
            v-for="(cycle, i) in cycles.slice(16,20)"
            :key="`cycle2-${i}`"
            cols="12" md="8"
          >
            <v-card class="cycle-card" @click="openDialog(i+16)" role="button" tabindex="0">
              <v-card-title class="text-h6">{{ cycle.title }}</v-card-title>
              <v-card-text class="line-clamp">
                <div v-html="cycle.summary"></div>
              </v-card-text>
              <v-card-actions>
                <v-btn variant="flat" @click.stop="openDialog(i+16)">Click Me</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        <v-row justify="end">
        <v-row>
          <v-col cols="12" md="8" class="mx-auto">
            <v-card-title class = scroller id = C6 style="font-size: 32px; margin-left:25%;"><b>C2</b></v-card-title>
          </v-col>
        </v-row>
      </v-row>
        <v-row justify="end">
        <v-row>
        </v-row>
          <v-col
            v-for="(cycle, i) in cycles.slice(20,24)"
            :key="`cycle2-${i}`"
            cols="12" md="8"
          >
            <v-card class="cycle-card" @click="openDialog(i+20)" role="button" tabindex="0">
              <v-card-title class="text-h6">{{ cycle.title }}</v-card-title>
              <v-card-text class="line-clamp">
                <div v-html="cycle.summary"></div>
              </v-card-text>
              <v-card-actions>
                <v-btn variant="flat" @click.stop="openDialog(i+20)">Click Me</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        <v-row justify="end">
        <v-row>
          <v-col cols="12" md="8" class="mx-auto">
            <v-card-title class = scroller id = C7 style="font-size: 32px; margin-left:25%;"><b>C2</b></v-card-title>
          </v-col>
        </v-row>
      </v-row>
        <v-row justify="end">
        <v-row>
        </v-row>
          <v-col
            v-for="(cycle, i) in cycles.slice(24,28)"
            :key="`cycle2-${i}`"
            cols="12" md="8"
          >
            <v-card class="cycle-card" @click="openDialog(i+24)" role="button" tabindex="0">
              <v-card-title class="text-h6">{{ cycle.title }}</v-card-title>
              <v-card-text class="line-clamp">
                <div v-html="cycle.summary"></div>
              </v-card-text>
              <v-card-actions>
                <v-btn variant="flat" @click.stop="openDialog(i+24)">Click Me</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        <v-row justify="end">
        <v-row>
          <v-col cols="12" md="8" class="mx-auto">
            <v-card-title class = scroller id = C8 style="font-size: 32px; margin-left:25%;"><b>C2</b></v-card-title>
          </v-col>
        </v-row>
      </v-row>
        <v-row justify="end">
        <v-row>
        </v-row>
          <v-col
            v-for="(cycle, i) in cycles.slice(28,32)"
            :key="`cycle2-${i}`"
            cols="12" md="8"
          >
            <v-card class="cycle-card" @click="openDialog(i+28)" role="button" tabindex="0">
              <v-card-title class="text-h6">{{ cycle.title }}</v-card-title>
              <v-card-text class="line-clamp">
                <div v-html="cycle.summary"></div>
              </v-card-text>
              <v-card-actions>
                <v-btn variant="flat" @click.stop="openDialog(i+28)">Click Me</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        <v-row justify="end">
        <v-row>
          <v-col cols="12" md="8" class="mx-auto">
            <v-card-title class = scroller id = C9 style="font-size: 32px; margin-left:25%;"><b>C2</b></v-card-title>
          </v-col>
        </v-row>
      </v-row>
        <v-row justify="end">
        <v-row>
        </v-row>
          <v-col
            v-for="(cycle, i) in cycles.slice(32,36)"
            :key="`cycle2-${i}`"
            cols="12" md="8"
          >
            <v-card class="cycle-card" @click="openDialog(i+32)" role="button" tabindex="0">
              <v-card-title class="text-h6">{{ cycle.title }}</v-card-title>
              <v-card-text class="line-clamp">
                <div v-html="cycle.summary"></div>
              </v-card-text>
              <v-card-actions>
                <v-btn variant="flat" @click.stop="openDialog(i+32)">Click Me</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>

        

        <v-dialog
          v-model="dialog"
          max-width="900"
          :scrim="true"
        >
          <v-card class="dialog-card">
            <v-card-title class="d-flex align-center justify-space-between">
              <span class="text-h6">{{ currentCycle?.title }}</span>
              <v-btn icon="mdi-close" variant="text" @click="closeDialog" aria-label="close"></v-btn>
            </v-card-title>

            <v-divider></v-divider>

            <v-card-text class="dialog-body">
              <div v-if="currentCycle" v-html="currentCycle.detail"></div>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions class="justify-end">
              <v-btn color="primary" @click="closeDialog">close</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
    </v-main>
    <site_footer></site_footer>
  </v-app>
</template>

<script>
/* eslint-disable */
import $ from 'jquery'
import M from 'materialize-css'
import hljs from 'highlight.js'
import '@/styles/code.css'

import title_nav from '@/title.vue'
import page_loader from '@/loader.vue'
import sidenav from '@/sidenav.vue'
import site_footer from '@/footer.vue'

export default {
  data() {
    return {
      dialog: false,
      currentIndex: null,
      cycles: [
        {
          title: 'Cycle 1 — Design',
          summary: '<p>Enzyme Plasmid Engineering</p>',
          detail: `
            <p>To degrade the biofilm formed by <em>Staphylococcus aureus</em>, we first conducted a literature review to identify suitable enzymes capable of disrupting its extracellular polymeric substances (EPS). The <em>S. aureus</em> biofilm matrix is mainly composed of polysaccharides, extracellular DNA, and proteins, which provide structural stability and protection to the bacterial community.</p><p>Based on these components, we selected three enzymes that specifically target different elements of the EPS:</p><ul><li><strong>Dispersin B</strong> – Degrades poly-β-1,6-N-acetylglucosamine (PNAG), a major polysaccharide in the biofilm matrix.</li><li><strong>DNase I</strong> – Cleaves extracellular DNA that serves as a scaffold within the biofilm.</li><li><strong>Proteinase K</strong> – Hydrolyzes adhesive and structural proteins, weakening the biofilm integrity.</li></ul><p>By combining these enzymes, our engineered <em>E. coli</em> is designed to produce a synergistic biofilm-degrading cocktail capable of efficiently dispersing <em>S. aureus</em> biofilms.</p> <img class = img src = "https://static.igem.wiki/teams/6003/engineering/1-t.webp"></img>
          `,
        },
        {
          title: 'Cycle 1 — Build',
          summary: '<p>Enzyme Plasmid Engineering</p>',
          detail: `
            <p>Proteinase K was cloned into the pTrc99a vector, which carries an Ampicillin resistance gene and a lac promoter for IPTG-inducible expression. The proteinase K gene was amplified and ligated into pTrc99a using EcoRI and PstI restriction sites. The recombinant plasmid was first transformed into E. coli TOP10 for amplification and sequence verification, including colony PCR and restriction digestion analysis, and was subsequently introduced into <em>E. coli</em> MG1655 λ cI857 for protein expression.</p><p>This construct enables controllable Proteinase K production under the lac promoter and allows temperature-induced cell lysis via the λ cI857 system when the temperature rises to approximately 40 °C, facilitating the release of intracellular enzymes.</p><img class = "img" src = "https://static.igem.wiki/teams/6003/engineering/pro-20k-20cloning-20map.webp"></img><p>figue 1. Schematic Map of the pTrc99a-Pro K Plasmid</p>
          `,
        },
        {
          title: 'Cycle 1 — Test',
          summary: '<p>Colony PCR / SDS-PAGE / 活性測試…</p>',
          detail: `
            <p>To verify the successful construction and expression of Proteinase K, we first performed colony PCR, which confirmed the presence of the expected proteinase K fragment in the recombinant plasmid. Subsequently, we attempted protein expression in E. coli MG1655 λ cI857 and analyzed the protein expression by SDS-PAGE. However, the expected Proteinase K band was barely detectable, and the band pattern was almost identical to that of the MG1655 λ cI857 control, suggesting low expression or poor solubility under the tested conditions.</p><div style="display:flex; justify-content:center; gap:20px; flex-wrap:wrap;"><figure style="width:45%; text-align:center;"><img src="https://static.igem.wiki/teams/6003/engineering/prok-20colony-20pcr.webp" style="width:45%; border-radius:10px;"><figcaption style="font-size:14px; color:#555; margin-top:6px;">figue 2.PCR Amplification of Proteinase K Gene</figcaption></figure> <figure style="width:40%; text-align:center;"><img src="https://static.igem.wiki/teams/6003/engineering/sds-20prok.webp" style="width:40%; border-radius:10px;"><figcaption style="font-size:14px; color:#555; margin-top:6px;">figue 3.SDS-PAGE Analysis of Proteinase K Expression</figcaption></figure></div><p>To verify the successful construction and expression of Proteinase K, we first performed colony PCR, which confirmed the presence of the expected proteinase K fragment in the recombinant plasmid. Subsequently, we attempted protein expression in E. coli MG1655 λ cI857 and analyzed the protein expression by SDS-PAGE. However, the expected Proteinase K band was barely detectable, and the band pattern was almost identical to that of the MG1655 λ cI857 control, suggesting low expression or poor solubility under the tested conditions.</p><img class = "img" src = "https://static.igem.wiki/teams/6003/engineering/milk-20plate.webp"><p>figue 4.Growth and Enzymatic Activity of Proteinase K on Milk Agar Plate</p><p>These results indicate that, while the construct was successfully assembled, further optimization is required to achieve detectable Proteinase K expression and activity. Possible contributing factors include insufficient induction conditions, protein instability, formation of inclusion bodies, or suboptimal assay sensitivity.</p>
          `,
        },
        {
          title: 'Cycle 1 — Learn',
          summary: '<p>瓶頸回顧與下一步策略…</p>',
          detail: `
            <p>From the test results, we inferred that the low or undetectable Proteinase K expression could be due to limitations in transcriptional or translational efficiency under the lac promoter, protein instability, or formation of inclusion bodies in <em>E. coli</em> MG1655 λ cI857. Additionally, the enzymatic assay might not have been sensitive enough to detect weak activity.</p><p>It is also possible that Proteinase K exhibits optimal activity only at higher temperatures (around 50–66 °C), while our host strain <em>E. coli</em> MG1655 λ cI857 undergoes lysis at approximately 40 °C due to the λ cI857 system. This temperature constraint prevented us from testing Proteinase K under its ideal reaction conditions. Furthermore, Proteinase K may have intrinsic toxicity to <em>E. coli</em> cells, potentially reducing expression levels or affecting protein stability.</p><p>From these findings, we learned that Proteinase K may not be compatible with our current expression system due to host and temperature limitations. Therefore, we decided not to further optimize Proteinase K expression and instead focused on the other biofilm-degrading enzymes in the following experiments.</p><img class = img src = "https://static.igem.wiki/teams/6003/engineering/screenshot-202025-10-06-20at-201-11-44-e2-80-afam.webp
          `,
        },
        { title: 'Cycle2-Design',
          summary: '<p>設計重點…</p>', 
          detail: '<p>詳細內容</p>' },
      { title: 'Cycle2-Build', 
          summary: '<p>構建重點…</p>', 
          detail: '<p>For DNase I and Dispersin B, each gene was cloned separately into the pET28c vector, which carries Kanamycin resistance and a strong T7 promoter for high-level expression. Both constructs included a His-tag to facilitate purification. The DNase I and Dispersin B genes were inserted using NdeI and XhoI restriction sites, respectively.</p><p>The recombinant plasmids were first transformed into <em>E. coli</em> TOP10 for amplification and sequence verification, including colony PCR and restriction digestion analysis. After confirmation, the verified plasmids were transformed into E. coli BL21(DE3) for protein expression.</p></p><div style="display:flex; justify-content:center; gap:20px; flex-wrap:wrap;"><figure style="width:100%; text-align:center;"><img src="https://static.igem.wiki/teams/6003/engineering/dnase-i-cloning-map.webp" style="width:100%; border-radius:10px;"><figcaption style="font-size:14px; color:#555; margin-top:6px;">figue 5.Schematic Map of the pET28c-DNase I Plasmid</figcaption></figure> <figure style="width:100%; text-align:center;"><img src="https://static.igem.wiki/teams/6003/engineering/dspb-cloning-map.webp" style="width:100%; border-radius:10px;"><figcaption style="font-size:14px; color:#555; margin-top:6px;">figue 6.Schematic Map of the pET28c-DspB Plasmid</figcaption></figure></div>' },
      { title: 'Cycle2-Test', summary: '<p>測試重點…</p>', detail: `<p>To verify the successful construction and expression of Dispersin B and DNase I, colony PCR was performed, confirming the presence of the correct gene fragments in both recombinant plasmids. Subsequently, protein expressions were analyzed in <em>E. coli</em> BL21(DE3) by SDS-PAGE and Western blot.</p><div style="display:flex; justify-content:center; gap:20px; flex-wrap:wrap;"><figure style="width:100%; text-align:center;"><img class = img src = "https://static.igem.wiki/teams/6003/engineering/dspb-20dnasei-20colony-20pcr.webp"></img><figcaption style="font-size:14px; color:#555; margin-top:6px;">figue 7.PCR Amplification of DNase I Gene and Dispersin B gene</figcaption></figure>
        <p>In the SDS-PAGE analysis, the banding patterns of both recombinant strains appeared similar to that of the BL21(DE3) control, suggesting that expression levels were low or that the proteins were not easily distinguishable under the tested conditions. Western blotting detected signals for both enzymes; however, the observed band sizes did not perfectly match the expected molecular weights, indicating possible protein truncation, degradation, or unexpected post-translational modifications.</p>
        <div style="display:flex; justify-content:center; gap:20px; flex-wrap:wrap;"><figure style="width:100%; text-align:center;">
        <img class = img src = "https://static.igem.wiki/teams/6003/engineering/sds-20dspb-20dnasei.webp"></img><figcaption style="font-size:14px; color:#555; margin-top:6px;">figue 8.SDS-PAGE Analysis of DNase I and Dispersin B Expression
        </figcaption></figure></div>
        <div style="display:flex; justify-content:center; gap:20px; flex-wrap:wrap;"><figure style="width:100%; text-align:center;">
        <img class = img src = "https://static.igem.wiki/teams/6003/engineering/western.webp"></img><figcaption style="font-size:14px; color:#555; margin-top:6px;">figue 9.Western Blot Analysis of DNase I and Dispersin B Expression
        </figcaption></figure></div>
        ` },
      { title: 'Cycle2-Learn', summary: '<p>學習重點…</p>', detail: `<p>From the test results, we learned that although the Dispersin B and DNase I genes were successfully cloned into the pET28c vector, their expression levels in <em>E. coli</em> BL21(DE3) were likely low or unstable. The SDS-PAGE results showed no visible target bands, and the Western blot bands did not match the expected molecular weights, suggesting possible protein degradation, premature termination, or improper folding.</p>
        <img class = img src = "https://static.igem.wiki/teams/6003/engineering/screenshot-202025-10-06-20at-201-15-55-e2-80-afam.webp"></img>

      ` },
      {
          title: 'Cycle 3 — Design',
          summary: '<p>Enzyme Plasmid Engineering</p>',
          detail: `
            <p>To degrade the biofilm formed by <em>Staphylococcus aureus</em>, we first conducted a literature review to identify suitable enzymes capable of disrupting its extracellular polymeric substances (EPS). The <em>S. aureus</em> biofilm matrix is mainly composed of polysaccharides, extracellular DNA, and proteins, which provide structural stability and protection to the bacterial community.</p><p>Based on these components, we selected three enzymes that specifically target different elements of the EPS:</p><ul><li><strong>Dispersin B</strong> – Degrades poly-β-1,6-N-acetylglucosamine (PNAG), a major polysaccharide in the biofilm matrix.</li><li><strong>DNase I</strong> – Cleaves extracellular DNA that serves as a scaffold within the biofilm.</li><li><strong>Proteinase K</strong> – Hydrolyzes adhesive and structural proteins, weakening the biofilm integrity.</li></ul><p>By combining these enzymes, our engineered <em>E. coli</em> is designed to produce a synergistic biofilm-degrading cocktail capable of efficiently dispersing <em>S. aureus</em> biofilms.</p> <img class = img src = "https://static.igem.wiki/teams/6003/engineering/1-t.webp"></img>
            `,
        },
        {
          title: 'Cycle 3 — Build',
          summary: '<p>Enzyme Plasmid Engineering</p>',
          detail: `
            <p>Proteinase K was cloned into the pTrc99a vector, which carries an Ampicillin resistance gene and a lac promoter for IPTG-inducible expression. The proteinase K gene was amplified and ligated into pTrc99a using EcoRI and PstI restriction sites. The recombinant plasmid was first transformed into E. coli TOP10 for amplification and sequence verification, including colony PCR and restriction digestion analysis, and was subsequently introduced into <em>E. coli</em> MG1655 λ cI857 for protein expression.</p><p>This construct enables controllable Proteinase K production under the lac promoter and allows temperature-induced cell lysis via the λ cI857 system when the temperature rises to approximately 40 °C, facilitating the release of intracellular enzymes.</p><img class = "img" src = "https://static.igem.wiki/teams/6003/engineering/pro-20k-20cloning-20map.webp"></img><p>figue 1. Schematic Map of the pTrc99a-Pro K Plasmid</p>
          `,
        },
        {
          title: 'Cycle 3 — Test',
          summary: '<p>Colony PCR / SDS-PAGE / 活性測試…</p>',
          detail: `
            <p>To verify the successful construction and expression of Proteinase K, we first performed colony PCR, which confirmed the presence of the expected proteinase K fragment in the recombinant plasmid. Subsequently, we attempted protein expression in E. coli MG1655 λ cI857 and analyzed the protein expression by SDS-PAGE. However, the expected Proteinase K band was barely detectable, and the band pattern was almost identical to that of the MG1655 λ cI857 control, suggesting low expression or poor solubility under the tested conditions.</p><div style="display:flex; justify-content:center; gap:20px; flex-wrap:wrap;"><figure style="width:45%; text-align:center;"><img src="https://static.igem.wiki/teams/6003/engineering/prok-20colony-20pcr.webp" style="width:45%; border-radius:10px;"><figcaption style="font-size:14px; color:#555; margin-top:6px;">figue 2.PCR Amplification of Proteinase K Gene</figcaption></figure> <figure style="width:40%; text-align:center;"><img src="https://static.igem.wiki/teams/6003/engineering/sds-20prok.webp" style="width:40%; border-radius:10px;"><figcaption style="font-size:14px; color:#555; margin-top:6px;">figue 3.SDS-PAGE Analysis of Proteinase K Expression</figcaption></figure></div><p>To verify the successful construction and expression of Proteinase K, we first performed colony PCR, which confirmed the presence of the expected proteinase K fragment in the recombinant plasmid. Subsequently, we attempted protein expression in E. coli MG1655 λ cI857 and analyzed the protein expression by SDS-PAGE. However, the expected Proteinase K band was barely detectable, and the band pattern was almost identical to that of the MG1655 λ cI857 control, suggesting low expression or poor solubility under the tested conditions.</p><img class = "img" src = "https://static.igem.wiki/teams/6003/engineering/milk-20plate.webp"><p>figue 4.Growth and Enzymatic Activity of Proteinase K on Milk Agar Plate</p><p>These results indicate that, while the construct was successfully assembled, further optimization is required to achieve detectable Proteinase K expression and activity. Possible contributing factors include insufficient induction conditions, protein instability, formation of inclusion bodies, or suboptimal assay sensitivity.</p>
          `,
        },
        {
          title: 'Cycle 3 — Learn',
          summary: '<p>瓶頸回顧與下一步策略…</p>',
          detail: `
            <p>From the test results, we inferred that the low or undetectable Proteinase K expression could be due to limitations in transcriptional or translational efficiency under the lac promoter, protein instability, or formation of inclusion bodies in <em>E. coli</em> MG1655 λ cI857. Additionally, the enzymatic assay might not have been sensitive enough to detect weak activity.</p><p>It is also possible that Proteinase K exhibits optimal activity only at higher temperatures (around 50–66 °C), while our host strain <em>E. coli</em> MG1655 λ cI857 undergoes lysis at approximately 40 °C due to the λ cI857 system. This temperature constraint prevented us from testing Proteinase K under its ideal reaction conditions. Furthermore, Proteinase K may have intrinsic toxicity to <em>E. coli</em> cells, potentially reducing expression levels or affecting protein stability.</p><p>From these findings, we learned that Proteinase K may not be compatible with our current expression system due to host and temperature limitations. Therefore, we decided not to further optimize Proteinase K expression and instead focused on the other biofilm-degrading enzymes in the following experiments.</p><img class = img src = "https://static.igem.wiki/teams/6003/engineering/screenshot-202025-10-06-20at-201-11-44-e2-80-afam.webp
          `,
        },
        {
          title: 'Cycle 4 — Design',
          summary: '<p>Enzyme Plasmid Engineering</p>',
          detail: `
            <p>To degrade the biofilm formed by <em>Staphylococcus aureus</em>, we first conducted a literature review to identify suitable enzymes capable of disrupting its extracellular polymeric substances (EPS). The <em>S. aureus</em> biofilm matrix is mainly composed of polysaccharides, extracellular DNA, and proteins, which provide structural stability and protection to the bacterial community.</p><p>Based on these components, we selected three enzymes that specifically target different elements of the EPS:</p><ul><li><strong>Dispersin B</strong> – Degrades poly-β-1,6-N-acetylglucosamine (PNAG), a major polysaccharide in the biofilm matrix.</li><li><strong>DNase I</strong> – Cleaves extracellular DNA that serves as a scaffold within the biofilm.</li><li><strong>Proteinase K</strong> – Hydrolyzes adhesive and structural proteins, weakening the biofilm integrity.</li></ul><p>By combining these enzymes, our engineered <em>E. coli</em> is designed to produce a synergistic biofilm-degrading cocktail capable of efficiently dispersing <em>S. aureus</em> biofilms.</p> <img class = img src = "https://static.igem.wiki/teams/6003/engineering/1-t.webp"></img>
          `,
        },
        {
          title: 'Cycle 4 — Build',
          summary: '<p>Enzyme Plasmid Engineering</p>',
          detail: `
            <p>Proteinase K was cloned into the pTrc99a vector, which carries an Ampicillin resistance gene and a lac promoter for IPTG-inducible expression. The proteinase K gene was amplified and ligated into pTrc99a using EcoRI and PstI restriction sites. The recombinant plasmid was first transformed into E. coli TOP10 for amplification and sequence verification, including colony PCR and restriction digestion analysis, and was subsequently introduced into <em>E. coli</em> MG1655 λ cI857 for protein expression.</p><p>This construct enables controllable Proteinase K production under the lac promoter and allows temperature-induced cell lysis via the λ cI857 system when the temperature rises to approximately 40 °C, facilitating the release of intracellular enzymes.</p><img class = "img" src = "https://static.igem.wiki/teams/6003/engineering/pro-20k-20cloning-20map.webp"></img><p>figue 1. Schematic Map of the pTrc99a-Pro K Plasmid</p>
          `,
        },
        {
          title: 'Cycle 4 — Test',
          summary: '<p>Colony PCR / SDS-PAGE / 活性測試…</p>',
          detail: `
            <p>To verify the successful construction and expression of Proteinase K, we first performed colony PCR, which confirmed the presence of the expected proteinase K fragment in the recombinant plasmid. Subsequently, we attempted protein expression in E. coli MG1655 λ cI857 and analyzed the protein expression by SDS-PAGE. However, the expected Proteinase K band was barely detectable, and the band pattern was almost identical to that of the MG1655 λ cI857 control, suggesting low expression or poor solubility under the tested conditions.</p><div style="display:flex; justify-content:center; gap:20px; flex-wrap:wrap;"><figure style="width:45%; text-align:center;"><img src="https://static.igem.wiki/teams/6003/engineering/prok-20colony-20pcr.webp" style="width:45%; border-radius:10px;"><figcaption style="font-size:14px; color:#555; margin-top:6px;">figue 2.PCR Amplification of Proteinase K Gene</figcaption></figure> <figure style="width:40%; text-align:center;"><img src="https://static.igem.wiki/teams/6003/engineering/sds-20prok.webp" style="width:40%; border-radius:10px;"><figcaption style="font-size:14px; color:#555; margin-top:6px;">figue 3.SDS-PAGE Analysis of Proteinase K Expression</figcaption></figure></div><p>To verify the successful construction and expression of Proteinase K, we first performed colony PCR, which confirmed the presence of the expected proteinase K fragment in the recombinant plasmid. Subsequently, we attempted protein expression in E. coli MG1655 λ cI857 and analyzed the protein expression by SDS-PAGE. However, the expected Proteinase K band was barely detectable, and the band pattern was almost identical to that of the MG1655 λ cI857 control, suggesting low expression or poor solubility under the tested conditions.</p><img class = "img" src = "https://static.igem.wiki/teams/6003/engineering/milk-20plate.webp"><p>figue 4.Growth and Enzymatic Activity of Proteinase K on Milk Agar Plate</p><p>These results indicate that, while the construct was successfully assembled, further optimization is required to achieve detectable Proteinase K expression and activity. Possible contributing factors include insufficient induction conditions, protein instability, formation of inclusion bodies, or suboptimal assay sensitivity.</p>
          `,
        },
        {
          title: 'Cycle 4 — Learn',
          summary: '<p>瓶頸回顧與下一步策略…</p>',
          detail: `
            <p>From the test results, we inferred that the low or undetectable Proteinase K expression could be due to limitations in transcriptional or translational efficiency under the lac promoter, protein instability, or formation of inclusion bodies in <em>E. coli</em> MG1655 λ cI857. Additionally, the enzymatic assay might not have been sensitive enough to detect weak activity.</p><p>It is also possible that Proteinase K exhibits optimal activity only at higher temperatures (around 50–66 °C), while our host strain <em>E. coli</em> MG1655 λ cI857 undergoes lysis at approximately 40 °C due to the λ cI857 system. This temperature constraint prevented us from testing Proteinase K under its ideal reaction conditions. Furthermore, Proteinase K may have intrinsic toxicity to <em>E. coli</em> cells, potentially reducing expression levels or affecting protein stability.</p><p>From these findings, we learned that Proteinase K may not be compatible with our current expression system due to host and temperature limitations. Therefore, we decided not to further optimize Proteinase K expression and instead focused on the other biofilm-degrading enzymes in the following experiments.</p><img class = img src = "https://static.igem.wiki/teams/6003/engineering/screenshot-202025-10-06-20at-201-11-44-e2-80-afam.webp
          `,
        },
        {
          title: 'Cycle 5 — Design',
          summary: '<p>Enzyme Plasmid Engineering</p>',
          detail: `
            <p>To degrade the biofilm formed by <em>Staphylococcus aureus</em>, we first conducted a literature review to identify suitable enzymes capable of disrupting its extracellular polymeric substances (EPS). The <em>S. aureus</em> biofilm matrix is mainly composed of polysaccharides, extracellular DNA, and proteins, which provide structural stability and protection to the bacterial community.</p><p>Based on these components, we selected three enzymes that specifically target different elements of the EPS:</p><ul><li><strong>Dispersin B</strong> – Degrades poly-β-1,6-N-acetylglucosamine (PNAG), a major polysaccharide in the biofilm matrix.</li><li><strong>DNase I</strong> – Cleaves extracellular DNA that serves as a scaffold within the biofilm.</li><li><strong>Proteinase K</strong> – Hydrolyzes adhesive and structural proteins, weakening the biofilm integrity.</li></ul><p>By combining these enzymes, our engineered <em>E. coli</em> is designed to produce a synergistic biofilm-degrading cocktail capable of efficiently dispersing <em>S. aureus</em> biofilms.</p> <img class = img src = "https://static.igem.wiki/teams/6003/engineering/1-t.webp"></img>
          `,
        },
        {
          title: 'Cycle 5 — Build',
          summary: '<p>Enzyme Plasmid Engineering</p>',
          detail: `
            <p>Proteinase K was cloned into the pTrc99a vector, which carries an Ampicillin resistance gene and a lac promoter for IPTG-inducible expression. The proteinase K gene was amplified and ligated into pTrc99a using EcoRI and PstI restriction sites. The recombinant plasmid was first transformed into E. coli TOP10 for amplification and sequence verification, including colony PCR and restriction digestion analysis, and was subsequently introduced into <em>E. coli</em> MG1655 λ cI857 for protein expression.</p><p>This construct enables controllable Proteinase K production under the lac promoter and allows temperature-induced cell lysis via the λ cI857 system when the temperature rises to approximately 40 °C, facilitating the release of intracellular enzymes.</p><img class = "img" src = "https://static.igem.wiki/teams/6003/engineering/pro-20k-20cloning-20map.webp"></img><p>figue 1. Schematic Map of the pTrc99a-Pro K Plasmid</p>
          `,
        },
        {
          title: 'Cycle 5 — Test',
          summary: '<p>Colony PCR / SDS-PAGE / 活性測試…</p>',
          detail: `
            <p>To verify the successful construction and expression of Proteinase K, we first performed colony PCR, which confirmed the presence of the expected proteinase K fragment in the recombinant plasmid. Subsequently, we attempted protein expression in E. coli MG1655 λ cI857 and analyzed the protein expression by SDS-PAGE. However, the expected Proteinase K band was barely detectable, and the band pattern was almost identical to that of the MG1655 λ cI857 control, suggesting low expression or poor solubility under the tested conditions.</p><div style="display:flex; justify-content:center; gap:20px; flex-wrap:wrap;"><figure style="width:45%; text-align:center;"><img src="https://static.igem.wiki/teams/6003/engineering/prok-20colony-20pcr.webp" style="width:45%; border-radius:10px;"><figcaption style="font-size:14px; color:#555; margin-top:6px;">figue 2.PCR Amplification of Proteinase K Gene</figcaption></figure> <figure style="width:40%; text-align:center;"><img src="https://static.igem.wiki/teams/6003/engineering/sds-20prok.webp" style="width:40%; border-radius:10px;"><figcaption style="font-size:14px; color:#555; margin-top:6px;">figue 3.SDS-PAGE Analysis of Proteinase K Expression</figcaption></figure></div><p>To verify the successful construction and expression of Proteinase K, we first performed colony PCR, which confirmed the presence of the expected proteinase K fragment in the recombinant plasmid. Subsequently, we attempted protein expression in E. coli MG1655 λ cI857 and analyzed the protein expression by SDS-PAGE. However, the expected Proteinase K band was barely detectable, and the band pattern was almost identical to that of the MG1655 λ cI857 control, suggesting low expression or poor solubility under the tested conditions.</p><img class = "img" src = "https://static.igem.wiki/teams/6003/engineering/milk-20plate.webp"><p>figue 4.Growth and Enzymatic Activity of Proteinase K on Milk Agar Plate</p><p>These results indicate that, while the construct was successfully assembled, further optimization is required to achieve detectable Proteinase K expression and activity. Possible contributing factors include insufficient induction conditions, protein instability, formation of inclusion bodies, or suboptimal assay sensitivity.</p>
          `,
        },
        {
          title: 'Cycle 5 — Learn',
          summary: '<p>瓶頸回顧與下一步策略…</p>',
          detail: `
            <p>From the test results, we inferred that the low or undetectable Proteinase K expression could be due to limitations in transcriptional or translational efficiency under the lac promoter, protein instability, or formation of inclusion bodies in <em>E. coli</em> MG1655 λ cI857. Additionally, the enzymatic assay might not have been sensitive enough to detect weak activity.</p><p>It is also possible that Proteinase K exhibits optimal activity only at higher temperatures (around 50–66 °C), while our host strain <em>E. coli</em> MG1655 λ cI857 undergoes lysis at approximately 40 °C due to the λ cI857 system. This temperature constraint prevented us from testing Proteinase K under its ideal reaction conditions. Furthermore, Proteinase K may have intrinsic toxicity to <em>E. coli</em> cells, potentially reducing expression levels or affecting protein stability.</p><p>From these findings, we learned that Proteinase K may not be compatible with our current expression system due to host and temperature limitations. Therefore, we decided not to further optimize Proteinase K expression and instead focused on the other biofilm-degrading enzymes in the following experiments.</p><img class = img src = "https://static.igem.wiki/teams/6003/engineering/screenshot-202025-10-06-20at-201-11-44-e2-80-afam.webp
          `,
        },
        {
          title: 'Cycle 6 — Design',
          summary: '<p>Enzyme Plasmid Engineering</p>',
          detail: `
            <p>To degrade the biofilm formed by <em>Staphylococcus aureus</em>, we first conducted a literature review to identify suitable enzymes capable of disrupting its extracellular polymeric substances (EPS). The <em>S. aureus</em> biofilm matrix is mainly composed of polysaccharides, extracellular DNA, and proteins, which provide structural stability and protection to the bacterial community.</p><p>Based on these components, we selected three enzymes that specifically target different elements of the EPS:</p><ul><li><strong>Dispersin B</strong> – Degrades poly-β-1,6-N-acetylglucosamine (PNAG), a major polysaccharide in the biofilm matrix.</li><li><strong>DNase I</strong> – Cleaves extracellular DNA that serves as a scaffold within the biofilm.</li><li><strong>Proteinase K</strong> – Hydrolyzes adhesive and structural proteins, weakening the biofilm integrity.</li></ul><p>By combining these enzymes, our engineered <em>E. coli</em> is designed to produce a synergistic biofilm-degrading cocktail capable of efficiently dispersing <em>S. aureus</em> biofilms.</p> <img class = img src = "https://static.igem.wiki/teams/6003/engineering/1-t.webp"></img>
          `,
        },
        {
          title: 'Cycle 6 — Build',
          summary: '<p>Enzyme Plasmid Engineering</p>',
          detail: `
            <p>Proteinase K was cloned into the pTrc99a vector, which carries an Ampicillin resistance gene and a lac promoter for IPTG-inducible expression. The proteinase K gene was amplified and ligated into pTrc99a using EcoRI and PstI restriction sites. The recombinant plasmid was first transformed into E. coli TOP10 for amplification and sequence verification, including colony PCR and restriction digestion analysis, and was subsequently introduced into <em>E. coli</em> MG1655 λ cI857 for protein expression.</p><p>This construct enables controllable Proteinase K production under the lac promoter and allows temperature-induced cell lysis via the λ cI857 system when the temperature rises to approximately 40 °C, facilitating the release of intracellular enzymes.</p><img class = "img" src = "https://static.igem.wiki/teams/6003/engineering/pro-20k-20cloning-20map.webp"></img><p>figue 1. Schematic Map of the pTrc99a-Pro K Plasmid</p>
          `,
        },
        {
          title: 'Cycle 6 — Test',
          summary: '<p>Colony PCR / SDS-PAGE / 活性測試…</p>',
          detail: `
            <p>To verify the successful construction and expression of Proteinase K, we first performed colony PCR, which confirmed the presence of the expected proteinase K fragment in the recombinant plasmid. Subsequently, we attempted protein expression in E. coli MG1655 λ cI857 and analyzed the protein expression by SDS-PAGE. However, the expected Proteinase K band was barely detectable, and the band pattern was almost identical to that of the MG1655 λ cI857 control, suggesting low expression or poor solubility under the tested conditions.</p><div style="display:flex; justify-content:center; gap:20px; flex-wrap:wrap;"><figure style="width:45%; text-align:center;"><img src="https://static.igem.wiki/teams/6003/engineering/prok-20colony-20pcr.webp" style="width:45%; border-radius:10px;"><figcaption style="font-size:14px; color:#555; margin-top:6px;">figue 2.PCR Amplification of Proteinase K Gene</figcaption></figure> <figure style="width:40%; text-align:center;"><img src="https://static.igem.wiki/teams/6003/engineering/sds-20prok.webp" style="width:40%; border-radius:10px;"><figcaption style="font-size:14px; color:#555; margin-top:6px;">figue 3.SDS-PAGE Analysis of Proteinase K Expression</figcaption></figure></div><p>To verify the successful construction and expression of Proteinase K, we first performed colony PCR, which confirmed the presence of the expected proteinase K fragment in the recombinant plasmid. Subsequently, we attempted protein expression in E. coli MG1655 λ cI857 and analyzed the protein expression by SDS-PAGE. However, the expected Proteinase K band was barely detectable, and the band pattern was almost identical to that of the MG1655 λ cI857 control, suggesting low expression or poor solubility under the tested conditions.</p><img class = "img" src = "https://static.igem.wiki/teams/6003/engineering/milk-20plate.webp"><p>figue 4.Growth and Enzymatic Activity of Proteinase K on Milk Agar Plate</p><p>These results indicate that, while the construct was successfully assembled, further optimization is required to achieve detectable Proteinase K expression and activity. Possible contributing factors include insufficient induction conditions, protein instability, formation of inclusion bodies, or suboptimal assay sensitivity.</p>
          `,
        },
        {
          title: 'Cycle 6 — Learn',
          summary: '<p>瓶頸回顧與下一步策略…</p>',
          detail: `
            <p>From the test results, we inferred that the low or undetectable Proteinase K expression could be due to limitations in transcriptional or translational efficiency under the lac promoter, protein instability, or formation of inclusion bodies in <em>E. coli</em> MG1655 λ cI857. Additionally, the enzymatic assay might not have been sensitive enough to detect weak activity.</p><p>It is also possible that Proteinase K exhibits optimal activity only at higher temperatures (around 50–66 °C), while our host strain <em>E. coli</em> MG1655 λ cI857 undergoes lysis at approximately 40 °C due to the λ cI857 system. This temperature constraint prevented us from testing Proteinase K under its ideal reaction conditions. Furthermore, Proteinase K may have intrinsic toxicity to <em>E. coli</em> cells, potentially reducing expression levels or affecting protein stability.</p><p>From these findings, we learned that Proteinase K may not be compatible with our current expression system due to host and temperature limitations. Therefore, we decided not to further optimize Proteinase K expression and instead focused on the other biofilm-degrading enzymes in the following experiments.</p><img class = img src = "https://static.igem.wiki/teams/6003/engineering/screenshot-202025-10-06-20at-201-11-44-e2-80-afam.webp
          `,
        },
        {
          title: 'Cycle 7 — Design',
          summary: '<p>Enzyme Plasmid Engineering</p>',
          detail: `
            <p>To degrade the biofilm formed by <em>Staphylococcus aureus</em>, we first conducted a literature review to identify suitable enzymes capable of disrupting its extracellular polymeric substances (EPS). The <em>S. aureus</em> biofilm matrix is mainly composed of polysaccharides, extracellular DNA, and proteins, which provide structural stability and protection to the bacterial community.</p><p>Based on these components, we selected three enzymes that specifically target different elements of the EPS:</p><ul><li><strong>Dispersin B</strong> – Degrades poly-β-1,6-N-acetylglucosamine (PNAG), a major polysaccharide in the biofilm matrix.</li><li><strong>DNase I</strong> – Cleaves extracellular DNA that serves as a scaffold within the biofilm.</li><li><strong>Proteinase K</strong> – Hydrolyzes adhesive and structural proteins, weakening the biofilm integrity.</li></ul><p>By combining these enzymes, our engineered <em>E. coli</em> is designed to produce a synergistic biofilm-degrading cocktail capable of efficiently dispersing <em>S. aureus</em> biofilms.</p> <img class = img src = "https://static.igem.wiki/teams/6003/engineering/1-t.webp"></img>
          `,
        },
        {
          title: 'Cycle 7 — Build',
          summary: '<p>Enzyme Plasmid Engineering</p>',
          detail: `
            <p>Proteinase K was cloned into the pTrc99a vector, which carries an Ampicillin resistance gene and a lac promoter for IPTG-inducible expression. The proteinase K gene was amplified and ligated into pTrc99a using EcoRI and PstI restriction sites. The recombinant plasmid was first transformed into E. coli TOP10 for amplification and sequence verification, including colony PCR and restriction digestion analysis, and was subsequently introduced into <em>E. coli</em> MG1655 λ cI857 for protein expression.</p><p>This construct enables controllable Proteinase K production under the lac promoter and allows temperature-induced cell lysis via the λ cI857 system when the temperature rises to approximately 40 °C, facilitating the release of intracellular enzymes.</p><img class = "img" src = "https://static.igem.wiki/teams/6003/engineering/pro-20k-20cloning-20map.webp"></img><p>figue 1. Schematic Map of the pTrc99a-Pro K Plasmid</p>
          `,
        },
        {
          title: 'Cycle 7 — Test',
          summary: '<p>Colony PCR / SDS-PAGE / 活性測試…</p>',
          detail: `
            <p>To verify the successful construction and expression of Proteinase K, we first performed colony PCR, which confirmed the presence of the expected proteinase K fragment in the recombinant plasmid. Subsequently, we attempted protein expression in E. coli MG1655 λ cI857 and analyzed the protein expression by SDS-PAGE. However, the expected Proteinase K band was barely detectable, and the band pattern was almost identical to that of the MG1655 λ cI857 control, suggesting low expression or poor solubility under the tested conditions.</p><div style="display:flex; justify-content:center; gap:20px; flex-wrap:wrap;"><figure style="width:45%; text-align:center;"><img src="https://static.igem.wiki/teams/6003/engineering/prok-20colony-20pcr.webp" style="width:45%; border-radius:10px;"><figcaption style="font-size:14px; color:#555; margin-top:6px;">figue 2.PCR Amplification of Proteinase K Gene</figcaption></figure> <figure style="width:40%; text-align:center;"><img src="https://static.igem.wiki/teams/6003/engineering/sds-20prok.webp" style="width:40%; border-radius:10px;"><figcaption style="font-size:14px; color:#555; margin-top:6px;">figue 3.SDS-PAGE Analysis of Proteinase K Expression</figcaption></figure></div><p>To verify the successful construction and expression of Proteinase K, we first performed colony PCR, which confirmed the presence of the expected proteinase K fragment in the recombinant plasmid. Subsequently, we attempted protein expression in E. coli MG1655 λ cI857 and analyzed the protein expression by SDS-PAGE. However, the expected Proteinase K band was barely detectable, and the band pattern was almost identical to that of the MG1655 λ cI857 control, suggesting low expression or poor solubility under the tested conditions.</p><img class = "img" src = "https://static.igem.wiki/teams/6003/engineering/milk-20plate.webp"><p>figue 4.Growth and Enzymatic Activity of Proteinase K on Milk Agar Plate</p><p>These results indicate that, while the construct was successfully assembled, further optimization is required to achieve detectable Proteinase K expression and activity. Possible contributing factors include insufficient induction conditions, protein instability, formation of inclusion bodies, or suboptimal assay sensitivity.</p>
          `,
        },
        {
          title: 'Cycle 7 — Learn',
          summary: '<p>瓶頸回顧與下一步策略…</p>',
          detail: `
            <p>From the test results, we inferred that the low or undetectable Proteinase K expression could be due to limitations in transcriptional or translational efficiency under the lac promoter, protein instability, or formation of inclusion bodies in <em>E. coli</em> MG1655 λ cI857. Additionally, the enzymatic assay might not have been sensitive enough to detect weak activity.</p><p>It is also possible that Proteinase K exhibits optimal activity only at higher temperatures (around 50–66 °C), while our host strain <em>E. coli</em> MG1655 λ cI857 undergoes lysis at approximately 40 °C due to the λ cI857 system. This temperature constraint prevented us from testing Proteinase K under its ideal reaction conditions. Furthermore, Proteinase K may have intrinsic toxicity to <em>E. coli</em> cells, potentially reducing expression levels or affecting protein stability.</p><p>From these findings, we learned that Proteinase K may not be compatible with our current expression system due to host and temperature limitations. Therefore, we decided not to further optimize Proteinase K expression and instead focused on the other biofilm-degrading enzymes in the following experiments.</p><img class = img src = "https://static.igem.wiki/teams/6003/engineering/screenshot-202025-10-06-20at-201-11-44-e2-80-afam.webp
          `,
        },
        {
          title: 'Cycle 8 — Design',
          summary: '<p>Enzyme Plasmid Engineering</p>',
          detail: `
            <p>To degrade the biofilm formed by <em>Staphylococcus aureus</em>, we first conducted a literature review to identify suitable enzymes capable of disrupting its extracellular polymeric substances (EPS). The <em>S. aureus</em> biofilm matrix is mainly composed of polysaccharides, extracellular DNA, and proteins, which provide structural stability and protection to the bacterial community.</p><p>Based on these components, we selected three enzymes that specifically target different elements of the EPS:</p><ul><li><strong>Dispersin B</strong> – Degrades poly-β-1,6-N-acetylglucosamine (PNAG), a major polysaccharide in the biofilm matrix.</li><li><strong>DNase I</strong> – Cleaves extracellular DNA that serves as a scaffold within the biofilm.</li><li><strong>Proteinase K</strong> – Hydrolyzes adhesive and structural proteins, weakening the biofilm integrity.</li></ul><p>By combining these enzymes, our engineered <em>E. coli</em> is designed to produce a synergistic biofilm-degrading cocktail capable of efficiently dispersing <em>S. aureus</em> biofilms.</p> <img class = img src = "https://static.igem.wiki/teams/6003/engineering/1-t.webp"></img>
          `,
        },
        {
          title: 'Cycle 8 — Build',
          summary: '<p>Enzyme Plasmid Engineering</p>',
          detail: `
            <p>Proteinase K was cloned into the pTrc99a vector, which carries an Ampicillin resistance gene and a lac promoter for IPTG-inducible expression. The proteinase K gene was amplified and ligated into pTrc99a using EcoRI and PstI restriction sites. The recombinant plasmid was first transformed into E. coli TOP10 for amplification and sequence verification, including colony PCR and restriction digestion analysis, and was subsequently introduced into <em>E. coli</em> MG1655 λ cI857 for protein expression.</p><p>This construct enables controllable Proteinase K production under the lac promoter and allows temperature-induced cell lysis via the λ cI857 system when the temperature rises to approximately 40 °C, facilitating the release of intracellular enzymes.</p><img class = "img" src = "https://static.igem.wiki/teams/6003/engineering/pro-20k-20cloning-20map.webp"></img><p>figue 1. Schematic Map of the pTrc99a-Pro K Plasmid</p>
          `,
        },
        {
          title: 'Cycle 8 — Test',
          summary: '<p>Colony PCR / SDS-PAGE / 活性測試…</p>',
          detail: `
            <p>To verify the successful construction and expression of Proteinase K, we first performed colony PCR, which confirmed the presence of the expected proteinase K fragment in the recombinant plasmid. Subsequently, we attempted protein expression in E. coli MG1655 λ cI857 and analyzed the protein expression by SDS-PAGE. However, the expected Proteinase K band was barely detectable, and the band pattern was almost identical to that of the MG1655 λ cI857 control, suggesting low expression or poor solubility under the tested conditions.</p><div style="display:flex; justify-content:center; gap:20px; flex-wrap:wrap;"><figure style="width:45%; text-align:center;"><img src="https://static.igem.wiki/teams/6003/engineering/prok-20colony-20pcr.webp" style="width:45%; border-radius:10px;"><figcaption style="font-size:14px; color:#555; margin-top:6px;">figue 2.PCR Amplification of Proteinase K Gene</figcaption></figure> <figure style="width:40%; text-align:center;"><img src="https://static.igem.wiki/teams/6003/engineering/sds-20prok.webp" style="width:40%; border-radius:10px;"><figcaption style="font-size:14px; color:#555; margin-top:6px;">figue 3.SDS-PAGE Analysis of Proteinase K Expression</figcaption></figure></div><p>To verify the successful construction and expression of Proteinase K, we first performed colony PCR, which confirmed the presence of the expected proteinase K fragment in the recombinant plasmid. Subsequently, we attempted protein expression in E. coli MG1655 λ cI857 and analyzed the protein expression by SDS-PAGE. However, the expected Proteinase K band was barely detectable, and the band pattern was almost identical to that of the MG1655 λ cI857 control, suggesting low expression or poor solubility under the tested conditions.</p><img class = "img" src = "https://static.igem.wiki/teams/6003/engineering/milk-20plate.webp"><p>figue 4.Growth and Enzymatic Activity of Proteinase K on Milk Agar Plate</p><p>These results indicate that, while the construct was successfully assembled, further optimization is required to achieve detectable Proteinase K expression and activity. Possible contributing factors include insufficient induction conditions, protein instability, formation of inclusion bodies, or suboptimal assay sensitivity.</p>
          `,
        },
        {
          title: 'Cycle 8 — Learn',
          summary: '<p>瓶頸回顧與下一步策略…</p>',
          detail: `
            <p>From the test results, we inferred that the low or undetectable Proteinase K expression could be due to limitations in transcriptional or translational efficiency under the lac promoter, protein instability, or formation of inclusion bodies in <em>E. coli</em> MG1655 λ cI857. Additionally, the enzymatic assay might not have been sensitive enough to detect weak activity.</p><p>It is also possible that Proteinase K exhibits optimal activity only at higher temperatures (around 50–66 °C), while our host strain <em>E. coli</em> MG1655 λ cI857 undergoes lysis at approximately 40 °C due to the λ cI857 system. This temperature constraint prevented us from testing Proteinase K under its ideal reaction conditions. Furthermore, Proteinase K may have intrinsic toxicity to <em>E. coli</em> cells, potentially reducing expression levels or affecting protein stability.</p><p>From these findings, we learned that Proteinase K may not be compatible with our current expression system due to host and temperature limitations. Therefore, we decided not to further optimize Proteinase K expression and instead focused on the other biofilm-degrading enzymes in the following experiments.</p><img class = img src = "https://static.igem.wiki/teams/6003/engineering/screenshot-202025-10-06-20at-201-11-44-e2-80-afam.webp
          `,
        },
        {
          title: 'Cycle 9 — Design',
          summary: '<p>Enzyme Plasmid Engineering</p>',
          detail: `
            <p>To degrade the biofilm formed by <em>Staphylococcus aureus</em>, we first conducted a literature review to identify suitable enzymes capable of disrupting its extracellular polymeric substances (EPS). The <em>S. aureus</em> biofilm matrix is mainly composed of polysaccharides, extracellular DNA, and proteins, which provide structural stability and protection to the bacterial community.</p><p>Based on these components, we selected three enzymes that specifically target different elements of the EPS:</p><ul><li><strong>Dispersin B</strong> – Degrades poly-β-1,6-N-acetylglucosamine (PNAG), a major polysaccharide in the biofilm matrix.</li><li><strong>DNase I</strong> – Cleaves extracellular DNA that serves as a scaffold within the biofilm.</li><li><strong>Proteinase K</strong> – Hydrolyzes adhesive and structural proteins, weakening the biofilm integrity.</li></ul><p>By combining these enzymes, our engineered <em>E. coli</em> is designed to produce a synergistic biofilm-degrading cocktail capable of efficiently dispersing <em>S. aureus</em> biofilms.</p> <img class = img src = "https://static.igem.wiki/teams/6003/engineering/1-t.webp"></img>
          `,
        },
        {
          title: 'Cycle 9 — Build',
          summary: '<p>Enzyme Plasmid Engineering</p>',
          detail: `
            <p>Proteinase K was cloned into the pTrc99a vector, which carries an Ampicillin resistance gene and a lac promoter for IPTG-inducible expression. The proteinase K gene was amplified and ligated into pTrc99a using EcoRI and PstI restriction sites. The recombinant plasmid was first transformed into E. coli TOP10 for amplification and sequence verification, including colony PCR and restriction digestion analysis, and was subsequently introduced into <em>E. coli</em> MG1655 λ cI857 for protein expression.</p><p>This construct enables controllable Proteinase K production under the lac promoter and allows temperature-induced cell lysis via the λ cI857 system when the temperature rises to approximately 40 °C, facilitating the release of intracellular enzymes.</p><img class = "img" src = "https://static.igem.wiki/teams/6003/engineering/pro-20k-20cloning-20map.webp"></img><p>figue 1. Schematic Map of the pTrc99a-Pro K Plasmid</p>
          `,
        },
        {
          title: 'Cycle 9 — Test',
          summary: '<p>Colony PCR / SDS-PAGE / 活性測試…</p>',
          detail: `
            <p>To verify the successful construction and expression of Proteinase K, we first performed colony PCR, which confirmed the presence of the expected proteinase K fragment in the recombinant plasmid. Subsequently, we attempted protein expression in E. coli MG1655 λ cI857 and analyzed the protein expression by SDS-PAGE. However, the expected Proteinase K band was barely detectable, and the band pattern was almost identical to that of the MG1655 λ cI857 control, suggesting low expression or poor solubility under the tested conditions.</p><div style="display:flex; justify-content:center; gap:20px; flex-wrap:wrap;"><figure style="width:45%; text-align:center;"><img src="https://static.igem.wiki/teams/6003/engineering/prok-20colony-20pcr.webp" style="width:45%; border-radius:10px;"><figcaption style="font-size:14px; color:#555; margin-top:6px;">figue 2.PCR Amplification of Proteinase K Gene</figcaption></figure> <figure style="width:40%; text-align:center;"><img src="https://static.igem.wiki/teams/6003/engineering/sds-20prok.webp" style="width:40%; border-radius:10px;"><figcaption style="font-size:14px; color:#555; margin-top:6px;">figue 3.SDS-PAGE Analysis of Proteinase K Expression</figcaption></figure></div><p>To verify the successful construction and expression of Proteinase K, we first performed colony PCR, which confirmed the presence of the expected proteinase K fragment in the recombinant plasmid. Subsequently, we attempted protein expression in E. coli MG1655 λ cI857 and analyzed the protein expression by SDS-PAGE. However, the expected Proteinase K band was barely detectable, and the band pattern was almost identical to that of the MG1655 λ cI857 control, suggesting low expression or poor solubility under the tested conditions.</p><img class = "img" src = "https://static.igem.wiki/teams/6003/engineering/milk-20plate.webp"><p>figue 4.Growth and Enzymatic Activity of Proteinase K on Milk Agar Plate</p><p>These results indicate that, while the construct was successfully assembled, further optimization is required to achieve detectable Proteinase K expression and activity. Possible contributing factors include insufficient induction conditions, protein instability, formation of inclusion bodies, or suboptimal assay sensitivity.</p>
          `,
        },
        {
          title: 'Cycle 9 — Learn',
          summary: '<p>瓶頸回顧與下一步策略…</p>',
          detail: `
            <p>From the test results, we inferred that the low or undetectable Proteinase K expression could be due to limitations in transcriptional or translational efficiency under the lac promoter, protein instability, or formation of inclusion bodies in <em>E. coli</em> MG1655 λ cI857. Additionally, the enzymatic assay might not have been sensitive enough to detect weak activity.</p><p>It is also possible that Proteinase K exhibits optimal activity only at higher temperatures (around 50–66 °C), while our host strain <em>E. coli</em> MG1655 λ cI857 undergoes lysis at approximately 40 °C due to the λ cI857 system. This temperature constraint prevented us from testing Proteinase K under its ideal reaction conditions. Furthermore, Proteinase K may have intrinsic toxicity to <em>E. coli</em> cells, potentially reducing expression levels or affecting protein stability.</p><p>From these findings, we learned that Proteinase K may not be compatible with our current expression system due to host and temperature limitations. Therefore, we decided not to further optimize Proteinase K expression and instead focused on the other biofilm-degrading enzymes in the following experiments.</p><img class = img src = "https://static.igem.wiki/teams/6003/engineering/screenshot-202025-10-06-20at-201-11-44-e2-80-afam.webp
          `,
        },

      

      ],
    };
  },
  components: {
        title_nav,
        page_loader,
        sidenav,
        site_footer
    },
  computed: {
    currentCycle() {
      return this.currentIndex != null ? this.cycles[this.currentIndex] : null;
    },
  },
  methods: {
    openDialog(i) {
      this.currentIndex = i;
      this.dialog = true;
    },
    closeDialog() {
      this.dialog = false;
      this.currentIndex = null;
    },
  },
};
</script>

<style>
.cycle-card {
  cursor: pointer;
  height: 220px;              
  display: flex;
  flex-direction: column;
}
.cycle-card .line-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 4;      
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Dialog 內文可滾動 */
.dialog-card {
  display: flex;
  flex-direction: column;
  max-height: 85vh;
}
.dialog-body {
  overflow: auto;
  max-height: calc(85vh - 56px - 52px - 56px); 
}
.dialog-body img { max-width: 100%; height: auto; }
.dialog-body figure { margin: 12px 0; text-align: center; }
.dialog-body figcaption { font-size: 13px; color:#666; margin-top:6px; }
.sidenav-fixed {
  position: fixed;
  top: 0;                        
  left: 0;
  width: var(--sidenav-width);
  height: 100vh;
  z-index: 2000;                 
  overflow: auto;
  background: inherit;    
}

/* 讓主內容避開側欄 */
.with-sidenav {
  padding-left: var(--sidenav-width);
}
.img{
  max-width: 100%;
}

</style>