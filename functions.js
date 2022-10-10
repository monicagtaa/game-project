export const randomTreasures =(quantity, min, max) => {
  const arrNum = [];
  min = Math.ceil(min);
  max = Math.floor(max);
  while (arrNum.length < quantity) {
    let candidateNum = Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
    if (arrNum.indexOf(candidateNum) === -1) arrNum.push(candidateNum);
  }
    return (arrNum); 
}


export const arrow = (e, octopusXLeft, octopusYTop, octopusWidth, octopusHeight, octopus) => {
  if (e.key === "ArrowUp") {
  return octopus.style.top = octopusYTop - octopusHeight + "px";
} else if (e.key === "ArrowDown") {
  return octopus.style.top = octopusYTop + octopusHeight + "px";
} else if (e.key === "ArrowLeft") {
  return octopus.style.left = octopusXLeft - octopusWidth + "px";
} else if (e.key === "ArrowRight") {
  return octopus.style.left = octopusXLeft + octopusWidth + "px";
}
}

// Timer
const timer = document.getElementById("timer");
export const startTimer = (sec, timeInterval) => {
  clearInterval(timeInterval);
  timeInterval = setInterval(function(){
    console.log(sec)
    
   // Next, we reduced a  second since one second is passed
   if (sec!=0) {
    sec--
    return timer.innerHTML = (sec < 10 ? '0' + sec : sec)
   } else {
     clearInterval(timeInterval);
   }
  }, 1000)
}

