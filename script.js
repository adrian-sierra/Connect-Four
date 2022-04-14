let currentPlayer = Math.floor(Math.random() * 2);
// able to get css variables with this method
const boardWidth = getComputedStyle(document.documentElement).getPropertyValue(
  "--boardWidth"
);
const boardHeight = getComputedStyle(document.documentElement).getPropertyValue(
  "--boardHeight"
);
let gameStatus = 0;
let playerOnePositions = []; // initalize array that will hold array of indices (2d array in the end)
let playerTwoPositions = [];

function startGame() {
  if (currentPlayer === 1) {
    document.getElementById("current-player").style.color = "black";
    document.getElementById("current-player").innerHTML = "Player One's Turn";
  } else {
    document.getElementById("current-player").style.color = "red";
    document.getElementById("current-player").innerHTML = "Player Two's Turn";
  }
  if (!gameStatus) {
    document.getElementById("play-game").remove();
  }
}

function displayArr() {
  // simple function to display the array of the current player
  if (currentPlayer === 1) {
    console.log("Printing array for player one: ");
    console.log(playerOnePositions);
    checkHorizontal(currentPlayer, playerOnePositions);
    // playerOnePositions.sort((a, b) => a[0] - b[0]);
    // console.log(playerOnePositions);
  } else {
    console.log("Printing array for player two: ");
    console.log(playerTwoPositions);
    // checkDiagonalLeft(playerOnePositions);
  }
}

function checkVertical(currentPlayer, playerArray) {
  playerArray.sort((a, b) => a[0] - b[0]);
  let winningArray;
  let consecutive;
  for (let i = 0; i < playerArray.length; i++) {
    consecutive = 1;
    winningArray = [];
    winningArray.push(playerArray[i]);
    for (let j = i + 1; j < playerArray.length; j++) {
      // console.log(playerArray[i], playerArray[j], consecutive);
      if (
        playerArray[j][0] == playerArray[i][0] &&
        playerArray[j][1] == playerArray[i][1] - consecutive
      ) {
        consecutive += 1;
        winningArray.push(playerArray[j]);
        if (consecutive == 4) {
          if (currentPlayer == 1) {
            playerOnePositions = winningArray;
          } else {
            playerTwoPositions = winningArray;
          }
          // console.log("vetical");
          // console.log(winningArray);
          return true;
        }
      }
    }
  }
  return false;
  // console.log(winningArray);
}

function checkHorizontal(currentPlayer, playerArray) {
  playerArray.sort((a, b) => a[0] - b[0]);
  let winningArray;
  let consecutive;
  for (let i = 0; i < playerArray.length; i++) {
    consecutive = 1;
    winningArray = [];
    winningArray.push(playerArray[i]);
    for (let j = i + 1; j < playerArray.length; j++) {
      console.log(playerArray[i], playerArray[j], consecutive);
      if (
        playerArray[j][1] == playerArray[i][1] &&
        playerArray[j][0] == playerArray[i][0] + consecutive
      ) {
        consecutive += 1;
        winningArray.push(playerArray[j]);
        if (consecutive == 4) {
          if (currentPlayer == 1) {
            playerOnePositions = winningArray;
          } else {
            playerTwoPositions = winningArray;
          }
          // console.log("vetical");
          // console.log(winningArray);
          return true;
        }
      }
    }
  }
  return false;
  // console.log(winningArray);
}

function checkDiagonalRight(currentPlayer, playerArray) {
  playerArray.sort((a, b) => a[0] - b[0]);
  let winningArray;
  let consecutive;
  for (let i = 0; i < playerArray.length; i++) {
    consecutive = 1;
    winningArray = [];
    winningArray.push(playerArray[i]);
    for (let j = i + 1; j < playerArray.length; j++) {
      // console.log(playerArray[i], playerArray[j], consecutive);
      if (
        playerArray[j][0] == playerArray[i][0] + consecutive &&
        playerArray[j][1] == playerArray[i][1] - consecutive
      ) {
        consecutive += 1;
        winningArray.push(playerArray[j]);
        if (consecutive == 4) {
          if (currentPlayer == 1) {
            playerOnePositions = winningArray;
          } else {
            playerTwoPositions = winningArray;
          }
          // console.log("vetical");
          // console.log(winningArray);
          return true;
        }
      }
    }
  }
  return false;
  // console.log(winningArray);
}

function checkDiagonalLeft(currentPlayer, playerArray) {
  playerArray.sort((a, b) => a[0] - b[0]);
  let winningArray;
  let consecutive;
  for (let i = 0; i < playerArray.length; i++) {
    consecutive = 1;
    winningArray = [];
    winningArray.push(playerArray[i]);
    for (let j = i + 1; j < playerArray.length; j++) {
      // console.log(playerArray[i], playerArray[j], consecutive);
      if (
        playerArray[j][0] == playerArray[i][0] + consecutive &&
        playerArray[j][1] == playerArray[i][1] + consecutive
      ) {
        consecutive += 1;
        winningArray.push(playerArray[j]);
        if (consecutive == 4) {
          if (currentPlayer == 1) {
            playerOnePositions = winningArray;
          } else {
            playerTwoPositions = winningArray;
          }
          // console.log("vetical");
          // console.log(winningArray);
          return true;
        }
      }
    }
  }
  return false;
  // console.log(winningArray);
}

function checkWinner(currentPlayer, playerArray) {
  if (
    checkVertical(currentPlayer, playerArray) ||
    checkHorizontal(currentPlayer, playerArray) ||
    checkDiagonalLeft(currentPlayer, playerArray) ||
    checkDiagonalRight(currentPlayer, playerArray)
  ) {
    if (currentPlayer == 1) {
      document.getElementById("current-player").innerHTML = `Player One Won!`;
    } else {
      document.getElementById("current-player").innerHTML = `Player Two Won!`;
    }
    return true;
  }
  return false;
}

function markX(playerArray) {
  let offset;
  for (let i = 0; i < playerArray.length; i++) {
    if (playerArray[i][0] == 0) {
      offset = 0.04;
    } else if (playerArray[i][0] == 1) {
      offset = 0.183;
    } else if (playerArray[i][0] == 2) {
      offset = 0.323;
    } else if (playerArray[i][0] == 3) {
      offset = 0.47;
    } else if (playerArray[i][0] == 4) {
      offset = 0.609;
    } else if (playerArray[i][0] == 5) {
      offset = 0.755;
    } else if (playerArray[i][0] == 6) {
      offset = 0.896;
    }
    let h1 = document.createElement("H1");
    var X = document.createTextNode("X");
    h1.style.color = "white";
    h1.style.fontSize = "3rem";
    h1.style.position = "absolute";
    h1.style.left = parseInt(boardWidth) * offset + "px";
    h1.style.bottom =
      parseInt(boardHeight) * (0.004 + (5 - playerArray[i][1]) * 0.167) + "px";
    h1.appendChild(X);
    document.getElementById("play-area").appendChild(h1);
    // console.log(playerArray[i]);
  }
}

// function sortArray(playerArray){
//   let returnArray;
//   playerArray.sort((a, b) => a[0] - b[0]);
//   return returnArray;
// }

let currentPositionColOne = 0; // this is to help with the offset and determine which row the chip will go to
function dropChipOne() {
  let offset = 0.004 + currentPositionColOne * 0.167; // this .168 is a constant offset to determine position of next chip
  gameStatus = 1; // this is just to set flag for game up and running
  let left = parseInt(boardWidth) * 0.015 + "px"; // algorithm to get the proportionate offset in pixels
  let bottom = parseInt(boardHeight) * offset + "px";
  let redChip, blackChip;
  if (currentPlayer === 1 && currentPositionColOne < 6) {
    playerOnePositions.push([0, 5 - currentPositionColOne]); // will push an array holding the index of the chip
    blackChip = new Image(); // following will create an image depending if it is red or black
    blackChip.src = "./img/black-chip.jpg";
    blackChip.id = "black-chip";
    blackChip.style.left = left;
    blackChip.style.bottom = bottom;
    document.getElementById("play-area").appendChild(blackChip);
    // checkWinner1(currentPlayer, playerOnePositions);
    if (!checkWinner(currentPlayer, playerOnePositions)) {
      currentPlayer = 0; // switch to next player
      startGame();
    } else {
      markX(playerOnePositions);
      document.getElementById("button-group").remove();
    }
  } else if (currentPlayer === 0 && currentPositionColOne < 6) {
    playerTwoPositions.push([0, 5 - currentPositionColOne]);
    redChip = new Image();
    redChip.src = "./img/red-chip.jpg";
    redChip.id = "red-chip";
    redChip.style.left = left;
    redChip.style.bottom = bottom;
    document.getElementById("play-area").appendChild(redChip);
    if (!checkWinner(currentPlayer, playerTwoPositions)) {
      currentPlayer = 1; // switch to next player
      startGame();
    } else {
      markX(playerTwoPositions);
      document.getElementById("button-group").remove();
    }
  }
  currentPositionColOne += 1;
}

let currentPositionColTwo = 0; // this is to help with the offset and determine which row the chip will go to
function dropChipTwo() {
  let offset = 0.004 + currentPositionColTwo * 0.167; // this .168 is a constant offset to determine position of next chip
  gameStatus = 1; // this is just to set flag for game up and running
  let left = parseInt(boardWidth) * 0.158 + "px"; // algorithm to get the proportionate offset in pixels
  let bottom = parseInt(boardHeight) * offset + "px";
  let redChip, blackChip;
  if (currentPlayer === 1 && currentPositionColTwo < 6) {
    playerOnePositions.push([1, 5 - currentPositionColTwo]);
    blackChip = new Image(); // following will create an image depending if it is red or black
    blackChip.src = "./img/black-chip.jpg";
    blackChip.id = "black-chip";
    blackChip.style.left = left;
    blackChip.style.bottom = bottom;
    document.getElementById("play-area").appendChild(blackChip);
    if (!checkWinner(currentPlayer, playerOnePositions)) {
      currentPlayer = 0; // switch to next player
      startGame();
    } else {
      markX(playerOnePositions);
      document.getElementById("button-group").remove();
    }
  } else if (currentPlayer === 0 && currentPositionColTwo < 6) {
    playerTwoPositions.push([1, 5 - currentPositionColTwo]);
    redChip = new Image();
    redChip.src = "./img/red-chip.jpg";
    redChip.id = "red-chip";
    redChip.style.left = left;
    redChip.style.bottom = bottom;
    document.getElementById("play-area").appendChild(redChip);
    if (!checkWinner(currentPlayer, playerTwoPositions)) {
      currentPlayer = 1; // switch to next player
      startGame();
    } else {
      markX(playerTwoPositions);
      document.getElementById("button-group").remove();
    }
  }
  currentPositionColTwo += 1;
}

let currentPositionColThree = 0; // this is to help with the offset and determine which row the chip will go to
function dropChipThree() {
  let offset = 0.004 + currentPositionColThree * 0.167; // this .168 is a constant offset to determine position of next chip
  gameStatus = 1; // this is just to set flag for game up and running
  let left = parseInt(boardWidth) * 0.297 + "px"; // algorithm to get the proportionate offset in pixels
  let bottom = parseInt(boardHeight) * offset + "px";
  let redChip, blackChip;
  if (currentPlayer === 1 && currentPositionColThree < 6) {
    playerOnePositions.push([2, 5 - currentPositionColThree]);
    blackChip = new Image(); // following will create an image depending if it is red or black
    blackChip.src = "./img/black-chip.jpg";
    blackChip.id = "black-chip";
    blackChip.style.left = left;
    blackChip.style.bottom = bottom;
    document.getElementById("play-area").appendChild(blackChip);
    if (!checkWinner(currentPlayer, playerOnePositions)) {
      currentPlayer = 0; // switch to next player
      startGame();
    } else {
      markX(playerOnePositions);
      document.getElementById("button-group").remove();
    }
  } else if (currentPlayer === 0 && currentPositionColThree < 6) {
    playerTwoPositions.push([2, 5 - currentPositionColThree]);
    redChip = new Image();
    redChip.src = "./img/red-chip.jpg";
    redChip.id = "red-chip";
    redChip.style.left = left;
    redChip.style.bottom = bottom;
    document.getElementById("play-area").appendChild(redChip);
    if (!checkWinner(currentPlayer, playerTwoPositions)) {
      currentPlayer = 1; // switch to next player
      startGame();
    } else {
      markX(playerTwoPositions);
      document.getElementById("button-group").remove();
    }
  }
  currentPositionColThree += 1;
}

let currentPositionColFour = 0; // this is to help with the offset and determine which row the chip will go to
function dropChipFour() {
  let offset = 0.004 + currentPositionColFour * 0.167; // this .168 is a constant offset to determine position of next chip
  gameStatus = 1; // this is just to set flag for game up and running
  let left = parseInt(boardWidth) * 0.444 + "px"; // algorithm to get the proportionate offset in pixels
  let bottom = parseInt(boardHeight) * offset + "px";
  let redChip, blackChip;
  if (currentPlayer === 1 && currentPositionColFour < 6) {
    playerOnePositions.push([3, 5 - currentPositionColFour]);
    blackChip = new Image(); // following will create an image depending if it is red or black
    blackChip.src = "./img/black-chip.jpg";
    blackChip.id = "black-chip";
    blackChip.style.left = left;
    blackChip.style.bottom = bottom;
    document.getElementById("play-area").appendChild(blackChip);
    if (!checkWinner(currentPlayer, playerOnePositions)) {
      currentPlayer = 0; // switch to next player
      startGame();
    } else {
      markX(playerOnePositions);
      document.getElementById("button-group").remove();
    }
  } else if (currentPlayer === 0 && currentPositionColFour < 6) {
    playerTwoPositions.push([3, 5 - currentPositionColFour]);
    redChip = new Image();
    redChip.src = "./img/red-chip.jpg";
    redChip.id = "red-chip";
    redChip.style.left = left;
    redChip.style.bottom = bottom;
    document.getElementById("play-area").appendChild(redChip);
    if (!checkWinner(currentPlayer, playerTwoPositions)) {
      currentPlayer = 1; // switch to next player
      startGame();
    } else {
      markX(playerTwoPositions);
      document.getElementById("button-group").remove();
    }
  }
  currentPositionColFour += 1;
}

let currentPositionColFive = 0; // this is to help with the offset and determine which row the chip will go to
function dropChipFive() {
  let offset = 0.004 + currentPositionColFive * 0.167; // this .168 is a constant offset to determine position of next chip
  gameStatus = 1; // this is just to set flag for game up and running
  let left = parseInt(boardWidth) * 0.585 + "px"; // algorithm to get the proportionate offset in pixels
  let bottom = parseInt(boardHeight) * offset + "px";
  let redChip, blackChip;
  if (currentPlayer === 1 && currentPositionColFive < 6) {
    playerOnePositions.push([4, 5 - currentPositionColFive]);
    blackChip = new Image(); // following will create an image depending if it is red or black
    blackChip.src = "./img/black-chip.jpg";
    blackChip.id = "black-chip";
    blackChip.style.left = left;
    blackChip.style.bottom = bottom;
    document.getElementById("play-area").appendChild(blackChip);
    if (!checkWinner(currentPlayer, playerOnePositions)) {
      currentPlayer = 0; // switch to next player
      startGame();
    } else {
      markX(playerOnePositions);
      document.getElementById("button-group").remove();
    }
  } else if (currentPlayer === 0 && currentPositionColFive < 6) {
    playerTwoPositions.push([4, 5 - currentPositionColFive]);
    redChip = new Image();
    redChip.src = "./img/red-chip.jpg";
    redChip.id = "red-chip";
    redChip.style.left = left;
    redChip.style.bottom = bottom;
    document.getElementById("play-area").appendChild(redChip);
    if (!checkWinner(currentPlayer, playerTwoPositions)) {
      currentPlayer = 1; // switch to next player
      startGame();
    } else {
      markX(playerTwoPositions);
      document.getElementById("button-group").remove();
    }
  }
  currentPositionColFive += 1;
}

let currentPositionColSix = 0; // this is to help with the offset and determine which row the chip will go to
function dropChipSix() {
  let offset = 0.004 + currentPositionColSix * 0.167; // this .168 is a constant offset to determine position of next chip
  gameStatus = 1; // this is just to set flag for game up and running
  let left = parseInt(boardWidth) * 0.728 + "px"; // algorithm to get the proportionate offset in pixels
  let bottom = parseInt(boardHeight) * offset + "px";
  let redChip, blackChip;
  if (currentPlayer === 1 && currentPositionColSix < 6) {
    playerOnePositions.push([5, 5 - currentPositionColSix]);
    blackChip = new Image(); // following will create an image depending if it is red or black
    blackChip.src = "./img/black-chip.jpg";
    blackChip.id = "black-chip";
    blackChip.style.left = left;
    blackChip.style.bottom = bottom;
    document.getElementById("play-area").appendChild(blackChip);
    if (!checkWinner(currentPlayer, playerOnePositions)) {
      currentPlayer = 0; // switch to next player
      startGame();
    } else {
      markX(playerOnePositions);
      document.getElementById("button-group").remove();
    }
  } else if (currentPlayer === 0 && currentPositionColSix < 6) {
    playerTwoPositions.push([5, 5 - currentPositionColSix]);
    redChip = new Image();
    redChip.src = "./img/red-chip.jpg";
    redChip.id = "red-chip";
    redChip.style.left = left;
    redChip.style.bottom = bottom;
    document.getElementById("play-area").appendChild(redChip);
    if (!checkWinner(currentPlayer, playerTwoPositions)) {
      currentPlayer = 1; // switch to next player
      startGame();
    } else {
      markX(playerTwoPositions);
      document.getElementById("button-group").remove();
    }
  }
  currentPositionColSix += 1;
}

let currentPositionColSeven = 0; // this is to help with the offset and determine which row the chip will go to
function dropChipSeven() {
  let offset = 0.004 + currentPositionColSeven * 0.167; // this .168 is a constant offset to determine position of next chip
  gameStatus = 1; // this is just to set flag for game up and running
  let left = parseInt(boardWidth) * 0.871 + "px"; // algorithm to get the proportionate offset in pixels
  let bottom = parseInt(boardHeight) * offset + "px";
  let redChip, blackChip;
  if (currentPlayer === 1 && currentPositionColSeven < 6) {
    playerOnePositions.push([6, 5 - currentPositionColSeven]);
    blackChip = new Image(); // following will create an image depending if it is red or black
    blackChip.src = "./img/black-chip.jpg";
    blackChip.id = "black-chip";
    blackChip.style.left = left;
    blackChip.style.bottom = bottom;
    document.getElementById("play-area").appendChild(blackChip);
    if (!checkWinner(currentPlayer, playerOnePositions)) {
      currentPlayer = 0; // switch to next player
      startGame();
    } else {
      markX(playerOnePositions);
      document.getElementById("button-group").remove();
    }
  } else if (currentPlayer === 0 && currentPositionColSeven < 6) {
    playerTwoPositions.push([6, 5 - currentPositionColSeven]);
    redChip = new Image();
    redChip.src = "./img/red-chip.jpg";
    redChip.id = "red-chip";
    redChip.style.left = left;
    redChip.style.bottom = bottom;
    document.getElementById("play-area").appendChild(redChip);
    if (!checkWinner(currentPlayer, playerTwoPositions)) {
      currentPlayer = 1; // switch to next player
      startGame();
    } else {
      markX(playerTwoPositions);
      document.getElementById("button-group").remove();
    }
  }
  currentPositionColSeven += 1;
}
