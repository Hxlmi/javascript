// variaveis
const addNum = document.getElementById('numero');
const addBtn = document.getElementById('addbtn');
const resBox = document.querySelector('#res');
const finishBtn = document.querySelector('#finish');
let valores = [];

// objeto com todas as tags p
const finalRes = {
    total:document.querySelector('.totalNum'),
    maiorValor:document.querySelector('.highValue'),
    menorValor:document.querySelector('.lowValue'),
    soma:document.querySelector('.sum'),
    media:document.querySelector('.average')
}

// eventListeners
addBtn.addEventListener('click', verificarNum)
finishBtn.addEventListener('click',finish)
addNum.addEventListener('keydown',function (event) {
    if(event.key === 'Enter'){
        verificarNum()
    }
})
document.addEventListener('keydown',function(e) {
    if(e.key === "Enter" && e.shiftKey){
        finish()
    }
})

// Verifica se o número é validado e está entre 1 e 100
function verificarNum() {
    let valorAdd = Number(addNum.value);
    if (addNum.value === "") {
        window.alert('O campo está em branco,por favor coloque um valor de 1 a 100!')
    } else if (valorAdd < 1 || valorAdd > 100) {
        window.alert('Valor Inválido,por favor coloque um valor de 1 a 100!')
    } else if (!Number.isInteger(valorAdd)) {
        let valorConvertido = Math.floor(valorAdd);
        alert(`O Número ${valorAdd} é decimal, o valor será convertido para ${valorConvertido} `)
        addToArray(valorConvertido)
    }else{
        addToArray(valorAdd)
    }
    addNum.value = '';
    addNum.focus();
    erase()
}

// adiciona os numeros ao array
function addToArray(number) {
    if(valores.includes(number)){
        alert(`O número ${number} já foi incluído, por favor, tente outro valor!`)
    } else{
        valores.push(number);
        addToRes(number)
    }
}

// mostra os numeros no select
function addToRes(num){
    let opt = document.createElement('option')
    opt.setAttribute('class', 'opcao')
    opt.innerText = `O valor ${num} foi adicionado`
    resBox.appendChild(opt)
}

// apaga todo conteudo dentro dos p
function erase(){
    Object.values(finalRes).forEach(p => p.textContent = "")
}

// faz o calculo de total,menor,maior,soma e média
function finish(){
    if(valores.length == 0){
        alert('Não tem nada para analisar.')
    }else{

        let resSum = 0;
        let resAvg = 0 ;
        valores.sort((a,b) => a - b)
        for(let i = 0;i < valores.length;i++){
            resSum += valores[i]
        }
        resAvg = resSum / valores.length
        finalRes.total.innerText = `Ao todo, temos ${valores.length}  números cadastrados.`
        finalRes.maiorValor.innerText = `O maior valor informado foi ${valores[valores.length  - 1]}` 
        finalRes.menorValor.innerText = `O menor valor informado foi ${valores[0]}`
        finalRes.soma.innerText = `A soma de todos os valores é ${resSum}`
        finalRes.media.innerText = `A média de todos os valores é ${resAvg}`

        addNum.focus();
    }
}