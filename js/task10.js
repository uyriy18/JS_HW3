/*Игра «Угадай число». Предложить пользователю загадать
число от 0 до 100 и отгадать его следующим способом:
каждую итерацию цикла делите диапазон чисел пополам,
записываете результат в N и спрашиваете у пользователя
«Ваше число > N, < N или == N?». В зависимости от того
что указал пользователь, уменьшаете диапазон. Начальный
диапазон от 0 до 100, поделили пополам и получили 50.
Если пользователь указал, что его число > 50, то изменили
диапазон на от 51 до 100. И так до тех пор, пока пользова-
тель не выберет == N.*/
alert("Choose the number from 1 to 100");
var guess = false;
var firstdiv = 50;
var div = 25;
var check;
outer : while(true){
	check = prompt(`Is your number less than ${firstdiv} - Enter \"L\"\nIf your digit more than ${firstdiv} - enter \"M\"\nIf ${firstdiv} is your digit entey\"Yes\" `);
	if(check.toLowerCase() == "yes"){
		alert("Congratulations!");
		break outer;
	}

	else if(check.toLowerCase() == "l"){
		firstdiv -= Math.round(div);
   }
	else if(check.toLowerCase() == "m"){
		firstdiv += Math.round(div);
	}
	else{
		alert("Incorrect data!")
		continue;
	}
	div /= 2;
	if(firstdiv >= 100){
		firstdiv = 99;
		div = 25;
	}
	else if(firstdiv <= 1){
		firstdiv = 1;
		div = 25;
	}
	
}
	
	


