/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	
	var importeEntrada;
	var porcentajeDescuento;
	var importeDescuento;
	var resultadoDescuento;
	

	importeEntrada=txtIdImporte.value;
	importeEntrada=parseInt(importeEntrada);

	porcentajeDescuento=25/100;
	importeDescuento=importeEntrada*porcentajeDescuento;
	
	resultadoDescuento=importeEntrada-importeDescuento;

	txtIdResultado.value=resultadoDescuento;

}
