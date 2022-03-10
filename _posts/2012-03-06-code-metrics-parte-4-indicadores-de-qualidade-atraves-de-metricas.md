---
id: 26
title: 'Code metrics (parte 4) &#8211; Indicadores de qualidade através de métricas'
date: '2012-03-06T13:27:00-03:00'
author: 'Leandro Daniel'
layout: post
guid: /post/Code-metrics-(parte-4)-Medindo-Qualidade.aspx
permalink: /index.php/code-metrics-parte-4-indicadores-de-qualidade-atraves-de-metricas/
categories:
    - Arquitetura
    - Post
---

Até aqui vimos um pequeno conjunto de métricas simples que podem ser extraídas do código-fonte de um software. São elas:

| **Métrica** | **Descrição** | **O que ela mostra?** |
|---|---|---|
| [LOC](http://leandrodaniel.com/index.php/Code-metrics-(parte-2)-Conhecendo-algumas-metricas) | linhas de código | contagem do número de linhas (classe, método ou *assembly*) |
| [CC](http://leandrodaniel.com/index.php/Code-metrics-(parte-2)-Conhecendo-algumas-metricas) | complexidade ciclomática | contagem do número de caminhos de execução possíveis dentro de um código (comumente usado em métodos) |
| [Ca](http://leandrodaniel.com/index.php/Code-metrics-(parte-3)-Medindo-acoplamento) | acoplamento aferente | representa a contagem de quantas classes diferentes referem-se à classe atual, por meio de campos ou parâmetros |
| [Ce](http://leandrodaniel.com/index.php/Code-metrics-(parte-3)-Medindo-acoplamento) | acoplamento eferente | representa a contagem de quantas classes diferentes a classe atual faz referência, por meio de campos ou parâmetros |

Tendo em mente a diferença entre [medida, métrica e indicador](http://leandrodaniel.com/index.php/Code-metrics-(parte-1)-Um-aliado-do-arquiteto), estamos habilitados a compor alguns itens interessantes como, por exemplo, um indicador de qualidade. Sendo assim, que rufem os tambores, pois veremos um exemplo de…

### Indicador de "nível de instabilidade de um assembly"

Embalado pela pergunta feita pelo mestre [@vsenger](http://twitter.com/vsenger) nos [comentários do post anterior](http://leandrodaniel.com/index.php/Code-metrics-(parte-3)-Medindo-acoplamento.aspx#id_1d78d79a-252a-4160-86f4-96fc51a387d5), vou focar o exemplo na análise de componentes (estou considerando que os mesmos estão divididos fisicamente em *assemblies*, ou logicamente em namespaces – para linguagens como Java ou C#).

Além de ser viável medir o acoplamento, complexidade e tamanho de *assemblies* utilizando as 4 métricas apresentadas, é possível combiná-las a fim de obter a compreensão de uma determinada característica do software. Para compreendermos a criação de um indicador, é necessário aplicar diversas disciplinas que orientam e embasam as atividades envolvidas nessa tarefa. Uma alternativa é utilizar indicadores de mercado, que já foram trabalhados e validados em contextos semelhantes ao que você pretende utilizar.

[Robert Martin](http://www.objectmentor.com/omTeam/martin_r.html) (a.k.a. Uncle Bob), em seu excelente livro [Agile Software Development: Principles, Patterns, and Practices in C#](http://www.amazon.com/Principles-Patterns-Practices-Robert-Martin/dp/0131857258/), teorizou que um *assembly* é considerado estável se seus tipos são usados ​​por um grande tipo de *assemblies* de terceiros. Por outro lado, se um assembly contém muitos tipos abstratos (ou seja, interfaces e classes abstratas) e poucos tipos concretos, ele é considerado abstrato.

Com base nas teorias do Uncle Bob, foi criado o indicador **I** (instabilidade, do inglês *instability*). Veja que interessante os passos para obtenção deste indicador:

1. Mede-se o acoplamento eferente (Ce) de um *assembly*;
2. Mede-se o acoplamento aferente (Ca) deste mesmo *assembly*;
3. Com os resultados anteriores, obtém-se a proporção de acoplamento eferente (Ce) para o total de acoplamento (Ce + Ca).

Ou seja:

> **I = Ce / (Ce + Ca)**

Onde podemos aferir que:

> O intervalo para este indicador é de 0 a **1**, com **I = 0** indicando um *assembly* completamente estável e **I = 1** indicando um conjunto completamente instável.

Simples e significativo!

### Utilizando o indicador na prática

Tomemos como exemplo a [Enterprise Library](http://msdn.microsoft.com/en-us/library/ff648951) para avaliar a dependência entre os *assemblies* e os respectivos graus de instabilidade. Vamos analisar o gráfico de dependência entre alguns *assemblies*, logo abaixo.

![](http://leandrodaniel.com/pics/dependgraph.png)

Medindo a instabilidade de cada *assembly* obtemos:

<span style="color: #ff0000">**Update (01/05/2012): Valores de (I) e considerações.**</span>

| **Assembly** | **Alias** | **(I)** |
|---|---|---|
| Microsoft.Practices.EnterpriseLibrary.Common | Common | 1 |
| Microsoft.Practices.Unity | Unity | 0,54913 |
| Microsoft.Practices.Unity.Interception | Interception | 0,9759 |
| Microsoft.Practices.ServiceLocation | Service Location | 0,78261 |

Analisando os resultados:

- O *assembly* menos estável do conjunto é o Common;
- O *assembly* mais estável do conjunto é o Unity;

A princípio, o *assembly* Unity parece ser muito mais fácil de manutenir que os demais, já que é mais estável, correto? Pois a resposta é…

### Sim e não!

What?!? Are you kidding me?

Olha só, em algum momento nós definimos qual seria o item de qualidade que queríamos avaliar antes de montar o indicador? E mais, por acaso estipulamos o que significa qualidade em nosso contexto? O que significa um código fácil de manutenir?

Percebam que, propositalmente, fui exercitando a lógica de criação e uso do indicador sem definir antes os seus objetivos. Esse indicador não nos diz muita coisa sem um contexto bem definido de uso. Big mistake!

No próximo post, veremos que a análise da pergunta "Qual *assembly* é mais fácil de manutenir?" pode ter várias respostas dependendo do contexto. Até lá! 😉