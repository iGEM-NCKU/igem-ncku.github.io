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
    result: 'src/result/main.js',
    notebook: 'src/notebook/main.js',
    'safety-and-security': 'src/safety-and-security/main.js',
    attributions: 'src/attributions/main.js',
    contribution: 'src/contribution/main.js'
    }
})