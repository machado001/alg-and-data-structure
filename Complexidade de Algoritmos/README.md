Mensurar a eficiência de um algoritmo; ver se um alg é mais eficiente que o outro computacionalmente.

Ao medir, podemos comparar qual algoritmo possui mais eficácia.

Há dois tipos de complexidade: de tempo e de espaço. Aqui, ver-se-á somente a complexidade de tempo.

Complexidade de tempo: determinar quanto tempo leva a execução do algoritmo, podendo utilizar dois metodos : o empírico ou o analítico.

Empírico: cronometrar o tempo de execução do algoritmo, seja por cronômetros manuais ou computacionais. não é um método muito interessante, pois há muitas variáveis.

Analítico: Determinar um valor próximo ao número de passos que é realizado pelo algoritmo e expressa essa complexidade com uma notação matemática. É um metodo mais justo.

A complexidade varia de acordo com os parametros de entrada do algoritmo; 3 casos base: complexidade do pior caso, do caso médio e a do melhor caso;

pior: mede a complexidade do alg considerando o MAIOR NUMERO DE PASSOS POSSÍVEIS, considerando uma entrada que contribui para tal. Quando não está especificado se é do melhor caso , médio caso, ou pior caso, fica subentendido que é do pior caso. É sempre o melhor caso a se considerar, no entanto se o pior caso for muito,muito,muito difícil de acontecer, pode-se explorar os casos médio e melhor .

médio: depende da entrada/conjunto de entrada que estamos definindo. deve-se definir vários conjuntos de entradas e ver qual conjunto provocará um numero de passos mediano em relação aos demais.

melhor: o conjunto de entradas que remete o menor número de passos do algoritmo.

Notações de complexidade: expressar a complexidade dos algoritmos considerando apenas a quantidade relevante ( não da a quantidade exata de passos ) a ser analizada e comparar os alg. notações mais utilizadas : omicron, omega, teta. aqui ver-se-á a omicron.

Como determinar o que é relevante? 2 passos:

1)considerar apenas entrada suficientemente grandes para aquele programa (N's) . Não considerar entradas pequenas porque, por mais ineficiente que seja o alg, ele executará rápido, pq é pequeno.

2)desconsiderar adiçao, subtraçao, multiplicaçao ou divisao de passos constantes.

![oloco_dog](https://user-images.githubusercontent.com/101916850/189387728-2ff93ce9-9473-440f-9acc-142af7cd9235.PNG)


Notação omicron: "O numero de passos de um alg sempre será menor ou igual a sua parte relevante multiplicada por uma constante." . 

Na prática , o que ser feito p determinar o número de passos? Só considerar o loop que possui mais sub-loops no seu algoritmo. Tudo que está fora deste loop é desconsiderado.

Em algoritmos recursivos, a tática é declarar um i = 0, loopá-lo e tacar no console log p ver qnts vezes ele rodou. se perceber q ta dando dobro, então o alg é 2n, ou dando o quadrado, ent é n², etc.

