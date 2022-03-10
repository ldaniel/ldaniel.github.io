---
id: 154
title: 'Visual Studio 2010 (parte 32) – ASP.NET AJAX 4 (Client Templates)'
date: '2009-11-17T01:16:22-03:00'
author: 'Leandro Daniel'
layout: post
guid: /post/Visual-Studio-2010-(parte-32)-e28093-ASPNET-AJAX-4-(Client-Templates).aspx
permalink: /index.php/visual-studio-2010-parte-32-asp-net-ajax-4-client-templates/
categories:
    - Post
    - 'Visual Studio'
---

Se você já usou WebForms antes está familiarizado com a abordagem para trabalhar com os controles no *server*. Você tem acesso a um conjunto de propriedades que permitem que você defina *templates* arbitrários de conteúdo, com HTML, *server controls*, e *data binding expressions*. Este modelo torna muito fácil criar UI dinâmica que é renderizada no *server-side*.

O ASP.NET AJAX 4.0 introduz a capacidade de definir *templates* no client-side. Agora você pode criar o código HTML que pretende utilizar para representar o seu template e data binding expressions.

No exemplo abaixo foi criado um template de lista ordenada “&lt;li&gt;”, cujo conteúdo é um item da lista que por sua vez é o valor da propriedade *Name* do objeto ***JSON*** que é ligado a ele. O ***data binding expression*** se assemelha ao do WPF.

![VS2010ClientTemplates](http://leandrodaniel.com/pics/WindowsLiveWriter/VisualStudio2010.NETAJAX4ClientTemplates/2ADA7E0D/VS2010ClientTemplates.gif "VS2010ClientTemplates")