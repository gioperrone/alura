console.log("Conversão de Tipos");

console.log("ano" + 2020);
console.log("2" + "2");
console.log(parseInt("2") + parseInt("2")); //Conversão de tipos

console.log("7" / "2"); //Exceto a soma, que é interpretado como concatenação, todo tipo de conta o JS tentará resolver, mesmo sendo em formato de texto. O JS faz a conversão pra número automaticamente.

console.log("Ricardo" / "2") //Not a Number (NaN)

console.log(6.5);
console.log(6,5); //A vírgula serve para funções especiais na linguagem