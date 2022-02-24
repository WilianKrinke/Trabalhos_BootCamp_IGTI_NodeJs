import express from "express";
import router from './routes/routes.js';

const app = express()
app.use(express.json())

app.use('/cars', router)

app.listen(3000, () =>{
    console.log('Listen 3000')
})