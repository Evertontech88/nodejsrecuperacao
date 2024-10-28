const ServiceExercicio = require('../services/exercicio')

class ControllerExercicio {
    GetExericio(req, res) {
        try {
            const resultado = ServicesExercicio.GetExericio();
            res.status(200).send({ data: resultado });
        } catch (error) {
            res.status(500).send({ msg: error.message });
        }
    }

    Operacao(req, res) {
        try {
            const resultado = ServicesExercicio.Operacao(req.body.num1, req.body.num2);
            res.status(201).json({ data: resultado });
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    }

    Converter(req, res) {
        try {
            const { milhas, km } = req.body; // Fixed variable name
            
            const resultado = ServicesExercicio.Converter(milhas, km);
            res.status(201).json({ data: resultado });
        } catch (error) {
            res.status(422).json({ msg: error.message });
        }
    }

    Media(req, res) {
        try {
            const { nota1, nota2, nota3 } = req.body;
            const resultado = ServicesExercicio.Media(nota1, nota2, nota3);
            res.status(201).json({ data: resultado });
        } catch (error) {
            res.status(422).json({ msg: error.message });
        }
    }

    Tabuada(req, res) {
        try {
            const { salarioHora, horasTrabalhadas } = req.body;
            const resultado = ServicesExercicio.Multiplicar(salarioHora, horasTrabalhadas);
            res.status(201).json({ data: resultado });
        } catch (error) {
            res.status(422).json({ msg: error.message });
        }
    }

    Imposto(req, res) {
        try {
            const { salarioHora, dependentes, aliquota } = req.body;
            const resultado = ServicesExercicio.Imposto(salarioHora, dependentes, aliquota);
            res.status(201).json({ data: resultado });
        } catch (error) {
            res.status(422).json({ msg: error.message });
        }
    }
}

module.exports = new ControllerExercicio();
