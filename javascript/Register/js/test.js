var btnHello = document.getElementById("btn")
var textChange = document.getElementById('text-change')
btnHello.addEventListener('click', changeText)
btnHello.addEventListener('dblclick', changeTextDb)
btnHello.addEventListener('mouseover', changeTextOver)
btnHello.addEventListener('mouseout', changeTextOut)

function changeText(){
    textChange.innerHTML = 'Change success'
}
function changeTextDb(){
    textChange.innerHTML = 'Change success Dbclick'
}

function changeTextOver(){
    textChange.innerHTML = 'Change mouseOver'
}
function changeTextOut(){
    textChange.innerHTML = 'Change mouseOut'
}


// -----
    function prizeDelta(){
        if(a=0){
            if(b=0){
                if(c=0){
                    prizes.innerHTML = 'PT có vô số nghiệm'
                }else{
                    prizes.innerHTML = 'PT vô nghiệm'
                }
            }else{
                prizes.innerHTML = Math.sqrt(-c/b)
            }
        }else{
            var d = +(Math.pow(b)-4*a*c );
            if(d<0){
                prizes.innerHTML = 'PT vô nghiệm'
            }else{
                x = (-b + Math.sqrt(d))/(2*a) ;
                y= (-b - Math.sqrt(d))/(2*a);
                prizes.innerHTML = 'PT có 2 nghiệm' +' x1 =' + x
            }if(d =0){
                z = -b/(2*a)
                prizes.innerHTML = 'PT có nghiệm là' + z
            }

        }
    }
