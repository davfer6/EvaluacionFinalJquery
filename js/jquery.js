
function editarNota(codigo){
	var nota;

	for (var i = 0; i < localStorage.length; i++) {
		var clave = localStorage.key(i);
		if (clave==codigo) {
			nota = $.parseJSON(localStorage.getItem(clave));

			$('#codigo').val(nota.codigo);
			$('#nombre').val(nota.nombre);
			$('#i_nota').val(nota.descripcion);

		}
	}

};


function listarNotas(){
	var tabla ="";
	var parrafo1= $('#p1');

	tabla += '<table border="1">';
	tabla += '<tr>';
	tabla += '<th>Código</th>';
	tabla += '<th>Nombre</th>';
	tabla += '<th>Nota</th>';
	tabla += '<th>Editar</th>';
	tabla += '<th>Eliminar</th>';
	tabla += '</tr>';

	for(var i = 0; i < localStorage.length; i++){
			var clave= localStorage.key(i);
			var nota= $.parseJSON(localStorage.getItem(clave));

			tabla += '<tr>';
			tabla += '<td>'+nota.codigo+'</td>';
			tabla += '<td>'+nota.nombre+'</td>';
			tabla += '<td>'+nota.descripcion+'</td>';
			tabla += '<td><button onclick="editarNota(\''+nota.descripcion+'\');">Editar</button></td>';
			tabla += '<td><button onclick="eliminarNota(\''+nota.descripcion+'\');">Eliminar</button></td>';
			tabla += '</tr>';
	}

	tabla += '</table>';
	$(parrafo1).html(tabla);
};

function eliminarNota(codigo){

		localStorage.removeItem(codigo);
		listarNotas();

};


$(document).ready(function(){

		var contador;
		if (localStorage.length	>0) {
			contador = localStorage.length+1;
		}else{
			contador= 1;
		}

		$('#codigo').val(contador);

		$('#boton1').click(function	(){
				var codigo= $('#codigo').val();
				var nombre= $('#nombre').val();
				var descripcion	= $('#i_nota').val();

				var nota = {
					codigo:codigo,
					nombre:nombre,
					descripcion:descripcion
				};

				localStorage.setItem(codigo,JSON.stringify(nota));
				contador = localStorage.length+1;

				listarNotas();
				restablecer();

		});


		$('#boton2').click(function	(){

			restablecer();

		});

		function restablecer(){

			$('#codigo').val(contador);
			$('#nombre').val("");
			$('#i_nota').val("");			

		}; 

		listarNotas();
		$('#i_nota').val();






		$('#boton3').click(function	(){

			mostrarPromedio();

		});

		function mostrarPromedio(){

				
			var promedio=[];

			for(var i = 0; i < localStorage.length; i++){
				var clave= localStorage.key(i);
				var nota= $.parseJSON(localStorage.getItem(clave));

				promedio[i]=parseFloat(nota.descripcion);
			
			}

			var out=0;
			for (var i = 0; i < promedio.length; i++) {
				out+=promedio[i];
			}
			out=out/promedio.length;

			alert("El promedio es: "+out);



		}; 



		$('#boton4').click(function	(){

			mostrarNotaMayor();

		});


		function mostrarNotaMayor() {
			var mayor=[];

			for(var i = 0; i < localStorage.length; i++){
				var clave= localStorage.key(i);
				var nota= $.parseJSON(localStorage.getItem(clave));

				mayor[i]=parseFloat(nota.descripcion);
			
			}

			var out= Math.max(...mayor);
			alert("La nota más alta es: "+out);
		}		



		$('#boton5').click(function	(){

			mostrarNotaMenor();

		});


		function mostrarNotaMenor(){

			var menor=[];

			for(var i = 0; i < localStorage.length; i++){
				var clave= localStorage.key(i);
				var nota= $.parseJSON(localStorage.getItem(clave));

				menor[i]=parseFloat(nota.descripcion);
			
			}

			var out= Math.min(...menor);
			alert("La nota más baja es: "+out);

		}; 



});