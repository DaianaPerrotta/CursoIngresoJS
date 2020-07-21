/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	var importeSueldo;
	var porcentajeAumento;
	var importeAumento;
	var resultadoAumento;
	

	importeSueldo=txtIdSueldo.value;
	importeSueldo=parseInt(importeSueldo);

	porcentajeAumento=10/100;
	importeAumento=importeSueldo*porcentajeAumento;
	
	resultadoAumento=importeSueldo+importeAumento;

	txtIdResultado.value=resultadoAumento;
	
}