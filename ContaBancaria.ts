import { ERRO_VALOR_TRANSACAO, SALDO_INSUFICIENTE } from "./consts";

export class ContaBancaria{
 
    private _saldo: number;

    constructor() {
        this._saldo = 0;
    }

    public depositar(valor: number) {
        if(valor < 0) {
            throw new Error(ERRO_VALOR_TRANSACAO);
        }
        this._saldo += valor;
    }

    public consultarSaldo(): number {
        return this._saldo;
    }

    public sacar(valor: number) {
        this.validaLimite(valor);
        this.validaOperacao(valor);

        this._saldo -= valor;
    }

    private validaLimite(valor: number): void{
        const naoTemLimite: boolean = valor > this._saldo;
        if(naoTemLimite) {
            throw new Error(SALDO_INSUFICIENTE);
        }
    } 
    private validaOperacao(valor: number): void{
        if(valor < 0) {
            throw new Error(ERRO_VALOR_TRANSACAO);
        }   
    }



    

}