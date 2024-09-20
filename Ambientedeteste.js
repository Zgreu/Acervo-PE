function batalha(){
    let num1 = parseInt(Math.random()*20)
    let num2 = parseInt(Math.random()*20)
    if(num1 > num2){
        console.log(`gg wp ${num1} ganha de  ${num2}`)
    } else {
        console.log(`Droga ${num1} não ganha  ${num2}`)
    }
}