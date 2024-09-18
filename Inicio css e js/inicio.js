        var ola = document.getElementById('ola')
            ola.style.display = "none"
        var nome = document.getElementById('nome')
        function senha(){

        let sen = document.getElementById('senha')

        if(sen.value == 'im'){
            nome.classList.toggle('mudando');
            ola.style.display = 'block'
            
        }


        nome.addEventListener("transitionend", () => {
            nome.style.display = "none"
            ola.classList.remove('mudando')
            ola.classList.add('opacidade');

        })

        }


        