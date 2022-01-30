console.log("Operações Aritiméticas");

console.log(2+2);

// No computador assim como na mátematica, ele faz primeiro a multiplicação e divisão antes da soma e subtração. 
// Por isso o valor abaixo é impresso de maneira incorreta.
console.log(10 + 8 * 2);

// A maneira certa de se fazer quando numa operação envolve divisão e multiplicação junto a soma e subtração, é colocar os valores entre parenteses antes de serem multiplicados ou divididos.

console.log((10 + 8) * 2);

// Agora o que acontece se tentarmos somar texto com números ? 
// Ou tentarmos somar texto com texto ?
// Vale lembrar que quando colocamos entre "aspas" mesmo que seja um número, ele é considerado como um texto.

console.log("ano" + 2020);
console.log("2" + "2")