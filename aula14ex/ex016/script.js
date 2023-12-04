function contar(){
    var ini = window.document.getElementById("txti")
    var fim = window.document.getElementById("txtf")
    var passo = window.document.getElementById("txtp")
    var res = document.getElementById('res')

    if(ini.value.length == 0 || fim.value.legth == 0 || passo.value.length == 0 ){
        window.alert('{ERRO} Falton dados!')
    }else{
        res.innerHTML = 'Contando:'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if( i < f){
            //Contagem Crescente
             for(var c = i; c <= f; c += p){
            res.innerHTML += `${c} \u{1F449}`
        }}
      else{
            //Contagem Regressiva
            for(var c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
        }
            
    }
   
}
