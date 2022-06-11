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

document.getElementById('submit-btn').disabled = true;
function disabled(event2) {
  event2.preventDefault();
  const button2 = document.getElementById('submit-btn');
  const agreed = document.getElementById('agreement').value;
  if (agreed !== null && agreed !== '') {
    button2.disabled = false;
  } else {
    button2.disabled = true;
  }
}
document.getElementById('agreement').addEventListener('input', disabled);
