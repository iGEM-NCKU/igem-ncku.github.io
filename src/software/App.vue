<template>
    <v-app>
        <page_loader :loading="loading" />
        <title_nav />

        <v-main>
            <sidenav name="software" />
            <v-row justify="end">
                <v-col cols="12" md="8" class="pa-5">
                    
                    <!-- Introduction Section -->
                    <div id="Introduction" class="section-container scroller">
                        <v-card class="ma-4 pa-8 intro-card" variant="elevated" elevation="8">
                            <v-card-title class="text-h2 text-center mb-6">
                                <b>Software Tools</b>
                            </v-card-title>
                            <v-card-subtitle class="text-h5 text-center mb-8 text-grey-darken-1">
                                Computational Solutions for Biofilm Research and Enzyme Design
                            </v-card-subtitle>
                            
                            <v-card-text class="text-h6 text-center mb-8">
                                Our software suite combines machine learning, computational biology, and AI to accelerate research in biofilm degradation and enzyme optimization. 
                                These tools bridge the gap between wet lab experiments and computational predictions, enabling data-driven decisions and reducing experimental costs.
                            </v-card-text>

                            <!-- Tool Selection Buttons -->
                            <v-row justify="center" class="mt-8">
                                <v-col cols="12" sm="6" md="5" class="text-center">
                                    <v-card 
                                        class="tool-card pa-8 elevation-4" 
                                        variant="tonal" 
                                        color="primary" 
                                        hover
                                        role="button"
                                        tabindex="0"
                                        :aria-label="'Explore Enzymix section'"
                                        @keydown.enter.prevent="scrollToSection('Enzymix')"
                                        @keydown.space.prevent="scrollToSection('Enzymix')"
                                        @click="scrollToSection('Enzymix')"
                                    >
                                        <v-icon size="80" class="mb-4 tool-icon"> fa-solid fa-chart-line </v-icon>
                                        <v-card-title class="text-h4 mb-3">Enzymix</v-card-title>
                                        <v-card-text class="text-h6 mb-4">
                                            XGBoost-powered machine learning for optimizing enzyme ratios in biofilm degradation experiments
                                        </v-card-text>
                                        <v-chip color="primary" size="large" class="mb-4" title="Open live Enzymix web app" @click.stop="openExternal('https://johan-susilo.github.io/enzymix/')">
                                            <v-icon start> fa-solid fa-globe </v-icon>
                                            Live Web App Available
                                        </v-chip>
                                        <br>
                                        <v-btn color="primary" variant="elevated" size="large" class="mt-4" @click.stop="openExternal('https://johan-susilo.github.io/enzymix/')" :aria-label="'Open Enzymix live app in new tab'">
                                            Explore Tool
                                            <v-icon end> fa-solid fa-arrow-right </v-icon>
                                        </v-btn>
                                    </v-card>
                                </v-col>
                                
                                <v-col cols="12" sm="6" md="5" class="text-center">
                                    <v-card 
                                        class="tool-card pa-8 elevation-4" 
                                        variant="tonal" 
                                        color="secondary" 
                                        hover
                                        role="button"
                                        tabindex="0"
                                        :aria-label="'Explore Endzyme section'"
                                        @keydown.enter.prevent="scrollToSection('Endzyme')"
                                        @keydown.space.prevent="scrollToSection('Endzyme')"
                                        @click="scrollToSection('Endzyme')"
                                    >
                                        <v-icon size="80" class="mb-4 tool-icon"> fa-solid fa-atom </v-icon>
                                        <v-card-title class="text-h4 mb-3">Endzyme</v-card-title>
                                        <v-card-text class="text-h6 mb-4">
                                            AI-driven pipeline for generating, screening, and optimizing functional enzyme sequences
                                        </v-card-text>
                                        <v-chip color="secondary" size="large" class="mb-4" title="Open Endzyme GitHub repository" @click.stop="openExternal('https://github.com/iGEM-NCKU/endzyme')">
                                            <v-icon start> fa-brands fa-github </v-icon>
                                            Open Source
                                        </v-chip>
                                        <br>
                                        <v-btn color="secondary" variant="elevated" size="large" class="mt-4" @click.stop="scrollToSection('Endzyme')" :aria-label="'Scroll to Endzyme details'">
                                            Explore Tool
                                            <v-icon end> fa-solid fa-arrow-right </v-icon>
                                        </v-btn>
                                    </v-card>
                                </v-col>
                            </v-row>
                        </v-card>
                    </div>

                    <!-- Enzymix Section -->
                    <div id="Enzymix" class="section-container scroller">
                        <!-- Section Header with Sub-navigation -->
                        <v-card class="ma-4 pa-6 section-header" variant="tonal" color="primary">
                            <v-row align="center">
                                <v-col cols="12" md="6">
                                    <v-card-title class="text-h3">
                                        <v-icon size="40" class="mr-3"> fa-solid fa-chart-line </v-icon>
                                        <b>Enzymix</b>
                                    </v-card-title>
                                    <v-card-subtitle class="text-h6">
                                        Machine Learning-Based Enzyme Ratio Optimization
                                    </v-card-subtitle>
                                </v-col>
                            </v-row>
                        </v-card>
                        
                        <!-- Expandable Sections -->
                        <v-expansion-panels class="mb-4" multiple v-model="openedPanelsEnzymix">
                            <!-- Introduction -->
                            <div id="biofilm-intro" class="subtitle"></div>
                            <v-expansion-panel value="biofilm-intro">
                                <v-expansion-panel-title>
                                    <v-icon class="mr-3"> fa-solid fa-circle-info </v-icon>
                                    <span class="text-h6">Introduction</span>
                                </v-expansion-panel-title>
                                <v-expansion-panel-text>
                                    <div>
                                        <v-card :variant="alpha.card.theme" class="text-box pa-5">
                                            <div class="text-content">
                                                <p class="text-h6 mb-4">
                                                    Testing and experimenting to find the optimal enzyme ratio for biofilm degradation is time-consuming and costly. Our web tool helps wet lab teams and experts by suggesting the optimal enzyme ratio and suggesting what to experiment with next based on promising enzyme ratios.
                                                </p>
                                                <v-container>
                                                 <v-hover>
                                                   <template #default = '{isHovering, props}'>
                                                     <a href = 'https://johan-susilo.github.io/enzymix/' target = '_blank'>
                                                       <v-card v-bind = props :color = 'isHovering ? `primary` : undefined' v-ripple :variant = 'isHovering ? undefined : `tonal`' :class = 'isHovering ? undefined : `rainbow`'>
                                                         <template #title>
                                                           <b> Enzymix </b>
                                                         </template>
                                                         <template #subtitle>
                                                           Optimize enzyme ratios for smarter biofilm breakdown
                                                         </template>
                                                         <template #text>
                                                           You can try Enzymix here!
                                                         </template>
                                                         <template #prepend>
                                                           <v-icon> fa-solid fa-server </v-icon>
                                                         </template>
                                                       </v-card>
                                                     </a>
                                                   </template>
                                                 </v-hover>
                                               </v-container>
                                            </div>
                                        </v-card>
                                    </div>
                                </v-expansion-panel-text>
                            </v-expansion-panel>

                            <!-- Why This Matters -->
                            <div id="biofilm-why" class="subtitle"></div>
                            <v-expansion-panel value="biofilm-why">
                                <v-expansion-panel-title>
                                    <v-icon class="mr-3"> fa-solid fa-lightbulb </v-icon>
                                    <span class="text-h6">Why This Matters</span>
                                </v-expansion-panel-title>
                                <v-expansion-panel-text>
                                    <div>
                                        <v-card :variant="alpha.card.theme" class="text-box pa-5">
                                            <div class="text-content">
                                                <p>
                                                    Predicting the optimal ratio of three enzymes is inherently challenging. Biofilm degradation is nonlinear and interactive, and it is influenced by multiple factors, such as pH, temperature, and reaction time. Traditional trial-and-error testing is time-consuming and costly.
                                                </p>
                                                <p>
                                                    We chose XGBoost because it captures nonlinear enzyme interactions, remains robust with limited data [1], iterates quickly, and provides interpretable signals for future experiments [2].
                                                </p>
                                            </div>
                                        </v-card>
                                    </div>
                                </v-expansion-panel-text>
                            </v-expansion-panel>

                            <!-- Model Performance -->
                            <div id="biofilm-performance" class="subtitle"></div>
                            <v-expansion-panel value="biofilm-performance">
                                <v-expansion-panel-title>
                                    <v-icon class="mr-3"> fa-solid fa-chart-area </v-icon>
                                    <span class="text-h6">Model Performance</span>
                                </v-expansion-panel-title>
                                <v-expansion-panel-text>
                                    <div>
                                        <v-card :variant="alpha.card.theme" class="text-box pa-5">
                                            <div class="text-content">
                                                <p class="text-h6 mb-4">
                                                    Our XGBoost model demonstrates robust performance and strong generalization capability:
                                                </p>
                                                
                                                <v-card class="mb-4" variant="outlined">
                                                    <v-card-title class="text-h5 bg-primary">
                                                        <v-icon class="mr-2"> fa-solid fa-chart-line </v-icon>
                                                        R² Learning Curve Analysis
                                                    </v-card-title>
                                                    <v-card-text>
                                                        <p>The R² learning curve shows:</p>
                                                        <v-list>
                                                            <v-list-item prepend-icon="fa-solid fa-circle-check" title="Training R²: ~0.73" subtitle="The model captures substantial variance in the training data."></v-list-item>
                                                            <v-list-item prepend-icon="fa-solid fa-circle-check" title="Validation R²: ~0.63" subtitle="Strong generalization to unseen data, explaining 63% of variance in biofilm degradation."></v-list-item>
                                                            <v-list-item prepend-icon="fa-solid fa-circle-check" title="Minimal overfitting gap" subtitle="R² difference between training and validation: ~0.10 - indicates learning generalizable patterns."></v-list-item>
                                                            <v-list-item prepend-icon="fa-solid fa-circle-check" title="Rapid convergence" subtitle="Performance stabilizes after approximately 10-15 boosting rounds."></v-list-item>
                                                        </v-list>
                                                        <v-img src="https://hackmd.io/_uploads/BJKZRmbael.png" alt="R² learning curve for Enzymix model" class="my-4 rounded"></v-img>
                                                    </v-card-text>
                                                </v-card>
                                                
                                                <v-card class="mb-4" variant="outlined">
                                                    <v-card-title class="text-h5 bg-secondary">
                                                        <v-icon class="mr-2"> fa-solid fa-chart-line </v-icon>
                                                        RMSE Learning Curve Analysis
                                                    </v-card-title>
                                                    <v-card-text>
                                                        <p>The RMSE learning curve confirms model reliability:</p>
                                                        <v-list>
                                                            <v-list-item prepend-icon="fa-solid fa-circle-check" title="Training RMSE: ~0.08" subtitle="Low prediction error on training data."></v-list-item>
                                                            <v-list-item prepend-icon="fa-solid fa-circle-check" title="Validation RMSE: ~0.09" subtitle="Predictions typically within 9% of actual degradation values."></v-list-item>
                                                            <v-list-item prepend-icon="fa-solid fa-circle-check" title="Stable validation performance" subtitle="Flat plateau after round 20 indicates consistent predictions."></v-list-item>
                                                            <v-list-item prepend-icon="fa-solid fa-circle-check" title="Narrow train-validation gap" subtitle="~0.01 difference shows excellent generalization."></v-list-item>
                                                        </v-list>
                                                        <v-img src="https://hackmd.io/_uploads/S1tWRQZ6el.png" alt="RMSE learning curve for Enzymix model" class="my-4 rounded"></v-img>
                                                    </v-card-text>
                                                </v-card>

                                                <v-card variant="outlined">
                                                    <v-card-title class="text-h5 bg-success">
                                                        <v-icon class="mr-2"> fa-solid fa-flask </v-icon>
                                                        What This Means for Wet Lab Teams
                                                    </v-card-title>
                                                    <v-card-text>
                                                        <p>These learning curves provide strong evidence that our model:</p>
                                                        <v-list>
                                                            <v-list-item prepend-icon="fa-solid fa-circle-check" title="Generalizes well to new experiments" subtitle="Predictions on untested enzyme ratios are reliable."></v-list-item>
                                                            <v-list-item prepend-icon="fa-solid fa-circle-check" title="Doesn't overfit the training data" subtitle="Captures true biological relationships rather than noise."></v-list-item>
                                                            <v-list-item prepend-icon="fa-solid fa-circle-check" title="Converges efficiently" subtitle="Fast retraining when new data arrives."></v-list-item>
                                                        </v-list>
                                                        
                                                        <v-alert type="success" class="mt-4">
                                                            <strong>Statistical Significance:</strong> Results obtained through rigorous 5-fold nested cross-validation with fixed random seed (SEED=42) for reproducibility.
                                                        </v-alert>
                                                    </v-card-text>
                                                </v-card>
                                            </div>
                                        </v-card>
                                    </div>
                                </v-expansion-panel-text>
                            </v-expansion-panel>

                            <!-- Iterative Approach -->
                            <div id="biofilm-approach" class="subtitle"></div>
                            <v-expansion-panel value="biofilm-approach">
                                <v-expansion-panel-title>
                                    <v-icon class="mr-3"> fa-solid fa-arrows-rotate </v-icon>
                                    <span class="text-h6">Our Iterative, Team-Centered Approach</span>
                                </v-expansion-panel-title>
                                <v-expansion-panel-text>
                                    <div>
                                        <v-card :variant="alpha.card.theme" class="text-box pa-5">
                                            <div class="text-content">
                                                <p class="text-h6 mb-4">Every development step was designed around wet lab feedback to ensure real research impact:</p>
                                                
                                                <v-timeline direction="vertical" class="mb-4">
                                                    <v-timeline-item dot-color="primary" size="small">
                                                        <template v-slot:opposite>
                                                            <span class="text-caption">Step 1</span>
                                                        </template>
                                                        <v-card class="elevation-2">
                                                            <v-card-title class="text-h6">Data Analysis & Visualization</v-card-title>
                                                            <v-card-text>Analyzed experiment data, cleaned it, and suggested improvements through visualization.</v-card-text>
                                                        </v-card>
                                                    </v-timeline-item>
                                                    
                                                    <v-timeline-item dot-color="primary" size="small">
                                                        <template v-slot:opposite>
                                                            <span class="text-caption">Step 2</span>
                                                        </template>
                                                        <v-card class="elevation-2">
                                                            <v-card-title class="text-h6">Base Model Development</v-card-title>
                                                            <v-card-text>Base model trained on enzyme ratios and degradation features.</v-card-text>
                                                        </v-card>
                                                    </v-timeline-item>
                                                    
                                                    <v-timeline-item dot-color="primary" size="small">
                                                        <template v-slot:opposite>
                                                            <span class="text-caption">Step 3</span>
                                                        </template>
                                                        <v-card class="elevation-2">
                                                            <v-card-title class="text-h6">Web Interface</v-card-title>
                                                            <v-card-text>Website for quick degradation predictions based on enzyme ratios.</v-card-text>
                                                        </v-card>
                                                    </v-timeline-item>
                                                    
                                                    <v-timeline-item dot-color="primary" size="small">
                                                        <template v-slot:opposite>
                                                            <span class="text-caption">Step 4</span>
                                                        </template>
                                                        <v-card class="elevation-2">
                                                            <v-card-title class="text-h6">Enhanced Features</v-card-title>
                                                            <v-card-text>Added reaction time feature and optimal enzyme mix finder.</v-card-text>
                                                        </v-card>
                                                    </v-timeline-item>
                                                    
                                                    <v-timeline-item dot-color="primary" size="small">
                                                        <template v-slot:opposite>
                                                            <span class="text-caption">Step 5</span>
                                                        </template>
                                                        <v-card class="elevation-2">
                                                            <v-card-title class="text-h6">Smart Suggestions</v-card-title>
                                                            <v-card-text>Experiment suggestions based on model uncertainty and promising ratios — enabling targeted experiments.</v-card-text>
                                                        </v-card>
                                                    </v-timeline-item>
                                                    
                                                    <v-timeline-item dot-color="primary" size="small">
                                                        <template v-slot:opposite>
                                                            <span class="text-caption">Next Step</span>
                                                        </template>
                                                        <v-card class="elevation-2">
                                                            <v-card-title class="text-h6">Comprehensive Modeling</v-card-title>
                                                            <v-card-text>Additional features (temperature, biofilm age, pH) for more comprehensive modeling.</v-card-text>
                                                        </v-card>
                                                    </v-timeline-item>
                                                </v-timeline>
                                                
                                                <v-alert type="success" class="mt-4">
                                                    This ensures every software iteration directly benefits wet lab progress.
                                                </v-alert>
                                            </div>
                                        </v-card>
                                    </div>
                                </v-expansion-panel-text>
                            </v-expansion-panel>

                            <!-- Getting Started -->
                            <div id="biofilm-start" class="subtitle"></div>
                            <v-expansion-panel value="biofilm-start">
                                <v-expansion-panel-title>
                                    <v-icon class="mr-3"> fa-solid fa-rocket </v-icon>
                                    <span class="text-h6">Getting Started in 3 Steps</span>
                                </v-expansion-panel-title>
                                <v-expansion-panel-text>
                                    <div>
                                        <v-card :variant="alpha.card.theme" class="text-box pa-5">
                                            <div class="text-content">
                                                <v-row>
                                                    <!-- Web Application -->
                                                    <v-col cols="12" md="4">
                                                        <v-card class="h-100" variant="outlined" color="primary">
                                                            <v-card-title class="bg-primary text-white">
                                                                <v-icon class="mr-2"> fa-solid fa-globe </v-icon>
                                                                Web Application (Recommended)
                                                            </v-card-title>
                                                            <v-card-text>
                                                                <p><strong>Visit:</strong> <a href="https://johan-susilo.github.io/enzymix/" target="_blank">https://johan-susilo.github.io/enzymix/</a></p>
                                                                <v-list>
                                                                    <v-list-item prepend-icon="fa-solid fa-plus">Add experiment rows with enzyme ratios</v-list-item>
                                                                    <v-list-item prepend-icon="fa-solid fa-chart-line">Get predictions and uncertainty</v-list-item>
                                                                    <v-list-item prepend-icon="fa-solid fa-bullseye">Find optimal enzyme mixes</v-list-item>
                                                                    <v-list-item prepend-icon="fa-solid fa-lightbulb">Get experiment suggestions</v-list-item>
                                                                    <v-list-item prepend-icon="fa-solid fa-download">Export results as CSV</v-list-item>
                                                                </v-list>
                                                            </v-card-text>
                                                        </v-card>
                                                    </v-col>
                                                    
                                                    <!-- Local Installation -->
                                                    <v-col cols="12" md="4">
                                                        <v-card class="h-100" variant="outlined" color="secondary">
                                                            <v-card-title class="bg-secondary text-white">
                                                                <v-icon class="mr-2"> fa-brands fa-docker </v-icon>
                                                                Local Installation
                                                            </v-card-title>
                                                            <v-card-text>
                                                                <p><strong>Requirements:</strong> Docker and Git</p>
                                                                <pre><code class="code-block language-bash">
# 1. Clone repository
git clone https://gitlab.igem.org/2025/software-tools/ncku-tainan
cd ncku-tainan

# 2. Build and run
docker compose up --build -d

# 3. Access the application
# Web UI: http://localhost:8000/ui
# API docs: http://localhost:8000/docs
# Health: http://localhost:8000/health
                                                                </code></pre>
                                                            </v-card-text>
                                                        </v-card>
                                                    </v-col>
                                                    
                                                    <!-- Retraining -->
                                                    <v-col cols="12" md="4">
                                                        <v-card class="h-100" variant="outlined" color="success">
                                                            <v-card-title class="bg-success text-white">
                                                                <v-icon class="mr-2"> fa-solid fa-gear </v-icon>
                                                                Retraining (Optional)
                                                            </v-card-title>
                                                            <v-card-text>
                                                                <p>Retrain with your own data:</p>
                                                                <pre><code class="code-block language-bash">
# Place your CSV as data/polished.csv
# Required columns: dspb, dnase, prok, reaction_time, degrade

chmod +x ./train.sh 
./train.sh
                                                                </code></pre>
                                                                <p class="mt-2">This runs the training pipeline and saves updated models in <code>ml-model/</code>.</p>
                                                            </v-card-text>
                                                        </v-card>
                                                    </v-col>
                                                </v-row>
                                            </div>
                                        </v-card>
                                    </div>
                                </v-expansion-panel-text>
                            </v-expansion-panel>

                            <!-- System Architecture -->
                            <div id="biofilm-architecture" class="subtitle"></div>
                            <v-expansion-panel value="biofilm-architecture">
                                <v-expansion-panel-title>
                                    <v-icon class="mr-3"> fa-solid fa-sitemap </v-icon>
                                    <span class="text-h6">System Architecture</span>
                                </v-expansion-panel-title>
                                <v-expansion-panel-text>
                                    <div>
                                        <v-card :variant="alpha.card.theme" class="text-box pa-5">
                                            <div class="text-content">
                                                <p class="text-h6 mb-4">The software is packaged as containerized components:</p>
                                                
                                                <v-row>
                                                    <v-col cols="12" md="6">
                                                        <v-card variant="outlined" class="mb-4">
                                                            <v-card-title class="bg-primary text-white">
                                                                <v-icon class="mr-2"> fa-solid fa-brain </v-icon>
                                                                ML Models
                                                            </v-card-title>
                                                            <v-card-text>
                                                                <v-list>
                                                                    <v-list-item prepend-icon="fa-solid fa-file">
                                                                        <v-list-item-title>XGBoost Model</v-list-item-title>
                                                                        <v-list-item-subtitle>xgb_biofilm_model.json</v-list-item-subtitle>
                                                                    </v-list-item>
                                                                    <v-list-item prepend-icon="fa-solid fa-file">
                                                                        <v-list-item-title>Uncertainty Model</v-list-item-title>
                                                                        <v-list-item-subtitle>rf_uncertainty_model.joblib</v-list-item-subtitle>
                                                                    </v-list-item>
                                                                </v-list>
                                                            </v-card-text>
                                                        </v-card>
                                                        
                                                        <v-card variant="outlined">
                                                            <v-card-title class="bg-secondary text-white">
                                                                <v-icon class="mr-2"> fa-solid fa-plug </v-icon>
                                                                FastAPI Backend
                                                            </v-card-title>
                                                            <v-card-text>
                                                                <v-list>
                                                                    <v-list-item prepend-icon="fa-solid fa-server">Serves REST endpoints</v-list-item>
                                                                    <v-list-item prepend-icon="fa-solid fa-globe">Static UI hosting</v-list-item>
                                                                    <v-list-item prepend-icon="fa-solid fa-upload">Model loading on startup</v-list-item>
                                                                </v-list>
                                                            </v-card-text>
                                                        </v-card>
                                                    </v-col>
                                                    
                                                    <v-col cols="12" md="6">
                                                        <v-card variant="outlined" class="mb-4">
                                                            <v-card-title class="bg-success text-white">
                                                                <v-icon class="mr-2"> fa-solid fa-globe </v-icon>
                                                                Static Web UI
                                                            </v-card-title>
                                                            <v-card-text>
                                                                <v-list>
                                                                    <v-list-item prepend-icon="fa-solid fa-folder">HTML/CSS/JS bundle</v-list-item>
                                                                    <v-list-item prepend-icon="fa-solid fa-link">/ui shortcut redirect</v-list-item>
                                                                    <v-list-item prepend-icon="fa-solid fa-display">Responsive design</v-list-item>
                                                                </v-list>
                                                            </v-card-text>
                                                        </v-card>
                                                        
                                                        <v-img src="https://hackmd.io/_uploads/HywquNg6gl.png" alt="Architecture diagram of Enzymix system" class="rounded" aspect-ratio="16/9"></v-img>
                                                        <p class="text-center mt-2"><em>Fig. 1. Overall software workflow</em></p>
                                                    </v-col>
                                                </v-row>
                                                
                                                <v-alert type="info" class="mt-4">
                                                    The API exposes OpenAPI docs at <code>/docs</code> and provides JSON endpoints for UI and programmatic access.
                                                </v-alert>
                                            </div>
                                        </v-card>
                                    </div>
                                </v-expansion-panel-text>
                            </v-expansion-panel>

                            <!-- Model Design & Training Pipeline -->
                            <v-expansion-panel>
                                <v-expansion-panel-title>
                                    <v-icon class="mr-3"> fa-solid fa-gear </v-icon>
                                    <span class="text-h6">Model Design & Training Pipeline</span>
                                </v-expansion-panel-title>
                                <v-expansion-panel-text>
                                    <v-card :variant="alpha.card.theme" class="text-box pa-5">
                                        <div class="text-content">
                                            <v-row>
                                                <v-col cols="12" md="6">
                                                    <v-card variant="outlined" class="mb-4">
                                                        <v-card-title class="bg-primary text-white">Dataset & Features</v-card-title>
                                                        <v-card-text>
                                                            <p><strong>Dataset:</strong> <code>data/polished.csv</code></p>
                                                            <p><strong>Required columns:</strong> <code>dspb</code>, <code>dnase</code>, <code>prok</code>, <code>reaction_time</code>, <code>degrade</code></p>
                                                            
                                                            <v-divider class="my-3"></v-divider>
                                                            
                                                            <p><strong>Feature Preparation:</strong></p>
                                                            <v-list density="compact">
                                                                <v-list-item>• Enzyme ratios normalized to sum to 1.0</v-list-item>
                                                                <v-list-item>• reaction_time used as numeric feature</v-list-item>
                                                            </v-list>
                                                            
                                                            <p><strong>Target Handling:</strong></p>
                                                            <v-list density="compact">
                                                                <v-list-item>• Original scale preserved (0-100 → 0-1)</v-list-item>
                                                            </v-list>
                                                        </v-card-text>
                                                    </v-card>
                                                    
                                                    <v-card variant="outlined">
                                                        <v-card-title class="bg-secondary text-white">Models & Validation</v-card-title>
                                                        <v-card-text>
                                                            <p><strong>Models:</strong></p>
                                                            <v-list density="compact">
                                                                <v-list-item prepend-icon="fa-solid fa-chart-area">XGBoost regressor (Primary predictor)</v-list-item>
                                                                <v-list-item prepend-icon="fa-solid fa-chart-line">Random Forest (Uncertainty estimation)</v-list-item>
                                                            </v-list>
                                                            
                                                            <p><strong>Validation & Tuning:</strong></p>
                                                            <v-list density="compact">
                                                                <v-list-item>• 5×5 nested cross-validation</v-list-item>
                                                                <v-list-item>• Optuna hyperparameter optimization</v-list-item>
                                                                <v-list-item>• Early stopping prevention</v-list-item>
                                                            </v-list>
                                                        </v-card-text>
                                                    </v-card>
                                                </v-col>
                                                
                                                <v-col cols="12" md="6">
                                                    <v-img src="https://hackmd.io/_uploads/rkQRFPWpxg.png" alt="API endpoints diagram and flow" class="rounded mb-4" aspect-ratio="16/12"></v-img>
                                                    <p class="text-center"><em>Fig. 2. Machine learning training workflow</em></p>
                                                    
                                                    <v-card variant="outlined" class="mt-4">
                                                        <v-card-title class="bg-success text-white">Interpretability & Output</v-card-title>
                                                        <v-card-text>
                                                            <p><strong>Model Interpretability:</strong></p>
                                                            <v-list density="compact">
                                                                <v-list-item prepend-icon="fa-solid fa-lightbulb">SHAP explanations</v-list-item>
                                                                <v-list-item prepend-icon="fa-solid fa-chart-bar">Feature importance</v-list-item>
                                                                <v-list-item prepend-icon="fa-solid fa-user">Individual predictions</v-list-item>
                                                            </v-list>
                                                            
                                                            <p><strong>Training Entry Points:</strong></p>
                                                            <v-list density="compact">
                                                                <v-list-item prepend-icon="fa-solid fa-file-code">Script: ml-model/train.py</v-list-item>
                                                                <v-list-item prepend-icon="fa-solid fa-file-export">Output: model files in ml-model/</v-list-item>
                                                            </v-list>
                                                        </v-card-text>
                                                    </v-card>
                                                </v-col>
                                            </v-row>
                                        </div>
                                    </v-card>
                                </v-expansion-panel-text>
                            </v-expansion-panel>

                            <!-- API Reference -->
                            <div id="biofilm-api" class="subtitle"></div>
                            <v-expansion-panel value="biofilm-api">
                                <v-expansion-panel-title>
                                    <v-icon class="mr-3"> fa-solid fa-plug </v-icon>
                                    <span class="text-h6">API Reference</span>
                                </v-expansion-panel-title>
                                <v-expansion-panel-text>
                                    <div>
                                        <v-card :variant="alpha.card.theme" class="text-box pa-5">
                                            <div class="text-content">
                                                <v-row>
                                                    <v-col cols="12" md="6">
                                                        <v-card variant="outlined" class="mb-4">
                                                            <v-card-title class="bg-primary text-white">Backend Package Structure</v-card-title>
                                                            <v-card-text>
                                                                <v-list density="compact">
                                                                    <v-list-item prepend-icon="fa-solid fa-file-code">
                                                                        <v-list-item-title>api/main.py</v-list-item-title>
                                                                        <v-list-item-subtitle>App factory, mounts /static, loads models</v-list-item-subtitle>
                                                                    </v-list-item>
                                                                    <v-list-item prepend-icon="fa-solid fa-gear">
                                                                        <v-list-item-title>api/core/config.py</v-list-item-title>
                                                                        <v-list-item-subtitle>Model paths and feature names</v-list-item-subtitle>
                                                                    </v-list-item>
                                                                    <v-list-item prepend-icon="fa-solid fa-diagram-project">
                                                                        <v-list-item-title>api/core/models_io.py</v-list-item-title>
                                                                        <v-list-item-subtitle>Pydantic request/response schemas</v-list-item-subtitle>
                                                                    </v-list-item>
                                                                    <v-list-item prepend-icon="fa-solid fa-gears">
                                                                        <v-list-item-title>api/ml/engine.py</v-list-item-title>
                                                                        <v-list-item-subtitle>Model loading, predictions, uncertainty</v-list-item-subtitle>
                                                                    </v-list-item>
                                                                    <v-list-item prepend-icon="fa-solid fa-bullseye">
                                                                        <v-list-item-title>api/optimization/optimizer.py</v-list-item-title>
                                                                        <v-list-item-subtitle>Optimal mixture search, suggestions</v-list-item-subtitle>
                                                                    </v-list-item>
                                                                </v-list>
                                                            </v-card-text>
                                                        </v-card>
                                                        
                                                        <v-card variant="outlined">
                                                            <v-card-title class="bg-secondary text-white">API Routers</v-card-title>
                                                            <v-card-text>
                                                                <v-list density="compact">
                                                                    <v-list-item prepend-icon="fa-solid fa-heart-pulse">
                                                                        <v-list-item-title>health.py</v-list-item-title>
                                                                        <v-list-item-subtitle>GET /health, GET /</v-list-item-subtitle>
                                                                    </v-list-item>
                                                                    <v-list-item prepend-icon="fa-solid fa-circle-info">
                                                                        <v-list-item-title>misc.py</v-list-item-title>
                                                                        <v-list-item-subtitle>GET /training-schema-stats</v-list-item-subtitle>
                                                                    </v-list-item>
                                                                    <v-list-item prepend-icon="fa-solid fa-chart-line">
                                                                        <v-list-item-title>predict.py</v-list-item-title>
                                                                        <v-list-item-subtitle>POST /predict, GET /feature-importance</v-list-item-subtitle>
                                                                    </v-list-item>
                                                                    <v-list-item prepend-icon="fa-solid fa-bullseye">
                                                                        <v-list-item-title>optimize.py</v-list-item-title>
                                                                        <v-list-item-subtitle>POST /optimal-mix, POST /suggest-experiments</v-list-item-subtitle>
                                                                    </v-list-item>
                                                                </v-list>
                                                            </v-card-text>
                                                        </v-card>
                                                    </v-col>
                                                    
                                                    <v-col cols="12" md="6">
                                                        <v-card variant="outlined">
                                                            <v-card-title class="bg-success text-white">Key JSON Endpoints</v-card-title>
                                                            <v-card-text>
                                                                <v-expansion-panels variant="accordion">
                                                                    <v-expansion-panel>
                                                                        <v-expansion-panel-title>Health & Status</v-expansion-panel-title>
                                                                        <v-expansion-panel-text>
                                                                            <v-list density="compact">
                                                                                <v-list-item prepend-icon="fa-solid fa-circle-check">GET /health – Liveness probe</v-list-item>
                                                                                <v-list-item prepend-icon="fa-solid fa-circle-info">GET / – Status and model availability</v-list-item>
                                                                                <v-list-item prepend-icon="fa-solid fa-chart-bar">GET /training-schema-stats – UI validation ranges</v-list-item>
                                                                            </v-list>
                                                                        </v-expansion-panel-text>
                                                                    </v-expansion-panel>
                                                                    
                                                                    <v-expansion-panel>
                                                                        <v-expansion-panel-title>Predictions</v-expansion-panel-title>
                                                                        <v-expansion-panel-text>
                                                                            <v-list density="compact">
                                                                                <v-list-item prepend-icon="fa-solid fa-chart-line">POST /predict – Mean prediction, 95% interval, uncertainty</v-list-item>
                                                                                <v-list-item prepend-icon="fa-solid fa-chart-bar">GET /feature-importance – Feature names/values</v-list-item>
                                                                            </v-list>
                                                                        </v-expansion-panel-text>
                                                                    </v-expansion-panel>
                                                                    
                                                                    <v-expansion-panel>
                                                                        <v-expansion-panel-title>Optimization</v-expansion-panel-title>
                                                                        <v-expansion-panel-text>
                                                                            <v-list density="compact">
                                                                                <v-list-item prepend-icon="fa-solid fa-bullseye">POST /optimal-mix – Ratio and time recommendations</v-list-item>
                                                                                <v-list-item prepend-icon="fa-solid fa-equals">GET /optimal-mix – Default equal-ratio mix</v-list-item>
                                                                                <v-list-item prepend-icon="fa-solid fa-lightbulb">POST /suggest-experiments – Active learning suggestions</v-list-item>
                                                                            </v-list>
                                                                        </v-expansion-panel-text>
                                                                    </v-expansion-panel>
                                                                </v-expansion-panels>
                                                            </v-card-text>
                                                        </v-card>
                                                    </v-col>
                                                </v-row>
                                            </div>
                                        </v-card>
                                    </div>
                                </v-expansion-panel-text>
                            </v-expansion-panel>

                            <!-- Conclusion -->
                            <div id="biofilm-conclusion" class="subtitle"></div>
                            <v-expansion-panel value="biofilm-conclusion">
                                <v-expansion-panel-title>
                                    <v-icon class="mr-3"> fa-solid fa-circle-check </v-icon>
                                    <span class="text-h6">Conclusion</span>
                                </v-expansion-panel-title>
                                <v-expansion-panel-text>
                                    <v-card :variant="alpha.card.theme" class="text-box pa-5">
                                        <div class="text-content">
                                            <v-alert type="success" class="mb-4">
                                                <v-alert-title>Key Benefits</v-alert-title>
                                                This tool integrates predictive modeling and experiment design into a single interface, lowering lab iteration time through immediate estimates, principled optimization, and targeted enzyme ratio suggestions.
                                            </v-alert>
                                            
                                            <v-card variant="outlined" class="mt-4">
                                                <v-card-title class="bg-info text-white">
                                                    <v-icon class="mr-2"> fa-solid fa-earth-americas </v-icon>
                                                    Broader Applicability
                                                </v-card-title>
                                                <v-card-text>
                                                    <p>Compatible with multiple biofilm types beyond S. aureus, making it accessible for experts and other iGEM teams. The model can be further trained and improved with additional high-quality data.</p>
                                                    
                                                    <p>The modular design makes it straightforward to update models as new data arrive, ensuring the tool remains current and accurate.</p>
                                                </v-card-text>
                                            </v-card>
                                        </div>
                                    </v-card>
                                </v-expansion-panel-text>
                            </v-expansion-panel>

                            <!-- References -->
                            <v-expansion-panel>
                                <v-expansion-panel-title>
                                    <v-icon class="mr-3"> fa-solid fa-book-open </v-icon>
                                    <span class="text-h6">References</span>
                                </v-expansion-panel-title>
                                <v-expansion-panel-text>
                                    <v-card :variant="alpha.card.theme" class="text-box pa-5">
                                        <div class="text-content">
                                            <v-list>
                                                <v-list-item prepend-icon="fa-solid fa-book">
                                                    <v-list-item-title>[1] Chen, T., & Guestrin, C. (2016)</v-list-item-title>
                                                    <v-list-item-subtitle>XGBoost: A Scalable Tree Boosting System. Proceedings of the 22nd ACM SIGKDD International Conference on Knowledge Discovery and Data Mining, 785-794.</v-list-item-subtitle>
                                                </v-list-item>
                                                
                                                <v-list-item prepend-icon="fa-solid fa-book">
                                                    <v-list-item-title>[2] Lundberg, S. M., & Lee, S. I. (2017)</v-list-item-title>
                                                    <v-list-item-subtitle>A Unified Approach to Interpreting Model Predictions. Advances in Neural Information Processing Systems 30, 4765-4774.</v-list-item-subtitle>
                                                </v-list-item>
                                                
                                                <v-list-item prepend-icon="fa-solid fa-book">
                                                    <v-list-item-title>[3] Settles, B. (2009)</v-list-item-title>
                                                    <v-list-item-subtitle>Active Learning Literature Survey. Computer Sciences Technical Report 1648, University of Wisconsin-Madison.</v-list-item-subtitle>
                                                </v-list-item>
                                                
                                                <v-list-item prepend-icon="fa-solid fa-globe">
                                                    <v-list-item-title>[4] FastAPI Documentation (2024)</v-list-item-title>
                                                    <v-list-item-subtitle>FastAPI framework, high performance, easy to learn, fast to code, ready for production. Retrieved from https://fastapi.tiangolo.com/</v-list-item-subtitle>
                                                </v-list-item>
                                                
                                                <v-list-item prepend-icon="fa-brands fa-docker">
                                                    <v-list-item-title>[5] Docker Documentation (2024)</v-list-item-title>
                                                    <v-list-item-subtitle>Docker Compose overview. Retrieved from https://docs.docker.com/compose/.</v-list-item-subtitle>
                                                </v-list-item>
                                                
                                                <v-list-item prepend-icon="fa-solid fa-book">
                                                    <v-list-item-title>[6] Akiba, T., et al. (2019)</v-list-item-title>
                                                    <v-list-item-subtitle>Optuna: A Next-generation Hyperparameter Optimization Framework. Proceedings of the 25th ACM SIGKDD International Conference on Knowledge Discovery and Data Mining, 2623-2631.</v-list-item-subtitle>
                                                </v-list-item>
                                                
                                                <v-list-item prepend-icon="fa-solid fa-book">
                                                    <v-list-item-title>[7] Varma, S., & Simon, R. (2006)</v-list-item-title>
                                                    <v-list-item-subtitle>Bias in error estimation when using cross-validation for model selection. BMC Bioinformatics, 7(1), 91.</v-list-item-subtitle>
                                                </v-list-item>
                                            </v-list>
                                        </div>
                                    </v-card>
                                </v-expansion-panel-text>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </div>

                    <!-- Endzyme Section -->
                    <div id="Endzyme" class="section-container scroller">
                        <!-- Section Header with Sub-navigation -->
                        <v-card class="ma-4 pa-6 section-header" variant="tonal" color="secondary">
                            <v-row align="center">
                                <v-col cols="12" md="6">
                                    <v-card-title class="text-h3">
                                        <v-icon size="40" class="mr-3"> fa-solid fa-atom </v-icon>
                                        <b>Endzyme</b>
                                    </v-card-title>
                                    <v-card-subtitle class="text-h6">
                                        AI-Powered Enzyme Design Pipeline
                                    </v-card-subtitle>
                                </v-col>
                            </v-row>
                        </v-card>
                        
                        <!-- Endzyme Logo -->
                        <v-card class="ma-4 mb-6" variant="tonal" color="secondary">
                            <v-img src="https://static.igem.wiki/teams/6003/software/endzyme-logo.webp" alt="Endzyme logo" aspect-ratio="16/9" class="rounded"></v-img>
                        </v-card>
                        
                        <!-- Expandable Sections for Endzyme -->
                        <v-expansion-panels class="mb-4" multiple v-model="openedPanelsEndzyme">
                            <!-- Introduction -->
                            <div id="endzyme-intro" class="subtitle"></div>
                            <v-expansion-panel value="endzyme-intro">
                                <v-expansion-panel-title>
                                    <v-icon class="mr-3"> fa-solid fa-circle-info </v-icon>
                                    <span class="text-h6">Introduction</span>
                                </v-expansion-panel-title>
                                <v-expansion-panel-text>
                                    <div>
                                        <v-card :variant="alpha.card.theme" class="text-box pa-5">
                                            <div class="text-content">
                                                <v-alert type="warning" class="mb-4">
                                                    <v-alert-title>Problem Statement</v-alert-title>
                                                    In our wet-lab experiments, we observed that the effect of enzyme treatment was not as pronounced as expected. This can be attributed to two main factors: <strong>(1) enzyme yield</strong>, and <strong>(2) enzyme activity and binding efficiency</strong>.
                                                </v-alert>
                                                
                                                <p class="text-h6 mb-4">
                                                    To address the latter, we developed a computational pipeline aimed at optimizing enzyme activity and substrate binding efficiency.
                                                </p>
                                                
                                                <v-card variant="outlined" class="mb-4">
                                                    <v-card-title class="bg-secondary text-white">
                                                        <v-icon class="mr-2"> fa-solid fa-lightbulb </v-icon>
                                                        Our Solution
                                                    </v-card-title>
                                                    <v-card-text>
                                                        <p>The design and optimization of enzymes for specific functions have always been a critical aspect of biotechnology. Traditional methods for enzyme engineering are often labor-intensive, requiring iterative rounds of mutation, expression, and screening.</p>
                                                        
                                                        <p>In recent years, the integration of artificial intelligence (AI) and computational biology has revolutionized this process, allowing for the in silico prediction of enzyme structures, stability, and functionality.</p>
                                                        
                                                        <p><strong>By combining cutting-edge AI models, molecular modeling tools, and computational docking, this software provides an automated platform for novel enzyme sequence generation and efficiency analysis.</strong></p>
                                                    </v-card-text>
                                                </v-card>
                                                
                                                <v-alert type="info">
                                                    <v-alert-title>Pipeline Overview</v-alert-title>
                                                    The pipeline consists of two major components: <strong>(1) a machine learning model</strong>, and <strong>(2) screening and docking score-based evaluation</strong>. 
                                                    Through this pipeline, we are able to identify and obtain a functionally improved sequence within 20 minutes.
                                                </v-alert>
                                            </div>
                                        </v-card>
                                    </div>
                                </v-expansion-panel-text>
                            </v-expansion-panel>

                            <!-- Machine Learning Model -->
                            <div id="endzyme-ml" class="subtitle"></div>
                            <v-expansion-panel value="endzyme-ml">
                                <v-expansion-panel-title>
                                    <v-icon class="mr-3"> fa-solid fa-brain </v-icon>
                                    <span class="text-h6">Machine Learning Model</span>
                                </v-expansion-panel-title>
                                <v-expansion-panel-text>
                                    <div>
                                        <v-card :variant="alpha.card.theme" class="text-box pa-5">
                                            <div class="text-content">
                                                <v-row>
                                                    <v-col cols="12" md="8">
                                                        <v-card variant="outlined" class="mb-4">
                                                            <v-card-title class="bg-secondary text-white">
                                                                <v-icon class="mr-2"> fa-solid fa-brain </v-icon>
                                                                ZymCTRL: Conditional Language Model
                                                            </v-card-title>
                                                            <v-card-text>
                                                                <p><strong>ZymCTRL</strong> is a conditional language model for the generation of artificial functional enzymes. It was trained on the UniProt database of sequences containing (Enzyme Commission) EC annotations, comprising over <strong>37 M sequences</strong>.</p>
                                                                
                                                                <v-list class="mt-3">
                                                                    <v-list-item prepend-icon="fa-solid fa-database">
                                                                        <v-list-item-title>Training Data</v-list-item-title>
                                                                        <v-list-item-subtitle>37M+ sequences from UniProt with EC annotations</v-list-item-subtitle>
                                                                    </v-list-item>
                                                                    <v-list-item prepend-icon="fa-solid fa-bullseye">
                                                                        <v-list-item-title>Input</v-list-item-title>
                                                                        <v-list-item-subtitle>User-defined Enzymatic Commission (EC) number</v-list-item-subtitle>
                                                                    </v-list-item>
                                                                    <v-list-item prepend-icon="fa-solid fa-square-arrow-up-right">
                                                                        <v-list-item-title>Output</v-list-item-title>
                                                                        <v-list-item-subtitle>Protein sequences that fulfill the catalytic reaction</v-list-item-subtitle>
                                                                    </v-list-item>
                                                                </v-list>
                                                            </v-card-text>
                                                        </v-card>
                                                        
                                                        <v-card variant="outlined" class="mb-4">
                                                            <v-card-title class="bg-primary text-white">
                                                                <v-icon class="mr-2"> fa-solid fa-atom </v-icon>
                                                                ColabFold Integration
                                                            </v-card-title>
                                                            <v-card-text>
                                                                <p><strong>ColabFold</strong> is an AlphaFold2-based module. Since AlphaFold3 currently lacks an API, we are using ColabFold to fulfill this part of the pipeline.</p>
                                                                
                                                                <v-list class="mt-3">
                                                                    <v-list-item prepend-icon="fa-solid fa-screwdriver-wrench">Tools: ZymCTRL, ColabFold</v-list-item>
                                                                </v-list>
                                                            </v-card-text>
                                                        </v-card>
                                                    </v-col>
                                                    
                                                    <v-col cols="12" md="4">
                                                        <v-card variant="outlined">
                                                            <v-card-title class="bg-success text-white">
                                                                <v-icon class="mr-2"> fa-solid fa-code </v-icon>
                                                                Implementation
                                                            </v-card-title>
                                                            <v-card-text>
                                                                <p><strong>ZymCTRL Usage:</strong></p>
                                                                <pre><code class="code-block text-caption language-python">
generator = pipeline('text-generation', 
    model='AI4PD/ZymCTRL')

if maxLength == None:
    max_len = len(original_sequence)
else:
    max_len = maxLength

generated_outputs = generator(
    "＜|endoftext|＞", 
    max_length=max_len, 
    num_return_sequences=num_to_generate)

for output in generated_outputs:
    raw_novel_sequence = output['generated_text']
    novel_sequence = raw_novel_sequence.replace(
        "＜|endoftext|＞", "").replace(" ", "").strip()[:max_len]
    candidate_sequences.append(novel_sequence)
                                                                </code></pre>
                                                                
                                                                <p class="mt-3"><strong>ColabFold Usage:</strong></p>
                                                                <pre><code class="code-block text-caption language-python">
cmd = ["colabfold_batch",
    "--msa-mode", "single_sequence",       
    str(csv_path), str(job_dir)]

if use_templates == "pdb100":
    cmd.append("--templates")
elif use_templates == "custom" and custom_tpl_dir:
    cmd += ["--templates", "--custom-template-path", 
        str(Path(custom_tpl_dir).resolve())]

if amber:
    cmd.append("--amber")

if isinstance(models, int):
    cmd += ["--num-models", str(models)]   
if isinstance(recycles, int):
    cmd += ["--num-recycle", str(recycles)]
                                                                </code></pre>
                                                            </v-card-text>
                                                        </v-card>
                                                    </v-col>
                                                </v-row>
                                            </div>
                                        </v-card>
                                    </div>
                                </v-expansion-panel-text>
                            </v-expansion-panel>

                            <!-- Screening -->
                            <div id="endzyme-screening" class="subtitle"></div>
                            <v-expansion-panel value="endzyme-screening">
                                <v-expansion-panel-title>
                                    <v-icon class="mr-3"> fa-solid fa-filter </v-icon>
                                    <span class="text-h6">Screening</span>
                                </v-expansion-panel-title>
                                <v-expansion-panel-text>
                                    <div>
                                        <v-card :variant="alpha.card.theme" class="text-box pa-5">
                                            <div class="text-content">
                                                <v-card variant="outlined" class="mb-4">
                                                    <v-card-title class="bg-secondary text-white">
                                                        <v-icon class="mr-2"> fa-solid fa-filter </v-icon>
                                                        Screening Process
                                                    </v-card-title>
                                                    <v-card-text>
                                                        <p>After generating candidate enzyme sequences, we employ a comprehensive screening pipeline to identify the most promising variants. We use <strong>mmseqs2</strong> as our selection mechanism, utilizing UniProt/SwissProt as our database.</p>
                                                        
                                                        <v-alert type="info" class="my-4">
                                                            Considering that artificial proteins may not be stable or reliable enough, we employ mmseqs2 to ensure the functionality and accuracy of the protein.
                                                        </v-alert>
                                                        
                                                        <v-row class="mt-4">
                                                            <v-col cols="12" md="6">
                                                                <v-card variant="outlined">
                                                                    <v-card-title class="bg-primary text-white">
                                                                        <v-icon class="mr-2"> fa-solid fa-database </v-icon>
                                                                        Database Search
                                                                    </v-card-title>
                                                                    <v-card-text>
                                                                        <v-list>
                                                                            <v-list-item prepend-icon="fa-solid fa-database">
                                                                                <v-list-item-title>Reference Database</v-list-item-title>
                                                                                <v-list-item-subtitle>UniProt/SwissProt</v-list-item-subtitle>
                                                                            </v-list-item>
                                                                            <v-list-item prepend-icon="fa-solid fa-screwdriver-wrench">
                                                                                <v-list-item-title>Search Tool</v-list-item-title>
                                                                                <v-list-item-subtitle>MMseqs2 sequence search</v-list-item-subtitle>
                                                                            </v-list-item>
                                                                            <v-list-item prepend-icon="fa-solid fa-bullseye">
                                                                                <v-list-item-title>Purpose</v-list-item-title>
                                                                                <v-list-item-subtitle>Functionality validation</v-list-item-subtitle>
                                                                            </v-list-item>
                                                                        </v-list>
                                                                    </v-card-text>
                                                                </v-card>
                                                            </v-col>
                                                            
                                                            <v-col cols="12" md="6">
                                                                <v-card variant="outlined">
                                                                    <v-card-title class="bg-success text-white">
                                                                        <v-icon class="mr-2"> fa-solid fa-code </v-icon>
                                                                        Implementation
                                                                    </v-card-title>
                                                                    <v-card-text>
                                                                        <p><strong>MMseqs2 Usage:</strong></p>
                                                                        <pre><code class="code-block text-caption language-bash">
mmseqs search input.fasta ./swissprot result tmp

mmseqs createtsv query.fasta ./swissprot result result.tsv
                                                                        </code></pre>
                                                                        
                                                                        <p class="mt-3"><strong>Filtering Criteria:</strong></p>
                                                                        <v-list density="compact">
                                                                            <v-list-item prepend-icon="fa-solid fa-percent">E-value threshold</v-list-item>
                                                                            <v-list-item prepend-icon="fa-solid fa-chart-line">Sequence identity</v-list-item>
                                                                            <v-list-item prepend-icon="fa-solid fa-ruler">Coverage percentage</v-list-item>
                                                                        </v-list>
                                                                    </v-card-text>
                                                                </v-card>
                                                            </v-col>
                                                        </v-row>
                                                    </v-card-text>
                                                </v-card>
                                            </div>
                                        </v-card>
                                    </div>
                                </v-expansion-panel-text>
                            </v-expansion-panel>

                            <!-- Docking -->
                            <div id="endzyme-docking" class="subtitle"></div>
                            <v-expansion-panel value="endzyme-docking">
                                <v-expansion-panel-title>
                                    <v-icon class="mr-3"> fa-solid fa-puzzle-piece </v-icon>
                                    <span class="text-h6">Molecular Docking</span>
                                </v-expansion-panel-title>
                                <v-expansion-panel-text>
                                    <div>
                                        <v-card :variant="alpha.card.theme" class="text-box pa-5">
                                            <div class="text-content">
                                                <v-card variant="outlined" class="mb-4">
                                                    <v-card-title class="bg-secondary text-white">
                                                        <v-icon class="mr-2"> fa-solid fa-puzzle-piece </v-icon>
                                                        Docking Analysis Pipeline
                                                    </v-card-title>
                                                    <v-card-text>
                                                        <p>In our project, we use <strong>AutoDock Vina</strong> to optimize the performance of proteins by evaluating their interactions with small molecules. Due to a limitation of AutoDock Vina, we are unable to use polymers as docking targets. As a result, we have chosen to utilize monomers as our docking targets.</p>
                                                        
                                                        <v-alert type="warning" class="my-4">
                                                            <v-alert-title>Important Note</v-alert-title>
                                                            AutoDock Vina limitation: Cannot use polymers as docking targets, so we utilize monomers instead.
                                                        </v-alert>
                                                        
                                                        <v-row class="mt-4">
                                                            <v-col cols="12" md="6">
                                                                <v-card variant="outlined">
                                                                    <v-card-title class="bg-primary text-white">
                                                                        <v-icon class="mr-2"> fa-solid fa-screwdriver-wrench </v-icon>
                                                                        Docking Tools
                                                                    </v-card-title>
                                                                    <v-card-text>
                                                                        <v-list>
                                                                            <v-list-item prepend-icon="fa-solid fa-wand-magic-sparkles">
                                                                                <v-list-item-title>AutoDock Vina</v-list-item-title>
                                                                                <v-list-item-subtitle>Primary docking engine</v-list-item-subtitle>
                                                                            </v-list-item>
                                                                            <v-list-item prepend-icon="fa-solid fa-cube">
                                                                                <v-list-item-title>PyMOL</v-list-item-title>
                                                                                <v-list-item-subtitle>Structure processing & gridbox setup</v-list-item-subtitle>
                                                                            </v-list-item>
                                                                            <v-list-item prepend-icon="fa-solid fa-flask">
                                                                                <v-list-item-title>Target</v-list-item-title>
                                                                                <v-list-item-subtitle>Monomer molecules</v-list-item-subtitle>
                                                                            </v-list-item>
                                                                        </v-list>
                                                                    </v-card-text>
                                                                </v-card>
                                                            </v-col>
                                                            
                                                            <v-col cols="12" md="6">
                                                                <v-card variant="outlined">
                                                                    <v-card-title class="bg-success text-white">
                                                                        <v-icon class="mr-2"> fa-solid fa-chart-line </v-icon>
                                                                        Scoring Metrics
                                                                    </v-card-title>
                                                                    <v-card-text>
                                                                        <v-list>
                                                                            <v-list-item prepend-icon="fa-solid fa-temperature-half">
                                                                                <v-list-item-title>Binding Energy (ΔG)</v-list-item-title>
                                                                                <v-list-item-subtitle>kcal/mol</v-list-item-subtitle>
                                                                            </v-list-item>
                                                                            <v-list-item prepend-icon="fa-solid fa-cubes">
                                                                                <v-list-item-title>Grid Box</v-list-item-title>
                                                                                <v-list-item-subtitle>Automated generation</v-list-item-subtitle>
                                                                            </v-list-item>
                                                                            <v-list-item prepend-icon="fa-solid fa-bullseye">
                                                                                <v-list-item-title>Binding Site</v-list-item-title>
                                                                                <v-list-item-subtitle>Active site targeting</v-list-item-subtitle>
                                                                            </v-list-item>
                                                                        </v-list>
                                                                    </v-card-text>
                                                                </v-card>
                                                            </v-col>
                                                        </v-row>
                                                    </v-card-text>
                                                </v-card>
                                                
                                                <v-card variant="outlined">
                                                    <v-card-title class="bg-warning text-white">
                                                        <v-icon class="mr-2"> fa-solid fa-code </v-icon>
                                                        Automated Grid Box Setup
                                                    </v-card-title>
                                                    <v-card-text>
                                                        <p><strong>How we automatically set our gridbox in the pipeline:</strong></p>
                                                        <pre><code class="code-block language-python">
from pymol import cmd
import sys

ligand_input_file = sys.argv[1]
receptor_input_file = sys.argv[2]

def get_gridbox(selection="binding_site", 
               receptor=receptor_input_file, 
               ligand_file=ligand_input_file, 
               exhaustiveness=16, 
               output_conf="conf.txt"):
    
    min_coord, max_coord = cmd.get_extent(selection)
    center = [(min_coord[i] + max_coord[i]) / 2 for i in range(3)]
    size = [max_coord[i] - min_coord[i] for i in range(3)]
    
    with open(output_conf, "w") as f:
        f.write(f"receptor = {receptor}\n")
        f.write(f"ligand = {ligand_file}\n")
        f.write(f"center_x = {center[0]:.3f}\n")
        f.write(f"center_y = {center[1]:.3f}\n")
        f.write(f"center_z = {center[2]:.3f}\n")
                                                        </code></pre>
                                                    </v-card-text>
                                                </v-card>
                                            </div>
                                        </v-card>
                                    </div>
                                </v-expansion-panel-text>
                            </v-expansion-panel>

                            <!-- Usage -->
                            <div id="endzyme-usage" class="subtitle"></div>
                            <v-expansion-panel value="endzyme-usage">
                                <v-expansion-panel-title>
                                    <v-icon class="mr-3"> fa-solid fa-circle-play </v-icon>
                                    <span class="text-h6">Usage & Installation</span>
                                </v-expansion-panel-title>
                                <v-expansion-panel-text>
                                    <div>
                                        <v-card :variant="alpha.card.theme" class="text-box pa-5">
                                            <div class="text-content">
                                                <v-alert type="info" class="mb-4">
                                                    <v-alert-title>
                                                        <v-icon class="mr-2"> fa-brands fa-github </v-icon>
                                                        GitHub Repository
                                                    </v-alert-title>
                                                    <a href="https://github.com/iGEM-NCKU/endzyme" target="_blank" class="text-decoration-none">
                                                        Visit our GitHub page for complete documentation
                                                    </a>
                                                    <p class="mt-2 mb-0">We strongly recommend you read the README file in our GitHub first.</p>
                                                </v-alert>
                                                
                                                <v-card variant="outlined" class="mb-4">
                                                    <v-card-title class="bg-secondary text-white">
                                                        <v-icon class="mr-2"> fa-solid fa-download </v-icon>
                                                        Installation Steps
                                                    </v-card-title>
                                                    <v-card-text>
                                                        <v-stepper non-linear>
                                                            <v-stepper-header>
                                                                <v-stepper-item value="1" title="Environment">
                                                                    <template v-slot:icon>
                                                                        <v-icon> fa-solid fa-gear </v-icon>
                                                                    </template>
                                                                </v-stepper-item>
                                                                <v-divider></v-divider>
                                                                <v-stepper-item value="2" title="Clone">
                                                                    <template v-slot:icon>
                                                                        <v-icon> fa-solid fa-download </v-icon>
                                                                    </template>
                                                                </v-stepper-item>
                                                                <v-divider></v-divider>
                                                                <v-stepper-item value="3" title="Run">
                                                                    <template v-slot:icon>
                                                                        <v-icon> fa-solid fa-play </v-icon>
                                                                    </template>
                                                                </v-stepper-item>
                                                            </v-stepper-header>
                                                            
                                                            <v-stepper-window>
                                                                <v-stepper-window-item value="1">
                                                                    <v-card variant="outlined">
                                                                        <v-card-title>Environment Setup</v-card-title>
                                                                        <v-card-text>
                                                                            <pre><code class="code-block language-bash">
conda create -n endzyme python=3.10
conda activate endzyme
pip install -r requirements.txt
                                                                            </code></pre>
                                                                        </v-card-text>
                                                                    </v-card>
                                                                </v-stepper-window-item>
                                                                
                                                                <v-stepper-window-item value="2">
                                                                    <v-card variant="outlined">
                                                                        <v-card-title>Clone Repository</v-card-title>
                                                                        <v-card-text>
                                                                            <pre><code class="code-block language-bash">
git clone https://github.com/iGEM-NCKU/endzyme.git
cd endzyme
                                                                            </code></pre>
                                                                        </v-card-text>
                                                                    </v-card>
                                                                </v-stepper-window-item>
                                                                
                                                                <v-stepper-window-item value="3">
                                                                    <v-card variant="outlined">
                                                                        <v-card-title>Run Flask via Gunicorn</v-card-title>
                                                                        <v-card-text>
                                                                            <pre><code class="code-block language-bash">
cd /home/path/to/root
gunicorn -w 4 -b 127.0.0.1:8001 main:app
                                                                            </code></pre>
                                                                        </v-card-text>
                                                                    </v-card>
                                                                </v-stepper-window-item>
                                                            </v-stepper-window>
                                                        </v-stepper>
                                                    </v-card-text>
                                                </v-card>
                                                
                                                <v-alert type="warning" class="mb-4">
                                                    <v-alert-title>Important Startup Order</v-alert-title>
                                                    To ensure proper functionality, the server stack must be started in the following order: <strong>Gunicorn → Nginx</strong>.
                                                </v-alert>
                                                
                                                <v-row>
                                                    <v-col cols="12" md="6">
                                                        <v-card variant="outlined">
                                                            <v-card-title class="bg-primary text-white">
                                                                <v-icon class="mr-2"> fa-solid fa-server </v-icon>
                                                                Server Configuration
                                                            </v-card-title>
                                                            <v-card-text>
                                                                <v-list>
                                                                    <v-list-item prepend-icon="fa-brands fa-python">
                                                                        <v-list-item-title>Flask Application</v-list-item-title>
                                                                        <v-list-item-subtitle>main:app entry point</v-list-item-subtitle>
                                                                    </v-list-item>
                                                                    <v-list-item prepend-icon="fa-solid fa-person-digging">
                                                                        <v-list-item-title>Gunicorn Workers</v-list-item-title>
                                                                        <v-list-item-subtitle>4 worker processes</v-list-item-subtitle>
                                                                    </v-list-item>
                                                                    <v-list-item prepend-icon="fa-solid fa-globe">
                                                                        <v-list-item-title>Bind Address</v-list-item-title>
                                                                        <v-list-item-subtitle>127.0.0.1:8001</v-list-item-subtitle>
                                                                    </v-list-item>
                                                                </v-list>
                                                            </v-card-text>
                                                        </v-card>
                                                    </v-col>
                                                    
                                                    <v-col cols="12" md="6">
                                                        <v-card variant="outlined">
                                                            <v-card-title class="bg-success text-white">
                                                                <v-icon class="mr-2"> fa-solid fa-box-open </v-icon>
                                                                Dependencies
                                                            </v-card-title>
                                                            <v-card-text>
                                                                <v-list>
                                                                    <v-list-item prepend-icon="fa-brands fa-python">
                                                                        <v-list-item-title>Python 3.10</v-list-item-title>
                                                                        <v-list-item-subtitle>Base environment</v-list-item-subtitle>
                                                                    </v-list-item>
                                                                    <v-list-item prepend-icon="fa-solid fa-brain">
                                                                        <v-list-item-title>Transformers</v-list-item-title>
                                                                        <v-list-item-subtitle>ZymCTRL model support</v-list-item-subtitle>
                                                                    </v-list-item>
                                                                    <v-list-item prepend-icon="fa-solid fa-dna">
                                                                        <v-list-item-title>BioPython</v-list-item-title>
                                                                        <v-list-item-subtitle>Sequence analysis</v-list-item-subtitle>
                                                                    </v-list-item>
                                                                </v-list>
                                                            </v-card-text>
                                                        </v-card>
                                                    </v-col>
                                                </v-row>
                                            </div>
                                        </v-card>
                                    </div>
                                </v-expansion-panel-text>
                            </v-expansion-panel>

                            <!-- References -->
                            <div id="endzyme-refs" class="subtitle"></div>
                            <v-expansion-panel value="endzyme-refs">
                                <v-expansion-panel-title>
                                    <v-icon class="mr-3"> fa-solid fa-book-open </v-icon>
                                    <span class="text-h6">References</span>
                                </v-expansion-panel-title>
                                <v-expansion-panel-text>
                                    <div>
                                        <v-card :variant="alpha.card.theme" class="text-box pa-5">
                                            <div class="text-content">
                                                <v-card variant="outlined" class="mb-4">
                                                    <v-card-title class="bg-secondary text-white">
                                                        <v-icon class="mr-2"> fa-solid fa-book </v-icon>
                                                        Scientific References
                                                    </v-card-title>
                                                    <v-card-text>
                                                        <v-list class="references-list">
                                                            <v-list-item class="reference-item">
                                                                <v-list-item-content>
                                                                    <v-list-item-title class="text-subtitle-1">
                                                                        <strong>1. Structural Analysis of Dispersin B</strong>
                                                                    </v-list-item-title>
                                                                    <v-list-item-subtitle class="text-body-2 mt-2">
                                                                        Ramasubbu, N., Thomas, L.M., Ragunath, C., Kaplan, J.B. (2005). Structural Analysis of Dispersin B, a Biofilm-releasing Glycoside Hydrolase from the Periodontopathogen Actinobacillus actinomycetemcomitans. <em>Journal of Molecular Biology</em>, 349.
                                                                    </v-list-item-subtitle>
                                                                    <v-chip size="small" color="primary" class="mt-2">Dispersin B Structure</v-chip>
                                                                </v-list-item-content>
                                                            </v-list-item>
                                                            
                                                            <v-divider class="my-3"></v-divider>
                                                            
                                                            <v-list-item class="reference-item">
                                                                <v-list-item-content>
                                                                    <v-list-item-title class="text-subtitle-1">
                                                                        <strong>2. Conditional language models enable efficient enzyme design</strong>
                                                                    </v-list-item-title>
                                                                    <v-list-item-subtitle class="text-body-2 mt-2">
                                                                        Geraldene Munsamy, Ramiro Illanes-Vicioso, Silvia Funcillo, Ioanna T. Nakou, Sebastian Lindner, Gavin Ayres, Lesley S. Sheehan, Steven Moss, Ulrich Eckhard, Philipp Lorenz, Noelia Ferruz. (2024). Conditional language models enable the efficient design of proficient enzymes. <em>bioRxiv</em>.
                                                                    </v-list-item-subtitle>
                                                                    <v-chip size="small" color="primary" class="mt-2">ZymCTRL Model</v-chip>
                                                                </v-list-item-content>
                                                            </v-list-item>
                                                            
                                                            <v-divider class="my-3"></v-divider>
                                                            
                                                            <v-list-item class="reference-item">
                                                                <v-list-item-content>
                                                                    <v-list-item-title class="text-subtitle-1">
                                                                        <strong>3. ColabFold: Making protein folding accessible to all</strong>
                                                                    </v-list-item-title>
                                                                    <v-list-item-subtitle class="text-body-2 mt-2">
                                                                        Mirdita M, Schütze K, Moriwaki Y, Heo L, Ovchinnikov S and Steinegger M. (2022). ColabFold: Making protein folding accessible to all. <em>Nature Methods</em>.
                                                                    </v-list-item-subtitle>
                                                                    <v-chip size="small" color="primary" class="mt-2">DOI: 10.1038/s41592-022-01488-1</v-chip>
                                                                </v-list-item-content>
                                                            </v-list-item>
                                                            
                                                            <v-divider class="my-3"></v-divider>
                                                            
                                                            <v-list-item class="reference-item">
                                                                <v-list-item-content>
                                                                    <v-list-item-title class="text-subtitle-1">
                                                                        <strong>4. AutoDock Vina: Improving docking speed and accuracy</strong>
                                                                    </v-list-item-title>
                                                                    <v-list-item-subtitle class="text-body-2 mt-2">
                                                                        Trott, O., & Olson, A. J. (2010). AutoDock Vina: improving the speed and accuracy of docking with a new scoring function, efficient optimization, and multithreading. <em>Journal of Computational Chemistry</em>, 31(2), 455-461.
                                                                    </v-list-item-subtitle>
                                                                    <v-chip size="small" color="primary" class="mt-2">DOI: 10.1002/jcc.21334</v-chip>
                                                                </v-list-item-content>
                                                            </v-list-item>
                                                            
                                                            <v-divider class="my-3"></v-divider>
                                                            
                                                            <v-list-item class="reference-item">
                                                                <v-list-item-content>
                                                                    <v-list-item-title class="text-subtitle-1">
                                                                        <strong>5. MMseqs2: Ultra-fast sequence search and clustering</strong>
                                                                    </v-list-item-title>
                                                                    <v-list-item-subtitle class="text-body-2 mt-2">
                                                                        Steinegger, M., & Söding, J. (2017). MMseqs2 enables sensitive protein sequence searching for the analysis of massive data sets. <em>Nature Biotechnology</em>, 35(11), 1026-1028.
                                                                    </v-list-item-subtitle>
                                                                    <v-chip size="small" color="primary" class="mt-2">DOI: 10.1038/nbt.3988</v-chip>
                                                                </v-list-item-content>
                                                            </v-list-item>
                                                        </v-list>
                                                    </v-card-text>
                                                </v-card>
                                                
                                                <v-row>
                                                    <v-col cols="12" md="6">
                                                        <v-card variant="outlined">
                                                            <v-card-title class="bg-primary text-white">
                                                                <v-icon class="mr-2"> fa-solid fa-screwdriver-wrench </v-icon>
                                                                Software Tools
                                                            </v-card-title>
                                                            <v-card-text>
                                                                <v-list>
                                                                    <v-list-item prepend-icon="fa-solid fa-brain">
                                                                        <v-list-item-title>ZymCTRL</v-list-item-title>
                                                                        <v-list-item-subtitle>AI4PD/ZymCTRL</v-list-item-subtitle>
                                                                    </v-list-item>
                                                                    <v-list-item prepend-icon="fa-solid fa-atom">
                                                                        <v-list-item-title>ColabFold</v-list-item-title>
                                                                        <v-list-item-subtitle>Structure prediction</v-list-item-subtitle>
                                                                    </v-list-item>
                                                                    <v-list-item prepend-icon="fa-solid fa-wand-magic-sparkles">
                                                                        <v-list-item-title>AutoDock Vina</v-list-item-title>
                                                                        <v-list-item-subtitle>Molecular docking</v-list-item-subtitle>
                                                                    </v-list-item>
                                                                    <v-list-item prepend-icon="fa-solid fa-database">
                                                                        <v-list-item-title>MMseqs2</v-list-item-title>
                                                                        <v-list-item-subtitle>Sequence search</v-list-item-subtitle>
                                                                    </v-list-item>
                                                                </v-list>
                                                            </v-card-text>
                                                        </v-card>
                                                    </v-col>
                                                    
                                                    <v-col cols="12" md="6">
                                                        <v-card variant="outlined">
                                                            <v-card-title class="bg-success text-white">
                                                                <v-icon class="mr-2"> fa-solid fa-code </v-icon>
                                                                Programming Frameworks
                                                            </v-card-title>
                                                            <v-card-text>
                                                                <v-list>
                                                                    <v-list-item prepend-icon="fa-brands fa-python">
                                                                        <v-list-item-title>Python</v-list-item-title>
                                                                        <v-list-item-subtitle>Core language</v-list-item-subtitle>
                                                                    </v-list-item>
                                                                    <v-list-item prepend-icon="fa-solid fa-globe">
                                                                        <v-list-item-title>Flask</v-list-item-title>
                                                                        <v-list-item-subtitle>Web framework</v-list-item-subtitle>
                                                                    </v-list-item>
                                                                    <v-list-item prepend-icon="fa-solid fa-fire">
                                                                        <v-list-item-title>PyTorch</v-list-item-title>
                                                                        <v-list-item-subtitle>ML framework</v-list-item-subtitle>
                                                                    </v-list-item>
                                                                    <v-list-item prepend-icon="fa-solid fa-dna">
                                                                        <v-list-item-title>BioPython</v-list-item-title>
                                                                        <v-list-item-subtitle>Bioinformatics</v-list-item-subtitle>
                                                                    </v-list-item>
                                                                </v-list>
                                                            </v-card-text>
                                                        </v-card>
                                                    </v-col>
                                                </v-row>
                                                
                                                <v-card variant="outlined" class="mt-4">
                                                    <v-card-title class="bg-info text-white">
                                                        <v-icon class="mr-2"> fa-solid fa-heart </v-icon>
                                                        Acknowledgments
                                                    </v-card-title>
                                                    <v-card-text>
                                                        <p class="text-body-1">
                                                            We thank the developers of ZymCTRL, ColabFold, AutoDock Vina, and MMseqs2 for making their tools freely available to the research community. Special appreciation goes to the open-source community that enables cutting-edge computational biology research.
                                                        </p>
                                                        <p class="text-body-1 mt-3">
                                                            This work leverages state-of-the-art AI and computational methods to advance enzyme engineering and design.
                                                        </p>
                                                    </v-card-text>
                                                </v-card>
                                            </div>
                                        </v-card>
                                    </div>
                                </v-expansion-panel-text>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </div>

                </v-col>
                <v-col cols="1" />
            </v-row>
        </v-main>
    </v-app>
    
    <site_footer></site_footer>
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
    name: 'App',
    data() {
        return {
            loading: true,
            openedPanelsEnzymix: [],
            openedPanelsEndzyme: [],
            enzymixIds: [],
            endzymeIds: [],
            activeEnzymixChip: null,
            activeEndzymeChip: null,
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
        hljs.highlightAll();

        // collect subsection anchors for sidenav + scroll sync
        this.$nextTick(() => {
            this.enzymixIds = Array.from(document.querySelectorAll('#Enzymix .subtitle[id]')).map(el => el.id);
            this.endzymeIds = Array.from(document.querySelectorAll('#Endzyme .subtitle[id]')).map(el => el.id);

            // Keep the main page (Enzymix) fully expanded by default
            if (this.enzymixIds.length) {
                this.openedPanelsEnzymix = [...this.enzymixIds];
                this.activeEnzymixChip = this.enzymixIds[0];
            }
            // Endzyme: expand all by default except References
            if (this.endzymeIds.length) {
                this.openedPanelsEndzyme = this.endzymeIds.filter(id => id !== 'endzyme-refs');
                const firstNonRefs = this.endzymeIds.find(id => id !== 'endzyme-refs') || this.endzymeIds[0];
                this.activeEndzymeChip = firstNonRefs;
            }

            window.addEventListener('scroll', this.updatePanelsOnScroll, { passive: true });
        });
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.updatePanelsOnScroll);
    },
    methods: {
        title(x) {
            x = x.replace('-', ' ');
            var f = [];
            for(var i of x.split(' ')) {
                f.push(i[0].toUpperCase() + i.substr(1).toLowerCase());
            }
            return (f.join(' '));
        },
        updatePanelsOnScroll() {
            const pickNearest = (ids) => {
                let best = null;
                let bestDist = Infinity;
                const target = 160;
                for (const id of ids) {
                    const el = document.getElementById(id);
                    if (!el) continue;
                    const rect = el.getBoundingClientRect();
                    const dist = Math.abs(rect.top - target);
                    if (dist < bestDist) { bestDist = dist; best = id; }
                }
                return best;
            };

            const inView = (containerId) => {
                const c = document.getElementById(containerId);
                if (!c) return false;
                const r = c.getBoundingClientRect();
                return r.bottom > 0 && r.top < window.innerHeight;
            };

            if (inView('Enzymix') && this.enzymixIds.length) {
                const id = pickNearest(this.enzymixIds);
                if (id) {
                    // Keep Enzymix expanded; just update active chip
                    this.activeEnzymixChip = id;
                    if (!this.openedPanelsEnzymix.includes(id)) this.openedPanelsEnzymix.push(id);
                }
            }
            if (inView('Endzyme') && this.endzymeIds.length) {
                const id = pickNearest(this.endzymeIds);
                if (id) {
                    // Endzyme: keep expanded, skip opening References
                    this.activeEndzymeChip = id;
                    if (id !== 'endzyme-refs' && !this.openedPanelsEndzyme.includes(id)) {
                        this.openedPanelsEndzyme.push(id);
                    }
                }
            }
        },
        openExternal(url) {
            try {
                window.open(url, '_blank', 'noopener');
            } catch (e) {
                console.error('Failed to open', url, e);
            }
        },
        scrollToSection(sectionId) {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        },
        scrollToSubSection(subsectionId) {
            const element = document.getElementById(subsectionId);
            if (element) {
                // First scroll to the main section to ensure it's visible
                const parentSection = element.closest('.section-container');
                if (parentSection) {
                    parentSection.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
                // Then scroll to the specific subsection with a small delay
                setTimeout(() => {
                    element.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'center'
                    });
                }, 500);
            }
        }
    },
}
</script>

<style>
* {
  transition: 0.3s all;
}
.blur {
  z-index: 10;
  background-color: rgba(255, 255, 255, .75);
  backdrop-filter: blur(5px);
  position: absolute;
}

/* Tool Cards with hover and focus */
.tool-card {
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  outline: none;
}
.tool-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.15) !important;
}
.tool-card:focus-visible {
  transform: translateY(-4px);
  box-shadow: 0 0 0 3px rgba(25, 118, 210, 0.35), 0 6px 18px rgba(0,0,0,0.12) !important;
}

a.unfocused, a.unfocused:visited, a.unfocused:hover, a.unfocused:active {
    color: inherit;
}
.wallpaper-card {
    height: 25vw;
    width: 65vw;
    background-color: transparent !important;
    box-shadow: none !important;
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
  padding-left: 30px; 
}
.text-content p {
  margin-bottom: 1.5em;
}
.text-content ul, .text-content ol {
  margin-bottom: 1.5em;
  padding-left: 20px;
}
.text-content li {
  margin-bottom: 0.5em;
}
.text-content a {
  color: #1976d2;
  text-decoration: none;
}
.text-content a:hover {
  text-decoration: underline;
}
.text-content pre {
  background-color: #f5f5f5;
  border-radius: 4px;
  padding: 15px;
  overflow-x: auto;
  margin: 1em 0;
}
.text-content code {
  font-family: 'Courier New', Courier, monospace;
  font-size: 14px;
}
.subtitle {
  margin-top: 20px;
  color: #1976d2 !important;
}
.two-column-layout {
  column-count: 2; /* Set column number */
  column-gap: 20px;
  max-width: 100%;
  overflow: hidden;
}

/* Media query for mobile devices */
@media (max-width: 768px) {
  .two-column-layout {
    column-count: 1; /* Switch to single column on small screens */
    column-gap: 0;   /* Optional: Set gap to 0 for single column */
  }
  .wallpaper-text {
    font-size: 1.2rem;
  }
}

.markdown-body, .ui-infobar {
    max-width: unset !important;
}

.two-column-layout ul, 
.two-column-layout ol {
  margin: 0;
  padding-left: 20px;
}

.two-column-layout strong {
  font-weight: bold;
}

.two-column-layout em {
  font-style: italic;
}
    
.two-column-layout h1,
.two-column-layout h2,
.two-column-layout h3,
.two-column-layout h4,
.two-column-layout h5,
.two-column-layout h6 {
    margin-top: 0;    
}

.img-container {
  position: relative;
  width: 300px;
  height: 300px;
  overflow: hidden;
}

/* Navigation styling for enzymix and endzyme sections */
.biofilm-nav .v-chip,
.endzyme-nav .v-chip {
  margin: 2px 4px;
  transition: all 0.3s ease;
}

.biofilm-nav .v-chip:hover,
.endzyme-nav .v-chip:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

/* Section headers */
.section-header {
  position: sticky;
  top: 16px; /* no app bar, smaller offset */
  z-index: 10;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.95) !important;
}

/* Section containers */
.section-container {
  scroll-margin-top: 88px; /* account for sticky section header */
}

/* Code blocks styling */
.code-block {
  background-color: #f8f9fa !important;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 16px;
  font-family: 'Monaco', 'Consolas', 'Courier New', monospace;
  font-size: 13px;
  line-height: 1.5;
  overflow-x: auto;
}

/* Reference list styling */
.references-list .reference-item {
  padding: 16px 0;
  border-bottom: 1px solid #e0e0e0;
}

.references-list .reference-item:last-child {
  border-bottom: none;
}

/* Enhanced responsive design */
@media (max-width: 768px) {
  .section-header {
    position: relative;
    top: 0;
  }
  
  .biofilm-nav,
  .endzyme-nav {
    justify-content: center;
  }
  
  .biofilm-nav .v-chip,
  .endzyme-nav .v-chip {
    margin: 2px;
    font-size: 0.75rem;
  }
}
</style>
