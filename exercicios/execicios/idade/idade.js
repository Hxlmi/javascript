let verificar = document.getElementById('verificar')
let clear = document.getElementById('limpar')
verificar.addEventListener('click', calcIdade)
clear.addEventListener('click', limpar)


function limpar(){
    let res = document.querySelector('#res')
    let resQt = res.childNodes.length
    if(resQt > 0){
        while(resQt > 0){
            res.firstChild.remove()
        }
    }
}

function calcIdade(){
    let anoNasci = document.getElementById('ano')
    let anoAtual = new Date().getFullYear()
    let img = document.querySelector('#img')
    let idade = anoAtual - anoNasci.value
    console.log(idade);
    // let idade = 18000
    if(idade < 0){
        let resposta = confirm(`Número Invalidade, por favor digite algo entre: 0 ~ ${anoAtual}!`)
        if(resposta == true){anoNasci.focus()}
        anoNasci.value = ''
    }else {
        limpar()
        generoImg(idade)
    }
}    


function generoImg(idade){
    let genero = document.getElementsByName('genero')
    let imagem;
    let pessoa;
    let mensagem;
    console.log(pessoa);
    // console.log(genero);

    if(genero[0].checked){
        if(idade >= 0 && idade < 12){
            imagem = 'img/M/menino.png'
            pessoa = 'Uma Criança'
        }else if(idade < 18){
            imagem = 'img/M/menino-adolecente.png'
            pessoa = 'Um Adolecente'
        }else if(idade < 45){
            imagem = 'img/M/homem.png'
            pessoa = 'Um homem adulto'
        }else if(idade < 65){
            imagem = 'img/M/homem-meiaIdade.png'
            pessoa = 'Um Homem de meia idade'
        }else if(idade < 130){
            imagem = 'img/M/senhor.png'
            pessoa = 'Um Senhor'
        }else {
            mensagem = `<p>estou realmente impressionado com sua idade, afinal nunca vi alguém viver até ${idade} anos de idade, continue assim</p> `
            imagem = 'img/interrogacao.png'
            pessoa = 'Um Morto-Vivo?'
        }
    }else if(genero[1].checked){
        if(idade >= 0 && idade < 12){
            imagem = 'img/F/menina.png'
            pessoa = 'Uma Criança'
        }else if(idade < 18){
            imagem = 'img/F/menina-adolecente.png'
            pessoa = 'Uma Adolecente'
        }else if(idade < 45){
            imagem = 'img/F/mulher.png'
            pessoa = 'Uma Adulta'
        }else if(idade < 65){
            imagem = 'img/F/mulher-meiaIdade.png'
            pessoa = 'Uma Mulher de Meia Idade'
        }else if(idade < 130){
            imagem = 'img/F/senhora.png'
            pessoa = 'Uma Senhora'
        }else {
            mensagem = `<p>estou realmente impressionado com sua idade, afinal nunca vi alguém viver até ${idade} anos de idade, continue assim!</p>`
            imagem = 'img/interrogacao.png'
            pessoa = 'Uma Morta-Viva?'
        }
    }else {
        mensagem = '<p>Sinceramente não sei exatamente como definir uma imagem para um conceito tão indeciso então só digo isso:</p>'
        imagem = 'img/euseilaporra.png'
    }

    mostrar(idade,imagem,pessoa,mensagem,genero)
}


function mostrar(idade,imagem,pessoa,mensagem,genero){   
    let res = document.querySelector('#res')
    let p = document.createElement('p')
    p.innerHTML = `Detectamos ${pessoa} com ${idade} anos.`
    if(idade >= 130){p.innerHTML += mensagem}
    res.appendChild(p)
  
    let img = document.createElement('img')
    let attrSrc = document.createAttribute('src')
    let attrId = document.createAttribute('class')
    attrSrc.value = imagem
    if(genero[2].checked){attrId.value = 'seila'}else{attrId.value = 'image'}
    img.setAttributeNode(attrSrc)
    img.setAttributeNode(attrId)
    img.setAttribute('id', 'normal')
    res.appendChild(img)

}


