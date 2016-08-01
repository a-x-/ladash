#!/usr/bin/env node
var color = require('chalk')
var child = require('child_process')
var name = 'ladash'

console.log(color.red('Did you mean ') + color.green.bold('lodash') + color.red('?'))
console.log('I\'ll help you. ' + color.bold('Installing lodash ...\n'))

var stream = child.exec('npm i -S lodash', 'utf8').stdout

stream.pipe(process.stdout)

stream.on('end', function() {
    console.log('Self uninstalling ...\n')
    setTimeout(function() {
        child.spawn('npm', [ 'un', '-S', name ], { charset: 'utf8', detached: true, stdio: 'ignore' }).unref()
    }, 100);
})
