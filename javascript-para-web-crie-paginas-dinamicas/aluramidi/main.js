function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if(elemento && elemento.localName === 'audio' ) {
        elemento.play();
    }
    else {
        //alert('Elemento não encontrado');
        console.log('Elemento não encontrado ou seletor inválido.')
    }
}


const listaDeTeclas = document.querySelectorAll('.tecla');


for(let contador = 0; contador < listaDeTeclas.length; contador++) { //length = número de índices da lista
    
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1]; //"1" pois queremos pegar o 2º índice das classes
    const idAudio = `#som_${instrumento}`; //"som_" pois o nome de toda ID começa assim, e o restante varia, sendo essas os mesmos nomes que estão variando nas classes. Observar no index.html.
    

    tecla.onclick = function() { //função anônima
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(evento) {//teclado

        if(evento.code === 'Space' || evento.code === 'Enter' || evento.code === 'NumpadEnter') {
            tecla.classList.add('ativa');
        }
        
    }

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }

}