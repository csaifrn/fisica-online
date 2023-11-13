let valor1;
let valor2;
/* -------- */

function confirmar(){		
	valor1 = document.formulario.r1.value;
	valor2 = document.formulario.r2.value;	
	document.formulario.r1.disabled = 1;	
	document.formulario.r2.disabled = 1;			
	document.getElementById('btnC').hidden = true;
	
	if(valor1 == R1 && valor2 == R2){
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
}

function refazer(){
	var valor1 = document.formulario.r1.value;
	var valor2 = document.formulario.r2.value;
	
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
}