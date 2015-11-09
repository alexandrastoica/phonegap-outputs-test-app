function random(){
	var value = !Math.round(Math.random()); 
	document.getElementById('value').innerHTML = value;
	if(value == true){
		//beep once
		navigator.notification.beep(1);
		//vibrate for 2000 milliseconds
		navigator.notification.vibrate(2000);
	} else{
		//beep twice
		navigator.notification.beep(2);
		//vibrate for 5000 miliseconds
		navigator.notification.vibrate(5000);
	}
}

