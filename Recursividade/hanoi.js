function hanoi(num_discos, torre_A, torre_B, torre_C) {
    if (num_discos > 0) {
        hanoi(num_discos - 1, torre_A, torre_C, torre_B)
        console.log(`mover:${torre_A} -> ${torre_B}`)
        hanoi(num_discos - 1, torre_C, torre_B, torre_A)
    }
}
hanoi(4, 'A', 'B', 'C')