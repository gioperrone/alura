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



// TESTANDO MEUS CONHECIMENTOS:

console.log("Testando meus Conhecimentos:");

const taxa = 200
const numeroParcelas = 10;

let preco = 800; //declarando variável
preco = preco + taxa; //atribuindo valor

let valorParcelas;
valorParcelas = preco / numeroParcelas;

console.log(`${primeiroNome} ${sobrenome}, você pagará ${numeroParcelas} parcelas de R$ ${valorParcelas}. O valor total é R$ ${preco}.`);