var verify = document.getElementById('verifyb')
verify.addEventListener('click', verificar)
                     //Função verificar
function verificar() {
    date = new Date()
    var year = date.getFullYear()
    var fYear = document.getElementById('tage')
    var res = document.querySelector('div#res')
    var imgr = document.querySelector('div#img')
                      
    if (fYear.value.lenght == 0 || fYear.value > year ) {
        window.alert('EROOR ! Verifique os dados e tente novamente!')
    } else {
        var genderF = document.getElementById('fem')
        var genderM = document.getElementById('masc')
        var age = year - Number(fYear.value)
        var gender = ` `
        var img = document.createElement('img')
        img.setAttribute('id' , 'imgJS')

        if (genderM.checked) {
            gender = 'Homem'
            if (age <= 10) {
                //criança
                img.setAttribute('src', 'Homem/bebe.jpg')
            } else if (age <= 21) {
                //Jovem
                img.setAttribute('src', 'Homem/jovem.jpg')
            } else if (age <= 60) {
                //adulto
                img.setAttribute('src', 'Homem/adulto.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'Homem/idoso.jpg')
                
            }
        } else if (genderF.checked) {
            gender = 'Mulher'
            if (age >= 0 && age <= 10) {
                //criança
                img.setAttribute('src', 'Mulher/bebe.jpg')
            } else if (age >= 11 && age <= 21) {
                //Jovem
                img.setAttribute('src', 'Mulher/jovem.jpg')
            } else if (age >= 22 && age <= 60) {
                //adulto
                img.setAttribute('src', 'Mulher/adulto.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'Mulher/idoso.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gender} com ${age} anos.`
        imgr.appendChild(img)
        
        
    }
}