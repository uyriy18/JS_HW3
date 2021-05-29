/*Зациклить калькулятор. Запросить у пользователя 2 числа
и знак, решить пример, вывести результат и спросить, хо-
чет ли он решить еще один пример. И так до тех пор, пока
пользователь не откажется.*/
"use strict"
var check = true;
while(check){
	var result = 0;
	var firstNumber = +prompt("Enter the first digit");
   var secondNumber = +prompt("Enter the second digit");
   var operator = prompt("Enter the operation");
   switch(operator){
   	case "+":
   	alert(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
   	break;
   	case "-":
   	alert(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
   	break;
   	case "*":
   	alert(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
   	break;
   	case "/":
   	if(secondNumber != 0){
   		alert(`${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`);
   	}
   	else{
   		alert("Can't divide on zero");
   	}
   	break;
   	default :
   	alert("Incorrect operator!");
   	break;
   }
   check = confirm("Do you want to continue"); 
}
