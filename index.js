const express = require('express')
process.loadEnvFile

const app = express()

const PORT = process.env.PORT

app.get('/', (req, res) => {
    res.send("Hello World!")
})

app.get('/s', (req, res) => {
    res.send("Hello World!")
})

app.listen(PORT, () => {
    console.log("Corriendo")
})