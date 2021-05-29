/*Вывести таблицу умножения для всех чисел от 2 до 9.
Каждое число необходимо умножить на числа от 1 до 10.*/
"use strict"
alert("Open the console")
var result = "";
for(var i = 2; i <= 9; i++){
	for(var j = 1; j <= 10; j++){
      result += `${i} * ${j} = ${i * j}\n`;
	}
}
console.log(result);