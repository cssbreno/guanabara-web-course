var agora = new Date()
var horas = agora.getHours()
var min = agora.getMinutes()
console.log(`Agora são exatamente ${horas}:${min}h`)
if (horas < 12) {
    console.log('Bom dia!')
}
else if (horas > 12 && horas < 18) {
    console.log('Boa tarde!')
}
else if (horas > 18 && horas < 24) {
    console.log('Boa noite!')
}