const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 3000

//add middlewares
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/app/:name', (req, res) => {
    res.send({ saludo: `Hola ${req.params.name} :)` })
})

app.listen(port, () => { 
    console.log(`Runinng in port ${port}`)
}) 