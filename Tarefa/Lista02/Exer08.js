function multiplicar(n1, n2){
    let resultado = 0

    if(n1 < 0 || n2 < 0){
        return "Os numeros devem ser inteiros e nao-negativos"
    }
    for(i = 0; i < n2; i++){
        resultado += n1
    }
    return resultado
}
// Exemplos de uso
console.log(multiplicar(5, 3));  // 15
console.log(multiplicar(0, 10)); // 
console.log(multiplicar(7, 0));  // 
console.log(multiplicar(8, 8));  // 64
console.log(multiplicar(3, -1)); // Mensagem de erro
console.log(multiplicar(-3, 91)); // Mensagem de erro