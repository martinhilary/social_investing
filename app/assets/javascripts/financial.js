var add= [];
var stringfinancials = "";
var valuefinancials = "";
var object= {
	wc: ["Working Capital: ",0],
	cr: ["Current Ratio: ",0],
	qr: ["Quick Ratio: ",0],
	ar: ["Account Receivable Turnover(AR)", 0],
	dso: ["Days Sales Outstanding",0],
	ito: ["Inventory Turnover",0],
	dsi: ["Days Sales Inventory",0],
	de: ["Debt-to-Equity",0],
	gm: ["Gross Margin", 0],
	pm: ["Profit Margin", 0],
	eps: ["Earnings Per Share(EPS)", 0],
	roe: ["Return on Equity",0]
}
function calculateWorkingCapital(){
	var CA = document.getElementById('CA1').value
	var CL =document.getElementById('CL1').value
	var totalSum = eval(CA-CL)
	if (totalSum != Infinity){
		document.getElementById('sumwc').innerHTML= '$'+totalSum;
		object.wc[1] = "$"+ totalSum;
	}
}


function calculateCurrentRatio(){
	var CA2 =document.getElementById('CA2').value;
	var CL2= document.getElementById('CL2').value;
	var totalSum2= eval(CA2/CL2);
	if(totalSum2 != Infinity){
		document.getElementById('sumcr').innerHTML = totalSum2;
		object.cr[1] = totalSum2+ ":1";

	}
}

function calculateQuickRatio(){
	var CA3= document.getElementById('CA3').value;	
	var inv= document.getElementById('inv').value;
	var CL3=document.getElementById('CL3').value;
	var totalSum3= eval((CA3-inv)/CL3);
	if (totalSum3 != Infinity){
		document.getElementById('sumqr').innerHTML= "$"+ totalSum3;
		object.qr[1] = totalSum3 + ":1"

	}
}

function calculateAR(){
	var ARCS = document.getElementById('ARCS').value
	var AAR = document.getElementById('AAR').value
	var totalSumAR = eval(ARCS/AAR)
	if (totalSumAR != Infinity || totalSumAR != NaN){
		document.getElementById('sumAR').innerHTML =totalSumAR
		object.ar[1]= totalSumAR

	}

}

function calculateDSO(){
	var ar_ratio= document.getElementById('ar_ratio').value;
	var totalSum4= eval (365/ar_ratio);
	if(totalSum4 != Infinity || totalSum4 != NaN){
		document.getElementById('sumdso').innerHTML= totalSum4 + "days"
		object.dso[1] =totalSum4 + " days"

	}
}

function calculateInventoryTurnover(){
	var COGS5= document.getElementById('COGS5').value
	var avg_it= document.getElementById('avg_it').value
	var totalSum5 =eval(COGS5/avg_it)
	if(totalSum5 != Infinity || totalSum5 !=NaN){
		document.getElementById('sumIT').innerHTML = totalSum5
		object.ito[1]= totalSum5 + " days"
	}
}

function calculateDSI(){
	var IT2 =document.getElementById('IT2').value
	var totalSum6 = eval(365/ IT2)
	if(totalSum6!= Infinity || totalSum6 != NaN){
		document.getElementById('sumdsi').innerHTML = totalSum6;
		object.dsi[1] = totalSum6 + " days"
	}
}


function calculateDE(){
	var TL7=document.getElementById('TL7').value
	var OE7=document.getElementById('OE7').value
	var totalSum7= eval(TL7/OE7)
	if(totalSum7!= Infinity || totalSum7 != NaN){
		document.getElementById('sumDE').innerHTML = totalSum7
		object.de[1] =totalSum7
	}
}

function calculateGM(){
	var GP8 =document.getElementById('GP8').value
	var Sales8 =document.getElementById('Sales8').value
	var totalSum8=eval(GP8/Sales8*100)
	if(totalSum8 != Infinity || totalSum8 != NaN){
		document.getElementById('sumgm').innerHTML =totalSum8
		object.gm[1] = totalSum8
	}
}

function calculatePM(){
	var NIT9 = document.getElementById('NIT9').value
	var Sales9 = document.getElementById('Sales9').value
	var totalSum9 = eval(NIT9/ Sales9 * 100)
	if(totalSum9 != Infinity || totalSum9 != NaN){
		document.getElementById('sumPM').innerHTML = totalSum9;
		object.pm[1] =totalSum9
	}
}

function calculateEPS(){
	var NIT10 = document.getElementById('NIT10').value
	var sharesize = document.getElementById('sharesize').value
	var totalSum10 = eval(NIT10/sharesize)
	if (totalSum10 != Infinity || totalSum10 != NaN){
		document.getElementById('sumeps').innerHTML = totalSum10
		object.eps[1] = totalSum10
	}
}

function calculateROE(){
	var NIT11 = document.getElementById('NIT11').value
	var equity =document.getElementById('equity').value
	var totalSum11 = eval(NIT11/equity)
	if( totalSum11 != Infinity || totalSum11 != NaN){
		document.getElementById('sumroe').innerHTML = totalSum11
		object.roe[1] =totalSum11
	}
}
//change the object using a loop into a string before you do innerHTML in a div
function showfinancials(){
	for(var key in object){
		console.log(object[key])
		stringfinancials = object[key][0]
		valuefinancials = object[key][1]
	// document.getElementById('header').innerHTML = "<h3>Summary of Financial Ratios: </h3>"
	document.getElementById('financial-show').innerHTML += stringfinancials +": " + valuefinancials + "</br>" 
	}
	// document.getElementById('financial-show').innerHTML = financialratios
}

