---
id: 34
title: 'Hey, que tal pensar além do Try&#8230; Catch&#8230; Finally? (parte 3)'
date: '2012-02-01T15:14:00-03:00'
author: 'Leandro Daniel'

guid: /post/Hey-que-tal-pensar-alem-do-Try-Catch-Finally-(parte-3).aspx
permalink: /index.php/hey-que-tal-pensar-alem-do-try-catch-finally-parte-3/
categories:
    - Arquitetura
    - Post
---

Muito bem! Vimos no [primeiro post da série ](http://www.leandrodaniel.com/post/Hey-que-tal-pensar-alem-do-Try-Catch-Finally)a diferença entre erro e exceção, e no último tivemos um [vislumbre da amplitude do assunto “Exception Handling”](http://www.leandrodaniel.com/post/Hey-que-tal-pensar-alem-do-Try-Catch-Finally-(parte-2)). Estamos preparados para avançar um pouco mais nessa jornada e tomar contato com os…

### … Jargões comuns em tratamento de exceções

Quando temos que manipular exceções, devemos desenhar uma estratégia robusta e bem-planejada. Isso é vital durante a fase de concepção, e ajudará no momento de implementação a evitar riscos. Apenas para citar algumas situações: exposição de mensagens de erro que contenham informações sensíveis, ou sair da aplicação em um estado inconsistente gerando erros nos dados quando um exceção ocorre.

Veja a seguir alguns jargões utilizados quando falamos em manipulação de exceções.

##### Wrap handler

A técnica de encapsular ou cobrir (wrap) uma exceção com outra pode trazer a capacidade de enriquecer com mais informações o rastreamento de pilha (stack trace). Por outro lado, o stack trace pode ficar demasiadamente longo (e irritante). Na maioria das vezes apenas o rastreamento de pilha raiz é interessante.

##### Replace handler

Consiste em substituir uma exceção por outra. A princípio parece uma péssima ideia, mas pode fazer sentido em determinados contextos onde informações sensíveis precisam ser mascaradas e substituídas por mensagens customizadas.

##### Logging handler

Um manipulador de logging é capaz de formatar a exceção (mensagem, stack trace e demais informações) e gerar um registro que pode ser publicado em diversos meios (Event Viewer, banco de dados, e-mail, arquivo texto, entre outros) para posterior auditoria.

##### Fault Contract exception handler

Este tipo de manipulador de exceção é utilizado para validar os limites de um contrato de uso de um serviço, classe, entidade, etc.

##### Interception handler

Consiste em interceptar exceções utilizando técnicas de [AOP](http://en.wikipedia.org/wiki/Aspect-oriented_programming). Existem alguns frameworks (Java e C#) capazes de realizar interceptação em runtime e adicionar comportamento comum.

##### Multiple catch blocks

Muitas linguagens de programação suportam múltiplos blocos de catch. Segundo o Princípio de Responsabilidade Única (ou [SRP](http://www.objectmentor.com/resources/articles/srp.pdf), oriundo do [SOLID](http://en.wikipedia.org/wiki/SOLID_(object-oriented_design))), nunca deve haver mais de um motivo para uma classe mudar. A seguir temos dois exemplos de multiple catch blocks, onde podemos observar no segundo uma indicação muito forte de que o método pode estar quebrando o SRP.

<script src="https://gist.github.com/1716822.js" type="text/javascript"></script>

##### Propagate exception

Embora toda exceção deva ser tratada, nem sempre é possível tratar uma exceção no mesmo escopo do método cuja invocação gerou a exceção. Nessas situações, devemos propagar a exceção para um nível acima na pilha de chamadas. Também é conhecido como *rethrow* de uma exceção.

##### Fault Tolerance Engineering

Técnicas para construção de sistemas com tolerância a falhas, bem como seu gerenciamento durante o ciclo de vida de uma aplicação têm sido alvo de debates há muitas décadas, sendo tema de [diversos livros](http://www.amazon.com/s?ie=UTF8&rh=n%3A283155%2Ck%3AFault%20tolerance%20(Engineering)&page=1) e pesquisas acadêmicas. Por estar relacionado com o tratamento e manipulação de exceções (seja em fase de design ou implementação), requer especial atenção quando tratamos de situações que exigem alta disponibilidade ou confiabilidade. Geralmente sistemas com essa características são baseados em redundância, quase sempre exigindo componentes especiais e/ou algoritmos específicos.

Obviamente, existem outros termos utilizados. Mas agora que vimos os mais comuns, para finalizar por hoje, vamos (tentar) nos divertir com…

### … O horror dos anti-patterns de tratamento de exceções

Veja alguns exemplos de anti-patterns retirados do [java.net](http://today.java.net) (com algumas modificações que tomei a liberdade de fazer):

**-&gt; Log and Throw:** escolha uma das duas coisas, nunca as duas!

**-&gt; Catch Exception:** capturar exceções do tipo Exception (tanto em Java quanto em C#, por exemplo) quase sempre denota que um plano de tratamento de exceções não foi pensado com o devido cuidado. Tratar a exceção mais genérica pode indicar pouco conhecimento das funções de suas classes (ou no pior caso, demonstrar um design ruim).

**-&gt; Throwing the Kitchen Sink:** Lançar várias exceções verificadas do seu método em geral é algo bom, contanto que exista de fato possíveis cursos de ação que o chamador pode querer tomar dependendo de qual exceção foi acionada.

**-&gt; Catching Exception:** como vimos no [post anterior](http://www.leandrodaniel.com/post/Hey-que-tal-pensar-alem-do-Try-Catch-Finally-(parte-2)), cada vez que uma *catching exception* é codificada um panda morre em algum lugar do planeta.

**-&gt; Destructive Wrapping:** muito cuidado ao fazer o wrap de uma exceção, dê significado e acrescente informações de valor indiscutível.

**-&gt; Log and Return Null:** quase sempre uma péssima ideia.

**-&gt; Catch and Ignore:** o *On Error Go to Next* modermo!

**-&gt; Throw from Within Finally:** o bloco Finally existe para ser executado, certo? nada mais justo que deixá-lo em paz.

**-&gt; Multi-Line Log Messages:** alguns arquivos de log pode atingir tamanhos absurdos (para não dizer ridículos), portanto, cuidado!

![](http://leandrodaniel.com/pics/jason_icon.png)