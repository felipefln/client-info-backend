const mongoose = require('mongoose')

const ClienteSchema = new mongoose.Schema({
    imagem: String,
    nome: String,
    email: String,
    cpf: Number,
    telefone: Number,
}, {
    toJSON: {
        virtuals: true
    }
})
ClienteSchema.virtual('imagem_url').get(function() {
    return `https://10.0.0.100:5000/files/${this.imagem}`
})
module.exports = mongoose.model('Cliente', ClienteSchema)