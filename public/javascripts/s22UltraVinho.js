window.addEventListener('load', () => {
  const botao = document.querySelector('.acessorios-2');
  const divAcessorios = document.querySelector('.acessoriosGrade-2');
  let adicionarAcessorio = document.querySelector('.acessorio1ParagrafoAdicionar-5');

  botao.addEventListener('click', () => {
    
    divAcessorios.classList.toggle('acessoriosNone')

  })

  const passwordError = false;

  const errorLogin = document.querySelector('.errorLogin')

  if(passwordError == true){
    errorLogin.style.display = 'flex'
  }

  adicionarAcessorio.addEventListener('click', () => {
    window.location.href = "/adicionarAcessorioCarrinho"
  })

  
});