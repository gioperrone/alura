console.log(`Trabalhando com Condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 14;
const estaAcompanhada = false;

console.log(`Destinos Possíveis:`);
console.log(listaDeDestinos);

//para remover o item somente se o cliente tiver 18 anos ou mais (idadeComprador):
if(idadeComprador >= 18) {
    console.log("Comprador maior de idade. Passagem vendida.")
    listaDeDestinos.splice(1,1);
} else {
    //a pessoa é menor de idade
    if(estaAcompanhada){
        console.log("Comprador está acompanhado. Passagem vendida.")
        listaDeDestinos.splice(1,1);
    } else {
        console.log("Comprador não é maior de idade. Por isso, não posso vender.");
    }
}

console.log(listaDeDestinos);



// OPERADORES LÓGICOS:
// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador == 18);