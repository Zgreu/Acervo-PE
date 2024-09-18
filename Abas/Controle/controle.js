var iconebt = document.getElementById('icone')
var abas = document.getElementById('abas')
var pes = document.getElementById('pesquisa')

botoes = [document.getElementById('poderes')   
]
iframep = [document.getElementById('ifpoderes'), 
        document.getElementById('ifelementos')]

function pesquisa(){
    switch(pes.value){
        case 'poderes':
        iframep[0].style.display = 'block'
        iframep[1].style.display = 'none'
        break

        case 'elementos':
        iframep[1].style.display = 'block'
        iframep[0].style.display = 'none'
        break


        case '':
        break
        
        default:
        alert('coloque um valor valido e em letras minusculas')
        break

   }
}

function icone(){
    iconebt.style.display = "none"

    if(iconebt.style.display == "none")
        abas.style.display = "block"
    
    
}

function poderes(){

    iframep[0].style.display = 'block'
    if(iframep[0].style.display == 'block')
        iframep[1].style.display = 'none'
}   

function elementos(){
    iframep[1].style.display = 'block'
    if(iframep[1].style.display == 'block')
        iframep[0].style.display = 'none'
}