var isWaiting = false;
var isRunning = false;
var seconds = 10;
var countdownTimer;
var finalCountdown = false;

function GameTimer() {
    var minutes = Math.round((seconds - 30) / 60);
    var remainingSeconds = seconds % 60;
    if (remainingSeconds < 10) {
        remainingSeconds = "0" + remainingSeconds;
    }
    document.getElementById('waiting_time').innerHTML = minutes + ":" + remainingSeconds;
    if (seconds == 0) {
        isRunning = true;
        seconds += 2;
        
        if (finalCountdown) {
            clearInterval(countdownTimer);
        } else {
            finalCountdown = true;
        }

    } else {
        isWaiting = true;
        seconds--;
    }
}
countdownTimer = setInterval(GameTimer, 1000);

var m=getId('m'), s=getId('s'), btn=getId('btn'), status=getId('status'), inc =getId('inc') , dec =getId('dec'), interval=null, time=0, min=0;

btn.onclick = startCounter;
inc.onclick = incTime;
dec.onclick = decTime;

function startCounter() {

    if (time<=0) {
        status.textContent='Increase the timer first!';
        time=0;
        return;
    }
    status.textContent='Counting!';
    btn.textContent = 'Stop';
    btn.onclick = stopCounter;
    interval = setInterval(function(){
        time--;
        if (time<=0) {
            stopCounter();
            status.textContent='Time\'s Up';
        }
    setTime();        
    },200);
}

function stopCounter() {
    btn.textContent = 'Start';
    btn.onclick = startCounter;
    status.textContent='Stopped!';
    if (interval) clearInterval(interval);
}

function incTime(){
    time++;
    setTime();
}

function decTime(){
    time--;
    setTime();
}

function setTime() { 
        min= time/60;
        if (time<10) s.textContent= '0'+Math.floor(time%60);
        else s.textContent= Math.floor(time%60);
        if (min<0) m.textContent= '00';
        else if (min<10) m.textContent= '0'+Math.floor(min);
        else m.textContent= Math.floor(min);
}

function getId(x) {
    return document.getElementById(x);
}