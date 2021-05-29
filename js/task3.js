/*Запросить у пользователя число и вывести все делители
этого числа.*/
"use strict"
var result = "";
var digit = +prompt("Enter the  digit");
for(var i = 0; i <= digit; i++){
	if(digit % i == 0){
		result += i + " ";
	}
}
	alert(`All dividers : ${result}`);