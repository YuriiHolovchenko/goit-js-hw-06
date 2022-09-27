const inputValue = document.querySelector('input#font-size-control');

const spanText = document.querySelector('span#text');

inputValue.addEventListener("input", () => {
    spanText.style.fontSize = `${inputValue.value}px`
  });
