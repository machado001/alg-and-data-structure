recursividade é aquela parada chamar ela mesma, tipo uma função chamar ela mesma. só tomar cuidado pra não cair num loop infinito. deve-se então haver uma condição de parada.
não se aplica somente a funções.

exemplos de recursividade com fatorial e tower of hanoi:


fatorial : sabendo que n! = n* (n-1)!, esse (n-1)! tá pedindo pra usar recursividade pois ele tbm é um fatorial.

tower of hanoi : esse foi hard de entender, bom usar o vídeo como auxílio. objetivo: os discos devem ir da torre A para a torre B com a mesma configuração inicial encontrada na torre A. a torre C é apenas um auxiliar.

 há duas regras: deve-se mexer em um disco por vez e discos grandes não podem ficar em cima de discos pequenos.

 se o disco da base é o número n, mover-se-á (n-1) discos para a torre C então o disco da base ( disco n ) vai pra torre B, depois, os ( n - 1 ) discos vão para a torre B. As micro-operações não importam, apenas o algoritmo acima. ( explicação fica mais clara no momento 24:20 da aula 02 no youtube) 