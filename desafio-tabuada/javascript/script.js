function tabuada() {
    let num = document.getElementById('txt1')
    let tab = document.querySelector('select#seltab')

    if (num.value.length == 0){
        window.alert('[ERRO] Por favor digite um número!')
    } else {
        let n = Number(num.value)
        let c =1
        tab.innerHTML = ''
        while (c <= 10){                    // for (var c=i ; c <= 9 ;t = c*c)
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }                              
    }    
}