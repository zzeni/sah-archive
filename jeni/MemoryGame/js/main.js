var gameArea = document.querySelector('#game-area');
var timerArea = document.querySelector('#timer-area');
var menuArea = document.querySelector("#menu-area");
var menuMessage = document.querySelector("#menu-message");

var timer;
var game;

function showMenu(message) {
	timerArea.style.visibility = 'hidden';
	gameArea.style.visibility = 'hidden';
	menuArea.style.display = 'block';
	menuMessage.innerHTML = message;
}

function showGame() {
	gameArea.style.visibility = 'visible';
	timerArea.style.visibility = 'visible';
	menuArea.style.display = 'none';
	restartTimer();
}

function onVictory(time) {
	clearInterval(timer);
	showMenu('You won in ' + time + ' seconds! Do you want to play again?');
}

function onRender(deck) {
	gameArea.innerHTML = renderGameArea(deck);
}

function startNewGame(n, c) {
	game = createGame({
		onRender: onRender,
		onVictory: onVictory
	});

	timer = renderTimer();
	showGame();
	gameArea.onclick = game.handleClick;
	game.start(n, c);
}