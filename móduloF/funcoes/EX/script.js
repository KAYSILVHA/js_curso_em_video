let num = document.getElementById('txtnum')
let flist = document.getElementById("flist")

let res = document.getElementById('res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true

    } else{
        return false
    }

}
function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
            return true
            
    } else{
            return false
    }
}


function add(){

    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))

        let item = document.createElement('option')
            item.text = `Valor ${num.value} adicionado.`
            flist.appendChild(item) 
            res.innerHTML= ''
    
        } else{
            window.alert("Valor inválido ou já encontrado na lista")
        }
        
        num.value= ''
        num.focus()
        
    }
    
    
    
    
    function finalizar(){
        if(valores.length == 0){
            window.alert("Adicione valores antes de finalizar!")
        
    }else{

        let tot = valores.length

        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for( let pos in valores){
            soma += valores[pos]
            if( valores[pos] > maior){
                maior = valores[pos]
                }else if( valores[pos]< menor){
                    menor = valores[pos]
                }
        }

        media = soma / tot
        res.innerHTML= ''
        res.innerHTML += `<p> Ao todo, temos ${tot} números cadastrados</p>`
        res.innerHTML += `<p> O maior valor informado é ${maior}</p>`
        res.innerHTML += `<p> O menor valor informado é ${menor}</p>`
        res.innerHTML += `<p> A soma de todos os valores é ${soma}</p>`
        res.innerHTML += `<p> A média dos valores é igual a ${me}</p>`
    }
}