import express from "express";
import clientRoute from './src/routes/clientes.routes.js';

const app = express()
app.use(express.json())

app.use('/cliente', clientRoute)




app.listen(3000, () => {
    console.log('Running on 3000')
})