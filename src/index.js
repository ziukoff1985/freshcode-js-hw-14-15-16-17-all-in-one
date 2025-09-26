'use strict';

const container = document.createElement('div');
container.classList.add('container');
document.body.append(container);

const form = document.createElement('form');
container.append(form);

const h1 = document.createElement('h1');
h1.textContent = 'CREATE AN ACCOUNT';
form.append(h1);

const formParagraph = document.createElement('p');
formParagraph.textContent =
    'We always keep your name and email address private';
form.append(formParagraph);

const inputWrap = document.createElement('div');
inputWrap.classList.add('inputs-wrapper');
form.append(inputWrap);

const formInput1 = document.createElement('input');
formInput1.setAttribute('type', 'text');
formInput1.setAttribute('name', 'first-name');
formInput1.setAttribute('placeholder', 'First name');
formInput1.setAttribute('aria-label', 'First name');
inputWrap.append(formInput1);

const formInput2 = document.createElement('input');
formInput2.setAttribute('type', 'text');
formInput2.setAttribute('name', 'last-name');
formInput2.setAttribute('placeholder', 'Last name');
formInput2.setAttribute('aria-label', 'Last name');
inputWrap.append(formInput2);

const formInput3 = document.createElement('input');
formInput3.setAttribute('type', 'text');
formInput3.setAttribute('name', 'display-name');
formInput3.setAttribute('placeholder', 'Display name');
formInput3.setAttribute('aria-label', 'Display name');
inputWrap.append(formInput3);

const formInput4 = document.createElement('input');
formInput4.setAttribute('type', 'email');
formInput4.setAttribute('name', 'email');
formInput4.setAttribute('placeholder', 'Email address');
formInput4.setAttribute('aria-label', 'Email address');
inputWrap.append(formInput4);

const formInput5 = document.createElement('input');
formInput5.setAttribute('type', 'password');
formInput5.setAttribute('name', 'password');
formInput5.setAttribute('placeholder', 'Password');
formInput5.setAttribute('aria-label', 'Password');
inputWrap.append(formInput5);

const formInput6 = document.createElement('input');
formInput6.setAttribute('type', 'password');
formInput6.setAttribute('name', 'password-confirmation');
formInput6.setAttribute('placeholder', 'Password confirmation');
formInput6.setAttribute('aria-label', 'Password confirmation');
inputWrap.append(formInput6);

const radioWrap = document.createElement('div');
radioWrap.classList.add('radio-wrapper');
form.append(radioWrap);

const radioInput = document.createElement('input');
radioInput.setAttribute('type', 'radio');
radioInput.setAttribute('name', 'join-as');
// radioInput.setAttribute('id', 'buyer');
radioWrap.append(radioInput);

const radioContent = document.createElement('div');
radioContent.classList.add('radio-content');
radioWrap.append(radioContent);

const radioContentLabel = document.createElement('label');
radioContentLabel.setAttribute('for', 'buyer');
radioContentLabel.textContent = 'Join As a Buyer';
radioContent.append(radioContentLabel);

const radioContentParagraph = document.createElement('p');
radioContentParagraph.classList.add('radio-text');
radioContentParagraph.textContent =
    'I`m looking for a Name, Logo or Tagline for my business, brand or product';
radioContent.append(radioContentParagraph);

const radioWrap2 = radioWrap.cloneNode(true);
radioWrap2.classList.add('radio-wrapper-2');
form.append(radioWrap2);

const radioInput2 = document.querySelector('.radio-wrapper-2 input');
radioInput2.setAttribute('id', 'seller');

radioInput.setAttribute('id', 'buyer');

const radioContentLabel2 = document.querySelector('.radio-wrapper-2 label');
radioContentLabel2.setAttribute('for', 'seller');
radioContentLabel2.textContent = 'Join As a Creative or Marketplace Seller';

const radioContentParagraph2 = document.querySelector(
    '.radio-wrapper-2 .radio-text'
);
radioContentParagraph2.textContent =
    'I plan to submit name ideas, Logo designs or sell names in Domain Marketplace';

const checkboxWrap = document.createElement('div');
console.log(checkboxWrap);
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
