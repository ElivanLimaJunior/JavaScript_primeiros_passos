

console.log("\ntrabalhando com condicionais");
const listaDeDestino = new Array(
    "Salvador",
    "São Paulo",
    "Rio de Janeiro",
);

const idadeComprador = 17;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Curitiba";

console.log("\nDestinos possívels:");
console.log(listaDeDestino);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;
while(contador<3){
     
    if (listaDeDestino[contador] == destino){// entre [] é o lugar em que eu quero pegar o item da lista.
    destinoExiste = true;
    break;
    }else{
        destinoExiste = false;
    }

    contador += 1;
}

console.log("Destino existe: ", destinoExiste)