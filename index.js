import { randomTreasures, arrow, startTimer } from "./functions.js";

const gameDisplay = document.querySelector("main");
// console.log(gameDisplay);
const startGame = document.querySelector(".startButton");

const startDisplay = document.querySelector(".startDisplay")
let timeDisplay = document.querySelector(".timerDisplay")
console.log(timeDisplay);
// set array of tresures & set the game with treasures-images
const octopus = document.querySelectorAll(".octopus")[0];
// console.log(octopus);
const octopusRotation = document.querySelectorAll(".rotation")[0];
const treasures = document.querySelectorAll(".treasures");
// console.log(treasures[0]);

// Stablish octopus center and vars
let octopusWidth = Number(getComputedStyle(octopus).width.split("px")[0]) / 2;
let octopusHeight = Number(getComputedStyle(octopus).height.split("px")[0]) / 2;
let octopusYTop = 0;
let octopusXLeft = 0;
let score = 0;
let sec = 15+1;
let timeInterval; 


// set treasure positions
const min = 1; // treasure position needs to be away from the octopus
// Grid is a square. The grid width divided by the width of the treasure
const gridWidth = 900;
const gridColumnSize = 25; // treasures width

// generate tresure positions
let number = randomTreasures(treasures.length * 2, min, gridWidth / gridColumnSize); //random number generator


startGame.addEventListener("click", (event) => {
  startDisplay.remove();
  timeDisplay.style.visibility = "visible";
  event.preventDefault();
  // startDisplay.classList.toggle("hide");
 
  // gameDisplay.classList.toggle("show");
  

// startGame.style.visibility = "visible";

// assign tresure positions
  for (let i = 0; i < treasures.length; i++) {
    treasures[i].style.left = number.pop() * gridColumnSize + "px";
    treasures[i].style.top = number.pop() * gridColumnSize + "px";
  }
  startTimer(sec, timeInterval)
});

//->-> Game playing section

document.onkeydown = (e) => {
  octopusRotation.style.transform = "rotate(0deg)";
  
   
  // Arrow movement= XLeft:Width & YTop:Height
  if (timer.innerHTML >0 && score < treasures.length) {
  
  arrow(e, octopusXLeft, octopusYTop, octopusWidth, octopusHeight, octopus);

  // Get the octopus location after arrow movement
  octopusYTop = Number(getComputedStyle(octopus).top.split("px")[0]);
  octopusXLeft = Number(getComputedStyle(octopus).left.split("px")[0]);

  // Apply the location (i.e., top & left) to octopus style
  octopus.style.top = octopusYTop + "px";
  octopus.style.left = octopusXLeft + "px";
  treasuresTouch(); // check for collison
  }
};

// Collision:
const treasuresTouch = () => {
  // console.log(treasures.length);
  for (let i = 0; i < treasures.length; i++) {
    // console.log(`the touch has and i of: ${i}`);
    let treasureWidth =
      Number(getComputedStyle(treasures[i]).width.split("px")[0]) / 2;
    let treasureHeight =
      Number(getComputedStyle(treasures[i]).height.split("px")[0]) / 2;
    let octopusXPos = Number(getComputedStyle(octopus).left.split("px")[0]); //octopusXLeft
    let octopusYPos = Number(getComputedStyle(octopus).top.split("px")[0]); // octopusYTop
    let treasureXPos = Number(getComputedStyle(treasures[i]).left.split("px")[0]);
    let treasureYPos = Number(getComputedStyle(treasures[i]).top.split("px")[0]);

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
      score += 1;
      console.log(score, treasures.length);
      octopusRotation.style.transform = "rotate(180deg)";      
    } else {
      treasures[i].style.border = "none";
      // console.log(`i have the touch else: ${i}`);
    }
  }
  return [octopus.style.width, octopus.style.height];
};

