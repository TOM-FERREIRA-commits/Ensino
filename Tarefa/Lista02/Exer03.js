// Função para calcular o salário mensal
function calcularSalario(horasTrabalhadas, valorHora) {
    // Calcula o salário multiplicando as horas pelo valor da hora
    let salarioMes = horasTrabalhadas * valorHora;
    
    // Retorna o salário calculado
    return salarioMes;
}

// Uso da função e exibição do resultado
let salario = calcularSalario(150, 40.5);
console.log("Salário igual a: R$", salario.toFixed(2));