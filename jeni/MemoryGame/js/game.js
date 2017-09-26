function createGame(gameObject) {
	var deck;
	var openCards;
	var uniques;
	var duplicates;
	var isClickDisabled;

	function disableClick(callback, ms) {
		isClickDisabled = true;
		setTimeout(function () {
			callback();
			isClickDisabled = false;
			gameObject.onRender(deck);
			checkForVictory();
		}, ms || 1000);
	}

	function checkForVictory() {
		if (deck.every(function (c) {
				return c.visible === false;
			})) {
			gameObject.onVictory(getTimer());
		}
	}

	function closeAllCards() {
		openCards.forEach(function (el) {
			el.closed = true;
		});
		openCards = [];
	}

	function hideSolvedCards() {
		openCards.forEach(function (el) {
			el.visible = false;
		});
		openCards = [];
	}

	function handleTurn(event) {
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
			disableClick(closeAllCards, 1000);
		} else if (openCards.length === duplicates && areCardsAllTheSame) {
			disableClick(hideSolvedCards, 500);
		}

		gameObject.onRender(deck);
		checkForVictory();
	}

	return {
		handleClick: handleTurn,
		start: function (u, d) {
			uniques = u || 8;
			duplicates = d || 2;
			deck = makeRandomizedDeck(uniques, duplicates);
			startTimer();
			isClickDisabled = false;
			openCards = [];
			gameObject.onRender(deck);
		}
	};
}