/* ============================================== */
/* ==================== menu ==================== */
/* ============================================== */

document.querySelector('.header__button--open').onclick = function () {
    document.documentElement.classList.add('active-menu');
};

document.querySelector('.header__button--close').onclick = function () {
    document.documentElement.classList.remove('active-menu');
};

document.documentElement.onclick = function (event) {
    if (event.target === document.documentElement) {
        document.documentElement.classList.remove('active-menu');
    }
};

/* ============================================== */
/* =================== loader =================== */
/* ============================================== */
document.body.setAttribute('class', 'noscroll');

document.getElementById('overlay').style.display = 'block';
document.getElementById('spinner').style.display = 'block';

window.onload = function () {
    document.getElementById('spinner').style.opacity = '0';
    document.getElementById('overlay').style.opacity = '0';
    setTimeout(function () {
        document.getElementById('spinner').style.display = 'none';
        document.getElementById('overlay').style.display = 'none';
        document.body.className = document.body.className.replace(/\bnoscroll\b/, '');
    }, 300);
};
