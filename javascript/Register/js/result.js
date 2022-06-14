// function sum (){
//     let a = +document.getElementById('a').value;
//     let b = +document.getElementById('b').value;
//      c = a + b;
//     document.getElementById('result').innerHTML = c ;
// }
//
// const btnG = document.getElementById('btn')
// btnG.addEventListener('click', callFunction)
//
// function callFunction(){
//     sum()
// }

function pt(){
    let a = +document.getElementById('a').value;
    let b = +document.getElementById('b').value;

    if(a===0){
        if(b===0){
            document.getElementById('result').innerHTML = 'PT vô số nghiệm'
        }else{
            document.getElementById('result').innerHTML = 'PT vô nghiệm'

        }
    }else{
        document.getElementById('result').innerHTML = x = -b/a
    }
}
var btn = document.getElementById('btn')
btn.addEventListener('click', pt)