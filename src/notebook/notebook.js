import './notebook.css' 
export const notebookItems = [
  {
    title: 'Week 1(6/23-7-29)',
    html: `
<div class = "note-block panel-htm text-content"><h2><strong>Plasmid Work and Miniprep</strong></h2>
<ol>
<li><strong>Miniprep</strong>
<ul>
<li>pET28-c plasmid</li>
<li>pTrc99A plasmid</li>
</ul>
</li>
<li><strong>EtOH Precipitation</strong>
<ul>
<li>Done on 0627 (Plasmid construction, Day 5)</li>
</ul>
</li>
</ol>
<h2><strong>Primer Preparation</strong></h2>
<ol>
<li>
<p><strong>Re-dissolve Primers</strong></p>
<ul>
<li>Original concentration: 100 μM</li>
</ul>
<table>
<thead>
<tr>
<th>Primer</th>
<th>TE Buffer (μL)</th>
</tr>
</thead>
<tbody>
<tr>
<td>DSPB_FW</td>
<td>227</td>
</tr>
<tr>
<td>DSPB_RV</td>
<td>247</td>
</tr>
<tr>
<td>DNaseI_FW</td>
<td>219</td>
</tr>
<tr>
<td>DNaseI_RV</td>
<td>192</td>
</tr>
<tr>
<td>ProK_FW</td>
<td>254</td>
</tr>
<tr>
<td>ProK_RV</td>
<td>226</td>
</tr>
</tbody>
</table>
</li>
<li>
<p><strong>Dilution of Primers</strong></p>
<ul>
<li>From 100 μM → 10 μM</li>
<li>Volume: 20 μL per primer</li>
</ul>
</li>
</ol>
<h2><strong>PCR</strong></h2>
<ol>
<li>
<p><strong>PCR Setup</strong></p>
<ul>
<li>Genes: DSPB, DNaseI, ProK</li>
</ul>
<table>
<thead>
<tr>
<th>Component</th>
<th>Volume (μL)</th>
<th>Notes</th>
</tr>
</thead>
<tbody>
<tr>
<td>KOD Buffer</td>
<td>25</td>
<td></td>
</tr>
<tr>
<td>dNTP (KOD)</td>
<td>10</td>
<td>Black cap next to KOD buffer</td>
</tr>
<tr>
<td>Primer 1</td>
<td>1.5</td>
<td></td>
</tr>
<tr>
<td>Primer 2</td>
<td>1.5</td>
<td></td>
</tr>
<tr>
<td>Template</td>
<td>11</td>
<td></td>
</tr>
<tr>
<td>KOD DNAP</td>
<td>1</td>
<td></td>
</tr>
</tbody>
</table>
</li>
<li>
<p><strong>PCR Cycle (x30)</strong></p>
<table>
<thead>
<tr>
<th>Step</th>
<th>Temperature</th>
<th>Time</th>
</tr>
</thead>
<tbody>
<tr>
<td>Initial denaturation</td>
<td>94°C</td>
<td>2 min</td>
</tr>
<tr>
<td>Denaturation</td>
<td>98°C</td>
<td>10 sec</td>
</tr>
<tr>
<td>Annealing</td>
<td>55°C</td>
<td>30 sec</td>
</tr>
<tr>
<td>Extension</td>
<td>68°C</td>
<td>2 min</td>
</tr>
<tr>
<td>Final extension</td>
<td>68°C</td>
<td>5 min</td>
</tr>
<tr>
<td>Hold</td>
<td>15°C</td>
<td>∞</td>
</tr>
</tbody>
</table>
</li>
<li>
<p><strong>PCR Notes</strong></p>
<ul>
<li>First attempt: 1:100,000 diluted template, 10 ng/μL as control → no band observed</li>
<li>Second attempt: 1:10,000 diluted template → band observed</li>
<li>Tested three dilution levels (100x, 1000x, 10,000x) with KOD-FX and Taq enzymes. Minor bands are common and not concerning.</li>
</ul>
</li>
<li>
<p><strong>Colony PCR</strong></p>
<ul>
<li>DSPB expected size: 1319 bp</li>
<li>DNase I expected size: 1022 bp</li>
<li>ProK did not show bands; additional colonies will be tested</li>
</ul>
<p><img src="attachment:82bac698-7b1d-49aa-a2f6-3d8611a08f85:0623_PCR-1.jpg" alt="0623_PCR-1.JPG"></p>
<p><img src="attachment:d1a45aba-3ca8-4ea4-ad26-23e8e8819cfa:0623_PCR-2.jpg" alt="0623_PCR-2.jpg"></p>
<p><img src="attachment:d1a45aba-3ca8-4ea4-ad26-23e8e8819cfa:0623_PCR-2.jpg" alt="0623_PCR-2.jpg"></p>
<p><img src="attachment:f01f5300-6c1c-4dde-8f0e-8b70a21d5c73:0623_PCR-3.heic" alt="0623_PCR-3.HEIC"></p>
<p><img src="attachment:7cd094cf-a5ff-43e3-9459-d8978dade693:d818ba2a-b7d9-4b04-94a6-8cb170054e0a.png" alt="0624-PCR-1.HEIC"></p>
<p><img src="attachment:fc30200c-de8c-4d61-8218-868abc4192cf:9fb26d56-bd98-4709-8637-77edf89b9401.png" alt="0624_PCR-2.HEIC"></p>
<p><img src="attachment:b2be19af-f513-4d45-a710-233760eff219:0628_Colony_PCR.heic" alt="0628 Colony PCR.HEIC"></p>
<p><img src="attachment:e7e75765-38fa-4684-b8c0-7ae3bd95a55d:0629_colony_PCR.heic" alt="0629 colony PCR.HEIC"></p>
</li>
</ol>
<h2><strong>PCR Purification</strong></h2>
<ul>
<li>Performed after PCR for DSPB, DNaseI, and ProK</li>
</ul>
<h2><strong>Restriction Enzyme Digestion</strong></h2>
<ul>
<li>After PCR or plasmid extraction</li>
<li>Note: When extracting pET28-c plasmid, do not split into two tubes initially; dilute after extraction to save kit</li>
<li>Images documented for verification</li>
</ul>
<p><img src="attachment:dd0a83b1-65c6-432f-8e49-7171fd4654d8:65412c5e-adc7-4e57-b7b2-a3c6fc1343dd.png" alt="0624_Digestion-1.heic"></p>
<p><img src="attachment:522c67a4-9e91-4ad4-a3fa-9a0dfcef501e:0d6fbe03-001f-488f-bad4-960d4c79c88c.png" alt="0624_Digestion-2.HEIC"></p>
<h2><strong>Ligation</strong></h2>
<ul>
<li>Performed and gel run on 06/25</li>
<li>Images recorded for confirmation</li>
</ul>
<p><img src="attachment:1cbecf22-7c3e-4538-b10f-21ec1c2c6af7:a0fff176-684b-4de4-91fc-9cdbad81e746.png" alt="0625-ligation.heic"></p>
<h2><strong>Transformation / Electroporation</strong></h2>
<ul>
<li>Plasmids and competent cells:
<ul>
<li>ProK + pTrc99A</li>
<li>DSPB + pET28-c</li>
<li>DNaseI + pET28-c</li>
</ul>
</li>
<li>Master plate created (100 μL per plate) on 06/28</li>
</ul>
<h2><strong>Master Plate</strong></h2>
<ul>
<li>Images documented:
<ul>
<li>ProK + pTrc99A</li>
<li>DSPB + pET28-c</li>
<li>DNaseI + pET28-c</li>
</ul>
</li>
</ul>
<p><img src="attachment:8a0b582b-38b0-42f2-ba8e-6d8d8a94545c:8c4f5361-97c0-4029-9d69-1dd478248ce8.png" alt="0625_Masterplate-pTrc99A.HEIC"></p>
<p><img src="attachment:351701e5-de86-4135-b394-1205927c9227:acabc651-9253-432f-81f4-9d424aa3ae1f.png" alt="0628 Master plate.heic"></p>
</div>
    `
  },
  {
    title: 'Week 2(6/30-7/6)',
    html: `
    <div class = "note-block panel-htm text-content">
      <h2><strong>1. Colony PCR</strong></h2>
<ul>
<li>
<p><strong>Purpose</strong>: Verify the presence of inserts in plasmids</p>
</li>
<li>
<p><strong>Setup</strong>:</p>
<ul>
<li>Enzyme: Taq, 10 μL</li>
<li>Forward primer for ProK: ProK_FW (no other primer available)</li>
</ul>
</li>
<li>
<p><strong>Expected Sizes</strong>:</p>
<table>
<thead>
<tr>
<th>Construct</th>
<th>Primer Pair</th>
<th>Size (bp)</th>
</tr>
</thead>
<tbody>
<tr>
<td>pTrc99A + ProK</td>
<td>ProK_FW / pTrc99A-1</td>
<td>1565</td>
</tr>
<tr>
<td>pET28-c + DNase I</td>
<td>GFP-HF / 6xHis-c</td>
<td>1022</td>
</tr>
<tr>
<td>pET28-c + DSPB</td>
<td>GFP-HF / 6xHis-c</td>
<td>1319</td>
</tr>
</tbody>
</table>
</li>
<li>
<p><strong>Pre-culture Numbers</strong>:</p>
<table>
<thead>
<tr>
<th>Construct</th>
<th>Number of Cultures</th>
</tr>
</thead>
<tbody>
<tr>
<td>pTrc99A + ProK</td>
<td>9</td>
</tr>
<tr>
<td>pET28-c + DNase I</td>
<td>7</td>
</tr>
<tr>
<td>pET28-c + DSPB</td>
<td>11</td>
</tr>
</tbody>
</table>
</li>
<li>
<p><strong>Notes</strong>: ProK did not amplify with other primers; used insert-specific forward primer</p>
</li>
</ul>
<p><img src="attachment:a52abaed-d15e-4758-9f00-65f872d59596:0630_Colony_PCR.png" alt="0630 Colony PCR.png"></p>
<p><img src="attachment:c63b913b-ec33-4040-b71b-05e2c088708f:0701_Colony_PCR_Digestion.png" alt="0701 Colony PCR Digestion.png"></p>
<h2><strong>2. Plasmid Construction</strong></h2>
<ul>
<li><strong>Colony PCR Digestion</strong>: Digest PCR products to verify insert integrity</li>
<li><strong>Preservation</strong>:
<ul>
<li>Glycerol stock: 500 μL 50% glycerol + 1000 μL culture, vortex, spin, store at −80°C</li>
</ul>
</li>
</ul>
<h2><strong>3. Strain Construction</strong></h2>
<h3><strong>a. PCR for BL21(DE3) T7RNAP &amp; KE10 lacY Km</strong></h3>
<ul>
<li>
<p><strong>Enzyme</strong>: KOD</p>
</li>
<li>
<p><strong>Primers</strong>:</p>
<ul>
<li>KE10 lacY Km: p1-pKD13 / 141-11-1</li>
<li>BL21(DE3) T7RNAP: 141-20 / T7RNAP-2</li>
</ul>
</li>
<li>
<p><strong>Volume</strong>: 50 μL</p>
</li>
<li>
<p><strong>Expected Sizes</strong>:</p>
<table>
<thead>
<tr>
<th>Construct</th>
<th>Size (bp)</th>
</tr>
</thead>
<tbody>
<tr>
<td>BL21(DE3) T7RNAP</td>
<td>3861</td>
</tr>
<tr>
<td>KE10 lacY Km</td>
<td>1806</td>
</tr>
</tbody>
</table>
</li>
<li>
<p><strong>Notes</strong>: KE10 lacY Km PCR gave multiple unexpected bands; possible primer or technical issue</p>
</li>
</ul>
<h3><strong>b. PCR Optimization for KE10 lacY Km</strong></h3>
<ul>
<li><strong>First Attempt</strong>: old working solution, dilutions 100x/1000x → no band</li>
<li><strong>Second Attempt</strong>: new working solution, annealing 57°C → still unsuccessful</li>
<li><strong>Plate PCR</strong>: template from colonies, annealing 55°C → only ladder observed</li>
</ul>
<h3><strong>c. PCR for Chromosomal Integrations</strong></h3>
<ul>
<li><strong>Templates</strong>: MG1655, KE10 ∆lacY::km, BW25113 ΔMrr::km</li>
<li><strong>Enzyme</strong>: Taq</li>
<li><strong>Primers</strong>:
<ol>
<li>141-37 / 141-11-1 (control)</li>
<li>p1-pKD13 / p2-pKD13</li>
<li>p1-pKD13 / 141-11-1</li>
<li>116-12 / 116-17 (additional control)</li>
</ol>
</li>
<li><strong>Volume</strong>: 50 μL → reduced to 10 μL to save reagents</li>
<li><strong>Annealing</strong>: 55°C</li>
<li><strong>Notes</strong>:
<ul>
<li>Control primers did not amplify</li>
<li>p1-pKD13 / p2-pKD13 showed expected pattern: MG1655 negative, KE10 &amp; BW25113 positive (~1303 bp)</li>
<li>Likely technical issue with handling, rerun planned</li>
</ul>
</li>
</ul>
<h3><strong>d. Small-volume PCR Strategy</strong></h3>
<ul>
<li><strong>Premix Method</strong>: mix all components except template, aliquot to PCR tubes, add template</li>
<li><strong>Result</strong>: only one control amplified, target products not obtained</li>
<li><strong>Next Step</strong>: rerun with mentor assistance</li>
</ul>
<p><img src="attachment:a97bea2f-08e6-4a75-a8b3-f5c5955df42a:0701_PCR_for_BL21_(DE3)_T7RNAP_KE10_lacY_Km.png" alt="0701 PCR for BL21 (DE3) T7RNAP, KE10 lacY Km.png"></p>
<p><img src="attachment:2cfe4e1b-6b2b-4694-bc40-6011bc8afead:0702_PCR_for_KE10_lacY_Km.png" alt="0702 PCR for KE10 lacY Km.png"></p>
<p><img src="attachment:fc3080a0-4d05-4aa3-886b-2f4cea199db2:0702_PCR_for_KE10_lacY_Km.png" alt="0702 PCR for KE10 lacY Km.png"></p>
<p><img src="attachment:ae371d62-0d62-4907-b457-f3b3f492780b:0703_PCR_for_KE10_lacY_Km.png" alt="0703 PCR for KE10 lacY Km.png"></p>
<p><img src="attachment:e5e64672-2d2b-4b6d-be37-4b94c8d46c8a:image.png" alt="image.png"></p>
<p><img src="attachment:fc130036-6b31-4f76-b755-fef55f125f7a:image.png" alt="image.png"></p>
<p><img src="attachment:481bbdbb-d7ee-4c55-9855-0726bb93fcf7:image.png" alt="image.png"></p>
<p><img src="attachment:81070dc5-1235-4287-9c5b-b31fbb497d5f:image.png" alt="image.png"></p>
<p><img src="attachment:92999ffb-430d-468e-b14a-ee28510a6c7e:e20a3683-1d76-4929-a69c-35377a80b8c2.png" alt="0703 KE10 lacY Km plate.JPG"></p>
</div>
    `
  },
  {
    title: 'Week 3(7/7-7/13)',
    html: `
    <div class = "note-block panel-htm text-content">
      <h2><strong>Plasmid Construction</strong></h2>
<h3><strong>1. Pre-culture</strong></h3>
<ul>
<li><strong>Constructs</strong>:
<ul>
<li>Dispersin B (DSPB)</li>
<li>DNase I</li>
<li>BL21(DE3)</li>
</ul>
</li>
</ul>
<h3><strong>2. Miniprep</strong></h3>
<ul>
<li><strong>Plasmids</strong>:
<ul>
<li>Dispersin B (pET28-c)</li>
<li>DNase I (pET28-c)</li>
<li>Proteinase K (pTrc99A)</li>
</ul>
</li>
</ul>
<h3><strong>3. Transformation</strong></h3>
<ul>
<li><strong>Dispersin B → BL21(DE3)</strong></li>
<li><strong>DNase I → BL21(DE3)</strong></li>
<li><strong>Proteinase K → MG1655 λCI857</strong></li>
</ul>
<h3><strong>4. Pre-culture</strong></h3>
<ul>
<li><strong>Plasmid/Strain Combinations</strong>:
<ul>
<li>pET28-c + DNase I</li>
<li>pET28-c + DSPB</li>
<li>pTrc99A + ProK</li>
<li>BL21(DE3)</li>
<li>MG1655 λCI857</li>
</ul>
</li>
</ul>
<h2><strong>Strain Construction</strong></h2>
<h3><strong>1. Colony PCR</strong></h3>
<ul>
<li><strong>Templates</strong>: MG1655, KE10 ∆lacY::km, BW25113 ΔMrr::km</li>
<li><strong>Enzymes</strong>: KOD</li>
<li><strong>Primers</strong>:
<ul>
<li>141-37 / 141-11-1</li>
<li>141-37 / 141-11-2</li>
<li>116-12 / 116-17</li>
<li>p1-pKD13 / p2-pKD13</li>
<li>p1-pKD13 / 141-11-1</li>
<li>p1-pKD13 / 141-11-2</li>
</ul>
</li>
<li><strong>Volume</strong>: 10 μL</li>
<li><strong>Annealing</strong>: 50-60°C</li>
<li><strong>Notes</strong>: Success achieved with KE10 ∆lacY::km (primer p1-pKD13/141-11-1 at 60°C)</li>
</ul>
<p><img src="attachment:5dfce339-e7a0-4c4a-a8a8-7b4b4927d11b:image.png" alt="image.png"></p>
<p><img src="attachment:9da91347-a506-49b0-afb0-3c9ce0fa4003:Screenshot_2025-07-09_at_6.20.22_PM.png" alt="Screenshot 2025-07-09 at 6.20.22 PM.png"></p>
<p><img src="attachment:5b688d96-ac30-45a1-87f2-8b72acb2de37:Screenshot_2025-07-09_at_6.21.57_PM.png" alt="Screenshot 2025-07-09 at 6.21.57 PM.png"></p>
<p><img src="attachment:10e68c0c-920d-4239-820b-18c5692d6f47:image.png" alt="image.png"></p>
<h3><strong>2. PCR Purification</strong></h3>
<ul>
<li>
<p>Purified products from colony PCR</p>
</li>
<li>
<p>Estimated concentrations based on band intensity:</p>
<ul>
<li>T7: 53 ng/1.0 μg</li>
<li>lacY: 21 ng/1.0 μg</li>
</ul>
<p><img src="attachment:4863cb8c-7f6a-4bc2-a8c6-5fcdaf8effee:Screenshot_2025-07-09_at_6.25.41_PM.png" alt="Screenshot 2025-07-09 at 6.25.41 PM.png"></p>
</li>
</ul>
<h3><strong>3. Overlapping PCR</strong></h3>
<ul>
<li>
<p><strong>Templates</strong> (T7 : lacY ratios):</p>
<ol>
<li>1x T7 + 1x lacY</li>
<li>10x T7 + 4x lacY</li>
<li>100x T7 + 40x lacY</li>
<li>10,000x T7 + 400x lacY</li>
</ol>
</li>
<li>
<p><strong>Enzyme</strong>: KOD</p>
</li>
<li>
<p><strong>Primers</strong>: 141-20 / 141-11-1</p>
</li>
<li>
<p><strong>Volume</strong>: 12 μL</p>
</li>
<li>
<p><strong>Annealing</strong>: 50-68°C</p>
</li>
<li>
<p><strong>Cycle Parameters</strong>:</p>
<table>
<thead>
<tr>
<th>Step</th>
<th>Temp</th>
<th>Time</th>
</tr>
</thead>
<tbody>
<tr>
<td>Initial denaturation</td>
<td>94°C</td>
<td>2 min</td>
</tr>
<tr>
<td>Denaturation</td>
<td>98°C</td>
<td>10 sec</td>
</tr>
<tr>
<td>Annealing</td>
<td>50-60°C</td>
<td>30 sec</td>
</tr>
<tr>
<td>Extension</td>
<td>68°C</td>
<td>5-6 min</td>
</tr>
<tr>
<td>Final extension</td>
<td>68°C</td>
<td>5 min</td>
</tr>
<tr>
<td>Hold</td>
<td>15°C</td>
<td>∞</td>
</tr>
</tbody>
</table>
</li>
<li>
<p><strong>Observation</strong>: Gel extraction of 4260-5148 bp region showed no visible bands; likely low DNA concentration or kit problem.</p>
</li>
</ul>
<p><img src="attachment:2c59710d-ef49-460d-80d1-b7f9f041e990:Screenshot_2025-07-09_at_6.31.23_PM.png" alt="Screenshot 2025-07-09 at 6.31.23 PM.png"></p>
<p><img src="attachment:22575b0c-cb9d-41f5-bd3e-fbae654a923a:Screenshot_2025-07-11_at_1.49.07_PM.png" alt="Screenshot 2025-07-11 at 1.49.07 PM.png"></p>
<p><img src="attachment:0504318c-7d6c-4e4e-b282-f468c5a2c076:Screenshot_2025-07-15_at_4.24.15_PM.png" alt="Screenshot 2025-07-15 at 4.24.15 PM.png"></p>
<h3><strong>4. Gel Extraction</strong></h3>
<ul>
<li>Attempted gel extraction for overlapping PCR product</li>
<li>Result: no bands observed; considered kit issue</li>
</ul>
<p><img src="attachment:205150c2-651f-4599-9458-225dd48af91d:image.png" alt="image.png"></p>
<h3><strong>5. Red Recombination</strong></h3>
<ul>
<li>Planned as next step after overlapping PCR</li>
</ul>
<h2><strong>Biofilm Experiment</strong></h2>
<ul>
<li>
<p><strong>TSB Medium Preparation</strong>:</p>
<table>
<thead>
<tr>
<th>Component</th>
<th>Amount</th>
</tr>
</thead>
<tbody>
<tr>
<td>Casein peptone</td>
<td>5 g</td>
</tr>
<tr>
<td>NaCl</td>
<td>1.25 g</td>
</tr>
<tr>
<td>Dipotassium hydrogen phosphate</td>
<td>0.625 g</td>
</tr>
<tr>
<td>RO water</td>
<td>250 mL</td>
</tr>
</tbody>
</table>
</li>
<li>
<p><strong>pH</strong>: 7.3 ± 0.2</p>
</li>
<li>
<p><strong>Autoclave</strong>: 2 hours</p>
</li>
</ul>
<h2><strong>Other Notes</strong></h2>
<ul>
<li><strong>Medium Preparations</strong>:
<ul>
<li>LB *5</li>
<li>LB + Ap *5</li>
<li>LB + Km *10</li>
</ul>
</li>
</ul>
</div>
    `
  },{
    title: 'Week 4(7/14-7/20)',
    html: `
     <div class = "note-block panel-htm text-content">
    <h2><strong>Strain Construction</strong></h2>
<h3><strong>1. Plating</strong></h3>
<ul>
<li>
<p><strong>Media</strong>:</p>
<ul>
<li>LB + Km + IPTG + X-Gal ×5</li>
<li>LB + Km + IPTG ×5</li>
</ul>
</li>
<li>
<p><strong>Master Plate (Red Recombination Strain)</strong>:</p>
<ul>
<li>LB + Km</li>
<li>LB + Km + IPTG + X-Gal</li>
<li><strong>Observation</strong>: No non-blue colonies on LB + Km + IPTG + X-Gal plate → lacY replacement by T7RNAP + Km failed</li>
<li>Negative control: red (Cm) strain; still has lacY → blue colonies as expected</li>
</ul>
<p><img src="attachment:9dc1a7c7-6193-4c26-9a83-af74ab695280:fe832a05-0cea-41c2-911d-c836728674b8.png" alt="IMG_6107.HEIC"></p>
</li>
</ul>
<h3><strong>2. Master Plate (Plasmid Construction)</strong></h3>
<ul>
<li><strong>BL21 + DSPB</strong>: LB + Km, LB + Km + IPTG</li>
<li><strong>BL21 + DNase I</strong>: LB + Km, LB + Km + IPTG</li>
<li><strong>MG1655 λCI857 + ProK</strong>: LB + Ap, LB + Ap + Glucose</li>
<li><strong>Observation</strong>: Plates prepared for future SDS-PAGE protein expression analysis</li>
</ul>
<p><img src="attachment:ba6d19ae-4107-4683-a1b7-9a2628d6b236:47cfd902-697b-45f6-a382-114b034a6db1.png" alt="IMG_6109.HEIC"></p>
<p><img src="attachment:d1fe186f-471a-4f7a-9cea-4fc068efdf4f:1c4f8e1f-03d1-430d-868a-de0537d7b0a0.png" alt="IMG_6110.HEIC"></p>
<p><img src="attachment:6d99c8f3-205d-4279-84b5-7a23d6663968:53d20511-0ecb-45d0-80ab-1cbec880adef.png" alt="IMG_6111.HEIC"></p>
<h3><strong>3. PCR for BL21(DE3) T7RNAP &amp; KE10 lacY::Km</strong></h3>
<ul>
<li>
<p><strong>Primers</strong>:</p>
<ul>
<li>BL21(DE3) T7RNAP: 141-20 / T7RNAP2</li>
<li>KE10 lacY::Km: 141-11-1 / p1-pKD13ex (new primer provided by MASA)</li>
</ul>
</li>
<li>
<p><strong>Enzyme</strong>: KOD</p>
</li>
<li>
<p><strong>Total Volume</strong>: 50 μL</p>
</li>
<li>
<p><strong>PCR Mix</strong>:</p>
<table>
<thead>
<tr>
<th>Component</th>
<th>Volume</th>
</tr>
</thead>
<tbody>
<tr>
<td>KOD Buffer</td>
<td>25 μL</td>
</tr>
<tr>
<td>dNTP</td>
<td>10 μL</td>
</tr>
<tr>
<td>Primer 1</td>
<td>1.5 μL</td>
</tr>
<tr>
<td>Primer 2</td>
<td>1.5 μL</td>
</tr>
<tr>
<td>Template</td>
<td>11 μL</td>
</tr>
<tr>
<td>KOD DNAP</td>
<td>1 μL</td>
</tr>
</tbody>
</table>
</li>
<li>
<p><strong>Cycling Conditions</strong>:</p>
<table>
<thead>
<tr>
<th>Step</th>
<th>Temp</th>
<th>Time</th>
</tr>
</thead>
<tbody>
<tr>
<td>Initial denaturation</td>
<td>94°C</td>
<td>2 min</td>
</tr>
<tr>
<td>Denaturation</td>
<td>98°C</td>
<td>10 sec</td>
</tr>
<tr>
<td>Annealing</td>
<td>55°C</td>
<td>30 sec</td>
</tr>
<tr>
<td>Extension</td>
<td>68°C</td>
<td>4 min (T7) / 2 min (Km)</td>
</tr>
<tr>
<td>Final extension</td>
<td>68°C</td>
<td>5 min</td>
</tr>
<tr>
<td>Hold</td>
<td>15°C</td>
<td>∞</td>
</tr>
</tbody>
</table>
</li>
<li>
<p><strong>Observation</strong>: MASA ran PCR → T7 amplified, Km did not; new primer (T7RNAP-3) designed for further trials</p>
</li>
</ul>
<p><img src="attachment:765e0ad2-51db-4915-9c72-0ca0498dd636:1000015791.jpg" alt="1000015791.jpg"></p>
<p><img src="attachment:7b31c8d6-95b4-4a4d-b8a9-a73f13402f12:0716_PCR_for_KEIO_lacYKm.png" alt="0716 PCR for KEIO lacYKm.png"></p>
<p><img src="attachment:046b8e54-a7c9-42f5-843e-923cd78762f8:Screenshot_2025-10-05_at_5.39.31_PM.png" alt="Screenshot 2025-10-05 at 5.39.31 PM.png"></p>
<h2><strong>Biofilm Formation</strong></h2>
<ul>
<li>
<p><strong>Pre-culture</strong>: 3 mL S. aureus</p>
</li>
<li>
<p><strong>OD Measurements</strong>:</p>
<table>
<thead>
<tr>
<th>Time</th>
<th>OD</th>
</tr>
</thead>
<tbody>
<tr>
<td>0 hr</td>
<td>0.00</td>
</tr>
<tr>
<td>2 hr</td>
<td>0.12</td>
</tr>
<tr>
<td>4 hr</td>
<td>0.14</td>
</tr>
</tbody>
</table>
</li>
<li>
<p><strong>Extended Biofilm Collection</strong>: 48 hr, 72 hr for analysis</p>
</li>
</ul>
<p><img src="attachment:236dff41-5a11-4c51-a135-a36549481e8f:Screenshot_2025-07-21_at_9.56.35_PM.png" alt="Screenshot 2025-07-21 at 9.56.35 PM.png"></p>
<h2><strong>Protein Expression</strong></h2>
<ul>
<li><strong>Sample Collection</strong>: Cell pellet collected</li>
<li><strong>PCR for lacY</strong>: Enzyme: Taq, primers 141-49 / p1-pKD13ex</li>
<li><strong>Future Analysis</strong>: SDS-PAGE planned to verify protein expression</li>
</ul>
<p><img src="attachment:685f9dd8-2c6b-45ed-948a-dbefc6201252:0718_SDS-page.png" alt="0718 SDS-page.png"></p>
<p><img src="attachment:c2d65ac7-7da3-4795-b6e8-fc9d25519cd4:Screenshot_2025-07-21_at_7.44.41_PM.png" alt="Screenshot 2025-07-21 at 7.44.41 PM.png"></p>
</div>
    `
  },
  {
    title: 'Week 5(7/21-7/27)',
    html: `
     <div class = "note-block panel-htm text-content">
     <h2><strong>Strain Construction</strong></h2>
<h3><strong>1. Transformation</strong></h3>
<ul>
<li><strong>T7 GFP → BL21(DE3)</strong></li>
<li><strong>Observation</strong>: Colonies grown for downstream biofilm assays</li>
</ul>
<p><img src="attachment:b142e746-adba-4569-b9db-660f0ca014cd:IMG_6218.heic" alt="IMG_6218.HEIC"></p>
<h3><strong>2. Biofilm Growth Test</strong></h3>
<ul>
<li><strong>Timepoints</strong>: 0, 2, 4, 6, 8, 12, 24 hr</li>
<li><strong>Observation</strong>: Standard biofilm growth curve recorded</li>
</ul>
<h3><strong>3. SDS-PAGE</strong></h3>
<ul>
<li><strong>Purpose</strong>: Protein expression analysis</li>
<li><strong>Samples</strong>: BL21(DE3) derivatives expressing DSPB, DNase I, ProK</li>
<li><strong>Observation</strong>: Protein bands visualized (#0723)</li>
</ul>
<p><img src="attachment:e1a6dc20-c2a2-4380-89cd-95023e7a1a42:0723_SDS.heic" alt="0723 SDS.HEIC"></p>
<h3><strong>4. PCR for CmR, lacZ, T7RNAP</strong></h3>
<ul>
<li>
<p><strong>Expected Size</strong>: 1899 bp</p>
</li>
<li>
<p><strong>Enzyme</strong>: Taq</p>
</li>
<li>
<p><strong>Template</strong>: 10× CmR, 10× lacZ</p>
</li>
<li>
<p><strong>Reaction Volume</strong>: 10 μL</p>
</li>
<li>
<p><strong>PCR Mix</strong>:</p>
<table>
<thead>
<tr>
<th>Component</th>
<th>Volume</th>
</tr>
</thead>
<tbody>
<tr>
<td>MQ</td>
<td>0.2 μL</td>
</tr>
<tr>
<td>Buffer</td>
<td>5 μL</td>
</tr>
<tr>
<td>dNTP</td>
<td>2 μL</td>
</tr>
<tr>
<td>Primer 1</td>
<td>0.3 μL</td>
</tr>
<tr>
<td>Primer 2</td>
<td>0.3 μL</td>
</tr>
<tr>
<td>Template</td>
<td>1+1 μL</td>
</tr>
<tr>
<td>Taq DNAP</td>
<td>0.2 μL</td>
</tr>
</tbody>
</table>
</li>
<li>
<p><strong>Cycling Conditions</strong>:</p>
<table>
<thead>
<tr>
<th>Step</th>
<th>Temp</th>
<th>Time</th>
</tr>
</thead>
<tbody>
<tr>
<td>Initial denaturation</td>
<td>94°C</td>
<td>2 min</td>
</tr>
<tr>
<td>Denaturation</td>
<td>94°C</td>
<td>30 sec</td>
</tr>
<tr>
<td>Annealing</td>
<td>55°C</td>
<td>30 sec</td>
</tr>
<tr>
<td>Extension</td>
<td>72°C</td>
<td>2 min</td>
</tr>
<tr>
<td>Final extension</td>
<td>72°C</td>
<td>5 min</td>
</tr>
<tr>
<td>Hold</td>
<td>15°C</td>
<td>∞</td>
</tr>
</tbody>
</table>
</li>
</ul>
<p><img src="attachment:8c7d7e46-c662-42c4-92cf-0eb291216895:0724_PCR_for_T7RNAP_CmR_lacZ.png" alt="0724 PCR for T7RNAP, CmR, lacZ.png"></p>
<h3><strong>5. PCR Purification</strong></h3>
<ul>
<li><strong>Fragments purified</strong>: T7RNAP, CmR, lacZ (50 μL each)</li>
</ul>
<h3><strong>6. Overlapping PCR (CmR + lacZ)</strong></h3>
<ul>
<li><strong>Template</strong>: 10× lacZ + 10× CmR</li>
<li><strong>Enzyme</strong>: Taq</li>
<li><strong>Primers</strong>: CmC(JK) / 141-23</li>
<li><strong>Reaction Volume</strong>: 10 μL</li>
<li><strong>Annealing</strong>: 72°C</li>
<li><strong>Observation</strong>: Bands present but template concentration too high → gel extraction recommended</li>
</ul>
<h3><strong>7. Gel Extraction</strong></h3>
<ul>
<li><strong>Purpose</strong>: Clean template for next overlapping PCR</li>
<li><strong>Observation</strong>: DNA recovered for next round of overlapping PCR</li>
</ul>
<h3><strong>8. Overlapping PCR (lacZ-Cm + T7)</strong></h3>
<ul>
<li><strong>Templates</strong>:
<ol>
<li>1× lacZ-Cm + 3× T7</li>
<li>3× lacZ-Cm + 10× T7</li>
</ol>
</li>
<li><strong>Enzyme</strong>: KOD</li>
<li><strong>Primers</strong>: 141-20 / 141-23</li>
<li><strong>Reaction Volume</strong>: 10 μL</li>
<li><strong>Annealing Temperature</strong>: 68°C</li>
<li><strong>Template Volume</strong>: 1+1 μL</li>
<li><strong>Observation</strong>: Bands obtained for downstream cloning</li>
</ul>
<p><img src="attachment:777d1ef6-3c9e-4863-b2a2-1a4920e389d0:Screenshot_2025-07-25_at_11.39.35_PM.png" alt="Screenshot 2025-07-25 at 11.39.35 PM.png"></p>
<p><img src="attachment:b0452803-6bd1-4f22-b46d-f578283d4bfd:Screenshot_2025-07-25_at_11.42.52_PM.png" alt="Screenshot 2025-07-25 at 11.42.52 PM.png"></p>
<p><img src="attachment:9847d352-45c1-462d-9dca-926f02045901:Screenshot_2025-10-05_at_6.05.51_PM.png" alt="Screenshot 2025-10-05 at 6.05.51 PM.png"></p>
<p><img src="attachment:03c95f62-c6ec-496b-8af3-8771ccd3e3ac:image.png" alt="image.png"></p>
<p><img src="attachment:04ac9d49-9600-4357-85d1-945852ddbe61:image.png" alt="image.png"></p>
<h3><strong>9. Pre-culture</strong></h3>
<ul>
<li><strong>Strains</strong>: red(Km), ProK</li>
</ul>
<h2><strong>Biofilm Formation</strong></h2>
<ul>
<li><strong>Organism</strong>: S. aureus</li>
<li><strong>Growth Curves</strong>: 36–96 hr standard biofilm assay</li>
<li><strong>Observation</strong>: Biofilm OD values recorded; growth monitored over time</li>
</ul>
<p><img src="attachment:79401457-e67a-48c7-aec2-cda52e099fde:image.png" alt="image.png"></p>
<p><img src="attachment:9d291f66-156a-4304-a69b-a33f0ddc9111:image.png" alt="image.png"></p>
<p><img src="attachment:54bc4b20-dd4e-42ad-a20c-7d9bef610bca:image.png" alt="image.png"></p>
     </div>
    `
  },{
    title: 'Week 6(7/28-8/4)',
    html: `
     <div class = "note-block panel-htm text-content">
    <h2><strong>Strain Construction &amp; Plating</strong></h2>
<ul>
<li>
<p><strong>Plating (Spreading)</strong></p>
<table>
<thead>
<tr>
<th>Plate Type</th>
<th>Replicates</th>
<th>Purpose</th>
</tr>
</thead>
<tbody>
<tr>
<td>LB + Cm</td>
<td>5</td>
<td>Selection for Cm-resistant colonies</td>
</tr>
<tr>
<td>LB + Cm + X-gal</td>
<td>2</td>
<td>Screening for lacZ replacement using Red recombination</td>
</tr>
<tr>
<td>LB + Ap</td>
<td>2</td>
<td>Selection for Ap-resistant colonies</td>
</tr>
</tbody>
</table>
</li>
<li>
<p><strong>Notes</strong>: Master plates prepared for Red recombination strains. Successful replacement of lacY with T7RNAP + Km should result in non-blue colonies on LB + Km + IPTG + X-Gal. Negative control: red(Cm) retains lacY → blue colonies.</p>
</li>
</ul>
<h2><strong>Protein Analysis</strong></h2>
<ul>
<li>
<p><strong>SDS-PAGE</strong></p>
<ul>
<li>Purpose: Visualize protein expression</li>
<li>Observation: Target protein bands detected</li>
</ul>
<p><img src="attachment:93bb6198-d094-4c4a-8924-ae1c4f04376d:Screenshot_2025-10-05_at_6.35.03_PM.png" alt="Screenshot 2025-10-05 at 6.35.03 PM.png"></p>
</li>
<li>
<p><strong>Western Blot</strong></p>
<ul>
<li>Purpose: Confirm protein expression and specificity</li>
<li>Experimental conditions recorded</li>
<li>Observation: Band intensity and specificity analyzed</li>
</ul>
<p><img src="attachment:ca32de95-9b3b-4ad4-a85e-69c5f3167931:Screenshot_2025-10-05_at_6.39.20_PM.png" alt="Screenshot 2025-10-05 at 6.39.20 PM.png"></p>
</li>
</ul>
<h2><strong>Red Recombination</strong></h2>
<ul>
<li>
<p><strong>Experimental Conditions</strong>: 123, 456, 789 (lab-defined conditions)</p>
</li>
<li>
<p><strong>Observation</strong>: Integrates lacZ + Cm + T7 fragment into the host chromosome</p>
</li>
<li>
<p><strong>Technical Notes (Prof. Masa)</strong>: Explained the Red system and pKD vector operation principles</p>
</li>
<li>
<p><strong>Overlapping PCR for lacZ + Cm + T7</strong></p>
<ul>
<li>Purpose: Purify product for recombination template</li>
<li>PCR Confirmation:</li>
<li>Overlapping Template Check:</li>
</ul>
<p><img src="attachment:bcae19c0-33b7-42ae-9c70-65e0d9ec6fb5:0729_overlapping_for_lacZCmT7.png" alt="0729 overlapping for lacZ+Cm+T7.png"></p>
<p><img src="attachment:8f621095-2c6f-466b-9fa4-a9597cb0c339:Screenshot_2025-10-05_at_6.18.25_PM.png" alt="Screenshot 2025-10-05 at 6.18.25 PM.png"></p>
<p><img src="attachment:92bdb9c5-7ce1-4f43-9920-1d897e6bac22:Screenshot_2025-10-05_at_6.21.12_PM.png" alt="Screenshot 2025-10-05 at 6.21.12 PM.png"></p>
<p><img src="attachment:6d570cb4-0153-4019-8150-d0a2f026ccb6:Screenshot_2025-10-05_at_6.28.26_PM.png" alt="Screenshot 2025-10-05 at 6.28.26 PM.png"></p>
<p><img src="attachment:0e2b3b26-a46d-491f-b012-a9b2b45b4e89:Screenshot_2025-10-05_at_6.32.37_PM.png" alt="Screenshot 2025-10-05 at 6.32.37 PM.png"></p>
<p><img src="attachment:f32c5e8e-7cac-487a-896f-925db55cf43c:Screenshot_2025-10-05_at_6.38.10_PM.png" alt="Screenshot 2025-10-05 at 6.38.10 PM.png"></p>
</li>
</ul>
<h2><strong>Biofilm Formation</strong></h2>
<ul>
<li>
<p><strong>Growth Curve Test</strong></p>
<ul>
<li>Timepoint: 24 hr</li>
<li>Observation: Standard biofilm formation curve obtained</li>
</ul>
</li>
<li>
<p><strong>Milk Plate Test</strong></p>
<ul>
<li>Purpose: Assess biofilm formation and secretion activity</li>
</ul>
<p><img src="attachment:2fec5803-af9c-4220-9880-fefd9ce74a4a:Screenshot_2025-10-05_at_6.46.47_PM.png" alt="Screenshot 2025-10-05 at 6.46.47 PM.png"></p>
</li>
<li>
<p><strong>Phage Preparation</strong></p>
<ul>
<li>Purpose: Prepare for subsequent biofilm-related experiments</li>
</ul>
</li>
</ul>
<h2><strong>PCR Confirmation</strong></h2>
<ul>
<li><strong>Purpose</strong>: Verify correct sequence and concentration of overlapping PCR products</li>
<li><strong>Observation</strong>: Bands clearly visible, suitable for use in Red recombination</li>
</ul>
     </div>
     `
  },
  {
    title: 'Week 8(8/11-8/17)',
    html: `
     <div class = "note-block panel-htm text-content">
<h2><strong>train Construction</strong></h2>
<h3><strong>BL21(DE3) Infection with Lambda cI857</strong></h3>
<ul>
<li>
<p><strong>Hosts:</strong></p>
<ol>
<li>BL21(DE3)</li>
<li>MG1655 (control)</li>
</ol>
</li>
<li>
<p><strong>Phages:</strong></p>
<ul>
<li>Lambda cI857 (for BL21(DE3))</li>
<li>Lambda c1857 (for MG1655)</li>
</ul>
</li>
<li>
<p><strong>Procedure:</strong></p>
<ul>
<li>Infected regions were streaked onto fresh LB plates.</li>
<li>Senior’s method: infection using 1×, 1/10×, 1/100×, and 1/1000× lambda cI857.</li>
<li>Observation: All attempts failed.</li>
</ul>
</li>
<li>
<p><strong>Temperature selection (P1 phage transduction):</strong></p>
<ul>
<li>Colonies from 30°C plate streaked onto fresh LB plates.</li>
<li>Plates incubated at 30°C and 43°C.</li>
<li>Only colonies growing at 30°C but not 43°C were retained for further use.</li>
</ul>
<p><img src="attachment:26936782-56f6-4e4c-b3f0-72e74d15bbfc:image.png" alt="image.png"></p>
<p><img src="attachment:a9463b83-8a60-40f7-bfe0-ffbdc1208d16:image.png" alt="image.png"></p>
</li>
</ul>
<h2><strong>Biofilm Degradation Assays</strong></h2>
<ul>
<li><strong>Preculture:</strong>
<ul>
<li><strong>Strains:</strong> DspB in BL21(DE3), DNase I in BL21(DE3), ProK in MG1655 lambda c1857</li>
<li><strong>Substrate:</strong> Biofilm formed by <em>S. aureus</em> in 96-well microplates</li>
</ul>
</li>
<li><strong>OD600 Measurements:</strong></li>
</ul>
<table>
<thead>
<tr>
<th>Strain</th>
<th>2 hrs</th>
<th>3 hrs</th>
<th>4 hrs</th>
<th>7 hrs (after 3 hrs IPTG induction)</th>
</tr>
</thead>
<tbody>
<tr>
<td>DspB in BL21(DE3)</td>
<td>0.036</td>
<td>0.039</td>
<td>0.047</td>
<td>0.085</td>
</tr>
<tr>
<td>DNase I in BL21(DE3)</td>
<td>0.035</td>
<td>0.036</td>
<td>0.037</td>
<td>0.17</td>
</tr>
<tr>
<td>ProK in MG1655 λ c1857</td>
<td>0.161</td>
<td>0.269</td>
<td>0.493</td>
<td>0.96</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th>Strain</th>
<th>2 hrs</th>
<th>4 hrs</th>
<th>7 hrs (after 3 hrs IPTG induction)</th>
</tr>
</thead>
<tbody>
<tr>
<td>DspB in BL21(DE3)</td>
<td>0.232</td>
<td>0.56</td>
<td>1.191</td>
</tr>
<tr>
<td>DNase I in BL21(DE3)</td>
<td>0.253</td>
<td>0.55</td>
<td>1.218</td>
</tr>
<tr>
<td>ProK in MG1655 λ c1857</td>
<td>0.44</td>
<td>0.941</td>
<td>1.358</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th>Strain</th>
<th>4 hrs</th>
<th>7 hrs (after 3 hrs IPTG induction)</th>
</tr>
</thead>
<tbody>
<tr>
<td>DspB in BL21(DE3)</td>
<td>0.222</td>
<td>0.848</td>
</tr>
<tr>
<td>DNase I in BL21(DE3)</td>
<td>0.219</td>
<td>0.827</td>
</tr>
<tr>
<td>ProK in MG1655 λ c1857</td>
<td>0.873</td>
<td>1.281</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th>Strain</th>
<th>4 hrs</th>
<th>8 hrs (after 4 hrs IPTG induction)</th>
</tr>
</thead>
<tbody>
<tr>
<td>DspB in BL21(DE3)</td>
<td>0.157</td>
<td>0.744</td>
</tr>
<tr>
<td>DNase I in BL21(DE3)</td>
<td>0.112</td>
<td>0.756</td>
</tr>
<tr>
<td>ProK in MG1655 λ c1857</td>
<td>0.687</td>
<td>1.334</td>
</tr>
</tbody>
</table>
<ul>
<li><strong>Observation:</strong> All strains showed gradual biofilm degradation over time, with enhanced activity after IPTG induction.</li>
</ul>
     </div>
    `
  },
  {
    title: 'Week 9(8/18-8//24)',
    html: `
     <div class = "note-block panel-htm text-content">
     <h2><strong>Strain Construction</strong></h2>
<h3><strong>BL21(DE3) Infection with Lambda cI857</strong></h3>
<ul>
<li>Colonies that grew at 30°C but not at 43°C were streaked onto fresh LB plates for further use.</li>
<li>These strains were then used for transformation with plasmids:
<ul>
<li><strong>pet28a-DspB → BL21(DE3)</strong></li>
<li><strong>pet28a-DNaseI → BL21(DE3)</strong></li>
<li><strong>T7 GFP → BL21(DE3)</strong></li>
</ul>
</li>
<li>Additionally, transformations were performed on <strong>BL21(DE3) with lambda c1857(3)</strong>:
<ul>
<li><strong>pet28a-DspB → BL21(DE3) lambda c1857(3)</strong></li>
<li><strong>pet28a-DNaseI → BL21(DE3) lambda c1857(3)</strong></li>
<li><strong>T7 GFP → BL21(DE3) lambda c1857(3)</strong></li>
</ul>
</li>
<li><strong>Notes:</strong>
<ul>
<li>BL21 lambda c1857 growth curve at 43°C was also tested.</li>
</ul>
</li>
</ul>
<p><img src="attachment:42a58d8c-224f-492c-9506-398e578ea839:image.png" alt="image.png"></p>
<h2><strong>Biofilm Degradation Assays</strong></h2>
<h3><strong>Preculture</strong></h3>
<ul>
<li><strong>Strains:</strong>
<ul>
<li>DspB in BL21(DE3) lambda c1857</li>
<li>DNase I in BL21(DE3) lambda c1857</li>
<li>Proteinase K (ProK) in MG1655 lambda c1857</li>
</ul>
</li>
<li><strong>Substrate:</strong> <em>S. aureus</em> biofilm in 96-well microplates</li>
</ul>
<h3><strong>OD600 Measurements</strong></h3>
<h3><strong>Subculture (3–9 hours, after IPTG induction)</strong></h3>
<table>
<thead>
<tr>
<th>Strain</th>
<th>3 hrs</th>
<th>4 hrs</th>
<th>5 hrs</th>
<th>9 hrs (after 4 hrs IPTG induction)</th>
</tr>
</thead>
<tbody>
<tr>
<td>DspB in BL21(DE3) lambda c1857</td>
<td>0.242</td>
<td>0.343</td>
<td>0.492</td>
<td>1.057</td>
</tr>
<tr>
<td>DNase I in BL21(DE3) lambda c1857</td>
<td>0</td>
<td>0.015</td>
<td>0.012</td>
<td>0</td>
</tr>
<tr>
<td>ProK in MG1655 lambda c1857</td>
<td>0.25</td>
<td>0.359</td>
<td>0.543</td>
<td>1.09</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Note: DNase I did not grow well in either overnight culture or subculture, so only DspB and Proteinase K were used for subsequent biofilm degradation experiments.</p>
</blockquote>
<h3><strong>Extended Biofilm Degradation (3–8 hours, after IPTG induction)</strong></h3>
<table>
<thead>
<tr>
<th>Strain</th>
<th>3 hrs</th>
<th>4 hrs</th>
<th>7 hrs (after 4 hrs IPTG induction)</th>
<th>8 hrs (after 4 hrs IPTG induction)</th>
</tr>
</thead>
<tbody>
<tr>
<td>DspB in BL21(DE3) lambda c1857</td>
<td>0.323</td>
<td>0.586</td>
<td>1.078</td>
<td>1.155</td>
</tr>
<tr>
<td>DNase I in BL21(DE3) lambda c1857</td>
<td>0.012</td>
<td>0.013</td>
<td>0.02</td>
<td>0.026</td>
</tr>
<tr>
<td>ProK in MG1655 lambda c1857</td>
<td>0.32</td>
<td>0.587</td>
<td>0.937</td>
<td>1.053</td>
</tr>
</tbody>
</table>
<h3><strong>Biofilm Degradation at 43°C (4–8 hours, after IPTG induction)</strong></h3>
<table>
<thead>
<tr>
<th>Strain</th>
<th>4 hrs</th>
<th>8 hrs (after 4 hrs IPTG induction)</th>
</tr>
</thead>
<tbody>
<tr>
<td>DspB in BL21(DE3) lambda c1857</td>
<td>0.201</td>
<td>1.152</td>
</tr>
<tr>
<td>DNase I in BL21(DE3) lambda c1857</td>
<td>0.039</td>
<td>0</td>
</tr>
<tr>
<td>ProK in MG1655 lambda c1857</td>
<td>0.225</td>
<td>1.158</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Note: Only DspB and Proteinase K were used for biofilm degradation due to poor DNase I growth.</p>
</blockquote>
     </div>
    `
  },
  {
    title: 'Week 10(8/25-8/31)',
    html: `
     <div class = "note-block panel-htm text-content">
     <h2><strong>Strain Construction</strong></h2>
<h3><strong>Preculture</strong></h3>
<ul>
<li><strong>Strains:</strong>
<ul>
<li><em>S. aureus</em></li>
<li>DspB in BL21(DE3) lambda c1857</li>
<li>DNase I in BL21(DE3) lambda c1857 (+0.2% glucose added to improve growth)</li>
<li>Proteinase K (ProK) in MG1655 lambda c1857</li>
<li>BL21(DE3) lambda c1857</li>
</ul>
</li>
<li><strong>Plasmids for Transformation:</strong>
<ul>
<li>pet28a-DspB → BL21(DE3) lambda c1857(2, 4, 6)</li>
<li>pet28a-DNaseI → BL21(DE3) lambda c1857(2, 4, 6)</li>
<li>T7 GFP → BL21(DE3) lambda c1857(2, 4, 6)</li>
</ul>
</li>
</ul>
<h2><strong>Biofilm Degradation Assays</strong></h2>
<h3><strong>Subculture OD600 Measurements</strong></h3>
<h3><strong>4–8 Hours (after 4 hours of IPTG induction)</strong></h3>
<table>
<thead>
<tr>
<th>Strain</th>
<th>4 hrs</th>
<th>8 hrs</th>
</tr>
</thead>
<tbody>
<tr>
<td>DspB in BL21(DE3) lambda c1857</td>
<td>0.494</td>
<td>1.397</td>
</tr>
<tr>
<td>DNase I in BL21(DE3) lambda c1857</td>
<td>0.081</td>
<td>0.155</td>
</tr>
<tr>
<td>ProK in MG1655 lambda c1857</td>
<td>0.636</td>
<td>1.146</td>
</tr>
</tbody>
</table>
<blockquote>
<p>DNase I showed poor growth; glucose supplementation was suggested.</p>
</blockquote>
<h3><strong>6–10 Hours (after 4 hours of IPTG induction)</strong></h3>
<table>
<thead>
<tr>
<th>Strain</th>
<th>6 hrs</th>
<th>10 hrs</th>
</tr>
</thead>
<tbody>
<tr>
<td>DspB in BL21(DE3) lambda c1857</td>
<td>0.765</td>
<td>1.68</td>
</tr>
<tr>
<td>DNase I in BL21(DE3) lambda c1857</td>
<td>0.288</td>
<td>0.474</td>
</tr>
<tr>
<td>ProK in MG1655 lambda c1857</td>
<td>0.694</td>
<td>1.501</td>
</tr>
<tr>
<td>BL21(DE3) lambda c1857</td>
<td>0.774</td>
<td>1.624</td>
</tr>
</tbody>
</table>
<blockquote>
<p>DNase I growth improved slightly with glucose addition, but OD remained lower than other strains.</p>
</blockquote>
<h3><strong>8 Hours (after 4 hours of IPTG induction)</strong></h3>
<table>
<thead>
<tr>
<th>Strain</th>
<th>8 hrs</th>
</tr>
</thead>
<tbody>
<tr>
<td>DspB in BL21(DE3) lambda c1857</td>
<td>1.468</td>
</tr>
<tr>
<td>ProK in MG1655 lambda c1857</td>
<td>1.361</td>
</tr>
<tr>
<td>BL21(DE3) lambda c1857</td>
<td>1.485</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Absorbance for DNase I was too low to record.</p>
</blockquote>
<h2><strong>PCR for Verification of Lambda c1857 and T7 Sequences in BL21</strong></h2>
<h3><strong>T7RNAP Sequence PCR</strong></h3>
<ul>
<li><strong>Templates:</strong> BL21(DE3) with lambda c1857(1–6), BL21(DE3), MG1655 lambda c1857</li>
<li><strong>Enzyme:</strong> Taq</li>
<li><strong>Primers:</strong> T7RNAP3 / 141-20</li>
<li><strong>Total Volume:</strong> 10 µL</li>
<li><strong>Annealing Temperature:</strong> 72°C</li>
</ul>
<table>
<thead>
<tr>
<th>Component</th>
<th>Volume (µL)</th>
<th>PCR Conditions</th>
</tr>
</thead>
<tbody>
<tr>
<td>MQ</td>
<td>1.1</td>
<td>94°C 5 min</td>
</tr>
<tr>
<td>Buffer</td>
<td>1</td>
<td>94°C 30 sec</td>
</tr>
<tr>
<td>dNTP</td>
<td>0.8</td>
<td>55°C 30 sec</td>
</tr>
<tr>
<td>Primer F</td>
<td>1</td>
<td>72°C 4 min</td>
</tr>
<tr>
<td>Primer R</td>
<td>1</td>
<td>72°C 5 min</td>
</tr>
<tr>
<td>Enzyme</td>
<td>0.1</td>
<td>15°C hold</td>
</tr>
<tr>
<td>Template</td>
<td>5</td>
<td>—</td>
</tr>
</tbody>
</table>
<h3><strong>Lambda c1857 Sequence PCR</strong></h3>
<ul>
<li><strong>Templates:</strong> Same as above</li>
<li><strong>Primers:</strong> lambda10 / lambda11</li>
<li><strong>Total Volume:</strong> 10 µL</li>
<li><strong>Annealing Temperature:</strong> 72°C</li>
</ul>
<table>
<thead>
<tr>
<th>Component</th>
<th>Volume (µL)</th>
<th>PCR Conditions</th>
</tr>
</thead>
<tbody>
<tr>
<td>MQ</td>
<td>1.1</td>
<td>94°C 5 min</td>
</tr>
<tr>
<td>Buffer</td>
<td>1</td>
<td>94°C 30 sec</td>
</tr>
<tr>
<td>dNTP</td>
<td>0.8</td>
<td>55°C 30 sec</td>
</tr>
<tr>
<td>Primer F</td>
<td>1</td>
<td>72°C 1 min</td>
</tr>
<tr>
<td>Primer R</td>
<td>1</td>
<td>72°C 5 min</td>
</tr>
<tr>
<td>Enzyme</td>
<td>0.1</td>
<td>15°C hold</td>
</tr>
<tr>
<td>Template</td>
<td>5</td>
<td>—</td>
</tr>
</tbody>
</table>
<h3><strong>Notes</strong></h3>
<ul>
<li>Only <strong>DspB and Proteinase K</strong> were consistently used in biofilm degradation experiments due to poor DNase I growth.</li>
<li>Biofilms were grown in <strong>96-well microplates</strong> for all OD600 measurements.</li>
<li>IPTG induction was applied 4 hours prior to the measured time points for degradation activity.</li>
</ul>
     </div>
    `
  },
  {
    title: 'Week 11(9/1-9/7)',
    html: `
     <div class = "note-block panel-htm text-content">
     <h2><strong>Strain Construction</strong></h2>
<h3><strong>1. Culture</strong></h3>
<ul>
<li><strong>Strain:</strong> BL21(DE3) transformed with T7 GFP plasmid + maltose supplementation.</li>
<li><strong>PCR Check</strong></li>
</ul>
<p><img src="attachment:da66efe3-b291-4096-bd70-7f9b82cc175d:Screenshot_2025-10-05_at_8.11.25_PM.png" alt="Screenshot 2025-10-05 at 8.11.25 PM.png"></p>
<h3><strong>2. Biofilm Degradation Assay</strong></h3>
<h3><strong>Subculture OD600 Measurements</strong></h3>
<table>
<thead>
<tr>
<th>Strain</th>
<th>4 hrs</th>
<th>8 hrs (after 4 hrs IPTG induction)</th>
</tr>
</thead>
<tbody>
<tr>
<td>DspB in BL21(DE3) lambda c1857</td>
<td>0.408</td>
<td>1.528</td>
</tr>
<tr>
<td>DNase I in BL21(DE3) lambda c1857</td>
<td>0.183</td>
<td>0.298</td>
</tr>
<tr>
<td>ProK in MG1655 lambda c1857</td>
<td>0.459</td>
<td>1.351</td>
</tr>
<tr>
<td>BL21(DE3) lambda c1857</td>
<td>0.445</td>
<td>1.551</td>
</tr>
</tbody>
</table>
<ul>
<li><strong>Extended timepoints:</strong> 12, 24, 36 hrs</li>
<li><strong>Observation:</strong> The enzymes showed minimal biofilm degradation activity over this period.</li>
</ul>
<h3><strong>3. Phage Infection with lambda cI857</strong></h3>
<ul>
<li>
<p><strong>Host:</strong> BL21(DE3) carrying T7 GFP plasmid</p>
</li>
<li>
<p><strong>Phage:</strong> lambda c1857 MG1655 (box1-74)</p>
</li>
<li>
<p><strong>Procedure:</strong></p>
<ul>
<li>Infected the center region of a plate with lambda cI857; streaked uninfected regions on the side for comparison.</li>
<li>Fluorescence was monitored after streaking onto fresh LB plates.</li>
</ul>
</li>
<li>
<p><strong>Observation:</strong></p>
<ul>
<li>The infected (center) region <strong>showed no fluorescence</strong>.</li>
<li>The uninfected (side) region <strong>displayed normal fluorescence</strong>.</li>
</ul>
</li>
<li>
<p><strong>Conclusion:</strong></p>
<p>Infection with lambda cI857 may <strong>interfere with the T7 system</strong> in the original DE3 fragment, potentially causing loss of T7 function or elimination of the plasmid expression.</p>
</li>
</ul>
<p><img src="attachment:cb3eee69-a94f-4aac-894b-98c5441ca003:67f21e21-d4b8-4e4c-a2fd-7c709ea3eaf1.png" alt="image.png"></p>
<p><img src="attachment:d80f6f9f-1010-4a07-a34c-1dd8d6d98de8:image.png" alt="image.png"></p>
     </div>
    `
  },
  {
    title: 'Week 12(9/8-9/14)',
    html: `
     <div class = "note-block panel-htm text-content">
     <h2><strong>Strain Construction</strong></h2>
<h3><strong>1. PCR for T7 RNAP (Overlapping)</strong></h3>
<p><strong>Templates:</strong> BL21(DE3)</p>
<p><strong>Enzymes:</strong> Taq or KOD polymerase (Masa suggested using KOD)</p>
<p><strong>Primers:</strong> 180-1 / T7RNAP-3 or 180-1 / T7RNAP-2</p>
<p><strong>Total volume:</strong> 10 µL</p>
<p><strong>Taq polymerase protocol:</strong></p>
<table>
<thead>
<tr>
<th>Component</th>
<th>Volume (µL)</th>
<th>PCR Step</th>
<th>Temp / Time</th>
</tr>
</thead>
<tbody>
<tr>
<td>MQ water</td>
<td>1.1</td>
<td>Initial denaturation</td>
<td>94℃, 5 min</td>
</tr>
<tr>
<td>Buffer</td>
<td>1</td>
<td>Denaturation</td>
<td>94℃, 30 sec</td>
</tr>
<tr>
<td>dNTP</td>
<td>0.8</td>
<td>Annealing</td>
<td>55℃, 30 sec</td>
</tr>
<tr>
<td>Primer F</td>
<td>1</td>
<td>Extension</td>
<td>72℃, 5 min 30 sec</td>
</tr>
<tr>
<td>Primer R</td>
<td>1</td>
<td>Extension</td>
<td>72℃, 7 min</td>
</tr>
<tr>
<td>Enzyme</td>
<td>0.1</td>
<td>Final hold</td>
<td>15℃</td>
</tr>
<tr>
<td>Template</td>
<td>5</td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<p><strong>KOD polymerase protocol (recommended):</strong></p>
<table>
<thead>
<tr>
<th>Component</th>
<th>Volume (µL)</th>
<th>PCR Step</th>
<th>Temp / Time</th>
</tr>
</thead>
<tbody>
<tr>
<td>MQ water</td>
<td>0–0.2</td>
<td>Initial denaturation</td>
<td>94℃, 2 min</td>
</tr>
<tr>
<td>Buffer</td>
<td>5</td>
<td>Denaturation</td>
<td>98℃, 10 sec</td>
</tr>
<tr>
<td>dNTP</td>
<td>2</td>
<td>Annealing</td>
<td>55℃, 30 sec</td>
</tr>
<tr>
<td>Primer F</td>
<td>0.3</td>
<td>Extension</td>
<td>68℃, 5 min 30 sec</td>
</tr>
<tr>
<td>Primer R</td>
<td>0.3</td>
<td>Extension</td>
<td>68℃, 7 min</td>
</tr>
<tr>
<td>Enzyme</td>
<td>0.2</td>
<td>Final hold</td>
<td>15℃</td>
</tr>
<tr>
<td>Template</td>
<td>2.2</td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<p><img src="attachment:ea1618eb-cf1d-4c37-a747-bef9c6e8775a:image.png" alt="image.png"></p>
<h3><strong>2. PCR for Cm Fragment</strong></h3>
<p><strong>Template:</strong> 1/1000x pACYC184</p>
<p><strong>Enzyme:</strong> Taq or KOD</p>
<p><strong>Primers:</strong> CmC(JK) / CmN-H</p>
<p><strong>Total volume:</strong> 10 µL</p>
<p><strong>PCR Conditions:</strong></p>
<table>
<thead>
<tr>
<th>Component</th>
<th>Volume (µL)</th>
<th>Step</th>
<th>Temp / Time</th>
</tr>
</thead>
<tbody>
<tr>
<td>MQ water</td>
<td>1.1</td>
<td>Initial denaturation</td>
<td>94℃, 2 min</td>
</tr>
<tr>
<td>Buffer</td>
<td>1</td>
<td>Denaturation</td>
<td>94℃, 30 sec</td>
</tr>
<tr>
<td>dNTP</td>
<td>0.8</td>
<td>Annealing</td>
<td>55℃, 30 sec</td>
</tr>
<tr>
<td>Primer F</td>
<td>1</td>
<td>Extension</td>
<td>72℃, 1 min</td>
</tr>
<tr>
<td>Primer R</td>
<td>1</td>
<td>Extension</td>
<td>72℃, 3 min</td>
</tr>
<tr>
<td>Enzyme</td>
<td>0.1</td>
<td>Final hold</td>
<td>15℃</td>
</tr>
<tr>
<td>Template</td>
<td>5</td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<p><strong>Observation:</strong> Gel showed that Cm fragment concentration is approximately 5× higher than T7 RNAP fragment.</p>
<p><img src="attachment:e4b344dd-c2fa-46ba-b52c-d3bbf48c34fb:Screenshot_2025-10-05_at_8.16.28_PM.png" alt="Screenshot 2025-10-05 at 8.16.28 PM.png"></p>
<p><img src="attachment:3dcbf5dd-9421-4058-b985-e2460fd8d56e:image.png" alt="image.png"></p>
<h3><strong>3. Gel Extraction</strong></h3>
<ul>
<li>Extracted PCR fragments (T7 RNAP and Cm) to purify products before overlapping PCR.</li>
</ul>
<h3>4. Overlapping PCR (T7 RNAP + Cm)</h3>
<p><strong>Templates (ratio variations):</strong></p>
<ol>
<li>1× T7 + 5× Cm</li>
<li>5× T7 + 25× Cm</li>
<li>10× T7 + 50× Cm</li>
</ol>
<p><strong>Enzyme:</strong> KOD polymerase</p>
<p><strong>Primers:</strong> 180-1 / CmN-H</p>
<p><strong>Total volume:</strong> 10 µL</p>
<p><strong>Annealing temperature:</strong> 68℃</p>
<table>
<thead>
<tr>
<th>Component</th>
<th>Volume (µL)</th>
<th>Step</th>
<th>Temp / Time</th>
</tr>
</thead>
<tbody>
<tr>
<td>MQ water</td>
<td>0.2</td>
<td>Initial denaturation</td>
<td>94℃, 2 min</td>
</tr>
<tr>
<td>Buffer</td>
<td>5</td>
<td>Denaturation</td>
<td>98℃, 10 sec</td>
</tr>
<tr>
<td>dNTP</td>
<td>2</td>
<td>Annealing</td>
<td>55℃, 30 sec</td>
</tr>
<tr>
<td>Primer F</td>
<td>0.3</td>
<td>Extension</td>
<td>68℃, 6 min 30 sec</td>
</tr>
<tr>
<td>Primer R</td>
<td>0.3</td>
<td>Extension</td>
<td>68℃, 7 min</td>
</tr>
<tr>
<td>Enzyme</td>
<td>0.2</td>
<td>Final hold</td>
<td>15℃</td>
</tr>
<tr>
<td>Template</td>
<td>1+1</td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<p><img src="attachment:1430be32-52be-46be-aa56-cbc1e5265b96:image.png" alt="image.png"></p>
<p><img src="attachment:0711e7cf-1bf4-463b-9100-f14c51c7d7d9:Screenshot_2025-10-05_at_8.20.37_PM.png" alt="Screenshot 2025-10-05 at 8.20.37 PM.png"></p>
<h3><strong>5. Pre-Culture and Plasmid Work</strong></h3>
<ol>
<li><strong>Pre-culture:</strong> TOP10 / pCL1920 overlapping PCR product for T7 RNAP + Cm.</li>
<li><strong>Plasmid Extraction:</strong> nautiaZ plasmid DNA extraction from PCL1920.</li>
<li><strong>Concentration:</strong> Ethanol precipitation to concentrate plasmid extraction product.</li>
</ol>
     </div>
    `
  },
  {
    title: 'Week13(9/15-9/21)',
    html: `
     <div class = "note-block panel-htm text-content">
     <h2><strong>Strain Construction</strong></h2>
<h3><strong>1. Pre-Culture</strong></h3>
<ul>
<li>Strain: TOP10</li>
</ul>
<h3><strong>2. Digestion</strong></h3>
<table>
<thead>
<tr>
<th>Plasmid</th>
<th>Restriction Enzymes</th>
</tr>
</thead>
<tbody>
<tr>
<td>pCL1920</td>
<td>PstI-HF, SalI</td>
</tr>
<tr>
<td>T7RNAPS</td>
<td>PstI-HF, SalI</td>
</tr>
</tbody>
</table>
<p><strong>Notes:</strong></p>
<ul>
<li>
<p>PstI-HF and SalI require different buffers; therefore, digestion was performed sequentially:</p>
<ol>
<li>First, digest with PstI-HF.</li>
<li>Then, add SalI and its corresponding buffer.</li>
<li>Adjust final volume with nuclease-free water to 60 µL.</li>
</ol>
<p><img src="attachment:ab4d4fd8-af99-44bf-8a69-08a98f6c6baf:image.png" alt="image.png"></p>
<p><img src="attachment:9069681d-f3dd-4495-a3d6-52d2ae7745e0:image.png" alt="image.png"></p>
</li>
</ul>
<h3><strong>3. Ligation</strong></h3>
<ul>
<li>Ligation reaction: pCL1920 + T7RNAPS</li>
</ul>
<p><strong>Notes:</strong></p>
<ul>
<li>Ligation initially failed, but this is expected because digestion and ligation outcomes differ inherently.</li>
</ul>
<p><img src="attachment:a46d17b7-6b15-43c8-8a2e-3d344fdf1757:image.png" alt="image.png"></p>
<p><img src="attachment:24f3dc61-aee9-408a-ab2e-12b7bbb0797a:Screenshot_2025-10-05_at_8.34.15_PM.png" alt="Screenshot 2025-10-05 at 8.34.15 PM.png"></p>
<h3><strong>4. Transformation</strong></h3>
<ul>
<li><strong>T7-GFP → TOP10</strong></li>
<li><strong>T7RNAP → TOP10 / pT7GFP</strong></li>
<li><strong>DspB → BL21(DE3) / pLys</strong></li>
<li><strong>DNase I → BL21(DE3) / pLys</strong></li>
<li><strong>Proteinase K → BL21(DE3) / pLys</strong></li>
</ul>
<p><strong>Notes:</strong></p>
<ul>
<li>Digestion conditions were the same as above (PstI-HF and SalI sequential digestion).</li>
</ul>
<h3><strong>5. Pre-Culture / Colony Selection</strong></h3>
<ol>
<li>Pre-culture: TOP10 containing T7-GFP plasmid</li>
<li>From TOP10 / pCL1920 + T7RNAP / T7GFP, pick a single positive colony.</li>
<li>Perform single colony isolation for TOP10 / pCL1920 / T7RNAP + T7GFP.</li>
<li>Mini-prep to extract T7RNAP plasmid.</li>
</ol>
<h3><strong>6. Transformation into Lambda cI857 Host</strong></h3>
<ul>
<li>Transform pCL1920 / T7RNAP into <strong>BL21(DE3) with lambda cI857</strong></li>
</ul>
     </div>
    `
  },
  {
    title: 'Week14(9/22-9/28)',
    html: `
     <div class = "note-block panel-htm text-content">
     <h2><strong>Strain Construction</strong></h2>
<h3><strong>1. Miniprep</strong></h3>
<ul>
<li>Plasmid: pCL1920-T7RNAP</li>
</ul>
<h3><strong>2. Transformation</strong></h3>
<table>
<thead>
<tr>
<th>Plasmid</th>
<th>Host Strain</th>
</tr>
</thead>
<tbody>
<tr>
<td>pet28a-DspB</td>
<td>BL21(DE3) / pLys</td>
</tr>
<tr>
<td>pet28a-DNase I</td>
<td>BL21(DE3) / pLys</td>
</tr>
<tr>
<td>pTrc99a-Pro k</td>
<td>BL21(DE3) / pLys</td>
</tr>
<tr>
<td>pet28c</td>
<td>BL21(DE3) / pLys</td>
</tr>
<tr>
<td>pCL1920-T7RNAP</td>
<td>MG1655 lambda c1857</td>
</tr>
<tr>
<td>pet28a-DspB + pCL1920-T7RNAP</td>
<td>MG1655 lambda c1857</td>
</tr>
<tr>
<td>pet28a-DNase I + pCL1920-T7RNAP</td>
<td>MG1655 lambda c1857</td>
</tr>
<tr>
<td>pet28c + pCL1920-T7RNAP</td>
<td>MG1655 lambda c1857</td>
</tr>
</tbody>
</table>
<h3><strong>3. Pre-Culture</strong></h3>
<ul>
<li>Strains:
<ul>
<li><em>S. aureus</em></li>
<li>TOP10 / pCL1920-T7RNAP + pGFP</li>
<li>MG1655 lambda c1857</li>
<li>BL21(DE3) / pLys</li>
</ul>
</li>
<li>Purpose: prepare cells for biofilm degradation assays and SDS-PAGE sample collection.</li>
</ul>
<p><img src="attachment:832b3baf-4d48-4d58-9f93-e122030e8270:image.png" alt="image.png"></p>
<h2><strong>Biofilm Degradation</strong></h2>
<h3><strong>1. Subculture</strong></h3>
<table>
<thead>
<tr>
<th>Strain</th>
<th>5 hrs</th>
<th>8 hrs (after 3 hrs of IPTG induction)</th>
</tr>
</thead>
<tbody>
<tr>
<td>DspB in MG1655 lambda c1857</td>
<td>1.176</td>
<td>1.708</td>
</tr>
<tr>
<td>DNase I in MG1655 lambda c1857</td>
<td>0.944</td>
<td>1.053</td>
</tr>
<tr>
<td>Proteinase K in MG1655 lambda c1857</td>
<td>1.242</td>
<td>1.719</td>
</tr>
<tr>
<td>MG1655 lambda c1857 (control)</td>
<td>1.099</td>
<td>1.639</td>
</tr>
</tbody>
</table>
<p><strong>Notes:</strong></p>
<ul>
<li>The OD600 measurements indicate biofilm growth and degradation efficiency after IPTG induction.</li>
<li>DspB and Proteinase K showed higher biofilm degradation compared to DNase I under these conditions.</li>
</ul>
     </div>
    `
  },
  {
    title: 'Week 15(9/29-10/6)',
    html: `
     <div class = "note-block panel-htm text-content">
     <h2><strong>Strain Construction</strong></h2>
<table>
<thead>
<tr>
<th>Plasmid</th>
<th>Host Strain</th>
</tr>
</thead>
<tbody>
<tr>
<td>pet28a-DspB</td>
<td>BL21(DE3) / pLys</td>
</tr>
<tr>
<td>pet28a-DNase I</td>
<td>BL21(DE3) / pLys</td>
</tr>
<tr>
<td>pTrc99a-Pro k</td>
<td>BL21(DE3) / pLys</td>
</tr>
<tr>
<td>pet28c</td>
<td>BL21(DE3) / pLys</td>
</tr>
</tbody>
</table>
<hr>
<h2><strong>Biofilm Degradation Experiments</strong></h2>
<h3><strong>1. Subculture – Experiment 1</strong></h3>
<table>
<thead>
<tr>
<th>Strain</th>
<th>5 hrs</th>
<th>8 hrs (after 3 hrs of IPTG induction)</th>
</tr>
</thead>
<tbody>
<tr>
<td>DspB in MG1655 lambda c1857</td>
<td>0.994</td>
<td>1.506</td>
</tr>
<tr>
<td>DNase I in MG1655 lambda c1857</td>
<td>0.584</td>
<td>0.875</td>
</tr>
<tr>
<td>Proteinase K in MG1655 lambda c1857</td>
<td>1.071</td>
<td>1.543</td>
</tr>
<tr>
<td>MG1655 lambda c1857 (control)</td>
<td>0.98</td>
<td>1.526</td>
</tr>
</tbody>
</table>
<hr>
<h3><strong>2. Subculture – Experiment 2</strong></h3>
<table>
<thead>
<tr>
<th>Strain</th>
<th>5 hrs</th>
<th>8 hrs (after 3 hrs of IPTG induction)</th>
</tr>
</thead>
<tbody>
<tr>
<td>DspB in MG1655 lambda c1857</td>
<td>0.747</td>
<td>1.094</td>
</tr>
<tr>
<td>DNase I in MG1655 lambda c1857</td>
<td>0.560</td>
<td>0.587</td>
</tr>
<tr>
<td>Proteinase K in MG1655 lambda c1857</td>
<td>0.750</td>
<td>1.114</td>
</tr>
<tr>
<td>MG1655 lambda c1857 (control)</td>
<td>0.690</td>
<td>1.045</td>
</tr>
</tbody>
</table>
<hr>
<h3><strong>3. Subculture – Experiment 3</strong></h3>
<table>
<thead>
<tr>
<th>Strain</th>
<th>5 hrs</th>
<th>8 hrs (after 3 hrs of IPTG induction)</th>
</tr>
</thead>
<tbody>
<tr>
<td>DspB in MG1655 lambda c1857</td>
<td>1.168</td>
<td>1.280</td>
</tr>
<tr>
<td>DNase I in MG1655 lambda c1857</td>
<td>1.170</td>
<td>1.130</td>
</tr>
<tr>
<td>Proteinase K in MG1655 lambda c1857</td>
<td>1.260</td>
<td>1.490</td>
</tr>
<tr>
<td>MG1655 lambda c1857 (control)</td>
<td>1.170</td>
<td>1.463</td>
</tr>
</tbody>
</table>
<hr>
<h3><strong>4. Subculture – Experiment 4</strong></h3>
<table>
<thead>
<tr>
<th>Strain</th>
<th>5 hrs</th>
<th>8 hrs (after 3 hrs of IPTG induction)</th>
</tr>
</thead>
<tbody>
<tr>
<td>DspB in MG1655 lambda c1857</td>
<td>0.934</td>
<td>1.510</td>
</tr>
<tr>
<td>DNase I in MG1655 lambda c1857</td>
<td>0.939</td>
<td>1.220</td>
</tr>
<tr>
<td>Proteinase K in MG1655 lambda c1857</td>
<td>0.935</td>
<td>1.640</td>
</tr>
<tr>
<td>MG1655 lambda c1857 (control)</td>
<td>0.980</td>
<td>1.680</td>
</tr>
</tbody>
</table>
<hr>
<h3><strong>5. Subculture – Experiment 5</strong></h3>
<table>
<thead>
<tr>
<th>Strain</th>
<th>5 hrs</th>
<th>8 hrs (after 3 hrs of IPTG induction)</th>
</tr>
</thead>
<tbody>
<tr>
<td>DspB in MG1655 lambda c1857</td>
<td>1.104</td>
<td>1.193</td>
</tr>
<tr>
<td>DNase I in MG1655 lambda c1857</td>
<td>1.224</td>
<td>1.151</td>
</tr>
<tr>
<td>Proteinase K in MG1655 lambda c1857</td>
<td>1.156</td>
<td>1.162</td>
</tr>
<tr>
<td>MG1655 lambda c1857 (control)</td>
<td>1.144</td>
<td>1.175</td>
</tr>
</tbody>
</table>
<hr>
<h3><strong>6. Subculture – Experiment 6</strong></h3>
<table>
<thead>
<tr>
<th>Strain</th>
<th>5 hrs</th>
<th>8 hrs (after 3 hrs of IPTG induction)</th>
</tr>
</thead>
<tbody>
<tr>
<td>DspB in MG1655 lambda c1857</td>
<td>0.804</td>
<td>1.402</td>
</tr>
<tr>
<td>DNase I in MG1655 lambda c1857</td>
<td>0.755</td>
<td>1.459</td>
</tr>
<tr>
<td>Proteinase K in MG1655 lambda c1857</td>
<td>0.727</td>
<td>1.475</td>
</tr>
<tr>
<td>MG1655 lambda c1857 (control)</td>
<td>0.740</td>
<td>1.413</td>
</tr>
</tbody>
</table>
<hr>
<h3><strong>7. Subculture – Experiment 7</strong></h3>
<table>
<thead>
<tr>
<th>Strain</th>
<th>0 hr</th>
<th>8 hrs (after 3 hrs of IPTG induction)</th>
</tr>
</thead>
<tbody>
<tr>
<td>DspB in MG1655 lambda c1857</td>
<td>0.857</td>
<td>1.286</td>
</tr>
<tr>
<td>DNase I in MG1655 lambda c1857</td>
<td>0.602</td>
<td>1.311</td>
</tr>
<tr>
<td>Proteinase K in MG1655 lambda c1857</td>
<td>0.859</td>
<td>1.309</td>
</tr>
<tr>
<td>MG1655 lambda c1857 (control)</td>
<td>0.812</td>
<td>1.326</td>
</tr>
</tbody>
</table>
<hr>
<p><strong>Notes:</strong></p>
<ul>
<li>All experiments include calibration of enzyme activity at <strong>40°C</strong> and growth curves at <strong>43°C</strong>.</li>
<li>IPTG induction was performed for 3 hours before measuring the OD600 for biofilm degradation efficiency.</li>
<li>DspB and Proteinase K consistently showed stronger biofilm degradation than DNase I under these conditions.</li>
</ul>
<p><img src="attachment:f976b5b1-437f-4581-bc38-64105c50acc3:image.png" alt="image.png"></p>
<p><img src="attachment:9ec3e377-ecab-4d3d-bf89-379811a45115:image.png" alt="image.png"></p>
<p><img src="attachment:166b4079-52bb-4215-9ada-c9acdd040636:image.png" alt="image.png"></p>
<p><img src="attachment:483e429b-5ef4-4f9e-ae82-7b7cb8ca084f:image.png" alt="image.png"></p>
     </div>
    `
  }
]
