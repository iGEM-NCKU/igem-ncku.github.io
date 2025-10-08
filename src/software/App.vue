<template>
    <v-app>
        <page_loader :loading = 'loading' />
        <title_nav />

        <v-main>
        <sidenav name = 'software' />
                <v-row justify = end>
                    <v-col cols = 12 md = 8 class = 'pa-5'>
                         <!-- Introduction Section -->
                        <div id="Intro" class="section-container scroller">
                            <v-card class="ma-4 pa-8 intro-card" variant="elevated" elevation="8">
                                <v-card-title class="text-h2 text-center mb-6">
                                    <b>Software Tools</b>
                                </v-card-title>
                                <v-card-subtitle class="text-h5 text-center mb-8 text-grey-darken-1">
                                    Computational Solutions for Biofilm Research and Enzyme Design
                                </v-card-subtitle>
                                
                                <v-card-text class="text-h6 text-left mb-8">
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
                                            <v-card-text class="text-subtitle-1 mb-4 text-left">
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
                                            <v-card-text class="text-subtitle-1 mb-4 text-left">
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
                        <!-- Enzymix Section (from ML (4).md) -->
                        <div id="Enzymix" class="section-container scroller">
                            <v-card :variant="alpha.card.theme" class="text-box pa-5 scroll-box">
                              
                      <v-card-title id="Why-Enzymix" class="subtitle" style="font-size: 32px;"><b>Why Enzymix</b></v-card-title>
                            <div class="text-content">
                                <p>
                                    Testing and experimenting to find the optimal enzyme ratio for biofilm degradation is time-consuming and costly. Our web tool helps wet lab teams and experts by suggesting the optimal enzyme ratio and suggesting what to experiment with next based on promising enzyme ratios.
                                </p>
                                <p>
                                    Predicting the optimal ratio of three enzymes is inherently challenging. Biofilm degradation is nonlinear and interactive, and it is influenced by multiple factors, such as pH, temperature, and reaction time. Traditional trial-and-error testing is time-consuming and costly.
                                </p>
                                <p>
                                    We chose XGBoost because it captures nonlinear enzyme interactions, remains robust with limited data [1], iterates quickly, and provides interpretable signals for future experiments [2].
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
                            
                            <br>
                            <v-card :variant="alpha.card.theme" class="text-box pa-5 scroll-box">
                            <v-card-title id="how-we-solve-the-problem" class="subtitle" style="font-size: 32px;"><b>How can we solve this problem?</b></v-card-title>
                            <div id="biofilm-approach">
                                        <v-card :variant="alpha.card.theme" class="text-box pa-5">
                                            <div class="text-content">
                                               <p class="mb-4">We tried to connect the results of experiments with computer models and real-world science by adding new ideas at each step. This helps our software improve and support real scientific progress.</p>
                                                
                                                <p class="mb-4">Therefore, our development step was designed around wet lab feedback to ensure real research impact:</p>
                                                
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
                            
                            </v-card>
                            <br>
                            <v-card :variant="alpha.card.theme" class="text-box pa-5 scroll-box">
                            <v-card-title id="Software-Design" class="subtitle" style="font-size: 32px;"><b>Software Design</b></v-card-title>
                            <div class="text-content">
                                <p>We designed our software to be easy to use, efficient, and able to adapt to changing needs. It's made to integrate machine learning models with a simple interface. Here's how it's structured:</p>
                                 <p><b>Machine Learning Models</b><br>
                                 These models are stored in the <code>ml-model/</code>  folder. They power our predictions and decision making. The <code>xgb_biofilm_model.json</code> is used for biofilm prediction, and the <code>rf_uncertainty_model.joblib</code> is used for uncertainty estimation.
                                 </p>
        
                                <p><b>FastAPI Backend</b> <br>
                                   Our backend is built with FastAPI, which provides very fast, secure RESTful endpoints and serves the static UI [4]. The models are loaded when the program starts, and they're ready to make predictions at scale.        </p>
                                
                                <p><b>Static Web UI</b><br>
                                    The interface is simple yet powerful, built with <strong>HTML/CSS/JS</strong> and stored under <code>static/</code>, available at <code>/static</code>. Need quick access? The shortcut <code>/ui</code> will take you directly to the main page at <code>/static/index.html</code>.
                                </p>
                                
                                <p><b> API Documentation</b><br>
                                    The FastAPI backend automatically exposes OpenAPI documentation at /docs, making it easy for developers to integrate the software into any workflow or access the data programmatically through JSON endpoints.
                                </p>
                                <v-img src="https://static.igem.wiki/teams/6003/software/api.webp" alt="Overall workflow" class="my-4" />
                                <div class="text-content text-center "><i>Fig. 1. Overall software workflow</i></div>
                            </div>
                            </v-card>
                            <br>
                            <v-card :variant="alpha.card.theme" class="text-box pa-5 scroll-box">
                           <v-card-title id="ML-model" class="subtitle" style="font-size: 32px;">
                             <b>Machine Learning Model</b>
                           </v-card-title>

                          <v-card-subtitle style="font-size: 24px;">Model Training Pipeline</v-card-subtitle>
                          <div class="text-content">
                            <p><strong>Data Source</strong><br>
                            Training data from <code>data/polished.csv</code> containing enzyme ratios (DSPB, DNase I, Proteinase K), reaction times, and degradation measurements.</p>
                            
                            <p><strong>Data Preprocessing</strong><br>
                            • Three enzyme concentrations normalized to proportions that sum to 1.0.<br>
                            • Reaction time kept as numeric hours.<br>
                            • Degradation values scaled from 0-100% to 0-1 range for model training.</p>
                            
                            <p><strong>XGBoost Regressor</strong> (Primary predictions)<br>
                            • Optimized through 100 trials with nested cross-validation [7].<br>
                            • Automatically tunes learning rate, tree depth, and regularization.<br>
                            • Trained on full dataset with optimal hyperparameters.</p>
                            
                            <p><strong>Random Forest Regressor</strong> (Uncertainty estimates)<br>
                            • 300 decision trees generate prediction variance.<br>
                            • Standard deviation across trees quantifies confidence.<br>
                            • Higher uncertainty flags predictions needing validation.</p>
                            
                          </div> 
                         <v-card-subtitle style="font-size: 24px;">How do we ensure the prediction is accurate?</v-card-subtitle>
                              <div class="text-content">
                                <ol>
                                  <li><b>5×5 nested cross-validation with Optuna-driven </b> — for robust hyperparameter search [6].</li>
                                  <li><b>Reproducible</b> — fixed random seed and logged training history.</li>
                                  <li><b>Robust tuning</b> — inner-CV hyperparameter search with early stopping prevents overfitting.</li>
                                </ol>
                              </div>

                                <v-img src="https://static.igem.wiki/teams/6003/software/flowchart-ml-model.webp" alt="ML workflow" class="my-4" />
                                <div class="text-content text-center "><i>Fig. 2. Machine Learning Training Flowchart</i></div>

                           <v-card-subtitle style="font-size: 24px;">R² Learning Curve</v-card-subtitle>
                           <div class="text-content">
                             <ol>
                               <li><b>Validation R² ≈ 0.63</b> — the model explains ~63% of variation in biofilm degradation on unseen data.</li>
                               <li><b>Training R² ≈ 0.73</b> — a small train–validation gap (~0.10) suggests limited overfitting.</li>
                               <li><b>Converges quickly</b> — curves plateau after ~10–15 boosting rounds, indicating stable learning.</li>
                             </ol>
                             <v-img src="https://static.igem.wiki/teams/6003/software/r2.webp" alt="R² learning curve" class="my-4" />
                             <div class="text-content text-center "><i>Fig. 3. R² Learning Curve for Model Training and Validation</i></div>
                           </div>
                        
                           <v-card-subtitle style="font-size: 24px;">RMSE Learning Curve</v-card-subtitle>
                           <div class="text-content">
                             <ol>
                               <li><b>Validation RMSE ≈ 0.09</b> — on our 0–1 scale, typical predictions are within ~0.09 of measured degradation.</li>
                               <li><b>Training RMSE ≈ 0.08</b> — narrow gap (~0.01) confirms good generalization.</li>
                               <li><b>Stable plateau</b> — validation error flattens after ~20 rounds, avoiding unnecessary complexity.</li>
                             </ol>
                             <v-img src="https://static.igem.wiki/teams/6003/software/rmse.webp" alt="RMSE learning curve" class="my-4" />
                             <div class="text-content text-center "><i>Fig. 4. Training and Validation RMSE Across Boosting Rounds</i></div>
                           </div>
                           
                              <v-card-subtitle style="font-size: 24px;">What This Means for Wet Lab</v-card-subtitle>
                              <div class="text-content">
                                <ol>
                                  <li><b>Confident picks</b> — reliable predictions for untested enzyme ratios reduce trial-and-error.</li>
                                  <li><b>Less wasted effort</b> — small train–val gaps mean we’re modeling biology, not noise.</li>
                                  <li><b>Fast iteration</b> — quick convergence makes retraining practical whenever new data arrives.</li>
                                </ol>
                              </div>
                            
                             
                            </v-card>

                            <br>

                            <v-card :variant="alpha.card.theme" class="text-box pa-5 scroll-box">
                            <v-card-title id="API-Implementation" class="subtitle" style="font-size: 32px;"><b>How ML Model Prediction Delivered to User?</b></v-card-title>
                            <div class="text-content">
                              <p>
                             We developed a set of API endpoints to facilitate interaction between the front-end interface and the back-end machine learning (ML) model. These endpoints deliver ML model predictions and suggestions to users. 
                              </p>
                              <p>
                                The endpoints are designed to handle various tasks, including prediction requests, optimization queries, and experiment suggestions. User inputs (e.g., reaction time, enzyme ratio, and OD value) are also delivered through the API endpoints, ensuring smooth interaction with the model and improving the user experience.
                              </p>
                            </div>
                            
                            <SwaggerUI />
                            


                            </v-card>
                            <br>

                            <v-card :variant="alpha.card.theme" class="text-box pa-5 scroll-box">
                            <v-card-title id="Usage" class="subtitle" style="font-size: 32px;"><b>How to use Enzymix?</b></v-card-title>
                            <v-card-subtitle style="font-size: 24px;">Web Application (Recommended)</v-card-subtitle>
                            <div class="text-content">
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
                                <ol>
                                    <li>Add experiment rows with enzyme ratios and reaction time</li>
                                    <li>Click Predict to obtain predicted removal and uncertainty</li>
                                    <li>Use Find Optimal Mix for optimization recommendations</li>
                                    <li>Get Suggested Experiments for informative follow-ups</li>
                                    <li>Export results as CSV and visualize feature importances</li>
                                </ol>
                                <br>
                            </div>
                            <v-card-subtitle style="font-size: 24px;">Local Installation</v-card-subtitle>
                            <div class="text-content">
                                <p><b>Requirements:</b> Docker and Git</p>
                                <pre><code class="language-bash"># 1. Clone repository
git clone https://gitlab.igem.org/2025/software-tools/ncku-tainan
cd ncku-tainan/enzymix

# 2. Build and run
docker compose up --build -d biofilm-api

# 3. Access the application
# Web UI: http://localhost:8000/ui
# API docs: http://localhost:8000/docs
# Health check: http://localhost:8000/health</code></pre>
                            </div>
                            <br>
                            <v-card-subtitle style="font-size: 24px;">Retraining with Your Data (Optional)</v-card-subtitle>
                            <div class="text-content">
                                <pre><code class="language-bash"># Place your CSV as data/polished.csv
# Required columns: dspb, dnase, prok, reaction_time, percentage degradation

#Build the Docker image first if it hasn't been built yet
docker compose up --build -d biofilm-api

#Run training
docker compose --profile training run --rm biofilm-trainer
</code></pre>
                                <p>This runs the training pipeline and saves updated models in <code>ml-model/</code>.</p>
                            </div>
                            </v-card>
                            
                            <br>
                            
                            <v-card :variant="alpha.card.theme" class="text-box pa-5 scroll-box">
                            <v-card-title id="Enzymix-Conclusion" class="subtitle" style="font-size: 32px;"><b>Conclusion</b></v-card-title>
                            <div class="text-content">
                                <p>
                                    This tool integrates predictive modeling and experiment design into a single interface, lowering lab iteration time through immediate estimates, principled optimization, and targeted enzyme ratio suggestions. The modular design makes it straightforward to update models as new data arrive.
                                </p>
                                <p>
                                    Enzymix also compatible with multiple biofilm types beyond <i>S. aureus</i>, making it accessible for experts and other iGEM teams. The model can be further trained and improved with additional high-quality data.
                                </p>
                            </div>
                            </v-card>
                            <br>
                            <v-card :variant="alpha.card.theme" class="text-box pa-5 scroll-box">
                            <v-card-title id="Enzymix-References" class="subtitle" style="font-size: 32px;"><b>References</b></v-card-title>
                            <div class="text-content">
                                <p>[1] Chen, T., &amp; Guestrin, C. (2016). XGBoost: A Scalable Tree Boosting System. Proceedings of the 22nd ACM SIGKDD International Conference on Knowledge Discovery and Data Mining, 785-794.</p>
                                <p>[2] Lundberg, S. M., &amp; Lee, S. I. (2017). A Unified Approach to Interpreting Model Predictions. Advances in Neural Information Processing Systems 30, 4765-4774.</p>
                                <p>[3] Settles, B. (2009). Active Learning Literature Survey. Computer Sciences Technical Report 1648, University of Wisconsin-Madison.</p>
                                <p>[4] FastAPI Documentation. (2024). FastAPI framework, high performance, easy to learn, fast to code, ready for production. Retrieved from https://fastapi.tiangolo.com/</p>
                                <p>[5] Docker Documentation. (2024). Docker Compose overview. Retrieved from https://docs.docker.com/compose/.</p>
                                <p>[6] Akiba, T., Sano, S., Yanase, T., Ohta, T., & Koyama, M. (2019). Optuna: A Next-generation Hyperparameter Optimization Framework. Proceedings of the 25th ACM SIGKDD International Conference on Knowledge Discovery and Data Mining, 2623-2631.</p>
                                <p>[7] Varma, S., & Simon, R. (2006). Bias in error estimation when using cross-validation for model selection. BMC Bioinformatics, 7(1), 91.</p>
                            </div>
                            </v-card>
                        </div>
                        <!-- Endzyme section wrapper for sidenav top-level -->
                        <div id="Endzyme" class="section-container scroller">

                        <v-card class = ma-4 variant = tonal color = primary v-ripple>
                            <template #image>
                                <v-img src = 'https://static.igem.wiki/teams/6003/software/endzyme-logo.webp' />
                            </template>
                            <template v-slot:text>
                                <div class="wallpaper-text">
                                    A better way to create enzyme
                                </div>
                            </template>
                        </v-card>
                        <br>
                        <v-card :variant="alpha.card.theme" class="text-box pa-5 scroll-box" id = Introduction>
                                <v-card-title id="Endzyme-Introduction" class="subtitle" style="font-size: 32px;"><b>Introduction</b></v-card-title>
                                <div
                                id="Introduction"
                                title="Introduction"
                                class="text-content"
                                >
                                <p>
                                    In our wet-lab experiments, we observed that the effect of enzyme treatment was not as pronounced as expected. This can be attributed to two main factors: 
                                    <b>(1) enzyme yield</b>, and <b>(2) enzyme activity and binding efficiency</b>. To address the latter, we developed a computational pipeline aimed at optimizing enzyme activity and substrate binding efficiency.
                                </p>

                                <p>
                                    The design and optimization of enzymes for specific functions have always been a critical aspect of biotechnology. Traditional methods for enzyme engineering are often labor-intensive, requiring iterative rounds of mutation, expression, and screening. In recent years, the integration of artificial intelligence (AI) and computational biology has revolutionized this process, allowing for the in silico prediction of enzyme structures, stability, and functionality. By combining cutting-edge AI models, molecular modeling tools, and computational docking, this software provides an automated platform for novel enzyme sequence generation and efficiency analysis.
                                </p>

                                <p>
                                    The pipeline consists of two major components: 
                                    (1) a machine learning model, and 
                                    (2) screening and docking score-based evaluation. 
                                    First, the machine learning model is employed to generate and optimize protein (enzyme) sequences. These sequences are then subjected to AlphaFold for structural prediction. Next, the predicted enzyme structures are docked with the ligand, followed by screening with a scoring function to evaluate binding performance. Through this pipeline, we are able to identify and obtain a functionally improved sequence within 20 minutes.
                                </p>
                                </div>
                        </v-card>
                        <br>
                        <v-card :variant="alpha.card.theme" class="text-box pa-5 scroll-box" id = 'Machine-Learning-Model'>
                            <v-card-title id="Endzyme-ML-Model" class="subtitle" style="font-size: 32px;"><b>Machine learning Model</b></v-card-title>
                                <div
                                id="Machine learning Model"
                                title="Machine learning Model"
                                class="text-content"
                                >
                                Zymctrl is a conditional language model for the generation of artificial functional enzymes. It was trained on the UniProt database of sequences containing (Enzyme Commission) EC annotations, comprising over 37 M sequences. Given a user-defined Enzymatic Commission (EC) number, the model generates protein sequences that fulfil that catalytic reaction. The generated sequences are ordered, globular, and distant to natural ones, while their intended catalytic properties match those defined by users.
                                </div>
                                <br>
                                <div class="text-content">
                                <b>How we use Zymctrl</b>
                                <pre><code class = language-python>
generator = pipeline('text-generation', model='AI4PD/ZymCTRL')
if maxLength == None:
    max_len = len(original_sequence)
else:
    max_len = maxLength
generated_outputs = generator("＜|endoftext|＞", max_length=max_len, num_return_sequences=num_to_generate)
for output in generated_outputs:
    raw_novel_sequence = output['generated_text']
    novel_sequence = raw_novel_sequence.replace("＜|endoftext|＞", "").replace(" ", "").strip()[:max_len]
    candidate_sequences.append(novel_sequence)
                                </code></pre>  
                                </div> 
                                <br>
                                <v-card-subtitle id = Colabfold class="subtitle" style="font-size: 24px;">ColabFold</v-card-subtitle>
                                <div
                                id="ColabFold"
                                title="ColabFold"
                                class="text-content"
                                >
                                <b>ColabFold</b> is an AlphaFold2-based module. Since AlphaFold3 currently lacks an API, we are using ColabFold to fulfill this part of the pipeline.
                                </div>
                                <br>
                                <div class = "text-content">
                                    <b>How we use Colabfold</b>
                                    <pre><code class = language-python>
cmd = [
        "colabfold_batch","--msa-mode", "single_sequence",       
        str(csv_path), str(job_dir)
    ]
    if use_templates == "pdb100":
        cmd.append("--templates")
    elif use_templates == "custom" and custom_tpl_dir:
        cmd += ["--templates", "--custom-template-path", str(Path(custom_tpl_dir).resolve())]

    if amber:
        cmd.append("--amber")

    if isinstance(models, int):
        cmd += ["--num-models", str(models)]   
    if isinstance(recycles, int):
        cmd += ["--num-recycle", str(recycles)]  

    return cmd
                                    </code></pre>   
                                    </div>
                                    <br>   
                                    <v-card-subtitle id = ML-Tools class='subtitle' style="font-size: 24px;">Tools</v-card-subtitle>
                                    <div
                                    id="Tools"
                                    title="Tools"
                                    class="text-content"
                                    >
                                    - Zymctrl<br>
                                    - Colabfold
                                    </div>
                        </v-card>                                
                        <br>
                        <v-card :variant="alpha.card.theme" class="text-box pa-5 scroll-box" id = 'Screening'>
                                <v-card-title id="Endzyme-Screening" class="subtitle" style="font-size: 32px;"><b>Screening</b></v-card-title>
                                <div
                                id="Screening"
                                title="Screening"
                                class="text-content"
                                >
We use <b>mmseqs2</b> as our selection mechanism, utilizing UniProt/SwissProt as our database. Considering that artificial proteins may not be stable or reliable enough, we employ mmseqs2 to ensure the functionality and accuracy of the protein. We also check the homology to ensure that the protein can successfully fold into its tertiary structure. In our project, we generate 110 novel sequences by using Dnase1 as the template. We use homology to predict the function of the protein, identify stable structures that are similar, and further confirm its function using AutoDock.                                </div>
                                <br>
                                <div class="text-content">
                                    <b>How we use the mmseqs2</b>
                                <pre><code class = language-bash>
mmseqs search input.fasta ./swissprot result tmp

mmseqs createtsv query.fasta ./swissprot result result.tsv
                                </code></pre> 
                                </div>
                                <br>
                                <v-card-subtitle id = Screening-Tools class = 'subtitle' style="font-size: 24px;">Tools</v-card-subtitle>
                                <div
                                id="Tools"
                                title="Tools"
                                class="text-content"
                                >
                                - mmseqs2
                                </div>
                        </v-card>
                        <br>
                        <v-card :variant="alpha.card.theme" class="text-box pa-5 scroll-box" id = 'Docking'>
                                <v-card-title id="Endzyme-Docking" class="subtitle" style="font-size: 32px;"><b>Docking</b></v-card-title>
                                <div
                                id="Docking"
                                title="Docking"
                                class="text-content"
                                >
                                In our project, we use <b>AutoDock Vina</b> to optimize the performance of proteins by evaluating their interactions with small molecules. Due to a limitation of AutoDock Vina, we are unable to use polymers as docking targets. As a result, we have chosen to utilize monomers as our docking targets.
Furthermore, our goal is to make this software accessible to the broader scientific community. To achieve this, we have developed a Python script that automatically calculates the grid box, streamlining the docking process and enhancing the usability of the software for users without requiring manual configuration.
                                </div>
                                <br>
                                <div class="text-content">
                                <b>How we automatically set our gridbox in the pipeline</b>
                                <pre><code class = language-python>
from pymol import cmd
import sys

ligand_input_file = sys.argv[1]
receptor_input_file = sys.argv[2]

def get_gridbox(selection="binding_site", receptor=receptor_input_file, ligand_file=ligand_input_file, exhaustiveness=16, output_conf="conf.txt"):
    """
    Calculate grid box from selection and write Vina config file
    """
    min_coord, max_coord = cmd.get_extent(selection)
    center = [(min_coord[i] + max_coord[i]) / 2 for i in range(3)]
    size = [max_coord[i] - min_coord[i] for i in range(3)]

    print("Grid Box Center (center_x, center_y, center_z):")
    print(f"{center[0]:.3f} {center[1]:.3f} {center[2]:.3f}")
    print("Grid Box Size (size_x, size_y, size_z):")
    print(f"{size[0]:.3f} {size[1]:.3f} {size[2]:.3f}")

    with open(output_conf, "w") as f:
        f.write(f"receptor = {receptor}\n")
        f.write(f"ligand = {ligand_file}\n")
        f.write(f"center_x = {center[0]:.3f}\n")
        f.write(f"center_y = {center[1]:.3f}\n")
        f.write(f"center_z = {center[2]:.3f}\n")
        f.write(f"size_x = {size[0]:.3f}\n")
        f.write(f"size_y = {size[1]:.3f}\n")
        f.write(f"size_z = {size[2]:.3f}\n")
        f.write(f"out = vina_out.pdbqt\n")
        f.write(f"log = vina_log.txt\n")
        f.write(f"exhaustiveness = {exhaustiveness}\n")

# === PyMOL Command-line Execution ===
cmd.load(receptor_input_file, "receptor")
cmd.load(ligand_input_file, "ligand")


cmd.select("binding_site", "ligand around 10")


get_gridbox()
                                </code></pre>
                                </div>
                                <br>
                        <v-card-subtitle id = Docking-Result class = 'subtitle' style="font-size: 24px;">DockingResult</v-card-subtitle>
                        <v-card-title style="font-size: 24px;">Manual calculate gridbox</v-card-title>
                                            <v-img src = 'https://static.igem.wiki/teams/6003/software/dsp-bs-artificial.webp' />
                                            <div
                                            class="text-content"
                                            >
                                            <br>
                                            - <b>Fig 1</b>. According to Role of active-site residues of dispersin B, a biofilm-releasing β-hexosaminidase from a periodontal pathogen, in substrate hydrolysis, We select the docking site of DspersinB 
                                            </div>
                                            <br>
                                            <v-img src = 'https://static.igem.wiki/teams/6003/software/dspb-gridbox-artificial.webp' />
                                            <br>
                                            <div
                                            class="text-content"
                                            >
                                            - <b>Fig 2</b>. manual adjust the gridbox
                                            </div>
                                            <div class='two-column-layout'>
                                        <v-card-title style="font-size: 24px;">Manual</v-card-title>
                                        <pre><code class = language-bash>
mode |   affinity | dist from best mode
     | (kcal/mol) | rmsd l.b.| rmsd u.b.
-----+------------+----------+----------
   1         -5.7      0.000      0.000
   2         -5.5      1.433      2.844
   3         -5.4     11.919     13.642
   4         -5.4      1.941      4.863
   5         -5.4      2.771      5.359
   6         -5.4     25.826     26.550
   7         -5.2      2.162      2.945
   8         -5.2      9.677     11.046
   9         -5.1     16.039     17.013
Writing output ... done. 
                                        </code></pre>
                                        <v-card-title style="font-size: 24px;">Auto version</v-card-title>
                                        <pre><code class = language-bash>
mode |   affinity | dist from best mode
     | (kcal/mol) | rmsd l.b.| rmsd u.b.
-----+------------+----------+----------
   1         -5.2      0.000      0.000
   2         -5.0      1.341      2.641
   3         -4.9      1.834      5.380
   4         -4.7      2.187      4.892
   5         -4.7      2.067      3.117
   6         -4.7      1.938      5.493
   7         -4.4      2.044      2.586
   8         -4.1      1.590      1.674
   9         -4.1      2.071      2.456
Writing output ... done.                        
                                        </code></pre>
                                        </div>
                                        <br>
                                        <img src="https://static.igem.wiki/teams/6003/software/docking-result.webp" style="width: 100%; height: 100%; object-fit: contain;"/>
                                        <br>
                                        <div
                                            class="text-content"
                                            >
                                            - <b>Fig 4</b>. Average of docking score
                                        </div>

                                        <img src="https://static.igem.wiki/teams/6003/software/artificial-docking.webp"/>
                                        <br>
                                        <div
                                            class="text-content"
                                            >
                                            - <b>Fig 5</b>. Result of manual autodocking
                                        </div>
                                        <img src="https://static.igem.wiki/teams/6003/software/pipline-docking.webp" />
                                        <div
                                            class="text-content"
                                            >
                                            - <b>Fig 6</b>. Result of pipline docking
                                        </div>

                        </v-card>
                        <br>                 
                        <v-card :variant="alpha.card.theme" class="text-box pa-5 scroll-box" id = 'Result'>
                        <v-card-title id="Endzyme-Result" class="subtitle" style="font-size: 32px;"><b>Result</b></v-card-title>                                  
                                
                                <div class="text-content">
                                <b>How we use the mmseqs2</b>
                                <pre><code class = language-bash>
mmseqs search input.fasta ./swissprot result tmp

mmseqs createtsv query.fasta ./swissprot result result.tsv
                                </code></pre>  
                                </div> 
                                <v-card-title style="font-size: 24px;">Tools</v-card-title>

                                <div
                                id="Tools"
                                title="Tools"
                                class="text-content"
                                >
                                - mmseqs2
                                </div> 
                        </v-card>
                        <br> 
                            <v-card :variant="alpha.card.theme" class="text-box pa-5 scroll-box" id = Usage>
                                <v-card-title id="Endzyme-Usage" class="subtitle" style="font-size: 32px;"><b>How to use this software</b></v-card-title>
                                    <a href="https://github.com/iGEM-NCKU/endzyme">&nbsp;&nbsp;&nbsp;&nbsp;This is Our Github page</a>
                                <v-card-title style="font-size: 32px;">Usage</v-card-title>
                                <div
                                id="Using"
                                title="Using"
                                class="text-content"
                                >
                                We Strongly recommand you to use read the readme file in our github first.
                                </div>
                                 <div
                                class="text-content"
                                >
                                <br>
                                <p>⚠️ <strong>Important:</strong> To ensure proper functionality, Please download <a href="https://github.com/YoshitakaMo/localcolabfold">localcolabfold</a> before building env.</p>
                                </div>
                                <v-card-title id = Environment-Setup class = 'subtitle' style="font-size: 24px;"><b>1. Environment Setup</b></v-card-title>
                                <div
                                class="text-content">
                                    For Windows User :
                                    <ol>
                                </ol>
                                <pre><code class="language-bash">git clone https://github.com/iGEM-NCKU/endzyme.git
cd endzyme
./windows_conda_install.ps1
                                </code></pre>
                                    For Linux User :
<pre><code class="language-bash">git clone https://github.com/iGEM-NCKU/endzyme.git
cd endzyme
./linux_conda_install.sh
</code></pre>               
                                    For Mac User :
<pre><code class="language-bash">git clone https://github.com/iGEM-NCKU/endzyme.git
cd endzyme
./mac_conda_install.sh
</code></pre>            
                                </div>
                                <v-card-title id = Run-Flask-via-Gunicorn class = 'subtitle' style="font-size: 24px;"><b>2. Run Flask via Gunicorn (optional)</b></v-card-title>
                                <div
                                class = "text-content">
                                git clone our repo
                                <pre><code class = language-bash >
git clone https://github.com/iGEM-NCKU/endzyme.git
                                </code></pre>    
                                Navigate to the project root:
                                <pre><code class = language-bash >
cd /home/path/to/root
                                </code></pre>
                                Start Gunicorn (example: 4 workers, listening on port 8001):
                                <pre><code class = language-bash >
gunicorn -w 4 -b 127.0.0.1:8001 main:app
                                </code></pre>
                                </div>
                                <v-card-title  id = Configure-and-Start-Nginx class = 'subtitle' style="font-size: 24px;"><b>3. Configure and Start Nginx</b></v-card-title>
                                <div
                                class = "text-content">
                                <p>⚠️ <strong>Important:</strong>  if you want let the server run it continuously, Please uncommit these</p>
<pre><code class="language-python">
# for setting server
# CORS(app,resources={
#     r&quot;/api/*&quot;:{&quot;origins&quot; : [&quot;http://localhost:4000&quot;, &quot;http://54.237.111.117&quot;]},
#     r&quot;/static/*&quot;: {&quot;origins&quot;: [&quot;http://localhost:4000&quot;, &quot;http://54.237.111.117&quot;]
#     }})
</code></pre>
                                </div>
                                <br>
                                <div
                                class = "text-content">
                                <pre><code class = "language-nginx">
upstream endzyme {
    server 127.0.0.1:8001;
}

server {
    listen 80;
    server_name _;
    root /home/path/to/root;

    location /static/ {
        alias /home/path/to/root/static/;
    }

    location /api/ {
        proxy_pass http://endzyme;
        proxy_connect_timeout 600s;
        proxy_send_timeout 600s;
        proxy_read_timeout 600s;
    }
}
                                </code></pre>
                                <br>
                                Then restart Nginx:
                                <br>
                            <pre><code class = "language-bash">
sudo nginx -t        # test configuration
sudo nginx -s reload
                            </code></pre>
                            <br>
                            Now the Endzyme frontend and API are available at <b><i>http://&lt;server-ip&gt;/</i></b>.
                            </div>
                            <v-card-title  id = Run-flask class = 'subtitle' style="font-size: 24px;"><b>3. Run Flask</b></v-card-title>
                            <div class = text-content>
                                <pre><code class="language-bash">
python main.py
                             </code></pre>
                            </div>
                            <v-card-title id="API_INTRODUCTION" class="subtitle" style="font-size: 32px;">4. API introduction</v-card-title>
                            <div class = text-content>
<strong>1. This will get the ligand feom your input &lt;filename&gt;</strong>
                            <p><code>@app.route('/api/pdb/&lt;filename&gt;')</code></p>
<strong>2. This will start the ML model, create new enzyme base on the your ligand, due to the database limit, you can put your <code>.cif</code> file in the folder <code>/static/&lt;filename&gt;_pdb_files/</code></strong>
                            <p><code>@app.route('/api/ligand', methods=['POST'])</code></p>
<strong>3. This method will find the ligand, due to the database limit, you can put your <code>.sdf</code> file in the folder <code>enzyme_ligand_structures</code></strong>

                            <p><code>@app.route('/api/dockLigand', methods=['POST'])</code></p>
<strong>4. it will start the AutoDocking process</strong>
                            <p><code>@app.route('/api/startDocking', methods=['POST'])</code></p>
<strong>5. it will do the alignment</strong>
<p><code>@app.route(&quot;/api/alignment&quot;, methods=[&quot;POST&quot;,&quot;OPTIONS&quot;])</code></p>
<strong>6. runing AF2 local</strong>
<p><code>@app.route('/api/confirm', methods=['POST'])</code></p>

                            </div>
                            </v-card>
                            <br>
                            <v-card :variant="alpha.card.theme" class="text-box pa-5 scroll-box" id = Reference>
                                <v-card-title id="Endzyme-Reference" class="subtitle" style="font-size: 32px;">Reference</v-card-title>
                                <div
                                id="Reference"
                                title="Reference"
                                class="text-content"
                                >
                                <p>
                                1. <b>Structural Analysis of Dispersin B, a Biofilm-releasing Glycoside Hydrolase from the Periodontopathogen Actinobacillus actinomycetemcomitans.</b> Ramasubbu, N., Thomas, L.M., Ragunath, C., Kaplan, J.B.(2005) J Mol Biology 349
                                </p>
                                <p>
                                2. <b>What can be done with a good crystal and an accurate beamline?</b> Wang, J., Dauter, M., Dauter, Z.(2006) Acta Crystallogr D Biol Crystallogr 62
                                </p>
                                <p>
                                3. <b>The Structure of Human DNase I Bound to Magnesium and Phosphate Ions Points to a Catalytic Mechanism Common to Members of the DNase I-Like Superfamily.</b> Parsiegla, G., Noguere, C., Santell, L., Lazarus, R.A., Bourne, Y.(2012) Biochemistry 51: 10250
                                </p>
                                <p>
                                4. <b>Conditional language models enable the efficient design of proficient enzymes</b>  Geraldene Munsamy, Ramiro Illanes-Vicioso, Silvia Funcillo, Ioanna T. Nakou, Sebastian Lindner, Gavin Ayres, Lesley S. Sheehan, Steven Moss, Ulrich Eckhard, Philipp Lorenz, Noelia Ferruz(2024), biorxiv
                                </p>
                                <p>
                                5. <b>ColabFold: Making protein folding accessible to all.</b> Mirdita M, Schütze K, Moriwaki Y, Heo L, Ovchinnikov S and Steinegger M.(2022) Nature Methods
                                </p>
                                <p>
                                6. <b>Highly accurate protein structure prediction with AlphaFold.</b> Jumper et al.(2021) Nature 
                                </p>
                                <p>
                                7. <b>MMseqs2 enables sensitive protein sequence searching for the analysis of massive data sets.</b> Steinegger M and Soeding J, (2017)Nature Biotechnology.
                                </p>
                                <p>
                                8. <b>AutoDock Vina 1.2.0: New Docking Methods, Expanded Force Field, and Python Bindings.</b> J. Eberhardt, D. Santos-Martins, A. F. Tillack, and S. Forli. (2021). Journal of Chemical Information and Modeling.
                                </p>
                                <p>
                                9. <b>AutoDock Vina: improving the speed and accuracy of docking with a new scoring function, efficient optimization and multithreading</b>O. Trott, A. J. Olson, (2010) Journal of Computational Chemistry 31 
                                </p>
                                <p>
                                10. <b>Role of active-site residues of dispersin B, a biofilm-releasing β-hexosaminidase from a periodontal pathogen, in substrate hydrolysis</b>Suba G. A. Manuel, Chandran Ragunath, Hameetha B. R. Sait, Era A. Izano, Jeffrey B. Kaplan, Narayanan Ramasubbu.(2007). The FBES journal, Volume274, Issue22
                                </p>
                                </div>
                        </v-card>
                        </div>
                        </v-col>
                    <v-col cols = 1 />
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
import SwaggerUI from "./SwaggerUI.vue";

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
            },
        }
    },
    components: {
        title_nav,
        page_loader,
        sidenav,
        SwaggerUI,
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
        hljs.highlightAll();
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
        scrollToSection(sectionId) {
            const el = document.getElementById(sectionId);
            if (el && el.scrollIntoView) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        },
        openExternal(url) {
            try {
                window.open(url, '_blank', 'noopener');
            } catch (e) {
                console.error('Failed to open external link:', e);
            }
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


</style>
