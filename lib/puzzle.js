// Puzzle logic
// 1. The goal is to put all the squares in a consequent order from 1 to 15
// 2. The squares are moved on click
// 3. A square can move ONLY if if is next to the empty square (above, below, left or right)

// TO DO:
// check if the square can move

// A square can move by 1 index

// get the rowIndex and cellIndex of the square that was clicked
// get the rowIndex and cellIndex of an emty square
// empty
// cellIndex 3
// rowIndex 3
// 14
// cellIndex 3
// rowIndex 2
// 8
// cellIndex 2
// rowIndex 3

// get all the cells and add event listerer on click

const canMove = (clickedCell, emptyCell) => {
  const clickedCellIndex = clickedCell.cellIndex;
  const emptyCellIndex = emptyCell.cellIndex;

  const clickedRowIndex = clickedCell.parentNode.rowIndex;

  const emptyRowIndex = emptyCell.parentNode.rowIndex;

  //   console.log("Clicked coordinates:", clickedCellIndex, clickedRowIndex);
  //   console.log("empty coordinates:", emptyCellIndex, emptyRowIndex);

  const sameX =
    clickedRowIndex === emptyRowIndex &&
    Math.abs(clickedCellIndex - emptyCellIndex) === 1;

  const sameY =
    clickedCellIndex === emptyCellIndex &&
    Math.abs(clickedRowIndex - emptyRowIndex) === 1;
  return sameX || sameY;
};

const moveCells = (clickedCell, emptyCell) => {
  clickedCell.classList.toggle("empty");
  emptyCell.classList.toggle("empty");
  emptyCell.innerText = clickedCell.innerText;
  clickedCell.innerText = "";
};

const puzzleSolved = () => {
  const cellValues = [];
  cells.forEach((cell) => cellValues.push(cell.innerText));
  //   console.log(cellValues);
  const checkString = "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,";
  //   console.log(cellValues.toString(), checkString);
  return cellValues.toString() === checkString;
};

const onclickCallback = (event) => {
  // our game logic
  // check if the square can move

  const clickedCell = event.currentTarget;
  const emptyCell = document.querySelector(".empty");

  //   console.log(canMove(clickedCell, emptyCell));

  if (!canMove(clickedCell, emptyCell)) return;
  //   move logic
  moveCells(clickedCell, emptyCell);
  if (puzzleSolved()) window.alert("Congrats! You won !");
};

const cells = document.querySelectorAll("td");
cells.forEach((cell) => {
  cell.addEventListener("click", onclickCallback);
});

// move the square
// check if we won
