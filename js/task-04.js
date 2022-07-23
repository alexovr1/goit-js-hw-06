const valueRef = document.querySelector('#value');
const buttonDecrementRef = document.querySelector('button[data-action="decrement"]');
const buttonIncrementRef = document.querySelector('button[data-action="increment"]');

let counterValue = 0;

const handleClickDecrement = () => {
    counterValue -= 1;
    valueRef.textContent = counterValue
};
const handleClickIncrement = () => {
    counterValue += 1;
    valueRef.textContent = counterValue
};

buttonDecrementRef.addEventListener("click", handleClickDecrement);
buttonIncrementRef.addEventListener("click", handleClickIncrement);
