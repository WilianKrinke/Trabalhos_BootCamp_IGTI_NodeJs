import express from "express";
import route from "./routes/teste.route.js";

const app = express()


app.use('/teste', route)


app.listen(3000, ()=>{
    console.log('Listen 3000')
})