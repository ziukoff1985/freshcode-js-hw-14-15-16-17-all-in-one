import { inputConfigData, radioConfigData } from './configData.js';

// DOM - elements creation
const container = document.createElement('div');
container.classList.add('container');
document.body.prepend(container);

const form = document.createElement('form');
container.append(form);

const h1 = document.createElement('h1');
h1.textContent = 'CREATE AN ACCOUNT';
form.append(h1);

const p = document.createElement('p');
p.textContent = 'We always keep your name and email address private';
form.append(p);

const inputWrapDiv = document.createElement('div');
inputWrapDiv.classList.add('inputs-wrapper');
form.append(inputWrapDiv);

inputConfigData.forEach(({ type, name, placeholder, attributes }) => {
    const inputGroupDiv = document.createElement('div');
    inputGroupDiv.classList.add('input-group');
    inputWrapDiv.append(inputGroupDiv);

    const input = document.createElement('input');
    input.setAttribute('type', type);
    input.setAttribute('name', name);
    input.setAttribute('placeholder', placeholder);
    input.setAttribute('aria-label', placeholder);

    if (attributes) {
        for (const key in attributes) {
            input.setAttribute(key, attributes[key]);
        }
    }

    inputGroupDiv.append(input);
});

radioConfigData.forEach(({ id, label, paragraphText }) => {
    const radioWrapDiv = document.createElement('div');
    radioWrapDiv.classList.add('radio-wrapper');
    form.append(radioWrapDiv);

    const radioInput = document.createElement('input');
    radioInput.setAttribute('type', 'radio');
    radioInput.setAttribute('name', 'join-as');
    radioInput.setAttribute('id', id);
    radioWrapDiv.append(radioInput);

    const radioContentDiv = document.createElement('div');
    radioContentDiv.classList.add('radio-content');
    radioWrapDiv.append(radioContentDiv);

    const radioContentLabel = document.createElement('label');
    radioContentLabel.setAttribute('for', id);
    radioContentLabel.textContent = label;
    radioContentDiv.append(radioContentLabel);

    const radioContentParagraph = document.createElement('p');
    radioContentParagraph.classList.add('radio-text');
    radioContentParagraph.textContent = paragraphText;
    radioContentDiv.append(radioContentParagraph);
});

const checkboxWrapDiv = document.createElement('div');
checkboxWrapDiv.classList.add('checkbox-wrapper');
form.append(checkboxWrapDiv);

const checkboxInput = document.createElement('input');
checkboxInput.setAttribute('type', 'checkbox');
checkboxInput.setAttribute('name', 'terms');
checkboxInput.setAttribute('id', 'terms');
checkboxWrapDiv.append(checkboxInput);

const checkboxInputLabel = document.createElement('label');
checkboxInputLabel.setAttribute('for', 'terms');
checkboxInputLabel.textContent =
    'Allow Squadhelp to send marketing/promotional offers from time to time';
checkboxWrapDiv.append(checkboxInputLabel);

const btnWrapDiv = document.createElement('div');
btnWrapDiv.classList.add('btn-wrapper');
form.append(btnWrapDiv);

const submitButton = document.createElement('button');
submitButton.setAttribute('type', 'submit');
submitButton.setAttribute('disabled', true);
submitButton.classList.add('btn-disabled');
submitButton.textContent = 'Submit';
btnWrapDiv.append(submitButton);

const cancelButton = document.createElement('button');
cancelButton.setAttribute('type', 'reset');
cancelButton.textContent = 'Cancel';
btnWrapDiv.append(cancelButton);

// DOM - Email Validation
const emailInput = document.querySelector('input[name="email"]');

const emailInputGroup = emailInput.closest('.input-group');

const errorMessage = document.createElement('div');
errorMessage.classList.add('error-message');
errorMessage.textContent = 'INVALID EMAIL FORMAT';
emailInputGroup.append(errorMessage);

function validateEmail() {
    const email = emailInput.value;
    const regexp = /^\w+[\.-]?\w+@[a-z]{3,8}\.[a-z]{2,5}$/i;
    const isEmailValid = regexp.test(email);

    if (!isEmailValid) {
        errorMessage.classList.add('visible');
        emailInput.classList.add('invalid');
        submitButton.setAttribute('disabled', true);
        submitButton.classList.add('btn-disabled');
    } else {
        errorMessage.classList.remove('visible');
        emailInput.classList.remove('invalid');
        submitButton.removeAttribute('disabled');
        submitButton.classList.remove('btn-disabled');
    }
}
emailInput.addEventListener('input', validateEmail);

// DOM - Password Validation and Confirmation
const passwordInputs = document.querySelectorAll('input[type="password"]');
const [passwordInput, passwordConfirmInput] = passwordInputs;

passwordInputs.forEach((input) => {
    const inputGroup = input.closest('.input-group');
    const errorMessage = document.createElement('div');
    errorMessage.classList.add('error-message');
    if (input.name === 'password') {
        errorMessage.textContent = 'Min 8 chars: a-z, A-Z, 0-9, _';
    } else {
        errorMessage.textContent = 'Passwords don`t match';
    }
    inputGroup.append(errorMessage);
});
const errorMessagePassword =
    passwordInput.parentElement.querySelector('.error-message');
const errorMessagePasswordConfirm =
    passwordConfirmInput.parentElement.querySelector('.error-message');

function passwordValidation() {
    const passwordRegexp = /\w{8,}/i;
    const isPasswordValid = passwordRegexp.test(passwordInput.value);

    passwordInput.type = isPasswordValid ? 'password' : 'text';

    toggleErrMessAndSubmitBtnVisibility(
        isPasswordValid,
        errorMessagePassword,
        passwordInput
    );
    if (isPasswordValid && passwordConfirmInput.value) {
        passwordConfirmValidation();
    }
}
passwordInput.addEventListener('input', passwordValidation);

function passwordConfirmValidation() {
    const isPasswordConfirmValid =
        passwordInput.value === passwordConfirmInput.value;
    passwordConfirmInput.type = isPasswordConfirmValid ? 'password' : 'text';

    toggleErrMessAndSubmitBtnVisibility(
        isPasswordConfirmValid,
        errorMessagePasswordConfirm,
        passwordConfirmInput
    );
}
passwordConfirmInput.addEventListener('input', passwordConfirmValidation);

// Function for toggle visibility of error message and submit button
function toggleErrMessAndSubmitBtnVisibility(isDataValid, errorMessage, input) {
    if (!isDataValid) {
        errorMessage.classList.add('visible');
        input.classList.add('invalid');
        submitButton.setAttribute('disabled', true);
        submitButton.classList.add('btn-disabled');
    } else {
        errorMessage.classList.remove('visible');
        input.classList.remove('invalid');
        submitButton.removeAttribute('disabled');
        submitButton.classList.remove('btn-disabled');
    }
}

// DOM - Collecting Props and Form Submit
class Person {
    constructor(...args) {
        args.forEach(({ name, value }) => {
            this[name] = value.trim();
        });
    }
}

function onSubmitForm(event) {
    event.preventDefault();

    const formInputs = [...document.querySelectorAll('input')].filter(
        ({ name, value, type }) =>
            name && value.trim() && type !== 'checkbox' && type !== 'radio'
    );

    const person = new Person(...formInputs);

    const personJson = JSON.stringify(
        person,
        (key, value) =>
            key === 'password' || key === 'passwordConfirmation'
                ? undefined
                : value,
        2
    );

    localStorage.setItem(person.lastName, personJson);
    form.reset();
}

form.addEventListener('submit', onSubmitForm);

function onCancelForm() {
    errorMessage.classList.remove('visible');
    emailInput.classList.remove('invalid');
    errorMessagePassword.classList.remove('visible');
    passwordInput.classList.remove('invalid');
    errorMessagePasswordConfirm.classList.remove('visible');
    passwordConfirmInput.classList.remove('invalid');
    submitButton.removeAttribute('disabled');
    submitButton.classList.remove('btn-disabled');
}

cancelButton.addEventListener('click', onCancelForm);
