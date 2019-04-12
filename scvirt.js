jQuery(document).ready(function() {
	
	var classs = 5;
	var pasha = 1;
	var kostya = 2;
	var vlada = 3;
	var oleg = 4;
	var gosha = 5;
	var a = 1;
	
   function myFunction() {
	switch (classs) {
	  case 1:
	    alert("1 класс");
		document.write("25 человек");
	    break;
	  case 2:
	    alert("2 класс");
		document.write("29 человек");
		break;
	  case 3:
	    alert("3 класс");
		document.write("35 человек");
		break;
	  case 4:
	    alert("4 класс");
		document.write("15 человек");
		break;
	  case 5:
	    alert("5 класс");
		document.write("40 человек");
		break;
	  default:
		document.write("остальные классы");
	}
   }
   
   function name() {
	   if(a==1) {
		alert("Это Пашка");
		document.write("Капец он лошок XD)))");
	}
	else if(a==2) {
		alert("Это Костян");	
		document.write("Этот парень тупа красавчик!");
	}
	else if(a==3) {
		alert("Это Владка))");
		document.write("МОЯ ЛЮБОВЬ");
	}
	else if(a==4) {
		alert("Это Олег Молодой");
		document.write("Чувак который кинул нас и ушёл на другую квартиру");
	}
	else if(a==5) {
		alert("Это ГООООШАААА");
		document.write("Ахуевший пианист");
	}
	else {
		alert("ни одно из условий не верно");
	}
   }
   
   name();
   
  
   
});

/*это многострочный комментарий*/