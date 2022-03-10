---
id: 147
title: 'Visual Studio 2010 (parte 39) – Managed Extensibility Framework (MEF)'
date: '2009-11-17T03:51:42-03:00'
author: 'Leandro Daniel'

guid: /post/Visual-Studio-2010-(parte-39)-e28093-Managed-Extensibility-Framework-(MEF).aspx
permalink: /visual-studio-2010-parte-39-managed-extensibility-framework-mef/
categories:
    - Post
    - 'Visual Studio'
---

O Managed Extensibility Framework (MEF) é uma nova biblioteca no. NET Framework que permite uma maior reutilização de aplicações e componentes. Usando MEF, aplicações . NET podem fazer deixar de serem estaticamente compiladas para serem dinamicamente compostas.

Abaixo vemos uma pequena amostra de código com o novo framework, representado pelos atributos que decoram a classe ***SimpleMortgageCalculator***.

```
<pre class="brush: csharp;">[Export(typeof(IMortgageCalculator))]
[ExportMetadata(“Calculation”, “Simple”)]
[ExportMetadata(“Tax Aware”, null)]
public class SimpleMortgageCalculator : IMortgageCalculator
{
    public ILogger Logger { get; set; }

    public float Calculate()
    {
        Logger.Log("Calculating Mortgage");

        return ...;
    }
}
```

[![blocks](http://leandrodaniel.com/pics/WindowsLiveWriter/VisualStudio2010parte39ManagedExtensibil/6E639CC8/blocks_thumb.png "blocks")](http://leandrodaniel.com/pics/WindowsLiveWriter/VisualStudio2010parte39ManagedExtensibil/3FCD93E6/blocks.png)O MEF permite ser utilizado num servidor web onde você pode utilizar uma parte isolada de outras instâncias da mesma aplicação. Basicamente, a idéia é simplificar o design e construção de aplicações e componentes com alta extensibilidade.

O MEF está disponível no CodePlex [aqui](http://mef.codeplex.com).