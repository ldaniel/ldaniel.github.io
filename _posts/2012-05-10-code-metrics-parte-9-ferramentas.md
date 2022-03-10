---
id: 13
title: 'Code metrics (parte 9) &#8211; Ferramentas'
date: '2012-05-10T13:15:00-03:00'
author: 'Leandro Daniel'

guid: /post/Code-metrics-(parte-9)-Ferramentas.aspx
permalink: /code-metrics-parte-9-ferramentas/
categories:
    - Arquitetura
    - Post
---

Novamente nessa série, não falarei mais do mesmo. Sério, a Wikipedia tem uma [lista de ferramentas para análise de código estático](http://en.wikipedia.org/wiki/List_of_tools_for_static_code_analysis) muito boa. Apenas gostaria de destacar 2 ferramentas com alguns comentários adicionais.

### NDepend

É a melhor ferramenta para análise de código estático em .NET, na minha opinião, principalmente pela Code Query Language (CQL) que permite um sem fim de possibilidades de consulta sobre o código e suas métricas.

Embora não citada na lista da Wikipedia, existe uma versão do [NDepend](http://www.ndepend.com) para Java ([JArchitect](http://www.javadepend.com/), antigamente conhecimento como XDepend) e outra para C++ ([CppDepend](http://www.cppdepend.com/)).

### FluentCodeMetrics

![](http://leandrodaniel.com/pics/memeNice.png)

Outra opção interessante é a ferramenta que está [sendo desenvolvida](http://elemarjr.net/tag/fluentcodemetrics/) pelo [@elemarjr](http://twitter.com/elemarjr), o [FluentCodeMetrics](https://github.com/ElemarJR/FluentCodeMetrics).

A ferramenta está em fase de desenvolvimento, isso significa que você [pode participar de sua construção](https://github.com/ElemarJR/FluentCodeMetrics), contribuindo para criar algo de valor para a comunidade. Ok, filantropia não é o melhor motivo para dar um fork e ajudar. Mas você terá a oportunidade de brincar com SpecFlow, BDD, Mono.Cecil, NUnit e outras *libraries* transudas.

O Elemar é um dos poucos camaradas que podemos dizer que programam pra c#$%¨&amp;\*! Então “parear” com ele em um OSS já é motivo suficiente para tornar o FluentCodeMetrics algo cool!

Bora fazer um fork e contribuir lá!