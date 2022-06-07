window.onload() {
// validando o botão enviar
const button = document.getElementsById('send-inf');
button.addEventListener('click', validation);
function validation() {
  let email = document.getElementsByName('email');
  let password = document.getElementsByName('password');
  if (email.values === 'tryber@teste.com' && password.values === '123456'){
    alert('Olá, Tryber!');
  }else{
    alert('Email ou senha inválidos.');
   }
  }
  validation(email,password);
}
