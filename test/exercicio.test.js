const ServiceExercicio = require('../src/services/exercicio')
const { describe, it, expect } = require('@jest/globals')


describe('Testes da função Teste: ', () => {
    
    it('Somar dois números positivos', () => {
        const resultado = ServiceExercicio.Media(1, 2);
        expect(resultado).toBe(3)
    })

    it('Somar um número negativo com um positivo', () => {
        const resultado = ServiceExercicio.Imposto(-1, 2);
        expect(resultado).toBe(1)
    })

    it('Somar um número positivo com um negativo', () => {
        const resultado = ServiceExercicio.Converter(1, -2);
        expect(resultado).toBe(-1)
    })

    it('Somar um número negativo com zero', () => {
        const resultado = ServiceExercicio.Tabuada(-1, 0);
        expect(resultado).toBe(-1)
    })
    
    it('Somar zero com um número negativo', () => {
        const resultado = ServiceExercicio.Operacao(0, -2);
        expect(resultado).toBe(-2)
    })

    it('Somar um número com uma 1', () => {
        const funSomar = () => ServiceExercicio.Somar(1, 'a');
        expect(funSomar).toThrow('Informe um número')
    })
    
})

describe('Testes da função : ', () => {
    
})