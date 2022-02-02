// Pensando ainda no nosso sistema de venda de passagem, teremos uma nova regra de negócio a ser implementada: queremos vender pacotes de viagem apenas para pessoas maiores de 18 anos de idade.

console.log("trabalhando com condicionais");
const listaDeDestino = new Array(
    "Salvador",
    "São Paulo",
    "Rio de Janeiro",
);

const idadeComprador = 17;
const estaAcompanhada = false;
const temPassagemComprada = true

console.log("Destinos possívels:");
console.log(listaDeDestino);

if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Boa viagem");
    listaDeDestino.splice(2, 1);  //removendo item
} else {
    console.log("Não é maior de idade não posso vender.")
}

console.log("Embarque: \n\n ")
if (idadeComprador >= 18 && temPassagemComprada == true) {
    console.log("Boa viagem");
}
else {
    console.log("Você não pode embarcar \n\n")
}

console.log(listaDeDestino);


// opreadores logicos
console.log(idadeComprador > 18);
console.log(idadeComprador < 18);
console.log(idadeComprador >= 18);
console.log(idadeComprador <= 18);
console.log(idadeComprador == 18);


//João está criando uma aplicação para calcular o IR a partir do salário. Ele olhou na tabela de IRPF e implementou as regras para 15% e 22.5%:

console.log(".");
console.log(".");
console.log(".");
console.log(".");
console.log(".");

const salario = 3300.0;

if (salario < 2600.0) {
    console.log("A sua aliquota é de 15%");
    console.log("Você pode deduzir até R$ 350");
}
else if (salario < 3750.0) {
    console.log("A sua aliquota é de 22,5%");
    console.log("Você pode deduzir até R$ 636");
}