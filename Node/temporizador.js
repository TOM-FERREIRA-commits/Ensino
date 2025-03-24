const schedule = require('node-schedule');

const tarefa1 = schedule.scheduleJob('*/5 * 20 * * 3', function() {
    console.log('Executando Tarefa  1!', new Date().getSeconds());
})  // executa de 5 em 5 segundos, a partir do minuto 20, de qualquer hora, de qualquer dia, de qualquer mês, de qualquer dia da semana (0 = domingo, 1 = segunda, 2 = terça, 3 = quarta, 4 = quinta, 5 = sexta, 6 = sábado)

setTimeout(function() {
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1!')
}, 20000)  // cancela a tarefa 1 depois de 20 segundos  (20000 milissegundos)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]  // de segunda a sexta
regra.hour = 20
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function() {
    console.log('Executando Tarefa 2!', new Date().getSeconds());
})  

