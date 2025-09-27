'use strict';

import { inputConfigData, radioConfigData } from './configData.js';

const container = document.createElement('div');
container.classList.add('container');
document.body.prepend(container);

const form = document.createElement('form');
container.append(form);

const h1 = document.createElement('h1');
h1.textContent = 'CREATE AN ACCOUNT';
form.append(h1);

const formParagraph = document.createElement('p');
formParagraph.textContent =
    'We always keep your name and email address private';
form.append(formParagraph);

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

// ! Альтернативний варіант з 'фабричною функцією'
// function createInput({ type, name, placeholder, attributes = {} }) {
//     const input = document.createElement('input');
//     Object.assign(input, {
//         type: type,
//         name: name,
//         placeholder: placeholder,
//         ariaLabel: placeholder,
//         ...attributes,
//     });
//     inputWrapDiv.append(input);
// }

// inputConfigData.forEach((data) => {
//     createInput(data);
// });

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

const submitButton = document.createElement('button');
submitButton.setAttribute('type', 'submit');
submitButton.textContent = 'Create Account';
form.append(submitButton);
