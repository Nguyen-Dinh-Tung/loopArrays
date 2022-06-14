var btnShowMe = document.getElementById("btn")
btnShowMe.addEventListener('click', fShowme)
function fShowme(){
    alert('Xin chào')
}
var btnWrite = document.getElementById("btn-write")
btnWrite.addEventListener('click', fwrite)
function fwrite (){
    btnWrite.innerHTML = 'Xin chào'
}

var btnHandlerCsl = document.getElementById('btn-handler-console')
btnHandlerCsl.addEventListener('click', handlerCsl)
function handlerCsl(){
    console.log(btnHandlerCsl.innerHTML)
}
function showme(){
    alert('Xin chào')
}