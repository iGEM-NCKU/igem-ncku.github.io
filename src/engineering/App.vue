<template>
  <v-app>
    <page_loader :loading="loading" />
    <title_nav />

    <v-main>
      <sidenav name="engineering" />
      <v-row justify=end><v-col cols=12 md=7>
        <div class=scroller id=Enzyme-Plasmid-Engineering>
          <v-card-title style="font-size: 32px;"><b>Enzyme Plasmid
              Engineering</b></v-card-title>

          <v-row justify="end">
            <v-col v-for="(cycle, i) in cycles.slice(0, 12)" :key="`cycle1-${i}`" cols="12" md="6">
              <v-hover>
                <template #default = '{isHovering, props}'>
                  <v-card class="cycle-card ma-3" @click="openDialog(i)" role="button" tabindex="0" v-bind = props :color = 'isHovering ? `primary` : undefined'>
                    <v-card-title class="text-h6">{{ cycle.title }}</v-card-title>
                    <v-card-text class="line-clamp">
                      <div v-html="cycle.summary"></div>
                    </v-card-text>
                    <v-card-actions>
                      <v-divider />
                      <!-- <v-icon> fa-solid fa-arrow-pointer fa-2xs </v-icon> -->
                      <v-btn variant="flat" @click.stop="openDialog(i)">Click Me</v-btn>
                    </v-card-actions>
                  </v-card>
                </template>
              </v-hover>
            </v-col>
          </v-row>
          </div>
          <div class=scroller id=Host-Engineering>
          <v-card-title style="font-size: 32px;"><b>Host Engineering for T7 RNAP–λcI857 System</b></v-card-title>
          <v-row justify="end">
            <v-col v-for="(cycle, i) in cycles.slice(12, 24)" :key="`cycle2-${i}`" cols="12" md="6">
              <v-hover>
                <template #default = '{isHovering, props}'>
                  <v-card class="cycle-card ma-3" @click="openDialog(i + 12)" role="button" tabindex="0" v-bind = props :color = "isHovering ? `primary` : undefined">
                    <v-card-title class="text-h6">{{ cycle.title }}</v-card-title>
                    <v-card-text class="line-clamp">
                      <div v-html="cycle.summary"></div>
                    </v-card-text>
                    <v-card-actions>
                      <v-divider />
                      <!-- <v-icon> fa-solid fa-arrow-pointer fa-2xs </v-icon> -->
                      <v-btn variant="flat" @click.stop="openDialog(i + 12)">Click Me</v-btn>
                    </v-card-actions>
                  </v-card>
                </template>
              </v-hover>
            </v-col>
          </v-row>
          </div>
          <div class=scroller id=Biofilm-Degradation-Assay>
          <v-card-title style="font-size: 32px;d"><b>Biofilm
              Degradation Assay Development</b></v-card-title>
          <v-row justify="end">
            <v-row>
            </v-row>
            <v-col v-for="(cycle, i) in cycles.slice(24)" :key="`cycle2-${i}`" cols="12" md="6">
              <v-hover>
                <template #default = '{isHovering, props}'>
                  <v-card class="cycle-card ma-3" @click="openDialog(i + 24)" role="button" tabindex="0" v-bind = props :color = "isHovering ? `primary` : undefined">
                    <v-card-title class="text-h6">{{ cycle.title }}</v-card-title>
                    <v-card-text class="line-clamp">
                      <div v-html="cycle.summary"></div>
                    </v-card-text>
                    <v-card-actions>
                      <v-divider />
                      <!-- <v-icon> fa-solid fa-arrow-pointer fa-2xs </v-icon> -->
                      <v-btn variant="flat" @click.stop="openDialog(i + 24)">Click Me</v-btn>
                    </v-card-actions>
                  </v-card>
                </template>
              </v-hover>
            </v-col>
          </v-row>
          <v-row justify="end">
            <v-row>
              <v-col cols="12" md="8" class="mx-auto">
              </v-col>
            </v-row>
          </v-row>
          </div>


          <v-dialog v-model="dialog" max-width="900" :scrim="true">
            <v-card class="dialog-card">
              <v-card-title class="d-flex align-center justify-space-between">
                <span class="text-h6">{{ currentCycle?.title }}</span>
                <v-btn icon="mdi-close" variant="text" @click="closeDialog" aria-label="close"></v-btn>
              </v-card-title>

              <v-divider></v-divider>

              <v-card-text class="dialog-body">
                <div v-if="currentCycle" class="note-block panel-html text-content" v-html="currentCycle.detail"></div>
              </v-card-text>

              <v-divider></v-divider>

              <v-card-actions class="justify-end">
                <v-btn color="primary" @click="closeDialog">close</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-col><v-col cols=0 md=1 /></v-row>
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
          title: 'Cycle 1-1 — Design',
          summary: '<p>ProK engineering</p>',
          detail: `
            <p>To degrade the biofilm formed by <em>Staphylococcus aureus</em>, we first conducted a literature review to identify suitable enzymes capable of disrupting its extracellular polymeric substances (EPS). The <em>S. aureus</em> biofilm matrix is mainly composed of polysaccharides, extracellular DNA, and proteins, which provide structural stability and protection to the bacterial community.</p><p>Based on these components, we selected three enzymes that specifically target different elements of the EPS:</p><ul><li><strong>Dispersin B</strong> – Degrades poly-β-1,6-N-acetylglucosamine (PNAG), a major polysaccharide in the biofilm matrix.</li><li><strong>DNase I</strong> – Cleaves extracellular DNA that serves as a scaffold within the biofilm.</li><li><strong>Proteinase K</strong> – Hydrolyzes adhesive and structural proteins, weakening the biofilm integrity.</li></ul><p>By combining these enzymes, our engineered <em>E. coli</em> is designed to produce a synergistic biofilm-degrading cocktail capable of efficiently dispersing <em>S. aureus</em> biofilms.</p> <img class = img src = "https://static.igem.wiki/teams/6003/engineering/1-t.webp"></img>
          `,
        },
        {
          title: 'Cycle 1-1 — Build',
          summary: '<p>ProK engineering</p>',
          detail: `
            <p>Proteinase K was cloned into the pTrc99a vector, which carries an Ampicillin resistance gene and a lac promoter for IPTG-inducible expression. The proteinase K gene was amplified and ligated into pTrc99a using EcoRI and PstI restriction sites. The recombinant plasmid was first transformed into <em>E. coli</em> TOP10 for amplification and sequence verification, including colony PCR and restriction digestion analysis, and was subsequently introduced into <em>E. coli MG1655 λ cI857</em> for protein expression.</p><p>This construct enables controllable Proteinase K production under the lac promoter and allows temperature-induced cell lysis via the λ cI857 system when the temperature rises to approximately 40 °C, facilitating the release of intracellular enzymes.</p><img class = "img" src = "https://static.igem.wiki/teams/6003/engineering/pro-20k-20cloning-20map.webp"></img><p>figue 1. Schematic Map of the pTrc99a-Pro K Plasmid</p>
          `,
        },
        {
          title: 'Cycle 1-1 — Test',
          summary: '<p>Colony PCR / SDS-PAGE / Expression analysis</p>',
          detail: `
<p>To verify the successful construction and expression of Proteinase K, we first performed colony PCR, which confirmed the presence of the expected proteinase K fragment in the recombinant plasmid. Subsequently, we attempted protein expression in <em>E. coli MG1655 λ cI857</em> and analyzed the protein expression by SDS-PAGE (Fig. 1). However, the expected Proteinase K band was barely detectable, and the band pattern was almost identical to that of the <em>E. coli MG1655 λ cI857</em> control, suggesting low expression or poor solubility under the tested conditions.</p>
<p><img src="https://static.igem.wiki/teams/6003/engineering/sds-20prok.webp" alt="Figure 1. SDS-PAGE Analysis of Proteinase K Expression."></p>
<p>Figure 1. SDS-PAGE Analysis of Proteinase K Expression.</p>
<p>We also evaluated enzyme activity using a milk plate assay, <a href="https://pubmed.ncbi.nlm.nih.gov/2645134/">following previously reported methods for detecting casein degradation.</a> Successful activity would be indicated by a clear zone surrounding the colony. Using <em>E. coli MG1655 λ cI857</em> as a negative control, both the test and control strains showed identical results, with no observable clear zones. Despite these attempts, the observed enzymatic activity was minimal and did not match the effects reported in the reference studies.</p>
<p><img src="https://static.igem.wiki/teams/6003/engineering/milk-20plate.webp" alt="Figure 2. Enzymatic activity of Proteinase K on Milk Agar Plate."></p>
<p>Figure 2. Enzymatic activity of Proteinase K on Milk Agar Plate.</p>
<p>These results indicate that, while the construct was successfully assembled, further optimization is required to achieve detectable Proteinase K expression and activity. Possible contributing factors include insufficient induction conditions, protein instability, formation of inclusion bodies, or suboptimal assay sensitivity.</p>
          `,
        },
        {
          title: 'Cycle 1-1 — Learn',
          summary: '<p>Replan for ProK</p>',
          detail: `
            <p>From the test results, we inferred that the low or undetectable Proteinase K expression could be due to limitations in transcriptional or translational efficiency under the lac promoter, protein instability, or formation of inclusion bodies in <em>E. coli MG1655 λ cI857</em>. Additionally, the enzymatic assay might not have been sensitive enough to detect weak activity.</p><p>It is also possible that Proteinase K exhibits optimal activity only at higher temperatures (around 50–66 °C), while our host strain <em>E. coli MG1655 λ cI857</em> undergoes lysis at approximately 40 °C due to the λ cI857 system. This temperature constraint prevented us from testing Proteinase K under its ideal reaction conditions. Furthermore, Proteinase K may have intrinsic toxicity to <em>E. coli</em> cells, potentially reducing expression levels or affecting protein stability.</p><p>From these findings, we learned that Proteinase K may not be compatible with our current expression system due to host and temperature limitations. Therefore, we decided not to further optimize Proteinase K expression and instead focused on the other biofilm-degrading enzymes in the following experiments.</p><img class = img src = "https://static.igem.wiki/teams/6003/engineering/screenshot-202025-10-06-20at-201-11-44-e2-80-afam.webp
          `,
        },
        { title: 'Cycle 1-2 — Design',
          summary: '<p>DspB, DNase I engineering</p>', 
          detail: '<p>To develop an efficient system for expressing biofilm-degrading enzymes, we designed plasmid constructs that could produce DNase I and Dispersin B under IPTG-inducible T7  promoters.</p>' },
      { title: 'Cycle 1-2 — Build', 
          summary: '<p>DspB, DNase I engineering</p>', 
          detail: '<p>For DNase I and Dispersin B, each gene was cloned separately into the pET28c vector, which carries Kanamycin resistance and a strong T7 promoter for high-level expression. Both constructs included a His-tag to facilitate purification. The DNase I and Dispersin B genes were inserted using NdeI and XhoI restriction sites, respectively.</p><p>The recombinant plasmids were first transformed into <em>E. coli TOP10</em> for amplification and sequence verification, including colony PCR and restriction digestion analysis. After confirmation, the verified plasmids were transformed into <em>E. coli BL21(DE3)</em> for protein expression.</p></p><div style="display:flex; justify-content:center; gap:20px; flex-wrap:wrap;"><figure style="width:100%; text-align:center;"><img src="https://static.igem.wiki/teams/6003/engineering/dnase-i-cloning-map.webp" style="width:100%; border-radius:10px;"><figcaption style="font-size:14px; color:#555; margin-top:6px;">figue 5.Schematic Map of the pET28c-DNase I Plasmid</figcaption></figure> <figure style="width:100%; text-align:center;"><img src="https://static.igem.wiki/teams/6003/engineering/dspb-cloning-map.webp" style="width:100%; border-radius:10px;"><figcaption style="font-size:14px; color:#555; margin-top:6px;">figue 6.Schematic Map of the pET28c-DspB Plasmid</figcaption></figure></div>' },
      { title: 'Cycle 1-2 — Test', summary: '<p>Colony PCR / SDS-PAGE / Expression analysis</p>', detail: `
        <p>To verify the successful construction and expression of Dispersin B and DNase I, colony PCR was performed, confirming the presence of the correct gene fragments in both recombinant plasmids. Subsequently, protein expressions were analyzed in <em>E. coli BL21(DE3)</em> by SDS-PAGE and Western blot.</p><div style="display:flex; justify-content:center; gap:20px; flex-wrap:wrap;"><figure style="width:100%; text-align:center;"><img class = img src = "https://static.igem.wiki/teams/6003/engineering/dspb-20dnasei-20colony-20pcr.webp"></img><figcaption style="font-size:14px; color:#555; margin-top:6px;">figue 7.PCR Amplification of DNase I Gene and Dispersin B gene</figcaption></figure>
        <p>In the SDS-PAGE analysis, the banding patterns of both recombinant strains appeared similar to that of the <em>E. coli BL21(DE3)</em> control, suggesting that expression levels were low or that the proteins were not easily distinguishable under the tested conditions. Western blotting detected signals for both enzymes; however, the observed band sizes did not perfectly match the expected molecular weights, indicating possible protein truncation, degradation, or unexpected post-translational modifications.</p>
        <div style="display:flex; justify-content:center; gap:20px; flex-wrap:wrap;"><figure style="width:100%; text-align:center;">
        <img class = img src = "https://static.igem.wiki/teams/6003/engineering/sds-20dspb-20dnasei.webp"></img><figcaption style="font-size:14px; color:#555; margin-top:6px;">figue 3.SDS-PAGE Analysis of DNase I and Dispersin B Expression
        </figcaption></figure></div>
        <div style="display:flex; justify-content:center; gap:20px; flex-wrap:wrap;"><figure style="width:100%; text-align:center;">
        <img class = img src = "https://static.igem.wiki/teams/6003/engineering/western.webp"></img><figcaption style="font-size:14px; color:#555; margin-top:6px;">figue 4.Western Blot Analysis of DNase I and Dispersin B Expression
        </figcaption></figure></div>
        ` },
      { title: 'Cycle 1-2 — Learn', summary: '<p>Replan for Dispersin B and DNase I</p>', detail: `<p>From the test results, we learned that although the Dispersin B and DNase I genes were successfully cloned into the pET28c vector, their expression levels in <em>E. coli BL21(DE3)</em> were likely low or unstable. The SDS-PAGE results showed no visible target bands, and the Western blot bands did not match the expected molecular weights, suggesting possible protein degradation, premature termination, or improper folding.</p>
        <img class = img src = "https://static.igem.wiki/teams/6003/engineering/screenshot-202025-10-06-20at-201-15-55-e2-80-afam.webp"></img>

      ` },
      {
          title: 'Cycle 1-3 — Design',
          summary: '<p>Improved Design for Dispersin B and DNase I</p>',
          detail: `
            <p>In previous results suggested that the pET28c-based constructs provided insufficient or unstable expression of Dispersin B and DNase I.</p>
            <p>To address this, we redesigned both enzyme expression constructs using the pET28a vector, which vector differs from pET28c by including a T7 tag sequence and a slightly altered multiple cloning site (MCS). These sequence differences may change the spacing or secondary structure near the translation initiation region, potentially improving translation efficiency and overall protein expression.</p>
            <img class = img src = "https://static.igem.wiki/teams/6003/engineering/image.webp"></img>
            `,
        },
        {
          title: 'Cycle 1-3 — Build',
          summary: '<p>Constructing the pET28a-DNase I and pET28a-DspB Plasmids</p>',
          detail: `
            <p>After identifying expression issues with the pET28c constructs, both the Dispersin B and DNase I genes were recloned into the pET28a vector to improve expression stability and yield (Fig. 5, 6). The pET28a vector carries Kanamycin resistance and a strong T7 promoter for IPTG-inducible expression. Each construct also included a His-tag to facilitate purification.</p>
            <p>Both genes were inserted into the pET28a vector using EcoRI and XhoI restriction sites, and the resulting recombinant plasmids were transformed into <em>E. coli BL21(DE3)</em> for protein expression analysis.</p>
            <img class = img src = "https://static.igem.wiki/teams/6003/engineering/image.webp"></img>
            <p>Figure 5. Schematic Map of the pET28a-DNase I Plasmid.</p>
            <img class = img src = "https://static.igem.wiki/teams/6003/engineering/image-2.webp"></img>
            <p>Figure 6. Schematic Map of the pET28a-DspB Plasmid.</p>
            `,
        },
        {
          title: 'Cycle 1-3 — Test',
          summary: '<p>Colony PCR / SDS-PAGE / Expression analysis</p>',
          detail: `
            <p>To verify the successful construction and expression of the reconstructed Dispersin B and DNase I plasmids, colony PCR and SDS-PAGE analyses were performed (Fig. 7). The PCR results confirmed the presence of the correct gene fragments for both constructs.</p>
            <p>In the SDS-PAGE analysis, the recombinant <em>E. coli BL21(DE3)</em> strain expressing Dispersin B showed a clear additional protein band corresponding to the expected molecular weight, indicating successful expression. In contrast, the DNase I-expressing strain did not show any distinct band compared with the control, suggesting low or undetectable expression under the tested induction conditions. </p>
            <img class = img src = "https://static.igem.wiki/teams/6003/engineering/sds-20dspb-20dnasei.webp"></img>
            <p>Figure 7. SDS-PAGE Analysis of DNase I and Dispersin B Expression from pET28a- DNase I and pET28a-DspB.</p>

            `,
        },
        {
          title: 'Cycle 1-3 — Learn',
          summary: '<p>Dispersin B and DNase I show differential expression</p>',
          detail: `
            <p>From the test results, we observed that the reconstructed <em>Dispersin B</em> plasmid in pET28a enabled clear protein expression, as evidenced by a distinct band in SDS-PAGE analysis. Although pET28a and pET28c share similar backbones, their multiple cloning sites (MCS) differ slightly in sequence arrangement and spacing around the start codon. These differences can alter the ribosome binding site (RBS) distance or local mRNA secondary structure, thereby affecting translation initiation efficiency. It is likely that the restriction enzyme sites used for cloning in pET28a resulted in a more favorable translation context for enzyme expression.</p>
            <p>Despite using pET28a, DNase I expression remained undetectable, and the host strain also showed unusually slow growth, which could be related to protein toxicity or other host compatibility issues. These findings indicate that while pET28a provides a more suitable platform for Dispersin B, additional optimization or alternative strategies would be necessary to achieve reliable DNase I expression in future experiments.</p>
          `,
        },
        {
          title: 'Cycle 2-1 — Design',
          summary: '<p>Host Engineering for T7 RNAP–λcI857 System</p>',
          detail: `
          
            <p>To enable efficient release of our biofilm-degrading enzymes, it is necessary to induce controlled cell lysis. Traditional lysis methods, such as chemical or mechanical disruption, may pose biosafety risks or lead to protein denaturation, particularly if the strain is to be handled in human-related contexts. To mitigate these risks, we chose to employ the temperature-inducible λ cI857 system, which allows controlled cell lysis at temperatures near or slightly above human body temperature.</p>
            <p>A second challenge arises from the fact that our host strain, <em>E. coli MG1655</em>, does not naturally express T7 RNA polymerase (T7RNAP), which is essential for transcription from the T7 promoters controlling Dispersin B and DNase I expression. Therefore, the design involves integrating the T7RNAP gene into E. coli MG1655 λ cI857, ensuring that the target enzymes can be efficiently transcribed under T7 promoter control prior to temperature-induced lysis. This integration allows the combination of high-level T7-driven expression with the λ cI857-mediated heat-triggered release system, creating a self-contained host suitable for controlled enzyme production and release.</p>
            <img class = img src = "https://static.igem.wiki/teams/6003/engineering/screenshot-202025-10-06-20at-201-17-42-e2-80-afam.avif"></img>

            `,
        },
        {
          title: 'Cycle 2-1 — Build',
          summary: '<p>Host Engineering for T7 RNAP–λcI857 System</p>',
          detail: `
                    <p>To enable T7-driven expression of Dispersin B and DNase I in E.coli MG1655 λ cI857, we constructed a T7RNAP integration cassette using a multi-step assembly approach. First, the T7RNAP fragment was amplified from E. coli BL21(DE3) using primers 141-20/T7RNAP-3. Next, the lacZ fragment was amplified from E. coli MG1655 using primers 141-31/141-23, and the CmR cassette was amplified from pAcyc184 using primers Cmc(jk)/Not-CmN. These three fragments were then fused together via overlapping PCR to generate the complete integration cassette (Fig. 8).</p>
          <img class = img src = "https://static.igem.wiki/teams/6003/engineering/screenshot-202025-10-06-20at-204-41-32-e2-80-afam.avif"></img>
            <p>Figure 8. Schematic Representation of the T7 RNAP Integration Cassette.</p>
          <p>The assembled cassette was delivered into Red(km) competent cells through Red recombination, allowing homologous integration into the host genome. Subsequently, the recombinant strain was used to produce P1 phage, which was then employed to transduce MG1655 λ cI857, thereby generating a host strain carrying the integrated T7RNAP gene. This host provides a functional T7RNAP system compatible with the T7 promoters of Dispersin B and DNase I, while maintaining the temperature-inducible λ cI857 lysis system (Fig. 9).</p>
            <img class = img src = "https://static.igem.wiki/teams/6003/engineering/screen-20shot-202025-10-06-20at-2004-43-33-20am.avif"></img>
            <p>Figure 9. Workflow for Construction of T7 RNAP Integration Cassette.</p>
          `,
        },
        {
          title: 'Cycle 2-1 — Test',
          summary: '<p>Testing the T7RNAP Integration</p>',
          detail: `
            <p>To verify the successful construction and integration of the T7RNAP cassette, colony PCR was performed on the assembled fragments, confirming that each individual PCR fragment was successfully amplified. The integration cassette was then successfully delivered into Red(km) competent cells via Red recombination, and P1 phage was subsequently produced from the recombinant strain (Fig. 10). </p>
                      <img class = img src = "https://static.igem.wiki/teams/6003/engineering/screen-20shot-202025-10-06-20at-2004-44-22-20am.avif"></img><p>Figure 10.  PCR Amplification of T7 RNAP, CmR, and lacZ Genes.</p>
            <p>However, upon transduction of <em>E. coli MG1655 λ cI857</em> with the P1 phage, no colonies were observed on Chloramphenicol-containing plates, indicating that the T7RNAP integration into the E. coli MG1655 genome was unsuccessful under the tested conditions. This result suggests that, despite successful fragment assembly and phage preparation, the recombination and/or transduction step did not yield viable integrants.</p>
            `,
        },
        {
          title: 'Cycle 2-1 — Learn',
          summary: '<p>Understanding the Challenges of T7RNAP Integration</p>',
          detail: `
            <p>From the experimental results, it was clear that although individual PCR fragments were successfully amplified and the integration cassette could be delivered into Red(km) competent cells, no colonies were obtained on Chloramphenicol plates after P1 transduction, indicating that T7RNAP integration into E. coli MG1655 λ cI857 was unsuccessful. Several factors may have contributed to this outcome, including low P1 phage transduction efficiency or incomplete cassette packaging, host strain resistance to P1 infection (e.g., restriction-modification barriers, prophage interference, or O-antigen variation), inefficient cassette integration or toxicity, high selection pressure or suboptimal culture conditions, and potential interference from the λ cI857 prophage.</p>
            <p>Given these challenges and the failure to obtain viable integrants, we did not pursue further optimization of this approach. Instead, we decided to shift our strategy to using λ phage to infect E. coli BL21(DE3), which would provide a more compatible host for T7RNAP-driven expression of our enzymes.</p>
            <img class = img src = "https://static.igem.wiki/teams/6003/engineering/screenshot-202025-10-06-20at-201-19-18-e2-80-afam.avif">
            `,
        },
        {
          title: 'Cycle 2-2 — Design',
          summary: '<p>Designing a Temperature-Controlled Expression System</p>',
          detail: `
          <p>To construct a host capable of temperature-controlled enzyme release and T7 promoter–driven expression, we designed a system that combines the λ cI857 temperature-sensitive lysis module with the T7 RNA polymerase expression system.</p>
          <p>Since <em>E. coli BL21(DE3)</em> already carries the T7RNAP gene on its DE3 prophage, we reasoned that this strain would provide a convenient foundation for achieving both functions within a single host. Therefore, we designed the experiment to directly infect the genome of <em>E. coli BL21(DE3)</em> with a laboratory-provided λ cI857 phage. This approach was allowing the strain to simultaneously express T7RNAP for enzyme induction and undergo heat-induced lysis for controlled enzyme release.</p>
            `,
        },
        {
          title: 'Cycle 2-2 — Build',
          summary: '<p>Constructing the pET28a-DNase I and pET28a-DspB Plasmids</p>',
          detail: `
            <p>To establish a host strain capable of T7RNAP-driven expression and controlled enzyme release,<em>E. coli BL21(DE3)</em> was infected with laboratory-provided λc1857  phage. This generated a <em>E. coli BL21(DE3)  λ cI857</em> strain, which enables temperature-inducible lysis for controlled release of Dispersin B and DNase I.</p>
          `,
        },
        {
          title: 'Cycle 2-2 — Test',
          summary: '<p>System Testing and Validation</p>',
          detail: `
            <p>After infecting <em>E. coli BL21(DE3)</em> with λ phage carrying the cI857 allele, we observed a clear difference in colony growth between plates incubated at 30 °C and 43 °C (Fig. 11), indicating that the temperature-sensitive lysis system was functional. Subsequently, the lysogenized <em>E. coli BL21(DE3) λ cI857</em> strain was transformed with the enzyme plasmids and a T7-GFP reporter plasmid, and growth curves were measured post-infection (Fig. 12).</p>
            <img class = img src = "https://static.igem.wiki/teams/6003/engineering/screen-20shot-202025-10-06-20at-2004-45-39-20am.avif">
            <p>Figure 11. Growth of <em>E. coli BL21(DE3) λ c1857</em> at 30°C and 43°C.</p>
            <img class = img src = "https://static.igem.wiki/teams/6003/engineering/screen-20shot-202025-10-06-20at-2004-58-37-20am.avif">
            <p>Figure 12. Growth Curve of <em>E. coli BL21(DE3) λ c1857</em> at 43°C.</p>
            <p>However, while bacterial growth was detectable, no GFP fluorescence was observed from the T7-GFP reporter, suggesting that T7RNAP expression or activity was insufficient under the tested conditions. PCR analysis revealed that the T7RNAP gene was absent, and only the cI857 fragment was detected (Fig. 13). These results indicate that, although the λ cI857 prophage was successfully established and temperature-dependent effects were visible, the intended T7RNAP integration was not achieved, preventing T7-driven protein expression in this configuration. </p>
            <img class = img src = "https://static.igem.wiki/teams/6003/engineering/screen-20shot-202025-10-06-20at-2004-59-36-20am.avif">
            <p>Figure 13. PCR Amplification of T7 RNAP and c1857 Genes.</p>
            <p>We further tested λ phage infection of <em>E. coli BL21(DE3)</em>/pT7-RNAP, which already carries a plasmid-based T7RNAP. In this case, the infected cells also failed to show GFP fluorescence.</p>
            `,
        },
        {
          title: 'Cycle 2-2 — Learn',
          summary: '<p>Understanding the Challenges of T7RNAP Integration</p>',
          detail: `
            <p>From the experimental observations, we speculate that the failure to obtain T7RNAP in <em>E. coli BL21(DE3) λ cI857</em> lysogens was due to non-targeted homologous recombination driven by high sequence similarity between the DE3-derived T7RNAP locus in <em>E. coli BL21(DE3)</em> and λ phage sequences carrying cI857.</p>
            <p><em>E. coli BL21(DE3)</em> already harbors chromosomally integrated T7RNAP derived from the DE3 region. During λ phage infection, regions of high homology between the phage cassette and the DE3 T7RNAP locus facilitated crossovers, resulting in replacement of the original T7RNAP region with the cI857 fragment, while the T7RNAP gene itself was not correctly integrated. This non-targeted recombination explains why PCR only detected cI857 and no T7RNAP sequence, and why the T7-GFP reporter failed to produce fluorescence despite bacterial growth.</p>
            <p>Based on this observation, we decided to abandon attempts to integrate T7RNAP via λ phage and instead rely on plasmid-based T7RNAP expression for subsequent experiments. This approach avoids potential interference from phage-derived sequences while still enabling T7-driven transcription of Dispersin B and DNase I.</p>
            <img class = img src = "https://static.igem.wiki/teams/6003/engineering/screenshot-202025-10-06-20at-201-20-49-e2-80-afam.avif">
            `,
        },
        {
          title: 'Cycle 2-3 — Design',
          summary: '<p>Alternative Approaches to T7RNAP Integration</p>',
          detail: `
            <p>From our previous experiments, we learned that introducing the λ phage into the bacterial genome was extremely challenging and often led to instability or loss of essential elements such as T7RNAP. To simplify the system, we decided that instead of integrating the T7RNAP gene into the chromosome, we would construct a plasmid carrying the T7RNAP fragment. This design separates the T7RNAP module from the phage genome, avoiding unwanted homologous recombination while maintaining reliable expression. When introduced into <em>E. coli MG1655 λ cI857</em>, the pCL1920/T7RNAP plasmid enables IPTG-inducible expression of T7 promoter–regulated enzymes at 30 °C, while the λ cI857 system ensures temperature-induced lysis at elevated temperatures. Through this setup, we can achieved biosafety through controlled self-lysis.</p>
          `,
        },
        {
          title: 'Cycle 2-3 — Build',
          summary: '<p>Engineering a Plasmid-Based T7RNAP System</p>',
          detail: `
          <p>Based on this idea, we designed a plasmid-based T7RNAP expression system compatible with the λ cI857 kill-switch strain. The T7RNAP gene was isolated from E. coli BL21(DE3) and cloned into the low-copy-number plasmid pCL1920. We used a miniprep procedure to extract the pCL1920 plasmid, and inserted the PCR-amplified T7RNAP fragment from E. coli BL21(DE3) via electroporation. To verify the functionality of the constructed pCL1920-T7RNAP, we transformed it into E. coli TOP10/pT7-RNAP with a T7-inducible GFP reporter plasmid. The presence of green fluorescence under IPTG induction served as an indicator of successful T7RNAP activity.</p>
          `,
        },
        {
          title: 'Cycle 2-3 — Test',
          summary: '<p>Testing the T7RNAP Integration</p>',
          detail: `
            <p>The plasmid-based T7RNAP system was tested in <em>E. coli</em> TOP10 by introducing a T7-GFP plasmid. Fluorescence measurements showed clear GFP expression, confirming that the T7RNAP plasmid successfully drives transcription from T7 promoters in this host.</p>
<p>Bacterial growth curves also revealed that cells carrying the plasmid grew normally at 30 °C, comparable to untransformed controls, indicating minimal fitness cost. However, at 43 °C, growth was almost completely inhibited, consistent with the temperature-sensitive λ cI857 lysis system being activated.</p>

          `,
        },
        {
          title: 'Cycle 2-3 — Learn',
          summary: '<p>Successful Integration of T7RNAP</p>',
          detail: `
            <p>Overall, these results demonstrate that the plasmid-based T7RNAP construct is functional, stable, and compatible with E. coli MG1655 λ cI857, providing a reliable system for downstream T7 promoter-driven enzyme expression.</p>

          `,
        },
        {
          title: 'Cycle 3-1 — Design',
          summary: '<p>Biofilm Degradation Assay Design</p>',
          detail: `
            <p>Before evaluating which combination of enzymes exhibits the most effective biofilm-clearing activity, it is necessary to establish a standardized experimental framework. The design of this biofilm degradation assay is divided into two main components:</p>
<ol>
<li>Biofilm Formation: This step focuses on generating reproducible and uniform biofilms under controlled conditions. By standardizing parameters such as growth medium and incubation time, we aim to produce biofilms of consistent density and structure, providing a reliable baseline for downstream testing.</li>
<li>Biofilm Degradation: Once biofilms are established, this phase evaluates enzymatic activity under defined conditions. The assay will systematically test different enzyme induction methods, including varying induction temperatures, as well as degradation durations to determine optimal conditions for biofilm clearance.</li>
</ol>
<p>By separating the assay into formation and degradation phases, and controlling induction and incubation parameters, the design ensures that observed biofilm reduction reflects the efficacy of the degradation conditions, independent of variability in biofilm development.</p>
            <img class = img src = "https://static.igem.wiki/teams/6003/engineering/screenshot-202025-10-06-20at-201-22-49-e2-80-afam.avif">
          `,
        },
        {
          title: 'Cycle 3-1 — Build',
          summary: '<p>Biofilm Formation Assay Setup</p>',
          detail: `
            <p>To evaluate biofilm formation under controlled conditions, we adopted a static culture setup inspired by Kwasny &amp; Opperman (2010). Cultures were grown in tryptic soy broth (TSB) supplemented with 1% glucose to enhance extracellular matrix production and surface attachment. The cultures were incubated at 37 °C to promote bacterial growth and biofilm development.</p>
<p>At defined time intervals, the optical density (OD₆₀₀) of the culture was measured to monitor growth dynamics and indirectly assess biofilm formation over time.</p>
<p>Kwasny, S. M., &amp; Opperman, T. J. (2010). Static biofilm cultures of Gram-positive pathogens grown in a microtiter format used for anti-biofilm drug discovery. Current protocols in pharmacology, Chapter 13, 13A.8.1–13A.8. https://doi.org/10.1002/0471141755.ph13a08s50</p>

          `,
        },
        {
          title: 'Cycle 3-1 — Test',
          summary: '<p>Biofilm Formation Assessment</p>',
          detail: `
           <p>Biofilm formation was monitored over a 72-hour period, with optical density (OD₆₀₀) measurements taken every four hours to track growth and matrix accumulation. The results showed a steady increase in OD₆₀₀ during the initial 24 hours, indicating active biofilm development and bacterial proliferation.</p>
<p>After 24 hours, the OD₆₀₀ values reached a plateau and remained relatively stable through 72 hours, suggesting that the biofilm had reached its mature phase and further biomass accumulation was minimal. This time point (24 hours) was therefore selected as the standard condition for subsequent biofilm degradation assays.</p>

          `,
        },
        {
          title: 'Cycle 3-1 — Learn',
          summary: '<p>Appropriate Culture Conditions for Biofilm Development</p>',
          detail: `
          <p>From the biofilm formation experiment, we learned that the biofilm reached a stable state after approximately 24 hours, as the OD₆₀₀ value plateaued and showed little fluctuation afterward. This indicates that 24 h is an appropriate culture period for establishing a mature and consistent biofilm, suitable for subsequent degradation assays.</p>
                        <img class = img src = "https://static.igem.wiki/teams/6003/engineering/screenshot-202025-10-06-20at-201-25-09-e2-80-afam.avif">
          `,
        },
        {
          title: 'Cycle 3-2 — Design',
          summary: '<p>Optimizing Enzyme Mixtures for Biofilm Degradation</p>',
          detail: `
            <p>To identify the optimal mixing ratio of the three enzymes and to test whether synergistic effects exist among them, we designed a series of experiments to determine the best culture and induction conditions for our engineered strains. Since enzyme activity and stability are influenced by the host’s physiological state, our first goal was to identify the conditions that allow the bacteria to grow efficiently while still enabling sufficient enzyme production.</p>
<p>We compared different induction strategies and culture temperatures to evaluate how pre-induction, staged induction, or low-temperature induction affect overall cell growth and enzyme expression. By analyzing growth curves, we aimed to define when biofilm degradation is expected to be most effective. Through this approach, we intended to establish both the optimal reaction time and the most efficient conditions for achieving maximum biofilm degradation.</p>

          `,
        },
        {
          title: 'Cycle 3-2 — Build',
          summary: '<p>Establishing Optimal Biofilm Degradation Conditions</p>',
          detail: `
          <p>To establish optimal biofilm degradation conditions, we first aimed to determine whether degradation should be conducted at 40 °C or 43 °C, and then tested different induction strategies for enzyme expression. Four induction methods were designed:</p>
<ol>
<li>Direct induction and degradation: Cells were grown at 30 °C until OD₆₀₀ = 0.6, then induced with IPTG and directly added to the preformed biofilm for degradation.</li>
<li>Post-induction incubation (30 °C, 3 h): Cells were grown at 30 °C until OD₆₀₀ = 0.6, induced with IPTG, and incubated at 30 °C for 3 hours before adjusting OD₆₀₀ to 1.0 and adding to the biofilm.</li>
<li>Staged induction (30 °C + 37 °C): Cells were grown at 30 °C until OD₆₀₀ = 0.6, induced with IPTG, incubated at 30 °C for 1 hour, then transferred to 37 °C for 2 hours before adjusting OD₆₀₀ to 1.0 for biofilm degradation. <em>(This condition was designed under the hypothesis that 37 °C would allow simultaneous enzyme production and degradation activity.)</em></li>
<li>Low-temperature induction (25 °C, 3 h): Cells were grown at 25 °C until OD₆₀₀ = 0.6, induced with IPTG, and incubated at 25 °C for 3 hours before adjusting OD₆₀₀ to 1.0 for biofilm degradation. <em>(Based on the assumption that enzyme expression efficiency is higher at lower temperatures.)</em></li>
</ol>
<p>Finally, the degradation efficiency was compared across different incubation temperatures and time points, testing both individual enzymes and a 1:1:1 enzyme mixture to identify the most effective condition.</p>
          `,
        },
        {
          title: 'Cycle 3-2 — Test',
          summary: '<p>Testing Biofilm Degradation Efficiency</p>',
          detail: `
<p>We first compared bacterial growth at 40 °C and 43 °C, and found that both temperatures produced similar growth curves. Therefore, subsequent degradation assays were conducted at 40 °C.</p>
<p>We then evaluated the four induction strategies described in the Build phase by monitoring degradation efficiency after 7 hours of incubation. Among the tested conditions, Method 2 (post-induction incubation at 30 °C for 3 h before degradation) showed the strongest biofilm-degrading activity.</p>
          `,
        },
        {
          title: 'Cycle 3-2 — Learn',
          summary: '<p>Insights from Biofilm Degradation Experiments</p>',
          detail: `
<p>From the biofilm formation experiment, we learned that the biofilm reached a stable state after approximately 24 hours, as the OD₆₀₀ value plateaued and showed little fluctuation afterward. This indicates that 24 h is an appropriate culture period for establishing a mature and consistent biofilm, suitable for subsequent degradation assays.</p>
<p>In the degradation phase, comparison of induction and temperature conditions provided several important insights. Although 40 °C and 43 °C showed similar bacterial growth and degradation trends, we selected 40 °C as the optimal condition because it is closer to human body temperature and aligns better with the known optimal activity of Dispersin B (around 37 °C). This makes it more representative of potential application environments and more favorable for enzyme stability.</p>
<p>Among the four induction methods, IPTG induction at 30 °C followed by 3 h of expression before adding to the biofilm resulted in the most effective degradation, suggesting that sufficient pre-expression time is crucial for accumulating active enzymes before temperature-induced release.</p>
<p>By monitoring degradation over time, we found that the most active degradation phase occurred around 5 hours after induction, corresponding with a marked decrease in OD₆₀₀. This indicates that enzyme production and release reached peak efficiency at this point. After 5 hours, degradation gradually slowed and stabilized, suggesting that enzyme concentration or substrate availability may have become limiting factors.</p>
<p>Based on the experimental data <s>(Figure 28)</s>, Proteinase K never showed a significant effect on biofilm degradation, regardless of the induction method or time point tested. This suggests that Proteinase K has minimal contribution to biofilm disruption under the current experimental conditions. Future design iterations may consider focusing on DNase I and Dispersin B as the primary active enzymes, while reevaluating the necessity of including Proteinase K in the system.
Overall, these findings highlight that (1) 24-hour biofilm growth provides a reliable substrate for degradation studies, (2) pre-expression of enzymes before heat induction significantly enhances biofilm degradation efficiency, and (3) approximately 5 hours after temperature induction represents the optimal active phase for enzyme-mediated degradation. Future optimization will focus on enzyme ratios, a to further enhance biofilm clearance efficiency.</p>
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

.img{
  max-width: 100%;
}

.note-block {
  text-align: left;
  line-height: 1.6;
  background: #fafafa;
  border-radius: 8px;
}
.panel-html h1 {
  font-size: 1.5rem;
  margin-top: 1em;
}

.panel-html h2 {
  font-size: 1.25rem;
}

.panel-html h3 {
  font-size: 1.1rem;
}

.panel-html h4 {
  font-size: 1rem;
  font-weight: 600;
}

.panel-html h5,
.panel-html h6 {
  font-size: 0.9rem;
  color: #555;
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
.panel-html ol,
.panel-html ul {
  margin: 0.5em 0 0.5em 1.5em; 
  padding-left: 1em;
  line-height: 1.6;
}

.panel-html li > ol,
.panel-html li > ul {
  margin-left: 1em;   
}
.panel-html li strong {
  color: #2b6cb0;
}



</style>