const ServiceExercicio = require('../src/services/exercicio');
const { describe, it, expect } = require('@jest/globals');

describe('Testes das funções do ServiceExercicio', () => {

    describe('Teste da função Media', () => {
        it('Deve calcular a média de três números', () => {
            const resultado = ServiceExercicio.Media(1, 2, 3);
            expect(resultado).toBe(2);
        });
        
        it('Deve lançar erro se algum parâmetro não for número', () => {
            const funMedia = () => ServiceExercicio.Media(1, 'a', 3);
            expect(funMedia).toThrow('É necessário que sejam enviados 3 números. Nem mais nem menos.');
        });

        // Edge case: very large numbers
        it('Deve calcular a média de três números grandes', () => {
            const resultado = ServiceExercicio.Media(1e10, 1e10, 1e10);
            expect(resultado).toBe(1e10);
        });
    });

    describe('Teste da função Imposto', () => {
        it('Deve calcular o imposto corretamente', () => {
            const resultado = ServiceExercicio.Imposto(1000, 2, 0.1);
            expect(resultado).toBe(980);
        });

        it('Deve lançar erro se algum parâmetro não for número', () => {
            const funImposto = () => ServiceExercicio.Imposto(1000, 'b', 0.1);
            expect(funImposto).toThrow('É necessário que sejam enviados valores numéricos para salário, dependentes e alíquota.');
        });

        // Edge case: zero dependents
        it('Deve calcular o imposto corretamente com zero dependentes', () => {
            const resultado = ServiceExercicio.Imposto(1000, 0, 0.1);
            expect(resultado).toBe(900);
        });
    });

    describe('Teste da função Converter', () => {
        it('Deve converter milhas para quilômetros', () => {
            const resultado = ServiceExercicio.Converter(1, 0); 
            expect(resultado).toBeCloseTo(1.60934, 5);
        });

        it('Deve lançar erro se algum parâmetro não for número', () => {
            const funConverter = () => ServiceExercicio.Converter(1, 'a');
            expect(funConverter).toThrow('É necessário que sejam enviados 2 números. Nem mais nem menos.');
        });

        // Edge case: very small number
        it('Deve converter milhas para quilômetros com número pequeno', () => {
            const resultado = ServiceExercicio.Converter(0.0001, 0);
            expect(resultado).toBeCloseTo(0.000160934, 5);
        });
    });

    describe('Teste da função Operacao', () => {
        it('Deve realizar operações corretamente', () => {
            const resultado = ServiceExercicio.Operacao(2, 3);
            expect(resultado.soma).toBe(5);
            expect(resultado.subtracao).toBe(-1);
            expect(resultado.multiplicacao).toBe(6);
            expect(resultado.divisao).toBeCloseTo(0.66667, 5);
        });

        it('Deve lançar erro se algum parâmetro não for número', () => {
            const funOperacao = () => ServiceExercicio.Operacao(1, 'a');
            expect(funOperacao).toThrow('É necessário que sejam enviados 2 números. Nem mais nem menos.');
        });

        // Edge case: division by zero
        it('Deve lançar erro ao tentar dividir por zero', () => {
            const funOperacao = () => ServiceExercicio.Operacao(1, 0);
            expect(funOperacao).toThrow('Divisão por zero não é permitida.');
        });
    });

    describe('Teste da função Tabuada', () => {
        it('Deve gerar a tabuada de um número positivo', () => {
            const resultado = ServiceExercicio.Tabuada(2);
            expect(resultado).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);
        });

        it('Deve lançar erro se o número for negativo', () => {
            const funTabuada = () => ServiceExercicio.Tabuada(-1);
            expect(funTabuada).toThrow('Envie apenas números positivos');
        });

        // Edge case: zero
        it('Deve gerar a tabuada de zero', () => {
            const resultado = ServiceExercicio.Tabuada(0);
            expect(resultado).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        });
    });
});
