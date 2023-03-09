/*
document.getElementById('boton').onclick = function (){
	console.log("Capturamos el evento click");
	document.getElementById("demo").innerHTML = "PRUEBAS";
}
*/

document.getElementById('nombre').addEventListener('move', function() {
	document.body.style.fontSize = "16pt";
});


function modificaTexto (){
		texto1.style.fontSize = "16pt";
	}

function restauraTexto (){
		texto1.style.fontSize = "12pt";
	}