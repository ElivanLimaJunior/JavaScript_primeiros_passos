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


const cliente1 = new Cliente();

cliente1.nome = "Alice";
cliente1.cpf = 88822233387;

const cliente2 = new Cliente();

cliente2.nome = "Ricardo";
cliente2.cpf = 11122233309;

const contaCorrenteRicardo = new ContaCorrente();


contaCorrenteRicardo.agencia = 1001;

contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.sacar(50);


console.log(contaCorrenteRicardo);
