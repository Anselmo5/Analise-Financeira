const express = require('express')
const cors = require('cors')
const router = require('./routes')
const app = express()


app.use(express.json())
app.use(cors())
app.use(router)

app.get('/', (req,res) => { //Primeira rota feita
   res.send('Hello Dev')
})

app.listen(3003, () => {
   console.log('server iniciado');
}) 