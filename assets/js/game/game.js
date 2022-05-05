const gameArea = document.querySelector('.game');
const character = document.querySelector('#dino');
const obstacle = document.querySelector('#cactus');
const starterButton = document.querySelector('#player');
const jumpSound = new Audio('assets/audio/game/jump.mp3');
const deathSound = new Audio('assets/audio/game/death.mp3');

let gameIsRunning = false;
let alive = true;
let displayScore = document.querySelector('#score');

// Disables the ability to scroll the page
window.onkeydown = function(e) { 
    return !(e.keyCode == 32);
};

// Jumping function
function jump() {
    jumpSound.play();
    if (character.classList != "jump") {
      character.classList.add("jump");
  
      setTimeout(function () {
        character.classList.remove("jump");
      }, 500);
    }
  }

// Listen for key presses
document.addEventListener("keydown", function (event) {
    gameIsRunning = true;
    if (gameIsRunning === true && gameArea.style.visibility === 'visible') {
        // Make the character jump when the spacebar is pressed
        jump();
        // Check if the character is alive
        let isAlive = setInterval(function () {
            characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
          
            obstacleLeft = parseInt(
              window.getComputedStyle(obstacle).getPropertyValue("left")
            );
          
            if (obstacleLeft < 50 && obstacleLeft > 0 && characterTop >= 80 && gameIsRunning === true) {
              // Stop the game
              deathSound.play();
              alive = false;
              gameIsRunning = false;
              gameArea.style.visibility = "hidden";
              starterButton.style.visibility = "visible";
              alert("Game Over !");
              clearInterval(isAlive);
            }
        }, 10);
    }
});