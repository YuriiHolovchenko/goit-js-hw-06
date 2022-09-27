const changeColorBtn = document.querySelector('.change-color');
const bodyColor = document.querySelector('body');
const spanColorText = document.querySelector('.color');

changeColorBtn.addEventListener('click', () => {
  const newColor = getRandomHexColor();
  bodyColor.style.background = newColor;
  spanColorText.textContent = newColor;
})

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
