var silent = false;

window.onload = function () {
  textin.value = 'The quick brown fox jumps over the lazy dog.';
  update();

  textin.onkeyup = update;

  fetchlist.onclick = updateList;

  copy.onclick = function () {
    textout.select();
    textout.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(textout.value);
  }
}

var dict = {
    'a': '<@1242289743874752566>',
    'b': '<@892431734971449384>',
    'c': '<@739834419598065694>',
//    'd': '<@1305977762367934494>',
    'e': '<@865628079497674773>',
    'h': '<@1308822394193838240>',
    'k': '<@534806202698432514>',
    'm': '<@1076841297563893881>',
    'o': '<@665317951552880651>',
    's': '<@698558975146459217>'
}

// thank you to Kenna Blackburn (No_Pen)
const dbUrl = 'https://gist.githubusercontent.com/Kenna-Blackburn/571cada7154dee0c9bedc87786c691a3/raw';
const dbRe  = /^(?!username,regex,userID)(.+),(.+),(\d+)$/gm;

const getFile = () => {
  let xmlHttp = new XMLHttpRequest();
  xmlHttp.open('GET', dbUrl, false);
  xmlHttp.send(null);

  return xmlHttp.responseText;
}

const updateList = () => {
  dict = {};

  list = [...getFile().matchAll(dbRe)];
  list.forEach(line => {
    dict[line[1]] = '<@' + line[3] + '>';
  })

  console.log(dict);
  update();
}

const update = () => {
  textout.value = translate(textin.value);
}

const translate = (s) => {
  for (const [k, v] of Object.entries(dict)) {
    s = s.replaceAll(new RegExp(k, 'igm'), v);
  }

  return (silent ? '@silent ' : '') + s;
}
