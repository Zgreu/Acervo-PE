function batalha(){
    let num1 = parseInt(Math.random()*20) 
    let num2 = parseInt(Math.random()*20)
    let dano = parseInt(Math.random()*5) + 1
    let danocrt = parseInt(Math.random()*5) + 1

    let res =document.querySelector('#res')
    if(num2 - num1 >= 10){
        res.innerHTML = (` Droga um Critico ${num1} maior ${num2}<br> Ele te deu ${dano + danocrt} (${dano} + ${danocrt}) de dano`)
    } else if(num1 - num2 >= 10){
        res.innerHTML = (`Boa um Critico ${num1} maior ${num2} <br> Você causo ${dano + danocrt} (${dano} + ${danocrt}) de dano`)
    } else if(num1 > num2){
        res.innerHTML = (`Boa ${num1} ganha de  ${num2} <br> Ele Você causo ${dano} de dano`)
    } else if(num1 < num2){
        res.innerHTML = (`Droga ${num1} não ganha  ${num2} <br> Ele te deu ${dano} de dano`)
    } else if (num1 == num2){ 
        res.innerHTML = (`Empate ${num1} é o mesmo que ${num2}`)
    }
}