function carregar () {
    var msg = document.getElementById('message')
    var img = document.getElementById('img')
    var date = new Date()
    var hour = date.getHours()
    var minutes = date.getMinutes()
    msg.innerHTML = `${hour}:${minutes}`
    msg.style.fontSize = '3em'
    msg.style.fontFamily = 'Trebuchet MS'
    msg.style.textShadow = '0px 0px 10px #00000025'
    msg.style.fontWeight = 'bolder'

    if (hour >= 0 && hour < 13) {
        img.src = 'images/manhã.jpg'
        document.body.style.backgroundColor = '#72A552'
        msg.style.color = '#72A552'
    } 
    
    else if (hour >= 13 && hour < 19) {
        img.src = 'images/tarde.jpg'
        document.body.style.backgroundColor = '#E5913D'
        msg.style.color = '#E5913D'
    } 
    
    else {
        img.src = 'images/noite.jpg'
        document.body.style.backgroundColor = '#423E60'
        msg.style.color = '#423E60'
    }
}
