const path = require('path')
const data = require('./testdata.json')
const fs = require('fs')

console.log("TL: " + data.included.length)

////
var total = data.data.paging.total
var modulus = total / 100 % 1 * 100
console.log({Total: total, Modulus: Math.floor(modulus), RequiredRuns: (((total-modulus) / 100))+1})
////
var ctl = data.included.length
var ctf = []
var ctr = data.included

for(i = 0; i < ctl; i++){
	if(typeof ctr[i].firstName !== "undefined"){
		ctf.push(ctr[i])
	}
}
console.log("CL: " +ctf.length)
fs.writeFileSync('extracted.json',JSON.stringify(ctf))