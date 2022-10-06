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

// timer