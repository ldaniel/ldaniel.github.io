---
id: 23
title: 'Code metrics (parte 6) &#8211; Queryable Source Code'
date: '2012-03-12T10:14:00-03:00'
author: 'Leandro Daniel'

guid: /post/Code-metrics-(parte-6)-Queryable-Source-Code.aspx
permalink: /index.php/code-metrics-parte-6-queryable-source-code/
categories:
    - Arquitetura
    - Post
---

Retomando [nossa jornada](http://leandrodaniel.com/?tag=/Code+Metrics) após um breve hiato (gripe =S), vamos transportar o uso de métricas de código para um interessante patamar: ***"queryable source code"***.

![](http://leandrodaniel.com/pics/wtfMeme.png)WTF man?!?

Ok, essa expressão não existe (creio eu), mas a ideia que sempre vem na minha cabeça quando conseguimos lançar consultas sobre um código fonte é a de *"queryable source code"* (análoga a forma como tornamos um objeto "consultável").

O que estou falando aqui vai além de um \[CTRL + F\] em uma IDE. Obviamente, essa capacidade que um código fonte adquire de ser "consultável" advém de ferramentas.

Da mesma forma que utilizamos ferramentas para coletar métricas sobre um código fonte, também utilizaremos delas para (através de métricas) termos uma engine de consulta, semelhante ao que temos no SQL, por exemplo.

Mas, que tipo de consulta útil poderíamos fazer em nosso código-fonte? Que diferença teríamos de uma análise de indicadores oriundos de métricas? E ainda, [por que raios o meme de WTF tem o Jackie Chan](http://knowyourmeme.com/memes/my-brain-is-full-of-fk)?

A resposta para as duas primeiras questões será dada com base numa necessidade muito comum em desenvolvimento de software: detecção de *dead code*.

### Dead code

Chamamos de "código morto" qualquer linha ou trecho de código não acessível por nenhum caminho de execução de um programa. Por ser (quase sempre) desnecessário, dead code eleva a complexidade de um software – em suma, faz o código feder.

Note que dead code pode ser:

- um código (por exemplo, um método, um membro de classe ou uma classe) não utilizado(a) por nenhum outro(a);
- um código redundante (implorando por *refactoring*);
- um código inacessível (o famoso unreachable code, às vezes de difícil detecção).

Porém, nem sempre um código inacessível é um dead code. Ele pode simplesmente ter sido "morto" por um IF mal codificado. Veja:

 <script src="https://gist.github.com/2029056.js?file=UnreachableCode.pas" type="text/javascript"></script>

A natureza errática dos "resultados desejados versus os resultados obtidos" durante o exercício de codificação nos dá um alerta: Todo código morto, numa primeira análise, deve ser considerado um **potencial** código morto!

### Como pensar numa consulta sobre um código que nos retorne "dead code"?

Imagine uma solution escrita sobre o .NET Framework em suas mãos. Deram-lhe a missão de selecionar potenciais métodos "mortos". A primeira coisa que temos que fazer, é eliminar todas as características que nos distancie de afirmações taxativas, tais como "- Esse método com certeza não está sendo usado por ninguém!".

Pense bem, qualquer método marcado como Public pode ser utilizado por algum outro código. É difícil precisarmos o contrário, simplesmente pela acessibilidade do método permitir que isso ocorra. Um assembly externo que consuma o seu código pode utilizar esse método, correto? Nossa consulta deve, portanto, ignorar esse tipo de método. O mesmo ocorre para métodos marcados como Protected.

Outro tipo específico de método que não pode ser considerado são *Entry Points*. Um Main() method, por exemplo, nunca será usado diretamente por algum código, pois ele é o ponto de entrada padrão de uma aplicação.

Um construtor de classe, assim como um finalizador, são métodos especiais. O código IL nunca chama explicitamente construtores ou finalizadores de uma classe. Da mesma forma, código IL nunca chama explicitamente métodos de interfaces.

Após considerarmos as características expostas, podemos acrescentar uma métrica que potencializará o resultado da consulta. Estamos falando de acoplamente aferente (Ca) aplicado em métodos. Juntando tudo, podemos expressar essa consulta no pseudo-código abaixo:

 <script src="https://gist.github.com/2021922.js" type="text/javascript"></script>

Se uma ferramenta for capaz de interpretar nosso pseudo código de consulta, teremos condições de elencar rapidamente potenciais métodos mortos em nosso código.

### Mas, sempre tem um "mas"…

Perceba, contudo, que analisar "unreachable code" é um pouco mais complicado. Embora algumas IDEs (como o Visual Studio) consigam nos dizer em tempo de compilação quando temos "unreachable code", nem sempre isso será possível. Dependendo de como um IF for codificado, por exemplo, somente através de escrita de testes de unidade conseguiremos ter uma noção sobre a cobertura de código, o que pode nos dar algum indício de potenciais códigos mortos.

Nossa jornada continua no próximo post. Até lá! 😉