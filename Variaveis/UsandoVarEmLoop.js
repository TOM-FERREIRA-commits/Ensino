for(var i = 0; i < 10; i++){
    console.log(i)
}
console.log('i = ',i)

//Usando Var em loop #2
//const funcs = []
for (var i = 0; i < 10; i++){
    funcs.push(function() {
     console.log(i )   
    })
}

funcs[2]()
funcs[8]()



// Usando let em loop
for(let i = 0; i < 10; i++){
    console.log(i)
}
console.log('i = ',i)

//Usando Let em loop#2

const funcs = []
for (let i = 0; i < 10; i++){
    funcs.push(function() {
     console.log(i )   
    })
}

funcs[2]()
funcs[8]()