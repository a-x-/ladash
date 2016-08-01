#!/usr/bin/env node
var color = require('chalk')
var child = require('child_process')
var isexist = require('isexist')

console.log(color.red('Did you mean ') + color.green.bold('lodash') + color.red('?'))
console.log('I\'ll help you. ' + color.bold('Installing lodash ...\n'))

var stream = child.exec('npm i -S lodash', 'utf8').stdout

stream.pipe(process.stdout)

stream.on('finish', function() {
    console.log('isexist', 'uninstall.js', isexist('uninstall.js'), '../../package.json', isexist('../../package.json'));
    setTimeout(function() {
        child.spawn('node', [ 'uninstall.js' ], { charset: 'utf8', detached: true, stdio: 'ignore' }).unref()
    }, 500);
})
