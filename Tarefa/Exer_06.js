/*6) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos. */

function jurosSimples(capitalI, taxaJ, tempoI){
 
     let juros= capitalI * taxaJ * tempoI
     let montante = capitalI + juros
     return{
        juros: juros,
        montante: montante
     }
}

console.log(jurosSimples(1000, 0.05, 3))