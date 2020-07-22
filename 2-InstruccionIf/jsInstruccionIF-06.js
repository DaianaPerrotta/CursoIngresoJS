function mostrar()
{
	//tomo la edad  
	var edadIngresada;

	edadIngresada=txtIdEdad.value;
	edadIngresada=parseInt(edadIngresada);

	if(edadIngresada<13)
	{
		alert("Niño");
	}
	else
	{
		if(edadIngresada<18)
		{
			alert("Adolescente")
		}	
		else
		{
			alert("Mayor")
		}
	}	


/*
	if(edadIngresada<13)
	{
		alert("Niño");
	}

	if(edadIngresada>12 && edadIngresada<18)
	{
		alert("Adolescente");
	}

	if(edadIngresada>17)
	{
		alert("Mayor");
	}	
*/

}//FIN DE LA FUNCIÓN