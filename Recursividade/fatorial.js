// fatorial 

// fatorial sem recursividade
const fatorial = (numero) => {
    let n = 1;
    for (let i = numero; i > 0; i--) {
        n = n * i
    }
    return n
}
console.log('sem recursividade:', fatorial(5)) //expect : 120


//fatorial com recursividade
const fatorial2 = (numero) => {
    if (numero <= 1) return;
    return numero * fatorial2(numero - 1)
}
console.log('com recursividade:', fatorial(6)) //expect : 720

