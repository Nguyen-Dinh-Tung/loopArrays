var prizes = document.getElementById('prize')
var btnPrize = document.getElementById('btn')

btnPrize.addEventListener('click', prizeDelta)

function prizeDelta(){
    let a = document.getElementById('a').value
    let b = document.getElementById('b').value
    let c = document.getElementById('c').value
    if(a===0){
        if(b===0){
            if(c===0){
                prizes.innerHTML = 'PT có vô số nghiệm'
            }else{
                prizes.innerHTML = 'PT vô nghiệm'
            }
        }else{
            prizes.innerHTML = -c/b
        }
    }else{
        var d = +(Math.pow(b,2)-4*a*c );
        if(d<0){
            prizes.innerHTML = 'PT vô nghiệm'
        }else{
            var x ;
            var y ;
            x = (-b + Math.sqrt(d))/(2*a) ;
            y = (-b - Math.sqrt(d))/(2*a);
            prizes.innerHTML = 'PT có 2 nghiệm' +' x1 =' + x + '; x2 =' + y
        }if(d === 0){
            var z ;
            z = -b/(2*a)
            prizes.innerHTML = 'PT có nghiệm là' + z
        }

    }
}


