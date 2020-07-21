/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{

	//txtIdNumeroUno	txtIdNumeroDos

	var numeroUno;
	var numeroDos;
	var resultado;

	//test
	/*
	numeroUno=6;
	numeroDos=5            da como resultado 11

	numeroUno="6";
	numeroDos="5"          da como resultado 65, como valores de texto, no numericos. Lo concatena
	*/

	numeroUno=txtIdNumeroUno.value;
	numeroUno=parseInt(numeroUno);

	numeroDos=txtIdNumeroDos.value;
	numeroDos=parseInt(numeroDos);

	resultado=numeroUno+numeroDos;

	alert(resultado);
}

