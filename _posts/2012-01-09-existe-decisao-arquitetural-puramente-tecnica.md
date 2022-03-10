---
id: 38
title: 'Existe decisão arquitetural puramente técnica?'
date: '2012-01-09T15:19:00-03:00'
author: 'Leandro Daniel'

guid: /post/Em-arquitetura-existe-decisao-puramente-tecnica.aspx
permalink: /existe-decisao-arquitetural-puramente-tecnica/
categories:
    - Arquitetura
    - Post
---

Um arquiteto nunca deve decidir sobre uma arquitetura de forma arbitrária ou mesmo impensada. Todas as alternativas devem ser consideradas, fracionando o sistema (solução) em elementos e relações que possibilitarão o atendimento aos atributos de qualidade.

Alexander Wolf e Dewayne Perry definiram em um artigo intitulado “[Foundations for the Study of Software Architecture](http://www.isr.uci.edu/~taylor/ICS221/papers/swa-sen.pdf)” o seguinte modelo:

> Arquitetura = { Elementos, Organização, Decisões }

De acordo com essa definição, a arquitetura de software é um conjunto de elementos arquiteturais que possuem alguma organização. Os elementos e sua organização são definidos por decisões tomadas para satisfazer objetivos e restrições. São destacados três tipos de elementos arquiteturais:

- Elementos de processamento: são elementos que usam ou transformam informação;
- Elementos de dados: são elementos que contêm a informação a ser usada e transformada; e
- Elementos de conexão: são elementos que ligam elementos de qualquer tipo entre si.

Já a organização dita as relações entre os elementos arquiteturais. Essas relações possuem propriedades e restringem como os elementos devem interagir de forma a satisfazer os objetivos do sistema. Adicionalmente, essas relações devem ser ponderadas de modo a indicar sua importância no processo de seleção de alternativas. As relações vão desde as interfaces tecnológicas necessárias para comunicar dois sistemas distintos até os processos (inclusive humanos) necessários para manter os estados desejados das informações dentro do ciclo de negócio.

### Decisões arquiteturais

Ok, vimos até aqui que arquitetura é a arte de tomar decisões inteligentes de acordo com um contexto (lembrando que contexto é igual a “Elementos” e “Organização”). As decisões arquiteturais têm, basicamente, três características que devem ser consideradas: descrição, objetivos e fundamentação.

Por **descrição** devemos entender que se trata do que foi decidido para o sistema, podendo ser: descrição de um elemento, módulo, classe, ou serviço que existirá na arquitetura, a descrição da comunicação de um elemento da arquitetura com outro, a descrição da agregação de diversos elementos diferentes da arquitetura para formar um serviço, ou a descrição de um princípio ou mais princípios que conduzirão a evolução do sistema.

É sabido que toda decisão é feita com um ou mais **objetivos**. Isso posto, a segunda característica trata de explicitar qual o objetivo de dada decisão, normalmente, permitindo ou restringido um conjunto de atributos de qualidade do sistema.

Finalmente, uma decisão arquitetural só pode ter sido alcançada em meio a alternativas com algum embasamento ou **fundamentação**. Por esse motivo, cabe ao arquiteto explicitar por que tal decisão foi tomada, seja por conhecimento prévio de como satisfazer os objetivos em questão ou pela atual decisão ter mostrado os melhores resultados em meio a uma avaliação prévia das alternativas.

### Lembre-se sempre do contexto

É comum e cômodo adotarmos as chamadas “boas práticas” como uma verdade incondicional. Afinal, boas práticas refletem ações, técnicas e processos utilizados com sucesso para resolver determinado problema.

Contudo, como vimos, toda a tomada de decisão requer, dentre outros fatores, embasamento e fundamentação. Por esse fato, só podemos considerar uma prática como boa se ela for avaliada dentro de um contexto bem conhecido e claro, onde obtemos com a aplicação dessa prática um retorno tangível e eficaz. Do contrário, aplicar uma boa prática – apenas por ser um padrão de mercado – não garantirá nada a não ser mais complexidade acrescida a solução.

Ora, se estamos falando de contexto, é possível pensar em decidir algo sem levar em conta a organização (empresa, por exemplo)? Pense bem, até mesmo a aplicação de um patch de segurança no servidor de produção não é uma decisão meramente técnica, pois se existe um risco do patch afetar algum *building block* arquitetural, isso deve ser levado em conta.

### Para reflexão

Tenho visto por aí muita confusão a respeito das atribuições e competências de um arquiteto, seja um arquiteto de sistema, arquiteto de solução, arquiteto corporativo ou qualquer outro que exista ou inventem (já que ser arquiteto está na moda, não é verdade?). Gostaria de propor que o título desse post fosse um auto-questionamento para você, arquiteto.