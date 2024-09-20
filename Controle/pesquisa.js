function pesquisa(){
    var pes = document.getElementById('pesquisa')

    switch(pes.value.toLowerCase()){
        case 'poderes':
            iframep.src = "../Abas/Poderes/Poderes/poderes.html"
        break

        case 'elementos':
            iframep.src = "../Abas/Poderes/Elementos/elementos.html"
        break

        case 'tipos de habilidades':
            iframep.src = "../Abas/Poderes/Tiposdehabilidades/tiposdehabilidade.html"
        break

        case 'tipos':
            iframep.src = "../Abas/Poderes/Tiposdehabilidades/tiposdehabilidade.html"
        break
        
        case 'tdh':
            iframep.src = "../Abas/Poderes/Tiposdehabilidades/tiposdehabilidade.html"
        break
        
        case 'body':
            iframep.src = "../Abas/Poderes/Tiposdehabilidades/tiposdehabilidade.html"
        break

        case 'corpo':
            iframep.src = "../Abas/Poderes/Tiposdehabilidades/tiposdehabilidade.html"
        break

        case 'corpo a corpo':
            iframep.src = "../Abas/Poderes/Tiposdehabilidades/tiposdehabilidade.html"
        break

        case 'cpc':
            iframep.src = "../Abas/Poderes/Tiposdehabilidades/tiposdehabilidade.html"
        break

        case 'projeteis':
            iframep.src = "../Abas/Poderes/Tiposdehabilidades/tiposdehabilidade.html"
        break

        case 'foco':
            iframep.src = "../Abas/Poderes/Tiposdehabilidades/tiposdehabilidade.html"
        break

        case '':
        break

        default:
        alert('Esta pesquisa não vai a lugar nenhum')
        break

        
   }
   pes.value = ""
}
