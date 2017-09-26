var startTime;

function startTimer() {
	startTime = Date.now();
}

function getTimer() {
	return Math.floor((Date.now() - startTime) / 1000);
};

function restartTimer() {
	timerArea.innerHTML = '0';
}

function renderTimer() {
	return setInterval(function () {
		timerArea.innerHTML = getTimer();
	}, 1000);
}