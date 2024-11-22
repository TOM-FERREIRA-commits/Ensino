/* */

function VerificaLados (lado1, lado2, lado3) {
    if(lado1 == lado2 && lado2 == lado3 && lado3 == lado1){
        return "Trinagulo Equilatero"
    }else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3)
        return "Isósceles";
    else{
        return "Escaleno"
    }
}    

console.log(VerificaLados(3, 3, 3))
console.log(VerificaLados(4, 4, 3))
console.log(VerificaLados(6, 5, 1))
