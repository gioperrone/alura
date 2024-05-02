alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 8;
console.log('Número Secreto:' + numeroSecreto);
let chute = prompt('Escolha um número entre 1 e 10');

if (chute == numeroSecreto) {
    alert(`Isso aí! Você descobriu o número secreto. (${numeroSecreto})`);
} else {
    alert('Você errou :(');
};