var pontos = document.getElementById('pontos')
var pt = 10
pontos.innerHTML += `Pontos: <div id="pt">${pt}<div>`

var mod = -5

var força = document.getElementById('força')
var bfor = document.getElementById('botaofor')
var ptfor = 1
força.innerHTML += `Força: ${ptfor} (${mod})`



var agilidade = document.getElementById('agilidade')
var bagi = document.getElementById('botaoagi')
var ptagi = 1
agilidade.innerHTML += `Agilidade = ${ptagi} (${mod})`

bfor.style.display = 'inline-block'
bagi.style.display = 'inline-block'

function botaofor(){
    ptfor ++
    pt --
    pontos.innerHTML = `Pontos: <div id="pt">${pt}<div>`
    força.innerHTML = `Força: ${ptfor} (${mod})`

    if(pt == 0){
        bfor.style.display = 'none'
        bagi.style.display = 'none'
        
    } else if(ptfor == 30){
        força.innerHTML += (' MAX')
        bfor.style.display = 'none'
    }
}
    

function botaoagi(){
    ptagi ++
    pt --
    pontos.innerHTML = `Pontos: <div id="pt">${pt}<div>`
    agilidade.innerHTML = `Agilidade = ${ptagi} (${mod})`

    if(pt == 0){
        bfor.style.display = 'none'
        bagi.style.display = 'none'
    } else if(ptagi == 30){
        agilidade.innerHTML += (' MAX')
        bagi.style.display = 'none'
    }
}
 function botaoagi10(){
    ptagi + 10
    pt - 1
    pontos.innerHTML = `Pontos: <div id="pt">${pt}<div>`
    agilidade.innerHTML = `Agilidade = ${ptagi} (${mod})`
 }
