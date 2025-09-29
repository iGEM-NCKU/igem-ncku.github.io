<template>
    <v-app>
        <page_loader :loading = 'loading' />
        <title_nav />
        <v-main>
        <sidenav name = 'experiments' />
            <v-card>
                <v-toolbar color="primary">
                    <div class = 'me-auto' style="font-size: 30px; font-weight: bold; color: yellowgreen; left: 1vw;">
                    Protocol
                    </div>
                </v-toolbar>

                <div class="d-flex flex-row">
                <v-tabs
                    v-model="tab"
                    color="primary"
                    direction="vertical"
                >
                    <v-tab  :prepend-icon = 'tab == "Miniprep" ? `fa-duotone fa-regular fa-file fa-beat-fade` : `fa-duotone fa-regular fa-file`' text="Miniprep" value="Miniprep"></v-tab>
                    <v-tab  :prepend-icon = 'tab == "Agarose Gel Preparation" ? `fa-duotone fa-regular fa-file fa-beat-fade` : `fa-duotone fa-regular fa-file`' text="Agarose Gel Preparation" value="Agarose Gel Preparation"></v-tab>
                    <v-tab  :prepend-icon = 'tab == "PCR purified" ? `fa-duotone fa-regular fa-file fa-beat-fade` : `fa-duotone fa-regular fa-file`' text="PCR purified" value="PCR purified"></v-tab>
                    <v-tab  :prepend-icon = 'tab == "PCR" ? `fa-duotone fa-regular fa-file fa-beat-fade` : `fa-duotone fa-regular fa-file`' text="PCR" value="PCR"></v-tab>
                    <v-tab  :prepend-icon = 'tab == "PCR" ? `fa-duotone fa-regular fa-file fa-beat-fade` : `fa-duotone fa-regular fa-file`' text="PCR" value="PCR"></v-tab>
                    <v-tab  :prepend-icon = 'tab == "PCR" ? `fa-duotone fa-regular fa-file fa-beat-fade` : `fa-duotone fa-regular fa-file`' text="PCR" value="PCR"></v-tab>
                    <v-tab  :prepend-icon = 'tab == "PCR" ? `fa-duotone fa-regular fa-file fa-beat-fade` : `fa-duotone fa-regular fa-file`' text="PCR" value="PCR"></v-tab>
                    <v-tab  :prepend-icon = 'tab == "PCR" ? `fa-duotone fa-regular fa-file fa-beat-fade` : `fa-duotone fa-regular fa-file`' text="PCR" value="PCR"></v-tab>
                    <v-tab  :prepend-icon = 'tab == "PCR" ? `fa-duotone fa-regular fa-file fa-beat-fade` : `fa-duotone fa-regular fa-file`' text="PCR" value="PCR"></v-tab>
                    <v-tab  :prepend-icon = 'tab == "PCR" ? `fa-duotone fa-regular fa-file fa-beat-fade` : `fa-duotone fa-regular fa-file`' text="PCR" value="PCR"></v-tab>
                    <v-tab  :prepend-icon = 'tab == "PCR" ? `fa-duotone fa-regular fa-file fa-beat-fade` : `fa-duotone fa-regular fa-file`' text="PCR" value="PCR"></v-tab>
                    <v-tab  :prepend-icon = 'tab == "PCR" ? `fa-duotone fa-regular fa-file fa-beat-fade` : `fa-duotone fa-regular fa-file`' text="PCR" value="PCR"></v-tab>
                </v-tabs>

                <v-tabs-window v-model="tab">
                    <v-tabs-window-item value="Miniprep">
                    <v-card flat>
                        <v-card-text>
                            <h2><strong>Miniprep</strong></h2>
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
                            <h2><strong>Agarose Gel Preparation</strong></h2>
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

                    <v-tabs-window-item value="PCR">
                    <v-card flat>
                        <v-card-text>
                            <h2><strong>PCR</strong></h2>
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
                    <v-tabs-window-item value="Miniprep">
                    <v-card flat>
                        <v-card-text>
                            <h2><strong>Miniprep</strong></h2>
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
                    <v-tabs-window-item value="Miniprep">
                    <v-card flat>
                        <v-card-text>
                            <h2><strong>Miniprep</strong></h2>
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
                    <v-tabs-window-item value="Miniprep">
                    <v-card flat>
                        <v-card-text>
                            <h2><strong>Miniprep</strong></h2>
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
                    <v-tabs-window-item value="Miniprep">
                    <v-card flat>
                        <v-card-text>
                            <h2><strong>Miniprep</strong></h2>
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
                    <v-tabs-window-item value="Miniprep">
                    <v-card flat>
                        <v-card-text>
                            <h2><strong>Miniprep</strong></h2>
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
                    <v-tabs-window-item value="Miniprep">
                    <v-card flat>
                        <v-card-text>
                            <h2><strong>Miniprep</strong></h2>
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
                    <v-tabs-window-item value="Miniprep">
                    <v-card flat>
                        <v-card-text>
                            <h2><strong>Miniprep</strong></h2>
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
                    <v-tabs-window-item value="Miniprep">
                    <v-card flat>
                        <v-card-text>
                            <h2><strong>Miniprep</strong></h2>
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
                    <v-tabs-window-item value="Miniprep">
                    <v-card flat>
                        <v-card-text>
                            <h2><strong>Miniprep</strong></h2>
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
                    <v-tabs-window-item value="Miniprep">
                    <v-card flat>
                        <v-card-text>
                            <h2><strong>Miniprep</strong></h2>
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
                    
                </v-tabs-window>
                </div>
            </v-card>
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