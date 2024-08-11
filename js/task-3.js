const inputUserText = document.querySelector('#name-input');
const spanTextUsername = document.querySelector('#name-output');

inputUserText.addEventListener('input', evt => {
  const inputUserContent = evt.target.value.trim();
  if (inputUserContent === '') {
    spanTextUsername.textContent = 'Anonymous';
  } else spanTextUsername.textContent = inputUserContent;
});
