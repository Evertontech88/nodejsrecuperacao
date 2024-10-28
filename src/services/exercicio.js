class ServiceExercicio {

    Converter(milhas, km) {
        if (isNaN(milhas) || isNaN(km)) {
            throw new Error('É necessário que sejam enviados 2 números. Nem mais nem menos.');
        }
        // Supondo que você queira converter milhas para quilômetros
        const resultado = Number((milhas * 1.60934).toFixed(2)); // Exemplo: converter milhas para quilômetros
        return resultado;
    }

    Operacao(num1, num2) {
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error('É necessário que sejam enviados 2 números.');
        }
        const soma = Number(num1) + Number(num2);
        const subtracao = Number(num1) - Number(num2);
        const divisao = num2 !== 0 ? Number(num1) / Number(num2) : 'Divisão por zero não é permitida';
        const multiplicacao = Number(num1) * Number(num2);
        return { soma, subtracao, divisao, multiplicacao };
    }

    Media(num1, num2, num3) {
        if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
            throw new Error('É necessário que sejam enviados 3 números. c');
        }
        const resultado = Number(((Number(num1) + Number(num2) + Number(num3)) / 3).toFixed(2));
        return resultado;
    }

    Imposto(salarioHora, dependentes, aliquota) {
        if (isNaN(salarioHora) || isNaN(dependentes) || isNaN(aliquota)) {
            throw new Error('É necessário que sejam enviados valores numéricos para salário, dependentes e alíquota.');
        }
        const desconto = salarioHora * dependentes * aliquota;
        const resultado = Number((salarioHora - desconto).toFixed(2));
        return resultado;
    }

    Tabuada(num1) {
        if (isNaN(num1) || num1 < 0) {
            throw new Error('Envie apenas números positivos');
        }
        const resultado = Array.from({ length: 10 }, (_, i) => (i + 1) * num1);
        return resultado;
    }

}

module.exports = new ServiceExercicio();
