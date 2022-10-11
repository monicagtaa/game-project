import { randomTreasures, arrow, startTimer, octopusMaxMovement, endGame } from "./functions.js";

const gameDisplay = document.querySelector(".gameDisplay");
const startGame = document.querySelector(".startButton");
// const restartGame = document.querySelector(".restartButton");
const startDisplay = document.querySelector(".startDisplay");
const treasureDisplay = document.querySelector(".treasureStart");
let timeDisplay = document.querySelector(".timerDisplay");
const octopus = document.querySelector(".octopus");
const octopusRotation = document.querySelector(".octopus--rotation");
const treasures = document.querySelectorAll(".treasures");
const gameOverResult = document.getElementById ("endResult");
const gameRules = document.getElementById ("gameRules");
// console.log(gameOverResult.innerHTML)

// -> -> Stablish octopus center and define game  variables:
let octopusWidth = Number(getComputedStyle(octopus).width.split("px")[0])/ 2;
let octopusHeight = Number(getComputedStyle(octopus).height.split("px")[0])/ 2;
let octopusYPos = 0;
let octopusXPos = 0;
let tresureCount = 0;
let sec = 15 + 1;
let timeInterval;
let XYPos = []; 
let gameOver = false;
let gameOverTime;

//  Set Grid : grid is a square, with square size = gridWidth divided by the width of the treasure
let gridWidth = Number(getComputedStyle(gameDisplay).width.split("px")[0]); // grid square size
let gridColumnSize = Number(getComputedStyle(Object.values(treasures)[0]).width.split("px")[0]); // treasures width

// generate tresure positions
const min = 1; // treasure position needs to be away from the octopus
let number = randomTreasures(treasures.length * 2, min, gridWidth / gridColumnSize); //random number generator

//Game loads: actions when play button is "click"
startGame.addEventListener("click", (event) => {
  startGame.remove();
  treasureDisplay.remove();
  gameRules.remove();
  gameDisplay.style.backgroundImage = "url('./images/ocean.PNG')";
  timeDisplay.style.visibility = "visible";
  event.preventDefault();

  // Remove rotating treasure and position octopus player
  octopus.style.transform = "translate3d(0px, 0px, 0)";

  // assign tresure positions
  for (let i = 0; i < treasures.length; i++) {
    treasures[i].style.left = number.pop() * gridColumnSize + "px";
    treasures[i].style.top = number.pop() * gridColumnSize + "px"; 
  }
  // start play time
  startTimer(sec, timeInterval);
});


//->-> Game playing section
document.onkeydown = (e) => {
  octopusRotation.style.transform = "rotate(0deg)";

  
  // stop game when timer ends or all treasures are captured
  if (timer.innerHTML > 0 && tresureCount < treasures.length) {
    // Arrow movement= XLeft:Width & YTop:Height
    arrow(e, octopusXPos, octopusYPos, octopusWidth, octopusHeight, octopus);

    // Get the octopus location after arrow movement
    octopusYPos = Number(getComputedStyle(octopus).top.split("px")[0]);
    octopusXPos = Number(getComputedStyle(octopus).left.split("px")[0]);
    
    // limit octopus movements to the grid
    XYPos = octopusMaxMovement(octopusXPos, octopusYPos, gridWidth, octopusWidth);
    octopusXPos = XYPos[0]; 
    octopusYPos = XYPos[1];

    treasuresTouch(); // check for collison
  } else {
    //section for Game over
    gameOverTime = timer.innerHTML; // game over time
    endGame(gameOver, gameOverTime, tresureCount, treasures.length, gameOverResult);
    gameOverResult.style.visibility = "visible"
  }
};

// Collision:
const treasuresTouch = () => {
  for (let i = 0; i < treasures.length; i++) {
    let treasureWidth =
      Number(getComputedStyle(treasures[i]).width.split("px")[0]) / 2;
    let treasureHeight =
      Number(getComputedStyle(treasures[i]).height.split("px")[0]) / 2;
    let octopusXPos = Number(getComputedStyle(octopus).left.split("px")[0]); //octopusXPos
    let octopusYPos = Number(getComputedStyle(octopus).top.split("px")[0]); // octopusYPos
    let treasureXPos = Number(
      getComputedStyle(treasures[i]).left.split("px")[0]
    );
    let treasureYPos = Number(
      getComputedStyle(treasures[i]).top.split("px")[0]
    );

    let leftCheck = octopusXPos + octopusWidth > treasureXPos - treasureWidth;
    let rightCheck = octopusXPos - octopusWidth < treasureXPos + treasureWidth;

    let topCheck = octopusYPos + octopusHeight > treasureYPos - treasureHeight;
    let bottomCheck =
      octopusYPos - octopusHeight < treasureYPos + treasureHeight;

    if (leftCheck && rightCheck && topCheck && bottomCheck) {
      // when octopus gets tresure increases in size
      // let increase = Number(getComputedStyle(octopus).width.split("px")[0]);
      // octopus.style.width = 25 + increase + "px";
      // octopus.style.height = 25 + increase + "px";
      // increase += 25;

      treasures[i].remove(); // tresure touch disapears
      tresureCount += 1; //counts treasures catured
      octopusRotation.style.transform = "rotate(180deg)";
    }
   
  }
  // return [octopus.style.width, octopus.style.height];
};
