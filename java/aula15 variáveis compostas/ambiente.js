let num = [5,8,2,9,3]
num[3] = 7
 //num.push(11) adiciona um último elemento com valor
 //num.length comprimento em caracteres do vetor
 //num.sort() coloca todos os valores dos elementos em ordem crescente


console.log(`Nosso valor é: ${num}. O vetor tem ${num.length} caracteres `)

num.push(9)

console.log(num)

num.sort()

console.log(num)

// em que posição está o valor 9
let pos = num.indexOf(9)
if (pos == -1) {
    console.log('Valor inválido.')
} else {
    console.log(`O valor está na posição ${pos}`)
} //