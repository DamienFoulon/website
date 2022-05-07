const player2 = document.getElementById('player');
const theme = document.querySelector('.color-switch>i');
const game = document.querySelector('.game');

function showStarter() {
    if(theme.className === sun) {
        player2.src = 'assets/img/logo/logo-click-me.png';
    } else {
        player2.src = 'assets/img/logo/logo-click-me_bright.png';
    }
}

function hideStarter() {
    if(theme.className === sun) {
        player2.src = 'assets/img/logo/logo-bulles.png';
    } else {
        player2.src = 'assets/img/logo/logo-bulles_bright.png';
    }
}

function startGame() {
    player.style.visibility = 'hidden';
    game.style.visibility = 'visible';
    document.querySelector('#cactus').classList.add('animate');

}

player2.addEventListener('mouseover', showStarter);
player2.addEventListener('mouseout', hideStarter);
player2.addEventListener('click', startGame);