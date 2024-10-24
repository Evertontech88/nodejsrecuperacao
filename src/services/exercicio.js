class ServiceExercicio {

   
    Converter(num1, num2) {
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error('É necessário que sejam enviados 2 números. Nem mais nem menos.')
        }
        const resultado = Number((Number(num1) * Number(num2)).toFixed(2))
        return resultado
    }

    Operacao(num1, num2) {
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error('É necessário que sejam enviados 2 números. Nem mais nem menos.')
        }
        const resultado = Number((Number(num1) + Number(num2)(num1 - num2) (num1 / num2) (num1 * num2)).toFixed(2))
        return resultado
    }

    Media(num1, num2, num3) {
        if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
            throw new Error('É necessário que sejam enviados 3 números. Nem mais nem menos.')
        }
        const resultado = Number((Number(num1) * Number(num2) * Number(num3) / 3 ).toFixed(2))
        return resultado
    }

    Imposto(num1, num2) {
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error('É necessário que sejam enviados 2 números. Nem mais nem menos.')
        }else if ((num1 == 0) || (num2 == 0)){
            throw new Error('Não é possível dividir por 0')
        }
        const resultado = Number((Number(num1) * Number(num2)).toFixed(2))
        return resultado
    }

    Tabuada(num1) {
        if (isNaN(num1) || (num1 < 0)) {
            throw new Error('Envie apenas número positivos')
        }
        const resultado = Number(Math.sqrt(num1).toFixed(2))
        return resultado
    }

    }


module.exports = new ServiceExercicio()