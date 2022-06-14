//total physic chemical biological
var prize = document.getElementById('prize')
prize.addEventListener("click", prizes)
function prizes(){
    console.log('Next')
    let phycsic = +document.getElementById('physic').value
    let chemical = +document.getElementById('chemical').value
    let biological = +document.getElementById('biological').value
    let total = + (phycsic + chemical +biological)/3
    let result = document.getElementById('result').innerHTML
        = + total
}

// celsius -> Fahrenheit

var prizeCf = document.getElementById('btn-cf')
prizeCf.addEventListener('click', prizeCfs)
function prizeCfs(){
    let c = document.getElementById('celsius').value
    let f = document.getElementById('Fahrenheit').value
    let totalC = 5/9*(f-32)
    let totalF = 9/5*c +32
    let result_f = document.getElementById('result-f').innerHTML
        = '<br>' + totalF
    let result_c = document.getElementById('result-c').innerHTML
        = '<br>' + totalC
}
// circle area

var btnCircle = document.getElementById('btn-circle')
btnCircle.addEventListener('click', prizeCircleArea)
function prizeCircleArea(){
    let radius = document.getElementById('radius').value
    let area = Math.pow(radius,2) * 3.14
    document.getElementById('result-circle').innerHTML
    = 'Kết quả là :' + area
}
<!-- circle perimeter-->
var btnPerimeter = document.getElementById('btn-perimeter')
btnPerimeter.addEventListener('click', circlePerimeter)
function circlePerimeter(){
    let radius = document.getElementById('radius-p').value
    let perimeter = radius * 3 * 3.14
    document.getElementById('result-perimeter').innerHTML
        = 'Kết quả là :' + perimeter
}