const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  pages: {
    index: 'src/index/main.js',
    members: 'src/members/main.js',
    wetlab: 'src/wetlab/main.js',
    'integrated-human-practices': 'src/hp/main.js',
    education: 'src/education/main.js',
    'introduction-to-problems': 'src/introduction/main.js',
    test: 'src/test/main.js'
  }
})
