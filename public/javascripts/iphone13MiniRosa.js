window.addEventListener('load', () => {
  const botao = document.querySelector('.acessorios-2');
  const divAcessorios = document.querySelector('.acessoriosGrade-2');


  botao.addEventListener('click', () => {
    
    divAcessorios.classList.toggle('acessoriosNone')

  })
});