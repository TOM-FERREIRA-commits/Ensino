function estaEntre(numero, minimo, maximo, inclusivo = false) {
  if (inclusivo) {
    resultado = numero >= minimo && numero <= maximo;
  } else {
    resultado = numero > minimo && numero < maximo;
  }
  // Exibe uma mensagem com base no resultado
  if (resultado) {
    console.log(`O número ${numero} está entre ${minimo} e ${maximo}.`);
  } else {
    console.log(`O Numero ${numero} Não está entre${minimo} e ${maximo}`);
  }

  return resultado; // Retorna true ou false
}

console.log(estaEntre(20, 50, 100)); // false (exclusivo por padrão)
console.log(estaEntre(10, 50, 100, true)); // false
console.log(estaEntre(16, 100, 160)); // false (exclusivo por padrão)
console.log(estaEntre(3, 3, 150)); // false (exclusivo por padrão)
console.log(estaEntre(3, 3, 150, true)); // true (inclusivo)
