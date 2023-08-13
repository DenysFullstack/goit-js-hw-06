const widget = document.querySelector('.widget')
const body = widget.parentElement;
const nameColor = widget.firstElementChild.firstElementChild;

widget.lastElementChild.addEventListener('click', onChangeColorBtn);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onChangeColorBtn (evt) {
  body.style.backgroundColor = getRandomHexColor();
  nameColor.textContent = body.style.backgroundColor;
}














// body.style.backgroundColor = 'white'

// console.log(body);
// console.log(changeColorBtn);

// console.log(body.style.backgroundColor);
// getRandomHexColor(body.style.backgroundColor)
// console.log(evt.currentTarget);