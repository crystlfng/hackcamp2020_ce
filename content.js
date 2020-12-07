//Define vars to hold time values
let seconds = 0;
let minutes = 25;

//Define vars to hold "display" value
let displaySeconds = 0;
let displayMinutes = 0;

//Define var to hold setInterval() function
let interval = null;

//Define var to hold stopwatch status
let status = "stopped";

//Stopwatch function (logic to determine when to increment next value, etc.)
function stopWatch(){

  

    //Logic to determine when to increment next value
    if(seconds === 0){
        seconds = 60;
        minutes--;
        
    }
    
    seconds--;

    //If seconds/minutes/hours are only one digit, add a leading 0 to the value
    if(seconds < 10){
        displaySeconds = "0" + seconds.toString();
    }
    else{
        displaySeconds = seconds;
    }

    if(minutes < 10){
        displayMinutes = "0" + minutes.toString();
    }
    else{
        displayMinutes = minutes;
    }

    
    if(minutes === 0){
				window.clearInterval(interval);
    	seconds = 0;
    	minutes = 25;
    	document.getElementById("display").innerHTML = "00:00";
    	document.getElementById("startStop").innerHTML = "Start";
		}

    //Display updated time values to use
    document.getElementById("display").innerHTML = displayMinutes + ":" + displaySeconds;

}

document.getElementById("playbutton").addEventListener("click", startStop);

function startStop(){

    if(status === "stopped"){
        //Start the stopwatch (by calling the setInterval() function)
        interval = window.setInterval(stopWatch, 1000);
        status = "started";
        document.getElementById('show').style.visibility=document.getElementById('show').style.visibility == 'hidden'? 'visible' : 'hidden';
    }
    else{

        window.clearInterval(interval);
        status = "stopped";

    }

}
document.getElementById("pausebutton").addEventListener("click", stop);


function stop(){
				window.clearInterval(interval);
        status = "stopped";
        document.getElementById('show').style.visibility=document.getElementById('show').style.visibility == 'visible'? 'hidden' : 'visible';
}


function clear(){
	document.getElementById("display").innerHTML = "00:00";

}

document.getElementById("resetbutton").addEventListener("click", reset);

//Function to reset the stopwatch
function reset(){

    window.clearInterval(interval);
    seconds = 0;
    minutes = 25;
    document.getElementById("display").innerHTML = "25:00";
}

