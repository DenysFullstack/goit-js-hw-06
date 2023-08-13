const validationInput = document.querySelector("#validation-input");
console.dir(validationInput);
validationInput.addEventListener("blur", onInput);

function onInput(evt) {
    let num = Number(evt.currentTarget.dataset.length);
  if (evt.currentTarget.value.length !== num) {
    evt.currentTarget.classList.add('invalid');
    evt.currentTarget.classList.remove('valid');
  } else {
    evt.currentTarget.classList.add('valid');
    evt.currentTarget.classList.remove('invalid');
  }
}