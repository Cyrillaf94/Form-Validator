const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');


function validateForm() {
    // Style main message for Error
    if (!form.checkValidity()) {
        message.textContent = 'Please fill out all fields';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        return;
    }
    if (password1El.value != password2El.value) {
        message.textContent = 'Passwords do not match';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        return;
    }
    if (form.checkValidity() && password1El.value === password2El.value) {
        message.textContent = 'Thank you for your help!';
        message.style.color = 'green';
        messageContainer.style.borderColor = 'green';
    }
}

function storeFormData() {
    const userData = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password1.value
    };
    console.log(userData);
}
    function processFormData(e) {
        e.preventDefault();
        validateForm();
        if (form.checkValidity() && password1El.value === password2El.value) {
        storeFormData();}
    }


    // Event listener
    form.addEventListener('submit', processFormData)