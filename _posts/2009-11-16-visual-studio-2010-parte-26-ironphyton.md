---
id: 160
title: 'Visual Studio 2010 (parte 26) – IronPhyton'
date: '2009-11-16T23:04:36-03:00'
author: 'Leandro Daniel'

guid: /post/Visual-Studio-2010-(parte-26)-e28093-IronPhyton.aspx
permalink: /index.php/visual-studio-2010-parte-26-ironphyton/
categories:
    - Post
    - 'Visual Studio'
---

– Ué, mas o post não deveria ser sobre Visual Studio 2010?

E é! Após instalar o [IronPhyton](http://www.codeplex.com/IronPython/Release/ProjectReleases.aspx?ReleaseId=15625) você pode desenvolver códigos integrando a linguagem IronPhyton com o novo recurso dinâmico do C# 4.0, veja o código abaixo:

```
<pre class="brush: csharp;">using System;
using IronPython.Hosting;
using Microsoft.Scripting.Hosting;

namespace PythonSample
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Loading helloworld.py...");

            ScriptRuntime py = Python.CreateRuntime();
            dynamic helloworld = py.UseFile("helloworld.py");

            Console.WriteLine("helloworld.py loaded!");

            for (int i = 0; i < 1000; i++)
            {
                Console.WriteLine(helloworld.welcome("Employee #{0}"), i);
            }
            Console.ReadLine();
        }
    }
}
```

A instrução da linha 14 carrega um script contendo o seguinte código Python:

```
<pre class="brush: sql;">def welcome(name):
    return "Hello '" + name + "' from IronPython"
```

Mais possibilidades para o C#!