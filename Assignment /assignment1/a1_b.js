// BIT116: Assignment 1 Part 2 - calcu() function with if/elseif/else
//////////////////////////////////////////////////////////////////////////////////////////////
// The value from the HTML page is passed through calcu() as a parameter argument,
// e.g., calcu('1') which takes the place of 'calcValue' entering the function below
// which is then passed to the if/elseif/else statements for comparison. If the value 
// of calcValue equals '1' then the first 'if' will be true and the value of the output text
// box will be a '1' with the += concatenating this value every time the button is pressed.
// The eval() fuction at the bottom turns all the concatenated string into an arithmetic 
// equation that can be evalutated, thus allowing the calculator to produce a viable answer.
//////////////////////////////////////////////////////////////////////////////////////////////
function calcu(calcValue) {
	if (calcValue == '1')
	{
	  calc.output.value += '1';
	}
    else if (calcValue == '2')
	{
	  calc.output.value += '2';
	}
    else if (calcValue == '3')
	{
	  calc.output.value += '3';
	}
    else if (calcValue == '4')
	{
	  calc.output.value += '4';
	} 
    else if (calcValue == '5')
	{
	  calc.output.value += '5';
	}
    else if (calcValue == '6')
	{
	  calc.output.value += '6';
	}
    else if (calcValue == '7')
	{
	  calc.output.value += '7';
	}
    else if (calcValue == '8')
	{
	  calc.output.value += '8';
	}
    else if (calcValue == '9')
	{
	  calc.output.value += '9';
	}
    else if (calcValue == '0')
	{
	  calc.output.value += '0';
	}
     else if (calcValue == '+')
	{
	  calc.output.value += '+';
	}
     else if (calcValue == '-')
	{
	  calc.output.value += '-';
	}
    else if (calcValue == 'x')
	{
	  calc.output.value += '*';
	}
     else if (calcValue == '/')
	{
	  calc.output.value += '/';
	}
    else if (calcValue == 'ce')
	{
	  calc.output.value = '';
	}
	else // <-- Notice no condition on this last else
	{
	  calc.output.value = eval(calc.output.value) // <-- the eval() function turns the collection of string into a working math function
	}
}
