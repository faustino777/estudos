let amigo = {nome:'João',
sexo:'M',
peso:'90.5',
engordar(p=0){
    this.peso += p
}} 
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)