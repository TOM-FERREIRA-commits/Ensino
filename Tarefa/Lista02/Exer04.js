function nomeDoMes(mes){
   const meses = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", 
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
   ]
   if(mes < 1 || mes > 12 ){

   return "Numero Invalido !!! Por Favor Digite um Número equivalente aos meses"
   
}

return meses[mes - 1]

}
console.log(nomeDoMes(1))
console.log(nomeDoMes(2))
console.log(nomeDoMes(3))
console.log(nomeDoMes(4))
console.log(nomeDoMes(5))
console.log(nomeDoMes(6))
console.log(nomeDoMes(7))
console.log(nomeDoMes(8))
console.log(nomeDoMes(9))
console.log(nomeDoMes(10))
console.log(nomeDoMes(11))
console.log(nomeDoMes(12))
console.log(nomeDoMes(13))


