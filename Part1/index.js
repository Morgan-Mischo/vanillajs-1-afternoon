const board = [];

function play(clickedId) {
  const playerSpan = document.getElementById("player");
  const clickedElement = document.getElementById(clickedId);

  if (playerSpan.innerText === "X") {
    playerSpan.innerText = "O";
    clickedElement.innerText = "X";
    board[clickedId] = "X";
  } else {
    playerSpan.innerText = "X";
    clickedElement.innerText = "O";
    board[clickedId] = "O";
  }
  console.log(board);

  const topLeft = board[0];
  const topMiddle = board[1];
  const topRight = board[2];
  const midLeft = board[3];
  const midMiddle = board[4];
  const midRight = board[5];
  const bottomLeft = board[6];
  const bottomMiddle = board[7];
  const bottomRight = board[8];

  if (
    topRight !== undefined &&
    topRight === topMiddle &&
    topRight === topLeft
  ) {
    alert(`Player ${topRight} won!`);
    return;
  }

  if (
    topRight !== undefined &&
    topRight === midRight &&
    topRight === bottomRight
  ) {
    alert(`Player ${topRight} won!`);
    return; 
  }
  if (
    topRight !== undefined &&
    topRight === midMiddle &&
    topRight === bottomLeft
  ) {
    alert(`Player ${topRight} won!`);
    return; 
  }
  if (
    topLeft !== undefined &&
    topLeft === midMiddle &&
    topLeft === bottomRight
  ) {
    alert(`Player ${topLeft} won!`);
    return; 
  }
  if (topLeft !== undefined && topLeft === midLeft && topLeft === bottomLeft) {
    alert(`Player ${topLeft} won!`);
    return; 
  }
  if (
    midRight !== undefined &&
    midRight === midMiddle &&
    midRight === midLeft
  ) {
    alert(`Player ${midRight} won!`);
    return; 
  }
  if (
    topMiddle !== undefined &&
    topMiddle === midMiddle &&
    topMiddle === bottomMiddle
  ) {
    alert(`Player ${topMiddle} won!`);
    return; 
  }
  if (
    bottomLeft !== undefined &&
    bottomLeft === bottomMiddle &&
    bottomLeft === bottomRight
  ) {
    alert(`Player ${bottomLeft} won!`);
    return; 
  }

  let boardFull = true;
  for (let i = 0; i <= 8; i++) {
      if(board[i] === undefined)
      {
          boardFull = false; 
      }
  }
  if (boardFull === true)
  {
      alert("Cat's game!"); 
  }
}
