var silent = false;

window.onload = function () {
  textin.value = 'The quick brown fox jumps over the lazy dog.';
  update();

  textin.onkeyup = update;

  lower.onclick = function () {
    textin.value = textin.value.toLowerCase();
    update();
  }

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
    'o': '<@665317951552880651>',
    's': '<@698558975146459217>'
}

const update = () => {
  textout.value = translate(textin.value);
}

const translate = (s) => {
  for (const [key, value] of Object.entries(dict)) {
    s = s.replaceAll(new RegExp(key, 'igm'), value);
  }

  return (silent ? '@silent ' : '') + s;
}
