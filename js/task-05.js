const inputValue = document.querySelector('#name-input');
const spanText = document.querySelector('#name-output');

inputValue.addEventListener("input", onInputChange);

function onInputChange (event){
    if (inputValue.value) {
                spanText.textContent = event.currentTarget.value;
            } else {
                spanText.textContent = "Anonymous"
            }
};