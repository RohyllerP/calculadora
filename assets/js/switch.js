const radio = document.getElementById('switch');
const body = document.getElementById('body');
const h = document.getElementById('histo-h4');
const hTwo = document.getElementById('calcu-h4');
const tableDiv = document.getElementsByClassName('table-div');
const modoSpan = document.getElementById('modo-span');


if (localStorage.getItem("checked") != undefined) {
    radio.setAttribute("checked", true);
    body.classList.add('body-dark');
    h.classList.remove('h4-dark');
    h.classList.add('color-light');
    hTwo.classList.add('color-light');
    hTwo.classList.remove('h4-dark');
    body.classList.remove('body-light', 'color-dark');
    modoSpan.innerHTML = "Modo oscuro";
    modoSpan.style.color = "#FFFFFF";
}

radio.onclick = validar;
function validar() {
    if (radio.checked) {
        radio.setAttribute("checked", true);
        body.classList.add('body-dark');
        h.classList.remove('h4-dark');
        h.classList.add('color-light');
        hTwo.classList.add('color-light');
        hTwo.classList.remove('h4-dark');
        body.classList.remove('body-light', 'color-dark');
        modoSpan.innerHTML = "Modo oscuro";
        modoSpan.style.color = "#FFFFFF";
        localStorage.setItem("checked", "true");
    } else {
        body.classList.remove('body-dark');
        body.classList.add('body-light', 'color-dark');
        h.classList.add('h4-dark');
        hTwo.classList.add('h4-dark');
        modoSpan.innerHTML = "Modo claro";
        modoSpan.style.color = "#3E3E3E";
        radio.setAttribute("checked", false);
        localStorage.removeItem("checked");
    }
}