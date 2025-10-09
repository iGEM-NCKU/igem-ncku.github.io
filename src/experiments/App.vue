<template>
    <v-app>
        <page_loader :loading = 'loading' />
        <title_nav />
        <v-main>
        <sidenav name = 'experiments' />
            <v-row justify = end>
            <v-col cols = 12 md = 9 class = 'pa-5'>
                <v-img style="margin-bottom: -5%; margin-top: -5%; size: 60%;" src = "https://static.igem.wiki/teams/6003/title/2.avif"/>
                <v-card :variant="alpha.card.theme" class="text-box pa-5 scroll-box scroller" id = Protocol>
                <v-toolbar color="primary">
                    <v-card-title style="font-size: 32px;"><b>Protocol</b></v-card-title>
                </v-toolbar>

                <div class="d-flex flex-row">
                <v-tabs
                    v-model="tab"
                    color="primary"
                    direction="vertical"
                >
                    <v-tab  :prepend-icon = 'tab == "Miniprep" ? `fa-duotone fa-regular fa-file fa-beat-fade` : `fa-duotone fa-regular fa-file`' text="Miniprep" value="Miniprep"></v-tab>
                    <v-tab  :prepend-icon = 'tab == "Agarose Gel Preparation" ? `fa-duotone fa-regular fa-file fa-beat-fade` : `fa-duotone fa-regular fa-file`' text="Agarose Gel Preparation" value="Agarose Gel Preparation"></v-tab>
                    <v-tab  :prepend-icon = 'tab == "Electrophoresis" ? `fa-duotone fa-regular fa-file fa-beat-fade` : `fa-duotone fa-regular fa-file`' text="Electrophoresis" value="Electrophoresis"></v-tab>
                    <v-tab  :prepend-icon = 'tab == "PCR" ? `fa-duotone fa-regular fa-file fa-beat-fade` : `fa-duotone fa-regular fa-file`' text="PCR" value="PCR"></v-tab>
                    <v-tab  :prepend-icon = 'tab == "PCR purified" ? `fa-duotone fa-regular fa-file fa-beat-fade` : `fa-duotone fa-regular fa-file`' text="PCR purified" value="PCR purified"></v-tab>
                    <v-tab  :prepend-icon = 'tab == "Gel extraction" ? `fa-duotone fa-regular fa-file fa-beat-fade` : `fa-duotone fa-regular fa-file`' text="Gel extraction" value="Gel extraction"></v-tab>
                    <v-tab  :prepend-icon = 'tab == "Digestion" ? `fa-duotone fa-regular fa-file fa-beat-fade` : `fa-duotone fa-regular fa-file`' text="Digestion" value="Digestion"></v-tab>
                    <v-tab  :prepend-icon = 'tab == "EtOH Precipitation" ? `fa-duotone fa-regular fa-file fa-beat-fade` : `fa-duotone fa-regular fa-file`' text="EtOH Precipitation" value="EtOH Precipitation"></v-tab>
                    <v-tab  :prepend-icon = 'tab == "Transformation" ? `fa-duotone fa-regular fa-file fa-beat-fade` : `fa-duotone fa-regular fa-file`' text="Transformation" value="Transformation"></v-tab>
                    <v-tab  :prepend-icon = 'tab == "Ligation" ? `fa-duotone fa-regular fa-file fa-beat-fade` : `fa-duotone fa-regular fa-file`' text="Ligation" value="Ligation"></v-tab>
                    <v-tab  :prepend-icon = 'tab == "SDS-page" ? `fa-duotone fa-regular fa-file fa-beat-fade` : `fa-duotone fa-regular fa-file`' text="SDS-page" value="SDS-page"></v-tab>
                    <v-tab  :prepend-icon = 'tab == "Western blot" ? `fa-duotone fa-regular fa-file fa-beat-fade` : `fa-duotone fa-regular fa-file`' text="Western blot" value="Western blot"></v-tab>
                    <v-tab  :prepend-icon = 'tab == "Red recombination" ? `fa-duotone fa-regular fa-file fa-beat-fade` : `fa-duotone fa-regular fa-file`' text="Red recombination" value="Red recombination"></v-tab>
                    <v-tab  :prepend-icon = 'tab == "P1 preparation" ? `fa-duotone fa-regular fa-file fa-beat-fade` : `fa-duotone fa-regular fa-file`' text="P1 preparation" value="P1 preparation"></v-tab>
                    <v-tab  :prepend-icon = 'tab == "P1 transduction" ? `fa-duotone fa-regular fa-file fa-beat-fade` : `fa-duotone fa-regular fa-file`' text="P1 transduction" value="P1 transduction"></v-tab>
                    <v-tab  :prepend-icon = 'tab == "Lambda phage infection" ? `fa-duotone fa-regular fa-file fa-beat-fade` : `fa-duotone fa-regular fa-file`' text="Lambda phage infection" value="Lambda phage infection"></v-tab>
                    <v-tab  :prepend-icon = 'tab == "NautiaZ plasmid DNA midi" ? `fa-duotone fa-regular fa-file fa-beat-fade` : `fa-duotone fa-regular fa-file`' text="NautiaZ plasmid DNA midi" value="NautiaZ plasmid DNA midi"></v-tab>
                    <v-tab  :prepend-icon = 'tab == "Bioflim formation" ? `fa-duotone fa-regular fa-file fa-beat-fade` : `fa-duotone fa-regular fa-file`' text="Bioflim formation" value="Bioflim formation"></v-tab>
                    <v-tab  :prepend-icon = 'tab == "Bioflim Quantification" ? `fa-duotone fa-regular fa-file fa-beat-fade` : `fa-duotone fa-regular fa-file`' text="Bioflim Quantification" value="Bioflim Quantification"></v-tab>

                </v-tabs>

                <v-tabs-window v-model="tab">
                    <v-tabs-window-item value="Miniprep">
                    <v-card flat>
                        <v-card-text>
                            <h3><strong>Miniprep</strong></h3>
                            <p><strong>Materials and Reagents</strong></p>
                            <ul>
                            <li>• P1 buffer ( containing RNase A)</li>
                            <li>• P2 buffer</li>
                            <li>• P3 buffer</li>
                            <li>• PD buffer</li>
                            <li>• PW buffer ( containing ethanol)</li>
                            <li>• EB buffer</li>
                            <li>• CP3 spin column</li>
                            <li>• Overnight bacterial culture (1.5 mL per centrifugation)</li>
                            <li>• Collection tubes for spin column</li>
                            </ul>
                            <p><strong>1.Centrifugation of Bacterial Culture</strong></p>
                            <p>Transfer 1.5 mL of bacterial culture into an Eppendorf tube and centrifuge it at 12,000 rpm for 1 minute at room temperature. After centrifugation, discard the supernatant. Repeat the process by adding another 1.5 mL of culture to the same tube, centrifuge again under the same conditions, and discard the supernatant.</p>
                            <p><strong>2.Resuspension</strong></p>
                            <p>Add 200 µL of P1 buffer to the bacterial pellet. Resuspend the cells thoroughly by pipetting up and down until no clumps remain, ensuring the pellet is completely dispersed.</p>
                            <p><strong>3.Cell Lysis</strong></p>
                            <p>Add 200 µL of P2 buffer to the resuspended cells. Gently invert the tube ten times to mix and incubate briefly. The incubation should not exceed five minutes, and vortexing must be avoided to prevent shearing of genomic DNA.</p>
                            <p><strong>4.Neutralization</strong></p>
                            <p>Add 300 µL of P3 buffer to the lysate and gently invert the tube ten times to mix. Centrifuge the mixture at 12,000 rpm for 10 minutes to pellet cell debris.</p>
                            <p><strong>5.Spin Column Preparation</strong></p>
                            <p>Place a CP3 spin column into a labeled collection tube, ensuring that the column is securely positioned before transferring the lysate.</p>
                            <p><strong>6.Binding of Plasmid DNA</strong></p>
                            <p>Carefully transfer the supernatant from the previous centrifugation into the prepared spin column. Centrifuge at 12,000 rpm for 1 minute, allowing the plasmid DNA to bind to the column membrane, and discard the flow-through.</p>
                            <p><strong>7.Wash column</strong></p>
                            <p>Add 400 µL of PD buffer to the spin column and centrifuge at 12,000 rpm for 1 minute. Discard the flow-through to remove impurities.</p>
                            <p>Add 700 µL of PW buffer (containing ethanol) to the spin column and centrifuge at 12,000 rpm for 1 minute. Discard the flow-through to further purify the DNA.</p>
                            <p><strong>8.Remove Residual Wash Buffer</strong></p>
                            <p>Centrifuge the spin column at 12,000 rpm for 3 minutes to remove any residual PW buffer and ensure no ethanol remains.</p>
                            <p><strong>9.Elution of Plasmid DNA</strong></p>
                            <p>Place the spin column into a clean 1.5 mL microcentrifuge tube. Add 50 µL of preheated EB buffer directly onto the membrane and incubate for 5 minutes at room temperature. Centrifuge at 12,000 rpm for 2 minutes to elute the purified plasmid DNA.</p>  
                        </v-card-text>
                    </v-card>
                    </v-tabs-window-item>
                    <v-tabs-window-item value="Agarose Gel Preparation">
                    <v-card flat>
                        <v-card-text>
                            <h3><strong>Agarose Gel Preparation</strong></h3>
                            <p><strong>Materials and Reagents</strong></p>
                            <ul>
                            <li>• TBE buffer</li>
                            <li>• Agarose powder</li>
                            <li>• Safe dye</li>
                            </ul>
                            <p><strong>1.Prepare Agarose Solution</strong></p>
                            <p>For a small gel, combine 20 mL of TBE buffer with 0.14 g of agarose. For a large gel, combine 50 mL of TBE buffer with 0.35 g of agarose. Weigh the agarose carefully and add the appropriate volume of TBE buffer into a conical flask.</p>
                            <p><strong>2.Dissolve Agarose</strong></p>
                            <p>Cover the conical flask with plastic wrap and microwave the mixture for 1 minute, or until the agarose is completely dissolved and the solution appears clear.</p>
                            <p><strong>3.Pour Gel</strong></p>
                            <p>Pour the melted agarose solution into the gel tray with combs in place. For the small gel, add 1 µL of Safe Dye; for the large gel, add 2 µL of Safe Dye. Mix gently to ensure the dye is evenly distributed.</p>
                            <p><strong>4.Gel Solidification</strong></p>
                            <p>Allow the gel to solidify at room temperature for at least 30 minutes before use. Once solidified, the gel is ready for loading samples and electrophoresis.</p>
                        </v-card-text>
                    </v-card>
                    </v-tabs-window-item>
                    <v-tabs-window-item value="Electrophoresis">
                    <v-card flat>
                        <v-card-text>
                            <h3><strong>Electrophoresis</strong></h3>
                            <p><strong>Materials and Reagents</strong></p>
                            <ul>
                            <li>• TBE buffer</li>
                            <li>• Agarose gel</li>
                            <li>• 10× DNA loading dye</li>
                            <li>• DNA samples</li>
                            <li>• DNA ladder</li>
                            </ul>
                            <p><strong>1.Set Up Gel in Chamber</strong></p>
                            <p>Place the prepared agarose gel into the electrophoresis chamber and add enough TBE buffer to completely submerge the gel. Ensure that the gel is fully covered to allow proper conduction of the electric current.</p>
                            <p><strong>2.Prepare and Load Samples</strong></p>
                            <p>Spot 1 µL of 10× loading dye onto a clean surface, then add 2 µL of the DNA sample. Mix thoroughly by pipetting to ensure even distribution of the dye. Carefully load the mixture into the designated wells of the gel.</p>
                            <p><strong>3.Load DNA Ladder</strong></p>
                            <p>Load 5 µL of DNA ladder into the last well to serve as a size reference for fragment analysis.</p>
                            <p><strong>4.Run the Gel</strong></p>
                            <p>Close the lid of the electrophoresis chamber and connect the power supply. Run the gel at 100 V for 30 minutes, monitoring occasionally to ensure the dye front moves properly.</p>                        </v-card-text>
                    </v-card>
                    </v-tabs-window-item>
                    <v-tabs-window-item value="PCR">
                    <v-card flat>
                        <v-card-text>
                            <h3><strong>PCR</strong></h3>
                            <p><strong>Materials and Reagents</strong></p>
                            <ul>
                            <li>• MQ water</li>
                            <li>• dNTPs</li>
                            <li>• PCR buffer</li>
                            <li>• Forward primer</li>
                            <li>• Reverse primer</li>
                            <li>• Template DNA</li>
                            <li>• DNA polymerase</li>
                            </ul>
                            <p><strong>1.Thawing Components</strong></p>
                            <p>Thaw all components on ice except for the enzyme. Keep the enzyme in the freezer until immediately before use, as it must remain cold and stable.</p>
                            <p><strong>2.Preparation of Reaction Mix</strong></p>
                            <p>Prepare the PCR reaction mix on ice according to the volumes listed in the table below. Mix primers by spinning them down and pipetting before adding. Add the enzyme last, just before starting the PCR program.</p>
                            <table>
                            <thead>
                            <tr>
                            <th>Component</th>
                            <th>Taq (µL)</th>
                            <th>KOD (µL)</th>
                            <th>Notes</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                            <td>MQ water</td>
                            <td>1.1</td>
                            <td>0</td>
                            <td></td>
                            </tr>
                            <tr>
                            <td>dNTP</td>
                            <td>0.8 (2.5 mM)</td>
                            <td>5 (2 mM)</td>
                            <td></td>
                            </tr>
                            <tr>
                            <td>Buffer</td>
                            <td>1 (10× Buffer)</td>
                            <td>5 (KOD Buffer)</td>
                            <td></td>
                            </tr>
                            <tr>
                            <td>Forward primer</td>
                            <td>1</td>
                            <td>0.3</td>
                            <td>Spin down &amp; pipette mix before adding</td>
                            </tr>
                            <tr>
                            <td>Reverse primer</td>
                            <td>1</td>
                            <td>0.3</td>
                            <td>Spin down &amp; pipette mix before adding</td>
                            </tr>
                            <tr>
                            <td>Template</td>
                            <td>5</td>
                            <td>2.2</td>
                            <td></td>
                            </tr>
                            <tr>
                            <td>Enzyme</td>
                            <td>0.1</td>
                            <td>0.2</td>
                            <td>Add last, keep on ice</td>
                            </tr>
                            <tr>
                            <td><strong>Total volume</strong></td>
                            <td>10</td>
                            <td>10</td>
                            <td></td>
                            </tr>
                            </tbody>
                            </table>
                            <p><strong>3.PCR Machine Setup</strong></p>
                            <p>Set the PCR program according to the enzyme used. For Taq polymerase, use a denaturation temperature of 94 °C, an annealing temperature of 55 °C, and an extension temperature of 72 °C. For KOD polymerase, use 98 °C for denaturation, 55 °C for annealing, and 68 °C for extension. In both cases, run 30 cycles.</p>
                            <table>
                            <thead>
                            <tr>
                            <th>Step</th>
                            <th>Taq</th>
                            <th>KOD</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                            <td>Denaturation temperature</td>
                            <td>94 °C</td>
                            <td>98 °C</td>
                            </tr>
                            <tr>
                            <td>Annealing temperature</td>
                            <td>55 °C</td>
                            <td>55 °C</td>
                            </tr>
                            <tr>
                            <td>Extension temperature</td>
                            <td>72 °C</td>
                            <td>68 °C</td>
                            </tr>
                            <tr>
                            <td>Cycles</td>
                            <td>30</td>
                            <td>30</td>
                            </tr>
                            </tbody>
                            </table>
                            <p><strong>4.Running PCR</strong></p>
                            <p>Preheat the PCR machine to 94 °C before loading. Pause the program, insert the PCR tubes, and resume the program. Allow the machine to run for 30 cycles according to the selected conditions.</p>
                        </v-card-text>
                    </v-card>
                    </v-tabs-window-item>
                    <v-tabs-window-item value="PCR purified">
                    <v-card flat>
                        <v-card-text>
                            <h3><strong>PCR purified</strong></h3>
                            <p><strong>Materials and Reagents</strong></p>
                            <ul>
                            <li>• DS Buffer</li>
                            <li>• DF Column</li>
                            <li>• Wash Buffer</li>
                            <li>• MQ water (preheated 60 °C)</li>
                            <li>• Collection tubes for spin column</li>
                            </ul>
                            <p><strong>1. Binding of PCR Product</strong></p>
                            <p>Mix the PCR reaction solution with five volumes of DS Buffer. The maximum PCR product volume is 100 µL. If the volume exceeds this limit, divide it into multiple tubes.</p>
                            <p><strong>2. Loading onto DF Column</strong></p>
                            <p>Place the DF Column into a 2 mL Collection Tube and transfer the entire mixture into the column. Centrifuge at 13,000 rpm (17,900 × g) for 1 minute. Discard the flow-through completely and place the DF Column back into the Collection Tube.</p>
                            <p><strong>3. Washing the Column</strong></p>
                            <p>Add 750 µL of Wash Buffer to the DF Column, stand at room temperature for 1 minute, and centrifuge at 13,000 rpm for 1 minute. Discard the flow-through and return the DF Column to the Collection Tube.</p>
                            <p>Repeat this washing step once more.</p>
                            <p><strong>4. Removal of Residual Wash Buffer</strong></p>
                            <p>Centrifuge the DF Column at 13,000 rpm for 3 minutes to completely remove any residual Wash Buffer.</p>
                            <p><strong>5. Drying and Elution</strong></p>
                            <p>Place the DF Column into a clean 1.5 mL microcentrifuge tube and incubate at 37 °C for 7 minutes to dry the membrane.</p>
                            <p>Add 60 °C preheated MQ water to the center of the membrane, stand for at least 1 minute, then centrifuge at 13,000 rpm for 2 minutes to elute the purified DNA.</p>
                        </v-card-text>
                    </v-card>
                    </v-tabs-window-item>
                    <v-tabs-window-item value="Gel extraction">
                    <v-card flat>
                        <v-card-text>
                            <h3><strong>Gel extraction</strong></h3>
                            <p><strong>Materials and Reagents</strong></p>
                            <ul>
                            <li>• Agarose gel slice containing DNA</li>
                            <li>• Binding Buffer</li>
                            <li>• Washing Buffer</li>
                            <li>• Spin column</li>
                            <li>• MQ water (preheated 60 °C)</li>
                            <li>• Collection tubes for spin column</li>
                            </ul>
                            <p><strong>1.Excise and Dissolve Gel</strong></p>
                            <p>Excise the DNA fragment from the agarose gel. Weigh the gel slice. Add 100 µL of Binding Buffer for every 100 mg of gel.</p>
                            <p>Incubate the mixture at 60 °C for 5–15 minutes, vortexing every 2–3 minutes until the gel slice is completely dissolved. After the gel is fully dissolved, add five volumes of Binding Buffer relative to the original gel slice.</p>
                            <p>2.Load DNA Mixture onto Column.</p>
                            <p>Transfer the dissolved gel mixture (up to ~700 µL) onto the spin column placed in a Collection Tube. Centrifuge at 12,000–14,000 × g for 1 minute and discard the flow-through.</p>
                            <p>Add 500 µL of Binding Buffer to the spin column and centrifuge again at 12,000–14,000 × g for 1 minute.</p>
                            <p><strong>3.Washing the Column</strong></p>
                            <p>Add 700 µL of Washing Buffer to the spin column, centrifuge at 12,000–14,000 × g for 1 minute, and discard the flow-through.</p>
                            <p>Centrifuge again at 12,000–14,000 × g for 3 minutes to completely remove residual Washing Buffer.</p>
                            <p><strong>4.Drying and Elution</strong></p>
                            <p>Incubate the spin column at 37–65 °C for 5 minutes to dry the membrane.</p>
                            <p>Place the spin column into a clean 1.5 mL microcentrifuge tube. Add 60 °C preheated MQ water directly to the membrane, incubate for at least 1 minute, and centrifuge at 12,000–14,000 × g for 1 minute to elute the purified DNA.</p>
                        </v-card-text>
                    </v-card>
                    </v-tabs-window-item>
                    <v-tabs-window-item value="Digestion">
                    <v-card flat>
                        <v-card-text>
                            <h3><strong>Digestion</strong></h3>
                            <p><strong>Materials and Reagents</strong></p>
                            <ul>
                            <li>• DNA sample</li>
                            <li>• 10× restriction buffer</li>
                            <li>•  Restriction enzyme(s)</li>
                            <li>• Spin column</li>
                            <li>• MQ water (preheated 60 °C)</li>
                            <li>• MQ water</li>
                            </ul>
                            <p><strong>1. Buffer Preparation</strong></p>
                            <p>Thaw the appropriate buffer on ice according to the restriction enzyme requirements. Keep enzymes in the freezer until immediately before use.</p>
                            <p><strong>2. Reaction Setup</strong></p>
                            <p>Prepare the restriction digestion mixture on ice according to the table below:</p>
                            <table>
                            <thead>
                            <tr>
                            <th>Component</th>
                            <th>Single Enzyme (µL)</th>
                            <th>Double Enzyme (µL)</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>                                
                            <td>DNA sample</td>
                            <td>44</td>
                            <td>43</td>
                            </tr>
                            <tr>
                            <td>10× Buffer</td>
                            <td>5</td>
                            <td>5</td>
                            </tr>
                            <tr>
                                <td>Enzyme 1</td>
                                <td>1</td>
                                <td>0.5</td>
                                </tr>
                                <tr>
                                <td>Enzyme 2</td>
                                <td>—</td>
                                <td>0.5</td>
                                </tr>
                                <tr>
                                <td>Total Volume</td>
                                <td>50</td>
                                <td>50</td>
                                </tr>
                                </tbody>
                                </table>
                                <p><strong>3. Incubation</strong></p>
                                <p>Incubate the reaction mixture at 37 °C for 1 hour.</p>                  
                        </v-card-text>
                    </v-card>
                    </v-tabs-window-item>
                    <v-tabs-window-item value="EtOH Precipitation">
                    <v-card flat>
                        <v-card-text>
                            <h3><strong>EtOH Precipitation</strong></h3>
                            <p><strong>Materials and Reagents</strong></p>
                            <ul>
                            <li>• 3 M Sodium acetate (NaAc)</li>
                            <li>• 99% Ethanol</li>
                            <li>• 70% Ethanol</li>
                            <li>• MQ water</li>
                            </ul>
                            <p><strong>1. Precipitation</strong></p>
                            <p>Add 1/10 volume of 3 M NaAc and 2.5 volumes of 99% EtOH to the DNA sample. Mix gently and incubate at –20 °C for 1 hour.</p>
                            <p><strong>2. Pellet Collection</strong></p>
                            <p>Centrifuge the sample at 15,000 rpm, 4 °C for 30 minutes. Carefully discard the supernatant.</p>
                            <p><strong>3. Washing</strong></p>
                            <p>Add 1 mL of 70% EtOH to the pellet. Do not vortex or pipette. Centrifuge at 15,000 rpm, 4 °C for 10 minutes and discard the supernatant.</p>
                            <p><strong>4. Residual Removal</strong></p>
                            <p>Centrifuge briefly at 12,000 rpm, 4 °C for 15 seconds to collect any residual liquid. Carefully remove the remaining supernatant using a pipette.</p>
                            <p><strong>5. Drying</strong></p>
                            <p>Place the tube with the open lid in a clean hood and allow the pellet to air-dry until no visible liquid remains.</p>
                            <p><strong>6. Resuspension</strong></p>
                            <p>Add 10 µL of MQ water to the dried DNA pellet and vortex until fully dissolved.</p>                        
                        </v-card-text>
                    </v-card>
                    </v-tabs-window-item>
                    <v-tabs-window-item value="Transformation">
                    <v-card flat>
                        <v-card-text>
                            <h3><strong>Transformation</strong></h3>
                            <p><strong>Materials and Reagents</strong></p>
                            <ul>
                            <li>• Competent  cells</li>
                            <li>• Plasmid DNA</li>
                            <li>• SOB medium</li>
                            <li>• SOC medium</li>
                            <li>• 10% glycerol (ice-cold)</li>
                            </ul>
                            <p><strong>1. Cuvette Preparation</strong></p>
                            <p>Rinse the cuvette with sterile water, remove residual liquid using a pipette, and place the cuvette in the fume hood to dry completely.</p>
                            <p><strong>2. Bacterial Culture</strong></p>
                            <p>Inoculate 1000 µL of bacterial culture into SOB medium and incubate at 37 °C for 1.5 hours to prepare competent cells.</p>
                            <p><strong>3. Cooling on Ice</strong></p>
                            <p>Place a container of ice on the bench. Transfer the cultured cells, sterile serological tubes, new sterile Eppendorf tubes, and 10% glycerol onto ice to pre-chill.</p>
                            <p><strong>4. First Centrifugation</strong></p>
                            <p>Transfer the bacterial culture into a chilled serological tube. Centrifuge at 6000 rpm, 4 °C for 5 minutes (cap the tube if the volume is large). Discard the supernatant.</p>
                            <p><strong>5. First Wash</strong></p>
                            <p>Resuspend the pellet in 1000 µL of ice-cold 10% glycerol by pipetting until mixed thoroughly. Transfer the suspension into a new pre-chilled Eppendorf tube.</p>
                            <p><strong>6. Second Centrifugation</strong></p>
                            <p>Centrifuge the tube at 12,000 rpm for 1 minute at 4 °C. Discard the supernatant and add 1000 µL of ice-cold 10% glycerol. Mix gently by pipetting.</p>
                            <p><strong>7. Third Centrifugation</strong></p>
                            <p>Centrifuge again at 12,000 rpm for 1 minute at 4 °C. Discard the supernatant carefully and resuspend the pellet in 250 µL of ice-cold 10% glycerol.</p>
                            <p><strong>8. Transformation Mixture</strong></p>
                            <p>Prepare a new pre-chilled sterile Eppendorf tube on ice. Transfer 50 µL of competent cells into the tube and add 2 µL of plasmid DNA. Mix gently.</p>
                            <p><strong>9. SOC Preparation</strong></p>
                            <p>Pipette 1000 µL of SOC medium into a new room-temperature Eppendorf tube. Keep it ready for immediate use after electroporation.</p>
                            <p><strong>10. Electroporation</strong></p>
                            <p>Transfer the competent cell–plasmid mixture into the pre-dried cuvette. Place the cuvette into the electroporator, select the Ec2 program, and apply the pulse. The time constant  will be displayed on the screen. Have 1000 µL of SOC and a 20 µL pipette ready in advance.</p>
                            <p><strong>11. Recovery</strong></p>
                            <p>Immediately after electroporation, add the prepared 1000 µL SOC into the cuvette. Mix thoroughly by pipetting and transfer the suspension back into an Eppendorf tube (use a 2 µL pipette to recover any remaining liquid at the bottom of the cuvette).</p>
                            <p><strong>12. Outgrowth</strong></p>
                            <p>Incubate the transformed cells at 37 °C for 1 hour to allow expression of antibiotic resistance.</p>
                            <p><strong>13. Plating</strong></p>
                            <p>Plate the culture onto selective agar plates. Incubate at 37 °C overnight.</p>
                        </v-card-text>
                    </v-card>
                    </v-tabs-window-item>
                    <v-tabs-window-item value="Ligation">
                    <v-card flat>
                        <v-card-text>
                            <h3><strong>Ligation</strong></h3>
                            <p><strong>Materials and Reagents</strong></p>
                            <ul>
                            <li>• DNA sample (vector + insert)</li>
                            <li>• 10× T4 DNA ligation buffer</li>
                            <li>• T4 DNA ligase</li>
                            </ul>
                                <p><strong>1. Reaction Setup</strong></p>
                                <p>Prepare the ligation mixture on ice according to the table below:</p>
                                <table>
                                <thead>
                                <tr>
                                <th>Component</th>
                                <th>Volume (µL)</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                <td>DNA sample (vector + insert)</td>
                                <td>44</td>
                                </tr>
                                <tr>
                                <td>10× T4 DNA ligation buffer</td>
                                <td>5</td>
                                </tr>
                                <tr>
                                <td>T4 DNA ligase</td>
                                <td>1</td>
                                </tr>
                                <tr>
                                <td>Total Volume</td>
                                <td>50</td>
                                </tr>
                                </tbody>
                                </table>
                                <p><strong>2. Mixing</strong></p>
                                <p>Gently flick the tube to mix, then briefly centrifuge to collect the contents at the bottom.</p>
                                <p><strong>3. Incubation</strong></p>
                                <p>Incubate the reaction mixture at 16 °C overnight.</p>                              
                        </v-card-text>
                    </v-card>
                    </v-tabs-window-item>
                    <v-tabs-window-item value="SDS-page">
                    <v-card flat>
                        <v-card-text>
                            <h3><strong>SDS-page</strong></h3>
                            <p><strong>Materials and Reagents</strong></p>
                            <ul>
                            <li>• LB medium</li>
                            <li>• IPTG</li>
                            <li>• SDS sample buffer (1×)</li>
                            <li>• 30% Acrylamide</li>
                            <li>• Stacking buffer (pH 6.8)</li>
                            <li>• Separation buffer (pH 8.8)</li>
                            <li>• 10% SDS</li>
                            <li>• 10% APS</li>
                            <li>• TEMED</li>
                            <li>• Ladder</li>
                            <li>• Coomassie blue stain</li>
                            </ul>
                            <p><strong>1.Cell Culture and Sample Preparation</strong></p>
                            <p>Inoculate a fresh tube with 5 mL LB medium and add 5 µL of overnight E. coli culture along with the appropriate antibiotic. Incubate at 25°C until the culture reaches an OD₆₀₀ of ~0.4–0.6. Add IPTG to induce protein expression, and continue incubation at 25°C for 3 hours.</p>
                            <p>Measure the OD₆₀₀ and calculate the volume of culture to harvest based on the formula:</p>
                            <p>OD × ___ = 1 × 100 µL.</p>
                            <p>Centrifuge the calculated volume to pellet cells, discard the supernatant, and resuspend the pellet in 100 µL 1× SDS sample buffer. Mix thoroughly and heat the samples at 100°C for 5 minutes before loading.</p>
                            <p><strong>2.Gel Preparation</strong></p>
                            <p>(a) Stacking Gel</p>
                            <p>Clean glass plates with ethanol, assemble the gel apparatus, and pour the stacking gel to about 3/4 of the plate height. Prepare the gel mixture:</p>
                            <table>
                            <thead>
                            <tr>
                            <th>Component</th>
                            <th>Volume</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                            <td>MQ water</td>
                            <td>2.1 mL</td>
                            </tr>
                            <tr>
                            <td>30% Acrylamide</td>
                            <td>500 µL</td>
                            </tr>
                            <tr>
                            <td>Stacking buffer (pH 6.8)</td>
                            <td>375 µL</td>
                            </tr>
                            <tr>
                            <td>10% SDS</td>
                            <td>30 µL</td>
                            </tr>
                            <tr>
                            <td>10% APS</td>
                            <td>20 µL</td>
                            </tr>
                            <tr>
                            <td>TEMED</td>
                            <td>3 µL (add last)</td>
                            </tr>
                            </tbody>
                            </table>
                            <p>Overlay gently with ethanol to prevent oxygen inhibition and allow the gel to polymerize for ~1 hour. After polymerization, remove ethanol and absorb residual liquid with filter paper.</p>
                            <p>(b) Separation Gel (10%)</p>
                            <p>Prepare the separation gel and insert the comb for wells:</p>
                            <table>
                            <thead>
                            <tr>
                            <th>Component</th>
                            <th>Volume</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                            <td>MQ water</td>
                            <td>1.36 mL</td>
                            </tr>
                            <tr>
                            <td>30% Acrylamide</td>
                            <td>1.675 mL</td>
                            </tr>
                            <tr>
                            <td>Separation buffer (pH 8.8)</td>
                            <td>1.875 mL</td>
                            </tr>
                            <tr>
                            <td>10% SDS</td>
                            <td>50 µL</td>
                            </tr>
                            <tr>
                            <td>10% APS</td>
                            <td>50 µL</td>
                            </tr>
                            <tr>
                            <td>TEMED</td>
                            <td>4 µL (add last)</td>
                            </tr>
                            </tbody>
                            </table>
                            <p>Allow polymerization for ~1 hour before loading samples.</p>
                            <p><strong>3.Gel Electrophoresis</strong></p>
                            <p>Load the prepared samples into the wells. Load 5 µL ladder, supplementing with SDS to match the sample volume. Empty wells should also contain the same SDS volume to ensure uniform running.</p>
                            <p>Run the gel initially at 75 V until the ladder bands begin to separate, then increase to 120 V and continue until bands are fully resolved.</p>
                            <p><strong>4.Gel Staining</strong></p>
                            <p>Cut off the stacking gel, leaving a small corner of the ladder as a reference mark. Immerse the separation gel in coomassie blue and gently shake for 20 minutes until bands are visible.</p>
                        </v-card-text>
                    </v-card>
                    </v-tabs-window-item>
                    <v-tabs-window-item value="Western blot">
                    <v-card flat>
                        <v-card-text>
                            <h3><strong>Western blot</strong></h3>
                            <p><strong>Materials and Reagents</strong></p>
                            <ul>
                            <li>• SDS-PAGE gels and buffers (same as SDS-PAGE)</li>
                            <li>• PVDF membrane</li>
                            <li>• Methanol</li>
                            <li>• Transfer buffer</li>
                            <li>• Filter paper</li>
                            <li>• 5% milk in PBST</li>
                            <li>• PBST</li>
                            <li>• Primary antibody</li>
                            <li>• Secondary antibody (1:2000)</li>
                            <li>• ECL solutions W & B</li>
                            </ul>
                            <p><strong>1.Cell Culture and Sample Preparation</strong></p>
                            <p>Inoculate a fresh tube with 5 mL LB medium and add 5 µL of overnight E. coli culture along with the appropriate antibiotic. Incubate at 25°C until the culture reaches an OD₆₀₀ of ~0.4–0.6. Add IPTG to induce protein expression, and continue incubation at 25°C for 3 hours.</p>
                            <p>Measure the OD₆₀₀ and calculate the volume of culture to harvest based on the formula:</p>
                            <p>OD × ___ = 1 × 100 µL.</p>
                            <p>Centrifuge the calculated volume to pellet cells, discard the supernatant, and resuspend the pellet in 100 µL 1× SDS sample buffer. Mix thoroughly and heat the samples at 100°C for 5 minutes before loading.</p>
                            <p><strong>2.Gel Preparation</strong></p>
                            <p>(a) Stacking Gel</p>
                            <p>Clean glass plates with ethanol, assemble the gel apparatus, and pour the stacking gel to about 3/4 of the plate height. Prepare the gel mixture:</p>
                            <table>
                            <thead>
                            <tr>
                            <th>Component</th>
                            <th>Volume</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                            <td>MQ water</td>
                            <td>2.1 mL</td>
                            </tr>
                            <tr>
                            <td>30% Acrylamide</td>
                            <td>500 µL</td>
                            </tr>
                            <tr>
                            <td>Stacking buffer (pH 6.8)</td>
                            <td>375 µL</td>
                            </tr>
                            <tr>
                            <td>10% SDS</td>
                            <td>30 µL</td>
                            </tr>
                            <tr>
                            <td>10% APS</td>
                            <td>20 µL</td>
                            </tr>
                            <tr>
                            <td>TEMED</td>
                            <td>3 µL (add last)</td>
                            </tr>
                            </tbody>
                            </table>
                            <p>Overlay gently with ethanol to prevent oxygen inhibition and allow the gel to polymerize for ~1 hour. After polymerization, remove ethanol and absorb residual liquid with filter paper.</p>
                            <p>(b) Separation Gel (10%)</p>
                            <p>Prepare the separation gel and insert the comb for wells:</p>
                            <table>
                            <thead>
                            <tr>
                            <th>Component</th>
                            <th>Volume</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                            <td>MQ water</td>
                            <td>1.36 mL</td>
                            </tr>
                            <tr>
                            <td>30% Acrylamide</td>
                            <td>1.675 mL</td>
                            </tr>
                            <tr>
                            <td>Separation buffer (pH 8.8)</td>
                            <td>1.875 mL</td>
                            </tr>
                            <tr>
                            <td>10% SDS</td>
                            <td>50 µL</td>
                            </tr>
                            <tr>
                            <td>10% APS</td>
                            <td>50 µL</td>
                            </tr>
                            <tr>
                            <td>TEMED</td>
                            <td>4 µL (add last)</td>
                            </tr>
                            </tbody>
                            </table>
                            <p>Allow polymerization for ~1 hour before loading samples.</p>
                            <p><strong>3.Gel Electrophoresis</strong></p>
                            <p>Load the prepared samples into the wells. Load 5 µL ladder, supplementing with SDS to match the sample volume. Empty wells should also contain the same SDS volume to ensure uniform running.</p>
                            <p>Run the gel initially at 75 V until the ladder bands begin to separate, then increase to 120 V and continue until bands are fully resolved.</p>
                            <p><strong>4.Membrane and Filter Preparation</strong></p>
                            <p>Prepare three separate containers for the transfer process. The first container should have 6 pieces of filter paper per set, with two sets, soaked in transfer buffer. The second container should contain the gel, also soaked in transfer buffer and gently shaken for 10 minutes. The third container is for the PVDF membrane; take the membrane with tweezers and immerse it in methanol for 30 seconds to activate it.</p>
                            <p>After PVDF activation, immediately transfer the membrane to the filter box using tweezers.</p>
                            <p><strong>5.Assembling the Transfer Sandwich</strong></p>
                            <p>On the transfer platform, assemble the sandwich in the following order: filter paper, PVDF membrane, gel, filter paper. Press gently to remove any air bubbles between layers. Except for the PVDF membrane, other components can be pressed by hand carefully to avoid contaminating the membrane with proteins from your hands.</p>
                            <p><strong>6.Protein Transfer</strong></p>
                            <p>For high molecular weight proteins, perform the transfer at 120 mA, and for low molecular weight proteins, use 100–110 mA. The transfer should run for approximately 1 hour. Once the transfer is complete, remove the PVDF membrane with tweezers for blocking.</p>
                            <p><strong>7.Blocking</strong></p>
                            <p>Block the PVDF membrane by incubating it in 5% milk in PBST with gentle shaking for 1 hour. Wash the membrane with PBST once for 15 minutes, followed by two washes of 5 minutes each.</p>
                            <p><strong>8.Primary Antibody Incubation</strong></p>
                            <p>Thaw the primary antibody in water, then dilute it in 5% milk. Incubate the membrane with the diluted antibody at room temperature with gentle shaking for 1 hour. After incubation, remove the antibody solution and wash the membrane with PBST for 10 minutes, repeating this wash three times.</p>
                            <p><strong>9.Secondary Antibody Incubation</strong></p>
                            <p>Dilute the secondary antibody 1:2000 in 5% milk and incubate the membrane at room temperature with gentle shaking for 1 hour. After incubation, wash the membrane with PBST for 10 minutes, repeating this wash three times.</p>
                            <p><strong>10.Detection</strong>
                            Mix equal volumes of ECL solutions W and B, apply the mixture directly onto the PVDF membrane, and immediately place the membrane in a chemiluminescence imaging system for signal detection.</p>
                        </v-card-text>
                    </v-card>
                    </v-tabs-window-item>
                    <v-tabs-window-item value="Red recombination">
                    <v-card flat>
                        <v-card-text>
                            <h3><strong>Red recombination</strong></h3>
                            <p><strong>Materials and Reagents</strong></p>
                            <ul>
                            <li>• Overnight  culture</li>
                            <li>• SOB medium</li>
                            <li>• 10% glycerol (ice-cold)</li>
                            <li>• DNA solution</li>
                            </ul>
                            <p><strong>1. Culture Inoculation</strong></p>
                            <p>Inoculate 0.5 mL of overnight culture into 50 mL of fresh SOB medium without Mg²⁺. Grow the cells with shaking at 30 °C for 1.5 hours.</p>
                            <p><strong>2. Induction</strong></p>
                            <p>Add an appropriate volume of 20% IPTG solution to the culture and continue incubation at 30 °C for 1 hour to induce the recombination system.</p>
                            <p><strong>3. Cell Harvesting</strong></p>
                            <p>Chill the culture flask on ice for 5 minutes. Transfer the culture into a 50 mL centrifuge tube and centrifuge at 6,000 rpm, 4 °C for 5 minutes. After this point, maintain the cells at cold temperature throughout the preparation steps.</p>
                            <p><strong>4. First Wash</strong></p>
                            <p>Carefully remove as much supernatant as possible. Resuspend the pellet in 1 mL of ice-cold 10% glycerol, transfer into a 1.5 mL tube, and centrifuge at 12,000 rpm, 4 °C for 1 minute.</p>
                            <p><strong>5. Second Wash</strong></p>
                            <p>Remove the supernatant using a pipette. Resuspend the cells again in 1 mL of ice-cold 10% glycerol and centrifuge under the same conditions (12,000 rpm, 4 °C, 1 min).</p>
                            <p><strong>6. Final Resuspension</strong></p>
                            <p>Remove the supernatant using a pipette and resuspend the cells in 250 µL of ice-cold 10% glycerol.</p>
                            <p><strong>7. Transformation Mixture</strong></p>
                            <p>In a fresh pre-chilled 1.5 mL tube, mix 50 µL of competent cells with 5 µL of DNA solution.</p>
                            <p><strong>8. Electroporation</strong></p>
                            <p>Transfer the mixture into a pre-chilled electroporation cuvette. Wait ~2 minutes between preparations, then pulse using the Ec2 program on the electroporator.</p>
                            <p><strong>9. Recovery</strong></p>
                            <p>Immediately after electroporation, add 1 mL of SOC medium to the cuvette. Mix thoroughly and transfer the suspension back into a tube. Incubate at 37 °C for 1 hour to allow recovery.</p>
                            <p><strong>10. Plating</strong></p>
                            <p>Plate the transformed cells onto selective agar plates. It is recommended to spread 100 µL per plate for approximately 10 plates. Incubate the plates at 37 °C overnight.</p>
                            <p><strong>11. Transfer of Transformants</strong></p>
                            <p>Select colonies from the primary plates and transfer them onto fresh selective plates. Incubate at 37 °C to maintain and expand the transformants.</p>
                        </v-card-text>
                    </v-card>
                    </v-tabs-window-item>
                    <v-tabs-window-item value="P1 preparation">
                    <v-card flat>
                        <v-card-text>
                            <h3><strong>P1 preparation</strong></h3>
                            <p><strong>Materials and Reagents</strong></p>
                            <ul>
                            <li>• Overnight  culture</li>
                            <li>• LB-Ca plates </li>
                            <li>• CaCl₂ (0.1 M or 5 mM)</li>
                            <li>• Soft agar (0.3% LB-Ca)</li>
                            <li>• P1 phage solution</li>
                            <li>• Chloroform</li>
                            <li>• 50% glycerol</li>
                            </ul>
                            <p><strong>1. Host Culture</strong></p>
                            <p>Prepare an overnight culture of host E. coli in LB medium.</p>
                            <p><strong>2. Plate Preparation</strong></p>
                            <p>Prepare fresh LB-Ca plates by adding 1.5% BactoAgar to LB medium, autoclaving, and then adding CaCl₂ to a final concentration of 5 mM. Do not allow the plates to dry before use.</p>
                            <p><strong>3. Cell Growth for Infection</strong></p>
                            <p>In a sterile test tube, mix 1.4 mL of fresh LB medium, 0.1 mL of 0.1 M CaCl₂, and 0.5 mL of overnight E. coli culture. Incubate with shaking at 37 °C for 2 hours to prepare cells for phage infection.</p>
                            <p><strong>4. Soft Agar Preparation</strong></p>
                            <p>Melt LB-Ca medium containing 0.3% BactoAgar using a microwave. Keep the molten soft agar in a 50 °C water bath until use.</p>
                            <p><strong>5. Infection and Overlay</strong></p>
                            <p>In a small test tube, mix 0.4 mL of the prepared host culture, 2 µL of P1 phage solution, and 3 mL of molten LB-Ca soft agar. Immediately overlay the mixture on the prepared LB-Ca plates. The volume of P1 phage solution can be adjusted according to the phage titer. Prepare a negative control plate without phage to monitor contamination.</p>
                            <p><strong>6. Incubation</strong></p>
                            <p>Place the plates inside a plastic bag (upside up) and incubate at 37 °C for 5–7 hours to allow phage plaques to form.</p>
                            <p><strong>7. Soft Agar Collection</strong></p>
                            <p>After incubation, collect the soft agar containing phage into a fresh 1.5 mL tube and crush the agar by pipetting.</p>
                            <p><strong>8. Initial Centrifugation</strong></p>
                            <p>Centrifuge the tube at 10,000 rpm for 1 minute. Transfer the supernatant into a new 1.5 mL tube.</p>
                            <p><strong>9. Chloroform Treatment</strong></p>
                            <p>Add 100 µL of chloroform to the phage supernatant, mix thoroughly, and incubate at 4 °C overnight.</p>
                            <p><strong>10. Clarification</strong></p>
                            <p>Centrifuge the phage solution again at 10,000 rpm, 4 °C for 1 minute, and transfer the supernatant into a 2 mL screw-cap tube. Store the solution at 4 °C overnight with the cap slightly loosened.</p>
                            <p><strong>11. Long-Term Storage</strong></p>
                            <p>Add an equal volume of 50% glycerol to the phage solution to achieve a final glycerol concentration of 25%, then store the phage stock at –20 °C.</p>
                        </v-card-text>
                    </v-card>
                    </v-tabs-window-item>
                    <v-tabs-window-item value="P1 transduction">
                    <v-card flat>
                        <v-card-text>
                            <h3><strong>P1 transduction</strong></h3>
                            <p><strong>Materials and Reagents</strong></p>
                            <ul>
                            <li>• Overnight  culture</li>
                            <li>• LB medium</li>
                            <li>• CaCl₂ (0.1 M)</li>
                            <li>• P1 phage solution (~1×10⁷ pfu/µL)</li>
                            <li>• LB-citrate medium</li>
                            </ul>
                            <p><strong>1. Recipient Cell Preparation</strong></p>
                            <p>Prepare an overnight culture of your recipient E. coli in LB medium. In a sterile test tube, mix 1.4 mL of fresh LB medium, 0.1 mL of 0.1 M CaCl₂, and 0.5 mL of the overnight culture. Incubate the mixture with shaking at 37°C for 2 hours to make the cells competent for P1 infection.</p>
                            <p><strong>2. Infection with P1 Phage</strong></p>
                            <p>In a sterile 1.5 mL tube, mix 0.2 mL of the CaCl₂-treated culture with 2 µL of P1 phage solution (approximately 1 × 10⁷ pfu/µL). Incubate the mixture at 37°C for 20 minutes. This short incubation allows the P1 phage to infect the E. coli cells in the presence of Ca²⁺.</p>
                            <p><strong>3. Removal of Excess Phage</strong></p>
                            <p>Centrifuge the infection mixture at 10,000 rpm for 1 minute. Remove the supernatant as completely as possible using a pipette to minimize free phage.</p>
                            <p><strong>4. Recovery</strong></p>
                            <p>Resuspend the cell pellet in 1 mL of LB-citrate medium (0.9 mL LB + 0.1 mL 1 M Na-citrate). The citrate chelates Ca²⁺ ions to prevent further phage infection. Incubate the tube at 30°C for 3 hours to allow recovery of transduced cells.</p>
                            <p><strong>5. Plating</strong></p>
                            <p>Centrifuge the recovered culture at 10,000 rpm for 1 minute. Remove the supernatant by decanting, then resuspend the pellet in the remaining medium. Plate the cell suspension onto selective agar plates to isolate transductants.</p>
                        </v-card-text>
                    </v-card>
                    </v-tabs-window-item>
                        <v-tabs-window-item value="Lambda phage infection">
                        <v-card flat>
                            <v-card-text>
                                <h3><strong>Lambda phage infection</strong></h3>
                                <p><strong>Materials and Reagents</strong></p>
                                <ul>
                                <li>• Overnight  culture in LB + 0.2% maltose</li>
                                <li>• MgCl₂ (10 mM)</li>
                                <li>• Soft agar (0.3%)</li>
                                <li>• LB plate with glucose, CaCl₂, FeCl₃, MgSO₄</li>
                                <li>• Lambda phage solution</li>
                                </ul>
                                <p><strong>1. Host Culture</strong></p>
                                <p>Inoculate E. coli in 2 mL LB medium containing 0.2% maltose and incubate overnight.</p>
                                <p><strong>2. Harvesting Cells</strong></p>
                                <p>Centrifuge the overnight culture at 3,000 rpm for 10 minutes. Discard the supernatant and retain the cell pellet.</p>
                                <p><strong>3. Cell Preparation</strong></p>
                                <p>Resuspend the pellet in 2 mL of 10 mM MgCl₂. Adjust the OD₆₀₀ to 2 using 10 mM MgCl₂. Store the prepared cells at 4°C; they are stable for up to one week.</p>
                                <p><strong>4. Soft Agar Overlay</strong></p>
                                <p>Mix 100 µL of the prepared cells with 3 mL of 0.3% soft agar. Pour the mixture evenly onto a pre-warmed <em>LB plate</em>*, which contains glucose, CaCl₂, FeCl₃, and MgSO₄ as supplements.</p>
                                <p><strong>5. Phage Infection</strong></p>
                                <p>Apply 5 µL of phage solution onto the center of the soft agar plate. Incubate the plate overnight to allow infection and plaque formation.</p>
                            </v-card-text>
                        </v-card>
                        </v-tabs-window-item>
                        <v-tabs-window-item value="NautiaZ plasmid DNA midi">
                        <v-card flat>
                            <v-card-text>
                                <h3><strong>NautiaZ plasmid DNA midi</strong></h3>
                                <p><strong>Materials and Reagents</strong></p>
                                <ul>
                                <li>• Bacterial culture (100 mL)</li>
                                <li>• PL1 buffer with RNase A</li>
                                <li>• PL2 buffer</li>
                                <li>• PL3 buffer</li>
                                <li>• PL Column</li>
                                <li>• 50 ml centrifuge tube</li>
                                <li>• W1 buffer</li>
                                <li>• W2 buffer (with ethanol)</li>
                                <li>• Elution Buffer</li>
                                </ul>
                                <p><strong>1.Harvesting Bacterial Culture</strong></p>
                                <p>Transfer 100 mL of well-grown bacterial culture into a centrifuge tube. Centrifuge at 6,000 × g for 5 minutes to pellet the cells, then carefully discard the supernatant.</p>
                                <p><strong>2.Cell Resuspension</strong></p>
                                <p>Add 8 mL of PL1 Buffer containing RNase A to the pellet. Resuspend the cells thoroughly by pipetting or gentle vortexing until no visible pellet remains. Ensure RNase A is present in the buffer before use.</p>
                                <p><strong>3.Cell Lysis</strong></p>
                                <p>Add 8 mL of PL2 Buffer and gently invert the tube 10 times. Incubate at room temperature for 2 minutes to lyse the cells completely. Do not exceed 5 minutes and avoid vortexing, as it may shear genomic DNA.</p>
                                <p><strong>4.Neutralization</strong></p>
                                <p>Immediately add 12 mL of PL3 Buffer and invert gently 10 times. Centrifuge at 6,000 × g for 15 minutes to pellet the precipitated debris. Prepare a PL Column in a 50 mL collection tube during centrifugation.</p>
                                <p><strong>5.Binding to Column</strong></p>
                                <p>Carefully transfer 15 mL of the supernatant to the PL Column, avoiding any white pellet. Centrifuge at 6,000 × g for 3 minutes and discard the flow-through.</p>
                                <p><strong>6.Washing</strong></p>
                                <p>Add 10 mL of W1 Buffer to the column, centrifuge at 6,000 × g for 3 minutes, and discard the flow-through. Repeat the process using 12 mL of W2 Buffer. Ensure ethanol has been added to the Wash Buffers before use. Centrifuge the column an additional 3 minutes to remove any residual wash buffer.</p>
                                <p><strong>7.DNA Elution</strong></p>
                                <p>Place the column in a fresh 50 mL collection tube. Add 2 mL of Elution Buffer directly to the membrane center, let it stand for 2 minutes at room temperature, then centrifuge at 6,000 × g for 3 minutes to collect the plasmid DNA.</p>
                            </v-card-text>
                        </v-card>
                        </v-tabs-window-item>
                        <v-tabs-window-item value="Bioflim formation">
                        <v-card flat>
                            <v-card-text>
                                <h3><strong>Bioflim formation</strong></h3>
                                <p><strong>Materials and Reagents</strong></p>
                                <ul>
                                <li>• Staphylococcus aureus overnight culture</li>
                                <li>• 0.5× TSB with 1% glucose</li>
                                </ul>
                                <p><strong>1.Overnight Culture</strong></p>
                                <p>Inoculate Staphylococcus aureus in 0.5xTSB (Tryptic Soy Broth) with 1% glucose and incubate overnight at 37°C to obtain a dense culture.</p>
                                <p><strong>2.OD Measurement and Adjustment</strong></p>
                                <p>Measure the optical density (OD) of the overnight culture. Adjust the OD to 0.1 using fresh medium.</p>
                                <p><strong>3.Dilution and Inoculation</strong></p>
                                <p>Dilute the adjusted culture 100-fold with TSB .</p>
                                <p><strong>4.Biofilm Growth</strong>
                                Add the diluted culture into a 96-well plate and incubate at 37°C for 24 hours to allow biofilm formation.</p>                            
                            </v-card-text>
                        </v-card>
                        </v-tabs-window-item>
                        <v-tabs-window-item value="Bioflim Quantification">
                        <v-card flat>
                            <v-card-text>
                                <h3><strong>Bioflim Quantification</strong></h3>
                                <p><strong>Materials and Reagents</strong></p>
                                <ul>
                                <li>• RO water</li>
                                <li>• 0.6% Crystal violet</li>
                                <li>• 30% acetic acid</li>
                                </ul>
                                <p><strong>1.Washing and Drying</strong></p>
                                <p>Carefully wash the wells of the 96-well plate with RO water three times to remove non-adherent cells. Allow the plate to air dry.</p>
                                <p><strong>2.Heat Fixation</strong></p>
                                <p>Place the plate in a 60°C incubator for 1 hour to fix the biofilm.</p>
                                <p><strong>3.Staining</strong></p>
                                <p>Add 50µL of crystal violet to each well and incubate for 5 minutes at room temperature.</p>
                                <p><strong>4.Washing and Drying</strong></p>
                                <p>Wash the wells with RO water three times to remove excess dye. Allow the plate to air dry.</p>
                                <p><strong>5.Dye Solubilization and Measurement</strong></p>
                                <p>Add 200µL of 30% acetic acid to each well to dissolve the bound crystal violet. Transfer the solution to a new 96-well plate and measure the OD600 to quantify biofilm formation.</p>
                            </v-card-text>
                        </v-card>
                        </v-tabs-window-item>
                        <v-tabs-window-item value="Enzymatic Degradation of Biofilm">
                        <v-card flat>
                            <v-card-text>
                                <h3><strong>Enzymatic Degradation of Biofilm</strong></h3>
                                <p><strong>Materials and Reagents</strong></p>
                                <ul>
                                <li>• LB medium</li>
                                <li>• IPTG (final concentration: 0.5 mM)</li>
                                <li>• Overnight bacterial culture</li>
                                <li>• Pre-formed biofilm in 96-well plates</li>
                                </ul>
                                <p><strong>Procedure</strong></p>
                                <p><strong>1.Overnight Culture</strong></p>
                                <p>Inoculate the bacterial strain and incubate overnight under appropriate conditions.</p>
                                <p><strong>2.Inoculation into Fresh Medium</strong></p>
                                <p>Dilute the overnight culture by adding 5 μL of culture into 4950 μL of fresh LB medium (1:1000 dilution).</p>
                                <p>Incubate at 30°C with shaking until OD600 reaches approximately 0.6.</p>
                                <p><strong>3.Enzyme Induction</strong></p>
                                <p>When OD600 ≈ 0.6, add IPTG to a final concentration of 0.5 mM and continue incubation at 30°C for 3 hours to allow sufficient enzyme expression.</p>
                                <p><strong>4.Adjust Culture Density</strong></p>
                                <p>Adjust the culture OD600 to 1.0 to ensure consistent inoculation.</p>
                                <p><strong>5.Treatment of Pre-formed Biofilm</strong></p>
                                <p>Add the induced bacterial culture (containing expressed enzyme) to the wells of the 96-well plate containing pre-formed biofilm.</p>
                                <p>incubate at 30°C for 3 hours to allow enzymatic degradation of the biofilm.</p>
                            </v-card-text>
                        </v-card>
                        </v-tabs-window-item>
                </v-tabs-window>
                </div>
            </v-card>
            <br>
            <v-card :variant="alpha.card.theme" class="text-box pa-5 scroll-box scroller" id = Material>
                <v-card-title style="font-size: 32px;"><b>Material</b></v-card-title>
                <v-card-text>
                    <p>All the primers we used are listed in the table below.</p>
                    <v-table>
                    <thead>
                    <tr>
                    <th class="text-left"></th>
                    <th class="text-left">Primers</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                    <td>Proteinase K</td>
                    <td>ProK_FW:<br>
                        CCGGAATTCATGGCTCCTGCGGTGGAACAA<br>
                        ProK_RV: <br>
                        GTCACTCTGCAGTCACGCTTGATAATTATTATACGCG
                    </td>
                    </tr>
                    <tr>
                    <td>Dsp B</td>
                    <td>DSPB_FW :<br>
                        TCAGAATTCCATATGTGCGTAAAAGGCAATTCCAT<br>
                    DSPB_RV : <br>CCGCTCGAGTCACTCATCCCCATTCGT

                    </td>
                    </tr>
                    <tr>
                    <td>DNase I</td>
                    <td>DNaseI_FW : <br>TCAGAATTCCATATGCTCAAAATTGCCGCGTTT<br>
                        DNaseI_RV : <br>CGGCTCGAGTCAGGTGAGCGTGACTTC
                    </td>
                    </tr>
                    <tr>
                    <td>Dsp B、DNase I、(Colony PCR)</td>
                    <td>GFP-HF :<br> gccgAAGCTTTGTTTAACTTTAAGAAGGAG<br>
                        6x His-c :<br> TCCTTTCAGCAAAAAACCCCTCAAGACCCG</td>
                    </tr>
                    <tr>
                    <td>Pro k (Colony PCR)</td>
                    <td>ProK_FW :<br> CCG GAA TTC ATG GCT CCT GCG GTG GAA CAA<br>
                        pTrc99A-1 :<br> aagcggccgcagatctAAGAGTTTGTAGAAACGC</td>
                    </tr>
                    <tr>
                    <td>T7RNAP</td>
                    <td>141-20 :<br> CATCTGGTCGCATTGGGTCACCAGCAAATC<br>
                        T7RNAP-3:<br> taaacgcctggtgctacgcctgaataagtgattgatttggcgttacgcgaac
                    </td>
                    </tr>
                    <tr>
                    <td>CmR</td>
                    <td>Cmc(jk) :<br> cAcTTATTcAggcgTAgcAc<br>
                        Not-CmN :<br> CCCGGGCGGCCGCGACGCACACCGTGGAAA
                    </td>
                    </tr>
                    <tr>
                    <td>lacZ</td>
                    <td>141-31 :<br> cagggcttcccggtatcaacagggacaccagcggccgcggttccagttccgtttatccgg<br>
                        141-23 :<br>GACTGTAGCGGCTGATGTTGAACTGGAAG
                    </td>
                    </tr>
                    <tr>
                    <td>lacI-T7RNAP (Overlapping PCR)</td>
                    <td>180-1 :<br> ccaccatcaagggaaagccc<br>
                        T7-RNAP2 :<br> tcgaactgcaggtcgacggatccccggaattgatttggcgttacgcgaac
                    </td>
                    </tr>
                    <tr>
                    <td>Lambda c1857</td>
                    <td>lambda10 :<br> cctcctcgcccttgctcacCATacaacctccttagtacatg<br>
                        lambda11 :<br> GCGTAGCACgaattcggggGATCAGCCAAACGTCTCTTC
                    </td>
                    </tr>
                    </tbody>
                    </v-table>
                </v-card-text>

            </v-card>
        </v-col>
        </v-row>
        </v-main>
    </v-app>
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
            alpha: {
                card: {
                    theme: undefined,
                    f: ['outlined', undefined, 'tonal', 'text', 'plain', 'flat']
                },
                subcard: {
                    theme: 'tonal',
                    f: ['outlined', undefined, 'tonal', 'text', 'plain', 'flat']
                },
            },
            tab : 'Miniprep',
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
        }, 100),
        fetch('/drylab/endzyme.md')     
            .then(res => res.text())
            .then(text => {
        this.endzyme = text
      });
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
    },
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
#wallpaper{
    background-image: url('https://static.igem.wiki/teams/6003/software/endzyme-logo.webp');
}
.wallpaper-card {
    height: 25vw;
    width: 65vw;
    background-color: transparent !important;
    box-shadow: none !important;
    background-position: center;
    background-size: cover; /* cover / contain / auto */
    background-repeat:space;
    background-position: center;
}

.wallpaper-text {
    position: absolute;
    top:20vw;
    left:19vw;           
    transform: translateX(-50%); 
    color: black;
    font-size: 2rem;      
}
.text-box {
  width: 100%;
  max-width: 900px;  
  margin: 0 auto;    
}
.scroll-box {
  max-height: 600vh;      
  overflow-y: auto;   
}

.scroll-box::-webkit-scrollbar {
  width: 6px;
}
.text-content {
  font-size: 18px;      
  line-height: 1.6;    
  color: #333;     
}
.text-content p {
  margin-bottom: 1.5em;
}

</style>