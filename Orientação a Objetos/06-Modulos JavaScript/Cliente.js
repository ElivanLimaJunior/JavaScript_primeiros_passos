/*Quando temos um arquivo criado com a primeira letra maiscula, representa que esse arquivo JS é uma classe*/

export class Cliente {
    nome;
    _cpf;

    get cpf(){
        this._cpf;
    }

    constructor(nome, cpf){
        this.nome = nome;
        this._cpf = cpf; 
    }
}