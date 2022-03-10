---
id: 148
title: 'Visual Studio 2010 (parte 38) – Extensible Output Caching'
date: '2009-11-17T03:25:41-03:00'
author: 'Leandro Daniel'
layout: post
guid: /post/Visual-Studio-2010-(parte-38)-e28093-Extensible-Output-Caching.aspx
permalink: /index.php/visual-studio-2010-parte-38-extensible-output-caching/
categories:
    - Post
    - 'Visual Studio'
---

Desde que o ASP.NET 1.0 foi lançado, o recurso de *output caching* permitiu armazenar a saída de páginas geradas, controles e *responses* HTTP na memória. Em visitas subseqüentes, o ASP.NET conseguia apresentar conteúdo de forma mais rápida, recuperando a saída gerada a partir da memória

O ASP.NET 4 acrescenta um ponto de extensibilidade para o *output-cache* que permite configurar um ou mais *providers* personalizados. Basta criar uma *output provider* de *cache* personalizado como uma classe que deriva do novo tipo ***OutputCacheProvider***. E a partir daí configurar o *provider* no arquivo *Web.config* conforme mostrado no exemplo abaixo:

```
<pre class="brush: xml;"><caching>
  <outputCache defaultProvider="AspNetInternalProvider">
    <providers>
      <add name = "DiskCache"
          type = "Test.OutputCacheEx.DiskOutputCacheProvider, DiskCacheProvider" />
    </ providers>
  </ outputCache>
</ cache>
```

É possível alterar output-cache padrão usado pela aplicação da Web, especificando um nome do *provider* diferente para ***defaultProvider***.

Além disso, você pode selecionar diferentes output-cache *providers* por controle e por *request*. A maneira mais fácil de escolher um output-cache *provider* para *user controls* da Web é fazê-lo declarativamente usando o novo atributo **providerName** ilustrado a seguir:

```
<pre class="brush: xml;"><% @ OutputCache Duration = "60" VaryByParam = "Nenhum ProviderName" = "DiskCache%>
```

Especificar um output-cache *provider* diferente para uma solicitação HTTP requer um pouco mais de trabalho. Em vez de especificar declarativamente o provider, é necessário substituir o novo método ***GetOutputCacheProviderName*** no arquivo ***Global.asax*** programaticamente, informando o *provider* a ser utilizado. O exemplo de código abaixo mostra como fazer isso:

```
<pre class="brush: csharp;">public override string GetOutputCacheProviderName HttpContext (contexto)
(
    if (context.Request.Path.EndsWith ( "Advanced.aspx"))
       return "DiskCache";
    diferente
        base.GetOutputCacheProviderName retorno (contexto);
)
```