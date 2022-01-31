var alarmTime = "nothing";
var toCompare = "nothing";
var audio;
// edit_alarm.style.display=none;
document.getElementById("edit_alarm").style.display = "none";
document.getElementById("dismiss_alarm").style.display = "none";
const date = new Date();
let day = date.getDay();
let d1 = date.getDate();
let year = date.getFullYear();
let month = date.getMonth()+1;
let h = date.getHours();
let m = date.getMinutes();
let s = date.getSeconds();
    
function startTime() {
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    var day1;
    if(day == 1){
        day1 = "Monday";
    }
    else if(day == 2){
        day1 = "Tuesday";
    }
    else if(day == 3){
        day1 = "Wednesday";
    }
    else if(day == 4){
        day1 = "Thursday";
    }
    else if(day == 5){
        day1 = "Friday";
    }
    else if(day == 6){
        day1 = "Saturday";
    }
    else if(day == 7){
        day1 = "Sunday";
    }
    document.getElementById("txt1").innerHTML =day1 + "(" + d1 + "-" + month + "-" + year + ")";
    document.getElementById("txt").innerHTML =  h + ":" + m + ":" + s;
    toCompare = h + ":" + m;
    if(String(toCompare) === String(alarmTime)){
        audio = document.getElementById("alarm_song");
        audio.play();
        setTimeout(stop_alarm, 30000);
        console.log("Comparison passed");
    }
    s++;
    if(s == 60){
        s = 0;
        m++;
        if(m == 60){
            m = 0;
            h++;
            if(h == 24){
                h = 0;
                day++;
                if(day == 8){
                    day = 1;
                }
            }
        }
    }
  }
  setInterval(startTime, 1000);

  function checkTime(i) {
if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
return i;
}

let alarm_set = document.getElementById("alarm_set");
let alarm_input = document.getElementById("alarm_input");
let alarm_display = document.getElementById("alarm_display");
let alarm_song = document.getElementById("alarm_song");

alarm_set.addEventListener("click", function(e){
    if(!alarm_input.value)return;
    var temp = "Alarm set for: ";
    alarm_display.innerHTML = temp + alarm_input.value;

    var h1 = alarm_input.value.slice(0,2);
    var m1 = alarm_input.value.slice(3,);
    // console.log(h1);
    // console.log(m1);
    alarmTime = h1 + ":" + m1;
    // console.log(alarmTime);
    
    alarm_input.value = "";
    alarm_input.innerHTML = ""; 
    document.getElementById("edit_alarm").style.display = "inline-block";
    document.getElementById("dismiss_alarm").style.display = "inline-block";
});


let edit_alarm = document.getElementById("edit_alarm");
let dismiss_alarm = document.getElementById("dismiss_alarm");
edit_alarm.addEventListener("click", function(e){
    alarm_display.innerHTML="";
    edit_alarm.value = alarm_input;
    alarm_input.value = alarmTime;
    alarm_input.innerHTML = alarmTime; 
    alarmTime = "";
    audio.pause();
    audio.currentTime = 0;
    
});
dismiss_alarm.addEventListener("click", function(e){
    alarm_display.innerHTML="";
    alarm_display.value="";
    alarm_input.innerHTML="";
    alarm_input.value = "";
    alarmTime = "";
    audio.pause();
    audio.currentTime = 0;
    document.getElementById("edit_alarm").style.display = "none";
document.getElementById("dismiss_alarm").style.display = "none";

});
function stop_alarm(){
    alarm_display.innerHTML="";
    alarm_display.value="";
    alarm_input.innerHTML="";
    alarm_input.value = "";
    alarmTime = "";
    audio.pause();
    audio.currentTime = 0;
}
