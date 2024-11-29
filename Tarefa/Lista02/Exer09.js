function repetir(elemento, vezes) {
    let resultado = []

    for (i = 0; i < vezes; i++) {
        resultado.push(elemento)
    }
    return resultado

}

console.log(repetir(5, 5))