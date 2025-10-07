const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  pages: {
    index: 'src/index/main.js',
    members: 'src/members/main.js',
    wetlab: 'src/wetlab/main.js',
    'human-practices': 'src/hp/main.js',
    education: 'src/education/main.js',
    'introduction-to-problems': 'src/introduction/main.js',
    test: 'src/test/main.js',
    software: 'src/software/main.js',
    model: 'src/model/main.js',
    experiments: 'src/experiments/main.js',
    engineering: 'src/engineering/main.js',
    description: 'src/description/main.js',
    results: 'src/results/main.js',
    notebook: 'src/notebook/main.js',
    'safety-and-security': 'src/safety-and-security/main.js',
    attributions: 'src/attributions/main.js',
    contribution: 'src/contribution/main.js',
    hp_overview: 'src/hp/overview/main.js',
    'hp_integrated-human-practice': 'src/hp/integrated-human-practice/main.js',
    hp_education: 'src/hp/education/main.js',
    'hp_connecting-with-igemers': 'src/hp/connecting-with-igemers/main.js',
    hp_entrepreneurship: 'src/hp/entrepreneurship/main.js',
    hp_fundraising: 'src/hp/fundraising/main.js',
    'sponsor-Partnership': 'src/sponsor/main.js'
    }
})