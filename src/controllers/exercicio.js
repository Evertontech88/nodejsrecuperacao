const ServiceExercicio = require('../services/exercicio')

class ControllerExercicio {


    GetExericio(req, res) {
        try{
            const resultado = ServicesExercicio.GetExericio()
            res.send({msg: e.message})
        } catch (e) {
            res.status(500).send({msg: error.message})
        }
    }
    Operacao(req, res) {
        try {
            const resultado = ServicesExercicio.Operacao(req.body.num1, req.body.num2);
            res.status(201).json({ resultado })
        } catch (e) {
            res.status(500).json({ msg: e.message })
        }
    }

    Converter (req, res) {
        try {
            const { milhas, km } = req.body
         
            const resultado = ServicesExercicio
                .Converter(milhas, kms)
            
            res.status(201).json({ msg: resultado })
        } catch (e) {
            res.status(422).json({ msg: e.message })  
        }
    }
    Media(req, res) {
        try {
            const { nota1, nota2, nota3 } = req.body
        
            const resultado = ServicesExercicio
                .Media(nota1, nota2, nota3)
            
            res.status(201).json({ msg: resultado })
        } catch (e) {
            res.status(422).json({ msg: e.message })  
        }
    }
    Tabuada (req, res) {
        try {
            const { salarioHora, horasTrabalhadas } = req.body
          
            const resultado = ServicesExercicio
                .Multiplicar(salarioHora, horasTrabalhadas)
            
            res.status(201).json({ msg: resultado })
        } catch (e) {
            res.status(422).json({ msg: e.message })  
        }
    }
Imposto(req, res) {
    try {
        const { salarioHora, dependentes, aliquota } = req.body
     
        const resultado = ServicesExercicio
            .Imposto(salarioHora, dependentes, aliquota)
        
        res.status(201).json({ msg: resultado })
    } catch (e) {
        res.status(422).json({ msg: e.message })  
    }
}

}

module.exports = new ControllerExercicio()