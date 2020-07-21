/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombreIngresado;
	
	nombreIngresado=prompt("Ingresa tu nombre", "Natalia Natalia"); //DECLARO VARIABLE Y ASINGNO INFORMACION
	//promp siempre va acompañado de un = y una variable asignado. Sirve para mostrar y pedir un dato
	
	alert("Su nombre es: " +nombreIngresado); //el signo + sirve para concatenar informacion

	//alert(nombreIngresado); //lowel camel case. Sirve para mostrr unicamente

}

