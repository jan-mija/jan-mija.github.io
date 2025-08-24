const load = document.getElementById('loadfile');
const textarea = document.getElementById('text-area');

// https://stackoverflow.com/a/18197341 by 2438165/mat%c4%9bj-pokorn%c3%bd
function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

document.getElementById('load').onclick = () => load.click();

load.onchange = () => {
    file = load.files[0];
    console.log(file);
    document.getElementById('filename').innerHTML = `filename: ${file.name} (${file.size}B)`;

    var reader = new FileReader();
    reader.readAsText(file, 'UTF-8');

    reader.onload = (e) => textarea.value = e.target.result;
    reader.onerror = () => textarea.value = 'error :<';
}

document.getElementById('clear').onclick = () => {
    textarea.value = '';
    document.getElementById('filename').innerHTML = 'filename: ';
}

document.getElementById('save').onclick = () => {
    if (dousename.checked && customfilename.value) download(customfilename.value, textarea.value)
    else if (file.name) download(file.name, textarea.value);
}
