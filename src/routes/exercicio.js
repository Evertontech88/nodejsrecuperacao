const express = require('express');
const ControllerExercicio = require('../controllers/exercicio')

const router = express.Router()

router.get("/",ControllerExercicio.GetExericio)
router.post("/exercicio5/", ControllerExercicio.Converter)
router.post("/exercicio11/", ControllerExercicio.Operacao)
router.post("/exercicio17/", ControllerExercicio.Media)
router.post("/exercicio24", ControllerExercicio.Tabuada)
router.post("/exercicio16/", ControllerExercicio.Imposto)


module.exports = routes;