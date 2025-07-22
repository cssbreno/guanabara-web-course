function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById("txtAno")

    if (fAno.value.lenght == 0 || Number(fAno.value) > ano) {
    alert('[ERRO] Verifique os dados informados e tente novamente')
    } else {
        var fsex = document.getElementsByName("radSex")
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', '../fotosEx015/crianca-h.png')
            }
            else if (idade < 21) {
                // Jovem
                img.setAttribute('src', '../fotosEx015/jovem-h.png')
            } else if (idade < 50){
                // Adulto
                img.setAttribute('src', '../fotosEx015/adulto-h.png')
            } else {
                // Idoso
                img.setAttribute('src', '../fotosEx015/senhor-h.png')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', '../fotosEx015/crianca-m.png')
            }
            else if (idade < 21) {
                // Jovem
                img.setAttribute('src', '../fotosEx015/jovem-m.png')
            } else if (idade < 50){
                // Adulto
                img.setAttribute('src', '../fotosEx015/adulto-m.png')
            } else {
                // Idoso
                img.setAttribute('src', '../fotosEx015/senhora-m.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos</p>`
        res.appendChild(img)
    }
}