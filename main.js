function tocaSomPom() {
  document.querySelector('#som_tecla_pom').play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');
console.log(listaDeTeclas);

listaDeTeclas[0].onclick = tocaSomPom;
