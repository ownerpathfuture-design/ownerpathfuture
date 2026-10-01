const message = document.querySelector('#form-message');
const params = new URLSearchParams(window.location.search);

if (params.get('submitted') === '1' && message) {
  message.hidden = false;
}

document.querySelector('#year').textContent = new Date().getFullYear();