const nome = 'Rebeca'
const concanetacao = 'Ola' + nome + '!'

const template =`
    Olá 
    ${nome}!`

    console.log(concanetacao, template)

    //Expressões

    console.log(`1 + 1 = ${1 + 1}`)

    const up = texto => texto.toUpperCase()
    console.log(`Eii.... ${up('cuidado')}!`)