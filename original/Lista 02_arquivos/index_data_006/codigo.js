/* -------- */
let valor;
/* -------- */
function confirmar(){		
	valor = document.formulario.r1.value;		
	document.formulario.r1.disabled = 1;		
	document.getElementById('btnC').hidden = true;
	
	if(valor== R1){
		document.getElementById('acertou').hidden = false;
		document.getElementById('img1a').hidden = false;			
	}else{
		document.getElementById('btnR').hidden = false;
		document.getElementById('img1b').hidden = false;		
	}
}

function refazer(){
	let valor = document.formulario.r1.value;		
	document.getElementById('btnC').hidden = false;
	document.getElementById('btnR').hidden = true;
	document.formulario.r1.value = "";
	document.formulario.r1.disabled = 0;
	document.getElementById('img1b').hidden = true;
	//
	btn_errou.pause();	
	btn_errou.currentTime = 0;	
}
/* ------ */

