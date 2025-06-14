'use strict'

// const fs = require('fs') // Commented out - use electron API instead
// const path = require('path') // Commented out - use electron API instead

// This module needs to be refactored to use electron API
console.log('module.js - File system operations need to be moved to main process');

let moduleName = process.argv[2]
let template = fs.readFileSync(
  path.join(__dirname, 'module.template.txt'),
  'utf8'
)

fs.writeFileSync(
  path.join(__dirname, `../../app/src/vuex/modules/${moduleName}.js`),
  template
)

console.log(`\n\x1b[33m[vuex]\x1b[0m  module "${moduleName}" has been created`)
console.log(path.join(__dirname, `../../app/src/vuex/modules/${moduleName}.js`))