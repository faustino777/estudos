function clicar() {
    var txtn = document.getElementById('txtnum')
    var tab = document.getElementById('seltab')

    if (txtn.value.length == 0) {
        alert('[ERRO] Nenhum número válido foi inserido!')
    } else {
        var numt = Number(txtn.value)
        var nums = 1
        var numr = numt * nums
        tab.innerHTML = ''

        for (var n1 = numt;nums <= 10;nums++) {
            var item = document.createElement('option')
            var numr = numt * nums
            item.text += `${n1} x ${nums} = ${numr}`
            tab.value = `tab${nums}`
            tab.appendChild(item)
        }
    }

    
}