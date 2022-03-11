---
id: 178
title: 'Visual Studio 2010 (parte 8) – LINQ to SharePoint'
date: '2009-11-16T00:53:54-03:00'
author: 'Leandro Daniel'

guid: /post/Visual-Studio-2010-(parte-8)-e28093-LINQ-to-SharePoint.aspx
permalink: /visual-studio-2010-parte-8-linq-to-sharepoint/
categories:
    - IT
tags:
    - pt-br
    - 'Visual Studio'
---

Nos *templates* de projeto para SharePoint 2010 teremos uma grande novidade: LINQ to SharePoint. Ou seja, consultas de informações do SharePoint, [como esta por exemplo](http://www.leandrodaniel.com/post/Coletando-informacoes-de-um-site-SharePoint), poderão ser realizadas com queries LINQ. Sensacional, não?

Veja um exemplo simples de código:

```
<pre class="brush: csharp;">SPListItemCollection listPages = pagesList.Items;
            var latestPages = listPages.Cast<SPListItem>()
		.Where(p => p.Name != defaultPageName);
            var latestPages = listPages.Cast<SPListItem>()
                .Where(p => p.Name != defaultPageName)
                .OrderByDescending(p => p[Constants.Modified].ToString())
		.Take(3);
```

O LINQ to SharePoint torna o código mais fluente, e permite consultas poderosas agilizando o trabalho do desenvolvedor que está familiarizada com a sintaxe. Pense em como será fácil agora deletar itens, por exemplo, de uma lista? Existe um projeto no CodePlex (ainda *alpha*) para trazer essa funcionalidade para o Visual Studio 2008, [confira aqui](http://linqtosharepoint.codeplex.com/).
