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

// Password Validation and Confirmation
const passwordInputs = document.querySelectorAll('input[type="password"]');
const [passwordInput, passwordConfirmInput] = passwordInputs;

passwordInputs.forEach((input) => {
    input.addEventListener('focus', () => (input.type = 'text'));
    input.addEventListener('blur', () => (input.type = 'password'));
    const inputGroup = input.closest('.input-group');
    const errorMessage = document.createElement('div');
    errorMessage.classList.add('error-message');
    inputGroup.append(errorMessage);
    if (input.name === 'password') {
        errorMessage.textContent =
            'Minimum 8 characters needed. Allowed chars: a-z, A-Z, 0-9, _';
    } else {
        errorMessage.textContent =
            'Please ensure both passwords are identical.';
    }
});
const errorMessagePassword =
    passwordInput.parentElement.querySelector('.error-message');
const errorMessagePasswordConfirm =
    passwordConfirmInput.parentElement.querySelector('.error-message');

let isPasswordValid = false;
let isPasswordConfirmValid = false;

function passwordValidation() {
    const passwordRegexp = /^[\w!@#$%^&]{8,}$/i;
    isPasswordValid = passwordRegexp.test(passwordInput.value);

    if (!isPasswordValid) {
        errorMessagePassword.classList.add('visible');
        passwordInput.classList.add('invalid');
    } else {
        errorMessagePassword.classList.remove('visible');
        passwordInput.classList.remove('invalid');
    }

    // Check if user entered confirm password first, than starts entering password
    if (isPasswordValid && passwordConfirmInput.value) {
        passwordConfirmValidation();
    }

    checkFormValidity();
}
passwordInput.addEventListener('input', passwordValidation);

function passwordConfirmValidation() {
    isPasswordConfirmValid = passwordInput.value === passwordConfirmInput.value;

    if (!isPasswordConfirmValid) {
        errorMessagePasswordConfirm.classList.add('visible');
        passwordConfirmInput.classList.add('invalid');
    } else {
        errorMessagePasswordConfirm.classList.remove('visible');
        passwordConfirmInput.classList.remove('invalid');
    }
    // Check if user entered confirm password, delete it and than starts entering password (for submit button logic)
    if (!passwordConfirmInput.value) {
        isPasswordConfirmValid = false;
    }
    checkFormValidity();
}
passwordConfirmInput.addEventListener('input', passwordConfirmValidation);

function checkFormValidity() {
    if (isPasswordValid && isPasswordConfirmValid) {
        submitButton.disabled = false;
        submitButton.classList.remove('btn-disabled');
    } else {
        submitButton.disabled = true;
        submitButton.classList.add('btn-disabled');
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
    errorMessagePassword.classList.remove('visible');
    passwordInput.classList.remove('invalid');
    errorMessagePasswordConfirm.classList.remove('visible');
    passwordConfirmInput.classList.remove('invalid');
    submitButton.setAttribute('disabled', true);
    submitButton.classList.add('btn-disabled');
    isPasswordValid = false;
    isPasswordConfirmValid = false;
}

cancelButton.addEventListener('click', onCancelForm);
