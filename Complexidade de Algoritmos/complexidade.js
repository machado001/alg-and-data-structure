const inverterLista = (lista = []) => {
    let aux ;
    for (let i = 0; i < lista.length/2; i++) {
        aux = lista[i];
        lista[i] = lista[lista.length - i - 1]
        const x = lista[lista.length - i - 1] = aux;
    }
    console.log(lista)
}

inverterLista([1,2,3,4,5,10,'oi',true,'xau','habbibs'])