'use strict';
import { createFormElements } from './createForm.js';
import { setupDataValidation } from './validateField.js';
import { setupSubmitForm } from './submitForm.js';
import {
    EMAIL_SELECTOR,
    EMAIL_REGEX,
    EMAIL_ERROR_MESSAGE,
} from './validationConfig.js';

createFormElements();

setupDataValidation(EMAIL_SELECTOR, EMAIL_REGEX, EMAIL_ERROR_MESSAGE);

setupSubmitForm();
