const fora = document.querySelectorAll('.mod126_cont2, .mod126_roxa')
const pai = document.querySelector('.mod126_exibir_diamante')
 

 abrir_fechar = () => {

  if(pai.style.display == 'block'){
    fora[0].style.display = 'block'
    fora[1].style.display = 'flex'
    pai.style.display = 'none'
  } else {
    fora[0].style.display = 'none'
    fora[1].style.display = 'none'
    pai.style.display = 'block'
  }


 }