function contar(){
    let ini = document.getElementById('txtinicio')
    let fim = document.getElementById('txtfim')
    let pas = document.getElementById('txtpasso')
    let res= document.querySelector('div#res')

    if(ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
        res.innerHTML = 'Impossível contar!'
        //window.alert('[ERRO} Faltam informações')
    }else{
        res.innerHTML = 'Contando: <br> '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)
        if(p<=0){
            window.alert('Passo Inválido! Considerando PASSO 1...')
            p=1
        }

        if(i < f){
            for(let c = i; c <= f; c+=p){
            res.innerHTML += `${c} \u{1F449}`
        }
    }else{
        for(let c = i; c >= f; c-=p){
            res.innerHTML += `${c} \u{1F449}`
        }
       
    }
    res.innerHTML += `\u{1F3C1}`
}
}