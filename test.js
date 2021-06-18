const pixelSize = 1600;
const canvas = document.getElementById("UI");
const colorPalletController = document.querySelector("#colorPallet");
const currentColorBox = document.querySelector("#colorBox");
const resetButton = document.querySelector("#del");
let currentColor = "#f0f8ff";

window.addEventListener("DOMContentLoaded", function () {
  setupCanvasSize();
  setupPallet();

  canvas.addEventListener("click", colorPixel);
  canvas.addEventListener("mousedown", addMouseDown);
  canvas.addEventListener("mouseup", removeMouseUp);
  resetButton.addEventListener("click", clear);
  colorPalletController.addEventListener("click", colorPicker);
  currentColorBox.addEventListener("change", colorPickerUsed);
});

function colorPickerUsed(e) {
  currentColor = e.target.value;
}

function setupPallet() {
  const palletArray = [...document.querySelectorAll(".color")];
  palletArray.forEach((colorCube) => {
    colorCube.style.backgroundColor = colorCube.id;
  });
}

function colorPixel(e) {
  if (e.target.className === "pixel") {
    e.target.style.backgroundColor = currentColor;
  }
}
function addMouseDown() {
  canvas.addEventListener("mouseover", colorPixel);
}

function removeMouseUp() {
  canvas.removeEventListener("mouseover", colorPixel);
}

function clear() {
  const palletArray = [...document.querySelectorAll(".pixel")];
  palletArray.forEach((colorCube) => {
    colorCube.style.backgroundColor = "aliceblue";
  });
}

function colorPicker(e) {
  currentColor = e.target.id;
  currentColorBox.value = e.target.id;
}

function setupCanvasSize() {
  canvas.style.width = `${Math.sqrt(pixelSize) * 20}px`;
  for (let i = 0; i < pixelSize; i++) {
    canvas.innerHTML += "<div class='pixel'</div>";
  }
}
