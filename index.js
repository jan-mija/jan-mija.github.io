document.getElementById('font_switch').onclick = function() {
    let e = document.querySelectorAll('div');

    if (e[0].style.fontFamily == 'Consolas') {
        e.forEach(item => item.style.fontFamily = 'Nevis');
    } else {
        e.forEach(item => item.style.fontFamily = 'Consolas');
    }
}

// so it's more compact
purply.href = 'https://www.youtube.com/channel/UCn4jR4dSliyvqOiQC_TuZjQ';