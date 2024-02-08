console.log(`Trabalhando com Listas`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
); //criando uma nova lista (Array)

listaDeDestinos.push(`Curitiba`, `Manaus`); //adicionando itens na lista
console.log(`Destinos Possíveis:`);
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1); //removendo itens da lista (posição do item, quantidade de itens) ATENÇÃO: A CONTAGEM COMEÇA EM 0 NÃO EM 1, por isso SP será removido
console.log(listaDeDestinos);

console.log(listaDeDestinos[1]); //[1] irá exibir somente o item 1 da lista (no caso, será RJ porque SP já foi removido no splice)