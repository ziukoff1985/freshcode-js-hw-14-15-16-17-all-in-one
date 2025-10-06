'use strict';

import { inputConfigData } from './configData.js';

// DOM - elements creation
const container = document.createElement('div');
container.classList.add('container');
document.body.prepend(container);

const form = document.createElement('form');
container.append(form);

const h1 = document.createElement('h1');
h1.textContent = 'CREATE AN ACCOUNT';
form.append(h1);

const inputWrapDiv = document.createElement('div');
inputWrapDiv.classList.add('inputs-wrapper');
form.append(inputWrapDiv);

inputConfigData.forEach(({ type, name, placeholder, attributes }) => {
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

    inputWrapDiv.append(input);
});

const btnWrapDiv = document.createElement('div');
btnWrapDiv.classList.add('btn-wrapper');
form.append(btnWrapDiv);

const submitButton = document.createElement('button');
submitButton.setAttribute('type', 'submit');
submitButton.textContent = 'Submit';
btnWrapDiv.append(submitButton);

const cancelButton = document.createElement('button');
cancelButton.setAttribute('type', 'reset');
cancelButton.textContent = 'Cancel';
btnWrapDiv.append(cancelButton);

// DOM - events creation

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
        ({ name, value }) => name && value.trim()
    );

    const person = new Person(...formInputs);

    if (!person.lastName) {
        console.log('Cannot save: Last Name is required and cannot be empty');
        return;
    }

    const personJson = JSON.stringify(
        person,
        (key, value) => (key === 'email' ? undefined : value),
        2
    );

    localStorage.setItem(person.lastName, personJson);
    form.reset();
}

form.addEventListener('submit', onSubmitForm);

// class Person {
//     constructor(
//         firstName = 'Not provided',
//         lastName,
//         nickName = 'Not provided',
//         email = 'Not provided'
//     ) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.nickName = nickName;
//         this.email = email;
//     }
// }

// function onSubmitForm(event) {
//     event.preventDefault();
//     const formElements = form.elements;

//     const person = new Person();

//     for (const { name, value, tagName } of formElements) {
//         if (name && tagName === 'INPUT' && value.trim()) {
//             person[name] = value.trim();
//         }
//     }

//     if (!person.lastName) {
//         console.log('Cannot save: Last Name is required and cannot be empty');
//         return;
//     }

//     localStorage.setItem(person.lastName, JSON.stringify(person));
//     form.reset();
// }

// form.addEventListener('submit', onSubmitForm);

// function onChangeInputs(event) {
//     const { name, value } = event.target;

//     console.log('Name:', name);

//     console.log('Value:', value);
// }

// form.addEventListener('change', onChangeInputs);

// const inputs = form.querySelectorAll('input');

// inputs.forEach((input) => {
//     input.addEventListener('input', onChangeInputs);
// });
