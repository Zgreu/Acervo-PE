var pontos = document.getElementById('pontos')
var pt = 30
pontos.innerHTML += `Pontos: <div id="pt">${pt}<div>`

var mod = -5

var força = document.getElementById('força')
var bfor = document.getElementById('botaofor')
var ptfor = 1
força.innerHTML += `Força: ${ptfor} (${mod})`



var agilidade = document.getElementById('agilidade')
var bagi = document.getElementById('botaoagi')
var bagi10 = document.getElementById('botaoagi10')
var ptagi = 1
agilidade.innerHTML += `Agilidade = ${ptagi} (${mod})`


function botaofor(){
    pt --
    ptfor ++
    pontos.innerHTML = `Pontos: <div id="pt">${pt}<div>`
    força.innerHTML = `Força: ${ptfor} (${mod})`

    if(pt == 0){
        bfor.style.display = 'none'
        bagi.style.display = 'none'
        bagi10.style.display = "none"
        
    } else if (pt <= 9){
        bagi10.style.display = "none"

    }else if(ptfor >= 30){
        força.innerHTML += (' MAX')
        bfor.style.display = 'none'

    }
}
    

function botaoagi(){
    ptagi ++
    pt --
    pontos.innerHTML = `Pontos: <div id="pt">${pt}<div>`
    agilidade.innerHTML = `Agilidade = ${ptagi} (${mod})`

    if(ptagi >= 30){
        agilidade.innerHTML += (' MAX')
        bagi.style.display = 'none'

    } else if(pt == 0){
        bfor.style.display = 'none'
        bagi.style.display = 'none'
        bagi10.style.display = "none"

    } else if (pt <= 9){
        bagi10.style.display = "none"

    }
}
 function botaoagi10(){
    ptagi += 10
    pt -= 10
    pontos.innerHTML = `Pontos: <div id="pt">${pt}<div>`
    agilidade.innerHTML = `Agilidade = ${ptagi} (${mod})`

    if(pt == 0){
        bfor.style.display = 'none'
        bagi.style.display = 'none'
        bagi10.style.display = "none"

    } else if (pt <= 9 || ptagi >= 21){
        bagi10.style.display = "none"
    }
    
 }