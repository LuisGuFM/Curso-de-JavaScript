let valores = [7, 8, 4, 3, 2, 9]
/*
for (let pos = 0; pos < valores.length; pos++) {
    valores.sort()
    console.log(valores[pos])
}
*/

for (let pos in valores) {
    console.log(`A posicao ${pos} tem o valor ${valores[pos]}`)
}