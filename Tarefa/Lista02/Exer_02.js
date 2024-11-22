function  CalcDias  (idade){ 
    
    let diasAno = 365
    let anoBissexto = 0

    for(let i = 1; i <= idade ; i++){
    if (i % 4 === 0 )// verificara ano bissexto
{
       anoBissexto++
    }
}
    let Totaldias =  (idade * diasAno) + anoBissexto
    return Totaldias

}

console.log(CalcDias(4))