    let sen = document.getElementById('senha')
    let ola = document.getElementById('ola')
    let nome = document.getElementById('nome')

    function senha(){
        if(sen.value == 'im'){
            nome.style.opacity = "0"
            nome.style.transition = 'display .3s ease'
            nome.style.display = "none"
            ola.innerHTML = '<a href="Abas/poderes/poderes.html">OLA</a>'
            
            
        }
    }
