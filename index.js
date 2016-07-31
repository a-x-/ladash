#!/usr/bin/env node
var color = require('chalk');
console.log(color.red('Did you mean ') + color.green.bold('lodash') + color.red('?'));
console.log('I\'ll help you. ' + color.bold('Installing lodash ...\n'));
require('child_process').exec('npm i -S lodash', 'utf8').stdout.pipe(process.stdout);
