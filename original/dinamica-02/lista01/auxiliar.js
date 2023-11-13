var R1 = true;
var R2 = false;
var R3 = false;
var R4 = true;
var R5 = false;

/* ---------- */
function v1(){
	if(R1 == true){
		document.getElementById('01a1').hidden = 1;
		document.getElementById('01b1').hidden = 0;			
		
		document.getElementById('acertou1').hidden = 0;	
		document.getElementById('errou1').hidden = 1;
	}else{
		document.getElementById('01a1').hidden = 1;
		document.getElementById('01c1').hidden = 0;		
		
		document.getElementById('acertou1').hidden = 1;	
		document.getElementById('errou1').hidden = 0;		
	}
	document.getElementById('02a1').hidden = 0;	
	document.getElementById('02b1').hidden = 1;
	document.getElementById('02c1').hidden = 1;	
}

function f1(){
	if(R1 == false){
		document.getElementById('02a1').hidden = 1;
		document.getElementById('02b1').hidden = 0;			

		document.getElementById('acertou1').hidden = 0;	
		document.getElementById('errou1').hidden = 1;
	}else{
		document.getElementById('02a1').hidden = 1;
		document.getElementById('02c1').hidden = 0;		
		
		document.getElementById('acertou1').hidden = 1;	
		document.getElementById('errou1').hidden = 0;		
	}
	document.getElementById('01a1').hidden = 0;	
	document.getElementById('01b1').hidden = 1;
	document.getElementById('01c1').hidden = 1;	
}

/* ---------- */
function v2(){
	if(R2 == true){
		document.getElementById('01a2').hidden = 1;
		document.getElementById('01b2').hidden = 0;			
		
		document.getElementById('acertou2').hidden = 0;	
		document.getElementById('errou2').hidden = 1;
	}else{
		document.getElementById('01a2').hidden = 1;
		document.getElementById('01c2').hidden = 0;		
		
		document.getElementById('acertou2').hidden = 1;	
		document.getElementById('errou2').hidden = 0;		
	}
	document.getElementById('02a2').hidden = 0;	
	document.getElementById('02b2').hidden = 1;
	document.getElementById('02c2').hidden = 1;	
}

function f2(){
	if(R2 == false){
		document.getElementById('02a2').hidden = 1;
		document.getElementById('02b2').hidden = 0;			

		document.getElementById('acertou2').hidden = 0;	
		document.getElementById('errou2').hidden = 1;
	}else{
		document.getElementById('02a2').hidden = 1;
		document.getElementById('02c2').hidden = 0;		
		
		document.getElementById('acertou2').hidden = 1;	
		document.getElementById('errou2').hidden = 0;		
	}
	document.getElementById('01a2').hidden = 0;	
	document.getElementById('01b2').hidden = 1;
	document.getElementById('01c2').hidden = 1;	
}


/* ---------- */
function v3(){
	if(R3 == true){
		document.getElementById('01a3').hidden = 1;
		document.getElementById('01b3').hidden = 0;			
		
		document.getElementById('acertou3').hidden = 0;	
		document.getElementById('errou3').hidden = 1;
	}else{
		document.getElementById('01a3').hidden = 1;
		document.getElementById('01c3').hidden = 0;		
		
		document.getElementById('acertou3').hidden = 1;	
		document.getElementById('errou3').hidden = 0;		
	}
	document.getElementById('02a3').hidden = 0;	
	document.getElementById('02b3').hidden = 1;
	document.getElementById('02c3').hidden = 1;	
}

function f3(){
	if(R3 == false){
		document.getElementById('02a3').hidden = 1;
		document.getElementById('02b3').hidden = 0;			

		document.getElementById('acertou3').hidden = 0;	
		document.getElementById('errou3').hidden = 1;
	}else{
		document.getElementById('02a3').hidden = 1;
		document.getElementById('02c3').hidden = 0;		
		
		document.getElementById('acertou3').hidden = 1;	
		document.getElementById('errou3').hidden = 0;		
	}
	document.getElementById('01a3').hidden = 0;	
	document.getElementById('01b3').hidden = 1;
	document.getElementById('01c3').hidden = 1;	
}

/* ---------- */
function v4(){
	if(R4 == true){
		document.getElementById('01a4').hidden = 1;
		document.getElementById('01b4').hidden = 0;			
		
		document.getElementById('acertou4').hidden = 0;	
		document.getElementById('errou4').hidden = 1;
	}else{
		document.getElementById('01a4').hidden = 1;
		document.getElementById('01c4').hidden = 0;		
		
		document.getElementById('acertou4').hidden = 1;	
		document.getElementById('errou4').hidden = 0;		
	}
	document.getElementById('02a4').hidden = 0;	
	document.getElementById('02b4').hidden = 1;
	document.getElementById('02c4').hidden = 1;	
}

function f4(){
	if(R4 == false){
		document.getElementById('02a4').hidden = 1;
		document.getElementById('02b4').hidden = 0;			

		document.getElementById('acertou4').hidden = 0;	
		document.getElementById('errou4').hidden = 1;
	}else{
		document.getElementById('02a4').hidden = 1;
		document.getElementById('02c4').hidden = 0;		
		
		document.getElementById('acertou4').hidden = 1;	
		document.getElementById('errou4').hidden = 0;		
	}
	document.getElementById('01a4').hidden = 0;	
	document.getElementById('01b4').hidden = 1;
	document.getElementById('01c4').hidden = 1;	
}

/* ---------- */
function v5(){
	if(R5 == true){
		document.getElementById('01a5').hidden = 1;
		document.getElementById('01b5').hidden = 0;			
		
		document.getElementById('acertou5').hidden = 0;	
		document.getElementById('errou5').hidden = 1;
	}else{
		document.getElementById('01a5').hidden = 1;
		document.getElementById('01c5').hidden = 0;		
		
		document.getElementById('acertou5').hidden = 1;	
		document.getElementById('errou5').hidden = 0;		
	}
	document.getElementById('02a5').hidden = 0;	
	document.getElementById('02b5').hidden = 1;
	document.getElementById('02c5').hidden = 1;	
}

function f5(){
	if(R5 == false){
		document.getElementById('02a5').hidden = 1;
		document.getElementById('02b5').hidden = 0;			

		document.getElementById('acertou5').hidden = 0;	
		document.getElementById('errou5').hidden = 1;
	}else{
		document.getElementById('02a5').hidden = 1;
		document.getElementById('02c5').hidden = 0;		
		
		document.getElementById('acertou5').hidden = 1;	
		document.getElementById('errou5').hidden = 0;		
	}
	document.getElementById('01a5').hidden = 0;	
	document.getElementById('01b5').hidden = 1;
	document.getElementById('01c5').hidden = 1;	
}