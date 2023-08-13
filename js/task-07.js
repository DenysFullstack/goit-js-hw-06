const fontSizeControlInput = document.querySelector('#font-size-control')
const spanText = document.querySelector('#text');

spanText.style = "font-size: 56px";

fontSizeControlInput.addEventListener('input', onInput)

function onInput(evt) {
    spanText.style.fontSize = evt.currentTarget.value+'px';
}