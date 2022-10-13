import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onSubmit);
refs.form.addEventListener('input', throttle(onInput, 500));

fillForm();

function onSubmit(e) {
  e.preventDefault();
  console.log({ email: refs.input.value, message: refs.textarea.value });
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onInput() {
  const formData = {
    email: refs.input.value,
    message: refs.textarea.value,
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function fillForm() {
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedData) {
    refs.input.value = savedData.email;
    refs.textarea.value = savedData.message;
  }
}
