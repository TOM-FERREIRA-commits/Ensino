/*03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente */
function calculaExpoente(base, expoente){
    return base ** expoente
}

console.log(calculaExpoente(2, 9))

function calculaExpoente(base, expoente){
    return Math.pow(base, expoente)
}
console.log(calculaExpoente(2, 9))
