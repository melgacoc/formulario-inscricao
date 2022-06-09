function login(event) {
  event.preventDefault();
  const email = document.querySelector('#email');
  const password = document.querySelector('#password');
    if (email.value === 'tryber@teste.com' && password.value === '123456') {
  alert('Olá, Tryber!');
} else {
  alert('Email ou senha inválidos.');
    }
}
const button = document.querySelector('#send-inf');
button.addEventListener('click', login);
