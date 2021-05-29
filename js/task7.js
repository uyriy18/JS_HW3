/*Запросить у пользователя число и на сколько цифр его
сдвинуть. Сдвинуть цифры числа и вывести результат (если
число 123456 сдвинуть на 2 цифры, то получится 345612).*/
"use strict"
var result = "";
var digit = prompt("Enter the first digit");
var moveNumber = +prompt("Enter from witch position you want to move numbers");
if(+digit && digit.length > moveNumber){
	for(var i = moveNumber; i < digit.length; i++){
		result += digit[i];
	}
	for(var i = 0; i < moveNumber; i++){
		result += digit[i];
	}
	alert(result);
}
else{
	alert("Incorrect data!");
}