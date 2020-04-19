const path = require('path')
const data = require('./testdata.json')
const fs = require('fs')
const axios = require('axios')
const puppeteer = require('puppeteer');

////
/*

	// I honestly respect process improvement, but I do believe that it's been commercialized to the point where it's like Rich-Dad Poor-Dad. 
	// It's just selling a dream now. Process improvement involves looking within, not to some agency to give you a certificate.
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


const skilledInMicrosoftOffice = {
	requiredRuns: null,
	runStore:{

	}
}

const seekingMOTIVATEDcandidate = async(nsync) => {
	return new Promise(async(resolve,reject) =>{
		/*axios.get("https://www.linkedin.com/checkpoint/lg/login-submit",{},{headers:{

		}})*/
		const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
		const page = await browser.newPage();
		await page.goto("https://www.linkedin.com/login?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin", {waitUntil: 'networkidle2'})
		var compare_success_a = page.url();

		await page.waitForSelector("[name='username']");
		await page.type("[name='username']", nsync.username);
		await page.keyboard.press('Tab',{delay: 166});
		await page.keyboard.type(nsync.password, {delay: 167});
		await page.keyboard.press('Tab',{delay: 402});
		await page.keyboard.press('Tab',{delay: 245});
		await page.keyboard.press('Tab',{delay: 194});
		await page.keyboard.press('Tab',{delay: 170});
		await page.keyboard.press('Enter');

		var compare_success_b = page.url();
		if (compare_success_a == compare_success_b) {
			console.error("Incorrect Password");
			await browser.close();
		  	reject();
		}
		var dh = page.response.headers()
		resolve(dh);

	})
}




const profitHunter = async(nsync) => {
	return new Promise((resolve,reject) => {
		try{
			var total = nsync.data.paging.total
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

const keyPerformanceIndicators = async(nsync) => {
	return new Promise((resolve,reject) => {
		try{
			var ctl = nsync.included.length
			var ctr = nsync.included		
			var ctf = []	
			for(i = 0; i < ctl; i++){
				if(typeof ctr[i].firstName !== "undefined"){
					let key = ""+ctr[i].firstName+""+ctr[i].lastName
					ctf.push(key)
				}
			}
			resolve(ctf)
		}catch(err){
			reject(err)
		}		
	})	
}

//profitHunter(data)


seekingMOTIVATEDcandidate()
.then(k => console.log(k))
.catch(k => console.log(k))

//.then(k => keyPerformanceIndicators(data))
//.then(k => console.log(k))
//.catch(k => console.log(k))




////
/*
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
*/