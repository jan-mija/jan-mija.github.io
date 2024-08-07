const re_url = /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube(?:-nocookie)?\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|live\/|v\/)?)([\w\-]+)(\S+)?$/;

window.onload = () => document.querySelector('#video > iframe').src = '';

vidurl.onchange = () => {
    if (re_url.test(vidurl.value)) {
	document.querySelector('#video > iframe').src = 'https://youtube.com/embed/' + vidurl.value.match(re_url)[5];
    }
}

load.onclick = vidurl.onchange;
