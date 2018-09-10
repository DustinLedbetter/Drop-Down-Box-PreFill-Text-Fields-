//God First//
/*
Author: Dustin Ledbetter
Date: 9/10/2018
Purpose: This a javascript function that is called when a dropdown box choice is made 
		 and then fills text fields based on the choice made
*/

function updateText(selectedPlace) 
{ 

	if (document.getElementById(selectedPlace).value == "Texas") 
	{ 
		location1.value = "Hot place to live";
		address1.value = "This is a cool place";
		address2.value = "zoom";
		city.value = "green";
		state.value = "Texas";
		zip.value = "22222";
	}
	else if (document.getElementById(selectedPlace).value == "Florida") 
	{
		location1.value = "Swamps everywhere";
		address1.value = "I also live here";
		address2.value = "";
		city.value = "yellow";
		state.value = "Florida";
		zip.value = "11111";
	}
	else if (document.getElementById(selectedPlace).value == "New York") 
	{
		location1.value = "Really tall buildings";
		address1.value = "I live here";
		address2.value = "";
		city.value = "blue";
		state.value = "New York";
		zip.value = "33333";
	}
	else
	{
		location1.value = "";
		address1.value = "";
		address2.value = "";
		city.value = "";
		state.value = "";
		zip.value = "";
	}

}
