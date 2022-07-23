function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector('input'),
  btnCreate: document.querySelector('button[data-create]'),
  btnDestroy: document.querySelector('button[data-destroy]'),
  divBoxes: document.querySelector('#boxes'),
};

function createBoxes(amount) {
  const tempArray = [];
  amount = refs.input.value;

  let widthDiv = 20;
  let heightDiv = 20;

  for (let i = 0; i < amount; i += 1) {
    const createDiv = document.createElement('div');

    let step = 10;

    widthDiv += step;

    heightDiv += step;

    createDiv.style.width = `${widthDiv}px`;
    createDiv.style.height = `${heightDiv}px`;
    createDiv.style.backgroundColor = getRandomHexColor();

    tempArray.push(createDiv);
  }
  refs.divBoxes.append(...tempArray)
}

function destroyBoxes() {
  refs.divBoxes.innerHTML = '';
  refs.input.value = '';
}

refs.btnCreate.addEventListener('click', createBoxes);
refs.btnDestroy.addEventListener('click', destroyBoxes)