console.log("Conversão de Tipos");

// Covertendo string's em int's. 
// Quando o valor é em formato de texto, não é possivel fazer operações com ele. Porém é possivel transformar um str em int com a declaração "parseInt".

// Essa declaração deve ser feita antes do número/Variável que desejamos transoformar. E lembrando que a Variável ou número tem de está entre aspas. Segue exemplo:

console.log("ano" + 2020);// Quando fazemos a junção de um texto e um número, eles não são cálculados e sim unidos. Isso acontece por que não é possível somar um texto com um número.

console.log("2" + "2"); // Quando fazemos soma de dois texto não estamos fazendo um cálculo e sim uma concatenação de dois texto. Ou seja unimos os dois textos.

console.log(parseInt("2") + parseInt("2")); // aqui nós temos um exemplo de 2 textos sendo convertidos para valores Inteiro(Int). Dessa forma eles podem ser cálculados.



// Agora e se tentarmos fazer uma divisão de dois texto onde dentro deles contém um número ? ? Veja abaixo:

console.log("10" / "2"); 
// No caso de divisões, o comportamento do leitor é outro. Veremos que o retorno para este caso é 5, mesmo que não tenhamos realizado uma conversão explícita para números inteiros, afinal uma divisão só faz sentido com elementos numéricos.

// Agora e se tentarmos a divísão de um texto por um número ?

console.log("Ricardo" / "2");

//Para este caso teremos o retorno NaN, que siginfica "not a number", ou seja, não é uma operação possível pois não se trata de números.

// O JavaScript é uma linguagem fracamente tipada, então ele sempre tentará realizar conversões de maneira implícita a fim de executar corretamente as declarações, além disso, podemos forçar a conversão por meio do parseInt. inclusive podemos realizar operaões quenão resultam em inteiros, como:

console.log ("7" / "2");

// Será retornado o valor 3.5, um número com casa decimal ou os chamados "pontos flutuantes". Lembrado que se queremos escrever números com casa decimal, devemos sempre utilizar pontos (.) e não vírgulas:

//Se escrevemos o mesmo valor com vírgula, é lido um espaço no lugar da vírgula, algo como 6 5.

console.log(6.5);// Com o ponto é resultado é correto.
console.log(6,5);// sem o ponto vemos que ao invés de ter a virgulá ele retorna um espaço. Isso acontece pq o padrão de números é americano, e a virgulá no JavaScript tem uma função diferente por ex: criar espaço entre dois texto.