function contar() {
    var n1 = document.getElementById('txt1')
    var n2 = document.getElementById('txt2')
    var n3 = document.getElementById('txt3')
    var res = document.querySelector('div#res')

    if (n1.value.length == 0 || n2.value.length == 0 || n3.value.length == 0){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
        res.innerHTML = `Impossível contar!`
    } else {
        res.innerHTML = `Contando: </br>`
        let i = Number(n1.value)
        let f = Number(n2.value)
        let p = Number(n3.value)
        if (p == 0){
            window.alert('[ERRO] Passo inválido, considerando passo=1')
            p = 1
        }
        if(i < f){
            // Contagem crescente    // eu tinha feito for (n1; n1<=n2; n1= n1 * n3)
            for (let c = i; c <= f ; c += p){  
                res.innerHTML += ` ${c} \u{1F449}`     
                // o + concatena o contando com esse resultado e o código do emoji no js se coloca da maneira acima \u{código do emoji}
            }
        } else {
            // Contagem regressiva
            for ( let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`    
          // qdo estava fazendo o código esqueci de colocar o += e coloquei somente = (Isso subscreveu meu código por inteiro para somente esta linha final. CUIDADO! e ATENÇÃO!)
    }
}