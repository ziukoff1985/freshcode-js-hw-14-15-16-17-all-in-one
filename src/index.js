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
