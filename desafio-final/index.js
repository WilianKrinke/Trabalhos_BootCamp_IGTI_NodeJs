import express from "express";
import autorRoute from './src/routes/author.routes.js';
import clientRoute from './src/routes/clientes.routes.js';
import livroRoute from './src/routes/livro.routes.js';

const app = express()
app.use(express.json())

app.use('/cliente', clientRoute)
app.use('/autor', autorRoute)
app.use('/livro', livroRoute)

app.listen(3000, () => {
    console.log('Running on 3000')
})