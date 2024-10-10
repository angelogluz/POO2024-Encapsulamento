import { ERRO_VALOR_TRANSACAO, SALDO_INSUFICIENTE } from "./consts";
import { ContaBancaria } from "./ContaBancaria";

test("Deve realizar um depósito quando o valor for positivo", () => {

    const conta: ContaBancaria = new ContaBancaria();

    conta.depositar(100);

    expect(conta.consultarSaldo()).toBe(100);

});

test("Deve lançar um erro ao tentar depositar um valor negativo", () => {

        const conta: ContaBancaria = new ContaBancaria();

        expect(() => conta.depositar(-100)).toThrow(ERRO_VALOR_TRANSACAO);


});

test("Deve ser possível realizar um saque", () => {

    const conta: ContaBancaria = new ContaBancaria();

    conta.depositar(100);
    conta.sacar(50);

    expect(conta.consultarSaldo()).toBe(50);
});

test("Deve lançar um erro ao tentar sacar um valor maior que o saldo", () => {

    const conta: ContaBancaria = new ContaBancaria();

    conta.depositar(100);

    expect(() => conta.sacar(200)).toThrow(SALDO_INSUFICIENTE);

});

test("Deve lançar um erro ao tentar sacar um valor negativo", () => {
    const conta: ContaBancaria = new ContaBancaria();

    conta.depositar(100);

    expect(() => conta.sacar(-200)).toThrow(ERRO_VALOR_TRANSACAO);

});

