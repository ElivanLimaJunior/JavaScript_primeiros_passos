class Cliente {
    nome;
    cpf;
    agencia;
    saldo;
    rg;
}

const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = "Alice";
cliente1.cpf = 88822233387;
cliente1.agencia = 1001;
cliente1.saldo = 0;
cliente1.rg = 123456789;

cliente2.nome = "Ricardo";
cliente2.cpf = 11122233309;
cliente2.agencia = 1001;
cliente2.saldo = 0;

const cliente3nome = "Elivan";
const cliente3CPF = 22233311109;
const cliente3Agencia = 1001;
const cliente3Saldo = 0;

console.log(cliente1, cliente2)