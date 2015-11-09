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
		//wait for 4 seconds and then vibrate for 3 seconds
		window.setTimeOut(
			function(){
			navigator.notification.vibrate(3000)
			},
			4000
		);
	}
}

