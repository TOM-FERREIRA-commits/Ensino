const anonimo = process.argv.indexOf('-a') !== -1
console.log(anonimo)

if(anonimo) {
    process.stdout.write('Fala Anônimo!\n')
    process.exit()
}else { 
    process.stdout.write('Informe o seu nome: ')            
    process.stdin.on('data', data => {                  // stdin é a entrada padrão
        const nome = data.toString().replace('\n', '')  // replace é uma forma de substituir um caractere por outro
        process.stdout.write(`Fala ${nome}!!\n`)    
        process.exit()                                  // finaliza o processo
    })
}