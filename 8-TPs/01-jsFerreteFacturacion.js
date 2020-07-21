/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var primerPrecio;
	var segundoPrecio;
	var tercerPrecio;
	var sumaPrecios;

	primerPrecio=txtIdPrecioUno.value;
	primerPrecio=parseInt(primerPrecio);

	segundoPrecio=txtIdPrecioDos.value;
	segundoPrecio=parseInt(segundoPrecio);

	tercerPrecio=txtIdPrecioTres.value;
	tercerPrecio=parseInt(tercerPrecio);

	sumaPrecios=primerPrecio+segundoPrecio+tercerPrecio;

	alert(sumaPrecios);

}
function Promedio () 
{
	var primerPrecio;
	var segundoPrecio;
	var tercerPrecio;
	var sumaPrecios;
	var promedioPrecios;

	primerPrecio=txtIdPrecioUno.value;
	primerPrecio=parseInt(primerPrecio);

	segundoPrecio=txtIdPrecioDos.value;
	segundoPrecio=parseInt(segundoPrecio);

	tercerPrecio=txtIdPrecioTres.value;
	tercerPrecio=parseInt(tercerPrecio);

	sumaPrecios=primerPrecio+segundoPrecio+tercerPrecio;

	promedioPrecios=sumaPrecios/3;

	alert(promedioPrecios);

}
function PrecioFinal () 
{
	var primerPrecio;
	var segundoPrecio;
	var tercerPrecio;
	var sumaPrecios;
	var porcentajeIVA;
	var precioIVA;
	var precioFinal;

	primerPrecio=txtIdPrecioUno.value;
	primerPrecio=parseInt(primerPrecio);

	segundoPrecio=txtIdPrecioDos.value;
	segundoPrecio=parseInt(segundoPrecio);

	tercerPrecio=txtIdPrecioTres.value;
	tercerPrecio=parseInt(tercerPrecio);

	sumaPrecios=primerPrecio+segundoPrecio+tercerPrecio;

	porcentajeIVA=21/100;
	precioIVA=porcentajeIVA*sumaPrecios;

	precioFinal=sumaPrecios+precioIVA;

	alert(precioFinal);

}