console.log("trabalhando com listas");
// const salvador = "salvador";
// const saoPaulo = "São Paulo";
// const rioDeJaneiro = "Rio de Janeiro";

// console.log("Destinos possíveis:")
// console.log(salvador, saoPaulo, rioDeJaneiro);

//Perceba que cada variável é declarada individualmente, o que não parece uma boa prática. Podemos imprimir estas variáveis, mas esse seria um processo muito trabalhoso, afinal teríamos de digitar muito código para apresentar todos os destinos.

//Para facilitar e agiliar o processo, existe uma estrutura de dados chamada array, em que podemos armazenar diversos dados. A maneira de declarar um array é um pouco diferente de textos e números: utilizamos uma palavra chave new e o tipo da estrutura Array, e assim podemos criar uma nova lista com nossos destinos:

const listaDeDestino = new Array( // por que new array ? NEW é uma palavra reservada da linguagem. Inclusive não conseguimos criar variável com o nome new.
    "Salvador",
    "São Paulo",
    "Rio de Janeiro",
);

listaDeDestino.push("Curitiba"); //Adicionando um item na lista acima
console.log("Destinos possívels:");
console.log(listaDeDestino);

//Nossa listaDeDestinos está declarada como const, isto é, seu valor não pode ser alterado, mas conseguimos sim adiconar novos elementos à lista, pois ela não deixa de ser uma lista. Não é possível, contudo, fazer com que listaDeDestinos mude de valor, como:


// Removendo elementos

listaDeDestino.splice(1,1); // removendo São paulo. Lembrando que assim como no python a contagem começa em 0. Então São Paulo é 1.
console.log(listaDeDestino);
console.log(listaDeDestino[1]); //aqui nós imprimimos apenas o item 1 da lista acima, que é Rio de janeiro.
console.log(listaDeDestino[1], listaDeDestino[0]); // Podemos selecionar com a numeração qual número exatamente queremos imprimir da lista.

// Resuminho. [] no final da variável ela determina qual item iremos acessar da lista criada.
// Splice: splice retira elementos da lista. São usados 2 números: O primeiro representa o inicio da remoção o item na lista, e o segundo representa o fim dessa seleção.