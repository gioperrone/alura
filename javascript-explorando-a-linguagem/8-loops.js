console.log(`\nTrabalhando com Loops`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);
const idadeComprador = 19;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Salvador";

console.log(`\nDestinos Possíveis:`);
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;
while(contador < 3) { //quantidade de itens na lista

    if(listaDeDestinos[contador] == destino) {
        destinoExiste = true;
        break;
    }

    contador = contador + 1; //também pode ser escrito: "contador +=1;"
}

console.log("Destino existe: ", destinoExiste);