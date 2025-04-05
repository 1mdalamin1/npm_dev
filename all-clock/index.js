export const digitalClock = (clockDisplay) => {
    
    let date = new Date();
    let h = date.getHours(); // 0 - 23
    let m = date.getMinutes(); // 0 - 59
    let s = date.getSeconds(); // 0 - 59
    let session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    let time = h + ":" + m + ":" + s + " " + session;
    document.getElementById(clockDisplay).innerText = time;
    document.getElementById(clockDisplay).textContent = time;

    setTimeout(digitalClock, 1000);
       
}

// Analog Clock need to be updated soon...
export const analogClock = () => {
    
    let date = new Date();
    let h = date.getHours(); // 0 - 23
    let m = date.getMinutes(); // 0 - 59
    let s = date.getSeconds(); // 0 - 59
    let session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    let time = h + ":" + m + ":" + s + " " + session;
    // document.getElementById(clockDisplay).innerText = time;
    // document.getElementById(clockDisplay).textContent = time;
    return time;
    
    setTimeout(digitalClock, 1000);
       
}


/**
 * Add a human-readable post time ago feature
 * @param {*} timestamp
 * @returns
 */
export const publishedTimeAgo = (timestamp) => {
    const seconds = Math.floor((new Date() - timestamp) / 1000);
  
    let interval = Math.floor(seconds / 31536000);
  
    if (interval > 1) {
      return interval + " years ago";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
      return interval + " months ago";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
      return interval + " days ago";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      return interval + " hours ago";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return interval + " minutes ago";
    }
    return Math.floor(seconds) + " seconds ago";
};

/**
 * Add a countDownDate feature
 * @param {*} addDate example = "Dec 6, 2050 15:37:25"
 * @returns
 */
export const countdown = (addDate) => {
    // Set the date we're counting down to
    let countDownDate = new Date(addDate).getTime();

    // Update the count down every 1 second
    let x = setInterval(function() {

        // Get today's date and time
        let now = new Date().getTime();
            
        // Find the distance between now and the count down date
        let distance = countDownDate - now;
            
        // Time calculations for days, hours, minutes and seconds
        let days    = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours   = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
        // Output the result in an element with id="demo"
        // document.getElementById("idShowCountDown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

        return days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
            
        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);
            // document.getElementById("idShowCountDown").innerHTML = "EXPIRED";
            return "EXPIRED";
        }
    }, 1000);
};
  