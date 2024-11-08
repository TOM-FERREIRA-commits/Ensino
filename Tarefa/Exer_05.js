/*05) Lidar com números em JavaScript pode dar muita dor de cabeça. Você já viu o que acontece quando faz o
seguinte comando no console: console.log(0.1 + 0.2); O resultado será: 0.30000000000000004. Outra coisa
importante de observar, é o fato que o ponto é utilizado no lugar da vírgula e vice versa. Com isso, vamos fazer
um exercício simples para mostrar dinheiro sempre da forma correta. Desenvolva uma função JavaScript para
que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto).
 */
function mostrarValorCorreto(numero) {
    return numero.toFixed(2).replace('.', ',');  // Mantém como string e substitui ponto por vírgula
}

console.log(mostrarValorCorreto(5.1224578979879878979));  // "5,12"
console.log(mostrarValorCorreto(5.334578979879878979));  // "5,33"
console.log(mostrarValorCorreto(5.44578979879878979));   // "5,45"
