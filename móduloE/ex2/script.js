function gerar(){
    let num = document.getElementById('txtnum')
    let seltab = document.getElementById("seltab")

    
    if(num.value.length == 0 ){
        window.alert('[ERRO} Digite um NÚMERO')
    }else{

        let n = Number(num.value)
        let c = 0
        seltab.innerHTML = ' '
        while(c <=10){
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n * c}`

            item.value = `tab${c}`
            seltab.appendChild(item)
            c++
    }
        
    
}}