let randomicNumber = null;
let arrayOfh3 = document.getElementsByTagName("h3");
let cell = document.getElementsByClassName("cell");
console.log(arrayOfh3);
let arrayOfNumbers = [];

const createCells = function () {
  const calendarNode = document.getElementById("bingoboard");

  for (let i = 0; i < 75; i++) {
    const numberCellNode = document.createElement("div");
    numberCellNode.className = "cell";
    const h3 = document.createElement("h3");
    h3.innerText = i + 1;
    numberCellNode.appendChild(h3);
    calendarNode.appendChild(numberCellNode);
  }
};

const randomNumber = function () {
  randomicNumber = Math.floor(Math.random() * 75 + 1);

  for (let i = 0; i < arrayOfh3.length; i++) {
    let cellValue = parseInt(arrayOfh3[i].innerText);
    if (cellValue === randomicNumber) {
      cell[i].classList.add("selected");
    }
  }
};

window.onload = function () {
  createCells();
};
