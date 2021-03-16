const process = require('process');
var franc = require('franc');
const langs = require('langs');
const lan = process.argv[2];
// console.log(lan);
var code = franc(lan);
// console.log(code);
var k = langs.where("3", code);
console.log(k.name);
