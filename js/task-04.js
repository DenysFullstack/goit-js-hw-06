const counter = document.querySelector('#counter');
const value = document.querySelector('#value');

counter.firstElementChild.addEventListener('click',onDecrementBtnClick);
let counterValue = 0;
function onDecrementBtnClick() {
    counterValue -= 1;
    value.textContent = `${counterValue}`
};

counter.lastElementChild.addEventListener('click',onIncrementBtnClick);

function onIncrementBtnClick() {
    counterValue += 1;
    value.textContent = `${counterValue}`
};