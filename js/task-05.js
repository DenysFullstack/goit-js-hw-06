const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', onInput);

function onInput(evt) {
    if(evt.currentTarget.value === '') {
        nameOutput.textContent = 'Anonymous!'
    } else {
    nameOutput.textContent = evt.currentTarget.value;
    }
}