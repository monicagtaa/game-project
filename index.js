
// import {treasuresTouch} from "./collision.js";

const start = document.querySelector("main");
const startButton = document.querySelector(".startGame");
// startButton.addEventListener("click", () => {
//   start.style.visibility = "visible"
//   // document.body.innerHTML += `
//   // <main>
//   //     <img class="octopus" src= "./images/octopus-removebg.png">
//   //     <img class="treasures" src= "./images/coin.png">
//   //   </main>
//   // `;
// })

const octopus = document.querySelectorAll(".octopus")[0];
const octopusRotation = document.querySelectorAll(".rotation")[0];
console.log (octopusRotation.style);
const treasures = document.querySelectorAll(".treasures")[0];
// console.log (treasures);

// set array of tresures & set the game with treasures-images

// Sablishing the center of the treasures & octopus
let octopusWidth = Number((getComputedStyle(octopus).width).split("px")[0])/2;
let treasuresWidth = Number((getComputedStyle(treasures).width).split("px")[0])/2;

let octopusHeight = Number((getComputedStyle(octopus).height).split("px")[0])/2;
let treasuresHeight = Number((getComputedStyle(treasures).height).split("px")[0])/2;



// Keep track of where the octopus is located (i.e., top & left #px )
let octopusXLeft = 0;
let octopusYTop = 0;


// max size of player movements
// const maxGrid = Number((getComputedStyle(main).width).split("px")[0])

// generate random numbers within a rage to set the treasures positions
// https://stackoverflow.com/a/1527820/2124254
// .top = getRandomInt(0, 25) * grid;
// .left = getRandomInt(0, 25) * grid;
// const topValue= getRandomInt(min, max) =< {
//   return Math.floor(Math.random() * (max - min)) + min;
// }

// Set a timer and a score
// let score = 0;

// Arrow movement= XLeft:Width & YTop:Height
  document.onkeydown = (e) => {
  if (e.key === 'ArrowUp') {
    // console.log(`up arrow pressed: ${octopus.style.top} & YTop:${octopusYTop}`)
    octopus.style.top = (octopusYTop - octopusHeight)+"px"
    // console.log(`after pressing up arrow, YTop= ${octopus.style.top}`)
  } else if (e.key === 'ArrowDown') {
    // console.log(`down arrow pressed: ${octopus.style.top} & YTop:${octopusYTop}`)
    octopus.style.top = (octopusYTop + octopusHeight)+"px"
    // console.log(`after pressing down arrow: ${octopus.style.top}`)
  } else if (e.key === 'ArrowLeft') {
    octopus.style.left = (octopusXLeft - octopusWidth)+"px"
  } else if (e.key === 'ArrowRight') {
    octopus.style.left = (octopusXLeft + octopusWidth)+"px";
  }
  octopusYTop = Number((getComputedStyle(octopus).top).split("px")[0])
  octopusXLeft = Number((getComputedStyle(octopus).left).split("px")[0])
  console.log(`XLeft= ${octopusXLeft}, YTop= ${octopusYTop}`)
  octopus.style.top = octopusYTop +"px";
  octopus.style.left = octopusXLeft +"px";
  // how do I make the function return octopus X,Y
  // return (octopusXLeft, octopusYTop);
  // should I check here is timmer is 
  treasuresTouch ();
}


// Collision: how to move to collision.js
const treasuresTouch = () => {
  let octopusXPos = Number((getComputedStyle(octopus).left).split("px")[0]); //octopusXLeft
  let octopusYPos = Number((getComputedStyle(octopus).top).split("px")[0]); // octopusYTop

  let treasuresXPos = Number((getComputedStyle(treasures).left).split("px")[0]);
  let treasuresYPos = Number((getComputedStyle(treasures).top).split("px")[0]);

  let leftCheck = octopusXPos + octopusWidth > treasuresXPos - treasuresWidth;
  let rightCheck = octopusXPos - octopusWidth < treasuresXPos + treasuresWidth;

  let topCheck = octopusYPos + octopusHeight > treasuresYPos - treasuresHeight;
  let bottomCheck = octopusYPos - octopusHeight < treasuresYPos + treasuresHeight;

  console.log (octopusXPos, octopusYPos, treasuresXPos, treasuresYPos);
  // console.log (octopusWidth, octopusHeight, treasuresWidth, treasuresHeight);

  if(leftCheck && rightCheck && topCheck && bottomCheck) {
    console.log(`hit: XLeft= ${octopusXPos}, YTop= ${octopusYPos}`)
    octopus.style.width = (50 + octopusWidth) +"px";
    octopus.style.height = (50 + octopusHeight) +"px";
    treasures.style.visibility = "hidden";
    octopusRotation.style.transform = "rotate(180deg)";
    // .style.animationIterationCount = "4s"
    // score += 10;
  }
  else{
    treasures.style.border = "none";
  }

}

