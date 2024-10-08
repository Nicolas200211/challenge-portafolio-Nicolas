/* eslint-disable no-undef */
/* eslint-disable no-useless-return */
/* eslint-disable no-trailing-spaces */
/* eslint-disable keyword-spacing */
/* eslint-disable space-before-function-paren */
/* eslint-disable padded-blocks */
/* eslint-disable space-before-blocks */
/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable no-multiple-empty-lines */

// `$` Hace referencia a que es una variable del DOM
const $form = document.getElementById('form');
const $submitBtn = document.querySelector('.btn--submit');
const $errorName = document.getElementById('error-name');
const $errorMail = document.getElementById('error-mail');
const $errorSubject = document.getElementById('error-subject');
const $errorMessage = document.getElementById('error-message');

// Desestructuramos la colección de elementos del formulario con la propiedad `form.elements`
const { name, email, subject, message } = $form.elements;

// Evento input
document.addEventListener('input', (e) => {
  checkInputs()

  if(e.target === name){
    validateInputName();
  }
  if(e.target === email) {
    validateInputEmail();
  }
  if(e.target === subject){
    validateInputSubject()
  }
  if(e.target === message){
    validateTextareaMessage();
  }
});


/**
 * Función para manejar el evento submit del formulario
 */
export function handleFormSubmit() {
  $form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const isValid =
      validateInputName() &&
      validateInputEmail() &&
      validateInputSubject() &&
      validateTextareaMessage();

    if (isValid) {
      alert('Tu mensaje ha sido enviado.');
      $form.reset();
      $submitBtn.disabled = true;
    }
  });
}

/**
 * Valida que los campos no esten vacíos para habilitar el botón submit
 */
function checkInputs() {
  if (
    ![
      name.value.trim(),
      email.value.trim(),
      subject.value.trim(),
      message.value.trim()
    ].includes('')
  ) {
    $submitBtn.disabled = false;
  } else {
    $submitBtn.disabled = true;
  }
}

/**
 * Valida el input de Nombre
 * @returns {boolean}
 */
function validateInputName(){

  // elimina espacios en blanco
  const inputNameValue = name.value.trim()

  if(!inputNameValue){
    displayValidationMessage('Campo Nombre no debe estar en blanco o vacío.', $errorName)
    return;
  }

  if(inputNameValue.length > 50){
    displayValidationMessage('Debe contener máximo 50 caracteres.', $errorName)
    return;
  }

  clearValidationMessage($errorName)
  return true
}

/**
 * Valida el input correo electrónico
 * @returns {boolean}
 */
function validateInputEmail(){

  // elimina espacios en blanco
  const inputEmailValue = email.value.trim()

  if(!inputEmailValue){
    displayValidationMessage('Campo e-mail no debe estar en blanco o vacío.', $errorMail)
    return;
  }

  if(!isValidEmail(inputEmailValue)){
    displayValidationMessage('Correo invalido. Ejemplo: texto@texto.com.', $errorMail)
    return;
  }

  clearValidationMessage($errorMail)
  return true

}

/**
 * Valida el input asunto
 * @returns {boolean}
 */
function validateInputSubject(){

  // elimina espacios en blanco
  const inputSubjectValue = subject.value.trim()

  if(!inputSubjectValue){
    displayValidationMessage('Campo Asunto no debe estar en blanco o vacío.', $errorSubject)
    return;
  }

  if(inputSubjectValue.length > 50){
    displayValidationMessage('Debe contener máximo 50 caracteres.', $errorSubject)
    return;
  }

  clearValidationMessage($errorSubject)
  return true
}

/**
 * Valida el mensaje del textarea
 * @returns {boolean}
 */
function validateTextareaMessage(){

  // elimina espacios en blanco
  const textareaSubjectValue = message.value.trim()

  if(!textareaSubjectValue){
    displayValidationMessage('Campo Mensaje no debe estar en blanco o vacío.', $errorMessage)
    return;
  }

  if(textareaSubjectValue.length > 300){
    displayValidationMessage('Debe contener máximo 300 caracteres.', $errorMessage)
    return;
  }

  clearValidationMessage($errorMessage);
  return true;
}

/**
 * Muestra los mensajes de error al validar inputs
 * @param {string} message 
 * @param {HTMLSpanElement} id 
 */
function displayValidationMessage(message, id){
  id.textContent = message;
}

/**
 * Limpia los mensajes de error existentes
 * @param {HTMLSpanElement} id
 */
function clearValidationMessage(id) {
  id.textContent = '';
}

/**
 * Expresión regular que valida si el email proporcionado tiene un formato correcto.
 * @param {string} email 
 * @returns {boolean}
 */
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

