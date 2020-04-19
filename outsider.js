const path = require('path')
const data = require('./testdata.json')
const fs = require('fs')

////
/*

	// I honestly respect process improvement, but I do believe that it's been commercialized to the point where it's like Rich-Dad Poor-Dad. It's just selling a dream now. Process improvement involves looking within, not to some agency to give you a certificate.
	//
	// The fact that these jokes can cause disruptive feelings is truth enough of an emotional connection to the idea, rather than the idea standing on its own merits.

			
			😤		Not gonna lie, this is totally me when scrumming	😤

	Oh you don't have a SMART Aigle Tribe™️ Level 224 Certificate? 

	I can't hear you with my AirTribes in.

	Aigle? Don't you mean DietLean?

	Brad: [to Master-Black-Belt Senpai] Can we turn our team into masters?
	John: [pleading] It'll give us so much extra space in our team to see anything that just has immediate benefit through.
	Chris: You're project lead, you can do what you want.
	John: This is the funnest [insert short lived project that required extended trial and error to only be shelved after a week] ever!

	A team in Lego city have fallen into collective Creativity! Build the Aigle decentralizer and save the day!

	You ever heard of Microservices? It's this thing everyone who doesn't need at their scale, forces themselves to use because they think monolithic architecture is wack. ... Yeah just like Aigle!


*/
////



const profitHunter = async() => {
	return new Promise((resolve,reject) => {
		try{
			var total = data.data.paging.total
			var modulus = total / 100 % 1 * 100
			var requiredRuns = null;
			if(modulus === 0){
				requiredRuns = total / 100
				resolve(requiredRuns)
			}else if(modulus !== 0){
				requiredRuns = ((total-modulus)/100)+1
				resolve(requiredRuns)
			}	
		}catch(err){
			reject(err)
		}		
	})
}

const keyPerformanceIndicators = async() => {
	return new Promise((resolve,reject) => {
		try{
			var ctl = data.included.length
			var ctf = []
			var ctr = data.included			
			for(i = 0; i < ctl; i++){
				if(typeof ctr[i].firstName !== "undefined"){
					let key = ""+ctr[i].firstName+""+ctr[i].lastName
					ctf.push(key)
				}
			}
		}catch(err){

		}		
	})	
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