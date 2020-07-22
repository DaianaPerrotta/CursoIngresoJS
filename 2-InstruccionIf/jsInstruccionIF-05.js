function mostrar()
{
	//tomo la edad  
	var edadIngresada;

	edadIngresada=txtIdEdad.value;
	edadIngresada=parseInt(edadIngresada);

	
	if(edadIngresada<13 || edadIngresada>17)// || significa O
	{
		alert("No es adolescente");
	}


/*

	if(!(edadIngresada>12 && edadIngresada<18)// ! está negando todo lo posterior
	{
		alert("No es adolescente");
	}



	if(edadIngresada>12 && edadIngresada<18) //&& es Y
	{
		
	}
	else
	{
		alert("No es adolescente");
	}



	if(edadIngresada<13)
	{
		alert("No es adolescente");
	}

	if(edadIngresada>17)
	{
		alert("No es adolescente");
	}



	if(edadIngresada>17)
	{
		alert("No es adolescente");
	}

	if(edadIngresada<13)
	{
		alert("No es adolescente");
	}

*/


	
}//FIN DE LA FUNCIÓN