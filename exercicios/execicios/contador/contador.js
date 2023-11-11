let produto = [];

function contar(){
    // variaveis
    let inicio = document.getElementById('numIni')
    let fim = document.getElementById('numFim')
    let passo = document.querySelector('#passo')
    let res = document.querySelector('#res')


    if(inicio.value.length == 0|| fim.value.length == 0|| passo.value.length == 0){
        res.innerHTML = `Impossível contar`    
        // window.alert('[ERRO] Faltam dados')
    }else {
        res.innerHTML = `Contando: <br>`
        let i = parseInt(inicio.value)
        let f = parseInt(fim.value)
        let p = parseInt(passo.value)
        if(p <= 0){
            window.alert("Passo Invalido! Considerando PASSO 1")
            p = 1
        }
        if(i < f){
                // contagem crescente
            for(let c = i;c <= f;c += p){
                res.innerHTML+= `${c} \u{1f449}` 
            }
        }else {
            //contagem regressiva
            for (let c = i; c >= f; c-= p) {
                res.innerHTML += `${c} \u{1f449}`
                
            }
        }
        res.innerHTML += `\u{1f3c1}`
    }
}


