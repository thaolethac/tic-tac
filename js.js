const game = document.getElementsByClassName("button-name");
const sumsum = document.getElementsByClassName("sum");
const span = document.getElementsByClassName("span");
for (let i = 0; i < game.length; i++) {
  game[i].innerHTML = " ";
}
let turn = false;
let repeat = true;
let count = 0;
let sumX = 0;
let sumY = 0;
const XandY = new Set(["0", "1"]);
let check = 0;
const colect = (e) => {
  sumturn = e;
};
const array = new Array(0, 0);

function myfunction() {
  for (let i = 0; i < game.length; i++) {
    game[i].innerHTML = " ";
  }
  check = 0;
  location.reload()
}

var arr2DX = new Array();
var arr2DY = new Array();
var arr = new Array();
var arraycheck = new Array(0, 2, 6, 4);
let dem = 0;

function Checking(x, sum) {
  for (let k = 0; k < x.length; k++) {
    for (let j = 0; j < x.length; j++) {
      for (let m = 0; m < x.length; m++) {
        if (
          (x[k] === x[j] && x[k] === x[m]) ||
          x[k] === x[j] ||
          x[k] === x[m] ||
          x[j] === x[m]
        ) {
          continue;
        } else {
          arr = [x[k], x[j], x[m]];
        }
        arr.sort();
        console.log(arr);
        for (let i = 0; i < arr.length; i++) {
          if (
            arr[i + 2] === -arr[i] + arr[i + 1] * 2 &&
            (arr[i + 2] === 2 ||
              arr[i + 2] === 5 ||
              arr[i + 2] === 8 ||
              arr[i + 2] === 6 ||
              arr[i + 2] === 7) &&
            (arr[i + 1] === 1 ||
              arr[i + 1] === 4 ||
              arr[i + 1] === 7 ||
              arr[i + 1] === 3 ||
              arr[i + 1] === 5) && 
              (arr[i] === 0 ||
                arr[i] === 1 ||
                arr[i] === 2 ||
                arr[i] === 3 ||
                arr[i] === 7)
          ) {
            dem = dem + 1;
          } else {
            dem = dem;
          }
        }
      }
    }
  }
  return dem;
}
function winner() {
  if (Checking(arr2DX.sort(), sumX)) {
    setTimeout(() => alert("X win"), 100);
  } else if (Checking(arr2DY.sort(), sumY)) {
    setTimeout(() => alert("O win"), 100);
  } else if (check === 9) {
    setTimeout(() => alert("Nobody win"), 100);
  }
}

for (let i = 0; i < game.length; i++) {
  game[i].onclick = function () {
    if (game[i].textContent == " ") {
      check++;
    } else {
      check = check;
    }

    if (game[i].textContent === "X") {
      turn = turn;
      game[i].innerHTML = "X";
    }
    if (game[i].textContent === "O") {
      turn = turn;
      game[i].innerHTML = "O";
    }

    if (game[i].textContent === " ") {
      turn = !turn;
      game[i].innerHTML = turn ? "X" : "O";
      span[0].innerHTML = turn ? "O" : "X";
    }
    if (turn) {
      sumX = sumX + i;
      arr2DX.push(i);
    }
    if (!turn) {
      sumY = sumY + i;
      arr2DY.push(i);
    }
    winner();
    // Checking(arraycheck);
    // console.log(arr2DX);
    // console.log(arr2DY);
  };
}
