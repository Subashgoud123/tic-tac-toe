let boxes = document.querySelectorAll(".box");
let game = document.querySelector(".game");
let win = document.querySelector(".win");
let reset = document.querySelector(".rst");
let n = document.querySelector(".new");
let count = 0;
let player0 = true; //player0 is true when it is player0's turn and false when it is player1's turn

const result = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const showwin = (winn) => {
  win.innerHTML = "Player " + winn.innerText + " is the winner.";

  disable();
};
const disable = () => {
  for (let p of boxes) {
    p.disabled = true;
  }
};

const rst = () => {
  enable();
  player0 = true;
  for (let p of boxes) {
    p.innerHTML = "";
  }
  win.innerHTML = "";
  count = 0;
};
const enable = () => {
  for (let p of boxes) {
    p.disabled = false;
  }
};
const draw = () => {
  win.innerHTML = "Match Draw";
  count = 0;
  disable();
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (player0) {
      box.innerHTML = "O".fontcolor("red");

      player0 = false;
    } else {
      box.innerHTML = "X".fontcolor("black");

      player0 = true;
    }
    count++;
    if (count == 9) {
      draw();
    }
    box.disabled = true;
    winner();
  });
});

const winner = () => {
  for (let p of result) {
    if (
      boxes[p[0]].innerText != "" &&
      boxes[p[1]].innerText != "" &&
      boxes[p[2]].innerText != ""
    ) {
      if (
        boxes[p[0]].innerText == boxes[p[1]].innerText &&
        boxes[p[1]].innerText == boxes[p[2]].innerText
      ) {
        showwin(boxes[p[0]]);
      }
    }
  }
};

n.addEventListener("click", rst);
reset.addEventListener("click", rst);
