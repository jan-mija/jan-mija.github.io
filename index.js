const tileSize = document.body.clientWidth > 800 ? 100 : 50;

var col = 0,
    row = 0;

var isOut = false;

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

	bg.style.setProperty('--r', `${Math.floor((w > h ? w : h) * 0.15)}px`);
}

setRadius();

window.onresize = () => {
	createGrid();
	setRadius();
}

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

const handleMove = e => {
	isOut = false;

	let x = e.clientX,
	    y = e.clientY;

	bg.style.setProperty('--x', `${x}px`);
	bg.style.setProperty('--y', `${y}px`);

	bg.style.setProperty('--c', '#FFF0');
}

document.body.onmousemove = e => handleMove(e);

document.body.ontouchmove = e => handleMove(e.touches[0]);

const handleRelease = async () => {
	isOut = true;

	let c1 = 222,
	    c2 = 0,
	    t = 500;

	let sleepTime = Math.floor(t / Math.abs(c1 - c2));

	for (i = Math.min(c1, c2); i <= Math.floor(Math.max(c1, c2) / 5); ++i) {
	    if (!isOut) break;
	    await sleep(sleepTime);
	    bg.style.setProperty('--c', `rgba(255, 255, 255, ${i / 51})`);
	}
}

document.body.onmouseout = () => handleRelease();

document.body.ontouchend = () => handleRelease();
