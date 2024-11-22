/*10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true*/


function isInteger (num){
    if(num % 3 === 0){
        console.log(`${num} é um inteiro e é divisível por 3`);
        return true
    } else {
        return false; // Retorna false se não for divisível por 3
    }

}

isInteger(10)
console.log(isInteger())

