---
id: 231
title: 'O exemplo da Injeção de Dependência na tomada de decisão de um arquiteto'
date: '2009-05-06T23:57:00-03:00'
author: 'Leandro Daniel'
layout: post
guid: /post/O-exemplo-da-Injecao-de-Dependencia-na-tomada-de-decisao-de-um-arquiteto.aspx
permalink: /index.php/o-exemplo-da-injecao-de-dependencia-na-tomada-de-decisao-de-um-arquiteto/
categories:
    - Arquitetura
    - Post
    - Reverberando
---

 Parte do trabalho de um arquiteto de software consiste em empregar da melhor forma possível técnicas e boas práticas para construir uma aplicação levando em consideração variáveis como:

 – tecnologias disponíveis;   
 – interesses de negócio;   
 – durabilidade da aplicação;   
 – custo;   
 – expectativa do usuário;   
 – *skill* da equipe técnica;   
 – entre outras.

 Trocando em miúdos, **uma decisão errada impacta significativamente na consonância entre essas variáveis**. Vamos pegar como exemplo um problema conhecido por quem desenvolve software chamado **alto acoplamento**.

 <font color="#400000"><font color="#804040">(Aqui em abro um grande parêntesis. O termo **acoplamento** às vezes é confundido com **coesão**, contudo são dois conceitos diferentes. Uma classe pode ser coesa e altamente acoplada com outras classes, como também pode acontecer de ser desacoplada de outras classes e possuir baixa coesão. Coesão está relacionado ao Princípio da Responsabilidade Única (PRU), ou seja, se uma classe possui mais do que um motivo para ser alterada, possivelmente ela está fazendo mais do que devia. Já o acoplamento refere-se ao quanto que uma classe depende de outra classe, assim sendo, o ideal seria termos sempre **alta coesão e baixo acoplamento**.)</font></font>

 Dentre as técnicas mais utilizadas para resolver o problema do alto acoplamento a **injeção de** **dependência** (DI, *dependency injection*) <font color="#004080">**re**</font>ssurgiu com grande destaque, em parte graças a crescente prática de testes unitários e desenvolvimento baseado em testes (TDD). Martin Fowler certamente foi um dos grandes responsáveis pela popularização do termo injeção de dependência, considerado-o um tipo de IoC (*Inversion of Control*). Apesar de não ser nova, diversas bibliotecas de DI, conhecidas como *lightweight container*, facilitam a utilização desta técnica que, somada ao motivos do seu reaparecimento citados no início desse parágrafo, destacam-na com uma das “modas do momento”.

 Um bom arquiteto, na minha opinião, deve tomar suas decisões levando em consideração as variáveis citadas no primeiro parágrafo, elencando uma série de questões pertinentes, e com base nelas procurando as respostas mais sensatas para a sua realidade. Pensando no tema injeção de dependência:

- A aplicação de DI pode representar um risco elevado levando em consideração o *skill* da equipe?
- A empresa tem como cultura a prática de testes (TDD ou qualquer outra técnica)?
- Se a aplicação não tem previsão de vida longa vale a pena aplicar DI?

 E o caminho inverso também deve ser ponderado:

- Eu consigo aumentar o *skill* da minha equipe aplicando uma nova técnica?
- Eu consigo mostrar os benefícios de praticarmos TDD já que DI nos propicia isso mais facilmente?
- Eu consigo comprovar que os custos com manutenção serão menores se empregarmos melhores técnicas agora, ainda que isso onere um pouco mais o projeto?

 Respondidas as questões, imbuído de tranqüilidade e principalmente harmonizando as variáveis em jogo o arquiteto pode partir para a tomada de decisão com mais assertividade. Deste modo, retomando a frase *“o ideal seria termos sempre **alta coesão e baixo acoplamento**”*, cabe ao arquiteto entender o quanto desse objetivo deve ser alcançado com o uso de DI.

 Lembrem que a acepção da palavra “ideal” não deixa dúvidas:

> ***ideal** adj.   
>  1. Que só existe na idéia.   
>  2. Que reúne toda a perfeição imaginável.   
>  3. Conjunto imaginário de perfeições que não podem ter realização completa.*

 [![zen](http://leandrodaniel.com/pics/WindowsLiveWriter/EntLibparte5Injeodedependncia/1EE9F01F/zen_thumb.jpg "zen")](http://leandrodaniel.com/pics/WindowsLiveWriter/EntLibparte5Injeodedependncia/5630775A/zen.jpg)