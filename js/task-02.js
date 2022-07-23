const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

const arrItem = [];

const addItems = (arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    const item = document.createElement('li');
    item.textContent = ingredients[i];
    item.classList.add('item');
    arrItem.push(item)
  }
  list.append(...arrItem)
}

addItems(ingredients)