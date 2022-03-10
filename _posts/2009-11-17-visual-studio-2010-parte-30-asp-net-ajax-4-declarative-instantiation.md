---
id: 156
title: 'Visual Studio 2010 (parte 30) – ASP.NET AJAX 4 (Declarative instantiation)'
date: '2009-11-17T00:58:52-03:00'
author: 'Leandro Daniel'

guid: /post/Visual-Studio-2010-(parte-30)-e28093-ASPNET-AJAX-4-(Declarative-instantiation).aspx
permalink: /visual-studio-2010-parte-30-asp-net-ajax-4-declarative-instantiation/
categories:
    - Post
    - 'Visual Studio'
---

O ASP.NET AJAX 4.0 introduz a capacidade de declarativamente instanciar controles e comportamentos.

Primeiro você tem que mapear o comportamento do controle para um *namespace* XML no seu documento HTML. O valor da XMLNS é simplesmente o *fully qualified name* do controle/comportamento que você deseja atingir declarativamente.

Então você tem que juntar o seu controle/comportamento para um elemento que irá representar o controle/comportamento.

Uma vez que um controle/comportamento é anexado a um elemento, você pode acessar qualquer uma das suas propriedades declarativamente também.

![VS2010DeclarativeInstantiation](http://leandrodaniel.com/pics/WindowsLiveWriter/VisualStudio2010parte40/5E212564/VS2010DeclarativeInstantiation.gif "VS2010DeclarativeInstantiation")

Fácil, não?