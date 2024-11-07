// Factory simples
function criarPessoa () {
    return{
        nome: 'Ana',
        sobrenome:'Silva'
    }
}
console.log(criarPessoa())

// Factory exemplo 2

function criarProduto ( nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1   
    }
}
console.log(criarProduto('Notebook', 2199.49))
console.log(criarProduto('ipad', 1199.49))