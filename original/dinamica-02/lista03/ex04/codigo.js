/* -------- */
let pontos = 5;
let validarsom = false;
/* -------- */
let valor1;
let valor2;
let valor3;	
let valor4;	
/* -------- */
function pontuacao(){	
	if(valor1 != R1 || valor2 != R2 || valor3 != R3 || valor4 != R4){		
		pontos = pontos - 1;
		document.getElementById('pontos').innerHTML = pontos;
	}		
}

function confirmar(){		
	valor1 = document.formulario.r1.value;
	valor2 = document.formulario.r2.value;
	valor3 = document.formulario.r3.value;	
	valor4 = document.formulario.r4.value;	
	//pontuacao();
	document.formulario.r1.disabled = 1;	
	document.formulario.r2.disabled = 1;	
	document.formulario.r3.disabled = 1;
	document.formulario.r4.disabled = 1;	
	
	document.getElementById('btnC').hidden = true;
	
	if(valor1 == R1 && valor2 == R2 && valor3 == R3 && valor4 == R4){
		document.getElementById('acertou').hidden = false;		
	}else{
		document.getElementById('btnR').hidden = false;		
	}
	
	if(valor1 == R1){		
		document.getElementById('img1a').hidden = false;	
	}else{
		document.getElementById('img1b').hidden = false;
	}
		
	if(valor2 == R2){
		document.formulario.r2.disabled = 1;	
		document.getElementById('img2a').hidden = false;	
	}else{
		document.getElementById('img2b').hidden = false;
	}	
	
	if(valor3 == R3){
		document.formulario.r3.disabled = 1;	
		document.getElementById('img3a').hidden = false;	
	}else{
		document.getElementById('img3b').hidden = false;
	}		
	
	if(valor4 == R4){
		document.formulario.r4.disabled = 1;	
		document.getElementById('img4a').hidden = false;	
	}else{
		document.getElementById('img4b').hidden = false;
	}	
	
}

function refazer(){
	var valor1 = document.formulario.r1.value;
	var valor2 = document.formulario.r2.value;
	var valor3 = document.formulario.r3.value;
	var valor4 = document.formulario.r4.value;	
	
	document.getElementById('btnC').hidden = false;
	document.getElementById('btnR').hidden = true;
	
	
	if(valor1 != R1){		
		document.formulario.r1.value = "";
		document.formulario.r1.disabled = 0;
		document.getElementById('img1b').hidden = true;
	}
	if(valor2 != R2){
		document.formulario.r2.value = "";
		document.formulario.r2.disabled = 0;
		document.getElementById('img2b').hidden = true;
	}
	if(valor3 != R3){
		document.formulario.r3.value = "";
		document.formulario.r3.disabled = 0;
		document.getElementById('img3b').hidden = true;
	}	
	if(valor4 != R4){
		document.formulario.r4.value = "";
		document.formulario.r4.disabled = 0;
		document.getElementById('img4b').hidden = true;
	}	
}