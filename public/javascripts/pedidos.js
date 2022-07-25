window.addEventListener('load', () => {
  let botaoDetalhes = document.querySelector('.botaoDetalhes-6');
  let divDetalhes = document.querySelector('.maisInfos-4');

  botaoDetalhes.addEventListener('click', () => {
    divDetalhes.classList.toggle('maisInfos-4Flex');
  })
})