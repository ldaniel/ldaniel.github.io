---
id: 245
title: 'Ferramenta para desenvolvedores do IE8 em ação'
date: '2009-04-11T14:52:00-03:00'
author: 'Leandro Daniel'

guid: /post/Ferramenta-para-desenvolvedores-do-IE8-em-acao.aspx
permalink: /ferramenta-para-desenvolvedores-do-ie8-em-acao/
categories:
    - IT
tags:
    - pt-br
    - Dicas
---

No meu post sobre [Filtered Indexes do SQL Server 2008](/tags/#sql-server) o Ricardo [fez um comentário](/SQL-Server-2008-(parte-7)-e28093-Filtered-Indexes.aspx#id_d54c0398-127f-4df0-93e9-7e4a4aad861e) sobre um bug no sistema de avaliação do blog que ocorria no IE8. Bem, já que o problema estava no IE8, nada mais justo que utilizar a ferramenta para desenvolvedores disponível (pressione F12 no IE8 para acessar) para verificar o que ocorria.

Minha primeira suspeita era o CSS, então fiz alguns testes utilizando a guia CSS da ferramenta e logo encontrei o problema. Uma classe continha o valor “inline” definido para a propriedade *display* e isso gerava um problema na renderização no IE8. Alterei o valor da propriedade para “inline-block” e o problema, aparentemente, foi resolvido. Veja abaixo a ferramenta em ação.

 ![BugRating](/assets/pics/WindowsLiveWriter/FerramentaparadesenvolvedoresdoIE8emao_CA96/BubRating_5467701d-42cb-420e-a9a9-98e6ace6e88b.gif "BugRating")

O interessante é que a ferramenta permite alterar todos os itens do CSS aplicando automaticamente na sessão corrente de navegação, isso facilitou muito a descoberta do problema. Contudo, comentei que o problema foi aparentemente resolvido (testei no FireFox, IE7, Chrome e Safari) porque nada me garante que o funcionamento do sistema de avaliação será o mesmo em todos os browser, pois cada um possui sua *engine* de renderização.

De qualquer forma, já foi um grande avanço disponibilizarem a ferramenta para desenvolvedores (mesmo sendo uma idéia copiada de outros lugares). Bem, se você encontrar mais algum bug no blog, é só comentar aqui, mas se você quiser usar a ferramenta do IE8 e já passar a solução… melhor ainda!![](http://www.leandrodaniel.com/editors/tiny_mce/plugins/emotions/images/smiley-laughing.gif)
