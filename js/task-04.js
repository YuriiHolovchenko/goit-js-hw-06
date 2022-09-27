const value = document.querySelector('#value');
const buttonDec = document.querySelector('button[data-action="decrement"]');
const buttonInc = document.querySelector('button[data-action="increment"]');

let counterValue = 0;

buttonDec.addEventListener("click", () => {
    counterValue--;
    value.innerHTML = counterValue;
  });

buttonInc.addEventListener("click", () => {
    counterValue++;
    value.innerHTML = counterValue;
  });