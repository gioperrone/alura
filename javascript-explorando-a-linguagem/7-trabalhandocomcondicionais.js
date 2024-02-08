console.log(`Trabalhando com Condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 19;
const estaAcompanhada = false;
const temPassagemComprada = true;

console.log(`Destinos Possíveis:`);
console.log(listaDeDestinos);


//para remover o item somente se o cliente tiver 18 anos ou mais (idadeComprador):
// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idade. Passagem vendida.")
//     listaDeDestinos.splice(1, 1);
// } else if (estaAcompanhada) {
//     console.log("Comprador está acompanhado. Passagem vendida.")
//     listaDeDestinos.splice(1, 1);
// } else {
//     console.log("Comprador não é maior de idade. Por isso, não posso vender.");
// }


if (idadeComprador >= 18 || estaAcompanhada == true) { //"||" significa "ou"; "&&" significa "e"
    console.log("Passagem adquirida. Boa viagem!");
    listaDeDestinos.splice(2, 1);
} else {
    console.log("Lamento. Menores de idade não acompanhados não podem comprar passagens.");
}


console.log("\n\nEmbarque:") // "\n" pula uma linha
if(idadeComprador >= 18 && temPassagemComprada == true) {
    console.log("Boa viagem!")
} else {
    console.log("Você não pode embarcar.")
}


console.log(listaDeDestinos);



// OPERADORES LÓGICOS:
// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador == 18);