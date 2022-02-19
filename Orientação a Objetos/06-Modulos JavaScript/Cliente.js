/*Quando temos um arquivo criado com a primeira letra maiscula, representa que esse arquivo JS é uma classe*/

class Cliente {
    nome;
    cpf;
}

class ContaCorrente{
    agencia;
    #saldo = 0;

    sacar(valor){
        if(this.#saldo >= valor){
            this.#saldo -= valor;
        }
    }
    depositar(valor){
        if(valor >0){
            this.saldo +=valor;
            console.log(this.#saldo)
        }
    }
}
