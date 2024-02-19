import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"


//CLIENTES
const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("Alice", 88822233309);


//CONTAS CORRENTES
const conta1 = new ContaCorrente(cliente1, 1001);
const conta2 = new ContaCorrente(cliente2, 1002);


//TRANSAÇÕES
conta1.depositar(500);
conta1.transferir(200, conta2);


//CONSOLES
console.log(conta1);
console.log(conta2);
console.log("Número de Contas Correntes:", ContaCorrente.numeroDeContas);