/*Запросить 2 числа и найти только наибольший общий
делитель.*/
"use strict"
var result = 0;
var firstNumber = +prompt("Enter the first digit");
var secondNumber = +prompt("Enter the second digit");
if(firstNumber > secondNumber)
{
	var temp = firstNumber;
	firstNumber = secondNumber;
	secondNumber = temp;
}
for(var i = 0; i <= firstNumber; i++){
	if((firstNumber % i == 0) && (secondNumber % i == 0)){
		result = i;
	}
}
alert(`The biggest common divider  = ${result}`)