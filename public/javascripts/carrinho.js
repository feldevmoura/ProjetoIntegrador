window.addEventListener('load', () => {
  let acessorioBotao = document.querySelector('.acessorios-5');
  let acessorios = document.querySelector('.acessoriosAdd-5');

  acessorioBotao.addEventListener('click', () => {
    acessorios.classList.toggle('acessoriosAddNone-5');
  })
})