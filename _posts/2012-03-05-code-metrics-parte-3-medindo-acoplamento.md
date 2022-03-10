---
id: 27
title: 'Code metrics (parte 3) &#8211; Medindo acoplamento'
date: '2012-03-05T10:50:00-03:00'
author: 'Leandro Daniel'
layout: post
guid: /post/Code-metrics-(parte-3)-Medindo-acoplamento.aspx
permalink: /index.php/code-metrics-parte-3-medindo-acoplamento/
categories:
    - Arquitetura
    - Post
---

Como comentei antes, [métricas de código são aliadas de um arquiteto](http://leandrodaniel.com/index.php/Code-metrics-(parte-1)-Um-aliado-do-arquiteto). Basta ter em mente que, apenas [utilizando LOC e CC](http://leandrodaniel.com/index.php/Code-metrics-(parte-2)-Conhecendo-algumas-metricas), já podemos “ouvir” muita coisa que nosso (pobre) código tenta nos dizer.

Quando participamos de discussões sobre design é quase certo que ouviremos expressões como “acoplamento fraco” ou “acoplamento forte”. O acoplamento entre classes ou subsistemas é uma medida da interconexão entre essas classes ou subsistemas. Sendo assim, acoplamento forte significa que as classes relacionadas precisam conhecer detalhes internos umas das outras, as alterações se propagam pelo sistema, e o sistema é potencialmente mais difícil de entender.

> Em suma, as metas por trás da obtenção de um acoplamento fraco entre classes e módulos são:
> 
> 1. Tornar o código mais fácil de ler;
> 2. Tornar nossas classes mais simples para o consumo de outros desenvolvedores, ocultando a parte feia” do funcionamento interno em APIs bem projetadas;
> 3. Isolar possíveis alterações em uma área pequena do código;
> 4. Reutilizar classes em contextos completamente novos.

### Acredite, todos falam em redução de acoplamento

A [Lei de Demeter](http://en.wikipedia.org/wiki/Law_of_Demeter) é um princípio básico do design. A definição resumida é: fale somente com seus amigos mais próximos (é um alerta quanto a possíveis riscos presentes no código com relação a dependência). Assim como a Lei de Demeter, uma boa quantidade de princípios, práticas e orientações endereçam soluções para diminuir o acoplamento, veja:

- [Tell, Don’t Ask](http://pragprog.com/articles/tell-dont-ask);
- [Command/Query Separation](http://martinfowler.com/bliki/CommandQuerySeparation.html);
- [Feature Envy](http://msdn.microsoft.com/en-us/magazine/cc947917);
- [Shotgun Surgery](http://msdn.microsoft.com/en-us/magazine/cc947917);
- [Say It Once and Only Once](http://msdn.microsoft.com/en-us/magazine/cc947917);
- [IoC](http://reverb.leandrodaniel.com/search.aspx?q=injeção%20de%20dependência);
- [Dependency Injection](http://reverb.leandrodaniel.com/search.aspx?q=injeção%20de%20dependência);
- … [e muito mais!](http://www.google.com/search?q=%22how+to%22+decrease+coupling&meta=)

Pensando em acoplamento como uma métrica de código, veremos a seguir 2 exemplos importantíssimos.

### Afferent / efferent Coupling (Ca e Ce, ou acoplamento aferente / eferente)

Como mencionado nos posts anteriores, não existe muito sentido em ficar extraindo manualmente qualquer tipo de métrica de software. Métricas devem ser baratas e capazes de serem extraídas rapidamente (com apoio de ferramentas).

Isso posto, temos que:

> O **acoplamento aferente** (Ca) representa a contagem de quantas classes diferentes referem-se à classe atual, por meio de campos ou parâmetros

Por outro lado:

> O **acoplamento eferente** (Ce) representa a contagem de quantas classes diferentes a classe atual faz referência, por meio de campos ou parâmetros

Quando pensamos em métricas relacionadas a acoplamento, começamos a perceber a necessidade de expressá-las visualmente. Observe no grafo abaixo o resultado da análise do acoplamento existente entre as classes: A, B, C, D, E, F, G e H.

[![Slide1](http://leandrodaniel.com/pics/Slide1_thumb.png "Slide1")](http://leandrodaniel.com/pics/Slide1.png)

Pegando a classe D como referência e destacando a métrica Ca, teríamos:

[![Slide2](http://leandrodaniel.com/pics/Slide2_thumb.png "Slide2")](http://leandrodaniel.com/pics/Slide2.png)

Mas se destacássemos a métrica Ce, tomando como base a mesma class D, obteríamos:

[![Slide3](http://leandrodaniel.com/pics/Slide3_thumb.png "Slide3")](http://leandrodaniel.com/pics/Slide3.png)

Outras leituras interessantes poderiam ser rapidamente retiradas do grafo, como por exemplo, o relacionamento cíclico existente entre as classes A, G e H.

[![Slide4](http://leandrodaniel.com/pics/Slide4_thumb.png "Slide4")](http://leandrodaniel.com/pics/Slide4.png)

Note que Ce e Ca podem mostrar, rapidamente, indícios de um design “mal cheiroso”. Essas métricas também servem para avaliarmos se regras de comunicação entre assemblies (definidas para um projeto) foram quebradas.

### Até aqui…

Com as quatro métricas vistas até agora ([LOC](http://leandrodaniel.com/index.php/Code-metrics-(parte-2)-Conhecendo-algumas-metricas), [CC](http://leandrodaniel.com/index.php/Code-metrics-(parte-2)-Conhecendo-algumas-metricas), Ce e Ca), diversas informações interessantes podem ser extraídas do seu código fonte. No próximo post, veremos como combinar essas métricas para criarmos medidas de qualidade. Até lá! 😉