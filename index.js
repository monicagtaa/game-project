var square_1 = document.getElementsByClassName("square_1")[0];
var square_2 = document.getElementsByClassName("square_2")[0];

var square_1_width =
  Number(getComputedStyle(square_1).width.split("px")[0]) / 2;
var square_2_width =
  Number(getComputedStyle(square_2).width.split("px")[0]) / 2;

var square_1_height =
  Number(getComputedStyle(square_1).height.split("px")[0]) / 2;
var square_2_height =
  Number(getComputedStyle(square_2).height.split("px")[0]) / 2;

square_1.addEventListener("mousemove", (e) => {
  square_1.style.left = e.clientX - square_1_width + "px";
  square_1.style.top = e.clientY - square_1_height + "px";

  checkCollision();
});

function checkCollision() {
  let x_pos_sq_1 = Number(getComputedStyle(square_1).left.split("px")[0]);
  let y_pos_sq_1 = Number(getComputedStyle(square_1).top.split("px")[0]);

  let x_pos_sq_2 = Number(getComputedStyle(square_2).left.split("px")[0]);
  let y_pos_sq_2 = Number(getComputedStyle(square_2).top.split("px")[0]);

  let leftPos = x_pos_sq_1 + square_1_width > x_pos_sq_2 - square_2_width;
  let rightPos = x_pos_sq_1 - square_1_width < x_pos_sq_2 + square_2_width;

  let topPos = y_pos_sq_1 + square_1_height > y_pos_sq_2 - square_2_height;
  let bottomPos = y_pos_sq_1 - square_1_height < y_pos_sq_2 + square_2_height;

  if (leftPos && rightPos && topPos && bottomPos) {
    square_1.innerHTML = "Collision occured";
    square_2.style.border = "5px solid rgb(24, 251, 240)";
  } else {
    square_1.innerHTML = "";
    square_2.style.border = "none";
  }
}
