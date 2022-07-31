window.addEventListener('load', () => {
  const botao = document.querySelector('.acessorios-2');
  const divAcessorios = document.querySelector('.acessoriosGrade-2');


  botao.addEventListener('click', () => {
    
    divAcessorios.classList.toggle('acessoriosNone')

  })

  const passwordError = false;

  const errorLogin = document.querySelector('.errorLogin')

  if(passwordError == true){
    errorLogin.style.display = 'flex'
  }
});