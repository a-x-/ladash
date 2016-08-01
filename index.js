#!/usr/bin/env node
var color = require('chalk')
var name = 'ladash'

console.log(color.red('Did you mean ') + color.green.bold('lodash') + color.red('?'))
console.log('I\'ll help you. ' + color.bold('Installing lodash ...\n'))

var stream = require('child_process').exec('npm i -S lodash', 'utf8').stdout

stream.pipe(process.stdout)

stream.on('end', function() {
    console.log('Self uninstalling ...\n')
    require('child_process').exec('npm un -S ' + name + '; rm -rf node_modules/' + name, 'utf8').stdout
        .pipe(process.stdout)
})
