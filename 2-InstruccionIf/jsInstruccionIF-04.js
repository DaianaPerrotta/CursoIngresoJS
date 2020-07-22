function mostrar()
{
	//tomo la edad  
	var edadIngresada,

	edadIngresada=txtIdEdad.value;
	edadIngresada=parseInt(edadIngresada);

	if(edadIngresada>12 && edadIngresada<18) //&& es Y
	{
		alert("Es adolescente");
	}

/*
	if(edadIngresada>12)
	{
		if(edadIngresada<18)
		{
			alert("Es adolescente");
		}
	}


	if(edadIngresada<18)
	{
		if(edadIngresada>12)
		{
			alert("Es adolescente");
		}
	}
*/

}//FIN DE LA FUNCIÓN