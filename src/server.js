const express = require('express')
const routes = require('./routes')
const mongoose = require('mongoose')

const http = require('http')
const cors = require('cors')
const path = require('path')

const app = express()
const server = http.Server(app)

//utilizado Mongoose como dependencia para ajudar na conexao entre NODEJS e MongoDB
mongoose.connect('mongodb+srv://add-clientes:add-clientes@clientes-p2oc2.mongodb.net/clientes?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    keepAlive: true
})
.then(() => console.log('DB Conectado :)!'))
.catch(err => {
console.log(Error, err.message);
});




app.use(cors())
app.use(express.json())
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')))

app.use(routes)

server.listen(Number(process.env.PORT) || 5000);