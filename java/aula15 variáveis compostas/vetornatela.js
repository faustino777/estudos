let num = [2,6,1,9,4,7,3,8,5]
num.sort()
/*
for(let pos = 0; pos < num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}*/

for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}