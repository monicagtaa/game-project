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
console.log(octopusRotation.style);
const treasures = document.querySelectorAll(".treasures");
console.log(treasures[1]);

// set array of tresures & set the game with treasures-images

// Sablishing the center of the treasures & octopus
let octopusWidth = Number(getComputedStyle(octopus).width.split("px")[0]) / 2;
let octopusHeight = Number(getComputedStyle(octopus).height.split("px")[0]) / 2;

// Keep track of where the octopus is located (i.e., top & left #px )
let octopusXLeft = 0;
let octopusYTop = 0;

// Set a timer and a score
// let score = 0;

// Arrow movement= XLeft:Width & YTop:Height

// const F = () => { function}
// if timer === 0 move
// if the treasure === 0

const movement = (document.onkeydown = (e) => {
  // for (let i = 0; i< treasures.length; i++) {
    octopusRotation.style.transform = "rotate(0deg)";
  if (e.key === "ArrowUp") {
    console.log(`up arrow pressed: ${octopus.style.top} & YTop:${octopusYTop}`);
    octopus.style.top = octopusYTop - octopusHeight + "px";
    console.log(`after pressing up arrow, YTop= ${octopus.style.top}`);
    // treasuresTouch();
  } else if (e.key === "ArrowDown") {
    console.log(
      `down arrow pressed: ${octopus.style.top} & YTop:${octopusYTop}`
    );
    octopus.style.top = octopusYTop + octopusHeight + "px";
    console.log(`after pressing down arrow: ${octopus.style.top}`);
    // treasuresTouch();
  } else if (e.key === "ArrowLeft") {
    octopus.style.left = octopusXLeft - octopusWidth + "px";
    // treasuresTouch();
  } else if (e.key === "ArrowRight") {
    octopus.style.left = octopusXLeft + octopusWidth + "px";
    // treasuresTouch();
  }
  octopusYTop = Number(getComputedStyle(octopus).top.split("px")[0]);
  octopusXLeft = Number(getComputedStyle(octopus).left.split("px")[0]);
  console.log(`XLeft= ${octopusXLeft}, YTop= ${octopusYTop}`);
  octopus.style.top = octopusYTop + "px";
  octopus.style.left = octopusXLeft + "px";
  console.log("hola");
  treasuresTouch();
});

// Collision: how to move to collision.js

const treasuresTouch = () => {
  console.log(treasures.length);
  for (let i = 0; i < treasures.length; i++) {
    console.log(`the touch has and i of: ${i}`);
    let treasureWidth =
      Number(getComputedStyle(treasures[i]).width.split("px")[0]) / 2;
    let treasureHeight =
      Number(getComputedStyle(treasures[i]).height.split("px")[0]) / 2;
    let octopusXPos = Number(getComputedStyle(octopus).left.split("px")[0]); //octopusXLeft
    let octopusYPos = Number(getComputedStyle(octopus).top.split("px")[0]); // octopusYTop

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

    console.log(octopusXPos, octopusYPos, treasureXPos, treasureYPos);
    console.log(leftCheck, rightCheck, topCheck, bottomCheck);

    // console.log (octopusWidth, octopusHeight, treasuresWidth, treasuresHeight);

    if (leftCheck && rightCheck && topCheck && bottomCheck) {
      console.log(`hit: XLeft= ${octopusXPos}, YTop= ${octopusYPos}`);
      // octopus.style.width = 200 + octopusWidth + "px";
      // octopus.style.height = 200 + octopusHeight + "px";
      console.log(octopusWidth, octopusHeight);
      treasures[i].style.visibility = "hidden";
      console.log(leftCheck, rightCheck, topCheck, bottomCheck);
      octopusRotation.style.transform = "rotate(180deg)";

      // .style.animationIterationCount = "4s"
    } else {
      treasures[i].style.border = "none";
      // console.log(leftCheck, rightCheck, topCheck, bottomCheck);
          console.log(`i have the touch else: ${i}`);
  }
}
return [octopus.style.width, octopus.style.height ]
};

// array of treasure images

// max size of player movements
// const maxGrid = Number((getComputedStyle(main).width).split("px")[0])

// generate random numbers within a rage to set the treasures positions
// https://stackoverflow.com/a/1527820/2124254
// .top = getRandomInt(0, 25) * grid;
// .left = getRandomInt(0, 25) * grid;
// const topValue= getRandomInt(min, max) =< {
//   return Math.floor(Math.random() * (max - min)) + min;
// }
