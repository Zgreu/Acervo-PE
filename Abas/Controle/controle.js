var iconebt = document.getElementById('icone')
var abas = document.getElementById('abas')

botoes = ['poderes']
iframep = ['ifpoderes', 'ifelementos']

function icone(){
    iconebt.style.display = "none"

    if(iconebt.style.display == "none")
        abas.style.display = "block"
    
    
}

function poderes(){

    iframep[0].style.display = 'block'
    alert('foi')
    if(iframep[0].style.display == 'block')
        iframep[1].style.display = 'none'
}   