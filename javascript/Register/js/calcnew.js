const prize = document.getElementById('prize')
const deletePrize = document.getElementById('delete')

function getvalue (x){
    let input = document.getElementById('input')
    input.value +=x

}
prize.addEventListener('click', handlePrize)
function handlePrize(){
    let input = document.getElementById('input')
    input.value = eval(input.value);
}
deletePrize.addEventListener('click', handleDelete)
function handleDelete(){
    let input = document.getElementById('input')
    input.value = ''
}
