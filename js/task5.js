/*Запросить у пользователя 10 чисел и подсчитать, сколько
он ввел положительных, отрицательных и нулей. При этом
также посчитать, сколько четных и нечетных. Вывести
статистику на экран. Учтите, что достаточно одной пере-
менной (не 10) для ввода чисел пользователем.*/
"use strict"
var positive = 0;
var even = 0;
var odd = 0;
var result = "";
for(var i = 0; i < 10; i++){
   var digit = +prompt("Enter the digit");
   if(digit >= 0){
   	positive++;
   }
   if(digit % 2 == 0) {
   	even++;
   }
   else {
   	odd++;
   }

   result += digit + " "
}
alert(`You entered : ${result}\nPositive : ${positive}\nEven : ${even}\nOdd : ${odd}`);