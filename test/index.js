function addElement() {
	const embedTitle = document.createElement('meta');

	embedTitle.property = 'og:title';
	embedTitle.content = document.title;

	document.getElementsByTagName('head')[0].appendChild(embedTitle);
}

addElement()
