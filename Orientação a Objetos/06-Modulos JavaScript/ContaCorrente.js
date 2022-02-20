/*Quando temos um arquivo criado com a primeira letra maiscula, representa que esse arquivo JS é uma classe*/
export class ContaCorrente{
    agencia;
    cliente;
    _saldo = 0;
    

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }
    depositar(valor){
        if(valor <=0) return;
        this._saldo += valor;
    }
    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}