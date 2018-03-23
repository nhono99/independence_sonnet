// Set the date we're counting down to
var countDownDate = new Date("Apr 15, 2018 11:59:00").getTime();

// Update the count down every 1 second
var countDownTimerFunc = setInterval(function() {
	console.log("hi");
   

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now an the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    // document.getElementById("BTcamp_countdown").innerHTML = days + ":" + hours + ":"
    // + minutes + ":" + seconds;
    
    document.getElementById("BTcamp_countdown_days").innerHTML = days;
    document.getElementById("BTcamp_countdown_hours").innerHTML = hours;
    document.getElementById("BTcamp_countdown_minutes").innerHTML = minutes;
    document.getElementById("BTcamp_countdown_seconds").innerHTML = seconds;
    
    // If the count down is over, write some text 
    if (distance < 0) {
      clearInterval(countDownTimerFunc);
      //document.getElementById("BTcamp_countdown").innerHTML = "EXPIRED";
        
      document.getElementById("BTcamp_countdown_days").innerHTML = 0;
      document.getElementById("BTcamp_countdown_hours").innerHTML = 0;
      document.getElementById("BTcamp_countdown_minutes").innerHTML = 0;
      document.getElementById("BTcamp_countdown_seconds").innerHTML = 0;
    }
}, 1000);