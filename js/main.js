$(document).ready(function(){
	
	$(".titulo").append("<h2><b>CINE MELON</b></h2>").css({"background-color":"yellow" , "text-align":"center" , "font-size":"30px"});

	$(".category").append("<h4>Escoge una categor&iacute;a:</h4>").css({"color":"white", "font-size":"16px"}).append("<select></select>");
	
	$("select").addClass("seleccionar2");
	$(".seleccionar2").append("<option>Todas</option>").append("<option>Infantiles</option>").append("<option>Terror</option>").append("<option>Ciencia-Ficci&oacute;n</option>").append("<option>Romance</option>").css({"background-color":"#184D6C" , "height":"30px" , "width":"20%"});
	$("option").addClass("opcion").css({"color":"#091326" , "font-weigth":"bolder" , "font-size":"14px;"});

	//Asigno una segunda clase a opcion
	$(".option:eq(-1)").addClass("Romance");
	$(".option:eq(-2)").addClass("Ciencia-Ficcion");
	$(".option:eq(-3)").addClass("Terror");
	$(".option:eq(-4)").addClass("Infantiles");
	$(".option:eq(-5)").addClass("todas");
	
	
	
	//Agrego titulo h5 y etiqueta de imagen, luego asigno clase y estilos a img
	$(".detallePeliculas").append("<h5></h5>").append("<img/>");
	$("img").addClass("img-responsive").css({"height":"250px", "width":"190px"});

	
});

$(document).ready(function nombrePelicula(){
	//Agrego titulo con enlace a pelicula
	$("#pelicula1").find("h5").append("<a>Ver The Littlest Angel</a>").append("<p>Películas para niños a partir de 3 años. Con tan solo cinco años de edad, Little Angel es un niño que ha llegado al cielo antes de tiempo. Quizá por ello encuentra dificultades para adaptarse a su nueva vida. En vez de asistir a las clases de la Academia del Ángel, el pequeño se entretiene persiguiendo mariposas y jugando con su inseparable amigo perruno, A pesar del peligro y de que sabe que está prohibido, el joven decide bajar de nuevo a la tierra en busca de su caja de tesoros que echa mucho de menos. En compañía de su angelical cachorro, el protagonista emprenderá una aventura inolvidable.</p>");
	$("#pelicula2").find("h5").append("<a>Ver Buscando a Dori</a>").append("<p></p>");
	$("#pelicula3").find("h5").append("<a>Ver Bambi</a>").append("<p></p>");
	$("#pelicula4").find("h5").append("<a>Ver El Conjuro 2</a>").append("<p></p>");
	$("#pelicula5").find("h5").append("<a>Ver Silent Hill</a>").append("<p>Esta vez, contará la historia de Heather Mason y su padre. Cuando ella cumple los dieciocho años sufrirá terribles pesadillas y tras la desaparición de su padre, Heather descubrirá que no es quién realmente piensa.</p>");
	$("#pelicula6").find("h5").append("<a>Ver El viaje mas largo</a>").append("<p></p>");
	$("#pelicula7").find("h5").append("<a>Ver Guardianes de la Galaxia</a>").append("<p>El temerario aventurero Peter Quill es objeto de un implacable cazarrecompensas tras robar una misteriosa esfera codiciada por Ronan, un poderoso villano cuya ambición amenaza todo el universo. Para poder escapar del incansable Ronan, Quill se ve obligado a pactar una complicada tregua con un cuartero de disparatados inadaptados: Rocket, un mapache armado con un rifle, Groot, un humanoide con forma de </p>");
	$("#pelicula8").find("h5").append("<a>Ver Midnight spacial</a>").append("<p>Se centra en un padre y su hijo de ocho años. Ambos se verán obligados a huir cuando el primero descubra que su descendiente posee poderes especiales</p>");
	$("#pelicula9").find("h5").append("<a>Ver Tron</a>").append("<p>Sam Flynn (GARRETT HEDLUND), un experto en tecnología de 27 años e hijo de Kevin Flynn (JEFF BRIDGES), investiga la desaparición de su padre y se encuentra metido en el mismo mundo de programas violentos y juegos de lucha donde su padre a estado viviendo los últimos 25 años. Junto a la leal confidente de Kevin, (OLIVIA WILDE), padre e hijo se embarcan en una aventura a vida o muerte a través de un ciber universo visualmente increíble que se ha hecho más avanzado...y mucho más peligroso.</p>");
	$("#pelicula10").find("h5").append("<a>Ver Frozen</a>").append("<p></p>");
	$("#pelicula11").find("h5").append("<a>Ver Love and Honor</a>").append("<p>'Love and Honor' narra la apasionante historia de un joven soldado que ayuda a su mejor amigo a volver a conquistar el corazón de su novia, después de un viaje clandestino a casa desde el frente, donde combaten en la guerra de Vietnam durante una época de protesta y revolución social. El soldado entrará entonces en un proceso donde conocerá por primera vez el amor verdadero</p>");
	$("#pelicula12").find("h5").append("<a>Ver Storks</a>").append("<p></p>");
	$("#pelicula13").find("h5").append("<a>Ver The Host</a>").append("<p>Nuestro mundo ha sido invadido por un enemigo desconocido. Los seres humanos se han convertido en huéspedes de los invasores, que se han apoderado de sus mentes manteniendo el cuerpo intacto. Casi toda la humanidad ha sucumbido a esta invasión. Cuando Melanie (Saoirse Ronan), uno de los pocos humanos «salvajes» que quedan, se ve capturada, está convencida de que ha llegado su fin. Wanderer, el «alma» invasora asignada al cuerpo de Melanie, ya está avisada de las dificultades que implica vivir dentro de un ser humano: las emociones irrefrenables, el torrente de sensaciones, los recuerdos demasiado vívidos...Pero hay algo con lo que Wanderer no contaba: la antigua inquilina de su cuerpo se niega a cederle el control de su mente.Cuando unas fuerzas externas obligan a Wanderer y a Melanie a aliarse, ambas emprenden una incierta y peligrosa búsqueda del hombre al que aman.</p>");
	$("#pelicula14").find("h5").append("<a>Ver The Wicked</a>").append("<p>En un pueblo de pescadores de Munchkinland nace la primera hija de Melena. Su marido, el párroco unionista Frex, no puede estar con ella porque ha llegado al pueblo un teatro de títeres cuyos espectáculos irreverentes y groseros están haciendo estragos en la comunidad. La niña recién nacida se llama Elphaba, tiene la piel verde y unos dientes de tiburón con los que arranca de un mordisco los dedos de la comadrona. Wicked Memorias de una bruja mala se ha convertido ya en un clásico de la fantasía contemporánea. En él se dibuja un mundo rico y lleno de vida donde los animales hablan y luchan por ser respetados como ciudadanos de primera clase y donde una ingeniosa, irritable y poco comprendida niñita de piel verde pone en tela de juicio la preconcebida naturaleza del bien y del mal hasta convertirse en la Malvada Bruja del oeste. Pero no es cosa fácil ser la mala del cuento...</p>");
	$("#pelicula15").find("h5").append("<a>Ver La Matanza en Texas</a>").append("<p>Sally y su hermano Franklin viajan, junto a otros amigos, al cementerio donde yace el abuelo de ambos. Tras ello, el grupo se dirige a una vieja granja. En el camino, recogen a un extraño autoestopista, al que deben echar del coche cuando éste ataca a Frank. Finalmente, llegan a la granja. Buscando algún sitio donde bañarse, dos de los chicos entran en una casa, que desgraciadamente es el hogar del autoestopista y el resto de su familia, todos caníbales.</p>");
	
	$(".detallePeliculas").find("a").css({"color":"white" , "font-size":"14px" , "font-family":"Helvetica" , "text-decoration":"none" , "border-box":"box-sizing"});

//Oculto todas las etiquetas p que contienen informacion de sinopsis
$("p").hide();
	});
	


$(document).ready(function imagenes(){
	$("#pelicula1").children("img").attr("src", "img/angel.jpg");
	$("#pelicula2").children("img").attr("src", "img/dory.jpg");
	$("#pelicula3").children("img").attr("src", "img/bambi.jpg");
	$("#pelicula4").children("img").attr("src", "img/conjuro2.jpg");
	$("#pelicula5").children("img").attr("src", "img/silenthill.jpg");
	$("#pelicula6").children("img").attr("src", "img/elviajemaslargo.jpg");
	$("#pelicula7").children("img").attr("src", "img/galaxia.jpg");
	$("#pelicula8").children("img").attr("src", "img/mignight.jpg");
	$("#pelicula9").children("img").attr("src", "img/tron.jpg");
	$("#pelicula10").children("img").attr("src", "img/frozen.jpg");
	$("#pelicula11").children("img").attr("src", "img/loveandhonor.jpg");
	$("#pelicula12").children("img").attr("src", "img/stork.jpg");
	$("#pelicula13").children("img").attr("src", "img/thehost.jpg");
	$("#pelicula14").children("img").attr("src", "img/wicked.jpg");
	$("#pelicula15").children("img").attr("src", "img/matanza.jpg");
	});



//Seleccionar o filtrar
$(".opcion").change(function(Infantiles){
		$(".opcion").val("Infantiles").click(function(){
			$("img").not("."+$(".opcion").val()).hide()
		});
		
	});

$(".seleccionar2").change(function(){
		$(".seleccionar2").val("Terror").click(function(){
			$("img").not("."+$(".seleccionar2").val()).hide()
		});
		
	});

$(".seleccionar2").change(function(){
		$(".seleccionar2").val("Romance").click(function(){
			$("img").not("."+$(".seleccionar2").val()).hide()
		});
		
	});










//Abrir ventana modal
$(document).ready(function abrirVentana(){
	$(".ventana").slideDown("slow");
});



//Cerrar ventana modal
$(document).ready(function cerrarVentana(){
	$(".ventana").slideUp("fast");
});




//ver video


	$("#vModales").append("<p><a class='boton'>Ver más grande</a></p>");
	$(".boton").click(function(){
	if($(this).text() == "Cerrar"){
		/* Mostramos todas las capas de videos */
		$(".pantalla").show();
		/* Regresamos el video a la normalidad */
					
        $(this).closest("div").removeClass("completa");
		$(this).text("Ver más grande");
	}else{
		/* Ocultamos todas las capas de videos */
		$(".pantalla").hide();
		/* Mostramos el video actual */
		$(this).closest("div").show();
					                      
        $(this).closest("div").addClass("completa");
		$(this).text("Cerrar");
	}
				
});


