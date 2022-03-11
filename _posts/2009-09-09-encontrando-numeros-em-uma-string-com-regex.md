---
id: 192
title: 'Encontrando números em uma string com Regex'
date: '2009-09-09T22:18:05-03:00'
author: 'Leandro Daniel'

guid: /post/Encontrando-numeros-em-uma-string-com-Regex.aspx
permalink: /encontrando-numeros-em-uma-string-com-regex/
categories:
    - IT
tags:
    - pt-br
    - 'C#'
---

Como *regex* são úteis! Quer ver um exemplo? Hoje eu precisava encontrar números inteiros dentro de uma *string*, queria fazer de um jeito rápido e fácil e sugeriram-me usar a classe **Regex** do **System.Text.RegularExpressions**.

O código ficou muito simples, abaixo coloco um exemplo parecido com o que utilizei:

```
<pre class="brush: csharp;">string texto = "Quero achar os números 5 e 255!";

Regex regex = new Regex(@"\d+");
Match match = regex.Match(texto);

Console.WriteLine(match.Value);
Console.WriteLine(match.NextMatch().Value);
```

Neste caso era de conhecimento prévio que haviam apenas dois números na *string* por isso foi possível utilizar **NextMatch()** para retornar a próxima ocorrência encontrada. Uma maneira mais elegante seria utilizar a classe **MatchCollection**, conforme demonstrado a seguir:

```
<pre class="brush: csharp;">string texto = "Quero achar os números 5, 78, 67 e 255!";

Regex regex = new Regex(@"\d+");
MatchCollection match = regex.Matches(texto);

if (match.Count > 0)
{
    for (int c = 0; c < match.Count; c++)
    {
        Console.WriteLine(match.Value); 
    }
}
```

Dessa forma não importa o número de ocorrências encontradas. A classe **Match** também é capaz de retornar a posição onde o número foi encontrado.

Quer encontrar uma data ao invés de um número? Monte uma expressão regular pra isso. 😉
