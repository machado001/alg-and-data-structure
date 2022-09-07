function hanoi(num_discos, torre_A, torre_B, torre_C) {
    if (num_discos > 0) {
        hanoi(num_discos - 1, torre_A, torre_C, torre_B)
        console.log(`mover:${torre_A} -> ${torre_B}`)
        hanoi(num_discos - 1, torre_C, torre_B, torre_A)
    }
}
hanoi(4, 'A', 'B', 'C') // expect todos os passos sequenciais para resolver a torre. sabe-se que o número mínimo de movimentos para completar a torre é ( (2^num_discos) - 1 ), aqui seria então 15 movimentos mínimos.