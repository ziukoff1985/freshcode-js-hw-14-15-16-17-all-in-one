import { createNewElement } from './helpers.js';

let isDataValid = false;

export const getIsDataValid = () => isDataValid;

export function setupDataValidation(
    selector,
    validationRegex,
    errorMessageText
) {
    const emailInput = document.querySelector(selector);
    if (!emailInput) return;

    const inputGroupEmail = emailInput.closest('.input-group');

    const emailRegex = validationRegex;

    const errorMessage = createNewElement(
        'div',
        'error-message',
        inputGroupEmail
    );
    errorMessage.textContent = errorMessageText;

    function validateData(event) {
        const email = event.target.value;
        const isValid = emailRegex.test(email);

        isDataValid = isValid;

        if (!isValid) {
            errorMessage.classList.add('visible');
            emailInput.classList.add('invalid');
        } else {
            errorMessage.classList.remove('visible');
            emailInput.classList.remove('invalid');
        }
    }
    emailInput.addEventListener('input', validateData);
}
