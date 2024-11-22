/*01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.
 */

function operacoesBasicas(a, b) {
    console.log("soma", a + b)
    console.log("subtracao", a - b)
    console.log("Mutiplicaçao", a * b)
    console.log("Divisao", b !== 0 ? a/ b :"Divisao por zero nao exista")
}
operacoesBasicas(4,2 )