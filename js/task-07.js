const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

const onChangeSizeText = () => {
    const sizeInputRef = inputRef.value;
    textRef.style.fontSize = `${sizeInputRef}px`;
}

inputRef.addEventListener('input', onChangeSizeText)