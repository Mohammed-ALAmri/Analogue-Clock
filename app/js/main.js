setInterval(
    function(){
        let currentTime = new Date();
        updateTime(currentTime);
    }
    , 1);

function updateTime(currentTime){
    let sec = document.getElementById("sec").style;
    let min = document.getElementById("min").style;
    let hr = document.getElementById("hr").style;
    
    sec.transform = "rotate(" + currentTime.getSeconds() * 6 + "deg)";
    min.transform = "rotate(" + currentTime.getMinutes() * 6 + "deg)";
    hr.transform = "rotate(" + (currentTime.getHours() * 30 + currentTime.getMinutes() * 0.5) + "deg)";
}