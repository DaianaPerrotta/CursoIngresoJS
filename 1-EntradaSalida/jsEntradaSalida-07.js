/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numeroUno;
	var numeroDos;
	var resultadoSuma;

	numeroUno=txtIdNumeroUno.value;
	numeroUno=parseInt(numeroUno);

	numeroDos=txtIdNumeroDos.value;
	numeroDos=parseInt(numeroDos);

	resultadoSuma=numeroUno+numeroDos;

	alert("la suma es "+resultadoSuma);	
}

function restar()
{
	var numeroUno;
	var numeroDos;
	var resultadoResta;

	numeroUno=txtIdNumeroUno.value;
	numeroUno=parseInt(numeroUno);

	numeroDos=txtIdNumeroDos.value;
	numeroDos=parseInt(numeroDos);

	resultadoResta=numeroUno-numeroDos;

	alert("la resta es "+resultadoResta);
}

function multiplicar()
{ 
	var numeroUno;
	var numeroDos;
	var resultadoMultiplicacion;

	numeroUno=txtIdNumeroUno.value;
	numeroUno=parseInt(numeroUno);

	numeroDos=txtIdNumeroDos.value;
	numeroDos=parseInt(numeroDos);

	resultadoMultiplicacion=numeroUno*numeroDos;

	alert("la multiplicación es "+resultadoMultiplicacion);
}

function dividir()
{
	var numeroUno;
	var numeroDos;
	var resultadoDivision;

	numeroUno=txtIdNumeroUno.value;
	numeroUno=parseInt(numeroUno);

	numeroDos=txtIdNumeroDos.value;
	numeroDos=parseInt(numeroDos);

	resultadoDivision=numeroUno/numeroDos;

	alert("la división es "+resultadoDivision);
}

