let addnum = document.getElementById('inpbtn')
addnum.addEventListener('click', addnumber)
let num = document.getElementById('inpnum')
let valores = []
let res = document.getElementById('result')

function isNumber(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function addnumber() {
    if (isNumber(num.value) && !inList(num.value, valores)) {
        valores.push(Number(num.value))
        let tab = document.getElementById('slctnum')
        let tabitem = document.createElement('option')
        tabitem.text = `O valor ${num.value} foi adicionado.`
        tab.add(tabitem) 
        res.innerHTML = ''

    } else {
        alert('Valor inválido ou já adicionado na lista.')
    } 
    num.value = ''
    num.focus()
}

let fnzbtn = document.getElementById('fnzbtn')
fnzbtn.addEventListener('click', finalit)

function finalit() {
    if (valores.length == 0) {
        alert('Adiciona valores, antes de finalizar.')
    } else {
        let total = valores.length
        let big = valores[0]
        let small = valores [0]
        let sm = 0
        let md = 0

        for (let pos in valores) {
            sm += valores[pos]
            if (valores [pos] > big) {
                big = valores[pos]
            } else if ( valores[pos] < small) {
                small = valores[pos]
            }
        }

        md = sm / total
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} numeros cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${big}.</p>`
        res.innerHTML+= `<p>O menor valor informado foi ${small}.</p>`
        res.innerHTML+= `<p>Somando todos os valores, temos ${sm}.</p>`
        res.innerHTML+= `<p>A média dos valores informados é ${md}.</p>`
    }
}











let tab = document.getElementById('slctnum')
        let tabitem = document.createElement('option')
        tabitem.text = `O valor ${inputnumber.value} foi adicionado.`
        tab.add(tabitem) 