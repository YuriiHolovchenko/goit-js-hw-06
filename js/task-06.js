const inputValue = document.querySelector('#validation-input');

inputValue.addEventListener("blur", () => {
    inputValue.value.length === Number(inputValue.dataset.length) ? addStyle('invalid','valid')
    : addStyle('valid','invalid');
  });

function addStyle(rem,add){
    inputValue.classList.remove(rem);
    inputValue.classList.add(add);
};