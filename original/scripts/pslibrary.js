//PADRÃO DE CORES (FLAT DESIGN) ---------------------------------------------
var whitecolor 				= 'rgb(255,255,255)';
var redcolor 				= '#e74c3c';
var orangecolor 			= '#e67e22';
var greencolor 				= '#218c74';
var darkcolor 				= '#2c3e50';
var bluecolor 				= '#3498db';
var graycolor 				= '#bdc3c7';
var concretcolor1 			= '#95a5a6';
var concretcolor2 			= 'rgba(189, 195, 199,1.0)';
var shadowcolordark 		= '#2d3436';
var shadowcolorbright 		= '#95a5a6';
var nocolor					= 'rgba(0,0,0,0)';

// BASE ------------------------------------------------------------
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');	
function clear(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function drawTime(time){	
	setInterval(desenhar, time);
	
}
function draw(desenhar){
		
		window.animationFrame = (function(){
    return  window.requestAnimationFrame       || 
        window.webkitRequestAnimationFrame || 
        window.mozRequestAnimationFrame    || 
        window.oRequestAnimationFrame      || 
        window.msRequestAnimationFrame     || 
        function(callback, element){
            window.setTimeout(callback);
        };		
	})();	
	animationFrame(desenhar); 		
}

function desenhar(){
	clear(); 
	grafico();
	animationFrame(desenhar);
}
//*************************************************************************
//FUNÇÕES DE TEXTO ------------------------------------------------------
//ESCREVER TEXTO COM NEGRITO 
function textoBold(word, size, font, x, y, color){
	var wordk; size; font; x; y; color; 
	ctx.font = 'bold ' + size + 'pt ' +  font;
	ctx.fillStyle = color;
	ctx.fillText(word, x, y);
}

function nomeVetor(name, x, y, scale, color){
	var name; x; y; scale; color;
	var h = 15;	
	var b = 3;
	//
	ctx.save();
	ctx.translate(x,y);
	ctx.scale(scale,scale);
	ctx.translate(-x,-y);
	//
	ctx.beginPath();	
	ctx.moveTo(x - 1, y - h);
	ctx.lineTo(x + 11, y - h);
	ctx.moveTo(x + 8, y - h - b);
	ctx.lineTo(x + 11, y - h);
	ctx.lineTo(x + 8, y - h + b);	
	ctx.lineWidth = 1.5;
	ctx.strokeStyle = color;
	ctx.stroke();
	//
	ctx.font = 'bold 10pt Verdana';
	ctx.fillStyle = color;
	ctx.fillText(name, x, y);
	//
	ctx.restore();
}

function nomeVetorIndice(name,sub,x,y, scale, color){
	var name; sub; x; y; scale; color;
	var h = 16
	var b = 3
	//
	ctx.save();
	ctx.translate(x,y);
	ctx.scale(scale,scale);
	ctx.translate(-x,-y);
	//
	ctx.beginPath();	
	ctx.moveTo(x-1, y-h);
	ctx.lineTo(x+12, y-h);
	ctx.lineTo(x+8, y-h-b);
	ctx.moveTo(x+12, y-h);
	ctx.lineTo(x+8, y-h+b);
	ctx.lineWidth = 1.5;
	ctx.strokeStyle = color;
	ctx.stroke();
	//
	ctx.font = 'bold 10pt Verdana';
	ctx.fillStyle = color;
	ctx.fillText(name, x, y);
	ctx.font = 'bold 8pt Verdana';
	ctx.fillStyle = color;
	ctx.fillText(sub, x + 10, y + 5);
	//
	ctx.restore();
}

//*************************************************************************
// GEOMETRIA - início -----------------------------------------------------
//Ponto
function ponto(x, y, color){
	var x; y; color;
	ctx.beginPath();	
	ctx.arc(x, y, 2, 0, 2*Math.PI, false);
	ctx.fillStyle = color;
	ctx.fill();
	ctx.lineWidth = 1;
	ctx.strokeStyle = color;
	ctx.stroke();
}

//**** Linhas ****

//Reta entre dois pontos
function linha2P(x1, y1, x2, y2, stroke, colorstroke){
	var x1; y1; x2; y2; stroke; colorstroke;
	ctx.beginPath();	
	ctx.lineCap="round";	
	ctx.moveTo(x1, y1);
	ctx.lineTo(x2, y2);
	ctx.lineWidth = stroke;
	ctx.strokeStyle = colorstroke;
	ctx.stroke();	
}


//Reta com tamanho e ângulo (em graus)
function linhaWR(x, y, width, rotation, stroke, colorstroke){
	var x; y; width; rotation; stroke; colorstroke;
	ctx.save();
	ctx.translate(x,y);
	ctx.rotate(rotation*Math.PI/180); 	
	ctx.translate(-x,-y);
	//
	ctx.beginPath();		
	ctx.lineCap = "round";
	ctx.moveTo(x,y);
	ctx.lineTo(x + width, y);
	ctx.lineWidth = stroke;
	ctx.strokeStyle = colorstroke;
	ctx.stroke();
	//
	ctx.restore();
}	


//Linha pontilhada
function linhaPontilhada(x, y, width, stroke, colorstroke,rotation){
	var x; y; width; stroke; colorstroke; rotation;
	var passo = 5;
	var limit = Math.trunc((Math.abs(width)-5)/10);	
	var angulo;
	if(width < 0){
		angulo = rotation + 180;
	}else{
		angulo = rotation;
	}
	/* --- */
	ctx.save();
	ctx.translate(x,y);
	ctx.rotate(angulo*Math.PI/180); // Entre com o valor em graus		
	ctx.translate(-x,-y);
	//	
	ctx.beginPath();
	for (var i = 0; i <= limit; i++){
		ctx.moveTo(x + 10*i, y);
		ctx.lineTo (x + 10*i + passo, y);
	}
	ctx.lineWidth = stroke;
	ctx.strokeStyle = colorstroke;
	ctx.stroke();
	//
	ctx.restore();
}


//Linha reversa
function linhaReversa(x, y, dist, width, rotation, stroke, colorstroke){
	var x; y; dist; width; rotation; stroke; colorstroke;
	ctx.save();
	ctx.translate(x,y);
	ctx.rotate(rotation*Math.PI/180); // Entre com o valor em graus		
	ctx.translate(-x,-y);
	//
	ctx.beginPath();
	ctx.moveTo(x + dist,y);
	ctx.lineTo(x + dist - width, y);
	ctx.lineWidth = stroke;
	ctx.strokeStyle = colorstroke;
	ctx.stroke();	
	//
	ctx.restore();
}

//VETOR (INVERTE O SENTIDO PARA TAMANHOS NEGATIVOS)
function vetor(x, y, width, rotation, stroke, colorstroke){
	var x; y; width; rotation; stroke; colorstroke;
	var mult;
	var modulo = Math.abs(width);
	var ang;
	if(width >=0){
		ang = rotation;
	}else{
		ang = rotation + 180;
	}
		
	if(modulo < 10){
		mult = modulo/10;
	}else{
		mult = 1;
	}	
	var setaw = 12*mult;
	var setah = 12*mult;
	ctx.save();
	ctx.translate(x,y);
	ctx.rotate(ang*Math.PI/180); // Entre com o valor em graus
	ctx.translate(-x,-y);
	//Linha
	if(Math.abs(width) >= 2){
		ctx.beginPath();		
		ctx.moveTo(x, y);
		ctx.lineTo(x + modulo - 5, y);
		ctx.lineWidth = stroke;
		ctx.strokeStyle= colorstroke;
		ctx.stroke();
		//Seta	
		if(modulo >= 0){
			ctx.beginPath();		
			ctx.moveTo(x + modulo, y);
			ctx.lineTo(x + modulo - setaw, y - setah/2);
			ctx.lineTo(x + modulo - setaw, y + setah/2);
			ctx.fillStyle= colorstroke;
			ctx.closePath();
			ctx.fill();	 
		}
	}
	//	
	ctx.restore();	
}

function vetorCentro(x, y, modulo, angulo, linha, cor){
	var x; y; modulo; angulo; linha; cor;	
	ctx.save();
	ctx.translate(x,y);
	ctx.rotate(angulo*Math.PI/180); 	
	ctx.translate(-x,-y);
	//
	vetor(x - modulo/2, y, modulo, 0, linha, cor);
	//
	ctx.restore();
}

function vetorDecomp(x, y, dx, dy, linha, cor){
	var x; y; dx; dy; linha; cor;
	var modulo = Math.sqrt(dx*dx + dy*dy);
	var angulo = Math.atan2(dy, dx)*180/Math.PI;
	vetor(x, y, modulo, -angulo, linha, cor);
}




//Círculo com preenchimento
function circulo(x, y, radius, stroke, colorstroke, colorfill){
	var x; y; radius; stroke; colorstroke; colorfill; 
	ctx.beginPath();	
	ctx.arc(x, y, radius, 0, 2*Math.PI, false);
	ctx.fillStyle = colorfill;
	ctx.fill();
	ctx.lineWidth = stroke;
	ctx.strokeStyle = colorstroke;
	ctx.stroke();
}


//Arco de circunferência preenchido
function arco1(x, y, radius, angI, angF, stroke, colorstroke, colorfill){
	var x; y; radius; angI; angF; stroke; colorfill; colorstroke;	
	var ang1 = angI*Math.PI/180;
	var ang2 = angF*Math.PI/180;
	//
	ctx.beginPath();	
	ctx.moveTo(x, y);
	ctx.arc(x, y, radius, ang1, ang2, false);	
	ctx.lineTo(x, y);
	ctx.fillStyle = colorfill;
	ctx.fill();
	ctx.lineWidth = stroke;
	ctx.strokeStyle = colorstroke;
	ctx.stroke();
}

//Arco de circunferência sem preenchimento(sentido horário)
function arco2(x, y, radius, angI, angF, stroke, color){	
	var x; y; radius; angI; angF; stroke; color;	
	var ang1 = angI*Math.PI/180;
	var ang2 = angF*Math.PI/180;
	ctx.beginPath();	
	ctx.arc(x, y, radius, ang1, ang2, false);		
	ctx.lineWidth = stroke;
	ctx.strokeStyle = color;	
	ctx.stroke();	
}


//Arco de circunferência sem preenchimento(sentido horário)
function arcCircle2(x, y, radius, angI, angF, stroke, color){	
	var x; y; radius; angI; angF; stroke; color;	
	var ang1 = angI*Math.PI/180;
	var ang2 = angF*Math.PI/180;
	ctx.beginPath();	
	ctx.arc(x, y, radius, ang1, ang2, false);		
	ctx.lineWidth = stroke;
	ctx.strokeStyle = color;	
	ctx.stroke();	
}


//Retângulo comum
function retangulo(x, y, w, h, stroke, rotation, colorstroke, colorfill){
	var x; y; w; h; stroke; rotation; colorstroke; colorfill;
	ctx.save();
	ctx.translate(x,y);
	ctx.rotate(rotation*Math.PI/180); // Entre com o valor em graus		
	ctx.translate(-x,-y);
	//
	ctx.beginPath();
	ctx.lineCap="round";	
	ctx.rect(x, y, w, h);
	ctx.fillStyle = colorfill;
	ctx.fill();
	ctx.lineWidth = stroke;	
	ctx.strokeStyle = colorstroke;
	ctx.stroke();	
	//
	ctx.restore();
}

//Retângulo com borda arredondada
function retanguloBorda(x, y, w, h, r, stroke, colorstroke, colorfill){
	var x; y; w; h; r; stroke; colorstroke; colorfill;
	var pontox = [x, x + r, x + w - r, x + w];
	var pontoy = [y, y + r, y + h - r, y + h]; 
	ctx.beginPath();		
	ctx.moveTo(pontox[0], pontoy[1]);
	ctx.lineTo(pontox[0], pontoy[2]);			
	ctx.quadraticCurveTo(pontox[0], pontoy[3], pontox[1], pontoy[3]);			
	ctx.lineTo(pontox[2], pontoy[3]);			
	ctx.quadraticCurveTo(pontox[3], pontoy[3], pontox[3], pontoy[2]);
	ctx.lineTo(pontox[3], pontoy[1]);			
	ctx.quadraticCurveTo(pontox[3], pontoy[0], pontox[2], pontoy[0]);			
	ctx.lineTo(pontox[1], pontoy[0]);			
	ctx.quadraticCurveTo(pontox[0], pontoy[0], pontox[0], pontoy[1]);
	ctx.fillStyle = colorfill;
	ctx.fill();	
	ctx.lineWidth = stroke;		
	ctx.strokeStyle = colorstroke;
	ctx.stroke();
	
}

//Triângulo retângulo
function trianguloR(x, y, b, h, rotation, stroke, colorstroke, colorfill){
	var x; y; b; h; stroke; colorstroke; colorfill;
	ctx.save();
	ctx.translate(x,y);
	ctx.rotate(rotation*Math.PI/180); 	
	ctx.translate(-x,-y);
	//
	ctx.beginPath();	
	ctx.lineCap="round";	
	ctx.moveTo(x, y);
	ctx.lineTo(x + b, y);
	ctx.lineTo(x + b, y - h);
	ctx.closePath();	
	ctx.lineWidth = stroke;
	ctx.strokeStyle = colorstroke;
	ctx.stroke();
	ctx.fillStyle = colorfill;
	ctx.fill();	
	//
	ctx.restore();	
}

//Reticulado com escala variável
function grade(x, y, Nx, Ny, passo, stroke,color){
	var x; y; Nx; Ny; passo; stroke; color;	
	var largura = passo*(Nx);
	var altura = passo*(Ny);
	var passograde = 0;
	var i;
	// Desenhando retas verticais
	for(i = 1;i <= Nx + 1;i++){
		ctx.beginPath()
		ctx.moveTo(x + passograde, y);
		ctx.lineTo(x + passograde,y - altura);
		ctx.lineWidth = stroke;
		ctx.strokeStyle = color;
		ctx.stroke();
		passograde = passograde + passo
	}
	// Desenhando retas horizontais
	passograde = 0	
	for(i = 1;i <= Ny + 1;i++){
		ctx.beginPath()
		ctx.moveTo(x, y - passograde);
		ctx.lineTo(x + largura,y - passograde);
		ctx.lineWidth = stroke;
		ctx.strokeStyle = color;
		ctx.stroke();
		passograde = passograde + passo
	}
	passograde = 0
}

//Escala simples
function escalaSimples(x,y,width, stroke, rotation, color){
	var x; y; width; stroke; rotation; color;
	ctx.save();
	ctx.translate(x,y);
	ctx.rotate(rotation*Math.PI/180); // Entre com o valor em graus		
	ctx.translate(-x,-y);
	//
	ctx.beginPath();
	ctx.moveTo(x, y);
	ctx.lineTo(x + width, y);
	ctx.moveTo(x, y + 7);
	ctx.lineTo(x, y - 7);
	ctx.moveTo(x + width, y + 7);
	ctx.lineTo(x + width, y - 7);
	ctx.lineWidth = stroke;
	ctx.strokeStyle = color;
	ctx.stroke();
	//
	ctx.restore();
}

//***********************************************************************
//DIVERSOS -----------------------------------------------------------


//INSTRUMENTOS DE MEDIDA

//Escala numérica positiva no eixo x. 
function escalaNx(x, y, width, scale, dist, inicio, color){	
	var x; y; width; scale; dist; inicio, color;
	var N = inicio;
	var passo = 0;
	var dx = 0;	
	for (var i = 0; i <= width; i++){		
		textoBold(N, '8','verdana', x + passo - dx, y, color);
		N = N + scale;
		if(N < 10){
			dx = 0;
		}
		if(N >= 10 && N < 100){
			dx = 5;
		}
		if(N > 100){
			dx = 10;
		}		
		passo = passo + dist;			
	}	
}

//Escala numérica positiva no eixo x. 
function escalaNx2(x, y, width, scale, dist, inicio, tamanho, color){	
	var x; y; width; scale; dist; inicio, tamanho, color;
	var N = inicio;
	var passo = 0;
	var dx = 0;	
	for (var i = 0; i <= width; i++){		
		textoBold(N, tamanho,'verdana', x + passo - dx, y, color);
		N = N + scale;
		if(N < 10){
			dx = 0;
		}
		if(N >= 10 && N < 100){
			dx = 5;
		}
		if(N > 100){
			dx = 10;
		}		
		passo = passo + dist;			
	}	
}

//Escala numérica positiva no eixo y. 
function escalaNy(x, y, width, scale, dist, inicio, color){	
	var x; y; width; scale; dist; color;
	var N = inicio;
	var passo = 0;
	var dx = 0;	
	for (var i = 0; i <= width; i++){		
		textoBold(N, '8','verdana', x  - dx, y + passo, color);
		N = N + scale;
		if(N < 10){
			dx = 0;
		}
		if(N >= 10 && N < 100){
			dx = 7;
		}
		if(N >= 100){
			dx = 14;
		}		
		passo = passo - dist;			
	}	
}

//RÉGUA
//Régua com 10 unidades rotacionável.
function regua10(x, y, rotation){
	var x; y; rotation;
	var corLinhas = '#10889e';
	var corRegua = '#d1f4fa';
	var corBorda = '#196767';
	var dy = 7;
	ctx.save();
	ctx.translate(x,y);
	ctx.rotate(rotation*Math.PI/180); // Entre com o valor em graus
	ctx.translate(-x,-y);	
	//
	retangulo(x - 7, y - 12, 215, 25, 0.5, 0, corBorda, corRegua);
	escalaGraduada(x, y, 200, 20, dy, 0, 1.5, corLinhas);
	escalaGraduada(x + 10, y - 4, 180, 20, dy/2, 0, 1.5, corLinhas);
	//numberScalePosX(x, y + 5, 15, 1, 30, darkcolor);
	//
	ctx.restore();
}

//Régua com 8 unidades rotacionável.
function regua8(x, y, rotation){
	var x; y; rotation;
	var corLinhas = '#10889e';
	var corRegua = 'rgba(153, 204, 255,0.2)';
	var corBorda = '#196767';
	var dy = 7;
	ctx.save();
	ctx.translate(x,y);
	ctx.rotate(rotation*Math.PI/180); // Entre com o valor em graus
	ctx.translate(-x,-y);	
	//
	retangulo(x - 7, y - 12, 175, 25, 0.5, 0, corBorda, corRegua);
	escalaGraduada(x, y, 160, 20, dy, 0, 1.5, corLinhas);
	escalaGraduada(x + 10, y - 4, 140, 20, dy/2, 0, 1.5, corLinhas);	
	//
	ctx.restore();
}

//TRANSFERIDOR 360°
function transferidor360(x, y, radius, rotation, escale5, escale2, escale1){
	var x; y; radius; rotation; escale1; escale2; escale5;
	var corLinha = '#ced6e0';
	var corLinha2 = '#dcdde1';
	var dr = 13;
	linha2P(x - radius, y, x + radius, y, 1, corLinha2);
	arcCircle2(x, y, radius, 0, 360, 1.5, corLinha);
	arcCircle2(x, y, radius - dr, 0, 360, 1, corLinha2);
	linhaWR(x, y + radius, 2*radius, -90, 1, corLinha2);
	//	
	for(var i = 1; i <= 35; i++){
		linhaReversa(x, y, radius, dr, -i*10, 1.5, corLinha);
	}
	if(escale5 == true){
		for(var i = 5; i <= 355; i=i+10){
			linhaReversa(x, y, radius, 5, -i, 1, corLinha);
		}
	}
	
	if(escale2 == true){
		for(var i = 2; i <= 180; i=i+2){
			linhaReversa(x, y, radius, 10, -i, 1, corLinha);
		}
	}	
	
	if(escale1 == true){
		for(var i = 1; i <= 180; i++){
			linhaReversa(x, y, radius, 10, -i, 1, corLinha);
		}
	}
}

//TRANSFERIDOR 180°
function transferidor180(x, y, radius, rotation, escale5, escale2, escale1, color){
	var x; y; radius; rotation; escale1; escale2; escale5; color;
	var corLinha = '#ced6e0';
	var corLinha2 = '#dcdde1';
	//
	ctx.save();
	ctx.translate(x,y);
	ctx.rotate(rotation*Math.PI/180); //Entre com o valor em graus
	ctx.translate(-x,-y);
	//
	linha2P(x - radius, y, x + radius, y, 1, corLinha2);
	arco1(x, y, radius, 180, 0, 1.5, corLinha, nocolor);
	arco1(x, y, radius - 10, 180, 0, 1, corLinha2, nocolor);
	linhaWR(x, y, radius, -90, 1, corLinha2);
	//	
	for(var i = 1; i <= 18; i++){
		linhaReversa(x, y, radius, 10, -i*10, 1.5, corLinha);
	}
	if(escale5 == true){
		for(var i = 5; i <= 175; i=i+10){
			linhaReversa(x, y, radius, 5, -i, 1, corLinha);
		}
	}
	
	if(escale2 == true){
		for(var i = 2; i <= 180; i=i+2){
			linhaReversa(x, y, radius, 10, -i, 1, corLinha);
		}
	}	
	
	if(escale1 == true){
		for(var i = 1; i <= 180; i++){
			linhaReversa(x, y, radius, 10, -i, 1, corLinha);
		}
	}
	//
	ctx.restore();
}

//TRANSFERIDOR 90°
function transferidor90(x, y, radius, rotation, escale5, escale2, escale1, color){
	var x; y; radius; rotation; escale1; escale2; escale5; color;
	var corLinha = '#ced6e0';
	var corLinha2 = '#dcdde1';
	//
	ctx.save();
	ctx.translate(x,y);
	ctx.rotate(rotation*Math.PI/180); //Entre com o valor em graus
	ctx.translate(-x,-y);
	//	
	arco1(x, y, radius, -90, 0, 1.5, corLinha, nocolor);
	arco1(x, y, radius - 15, -90, 0, 1, corLinha2, nocolor);	
	//	
	for(var i = 1; i <= 9; i++){
		linhaReversa(x, y, radius, 15, -i*10, 1.5, corLinha);
	}
	if(escale5 == true){
		for(var i = 5; i <= 85; i=i+10){
			linhaReversa(x, y, radius, 7.5, -i, 1, corLinha);
		}
	}
	
	if(escale2 == true){
		for(var i = 2; i <= 90; i=i+2){
			linhaReversa(x, y, radius, 5, -i, 1, corLinha);
		}
	}	
	
	if(escale1 == true){
		for(var i = 1; i <= 90; i++){
			linhaReversa(x, y, radius, 5, -i, 1, corLinha);
		}
	}
	//
	ctx.restore();
}



//ESCALAS --------------------------------------
//Escala com marcadores
function escalaGraduada(x, y, w, d, h, rotation, stroke, colorstroke){
	var x; y; w; d; h; rotation; stroke; colorstroke;	
	var N = w/d;
	ctx.save();
	ctx.translate(x,y);
	ctx.rotate(rotation*Math.PI/180); //Entre com o valor em graus
	ctx.translate(-x,-y);
	for(var i = 0; i <= N; i++){
		linhaWR(x, y, h, -90, stroke, colorstroke);
		x = x + d;
	}
	ctx.restore();
}

/* CRONÔMETRO */
 function relogio(x, y, color1, color2, tempo, scale){
        var x; y; color1; color2; scale;	
        ctx.save();
        ctx.translate(x,y);
        ctx.scale(scale,scale);
        ctx.translate(-x,-y);
		/* */
        ctx.beginPath();	
        ctx.moveTo(x, y);
        ctx.arc(x, y, 50, 0, 2 * Math.PI);
        ctx.lineWidth = 1.5;
        ctx.fillStyle = color1;
        ctx.fill();
		/* */		
        retangulo(x + 42, y - 47, 12, 30, 1, 45, color1, color1);
        retangulo(x + 58, y - 40, 12, 20, 1, 135, color1, color1);
        /* */
        retangulo(x - 52, y - 42, 12, 30, 1, -45, color1, color1)
        retangulo(x - 42, y - 55, 12, 20, 1, 45, color1, color1)
		/* */
        retangulo(x - 6, y - 60, 12, 30, 1, 0, color1, color1)
        retangulo(x - 10, y - 70, 20, 12, 1, 0, color1, color1)
		/* */
        ctx.beginPath();	
        ctx.moveTo(x, y);
        ctx.arc(x, y, 43, 0, 2 * Math.PI);
        ctx.lineWidth = 1.5;
        ctx.fillStyle = color2; 
        ctx.fill();	
		/* */
		retanguloBorda(x - 35, y - 15, 70, 30, 2, 1, color1, color1);  
		if(tempo < 10){
			textoBold(tempo, 15, 'verdana',x - 25, y + 8, 'white');
		}else{		
			textoBold(tempo, 15, 'verdana',x - 32, y + 8, 'white');
		}
		/* */     
        ctx.restore();
    }



//DIVERSOS -----------------------------

// MOLA COM LINHAS RETAS
function mola(x, y, L, N, h, stroke, colorstroke, rotation){	
	var x; y; L;  N; h; stroke; colorstroke; rotation;
	var passo = L/N;
	function elo1(x, y, passo, h, stroke, colorstroke){		
		ctx.beginPath();	
		ctx.lineJoin = "round";
		ctx.moveTo(x, y);
		ctx.lineTo(x + passo/2, y - h);
		ctx.lineTo(x + passo, y);
		ctx.lineWidth = stroke;
		ctx.strokeStyle = colorstroke;
		ctx.stroke();
		ctx.closePath();	
	}		
	ctx.save();
	ctx.translate(x,y);
	ctx.rotate(rotation*Math.PI/180); // Entre com o valor em graus
	ctx.translate(-x,-y);	
	for(var i = 0; i < N; i++){		
		elo1(x + i*passo, y, passo, h, stroke, colorstroke);
		h = -h;
	}
	//
	ctx.restore();	
}

//Superfície
function superficie(x, y, width, rotation, color){
	var N = width/10;
	var i;
	var passo = 5;
	ctx.save();
	ctx.translate(x,y);
	ctx.rotate(rotation*Math.PI/180); // Entre com o valor em graus
	ctx.translate(-x,-y);
	//
	ctx.beginPath();	
	ctx.moveTo(x, y);
	ctx.lineTo(x + width, y);
	//
	for(i=1;i<=N;i++){
		ctx.moveTo(x + passo,y);
		ctx.lineTo(x + passo - 5, y + 5);
		passo = passo + 10;
	}
	//
	ctx.lineWidth = 2;
	ctx.strokeStyle = color;
	ctx.stroke();
	//	
	ctx.restore()
}



/* ########################################### */

//STICKERS

//Ponta de seta rotacionável
function seta(x,y,b,color,rotation){
	var x; y; b; color; rotation;
	//var dx 
	ctx.save();
	ctx.translate(x,y);
	ctx.rotate(rotation*Math.PI/180); // Entre com o valor em graus
	ctx.translate(-x,-y);
	//
	ctx.beginPath();	
	ctx.moveTo(x, y - 0.6*b);
	ctx.lineTo(x - b/2, y + 0.4*b);
	ctx.lineTo(x + b/2, y + 0.4*b);
	ctx.closePath();
	ctx.fillStyle= color;
	ctx.fill();		
	//
	ctx.restore();
}

//CHAVE (SÍMBOLO MATEMÁTICO) --------------------------------------
function chave(x, y, d, rotation, color){
	var x; y; d; rotation; color;
	var stroke = 2;
	ctx.save();
	ctx.translate(x,y);
	ctx.rotate(rotation*Math.PI/180); 	
	ctx.translate(-x,-y);
	//
	linha2P(x, y, x - 5, y - 5, stroke, color);
	linha2P(x, y, x + 5, y - 5, stroke, color);
	linha2P(x - 5, y - 5, x - d, y - 5, stroke, color);
	linha2P(x + 5, y - 5, x + d, y - 5, stroke, color);
	linha2P(x - d, y - 5, x - d - 5, y - 10, stroke, color);
	linha2P(x + d, y - 5, x + d + 5, y - 10, stroke, color);	
	//
	ctx.restore();
}

//Conector Retangular
function conector90(x, y, h, L, angulo, cor){
	var x; y; h; L; angulo; cor;
	ctx.save();
	ctx.translate(x,y);
	ctx.rotate(angulo*Math.PI/180); 	
	ctx.translate(-x,-y);
	//
	linhaWR(x, y, h, 90, 2.5, cor);
	vetor(x, y + h, L, 0, 2.5, cor);	
	//
	ctx.restore();
}

//Conector para mapa conceitual, 
function arcoSeta(x, y, radius, ang, rotation,color){	
	var x; y; radius; ang; color;
	var ang2 = 180 - ang;
	var xs = radius*Math.cos(ang*Math.PI/180);
	var ys = radius*Math.sin(ang*Math.PI/180);
	ctx.save();
	ctx.translate(x,y);
	ctx.rotate(rotation*Math.PI/180); 	
	ctx.translate(-x,-y);
	//
	arcCircle2(x + radius, y, radius, 180, -ang, 2.5, color);
	circulo(x, y, 3, 1, color, color);
	seta(x + radius + xs, y - ys, 12, color, 180 - ang);
	//
	ctx.restore();
}



/* MATEMÁTICA */
//Plota um gráfico a partir das matrizes matX e matY (digitar apenas os nomes, sem as chaves);
//Essas matrizes representam os pontos do gráfico, e são determinadas pelo usuário.
function graphic(x0, y0, limit, color, matX, matY, step, stroke){
	var x0; y0; limit; color; matX; matY; step;	stroke;
	for(var i = 1; i < limit; i = i + step){	
		ctx.beginPath();
		ctx.moveTo(x0 + matX[i-1],y0 - matY[i-1]);
		ctx.lineTo(x0 + matX[i], y0 - matY[i]);
		ctx.lineWidth = stroke;
		ctx.strokeStyle = color;
		ctx.stroke();			
	}		
}

function grafico(x0, y0, limit, color, matX, matY, step, stroke){
	var x0; y0; limit; color; matX; matY; step;	stroke;
	for(var i = 1; i < limit; i = i + step){	
		ctx.beginPath();
		ctx.moveTo(x0 + matX[i-1],y0 - matY[i-1]);
		ctx.lineTo(x0 + matX[i], y0 - matY[i]);
		ctx.lineWidth = stroke;
		ctx.strokeStyle = color;
		ctx.stroke();		
	}		
} 

function grafico2(x0, y0, limit, color, matX, matY, step, stroke){
	var x0; y0; limit; color; matX; matY; step;	stroke;
	for(var i = 1; i < limit; i = i){	
		ctx.beginPath();
		ctx.moveTo(x0 + matX[i-1],y0 - matY[i-1]);
		ctx.lineTo(x0 + matX[i], y0 - matY[i]);
		ctx.lineWidth = stroke;
		ctx.strokeStyle = color;
		ctx.stroke();			
	}		
}


//Triângulo qualquer
function triangulo(x1, y1, x2, y2, x3, y3, stroke, colorfill, colorstroke){
	var x1; y1; x2; y2; x3; y3; stroke; colorfill; colorstroke;
	ctx.beginPath();
	ctx.lineCap="round";	
	ctx.moveTo(x1, y1);
	ctx.lineTo(x2, y2);
	ctx.lineTo(x3, y3);
	ctx.closePath();	
	ctx.lineWidth = stroke;
	ctx.strokeStyle = colorstroke;
	ctx.stroke();	
	ctx.fillStyle = colorfill;
	ctx.fill();	
}

//PEDRO PAULO INFOWEB 2020 -------------------------------
//CARRO NORMAL
function carrinho(x, y, colorCar, colorDetail, scalex, scaley){
        var x; y; colorCar; colorDetail; scalex; scaley;	
        ctx.save();
        ctx.translate(x,y);
        ctx.scale(scalex,scaley);
        ctx.translate(-x,-y);
        // CARCAÇA
        ctx.beginPath();	
        ctx.moveTo(x+5, y-1);
        ctx.arc(x+5, y - 8, 6, Math.PI/2, Math.PI*2.7/2, false);
        ctx.lineTo(x, y-29);
        ctx.lineTo(x + 18, y-27);
        ctx.lineTo(x + 27, y-45);
        ctx.lineTo(x + 65, y-45);
        ctx.arc(x + 65, y-40, 5, Math.PI*1.5, -0.5, false);
        ctx.lineTo(x + 76, y-25);
        ctx.lineTo(x + 108, y-25);
        ctx.lineTo(x + 108, y-15);
        ctx.arc(x + 108, y-8, 5, Math.PI*3/2, Math.PI/2, false);
        ctx.lineTo(x+5, y-1);
        ctx.lineWidth = 1.5;
        ctx.fillStyle = colorCar;
        ctx.fill();
        //	PARACHOQUE
        ctx.beginPath();	
        ctx.moveTo(x, y);
        ctx.lineTo(x+110, y);
        ctx.arc(x + 110, y - 3, 3, Math.PI/2, 3/2*Math.PI, true);
        ctx.lineTo(x, y-6);
        ctx.arc(x, y - 3, 3, Math.PI*3/2, Math.PI/2, true);
        ctx.lineWidth = 1.5;
        ctx.fillStyle = colorDetail;
        ctx.fill();
        // RODA 1
        ctx.beginPath();
        ctx.arc(x + 18, y, 11, 0, 2*Math.PI, false);
        ctx.lineWidth = 4;
        ctx.fillStyle = '#6c6f6e';
        ctx.fill();
        ctx.strokeStyle = '#452837';
        ctx.stroke();
        // CALOTA 1
        ctx.beginPath();
        ctx.arc(x + 18, y, 6, 0, 2*Math.PI, false);
        ctx.lineWidth = 1.5;
        ctx.fillStyle = '#ffffff';
        ctx.fill();
        // RODA 2
        ctx.beginPath();
        ctx.arc(x + 91, y, 11, 0, 2*Math.PI, false);
        ctx.lineWidth = 4;
        ctx.fillStyle = '#6c6f6e';
        ctx.fill();
        ctx.strokeStyle = '#452837';
        ctx.stroke();
        // CALOTA2
        ctx.beginPath();
        ctx.arc(x + 91, y, 6, 0, 2*Math.PI, false);
        ctx.lineWidth = 1.5;
        ctx.fillStyle = '#ffffff';
        ctx.fill();
        // VIDRO TRAS
        ctx.beginPath();
        ctx.moveTo(x+24, y - 27);
        ctx.lineTo(x+30, y - 41);
        ctx.lineTo(x+45, y - 41);
        ctx.lineTo(x+45, y - 27);
        ctx.lineTo(x+24, y - 27);
        ctx.lineWidth = 1;
        ctx.fillStyle = '#6d6d6d';
        ctx.fill();
        // VIDRO FRENTE
        ctx.beginPath();
        ctx.moveTo(x+50, y - 27);
        ctx.lineTo(x+50, y - 41);
        ctx.lineTo(x+60, y - 41);
        ctx.arc(x+62, y - 35, 6, Math.PI*3/2, Math.PI*3.6/2, false);
        ctx.lineTo(x+70, y - 27);
        ctx.lineTo(x+50, y - 27);
        ctx.lineWidth = 1;
        ctx.fillStyle = '#6d6d6d';
        ctx.fill();
        // MAÇANETA TRAS
        ctx.beginPath();
        ctx.rect(x+32, y-23, 8, 2);
        ctx.lineWidth = 1;
        ctx.fillStyle = colorDetail;
        ctx.fill();
        // MAÇANETA FRENTE
        ctx.beginPath();
        ctx.rect(x+51, y-23, 8, 2);
        ctx.lineWidth = 1;
        ctx.fillStyle = colorDetail;
        ctx.fill();
        // DETALHE FRENTE E TRAS
		//retanguloBorda(x, y, w, h, r, stroke, colorstroke, colorfill)
        retanguloBorda(x - 3, y - 10, 10, 2, 1, 1, colorDetail, colorDetail);
        retanguloBorda(x + 102, y - 10, 12, 2, 1, 1, colorDetail, colorDetail);
        retanguloBorda(x - 1, y - 16.5, 4, 7, 2, 1, '#d23d09', '#d23d09');
        retanguloBorda(x + 103.5, y - 14.5, 5, 9, 2, 1, '#ffce37', '#ffce37');
        //
        ctx.restore();
}


//CARRINHO VISTA SUPERIOR
function carrinhoSuperior(x, y, scale, color1, color2, color3, rotation){
        ctx.save();
        ctx.translate(x,y);
        ctx.scale(scale,scale);
        ctx.translate(-x,-y);
        ctx.rotate(rotation*Math.PI/180);  
        
        //CARCAÇA
        ctx.beginPath();
        ctx.moveTo(x,y - 125);
        //LATERAL DIREITA
        ctx.quadraticCurveTo(x + 50, y - 125, x + 55, y - 65);
        ctx.quadraticCurveTo(x + 55, y - 60, x + 53, y - 40);
        ctx.quadraticCurveTo(x + 50, y - 25, x + 57, y + 65);
        ctx.quadraticCurveTo(x + 50, y + 125, x + 25, y + 125);
        ctx.lineTo(x - 25, y + 125);
        //LATERA ESQUERDA
        ctx.moveTo(x,y - 125);
        ctx.quadraticCurveTo(x - 50, y - 125, x - 55, y - 65);
        ctx.quadraticCurveTo(x - 55, y - 60, x - 53, y - 40);
        ctx.quadraticCurveTo(x - 50, y - 25, x - 57, y + 65);
        ctx.quadraticCurveTo(x - 50, y + 125, x - 25, y + 125);
        ctx.lineWidth = 1;
        ctx.strokeStyle = color2;
        ctx.stroke();
        ctx.fillStyle = color2;
        ctx.fill();
        
        ctx.beginPath();
        ctx.moveTo(x,y - 115);
        //LATERAL DIREITA
        ctx.quadraticCurveTo(x + 45, y - 105, x + 50, y - 55);
        ctx.quadraticCurveTo(x + 50, y - 50, x + 53, y - 30);
        ctx.quadraticCurveTo(x + 50, y - 25, x + 57, y + 65);
        ctx.quadraticCurveTo(x + 50, y + 125, x + 25, y + 125);
        ctx.lineTo(x - 25, y + 125)
        //LATERAL ESQUERDA
        ctx.moveTo(x,y - 115);
        ctx.quadraticCurveTo(x - 45, y - 105, x - 50, y - 55);
        ctx.quadraticCurveTo(x - 50, y - 50, x - 53, y - 30);
        ctx.quadraticCurveTo(x - 50, y - 25, x - 57, y + 65);
        ctx.quadraticCurveTo(x - 50, y + 125, x - 25, y + 125);
        ctx.lineWidth = 1;
        ctx.strokeStyle = color1;
        ctx.stroke();
        ctx.fillStyle = color1;
        ctx.fill();
        
        //VIDRO FRENTE
        ctx.beginPath();
        ctx.moveTo(x,y - 65);
        ctx.quadraticCurveTo(x + 40, y - 65, x + 45, y - 40);
        ctx.lineTo(x + 35, y - 15);
        ctx.lineTo(x, y - 15);
        ctx.moveTo(x,y - 65);
        ctx.quadraticCurveTo(x - 40, y - 65, x - 45, y - 40);
        ctx.lineTo(x - 35, y - 15);
        ctx.lineTo(x, y - 15);
        ctx.lineWidth = 1;
        ctx.strokeStyle = color3;
        ctx.stroke();
        ctx.fillStyle = color3;
        ctx.fill();
        
        //VIDRO LATERAL DIREITO
        ctx.beginPath();
        ctx.moveTo(x + 47,y - 32);
        ctx.quadraticCurveTo(x + 53, y + 15, x + 48, y + 55);
        ctx.quadraticCurveTo(x + 32, y + 15, x + 35, y + 15);
        ctx.quadraticCurveTo(x + 30, y + 15, x + 47, y - 32);
        ctx.lineWidth = 1;
        ctx.strokeStyle = color3;
        ctx.stroke();
        ctx.fillStyle = color3;
        ctx.fill();
        
        //VIDROS LATERAL ESQUERDO
        ctx.beginPath();
        ctx.moveTo(x - 47,y - 32);
        ctx.quadraticCurveTo(x - 53, y + 15, x - 48, y + 55);
        ctx.quadraticCurveTo(x - 32, y + 15, x - 35, y + 15);
        ctx.quadraticCurveTo(x - 30, y + 15, x - 47, y - 32);
        ctx.lineWidth = 1;
        ctx.strokeStyle = color3;
        ctx.stroke();
        ctx.fillStyle = color3;
        ctx.fill();
        
        //VIDROS TRASEIROS
        ctx.beginPath();
        ctx.moveTo(x,y + 55);
        ctx.lineTo(x + 30, y + 55);
        ctx.lineTo(x + 35, y + 70);
        ctx.lineTo(x + 30, y + 80);
        ctx.lineTo(x, y + 80);
        ctx.lineTo(x - 30, y + 80);
        ctx.lineTo(x - 35, y + 70);
        ctx.lineTo(x - 30, y + 55);
        ctx.lineTo(x, y + 55);
        ctx.lineWidth = 1;
        ctx.strokeStyle = color3;
        ctx.stroke();
        ctx.fillStyle = color3;
        ctx.fill();
        
        //DETALHE TRAS
        ctx.beginPath();
        ctx.moveTo(x + 47,y + 62);
        ctx.quadraticCurveTo(x + 33, y + 95, x + 33, y + 113);
        ctx.lineWidth = 1;
        ctx.strokeStyle = color2;
        ctx.stroke();
        ctx.fillStyle = color2;
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(x - 47,y +
62);
        ctx.quadraticCurveTo(x - 33, y + 95, x - 33, y + 113);
        ctx.lineWidth = 1;
        ctx.strokeStyle = color2;
        ctx.stroke();
        ctx.fillStyle = color2;
        ctx.fill();
        
        //DETALHE FRENTE
        ctx.beginPath();
        ctx.moveTo(x + 15,y - 105);
        ctx.quadraticCurveTo(x + 12, y - 95, x + 35, y - 70);
        ctx.lineWidth = 1;
        ctx.strokeStyle = color2;
        ctx.stroke();
        ctx.fillStyle = color2;
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(x - 15,y - 105);
        ctx.quadraticCurveTo(x - 12, y - 95, x - 35, y - 70);
        ctx.lineWidth = 1;
        ctx.strokeStyle = color2;
        ctx.stroke();
        ctx.fillStyle = color2;
        ctx.fill();
        
        //FAROL FRENTE
        ctx.beginPath();
        ctx.moveTo(x + 32,y - 113);
        ctx.quadraticCurveTo(x + 50, y - 110, x + 48, y - 90);
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#f3de97';
        ctx.stroke();
        ctx.fillStyle = '#f3de97';
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(x - 32,y - 113);
        ctx.quadraticCurveTo(x - 50, y - 110, x - 48, y - 90);
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#f3de97';
        ctx.stroke();
        ctx.fillStyle = '#f3de97';
        ctx.fill();
        
        //FAROL TRASEIRO
        ctx.beginPath();
        ctx.moveTo(x+30,y + 125);
        ctx.quadraticCurveTo(x + 45, y + 120, x + 47, y + 105);
        ctx.lineWidth = 1;
        ctx.strokeStyle = "#870e13";
        ctx.stroke();
        ctx.fillStyle = '#870e13';
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(x-30,y + 125);
        ctx.quadraticCurveTo(x - 45, y + 120, x - 47, y + 105);
        ctx.lineWidth = 1;
        ctx.strokeStyle = "#870e13";
        ctx.stroke();
        ctx.fillStyle = '#870e13';
        ctx.fill();
        
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fillStyle = '#870e13';
        ctx.fill();
        
        ctx.restore();
    }


//CARRINHO SOMBRA


    function carrinhoSombra(x, y, colorCar, colorDetail, scale){
        var x; y; colorCar; colorDetail; scale;	
        ctx.save();
        ctx.translate(x,y);
        ctx.scale(scale,0.5);
        ctx.translate(-x,-y);
        // CARCAÇA
        ctx.beginPath();	
        ctx.moveTo(x+5, y-1);
        ctx.arc(x+5, y - 8, 6, Math.PI/2, Math.PI*2.7/2, false);
        ctx.lineTo(x, y-29);
        ctx.lineTo(x + 18, y-27);
        ctx.lineTo(x + 27, y-45);
        ctx.lineTo(x + 65, y-45);
        ctx.arc(x + 65, y-40, 5, Math.PI*1.5, -0.5, false);
        ctx.lineTo(x + 76, y-25);
        ctx.lineTo(x + 108, y-25);
        ctx.lineTo(x + 108, y-15);
        ctx.arc(x + 108, y-8, 5, Math.PI*3/2, Math.PI/2, false);
        ctx.lineTo(x+5, y-1);
        ctx.lineWidth = 1.5;
        ctx.fillStyle = colorCar;
        ctx.fill();
        //	PARACHOQUE
        ctx.beginPath();	
        ctx.moveTo(x, y);
        ctx.lineTo(x+110, y);
        ctx.arc(x + 110, y - 3, 3, Math.PI/2, 3/2*Math.PI, true);
        ctx.lineTo(x, y-6);
        ctx.arc(x, y - 3, 3, Math.PI*3/2, Math.PI/2, true);
        ctx.lineWidth = 1.5;
        ctx.fillStyle = colorDetail;
        ctx.fill();
        // RODA 1
        ctx.beginPath();
        ctx.arc(x + 18, y, 11, 0, 2*Math.PI, false);
        ctx.lineWidth = 4;
        ctx.fillStyle = '#dbdbdb';
        ctx.fill();
        ctx.strokeStyle = '#cccccc';
        ctx.stroke();
        // CALOTA 1
        ctx.beginPath();
        ctx.arc(x + 18, y, 6, 0, 2*Math.PI, false);
        ctx.lineWidth = 1.5;
        ctx.fillStyle = '#e9e9e9';
        ctx.fill();
        // RODA 2
        ctx.beginPath();
        ctx.arc(x + 91, y, 11, 0, 2*Math.PI, false);
        ctx.lineWidth = 4;
        ctx.fillStyle = '#dbdbdb';
        ctx.fill();
        ctx.strokeStyle = '#cccccc';
        ctx.stroke();
        // CALOTA2
        ctx.beginPath();
        ctx.arc(x + 91, y, 6, 0, 2*Math.PI, false);
        ctx.lineWidth = 1.5;
        ctx.fillStyle = '#e9e9e9';
        ctx.fill();
        // VIDRO TRAS
        ctx.beginPath();
        ctx.moveTo(x+24, y - 27);
        ctx.lineTo(x+30, y - 41);
        ctx.lineTo(x+45, y - 41);
        ctx.lineTo(x+45, y - 27);
        ctx.lineTo(x+24, y - 27);
        ctx.lineWidth = 1;
        ctx.fillStyle = '#cccccc';
        ctx.fill();
        // VIDRO FRENTE
        ctx.beginPath();
        ctx.moveTo(x+50, y - 27);
        ctx.lineTo(x+50, y - 41);
        ctx.lineTo(x+60, y - 41);
        ctx.arc(x+62, y - 35, 6, Math.PI*3/2, Math.PI*3.6/2, false);
        ctx.lineTo(x+70, y - 27);
        ctx.lineTo(x+50, y - 27);
        ctx.lineWidth = 1;
        ctx.fillStyle = '#cccccc';
        ctx.fill();
        // MAÇANETA TRAS
        ctx.beginPath();
        ctx.rect(x+32, y-23, 8, 2);
        ctx.lineWidth = 1;
        ctx.fillStyle = colorDetail;
        ctx.fill();
        // MAÇANETA FRENTE
        ctx.beginPath();
        ctx.rect(x+51, y-23, 8, 2);
        ctx.lineWidth = 1;
        ctx.fillStyle = colorDetail;
        ctx.fill();
        // DETALHE FRENTE E TRAS
        retanguloBorda(x - 3, y - 10, 10, 2, 1, 1, colorDetail, colorDetail);
        retanguloBorda(x + 102, y - 10, 12, 2, 1, 1, colorDetail, colorDetail);
        retanguloBorda(x - 1, y - 16.5, 4, 7, 2, 1, '#bcbcbc', '#bcbcbc');
        retanguloBorda(x + 103.5, y - 14.5, 5, 9, 2, 1, '#d7d7d7', '#d7d7d7');
        //
        ctx.restore();
    }   



/* TERMODINÂMICA */
//BICO DE BUNSEN (ALTURA DA HASTE, ALTURA DA CHAMA, LIGADO/DESLIGADO
function bicoBunsen(x, y, h, hf, condition){
	var pxf = x + 24;
	var pyf = y - 25 - h;
	var colorfill = '#bdc3c7';
	var colorstroke = '#192a56';	
	var pontosx = [10, 25, 35, 50];
	var pontosy = [0, 10, 15];
	ctx.beginPath();
	ctx.setLineDash([1,0]);
	ctx.moveTo(x + pontosx[0], y - pontosy[0]);
	ctx.lineTo(x + pontosx[3], y - pontosy[0]);
	ctx.lineTo(x + pontosx[3], y - pontosy[1]);
	ctx.lineTo(x + pontosx[2], y - pontosy[2]);
	ctx.lineTo(x + pontosx[1], y - pontosy[2]);
	ctx.lineTo(x + pontosx[0], y - pontosy[1]);
	ctx.closePath();
	ctx.fillStyle = colorfill;
	ctx.fill();	
	ctx.lineWidth = 1.5;
	ctx.strokeStyle = colorstroke;
	ctx.stroke();
	//
	retangulo(x + pontosx[1], y - h - pontosy[2], 10, h, 1.5, 0, colorstroke, colorfill);
	retangulo(x + pontosx[1] - 2, y - h - pontosy[2] - 7, 14, 7, 1.5, 0, colorstroke, colorfill);	
	if(condition == true){		
		triangulo(pxf, pyf, pxf + 13, pyf, pxf + 6.5, pyf - hf, 1.5, redcolor, redcolor);
		triangulo(pxf + 3, pyf, pxf + 10,pyf,  pxf + 6.5, pyf - 0.4*hf, 1.5, '#fbc531', '#fbc531');	
	}		
}

function termômetro(x,y,h,temp){
	var x; y; h; temp;
	//
	if(temp > h){
		temp = h - 10
	}			
	//
	ctx.beginPath();
	ctx.arc(x, y, 10, -60*Math.PI/180, -120*Math.PI/180, false);
	ctx.moveTo(x - 5, y - 8);
	ctx.lineTo(x - 5, y - h);
	
	ctx.moveTo(x - 6, y - h);
	ctx.lineTo(x + 6, y - h);
	
	ctx.moveTo(x - 5, y - h);
	ctx.lineTo(x + 5, y - h);
	ctx.lineTo(x + 5, y - 8);
	ctx.lineWidth = 2.3;
	ctx.fillStyle = 'white';
	ctx.fill();	
	ctx.strokeStyle = darkcolor;
	ctx.stroke();			
	//
	ctx.beginPath();
	ctx.arc(x, y, 6, Math.PI, -Math.PI, false);			
	ctx.fillStyle = '#e74c3c';
	ctx.fill();		
	retangulo(x - 1.5, y - 5, 3, -temp, 1, 0, '#e74c3c', '#e74c3c');	
}

//BECKER
function becker(x, y, w, h1, h2, colorfill){
	var R = 5;
	var dh = 8;	
	ctx.beginPath();
	ctx.arc(x + R, y - R, R, Math.PI/2, Math.PI, false);
	ctx.moveTo(x, y - R);
	ctx.lineTo(x, y - h2);
	ctx.lineTo(x + w + R + dh, y - h2);		
	ctx.lineTo(x + w + R + dh, y - R);
	ctx.arc(x + w + dh, y - R, R, 0, Math.PI/2, false);
	ctx.lineTo(x + R, y);
	ctx.lineWidth = 0;
	ctx.strokeStyle = nocolor;
	ctx.stroke();
	ctx.fillStyle = colorfill;
	ctx.fill();				
	//
	arcCircle2(x + R, y - R, R, 90, 180, 2.5, darkcolor);
	linha2P(x, y - R, x, y - h1, 2.5, darkcolor);
	linha2P(x, y - h1, x - dh, y - h1 - dh, 2.5, darkcolor);
	linha2P(x - dh, y - h1 - dh, x + w + dh + R + 1, y - h1 - dh, 1.5, darkcolor);
	linha2P(x + w + dh + R, y - h1 - dh, x + w + dh + R, y - R, 2.5, darkcolor);
	arcCircle2(x + w + dh, y - R, R, 0, 90, 2.5, darkcolor);
	linha2P(x + w + dh, y, x + R, y, 2.5, darkcolor);
}

function graphic2(x0, y0, limit, color, matX, matY, step, stroke){
	var x0; y0; limit; color; matX; matY; step;	stroke;
	for(var i = 1; i < limit; i = i + step){	
		ctx.beginPath();
		ctx.moveTo(x0 + matX[i-1],y0 - matY[i-1]);
		ctx.lineTo(x0 + matX[i], y0 - matY[i]);
		ctx.lineWidth = stroke;
		ctx.strokeStyle = color;
		ctx.stroke();			
	}		
}
