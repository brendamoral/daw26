function limpiarFormulario() {
	document.getElementById("miForm").reset();
	
	 }

	var CON = function (n1){ 

	var numero1 = parseInt(document.getElementById("Metros").value);

	var resultado = numero1 * 1.094;

	return resultado;

	}