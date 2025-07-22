function contar () {
let inicio = document.getElementById("txtn");
let fim = document.getElementById("txtn2");
let passo = document.getElementById("txtn3");
let res = document.getElementById("res");
    
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
        alert("Faltam dados!");
    } else {
        res.innerHTML = "Contando: <br>"
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0) {
            alert('Passo inválido! Considerando passo 1')
            p = 1
        }
        
        if (i < f) {
            // contagem crescente
        for (let j = i; j <= f; j+=p) {
            res.innerHTML += `${j} \u{1F449}`
            }
        } else  {
            // contagem decrescente
            for(let j = i; j >= f; j-=p) {
                res.innerHTML += `${j} \u{1F449}`
                }
            }
        res.innerHTML += `\u{1F3C1}`
    }
}