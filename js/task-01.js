const listEl = document.querySelector('#categories');

const titletextEl = (number) =>
    listEl.children[number].children[0].textContent;

const elementsOfCategory = (number) =>
    listEl.children[number].children[1].childElementCount;


console.log(`Number of categories: ${listEl.childElementCount}`);

console.log(`Category: ${titletextEl(0)}`);
console.log(`Elements: ${elementsOfCategory(0)}`);

console.log(`Category: ${titletextEl(1)}`);
console.log(`Elements: ${elementsOfCategory(1)}`);

console.log(`Category: ${titletextEl(2)}`);
console.log(`Elements: ${elementsOfCategory(2)}`);