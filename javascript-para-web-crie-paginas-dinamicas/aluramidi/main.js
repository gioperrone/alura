function tocaSomPom() {
    document.querySelector('#som_tecla_pom').play();
}


const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;


while(contador < listaDeTeclas.length) { //length = número de elemnentos da lista
    listaDeTeclas[contador].onclick = tocaSomPom;

    contador += 1;

    console.log(contador);
}