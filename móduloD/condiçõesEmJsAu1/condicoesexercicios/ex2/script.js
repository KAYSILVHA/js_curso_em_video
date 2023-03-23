function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fAno.value.length==0 || Number(fAno.value) > ano){
        window.alert('[ERRO] Verifique seus dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src','./imagens/bebeMenino.png')
            }else if(idade < 21){
                //Jovem
                img.setAttribute('src','./imagens/jovemHomem.png')
            }else if(idade < 50){
                //Adulto
                img.setAttribute('src','./imagens/homem.png')
            }else{
                //Idoso
                img.setAttribute('src','./imagens/senhor.png')
            }
            
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src','./imagens/bebeMenina.png')
            }else if(idade < 21){
                //Jovem
                img.setAttribute('src','./imagens/jovemMulher.png')
            }else if(idade < 50){
                //Adulto
                img.setAttribute('src','./imagens/mulher.png')
            }else{
                //Idoso
                img.setAttribute('src','./imagens/senhora.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}