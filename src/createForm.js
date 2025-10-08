import { inputConfigData, radioConfigData } from './configData.js';
import { createNewElement } from './helpers.js';

export const container = createNewElement('div', 'container', document.body);

export const form = createNewElement('form', null, container);

export function createFormElements() {
    const h1 = createNewElement('h1', null, form);
    h1.textContent = 'CREATE AN ACCOUNT';

    const formParagraph = createNewElement('p', null, form);
    formParagraph.textContent =
        'We always keep your name and email address private';

    const inputWrapDiv = createNewElement('div', 'inputs-wrapper', form);

    inputConfigData.forEach((inputAttrData) => {
        const inputGroupDiv = createNewElement(
            'div',
            'input-group',
            inputWrapDiv
        );
        const input = createNewElement(
            'input',
            null,
            inputGroupDiv,
            inputAttrData
        );
    });

    radioConfigData.forEach(({ id, label, paragraphText }) => {
        const radioWrapDiv = createNewElement('div', 'radio-wrapper', form);

        const radioInput = createNewElement('input', null, radioWrapDiv);
        radioInput.setAttribute('type', 'radio');
        radioInput.setAttribute('name', 'join-as');
        radioInput.setAttribute('id', id);

        const radioContentDiv = createNewElement(
            'div',
            'radio-content',
            radioWrapDiv
        );

        const radioContentLabel = createNewElement(
            'label',
            null,
            radioContentDiv
        );
        radioContentLabel.setAttribute('for', id);
        radioContentLabel.textContent = label;

        const radioContentParagraph = createNewElement(
            'p',
            'radio-text',
            radioContentDiv
        );
        radioContentParagraph.textContent = paragraphText;
    });

    const checkboxWrapDiv = createNewElement('div', 'checkbox-wrapper', form);

    const checkboxInput = createNewElement('input', null, checkboxWrapDiv);
    checkboxInput.setAttribute('type', 'checkbox');
    checkboxInput.setAttribute('name', 'terms');
    checkboxInput.setAttribute('id', 'terms');

    const checkboxInputLabel = createNewElement('label', null, checkboxWrapDiv);
    checkboxInputLabel.setAttribute('for', 'terms');
    checkboxInputLabel.textContent =
        'Allow Squadhelp to send marketing/promotional offers from time to time';

    const btnWrapDiv = createNewElement('div', 'btn-wrapper', form);

    const submitButton = createNewElement('button', null, btnWrapDiv);
    submitButton.setAttribute('type', 'submit');
    submitButton.textContent = 'Submit';

    const cancelButton = createNewElement('button', null, btnWrapDiv);
    cancelButton.setAttribute('type', 'reset');
    cancelButton.textContent = 'Cancel';
}
