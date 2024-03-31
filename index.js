document.getElementById('font_switch').onclick = function() {
    let e = document.querySelectorAll('div');

    if (e[0].style.fontFamily == 'Consolas') {
        e.forEach(item => item.style.fontFamily = 'Nevis');
    } else {
        e.forEach(item => item.style.fontFamily = 'Consolas');
    }
}

// make all urls open in new tabs (except the font switch)
document.querySelectorAll('a:not(#font_switch)').forEach(item => item.target = 'blank');

// so it's more compact
purply.href = 'https://www.youtube.com/channel/UCn4jR4dSliyvqOiQC_TuZjQ';

// socials urls bc yea it's more compact whatever
twt.href = 'https://twitter.com/miacolonthree';
pspage.href = 'https://en.pronouns.page/miacolonthree';