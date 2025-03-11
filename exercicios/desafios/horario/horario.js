
function carregar(){

    let txth = document.getElementById('atual');
    let img = document.querySelector('#img');
    let periodo;
    let hora = new Date().getHours();
    // let hora = 
    
    
    /* 0-6 madrugada 6-12 manha 12-18 tarde 18-24 noite */
    if(hora < 6){
        img.style.background = 'url(img/madrugada.png)'
        periodo = 'Boa Madrugada'
        document.body.style.background = '#32324d'
        txth.innerHTML += `<p>${periodo}, agora são ${hora} horas.</p>`
    }else if(hora < 12){
        img.style.background = 'url(img/dia.png)'
        periodo = 'Boa Dia'
        txth.innerHTML += `<p>${periodo}, agora são ${hora} horas.</p>`
    }else if(hora < 18){
        img.style.background = 'url(img/tarde.png)'
        periodo = 'Boa Tarde'
        txth.innerHTML += `<p>${periodo}, agora são ${hora} horas.</p>`
        document.body.style.background = '#d14f10eb'
    }else if(hora <= 24){
        img.style.background = 'url(img/noite.png)'
        periodo = 'Boa Noite'
        txth.innerHTML += `<p>${periodo}, agora são ${hora} horas.</p>`
        document.body.style.background = '#32324d'
    }else{
        img.style.background = 'red'
        img.style.borderColor = 'black'
        
        txth.innerHTML = `<p>Por algum motivo o horario, agora consta que são<br> ${hora} horas, eu não sei como cumprementa-lo, poderia ajustar a hora?</p> `
    }
    img.style.backgroundSize = 'contain'
    img.style.backgroundRepeat = 'no-repeat'
}
    
    
    
    