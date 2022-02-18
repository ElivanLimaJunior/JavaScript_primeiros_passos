class Cliente {
    nome;
    cpf;
}

class ContaCorrente{
    agencia;
    saldo;

    sacar(valor){
        if(this.saldo >= valor){
            this.saldo -= valor;
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

contaCorrenteRicardo.saldo = 0;
contaCorrenteRicardo.agencia = 1001;

console.log(contaCorrenteRicardo.saldo);
contaCorrenteRicardo.saldo += 200;
contaCorrenteRicardo.saldo += 100;
contaCorrenteRicardo.saldo += -1; 
console.log(contaCorrenteRicardo.saldo);
contaCorrenteRicardo.sacar(50);


console.log(contaCorrenteRicardo.saldo);
console.log(cliente1);
console.log(cliente2);
