function operators(operator){
    let number1 = +document.getElementById('number1').value
    let number2 = +document.getElementById('number2').value
    let total ;
    let sum = document.getElementById('sum').value
    let minus = document.getElementById('minus').value
    let multi = document.getElementById('multi').value
    let divide = document.getElementById('divide').value
    console.log(divide)
    console.log(sum)
    if(operator == sum){
        total = number1 + number2
        document.getElementById('result').innerHTML
        = total
    }else if(operator == minus){
        total = number1 - number2
        document.getElementById('result').innerHTML
            = total
    }else if(operator == multi){
        total = number1 * number2
        document.getElementById('result').innerHTML
            = total
    }else if(operator == divide){
        total = number1 / number2
        document.getElementById('result').innerHTML
            = total
    }
}