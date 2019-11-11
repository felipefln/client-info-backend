const express = require('express')
const multer = require('multer')
const uploadConfig = require('./config/upload')
const ClienteController = require('./controllers/ClienteController')


const routes = express.Router()
const upload = multer(uploadConfig)

//rota de listagem dos clientes já inseridos
routes.get('/clientes', ClienteController.listar)


//rota de criacao do cliente com suas informacoes e sua imagem
routes.post('/criar', upload.single('imagem'), ClienteController.criar)

module.exports = routes;