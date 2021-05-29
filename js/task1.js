/*1. Подсчитать сумму всех чисел в заданном пользователем
диапазоне.*/
"use strict"
var firstNumber = +prompt("Enter the first digit");
var secondNumber = +prompt("Enter the second digit");
var result = 0;
if(firstNumber > secondNumber)
{
	var temp = firstNumber;
	firstNumber = secondNumber;
	secondNumber = temp;
}
for(var i = firstNumber; i <= secondNumber; i++){
	result += i;
}
alert(`Sume of all digits from ${firstNumber} to ${secondNumber} = ${result}`)