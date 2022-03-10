---
id: 184
title: 'Visual Studio 2010 (parte 2) – Layer Diagram'
date: '2009-11-13T13:50:10-03:00'
author: 'Leandro Daniel'
layout: post
guid: /post/Visual-Studio-2010-(parte-2)-e28093-Layer-Diagram.aspx
permalink: /index.php/visual-studio-2010-parte-2-layer-diagram/
categories:
    - Post
    - 'Visual Studio'
---

Ainda explorando os recursos de arquitetura do Visual Studio 2010 uma das novidades são os novos tipos de diagramas disponibilizados. Através do menu ***Architecture / New Diagram…*** é possível trabalhar com todas as opções mostradas abaixo:

![vs2010Diagrams](http://leandrodaniel.com/pics/WindowsLiveWriter/VisualStudio2010parte2/2B13BF02/vs2010Diagrams.gif "vs2010Diagrams")

Vamos explorar agora o ***Layer Diagram***. Basicamente, a idéia e especificar as camadas que compõe a arquitetura da sua aplicação de uma maneira muito simples. Utilizando a ***Toolbox*** podemos criar um esboço de arquitetura como demonstrado abaixo:

![vs2010LayerDiagrams](http://leandrodaniel.com/pics/WindowsLiveWriter/VisualStudio2010parte2/4554FB73/vs2010LayerDiagrams.gif "vs2010LayerDiagrams")

Em seguida podemos arrastar o projetos da janela ***Solution Explorer*** em nossos componentes (camadas) criados. Isso mesmo! Fazemos a ligação da nossa representação de modelo de arquitetura com os projetos existentes. Perceba na imagem acima que ao selecionarmos a primeira camada chamada ***UI*** é exibido o projeto correspondente na janela ***Layer Explorer***. Fantástico, não? Houveram muitos aprimoramentos nesse diagrama desde a versão Beta 1, e tudo leva a crer que novas funcionalidades ainda podem ser agregadas. Clicando com o botão direito no diagrama podemos validar o desenho, escolhendo a opção ***Validate Architecture***:

![vs2010ValidateArchitecture](http://leandrodaniel.com/pics/WindowsLiveWriter/VisualStudio2010parte2/1C89705D/vs2010ValidateArchitecture.gif "vs2010ValidateArchitecture")

O resultado segue abaixo.

[![vs2010ValidateArchitectureResult](http://leandrodaniel.com/pics/WindowsLiveWriter/VisualStudio2010parte2/21EEEDF0/vs2010ValidateArchitectureResult_thumb.gif "vs2010ValidateArchitectureResult")](http://leandrodaniel.com/pics/WindowsLiveWriter/VisualStudio2010parte2/2E5D1119/vs2010ValidateArchitectureResult.gif)

Em posts futuros irei explorar outros tipos de diagramas.