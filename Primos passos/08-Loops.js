

console.log("\ntrabalhando com condicionais");
const listaDeDestino = new Array(
    "Salvador",
    "São Paulo",
    "Rio de Janeiro",
);

const idadeComprador = 17;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "São Paulo";

console.log("\nDestinos possívels:");
console.log(listaDeDestino);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
while(contador<3){
     
    if (listaDeDestino[contador] == destino){// entre [] é o lugar em que eu quero pegar o item da lista.
    console.log("Destino Existe");
    }else{
        console.log("Destino não existe");
    }

    contador += 1;
}
