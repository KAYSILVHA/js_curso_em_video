let valores = [0,1,7,4,5,9]
valores.sort()

/*for(var valor = 0; valor <(valores.length); valor++){
    console.log(`A posição ${valor} tem o valor ${valores[valor]}`)
}*/


for( let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)

}