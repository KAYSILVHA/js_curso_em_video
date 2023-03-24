let num = [0,9,2,3,8]

num.push(5)

num.sort()

console.log(num)


console.log(`O vetor tem ${num.length} posições`)

console.log(`O primeiro valor do vetor é ${num[0]}`)



let pos = num.indexOf(1)
if(pos == -1){
    console.log("Valor não encontrado")
}else{
    console.log(`O oito está na posição ${pos} `)

}