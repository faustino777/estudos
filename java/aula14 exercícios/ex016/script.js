var startn = document.getElementById('start').value
var endn = document.getElementById('end').value
var passn = document.getElementById('pass').value
var countb = document.getElementById('count')
var restxt = document.getElementById('textres')
countb.addEventListener('click', countn)

function countn() {
    while (Number(startn) <= Number(endn)){
        restxt.innerHTML = startn
        startn += passn

    }
}