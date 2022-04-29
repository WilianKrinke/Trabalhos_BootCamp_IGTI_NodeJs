import express from "express";

const app = express()
app.use(express.json())

app.use('/cliente', clientRoute)




app.listen(3000, () => {
    console.log('Running on 3000')
})