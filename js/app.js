const btnSignIn = document.querySelector('#sign-in');
const btnSignUp = document.querySelector('#sign-up');

const body = document.querySelector('body');

btnSignIn.addEventListener('click', () => {
    body.className = 'sign-in-js';
});

btnSignUp.addEventListener('click', () => {
    body.className = 'sign-up-js';
});
