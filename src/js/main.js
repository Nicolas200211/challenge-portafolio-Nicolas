/* eslint-disable no-multiple-empty-lines */
/* eslint-disable semi */

import { handleFormSubmit } from './form.js';
import { yearFn } from './year.js';

document.addEventListener('DOMContentLoaded', () => {
  handleFormSubmit();
  yearFn();
});
