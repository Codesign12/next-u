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

function ordenarBloques(){
  $$('.elemento').each(function(item){
    item.setStyle({order: makeUniqueRandom()})
  })
}
var uniqueRandoms = [];
var numRandoms = 49;
function makeUniqueRandom() {
    // refill the array if needed
    if (!uniqueRandoms.length) {
        for (var i = 0; i < numRandoms; i++) {
            uniqueRandoms.push(i);
        }
    }
    var index = Math.floor(Math.random() * uniqueRandoms.length);
    var val = uniqueRandoms[index];

    // now remove that value from the array
    uniqueRandoms.splice(index, 1);

    return val;

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
		 	ordenarBloques();
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

 var posicion;
 var posicion2;
 var movimientos = document.getElementById('movimientos-text');
 var mov = 0;

 	function iniciaMovimientos(){
		$('.elemento').draggable({ 
			start: function(){
				containment: 'parent';
				posicion = $(this).position();
				clicks();
			}
	// 	drop: function(){
	// 		$('.ui-draggable-dragging').position() = posicion2;
	// 	}
	// 	over: function(){
	// 		posicion2 = $(this).position();
	// 	}
		});
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


