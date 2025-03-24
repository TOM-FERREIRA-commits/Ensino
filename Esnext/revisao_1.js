// let e cosnt  -> não sofrem hoisting
// var -> sofre hoisting
{
    var a = 2    
    let b = 3       
    console.log(b) 
}
console.log(a)

// Template String  -> ``
const produto = 'iPad'  
console.log(`${produto} é caro!`)
console.log(`${produto}
é caro!`) // quebra de linha

// Destructuring
const [l, e, ...tras] = "Cod3r" // l = C, e = o, tras = d3r
console.log(l, e, tras)     // C o [ 'd', '3', 'r' ]    
const [x, , y] = [1, 2, 3] // x = 1, y = 3
console.log(x, y)           // 1 3          
const { idade: i, nome } = { nome: 'Ana', idade: 9 }
console.log(i, nome)        // 9 Ana

// Arrow Function
const soma = (a, b) => a + b
console.log(soma(2, 3)) // 5

// Arrow Function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1() 
lexico2                

// Parâmetro default 
function log(texto = 'Node') {
    console.log(texto)
}   
log()           /
log('Sou mais forte') 

// Operador rest
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}   
console.log(total(2, 3, 4, 5)) // 14

// ES8: Object.values/Object.entries
const obj = { a: 1, b: 2, c: 3 }    
console.log(Object.values(obj)) // [ 1, 2, 3 ]
console.log(Object.entries(obj)) // [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]

// Melhorias na Notação Literal
const nomePessoa = 'Carla'
const pessoa = {
    nome: nomePessoa,
    ola() {
        return 'Oi gente!'
    }
}
console.log(pessoa.nome, pessoa.ola()) // Carla Oi gente!

// Class
class Animal {} 
class Cachorro extends Animal {
    falar() {
        return 'Au au!'
    }
}
console.log(new Cachorro().falar()) // Au au!

