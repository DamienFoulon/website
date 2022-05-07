const gameArea = document.querySelector('.game');
const character = document.querySelector('#dino');
const obstacle = document.querySelector('#cactus');
const starterButton = document.querySelector('#player');
const jumpSound = new Audio('assets/audio/game/jump.mp3');
const deathSound = new Audio('assets/audio/game/death.mp3');

let characterPosition = {x: 0, y: 0};
let obstaclePosition = {x: 0, y: 0};
let gameIsRunning = false;
let alive = true;
let displayScore = document.querySelector('#score');

// Disables the ability to scroll the page
window.onkeydown = function(e) { 
    return !(e.keyCode == 32);
};

// Gets the position of the character and the obstacle
function getOffset(element1, element2) {
  const rect1 = element1.getBoundingClientRect();
  element1.x = rect1.left;
  element1.y = rect1.top;

  const rect2 = element2.getBoundingClientRect();
  element2.x = rect2.left;
  element2.y = rect2.top;
  console.log(`character position: x:${character.x}, y:${character.y} / obstacle position: x:${obstacle.x}, y:${obstacle.y}`);
}

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
          getOffset(character, obstacle);          
          if (obstacle.x <= character.x && character.y >= obstacle.y && gameIsRunning === true) {
            // Stop the game
            console.log(`character position: x:${character.x}, y:${character.y} / obstacle position: x:${obstacle.x}, y:${obstacle.y}`);
            obstacle.classList.remove('animate');
            deathSound.play();
            clearInterval(isAlive);
            console.log("Game Over !");
            alert("Game Over !");
            alive = false;
            gameIsRunning = false;
            gameArea.style.visibility = "hidden";
            starterButton.style.visibility = "visible";
            return;
          }
        }, 100);
    }
});