let scores, roundScore, activePlayer, gamePlaying;

init();

document.querySelector(".btn-new").addEventListener("click", init);

function init() {
  scores = [0, 0];
  activePlayer = 0;
  roundScore = 0;
  gamePlaying = true;

  document.getElementById("score1").textContent = "0";
  document.getElementById("score2").textContent = "0";
  document.getElementById("current1").textContent = "0";
  document.getElementById("current2").textContent = "0";
  document.getElementById("name-1").textContent = "player 1";
  document.getElementById("name-0").textContent = "player 2";
  document.querySelector(".player-0-panel").classList.add("active");
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
}

document.querySelector(".btn-roll").addEventListener("click", function () {
  if (gamePlaying) {
    // 1. Random number
    var dice = Math.floor(Math.random() * 6) + 1;

    //2. Display the result
    var diceDOM = document.querySelector(".dice");
    diceDOM.style.display = "block";
    diceDOM.src = "dice-" + dice + ".png";

    //3. Update the round score IF the rolled number was NOT a 1
    if (dice !== 1) {
      //Add score
      roundScore += dice;
      document.querySelector("#current-" + activePlayer).textContent =
        roundScore;
    } else {
      //Next player
      nextPlayer();
    }
  }
});
