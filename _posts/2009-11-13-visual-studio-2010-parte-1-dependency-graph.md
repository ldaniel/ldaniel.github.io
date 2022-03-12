---
id: 185
title: 'Visual Studio 2010 (parte 1) – Dependency Graph'
date: '2009-11-13T13:12:43-03:00'
author: 'Leandro Daniel'

guid: /post/Visual-Studio-2010-(parte-1)-e28093-Dependency-Graph.aspx
permalink: /visual-studio-2010-parte-1-dependency-graph/
categories:
    - IT
tags:
    - pt-br
    - 'Visual Studio'
---

Um dos recursos novos do Visual Studio 2010 é a análise de dependências entre classes/assemblies de uma aplicação disponíveis no menu ***Architecture***, conforme ilustração abaixo.

![vs2010DependencyGraph01](/assets/pics/WindowsLiveWriter/VisualStudio2010parte1/3C0D2645/vs2010DependencyGraph01.gif "vs2010DependencyGraph01")

É possível gerar um gráfico bastante útil para analisar o acoplamento entre as classes de sua aplicação. Para entender um pouco mais sobre a importância desse tipo de análise, você pode acessar [aqui uma palestra que fiz sobre o padrão IoC com DI](http://www.leandrodaniel.com/post/DNAD-2009-Minha-palestra-sobre-Injecao-de-Dependencia). Abaixo vemos um gráfico gerado pelo Visual Studio 2010.

[![vs2010DependencyGraph02](/assets/pics/WindowsLiveWriter/VisualStudio2010parte1/05D03802/vs2010DependencyGraph02_thumb.gif "vs2010DependencyGraph02")](/assets/pics/WindowsLiveWriter/VisualStudio2010parte1/1B2DED6A/vs2010DependencyGraph02.gif)

Algumas das análises possíveis com esse gráfico são a leitura do “acoplamento eferente” e “acoplamento aferente”. Esses indicadores podem demostrar uma falha de design ou classes que não estão sendo utilizadas.

![CaCeIllustration](/assets/pics/WindowsLiveWriter/VisualStudio2010parte1/2EC460DF/CaCeIllustration.jpg "CaCeIllustration")

Realmente esse é um recurso poderoso.
