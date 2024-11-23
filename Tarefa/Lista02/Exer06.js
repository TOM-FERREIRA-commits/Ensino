
function inverso(valor){
    if(typeof valor === "boolean" ){
        return !valor 
    }
    else if (typeof valor === "number"){
        return -valor
    }
    else{
        return `Esperado booleano ou número, mas o parâmetro é do tipo ${typeof valor}.`; 
    }
}
console.log(inverso(4))
console.log(inverso(-10))
console.log(inverso(true))
console.log(inverso(false))
console.log(inverso(null))
console.log(inverso(String))



