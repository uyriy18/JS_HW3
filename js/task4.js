/*Определить количество цифр в введенном числе.*/
"use strict"
var digit = prompt("Enter the digit");
if(+digit){
	alert(`The count of digits in your number = ${digit.length}`);
}
else{
	alert("Incorrect data");
}
