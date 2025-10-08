import { createNewElement } from './helpers.js';

let isDataValid = false;

export const getIsDataValid = () => isDataValid;

export function setupDataValidation(selector, regexp, errorText) {
    const input = document.querySelector(selector);
    if (!input) return;

    const inputGroup = input.closest('.input-group');

    const regexpForValid = regexp;

    const errorMessage = createNewElement('div', 'error-message', inputGroup);
    errorMessage.textContent = errorText;

    function validateData(event) {
        const targetField = event.target.value;
        const isValid = regexpForValid.test(targetField);

        isDataValid = isValid;

        if (!isValid) {
            errorMessage.classList.add('visible');
            input.classList.add('invalid');
        } else {
            errorMessage.classList.remove('visible');
            input.classList.remove('invalid');
        }
    }
    input.addEventListener('input', validateData);
}
