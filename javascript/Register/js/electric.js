const btn = document.getElementById('btn')
btn.addEventListener('click', prize)
function prize(){
    let a = document.getElementById('price_50')
    let b = document.getElementById('price_50_100')
    let c = document.getElementById('price_100_200')
    let d = document.getElementById('price_201_300')
    let e = document.getElementById('price_301_400')
    let f = document.getElementById('price_400_')
    let k = document.getElementById('price_500')
    let clearText_a = document.getElementById('clearText_a')
    let clearText_b = document.getElementById('clearText_b')
    let clearText_c = document.getElementById('clearText_c')
    let clearText_d = document.getElementById('clearText_d')
    let clearText_e = document.getElementById('clearText_e')
    let clearText_f = document.getElementById('clearText_f')
    let clearText_K = document.getElementById('clearText_K')

    let total = document.getElementById('price_total')
    let input = document.getElementById('amount').value
    if(input <= 50 && input>0) {
        a.innerHTML =  input * 1600
        total.innerHTML = a.innerHTML
        clearText_a.style.display='block'
    }else if(input<101 && input>0){
        a.innerHTML = 50 * 1600
        b.innerHTML = input * 1700 - a.innerHTML
        clearText_a.style.display='block'
        clearText_b.style.display='block'
        total.innerHTML = +a.innerHTML + +b.innerHTML + +c.innerHTML + +d.innerHTML
    }else if(input<201 && input>0){
        a.innerHTML = 50 * 1600
        b.innerHTML = 50 * 1700
        c.innerHTML = input*2000 - a.innerHTML - b.innerHTML
        clearText_a.style.display='block'
        clearText_b.style.display='block'
        clearText_c.style.display='block'
        total.innerHTML = +a.innerHTML + +b.innerHTML + +c.innerHTML + +d.innerHTML
    }else if(input<301 && input>0){
        a.innerHTML = 50 * 1600
        b.innerHTML = 50 * 1700
        c.innerHTML = 100 * 2000
        d.innerHTML = input * 2500 -  a.innerHTML - b.innerHTML - c.innerHTML
        clearText_a.style.display='block'
        clearText_b.style.display='block'
        clearText_c.style.display='block'
        clearText_d.style.display='block'
        total.innerHTML = +a.innerHTML + +b.innerHTML + +c.innerHTML + +d.innerHTML
    }else if(input<400 && input>0){
        a.innerHTML = 50 * 1600
        b.innerHTML = 50 * 1700
        c.innerHTML = 100 * 2000
        d.innerHTML = 100 * 2500
        e.innerHTML = input * 2800 - a.innerHTML - b.innerHTML - c.innerHTML - d.innerHTML
        clearText_a.style.display='block'
        clearText_b.style.display='block'
        clearText_c.style.display='block'
        clearText_d.style.display='block'
        clearText_e.style.display='block'
        total.innerHTML = +a.innerHTML + +b.innerHTML + +c.innerHTML + +d.innerHTML + +e.innerHTML
    }else if(input<500 && input>0){
        a.innerHTML = 50 * 1600
        b.innerHTML = 50 * 1700
        c.innerHTML = 100 * 2000
        d.innerHTML = 100 * 2500
        e.innerHTML = 100 * 2800
        f.innerHTML = input * 2900 - a.innerHTML - b.innerHTML - c.innerHTML - d.innerHTML - e.innerHTML
        clearText_a.style.display='block'
        clearText_b.style.display='block'
        clearText_c.style.display='block'
        clearText_d.style.display='block'
        clearText_e.style.display='block'
        clearText_f.style.display='block'
        total.innerHTML = +a.innerHTML + +b.innerHTML + +c.innerHTML + +d.innerHTML + +e.innerHTML + +f.innerHTML
    }else if(input>501 && input>0){
        a.innerHTML = 50 * 1600
        b.innerHTML = 50 * 1700
        c.innerHTML = 100 * 2000
        d.innerHTML = 100 * 2500
        e.innerHTML = 100 * 2800
        f.innerHTML = 100 * 2900
        k.innerHTML  = input * 2900 - a.innerHTML - b.innerHTML - c.innerHTML - d.innerHTML - e.innerHTML - f.innerHTML
        clearText_a.style.display='block'
        clearText_b.style.display='block'
        clearText_c.style.display='block'
        clearText_d.style.display='block'
        clearText_e.style.display='block'
        clearText_f.style.display='block'
        clearText_K.style.display='block'
        total.innerHTML =  +a.innerHTML + +b.innerHTML + +c.innerHTML + +d.innerHTML + +e.innerHTML + +f.innerHTML + +k.innerHTML

    }else if(input<0){
        total.innerHTML = 'Vui lòng nhập lại'

    }
    const inputs = document.getElementById('amount')
    inputs.addEventListener('keydown', otherPrize)
    function otherPrize(){
        a.innerHTML = ''
        b.innerHTML = ''
        c.innerHTML = ''
        d.innerHTML = ''
        e.innerHTML = ''
        f.innerHTML = ''
        k.innerHTML = ''
        clearText_a.style.display='none'
        clearText_b.style.display='none'
        clearText_c.style.display='none'
        clearText_d.style.display='none'
        clearText_e.style.display='none'
        clearText_f.style.display='none'
        clearText_K.style.display='none'
    }
}

