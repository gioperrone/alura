const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const botoes = document.querySelectorAll('.app__card-button');


function alterarContexto(contexto) {
    botoes.forEach(function(contexto) {
        contexto.classList.remove('active');
    });
    html.setAttribute('data-contexto', contexto);
    banner.setAttribute('src', `/imagens/${contexto}.png`);
    switch (contexto) {

        case "foco":
            titulo.innerHTML = `
            Otimize sua produtividade,<br>
            <strong class="app__title-strong">mergulhe no que importa.</strong>
            `
            break;

        case "descanso-curto":
            titulo.innerHTML = `
            Que tal dar uma respirada?<br>
            <strong class="app__title-strong">Faça uma pausa curta!</strong>
            `
            break;

        case "descanso-longo":
            titulo.innerHTML = `
            Hora de voltar à superfície.<br>
            <strong class="app__title-strong">Faça uma pausa longa.</strong>
            `
            break;

        default:
            break;
    }
}


focoBt.addEventListener('click', () => {
    alterarContexto('foco');
    focoBt.classList.add('active');
});

curtoBt.addEventListener('click', () => {
    alterarContexto('descanso-curto');
    curtoBt.classList.add('active');
});

longoBt.addEventListener('click', () => {
    alterarContexto('descanso-longo');
    longoBt.classList.add('active');
});




//CÓDIGO REPETITIVO:

// focoBt.addEventListener('click', () => {
//     html.setAttribute('data-contexto', 'foco');
//     banner.setAttribute('src', '/imagens/foco.png');
// });

// curtoBt.addEventListener('click', () => {
//     html.setAttribute('data-contexto', 'descanso-curto');
//     banner.setAttribute('src', '/imagens/descanso-curto.png');
// });

// longoBt.addEventListener('click', () => {
//     html.setAttribute('data-contexto', 'descanso-longo');
//     banner.setAttribute('src', '/imagens/descanso-longo.png');
// });