const boxes = document.querySelectorAll(".child"); //64 --> array

const eraserBtn = document.getElementById("eraser-button");

const input = document.getElementById("my-input");

  
let color = "black";

// input.onchange = () => {
//   color = input.value;
// };

eraserBtn.onclick = () => {
  color = "white";
};

// onmousedown
let isMouseClicked = false;

document.onmousedown = () => {
  isMouseClicked = true;
};

// onmouseup
document.onmouseup = () => {
  isMouseClicked = false;
};

for (let i = 0; i <= 64; i++) {
  boxes[i].onmouseenter = () => {
    if (isMouseClicked) {
      boxes[i].style.backgroundColor = color;
    }
  };
}

function setColor() {
  const userChoice = prompt("Enter color");
  color = userChoice;
}