console.log("Trabalhando com atribuição de variáveis")
const idade = 29;
let primeiroNome = "Ricardo";
const sobrenome = "Bugan"

console.log(primeiroNome + sobrenome);

// como fazer para separar essas duas variáveis ?
//Existem duas formas:

//Usando uma virgula no final da declaração:
console.log(primeiroNome, sobrenome);
//Ou fazendo uma concatenação de um texto vázio:
console.log(primeiroNome + " " + sobrenome);
// ambos dão o mesmo resultado.

// Temos outra maniera de trabalhar com strings. Este que é com a craze > ` .

console.log(`meu nome é ${primeiroNome}`);
//Conseguimos também usar um ${} para inserirmos uma variavel no meio de uma String. 
console.log(`meu nome é ${primeiroNome} ${sobrenome}`)
//Conseguimos por mais de uma variável dentro de uma string.

//Também é possível reescrever uma variável já declarada anteriormente. veja o exemplo abaixo:

primeiroNome = primeiroNome + sobrenome;

//Dessa forma nós estamos pegando a variável nome e juntando/somando a variável sobrenome.
//Porém ao fazer isso, recebemos de retorno um erro: Assignment to constant variable.  
//Essa mensagem pode ser um pouco confusa ao ser traduzida, constant é um tipo de variável que não pode ser modificada uma vez que sua atribuição original foi feita.
// Em nosso código, atribuímos todas as nossas variáveis como const, então a sobrescrição de dados não é possível. Mudaremos então os tipo das variável nome para let, pois ele permite mudanças.

console.log(primeiroNome);

//O JavaScript permite que mudemos o tipo das variáveis livremente, mas essa não é uma boa prática, o correto é a atribuição seja mais constante, uma vez que a mudança de estados na programação é algo complexo que pode desencadiar em muitos erros.

//A definição "let" existe e eventualmente precisaremos utilizá-la, mas podemos encontrar novos caminhos para manter nosso código mais condizente com as boas práticas. 
//Como por exemplo criar uma nova variável que condense nome e sobrenome:

const nomeCompleto = primeiroNome + sobrenome;
console.log(nomeCompleto);

//nomeCompleto passa a ser uma nova variável constante que é constituída por outras duas, também constantes e seus valores não poderão ser modificados.
// por exemplo: nomeCompleto = 2; Isso não vai funcionar.

//Existem variáveis que devem ter um estado inconstante, e neste caso usamos o letpara defini-las, como por exemplo um contador que varia de números.




// Extra: Atalho para mudar todas as ocorrências de uma vez ?

//usando o atalho/comando F2 após selecionar a palavra que desejamos substituir as ocorrências, conseguimos alterar todas de uma véz só.