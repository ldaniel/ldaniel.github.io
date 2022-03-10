---
id: 35
title: 'Hey, que tal pensar além do Try&#8230; Catch&#8230; Finally? (parte 2)'
date: '2012-01-31T12:40:00-03:00'
author: 'Leandro Daniel'

guid: /post/Hey-que-tal-pensar-alem-do-Try-Catch-Finally-(parte-2).aspx
permalink: /index.php/hey-que-tal-pensar-alem-do-try-catch-finally-parte-2/
categories:
    - Arquitetura
    - Post
---

Vimos no [último post desta série](http://www.leandrodaniel.com/post/Hey-que-tal-pensar-alem-do-Try-Catch-Finally) a diferença entre **erro** e **exceção**. Enquanto o primeiro é irrecuperável, o outro dá margem para tomarmos uma ou mais ações a fim de permitir que a aplicação continue em execução.

Entendendo isso, o termo *tratamento de exceções* ganha um sentido imediato. Tratar ou manipular uma exceção requer muito critério e atenção ao contexto. Afinal, [existe decisão puramente técnica?](http://www.leandrodaniel.com/post/Em-arquitetura-existe-decisao-puramente-tecnica)

### Essa não! Catching Exception de novo!

![](http://leandrodaniel.com/pics/timer.png)

Quem já trabalhou dando manutenção e suporte a sistemas em produção entende o valor do tempo. Poucos minutos bastam para desgastar (às vezes de forma irrecuperável) a imagem de um produto em caso de atraso na correção de um erro. Grande parte das boas práticas de desenvolvimento visam justamente retornar valor de forma eficaz durante a manutenção. O custo total de propriedade de um software deve levar em consideração o seu custo de manutenção.

Isso posto, podemos aferir que utilizar uma estrutura de “tratamento de exceções” (dedos no ar fazendo pequenos movimentos para realçar as aspas aqui) como vemos a seguir não traz qualquer benefício.

<script src="https://gist.github.com/1710218.js" type="text/javascript">// </script>

//

Na maioria dos casos essas exceções – que foram literalmente “engolidas” – confundem os desenvolvedores com um comportamento errático. Se você não sabe como tratar uma exceção, simplesmente não a capture. Simples assim. Quer logar? Tudo bem, capture e dê um *rethrow*, pelo menos é mais honesto com quem der manutenção depois.

### Melhorias e evoluções no tratamento de exceções

O uso de exceções é um poderoso mecanismo que separa o código funcional do tratamento de erros. Contudo, mesmo que o uso de exceções simplifique a detecção de falhas (trazendo certa elegância para o código de manipulação de exceções) esse mesmo arranjo pode levar à negligência na recuperação de problemas. Esse tipo de falha pode representar: perda de dinheiro; comprometimento da imagem de uma empresa; perda de credibilidade por parte do cliente; outros problemas imensuráveis (ridículos ou, em alguns casos, catastróficos).

As linguagens de programação modernas, como C# e Java (entre tantas outras), têm fornecido cada vez mais suporte a manipulação explícita de exceções. Quando uma restrição semântica é violada ou alguma condição de erro excepcional ocorre, uma exceção é lançada. Uma exceção pode ser implicitamente propagada até o método original de chamada.

No exemplo a seguir vemos uma das muitas possibilidades de tratar exceções em Java.

<script src="https://gist.github.com/1677933.js?file=ExceptionSample.java" type="text/javascript"></script>

![](http://leandrodaniel.com/pics/stophand.png)

<span style="color: #ff0000;">Cuidado, se você é suscetível a flames ou trata desenvolvimento de software como religião, o texto a seguir pode causar incômodos. Nesse caso, pule para o último tópico do post.</span>

Em Java existem três tipos de classes que podem ser “lançadas” durante o tratamento de exceções: checked exceptions (exceções verificadas), unchecked exceptions (exceções não verificadas), e erros.

> *Checked exceptions are exceptions that must be declared in the throws clause of a method. They extend Exception and are intended to be an “in your face” type of exceptions. A checked exception indicates an expected problem that can occur during normal system operation. Some examples are problems communicating with external systems, and problems with user input. Note that, depending on your code’s intended function, “user input” may refer to a user interface, or it may refer to the parameters that another developer passes to your API. Often, the correct response to a checked exception is to try again later, or to prompt the user to modify his input.*
> 
> *Unchecked exceptions are exceptions that do not need to be declared in a throws clause. They extend RuntimeException. An unchecked exception indicates an unexpected problem that is probably due to a bug in the code. The most common example is a NullPointerException. There are many core exceptions in the JDK that are checked exceptions but really shouldn’t be, such as IllegalAccessException and NoSuchMethodException. An unchecked exception probably shouldn’t be retried, and the correct response is usually to do nothing, and let it bubble up out of your method and through the execution stack. This is why it doesn’t need to be declared in a throws clause. Eventually, at a high level of execution, the exception should probably be logged (see below).*
> 
> *Errors are serious problems that are almost certainly not recoverable. Some examples are OutOfMemoryError, LinkageError, and StackOverflowError.*

Começamos a entrar no campo das elucubrações sobre tratamento de exceções e erros. Só para citar um exemplo, veja [esse post](http://tutorials.jenkov.com/java-exception-handling/checked-or-unchecked-exceptions.html) sobre o tema e [esse outro aqui](http://www.javapractices.com/topic/TopicAction.do?Id=129).

Pesquisando a respeito você encontrará muitos debates sobre o assunto. Se sua pesquisa se estender a outras linguagens, você chegará a conclusão que existe um sem fim de possibilidades, recomendações, padrões e estratégias para desenhar e arquitetar o tratamento de exceções.

### Então devo desistir do assunto?

Claro que não! Ninguém é melhor do que você para criticar e decidir o que faz sentido sobre um determinado assunto. O que pode ser considerado uma vantagem para um pode não ser verdade para outro. Tudo depende do contexto, cenário e atores envolvidos. Nos próximos posts apresentarei várias considerações e técnicas. ![Smiley piscando](http://leandrodaniel.com/pics/wlEmoticon-winkingsmile_1.png)