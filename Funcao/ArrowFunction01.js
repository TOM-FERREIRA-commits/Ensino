let dobro = function (a) {
    return 2 * a
}

dobro= (a ) => {
    return 2 * a
}

dobro = a => 2 * a  // Return Implicito
console.log(dobro(Math.PI))

let ola = function() {
    return 'Ola'
}

ola = () => 'ola'
console.log(ola())