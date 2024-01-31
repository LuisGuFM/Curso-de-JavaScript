let num = [5,9,8,1,3]
num.push(2)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posicoes.`)
console.log(`O primeiro valor do vetor e ${num[0]}`)

let pos = num.indexOf(9)
if (pos == -1) {
    console.log('O numero nao foi encontrado')
} else {
    console.log(`O valor 8 esta na posicao ${pos}`)
}
