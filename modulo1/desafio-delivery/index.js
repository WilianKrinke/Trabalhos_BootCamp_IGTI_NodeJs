import express from "express";
import routes from "./routes/delivery.routes.js";

const app = express()

app.use('/delivery', routes)

app.listen(3000, () => {
    console.log('Listen 3000')
})