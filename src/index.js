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
    constructor(
        firstName = 'Not provided',
        lastName,
        nickName = 'Not provided',
        email = 'Not provided'
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.nickName = nickName;
        this.email = email;
    }
}

function onSubmitForm(event) {
    event.preventDefault();
    const formElements = form.elements;

    const person = new Person();

    for (const { name, value, tagName } of formElements) {
        if (name && tagName === 'INPUT' && value.trim()) {
            person[name] = value.trim();
        }
    }

    if (!person.lastName) {
        console.log('Cannot save: Last Name is required and cannot be empty');
        return;
    }

    localStorage.setItem(person.lastName, JSON.stringify(person));
    form.reset();
}

form.addEventListener('submit', onSubmitForm);
