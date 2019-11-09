const Cliente = require('../models/Cliente')

module.exports = {
    async listar(req, res) {

        const cliente = await Cliente.find()

        return res.json(cliente);
    },
    async criar(req, res) {
        const { filename } = req.file;
        const { nome, email, cpf, telefone } = req.body;

        const cliente = await Cliente.create({
            imagem: filename,
            nome,
            email,
            cpf,
            telefone
        })
        return res.json(cliente)
    }

    
}