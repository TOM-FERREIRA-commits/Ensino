 // criar de forma literal
 function fun1() {}

 // Armazenar em uma variavel
 const fun2 = function() {}

 //Armazenae em array
 const array = [function (a, b) {return a + b}, fun1, fun2]

 // Armazenar atributo em objeto
 const obj = {}
 obj.falar = function () {return 'Opa'}
 console.log(obj.falar())

 // Passar funcao como parametro
 function run(fun){
    fun()
 }
run(function() {console.log('Executando') })

// Funcao oode retornar/ conter uma funcao
function soma(a, b){
    return function (c) {
        console.log(a + b + c)
    }
}
soma(2, 3)(4)