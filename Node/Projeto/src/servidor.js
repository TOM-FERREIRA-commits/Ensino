const porta = 3003

const express = require('express')
const app = express()   // instanciando o express
const bodyParser = require('body-parser')   // body-parser é um middleware que faz a conversão do body da requisição para um objeto
const bancoDeDados = require('./bancodeDados')   // importando o arquivo bancodeDados.js



app.use(bodyParser.urlencoded({ extended: true }))   // use é uma forma de registro de um middleware no express

app.get('/produtos', (req, res, next) => {  
    res.send(bancoDeDados.getProdutos())   // send é uma forma de resposta
})

app.get('/produtos/:id', (req, res, next) => {  // :id é um parâmetro
    res.send(bancoDeDados.getProduto(req.params.id))   // req.params.id é a forma de pegar o parâmetro
})

app.post('/produtos', (req, res, next) => {  // post é uma forma de requisição
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)   
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)   
})


app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto)   
})


app.listen(porta, () => { 
    console.log(`Servidor está executando na porta ${porta}.`)
} )