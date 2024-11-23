function maiorOuIgual(n1, n2) {
  if (typeof n1 !== "number" || typeof n2 !== "number") {
    return false;
  }
  return n1 >= n2;
}
console.log(maiorOuIgual(1, 2));
console.log(maiorOuIgual(5, 2));
console.log(maiorOuIgual(2, 2));
