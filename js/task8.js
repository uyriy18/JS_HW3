/*Зациклить вывод дней недели таким образом: «День недели.
Хотите увидеть следующий день?» и так до тех пор, пока
пользователь нажимает OK.*/
var check = true;
outer : while(true){
	for(var i = 1; i < 8; i++){
	   switch(i){
		   case 1:
	      alert("Monday");
	   	break;
		   case 2:
		   alert("Tuesday");
		   break;
		   case 3:
		   alert("Wednesday");
		   break;
		   case 4:
		   alert("Thursday");
		   break;
		   case 5:
		   alert("Friday");
		   break;
		   case 6:
		   alert("Saturday");
		   break;
		   case 7:
		   alert("Sunday");
		   break;
	   }
	   check = confirm("Do you want to see the next day?");
	   if(!check) break outer;
   }
}
