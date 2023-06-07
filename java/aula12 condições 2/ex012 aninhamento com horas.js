var now = new Date()
var hour = now.getHours()
var minute = now.getMinutes()
console.log(`Agora são, exatamente, ${hour}horas e ${minute} minutos.`)

if (hour >= 5 && hour <= 12) {
    console.log('Bom dia!')
} else if (hour >= 13 && hour <= 18) {
    console.log('Boa tarde!')
} else if (hour >=0 && hour <= 4){
    console.log('vai dormir, vagabundo')
} else {
    console.log('Boa noite!')
}