---
id: 25
title: 'Code metrics (parte 5) &#8211; A importância do contexto'
date: '2012-03-07T11:05:00-03:00'
author: 'Leandro Daniel'

guid: /post/Code-metrics-(parte-5)-A-importancia-do-contexto.aspx
permalink: /code-metrics-parte-5-a-importancia-do-contexto/
categories:
    - Arquitetura
    - Post
---

A essa altura, espero tê-lo convencido de que [<span style="color: #2970a6">métricas de código são aliadas de um arquiteto</span>](http://leandrodaniel.com/index.php/Code-metrics-(parte-1)-Um-aliado-do-arquiteto). Já conhecemos as métricas [<span style="color: #2970a6">LOC e CC</span>](http://leandrodaniel.com/index.php/Code-metrics-(parte-2)-Conhecendo-algumas-metricas), e através de outras duas métricas apresentadas ([Ca e Ce](http://leandrodaniel.com/index.php/Code-metrics-(parte-3)-Medindo-acoplamento)) entendemos como o indicador [I (instability)](http://leandrodaniel.com/index.php/Code-metrics-(parte-4)-Medindo-Qualidade) é produzido.

No [post anterior](http://leandrodaniel.com/index.php/Code-metrics-(parte-4)-Medindo-Qualidade), chegamos a conclusão que de nada adianta coletarmos uma métrica ou indicador se não soubermos exatamente o que queremos analisar. Do contrário, podemos até mesmo ser induzidos a interpretações errôneas a respeito do nosso software. Considero essa a questão mais importante quando lidamos com métricas.

Em alguns casos, é necessário "calibramos" as métricas de acordo com a realidade presente no contexto em que o software está envolvido. Exemplo: o resultado "0.7689" de (I) em um assembly pode ser aceitável no caso de um framework, mas ruim para um CRUD.

A genial figura abaixo, criada por [Thom Holwerda](http://www.osnews.com/user/uid:5/), apresenta a medida **WTFs/minute** (algo como *“Que\_Porra\_é\_Essa / minuto”*) como um indicador da qualidade de um software.

[![wtfm](http://leandrodaniel.com/pics/wtfm.jpg "wtfm")](http://www.osnews.com/story/19266/WTFs_m)

Interessante notar que, apesar de ser uma piada, a métrica acima poderia ser válida se o contexto assim exigisse. Dependendo da situação, teremos que compor um indicador utilizando vários outros. No exemplo que vimos no [post anterior](http://leandrodaniel.com/index.php/Code-metrics-(parte-4)-Medindo-Qualidade), utilizamos o indicador (I), contudo, não determinamos com antecedência qual análise gostaríamos de fazer.

Proponho agora definirmos como objetivo a seguinte análise para o exemplo mencionado:

> Para o framework que estamos analisando, é importante verificarmos tanto a instabilidade de cada assembly como também o quanto ele é abstrato ou concreto. Essa medida será útil para conhecermos o impacto numa eventual troca do framework.

Com um objetivo definido, nossa tarefa de criação e obtenção de um ou mais indicadores parece ter mais sentido, pois estamos utilizando um contexto claro. Como já temos um indicador que nos dá o nível de instabilidade do assembly, precisamos agora de um…

### Indicador de "nível de abstração de um assembly"

Novamente, baseado nas teorias do Tio Bob, o indicador será definido da seguinte forma:

> A proporção do número de tipos abstratos internos (como por exemplo, classes e interfaces abstratas) em relação ao número de tipos internos total.
> 
> O intervalo para este indicador é de 0 a **1**, com **A = 0** indicando um assembly completamente concreto e **A = 1** indicando um conjunto completamente abstrato.

Ou seja:

> **A = (total de tipos abstratos internos) / (total de tipos internos)**

Juntando a métrica (I) obtida no último post com a nova (A) teremos:

<font color="#ff0000">**Update (01/05/2012): Valores de (I) e considerações.**</font>

| **Assembly** | **Alias** | **(I)** | **(A)** |
|---|---|---|---|
| Microsoft.Practices.EnterpriseLibrary.Common | Common | 1 | 0,19776 |
| Microsoft.Practices.Unity | Unity | 0,54913 | 0,2234 |
| Microsoft.Practices.Unity.Interception | Interception | 0,9759 | 0,11245 |
| Microsoft.Practices.ServiceLocation | Service Location | 0,78261 | 0,28571 |

E representando a nossa "cereja do bolo", utilizaremos como forma de apresentação dos resultados um gráfico formado por dois eixos (Instabilidade/Estabilidade x Abstração/Concretude).

Maravilha!

### Apresentando os resultados

Plotando os resultados obtidos em um plano cartesiano, considerando um eixo para mostrarmos a relação Instabilidade/Estabilidade e outro para Abstração/Concretude, obtemos o resultado abaixo:

<font color="#ff0000">**Update (01/05/2012): Nova legenda dos eixos.**</font>

[![image](http://leandrodaniel.com/pics/image_thumb_1.png "image")](http://leandrodaniel.com/pics/image_1.png)

Cool! Veja como que a conclusão obtida no post anterior não se mostra verdadeira considerando nossa meta de avaliação. Quanto mais próximo do eixo pontilhado no gráfico, melhor um assembly será para ser substituído, já que este terá um melhor equilíbrio entre as duas medidas.

Continuaremos nossa jornada nos próximos posts.