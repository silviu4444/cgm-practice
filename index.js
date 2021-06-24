const submit = document.querySelector('#submit');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
// console.log(usernameInput.value.length)

// submit.addEventListener('click', (e) => {
//     if(usernameInput.value.length < 8 && passwordInput.value.length < 8) {
//         submit.setAttribute('disabled', true)
//         usernameInput.style.borderColor = "red";
//     }
// })
const setAttribute = (element) => {
    if(element.value.length < 8) {
        submit.setAttribute('disabled', true)
    } else {
        console.error('else')
        submit.removeAttribute('disabled')
    }
}

usernameInput.addEventListener('keypress', () => {
    setAttribute(usernameInput);
})
passwordInput.addEventListener('keypress', () => {
    setAttribute(passwordInput)
})