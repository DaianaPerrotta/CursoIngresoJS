/*2.	Para el departamento de Construcción:
A.	mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno
rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y
se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar
cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largoTerreno;
	var anchoTerreno;
	var dobleLargo;
	var dobleAncho;
	var perimetroTerreno;
	var cantAlambre;

	largoTerreno=txtIdLargo.value;
	largoTerreno=parseInt(largoTerreno);

	anchoTerreno=txtIdAncho.value;
	anchoTerreno=parseInt(anchoTerreno);

	dobleLargo=largoTerreno*2;
	dobleAncho=anchoTerreno*2;

	perimetroTerreno=dobleLargo+dobleAncho;

	cantAlambre=perimetroTerreno*3;
	
	alert("Se necesitan "+cantAlambre+" m de alambre");

}
function Circulo () 
{
	var radioTerreno;
	var diametroTerreno;
	var perimetroTerreno;
	var cantAlambre;

	radioTerreno=txtIdRadio.value;
	radioTerreno=parseInt(radioTerreno);

	diametroTerreno=2*radioTerreno;
	perimetroTerreno=3.14*diametroTerreno;

	cantAlambre=perimetroTerreno*3;
	
	alert("Se necesitan "+cantAlambre+" m de alambre");

}
function Materiales () 
{
	var largoTerreno;
	var anchoTerreno;
	var areaTerreno;
	var cantCemento;
	var cantCal;
	

	largoTerreno=txtIdLargo.value;
	largoTerreno=parseInt(largoTerreno);

	anchoTerreno=txtIdAncho.value;
	anchoTerreno=parseInt(anchoTerreno);

	areaTerreno=largoTerreno*anchoTerreno;

	cantCemento=areaTerreno*2;
	cantCal=areaTerreno*3;

	alert("Se necesitan "+cantCemento+" bolsas de cemento y "+cantCal+" bolsas de cal");

}