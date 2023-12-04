let valores = [8,9,2,7,4,]
valores.push(1)
valores.sort()
/*num[3] = 10
num.push(7)
num.length
num.sort()
console.log(`Nosso vetor é ${num.sort()}`)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

for(pos = 0; pos < 5; pos++){
        console.log(valores[pos])
}

for(let pos = 0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

for(let pos in valores ){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}*/
console.log(valores)
console.log(`O vetor tem ${valores.length} posições`)
console.log(`O primeiro valor do vetor é ${valores[0]}`)
let pos = valores.indexOf(10)
if(pos == -1){
    console.log(`O valor não foi encontrado`)
}else{
console.log(`O valor 8 está na posição ${pos}`)
}