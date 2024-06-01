const tileSize = document.body.clientWidth > 800 ? 100 : 50;

var col = 0,
    row = 0;

const wrapper = document.getElementById('tiles');

const createTile = i => {
	const tile = document.createElement('div');

	tile.classList.add('tile');

	return tile;
}

const createTiles = amount => {
	Array.from(Array(amount)).map((tile, i) => {
	    wrapper.appendChild(createTile(i));
	})
}

const createGrid = () => {
	wrapper.innerHTML = '';

	cols = Math.floor(document.body.clientWidth / tileSize);
    	rows = Math.floor(document.body.clientHeight / tileSize);

	wrapper.style.setProperty('--cols', cols);
	wrapper.style.setProperty('--rows', rows);

	createTiles(cols * rows);
}

createGrid();

const bg = document.getElementById('bg');

const setRadius = () => {
	let w = document.body.clientWidth,
	    h = document.body.clientHeight;

	bg.style.setProperty('--r', `${(w > h ? w : h) * 0.15}px`);
}

setRadius();

window.onresize = () => {
	createGrid();
	setRadius();
}

const handleMove = e => {
	let x = e.clientX,
	    y = e.clientY;

	bg.style.setProperty('--x', `${x}px`);
	bg.style.setProperty('--y', `${y}px`);
}

document.body.onmousemove = e => handleMove(e);

document.body.ontouchmove = e => handleMove(e.touches[0]);
