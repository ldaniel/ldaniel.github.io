---
id: 285
title: 'Dividir é conquistar'
date: '2008-12-02T23:21:00-03:00'
author: 'Leandro Daniel'
layout: post
guid: /post/Dividir-e-conquistar.aspx
permalink: /index.php/dividir-e-conquistar/
categories:
    - Post
    - 'SQL Server'
---

 Era final de expediente hoje, um amigo pediu-me auxílio para resolver um problema simples, retornar no SQL Server o número da semana no mês dado um dia qualquer – na verdade um outro colega nosso estava em um cliente e havia pedido a ele essa ajuda inicialmente. Rapidamente chegamos numa solução que foi prontamente passada ao consultor "em apuros" que, após analisar a query, retornou adicionando uma nova informação: a consulta precisaria levar em consideração o primeiro dia da semana (domingo, no caso). Assim sendo, para o mês de novembro teríamos o seguinte:

 ![](http://leandrodaniel.com/pics/WindowsLiveWriter/Dividireconquistar_14B83/NumSemana%5B2%5D_thumb.gif)

 Na primeira solução que enviamos o dia 5 seria considerado dentro da primeira semana (semana 1), quando na verdade já estaria na semana 2. Bem, discutimos um pouco mais e chegamos na solução final após recorrermos a uma álgebra básica (dependendo do "final de expediente" que você tem, uma álgebra básica pode oferecer o mesmo desafio de um cubo de Rubik de 4 colunas :), e este era o caso). A solução foi enviada e todos nós (eu, meu amigo e o consultor que estava no cliente tendo aquele final de expediente tipo "cubo de Rubik de 5 colunas") ficamos satisfeitos.

 Após esse ocorrido, voltando pra casa, fiquei imaginando como é divertido quando aparece esse tipo de ajuda não esperada, pois além de ser gratificante você acaba interagindo através de uma programação pareada, dando umas risadas, reclamando em conjunto e aprendendo alguma coisa. Puxei pela memória e acabei lembrando de ambientes de trabalho onde a cultura era contraria à idéia de colaboração, o que é tétrico. Vez por outra tomo conhecimento que ainda existe este tipo de comportamento em alguns lugares hoje em dia. É mole?

 Com tanta possibilidade/necessidade de acesso a boas informações e tanto a ser aprendido/atualizado a filosofia de colaboração é uma realidade que não pode ser ignorada. Basta olharmos para as comunidades e as recentes iniciativas da Microsoft para extinguirmos quaisquer dúvidas a respeito. Quando ensinamos, qualquer coisa que seja, estamos automaticamente aprendendo e, já que a expomos a novas críticas, leituras e idéias, ao final servimos de "catalisadores" multiplicando a propagação desta informação enriquecida.

 Ah, sim, a solução para o problema do início do post foi essa aqui:

```
<pre class="brush: sql;">
DECLARE @Data AS DATETIME   
DECLARE @DiasCompensa INT    

SET @Data = '20081005'      

/*     
 Obtem o dia da semana do primeiro dia do mês desejado.     
 Esse resultado deve ser compensado na conta final. */   

SET @DiasCompensa = DatePart(weekday, DatePart(year, @DATA) + DatePart(month, @DATA) + '01')     

/* Resultado final */   

SELECT (DatePart(day, @DATA) + @DiasCompensa - 2) / 7 + 1 
```

Foi o que conseguimos naquele dia. Rubik ficaria orgulho!