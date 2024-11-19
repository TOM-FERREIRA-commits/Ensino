const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop()
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento da lista
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

// Splice Adicionar ou remover elementso
// adicionar 
pilotos.splice(2, 0, 'Botas', 'Massa')
console.log(pilotos)

// Remover
pilotos.splice(3, 1)
console.log(pilotos)

// Novo array
const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)