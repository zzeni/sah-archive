var gameArea = document.querySelector('#game-area');
var timerArea = document.querySelector('#timer-area');
var menuArea = document.querySelector("#menu-area");
var menuMessage = document.querySelector("#menu-message");

function startTimer() {
	var startTime = Date.now();
	return function getTimer() {
		return Math.floor((Date.now() - startTime) / 1000);
	};
}

function showMenu(message) {
	timerArea.style.visibility = 'hidden';
	gameArea.style.visibility = 'hidden';
	menuArea.style.display = 'block';
	menuMessage.innerHTML = message;
}

function startNewGame(uniques, duplicates) {
	uniques = uniques || 8;
	duplicates = duplicates || 2;
	var isClickDisabled = false;
	var openCards = [];

	var deck = makeRandomizedDeck(uniques, duplicates);

	function checkForVictory() {
		if (deck.every(function (c) {
				return c.visible === false;
			})) {
			clearInterval(timer);
			showMenu('You won in ' + getTimer() + ' seconds! Do you want to play again?');
		}
	}

	function disableClick(callback, ms) {
		isClickDisabled = true;
		setTimeout(function () {
			callback();
			isClickDisabled = false;
			gameArea.innerHTML = renderGameArea(deck);
			checkForVictory();
		}, ms || 1000);
	}

	var getTimer = startTimer();
	timerArea.innerHTML = '0';
	var timer = setInterval(function () {
		timerArea.innerHTML = getTimer();
	}, 1000);

	gameArea.style.visibility = 'visible';
	timerArea.style.visibility = 'visible';
	menuArea.style.display = 'none';

	gameArea.innerHTML = renderGameArea(deck);

	gameArea.addEventListener('click', function (event) {
		var card = deck[event.target.getAttribute('data-id')];

		var ignoreClick = !card || isClickDisabled || !card.visible || openCards.indexOf(card) >= 0;
		if (ignoreClick) {
			return;
		}

		openCards.push(card);

		card.closed = false;

		var areCardsAllTheSame = openCards.every(function (el) {
			return el.category === card.category;
		});

		if (openCards.length > 1 && !areCardsAllTheSame) {
			disableClick(function () {
				openCards.forEach(function (el) {
					el.closed = true;
				});
				openCards = [];
			}, 1000);
		} else if (openCards.length === duplicates && areCardsAllTheSame) {
			disableClick(function () {
				openCards.forEach(function (el) {
					el.visible = false;
				});
				openCards = [];
			}, 500);
		}

		gameArea.innerHTML = renderGameArea(deck);
		checkForVictory();
	});

}