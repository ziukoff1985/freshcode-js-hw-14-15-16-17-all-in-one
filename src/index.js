'use strict';

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

const inputConfigData = [
    {
        type: 'text',
        name: 'first-name',
        placeholder: 'First name',
        attributes: { autocomplete: 'off' },
    },
    {
        type: 'text',
        name: 'last-name',
        placeholder: 'Last name',
    },
    {
        type: 'text',
        name: 'display-name',
        placeholder: 'Display name',
    },
    {
        type: 'email',
        name: 'email',
        placeholder: 'Email address',
        attributes: { autocomplete: 'off' },
    },
    {
        type: 'password',
        name: 'password',
        placeholder: 'Password',
    },
    {
        type: 'password',
        name: 'password-confirmation',
        placeholder: 'Password confirmation',
    },
];

inputConfigData.forEach((data) => {
    const input = document.createElement('input');
    input.setAttribute('type', data.type);
    input.setAttribute('name', data.name);
    input.setAttribute('placeholder', data.placeholder);
    input.setAttribute('aria-label', data.placeholder);

    if (data.attributes) {
        for (const key in data.attributes) {
            input.setAttribute(key, data.attributes[key]);
        }
    }

    inputWrapDiv.append(input);
});

const radioConfigData = [
    {
        id: 'buyer',
        label: 'Join As a Buyer',
        paragraphText:
            'I`m looking for a Name, Logo or Tagline for my business, brand or product',
    },
    {
        id: 'seller',
        label: 'Join As a Creative or Marketplace Seller',
        paragraphText:
            'I plan to submit name ideas, Logo designs or sell names in Domain Marketplace',
    },
];

radioConfigData.forEach((data) => {
    const radioWrapDiv = document.createElement('div');
    radioWrapDiv.classList.add('radio-wrapper');
    form.append(radioWrapDiv);

    const radioInput = document.createElement('input');
    radioInput.setAttribute('type', 'radio');
    radioInput.setAttribute('name', 'join-as');
    radioInput.setAttribute('id', data.id);
    radioWrapDiv.append(radioInput);

    const radioContentDiv = document.createElement('div');
    radioContentDiv.classList.add('radio-content');
    radioWrapDiv.append(radioContentDiv);

    const radioContentLabel = document.createElement('label');
    radioContentLabel.setAttribute('for', data.id);
    radioContentLabel.textContent = data.label;
    radioContentDiv.append(radioContentLabel);

    const radioContentParagraph = document.createElement('p');
    radioContentParagraph.classList.add('radio-text');
    radioContentParagraph.textContent = data.paragraphText;
    radioContentDiv.append(radioContentParagraph);
});

const checkboxWrap = document.createElement('div');
checkboxWrap.classList.add('checkbox-wrapper');
form.append(checkboxWrap);

const checkboxInput = document.createElement('input');
checkboxInput.setAttribute('type', 'checkbox');
checkboxInput.setAttribute('name', 'terms');
checkboxInput.setAttribute('id', 'terms');
checkboxWrap.append(checkboxInput);

const checkboxInputLabel = document.createElement('label');
checkboxInputLabel.setAttribute('for', 'terms');
checkboxInputLabel.textContent =
    'Allow Squadhelp to send marketing/promotional offers from time to time';
checkboxWrap.append(checkboxInputLabel);

const submitButton = document.createElement('button');
submitButton.setAttribute('type', 'submit');
submitButton.textContent = 'Create Account';
form.append(submitButton);
