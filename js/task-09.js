function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  body: document.querySelector('body'),
  span: document.querySelector('.color'),
  btn: document.querySelector('.change-color'),
}

const onChangeColorBody = () => {
  const changedColor = getRandomHexColor();
  refs.body.style.backgroundColor = changedColor;
  refs.span.textContent = changedColor;
}

refs.btn.addEventListener('click', onChangeColorBody)