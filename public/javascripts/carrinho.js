window.addEventListener('load', () => {
  let acessorioBotao = document.querySelector('.acessorios-5');
  let acessorios = document.querySelector('.acessoriosAdd-5');
  

  let botaoDiminuir = document.querySelector('.diminuir-7');
  let botaoAumentar = document.querySelector('.aumentar-7');
  let botaoDeletar  = document.querySelector('.produto1Delete-6');
  let cancelarDeletar = document.querySelector('.cancelar-7');
  let confirmarDeletar = document.querySelector('.confirmar-7');

  acessorioBotao.addEventListener('click', () => {
    acessorios.classList.toggle('acessoriosAddNone-5');
  })

  botaoDiminuir.addEventListener('click', () => {
    window.location.href = "/diminuirCarrinho"

  })

  botaoAumentar.addEventListener('click', () => {
    window.location.href = "/aumentarCarrinho"
  })

  botaoDeletar.addEventListener('click', () => {
    let blur = document.querySelector('.blur-1');
    let confirmarDeletar = document.querySelector('.confirmeDeletar-5');

    blur.style.display = 'flex';
    confirmarDeletar.style.display = 'flex'
  })

  cancelarDeletar.addEventListener('click', () => {
    let blur = document.querySelector('.blur-1');
    let confirmarDeletar = document.querySelector('.confirmeDeletar-5');

    blur.style.display = 'none';
    confirmarDeletar.style.display = 'none'
  })
  
  confirmarDeletar.addEventListener('click', () => {
    window.location.href = "/deletarCarrinho"
  })

})