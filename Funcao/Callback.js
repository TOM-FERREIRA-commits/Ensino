const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice+ 1}. ${nome}`) 
}
fabricantes.forEach(imprimir)

// Exemplo 02
const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]
// Sem callback
let notasBaixas = []
    for (let i in notas) {
        if (notas[i] < 7) {
            notasBaixas.push(notas[i])
        }
    }
console.log(notasBaixas)

// com Callback
notasBaixas = notas.filter(function (nota) {
    return nota < 7 
})
console.log(notasBaixas)

notasBaixas = notas.filter(nota=> nota <7 )
console.log(notasBaixas)