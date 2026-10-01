const form = document.querySelector('#launch-form');
const message = document.querySelector('#form-message');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  message.hidden = false;
  message.focus();
});

document.querySelector('#year').textContent = new Date().getFullYear();