//var until_ms = 1714504402000;
const until_ms = 1717156800000;
var isActive = false;

const main = document.getElementById('main');

// https://stackoverflow.com/a/2998874 by 5445/christian-c-salvad%c3%b3
Number.prototype.pad = function(places) { return String(this).padStart(places, '0'); }

Number.prototype.toDHMS = function() {
	return [
		Math.floor(this / 86400),
		Math.floor(this % 86400 / 3600).pad(2),
		Math.floor(this % 3600 / 60).pad(2),
		Math.floor(this % 60).pad(2)
	].join(':');
}

if (isActive) {
	window.onload = function() { setInterval(update, 500); }
} else {
	main.innerHTML = 'Counter currently inactive!';
}

function update() {
	main.innerHTML = Math.floor((until_ms - Date.now()) / 1000).toDHMS();
}

const e = document.getElementsByClassName('text_lower')[0];

e.onclick = function() {
	if (e.style.color == 'rgba(255, 255, 255, 0.5)') e.style.color = '#FFFFFF00';
	else e.style.color = 'rgba(255, 255, 255, 0.5)';
}
