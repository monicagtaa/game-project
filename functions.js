export const randomTreasures = (quantity, min, max) => {
  const arrNum = [];
  min = Math.ceil(min);
  max = Math.floor(max);
  while (arrNum.length < quantity) {
    let candidateNum = Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
    if (arrNum.indexOf(candidateNum) === -1) arrNum.push(candidateNum);
  }
  return arrNum;
};

export const arrow = (e, octopusXPos, octopusYPos, octopusWidth, octopusHeight, octopus) => {
  if (e.key === "ArrowUp") {
    return (octopus.style.top = octopusYPos - octopusHeight + "px");
  } else if (e.key === "ArrowDown") {
    return (octopus.style.top = octopusYPos + octopusHeight + "px");
  } else if (e.key === "ArrowLeft") {
    return (octopus.style.left = octopusXPos - octopusWidth + "px");
  } else if (e.key === "ArrowRight") {
    return (octopus.style.left = octopusXPos + octopusWidth + "px");
  }
};

// Timer
const timer = document.getElementById("timer");
export const startTimer = (sec, timeInterval) => {
  clearInterval(timeInterval);
  timeInterval = setInterval(function () {
    // console.log(sec)

    // Next, we reduced a  second since one second is passed
    if (sec != 0) {
      sec--;
      return (timer.innerHTML = sec < 10 ? "0" + sec : sec);
    } else {
      clearInterval(timeInterval);
    }
  }, 1000);
};

// limit octopus movements to the grid
export const octopusMaxMovement = (octopusXPos,octopusYPos,gridWidth,octopusWidth) => {
  if (octopusXPos > gridWidth) {
    return [-octopusWidth, octopusYPos];
  } else if (octopusXPos < 0) {
    return [gridWidth, octopusYPos];
  } else if (octopusYPos > gridWidth) {
    return [octopusXPos, -octopusWidth];
  } else if (octopusYPos < 0) {
    return [octopusXPos, gridWidth];
  } else {
    return [octopusXPos, octopusYPos];
  }
};


// end game and display results
export const endGame = (gameOver, gameOverTime, tresureCount, treasuresLength, gameOverResult) => {
  gameOver = true;
  //check if all tresures where captured on time
  if (tresureCount === treasuresLength && Number(gameOverTime) > 0) {
  return gameOverResult.innerText = `Well Done! Your captured ${tresureCount} treasures with ${Number(gameOverTime)} seconds left`
  } else {
   return gameOverResult.innerText = `Game Over! Better luck next time: your captured ${tresureCount} treasures`
  }   
}