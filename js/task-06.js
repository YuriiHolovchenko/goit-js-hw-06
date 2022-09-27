const inputValue = document.querySelector('#validation-input');

inputValue.addEventListener("blur", () => {
    if (inputValue.value.length === Number(inputValue.dataset.length)) {
        inputValue.classList.remove('invalid');
        inputValue.classList.add('valid');
    } else {
        inputValue.classList.remove('valid');
        inputValue.classList.add('invalid');
    }
  });