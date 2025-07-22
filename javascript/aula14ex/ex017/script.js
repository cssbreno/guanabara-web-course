function calcular() {
let number = document.getElementById('txtn')
let tab = document.getElementById('seltab')

    if (number.value.length == 0)
    {
        alert('Por favor, digite um número!')
    }
    else {
        let n = Number(number.value)
        tab.innerHTML = ''
        for (let i = 1; i <= 10; i++) {
            let item = document.createElement('option')
            item.text = `${n} x ${i} = ${n * i}`
            item.value = `tab${i}`
            tab.appendChild(item)
        }
    }
}