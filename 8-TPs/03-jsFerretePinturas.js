/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados
con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit
(ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var temperaturaIngresada;
	var auxiliarResta;
	var auxiliarMultiplicacion;
	var temperaturaCelsius;

	temperaturaIngresada=txtIdTemperatura.value;
	temperaturaIngresada=parseInt(temperaturaIngresada);

	auxiliarResta=temperaturaIngresada-32;
	auxiliarMultiplicacion=auxiliarResta*5;
	temperaturaCelsius=auxiliarMultiplicacion/9;
 
	alert(+temperaturaIngresada+" Fahrenheit son "+temperaturaCelsius+" centígrados");
		
}

function CentigradosFahrenheit () 
{
	
	var temperaturaIngresada;
	var auxiliarMultiplicacion;
	var auxiliarDivision;
	var temperaturaFahrenheit;

	temperaturaIngresada=txtIdTemperatura.value;
	temperaturaIngresada=parseInt(temperaturaIngresada);

	auxiliarMultiplicacion=temperaturaIngresada*9;
	auxiliarDivision=auxiliarMultiplicacion/5;
	temperaturaFahrenheit=auxiliarDivision+32;
 
	alert(+temperaturaIngresada+" centígrados son "+temperaturaFahrenheit+" Fahrenheit");

}