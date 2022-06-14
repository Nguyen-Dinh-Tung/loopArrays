var btnForeign = document.getElementById('prize')

btnForeign.addEventListener('click', foreignCurrency)

function foreignCurrency(){
    let vietnamCurrency = document.getElementById('vietnamCurrency').text
    let dolarCurrency = document.getElementById('dolarCurrency').text

    let toVietnamCurrency = document.getElementById('toVietnamCurrency').text
    let toDolarCurrency = document.getElementById('toDolarCurrency').text

    let amount = document.getElementById('amount').value

    let select = document.getElementById('select').value
    let selectTwo = document.getElementById('select-two').value

    let totalVd = amount*23000
    let totalDv = amount/23000
    let totalArgument = amount*1

    if(select == vietnamCurrency ){
        if(selectTwo == toVietnamCurrency){
            document.getElementById('result').innerHTML
                = 'Kết quả chuyển đổi là : ' + totalArgument
        }
        else{
            document.getElementById('result').innerHTML
                = 'Kết quả chuyển đổi là : ' + totalDv
        }

    }else if(select == dolarCurrency){
        if (selectTwo == toVietnamCurrency){
            document.getElementById('result').innerHTML
                = 'Kết quả chuyển đổi là : ' + totalVd
        }else{
            document.getElementById('result').innerHTML
                = 'Kết quả chuyển đổi là : ' + totalArgument
        }
    }
}