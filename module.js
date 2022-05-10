let scores, round, player, game;

init();

document.querySelector(".btn-new").addEventListener("click", init);

function init() {
  name1 = "player 1";
  name2 = "player 2";
  scores = [0, 0];
  player = 0;
  round = 0;
  game = true;

  document.getElementById("score0").textContent = "0";
  document.getElementById("score1").textContent = "0";
  document.getElementById("current0").textContent = "0";
  document.getElementById("current1").textContent = "0";
  document.getElementById("name-1").textContent = name1;
  document.getElementById("name-0").textContent = name2;
  document.querySelector(".player-0-panel").classList.add("active");
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
}

document.querySelector(".btn-roll").addEventListener("click", function () {
  if (game) {
    let dice = Math.floor(Math.random() * 6) + 1;
    console.log(dice);

    let diceDOM = document.querySelector(".dice");
    diceDOM.style.display = "block";
    document.getElementById("dice").src = "images/face" + dice + ".png";

    if (dice !== 1) {
      round += dice;
      document.querySelector("#current" + player).textContent =
        round;
      if (scores[player] >=100) {
        win();
      }
    } else {
      nextPlayer();
    }
  }
});

document.querySelector(".btn-hold").addEventListener("click", function () {
  if (game) {
      scores[player] += round;

      document.querySelector("#score" + player).textContent =
      scores[player];
      if (scores[player] >=100) {
        win();
      } else {
        nextPlayer();
      }  
    }
  });

function nextPlayer() {
  player === 0 ? (player = 1) : (player = 0);
  round = 0;

  document.getElementById("current0").textContent = "0";
  document.getElementById("current1").textContent = "0";

  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
}

function win(){ 

  document.querySelector("#name-" + player).textContent = "Winner!";
  document.querySelector(".dice").style.display = "none";
  document
    .querySelector(".player-" + player + "-panel")
    .classList.add("winner");
  document
    .querySelector(".player-" + player + "-panel")
    .classList.remove("active");
  game= false;

}