const select = document.querySelector('select');
const p = document.querySelector('span');
const html = document.querySelector('html');

select.onchange = function() {
    (select.value === "black") ? theme('black','white') : theme('white','black');
};

function theme(bgColor, textColor) {
    html.style.backgroundColor = bgColor;
    html.style.color = textColor;
}