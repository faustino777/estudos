
function countnum() {
    var start = document.getElementById('txtstart')
    var end = document.getElementById('txtend')
    var pass = document.getElementById('txtpass')
    var res = document.getElementById('txtres')
    
    if (start.value.length == 0 || end.value.length == 0 || pass.value.length == 0) {
        window.alert('[ERRO] Faltam dados')
    } else {
        res.innerHTML = 'Contando:'
        var stn = Number(start.value)
        var edn = Number(end.value)
        var psn = Number(pass.value)

        if ( psn <= 0) {
            window.alert('Passo inválido. Considerando passo como 1.')
            psn = 1
        }
        
        // Contagem crescente
        if (stn < edn) {
            for (var c = stn; c <= edn;c += psn) {
                res.innerHTML += `${c} ➡ `
            }
            // Contagem decrescente
        } else if (stn > edn) {
            for (var c = stn; c >= edn;c -= psn) {
                res.innerHTML += `${c} ➡ `
            } 
        } res.innerHTML += `⌧`
        
    }
}