const form = document.querySelector('.login-form');
const formData = {};


form.addEventListener('submit', submitForm);


function submitForm(event){
    event.preventDefault();
    const formElements = event.currentTarget.elements;
    if (formElements.email.value === '' || formElements.password.value === ''){
        alert('Всі поля повинні бути заповнені!');
    }
    formData.mail = formElements.email.value;
    formData.password = formElements.password.value
    console.log('formData:', formData);
    form.reset();
};
