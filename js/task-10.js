function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const divControls = document.querySelector("#controls");
const boxes = divControls.nextElementSibling;
const input = divControls.firstElementChild;
const createBtn = divControls.firstElementChild.nextElementSibling;
const destroyBtn = divControls.lastElementChild;

createBtn.addEventListener("click", onClick);
destroyBtn.addEventListener("click", destroyBoxes);

function onClick() {
  let number = Number(input.value)
  boxes.insertAdjacentHTML("beforeend", createBoxes(number));
}

function createBoxes(number) {
  let markup = ``;
  for (let i = 0; i < number; i += 1) {
    markup += `<div style="width:${30 + 10 * i}px; height:${
      30 + 10 * i
    }px; background-color:${getRandomHexColor()}"></div>`;
  }
  return markup;
}
console.dir(boxes.children);

function destroyBoxes() {
  boxes.innerHTML = "";
  input.value = ''
}






















// createBtn.addEventListener("click", onInput);
// destroyBtn.addEventListener("click", destroyBoxes);
// console.dir(boxes);

// function onInput(event) {
//   createBoxes(Number(event.currentTarget.value));
// }

// function createBoxes(amount) {
//   let markup = ``;
//   for (let i=0; i<amount; i+=1) {
//     markup += `<div style="width:${30+10*i}'px', height:${30+10*i}'px'"></div>`
//   }
//   return markup;
// }
// boxes.insertAdjacentHTML("beforeend", createBoxes(5));

// function destroyBoxes() {
//   boxes.innerHTML = "";
// }

// input.addEventListener('input', onInput);

// function createBoxes(amount) {
//   for (let i = 0; i < amount; i += 1) {
//     const divEl = `<div></div>`;
//     boxes.appendChild(divEl);
//   }

// }
// createBoxes(5);

// function createBoxes(amount) {
//   let newBoxes =[];
//   for (i=0; i<=amount; i+=1){
//     const div = document.createElement('div');
//     div.style.height = '${30px + 10 * i}px';
//     div.style.width = '${30px + 10 * i}px';
//     div.style.backgroundColor = getRandomHexColor();
//     newBoxes.push(div)
//   }
// }
