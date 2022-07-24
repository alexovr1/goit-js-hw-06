const listEl = document.querySelector('#categories');
const itemEl = document.querySelectorAll('.item')

console.log(`Number of categories: ${listEl.childElementCount}`);

itemEl.forEach((element) => {
    console.log(`Category: ${element.firstElementChild.textContent}`), console.log(`Elements: ${element.children[1].childElementCount}`);
});