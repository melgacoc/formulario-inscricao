window.onload = function a() {
  function bPress() {
    const email = document.getElementsByName('email','password');
    //const password = document.getElementById('password');
    //const valid = email == 'tryber@teste.com' && password == '123456'
    for(i = 0; i < email.length; i +=1)
    if (email[i[0]] == 'tryber@teste.com' && email[i[1]] == '123456') {
      alert('Olá, Tryber!');
      } else {
      alert('Email ou senha inválidos.');
      }
    } 
  const button = document.getElementById('send-info');
  button.addEventListener('click', bPress);
};
    
  
  
