//Timer cronometro 
	var a = 0;

	$("#Centesimas").hide();
	$("#Segundos").hide();
	$("#Minutos").hide();


	$(".btn-reinicio").click(function(){
		a = a+1;
		if (a == 1){
			$("button").text("Reiniciar");
		 	inicio();
		}else if (a==2){
			parar();
		}else if(a==3){
			$("button").text("Iniciar");
			reinicio();
		}else{
			a=0;
		}
	 	
	 });

