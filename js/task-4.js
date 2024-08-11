const formLoginSubmit = document.querySelector('.login-form');

const onFormSubmit = evt => {
  evt.preventDefault();

  const formUser = {
    email: formLoginSubmit.elements.email.value.trim(),
    password: formLoginSubmit.elements.password.value.trim(),
  };
  if (formUser.email === '' || formUser.password === '') {
    alert('All form fields must be filled in');
  }
  console.log(formUser);
  formLoginSubmit.reset();
};

formLoginSubmit.addEventListener('submit', onFormSubmit);
