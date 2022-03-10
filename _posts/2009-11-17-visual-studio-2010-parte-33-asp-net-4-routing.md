---
id: 153
title: 'Visual Studio 2010 (parte 33) – ASP.NET 4 (Routing)'
date: '2009-11-17T01:27:39-03:00'
author: 'Leandro Daniel'

guid: /post/Visual-Studio-2010-(parte-33)-e28093-ASPNET-4-(Routing).aspx
permalink: /index.php/visual-studio-2010-parte-33-asp-net-4-routing/
categories:
    - Post
    - 'Visual Studio'
---

Roteamento de URL’s foi um conceito introduzido no Framework 3.5 e é utilizada em desenvolvimento MVC para criação de URL’s “limpas”. Ou seja:

Uma URL tradicionalmente apresentada desta forma

<u>*http://www.leandrodaniel.com/.aspx?id=1*</u>

Pode ser expressa da seguinte maneira

<u>*http://www.leandrodaniel.com//1*</u>

O ASP.NET 4 trouxe esse recurso para os WebForms, o código abaixo ilustra como podemos implementar essa feature:

![step2_thumb_1A897DA1](http://leandrodaniel.com/pics/WindowsLiveWriter/VisualStudio2010parte33ASP.NET4Routing/5007D460/step2_thumb_1A897DA1.png "step2_thumb_1A897DA1")

Dessa forma uma chamada para a página ficaria assim:

![step3_thumb_06FC1E00](http://leandrodaniel.com/pics/WindowsLiveWriter/VisualStudio2010parte33ASP.NET4Routing/1D37CDEC/step3_thumb_06FC1E00.png "step3_thumb_06FC1E00")