const btnSignIn = document.getElementById('sign-in');
const btnSignUp = document.getElementById('sign-up');

const body = document.querySelector('body');

console.log(btnSignIn)
console.log(btnSignUp)

btnSignIn.addEventListener('click', () => {
    body.className = 'sign-in-js';
});

btnSignUp.addEventListener('click', () => {
    body.className = 'sign-up-js';
});