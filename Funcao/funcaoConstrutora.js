function Carro(velocidadeMaxima =200, delta= 5){
    //atributo privado 
    let velocidadeAtual = 0 

    //metodo publico
    this.acelerar = function (){
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        }else{
            velocidadeAtual = velocidadeMaxima
        }

    }
    // metodo Publico 
    this.getvelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const Uno = new Carro
Uno.acelerar()
Uno.acelerar()
Uno.acelerar()
console.log(Uno.getvelocidadeAtual())
 
const Ferrari = new Carro(300, 20)
Ferrari.acelerar()
Ferrari.acelerar()
Ferrari.acelerar()
console.log(Ferrari.getvelocidadeAtual())