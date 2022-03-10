---
id: 31
title: 'Como assim código elegante?'
date: '2012-02-22T13:48:00-03:00'
author: 'Leandro Daniel'

guid: /post/Como-assim-codigo-elegante.aspx
permalink: /como-assim-codigo-elegante/
categories:
    - Dicas
    - Post
---

Em minha (arrogante) opinião, em geral, existe algum consenso mínimo sobre o que é um código elegante de fato. No entanto, tenho visto alguns exemplos de “códigos elegantes” que adicionam complexidade, verbosidade e outras questões incômodas. É bem verdade que existem algumas coisas – em qualquer linguagem de desenvolvimento – que levam o código de “Que aceitável!” para o nível “Wow! Que impressionante!”.

Na verdade, cada desenvolvedor tem uma definição diferente de elegância e tudo pode estar correto dentro de uma determinada perspectiva – ou não.   
![Wink](http://www.leandrodaniel.com/editors/tiny_mce_3_4_3_1/plugins/emotions/img/smiley-wink.gif "Wink")

Talvez o mais perto que consigamos chegar de um consenso sobre o tema, seja o que a engine [Elegant Code Maker](http://elegantcodemaker.apphb.com) fez.

### Sabe uma coisa que odeio?

Posts que, ao explicar algum conceito, colocam a definição do dicionário. Parece que o autor não sabe porcaria nenhuma e mesmo assim decidiu escrever a respeito. Como que se, durante o exercício de escrita, ele fosse elaborando o pensamento e consequente aprendizado. Boring!

Contudo, farei isso nesse post, veja só:

> **elegância**   
> *(latim elegantia, -ae, gosto, delicadeza, distinção)*   
> *s. f.*  
> 1\. Gosto delicado no trajar, no falar, no adorno da casa, etc.  
> 2\. Graça, airosidade, delicadeza e distinção aliada à simplicidade e clareza.

Não sei quantos códigos airosos você tem visto ultimamente (ou mesmo codificado). Mas gosto muito da parte ***“aliada à simplicidade e clareza”***. Talvez esse seja um bom ponto de partida (e término) para qualificarmos um código realmente elegante.

Dias atrás, lendo um post do amigo [@elemarjr](http://twitter.com/elemarjr), deparei-me com uma comparação de códigos que realmente discordei. Veja a seguir:

<script src="https://gist.github.com/ldaniel/1885424.js"></script>

Segundo o Elemar, o segundo código é mais elegante que o primeiro. Embora, como disse no início do post, esse tipo de discussão seja sujeita a inúmeros pontos de vista conflitantes e corretos dentro de alguma perspectiva particular, fiquei elucubrando a respeito.

Acabei codificando o [Elegant Code Maker](https://github.com/ldaniel/ElegantCodeMaker), como uma espécie de provocação (não ao Elemar, hehehe, mas a todos os desenvolvedores. Ah, e obrigado [@vquaiato](http://twitter.com/vquaiato) pelo fork e correções no meu código com jQuery e pelo apoio pra fazer o deploy no AppHarbor, foi muito divertido!).

### Como eu defino um código elegante

Um código que seja ao mesmo tempo simples mas eficaz e construtivo, ou seja, uma pequena quantidade de código que consegue realizar um “grande efeito”: Esse é um código elegante.  
Assim sendo, um código elegante deve:

- Ser de fácil entendimento e leitura, sem gerar dúvidas;
- Ser aderente ao padrão da plataforma ou ao padrão estabelecido dentro de um contexto. Entre dois códigos elegantes, o que mais se aproximar do padrão aceito por todos deve ser o escolhido;
- Ser correto, claro! De nada serve um código que não implementa plenamente o seu propósito;
- Ser oriundo de persistência e consistência. Isso é obtido com experiência e treino.

Aposto que você não concorda totalmente comigo, certo? E é por aí mesmo…

### Sejamos felizes e busquemos o nosso melhor, sempre!