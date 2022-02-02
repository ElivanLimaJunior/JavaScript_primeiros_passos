console.log("trabalhando com listas");
// const salvador = "salvador";
// const saoPaulo = "São Paulo";
// const rioDeJaneiro = "Rio de Janeiro";

// console.log("Destinos possíveis:")
// console.log(salvador, saoPaulo, rioDeJaneiro);

//Perceba que cada variável é declarada individualmente, o que não parece uma boa prática. Podemos imprimir estas variáveis, mas esse seria um processo muito trabalhoso, afinal teríamos de digitar muito código para apresentar todos os destinos.

//Para facilitar e agiliar o processo, existe uma estrutura de dados chamada array, em que podemos armazenar diversos dados. A maneira de declarar um array é um pouco diferente de textos e números: utilizamos uma palavra chave new e o tipo da estrutura Array, e assim podemos criar uma nova lista com nossos destinos:

const listaDeDestino = new Array(
    "Salvador",
    "São Paulo",
    "Rio de Janeiro",
);

listaDeDestino.push("Curitiba"); //Adicionando um item na lista acima
console.log("Destinos possívels:");
console.log(listaDeDestino);

//Nossa listaDeDestinos está declarada como const, isto é, seu valor não pode ser alterado, mas conseguimos sim adiconar novos elementos à lista, pois ela não deixa de ser uma lista. Não é possível, contudo, fazer com que listaDeDestinos mude de valor, como:
