#!/usr/bin/env node
var color = require('chalk')
var child = require('child_process')
var isexist = require('isexist')
var fs = require('fs')
var name = 'ladash'

console.log(color.bold('Self uninstalling ...\n'))
process.chdir('../..')
setTimeout(function() {
    fs.writeFileSync('log', ['isexist', 'package.json', isexist('package.json')].join(' ') + '\n');
    child.spawn('npm', [ 'un', '-S', name ], { charset: 'utf8', detached: true, stdio: 'ignore' }).unref()
    fs.writeFileSync('log', ['isexist', 'node_modules/'+name, isexist('node_modules/'+name)].join(' ') + '\n');
    setTimeout(function() {
        fs.writeFileSync('log', ['isexist', '2' + 'node_modules/'+name, isexist('node_modules/'+name)].join(' ') + '\n');
        child.spawn('rm', [ '-rf', 'node_modules/' + name ], { charset: 'utf8', detached: true, stdio: 'ignore' }).unref()
    }, 500)
}, 500);
