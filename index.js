const express = require('express');
const router = require('./src/routes/exercicio');

const app = express();

    
   res.json({ message: resultado})

app.use(express.json());

app.use(router)

app.listen(3000, () => {
    console.log('servidor está rodando na porta 3000')
})