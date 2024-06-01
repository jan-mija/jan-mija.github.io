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

window.onresize = () => createGrid();

const bg = document.getElementById('bg');

bg.style.setProperty('--r', `${document.body.clientWidth * 0.15}px`)

document.body.onmousemove = e => {
	let x = e.clientX,
	    y = e.clientY;

	bg.style.setProperty('--x', `${x}px`);
	bg.style.setProperty('--y', `${y}px`);
}
