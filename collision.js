export const treasuresTouch = () => {
  let octopusXPos = Number(getComputedStyle(octopus).left.split("px")[0]); //octopusXLeft
  let octopusYPos = Number(getComputedStyle(octopus).top.split("px")[0]); // octopusYTop

  let treasuresXPos = Number(getComputedStyle(treasures).left.split("px")[0]);
  let treasuresYPos = Number(getComputedStyle(treasures).top.split("px")[0]);

  let leftCheck = octopusXPos + octopusWidth > treasuresXPos - treasuresWidth;
  let rightCheck = octopusXPos - octopusWidth < treasuresXPos + treasuresWidth;

  let topCheck = octopusYPos + octopusHeight > treasuresYPos - treasuresHeight;
  let bottomCheck =
    octopusYPos - octopusHeight < treasuresYPos + treasuresHeight;

  console.log(octopusXPos, octopusYPos, treasuresXPos, treasuresYPos);
  // console.log (octopusWidth, octopusHeight, treasuresWidth, treasuresHeight);

  if (leftCheck && rightCheck && topCheck && bottomCheck) {
    console.log(`hit: XLeft= ${octopusXPos}, YTop= ${octopusYPos}`);
    octopus.style.width = 50 + octopusWidth + "px";
    octopus.style.height = 50 + octopusHeight + "px";
    treasures.style.visibility = "hidden";
  } else {
    treasures.style.border = "none";
  }
  return treasuresTouch()
};
