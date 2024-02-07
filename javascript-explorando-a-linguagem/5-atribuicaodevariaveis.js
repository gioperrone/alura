console.log("Trabalhando com Atribuição de Variáveis");

const idade = 29;
//let nome = "Ricardo";
//let pode variar, porém sempre que puder utilize a const, pois é mais fácil de debugar
const primeiroNome = "Ricardo"; //const não varia (constante)
const sobrenome = "Bugan";

console.log(primeiroNome, sobrenome);
//ou: console.log(nome + " " + sobrenome);

console.log(`Meu nome é ${primeiroNome} ${sobrenome}`); //interpolação

const nomeCompleto = primeiroNome + sobrenome;
console.log(nomeCompleto);

let contador = 1;
contador = contador + 2;
console.log(`O resultado é ${contador} `);