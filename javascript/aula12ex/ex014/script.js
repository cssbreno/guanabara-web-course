function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')

    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12){
        // Bom dia!
        img.src = '../fotos/manha.png'
        document.body.style.backgroundColor = '#d2923a'
    } else if (hora >= 12 && hora <= 18){
        // Boa tarde!
        img.src = '../fotos/tarde.png'
        document.body.style.backgroundColor = '#c85404'
    } else {
        // Boa noite!
        img.src = '../fotos/noite.png'
        document.body.style.backgroundColor = '#234955'
    }
}
