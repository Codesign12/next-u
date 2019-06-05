//Agregar imagenes
var dulces = ["1.png","2.png","3.png","4.png","2.png","1.png","4.png"];
var k = 1;
var y = 0;
var j = 0;
var bandera = 0;
var selectedRow = -1;
var selectedCol = -1;
var posX;
var posY;

 function agregarLosDulces(){
		if (k<8){
			var variable = ".col-"+k;
			for (var i=0; i < dulces.length; i++) {
				j = Math.floor(Math.random()*(7-0))
				$(variable).append("<img>");
				var agregarElemento = $(variable).children().last();
				$(agregarElemento).addClass("elemento");
				var agregarDulces = $(variable).children().last();
				$(agregarDulces).addClass("dulcesImagen"+ "_" + y + "_" + i);
			 	$('.dulcesImagen'+ "_" + y + "_" + i).attr('src', 'image/' +dulces[j]);

			}
	  		k++;
	  		y++;
	  		j = Math.floor(Math.random()*(7-0))
	  		agregarLosDulces();
  		}
  		
 }
	
//regenerandop dulces 
var cuantos;
var num = 1;
var reponer;
var num2=0;
var num3=0;
function vercuantos(){
	
	if (num<8){
		cuantos = '.col-'+num;
		reponer = $(cuantos).children();
		if (reponer.length < 7 ){
			var j = Math.floor(Math.random()*(6-0))+0
			$(cuantos).append("<img>");
			var agregarElemento = $(cuantos).children().last();
			$(agregarElemento).addClass("elemento");
			var agregarDulces = $(cuantos).children().last();
			$(agregarDulces).addClass("dulcesImagen"+ num2+num3);
			$('.dulcesImagen'+ num2+num).attr('src', 'image/' +dulces[j]); 
		}
		num2++;
		num++;
		vercuantos();
	}
	iniciaMovimientos();
}



// revisar


//Eliminar dulces



// Parpadeo de titulo

	var cambiarColor;

	function parpadeo() {
	  $('.main-titulo').animate({
			'color': 'yellow'
		});
	  cambiarColor = setTimeout(alertFunc, 500);
	}

	function alertFunc() {
	  $('.main-titulo').animate({
 			'color': 'grey'
 		});
	  cambiarColor = setTimeout(parpadeo, 500);
	}

// Esconder piesas y aleatorias
function hideAll(){
  $$('.elemento').each(function(item){
    item.hide();
    bloqueHandler()
  })
}

	
//Timer cronometro 
	var a = 0;

	$("#Centesimas").hide();
	$("#Segundos").hide();
	$("#Minutos").hide();


	$(".btn-reinicio").click(function(){
		a = a+1;
		if (a == 1){
			$("button").text("Parar");
		 	inicio();
		 	agregarLosDulces();
		 	// ordenarBloques();
		 	parpadeo();
		 	iniciaMovimientos();
		}else if (a==2){
			$("button").text("Reiniciar");
			parar();
			mostrarScore();
		}else if(a==3){
			$("button").text("Iniciar");
			reinicio();
			location.reload();
		}else{
			a=0;
		}
	 	
	 });

//mover imagenes
var puntos = document.getElementById("score-text");
var suma;
 var primeraImagen;
 var segundaImagen;
 var posicionImagen;
 var posicionImagen2;
 var movimientos = document.getElementById('movimientos-text');
 var mov = 0;
 var col = 0;
 var col2= 0;
 var col3 = 0;
 var col4 = 0;
 var row = 0;
 var row2 = 0;
 var row3 = 0;
 var row4 = 0;
 var tipoMovimiento=0;
 var quitar=0;
 	function iniciaMovimientos(){
		$('.elemento').draggable({ 
			containment: '.panel-tablero',
			revert : true,
			start: function(){
				col = parseInt($(this).attr("class").split("_")[1]);
                row = parseInt($(this).attr("class").split("_")[2]);
				posicionImagen = $(this).attr("src");
				primeraImagen = $(this);
			}
		});
		$('.elemento').droppable({
			drop: function(event, ui){
				col2 = parseInt($(this).attr("class").split("_")[1]);
                row2 = parseInt($(this).attr("class").split("_")[2]);
                posicionImagen2 = $(this).attr("src");
				segundaImagen = $(this);
				revisarLado();
				remover();
			}
		});
		
	}

function revisarLado(){
	if ( col == col2 && row == (row2 - 1)){
		tipoMovimiento = 1; //se movio verticalmente
	}else 
	if ( col == col2 && row == (row2 + 1)){
		tipoMovimiento = 1; //se movio verticalmente
	}else 
	if ( col == (col2 - 1) && row == row2 ){
		tipoMovimiento = 2; //se movio horizontalmente
	}else
	if ( col == (col2 + 1) && row == row2){
		tipoMovimiento = 2; //se movio horizontalmente
	}
	validacion();
}

function validacion(){
	if (tipoMovimiento == 1){
		var a = $(".dulcesImagen_" + col + "_" + row).attr('src');
		col3 = col2 -1;
		var b = $(".dulcesImagen_" + col3 + "_" + row2).attr('src');
		col4 = col2 + 1;
		var c = $(".dulcesImagen_" + col4 + "_" + row2).attr('src');
		if (a==b && b==c){
			$(segundaImagen).attr("src",posicionImagen);
			$(primeraImagen).attr("src", posicionImagen2);
			$(".dulcesImagen_" + col2 + "_" + row2).addClass('remover');
			$(".dulcesImagen_" + col3 + "_" + row2).addClass('remover');
			$(".dulcesImagen_" + col4 + "_" + row2).addClass('remover');
			quitar = 1;
		}
	}else 
	if (tipoMovimiento == 2){
		var a = $(".dulcesImagen_" + col + "_" + row).attr('src');
		row3 = row2 -1;
		var b = $(".dulcesImagen_" + col2 + "_" + row3).attr('src');
		row4 = row2 + 1;
		var c = $(".dulcesImagen_" + col2 + "_" + row4).attr('src');
		if (a==b && b==c){
			$(segundaImagen).attr("src",posicionImagen);
			$(primeraImagen).attr("src", posicionImagen2);
			$(".dulcesImagen_" + col2 + "_" + row2).addClass('remover');
			$(".dulcesImagen_" + col2 + "_" + row3).addClass('remover');
			$(".dulcesImagen_" + col2 + "_" + row4).addClass('remover');
			quitar = 1;
		}
	}
}

function remover(){
	if (quitar == 1){
		$.each($(".remover"), function(){
			$(this).animate({
				opacity:0
			},
            {
				duration: 200,
				complete: function(){
					$(this).remove();
					
				}
			});
		});	
		quitar = 0;	
		puntuacion();
		clicks();
	}
	vercuantos();

}

function puntuacion(){
	suma = parseInt(puntos.textContent);
	puntos.textContent = suma + 30;
}

function clicks(){
	mov = mov + 1;
	movimientos.textContent = mov;
}

// Mostrar score
 
 function mostrarScore(){
 	$('.time').hide();
 	$('.panel-tablero').hide(2000);
 	$('.panel-score').animate({'width': '100%' },2000);
 }


