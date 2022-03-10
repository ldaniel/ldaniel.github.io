---
id: 28
title: 'Code metrics (parte 2) &#8211; Conhecendo algumas métricas'
date: '2012-02-29T13:14:00-03:00'
author: 'Leandro Daniel'

guid: /post/Code-metrics-(parte-2)-Conhecendo-algumas-metricas.aspx
permalink: /code-metrics-parte-2-conhecendo-algumas-metricas/
categories:
    - Arquitetura
    - Post
---

Se você ainda não se convenceu de que [métricas de código são aliadas de um arquiteto](http://leandrodaniel.com/index.php/Code-metrics-(parte-1)-Um-aliado-do-arquiteto), conheça nos tópicos a seguir 2 exemplos simples.

### Lines of Code (SLOC, LOC, ou linhas de código)

A mais simples das métricas. Consiste numa contagem de linhas existentes em uma determinada porção de código fonte. Geralmente sumarizadas por métodos, classes ou assemblies, LOC nos dá de imediato uma clara visão do “tamanho” do software.

Imagine-se na seguinte situação: Você deve dar manutenção num código que não conhece. Você utiliza uma ferramenta para lhe retornar alguns indicadores baseados na métrica LOC e obtém o seguinte resultado:

| **Indicador** | **Valor** |
|---|---|
| Total de métodos com LOC &gt; 10: | 88 |
| Total de métodos LOC &gt; 100: | 40 |
| Total de métodos LOC &gt; 1000: | 7 |

Obviamente, pela Lei de Murphy, sua incumbência será manutenir 3 dos métodos com mais de 1000 linhas de código. Seu gerente quer saber, com precisão de milissegundos, quando você terminará a atividade. Bacana, né? Vamos supor que esse código não possua testes de unidade escritos. Poxa, que legal, não é verdade?

Note que medir e produzir indicadores, por si só, não muda nada. Os métodos continuarão excessivamente grandes, os testes não surgirão do nada e nem a manutenção acontecerá sozinha. Contudo, você terá argumentos para fazer com que seu gerente reveja as estimativas, acrescendo algum grau de incerteza.

Ah, você não tem gerente? Não dá manutenção em sistemas desse “quilate”? Sorte sua. Ainda sim, os indicadores gerados com LOC seriam úteis, já que inevitavelmente, sempre existirá um usuário do sistema que precisa da manutenção executada o quanto antes (ainda mais se tratar de um erro). Ou seja, os indicadores ainda serão interessantes para:

- Analisar qualidade e produtividade do processo de desenvolvimento e manutenção bem como do produto de software construído;
- Qualificar a performance técnica dos produtos do ponto de vista do desenvolvedor;
- Qualificar a performance dos produtos pela perspectiva do usuário;
- Utilizadas para comparar a produtividade de diferentes técnicas e tecnologias;
- Entender e aperfeiçoar o processo de desenvolvimento;
- Determinar parâmetros como quantidade de teste necessário e impacto de mudanças;
- E várias outras razões [explicadas aqui](http://leandrodaniel.com/index.php/code-metrics-parte-1-metricas-de-codigo-sao-aliadas-do-arquiteto/).

Quer ver outra medida transuda para usar no cenário acima?

### Cyclomatic Complexity (CC, ou complexidade ciclomática)

Essa métrica nos diz quais os caminhos (decisões) possíveis de execução dentro de um código. De fato, é uma métrica que expressa a complexidade (notadamente, utilizadas em métodos). Para algumas ferramentas uma contagem de 15 pontos de CC sugere um código difícil de entender e manutenir. Quando obtemos como resultado 30 (ou mais) de CC, temos um código extremamente complexo de entender e manutenir. Considere o código abaixo:

<script src="https://gist.github.com/1943844.js?file=fooMethod.cs" type="text/javascript"></script>

Calculando a CC para o código acima, chegamos ao número 3. Observe abaixo:

![](http://leandrodaniel.com/pics/CyclomaticComplexity.png)

Em linguagens como C#, as seguintes expressões são desconsideradas para cálculo da CC: else | do | switch | try | using | throw | finally | return | object creation | method call | field access. Isso pode variar para outras linguagens, mas no geral, é considerado dessa forma.

A Complexidade Ciclomática nos diz muito a respeito do código. No cenário exposto no tópico anterior, poderíamos entender melhor o quão difícil seria manter o software. A CC também pode demonstrar um design fraco ou mal pensado. Além disso, seria possível ter uma boa noção da quantidade de testes que deveriam (no mínimo) ser escritos levando em consideração uma cobertura de testes de 100% do código.

### Convencido agora?!

Ainda não? Nos próximos posts, veremos outras métricas. 😉