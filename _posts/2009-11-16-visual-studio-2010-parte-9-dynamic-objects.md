---
id: 177
title: 'Visual Studio 2010 (parte 9) – Dynamic Objects'
date: '2009-11-16T00:57:10-03:00'
author: 'Leandro Daniel'

guid: /post/Visual-Studio-2010-(parte-9)-e28093-Dynamic-Objects.aspx
permalink: /visual-studio-2010-parte-9-dynamic-objects/
categories:
    - IT
tags:
    - pt-br
    - 'Visual Studio'
---

Talvez uma das novidades mais comentadas do novo C# seja o dinamismo acrescido à linguagem. Capaz de expor membros de classe (tais como propriedades ou métodos) em “*run time”* ao invés de “*compile time”*. Mas como isso funciona na prática? Vejamos o exemplo a seguir:

```csharp
using System;
using System.Dynamic;

namespace VS2010.Console
{
    class Program
    {
        static void Main(string[] args)
        {
            dynamic dyn = 1;
            object obj = 1;

            dyn = dyn + 3;
            obj = obj + 3;

            System.Console.WriteLine(dyn.GetType());
            System.Console.WriteLine(obj.GetType());

            System.Console.ReadKey();
        }
    }
}
```

Um erro de compilação ocorre na linha 14 indicando que não é possível a operação de soma de um inteiro com um *object*. Contudo o erro não ocorre na linha 13, porque a variável ***dyn*** foi declarada como *dynamic* e não é checada em tempo de compilação. Esse recurso é bem interessante, pois pode permitir acesso direto as propriedades do HTML DOM, por exemplo, usando a sua sintaxe. Esse tipo de conceito é bem familiar para desenvolvedores Ruby e Phyton e agora os desenvolvedores .NET poderão aprender esse novo paradigma de pogramação. Abaixo vemos um diagrama da arquitetura de linguagem dinâmica do .NET.

![Dd233052_DLR_ArchOverview(en-us,VS_100)](/assets/pics/WindowsLiveWriter/VisualStudio2010parte9DynamicObjects/2ED4648C/Dd233052_DLR_ArchOverviewenusVS_100.png "Dd233052_DLR_ArchOverview(en-us,VS_100)")
