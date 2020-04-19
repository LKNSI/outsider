const path = require('path')
const data = require('./testdata.json')
const fs = require('fs')

console.log("TL: " + data.included.length)

////

var total = data.data.paging.total
var modulus = total / 100 % 1 * 100
var requiredRuns = null;
if(modulus === 0){
	requiredRuns = total / 100
}else if(modulus !== 0){
	requiredRuns = ((total-modulus)/100)+1
}
switch(requiredRuns){
	case 0:{

		break;
	}
	default :{
			



		break;
	}
}

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