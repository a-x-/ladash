#!/usr/bin/env node
var color = require('chalk')
var child = require('child_process')
var name = 'ladash'

console.log(color.bold('Self uninstalling ...\n'))
console.log('child', process.cwd())
setTimeout(function() {
    child.spawn('npm', [ 'un', '-S', name ], { charset: 'utf8', detached: true, stdio: 'ignore' }).unref()
    child.spawn('rm', [ '-rf', 'node_modules/' + name ], { charset: 'utf8', detached: true, stdio: 'ignore' }).unref()
}, 500);
