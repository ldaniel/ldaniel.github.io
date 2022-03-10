---
id: 180
title: 'Visual Studio 2010 (parte 6) – Parallel.For'
date: '2009-11-15T22:27:52-03:00'
author: 'Leandro Daniel'
layout: post
guid: /post/Visual-Studio-2010-(parte-6)-e28093-ParallelFor.aspx
permalink: /index.php/visual-studio-2010-parte-6-parallel-for/
categories:
    - Post
    - 'Visual Studio'
---

O C# 4.0, presente no Visual Studio 2010, introduz um recurso para processamento paralelo, aproveitando de fato o poder dos novos processadores com 2 ou mais núcleos. Esse recurso é chamado de *Task Parallel Library* (TPL), disponível no *namespace* ***System.Threading.Tasks***. Vejamos a seguir um exemplo muito simples, adaptado de um vídeo apresentado por Danny Shih.

```
<pre class="brush: csharp;">using System;
using System.Diagnostics;
using System.Threading.Tasks;

namespace VS2010.Console
{
    class Program
    {
        static void Main(string[] args)
        {
            Stopwatch stopWatch;

            for (; ; )
            {
                // Contabilizando o tempo do FOR
                stopWatch = Stopwatch.StartNew();
                for (int c = 0; c < 10000; c++)
                {
                    OperacaoGrande(10000);
                }
                System.Console.WriteLine("Tempo com FOR.........: " + stopWatch.ElapsedMilliseconds);


                // Contabilizando o tempo do PARALLEL FOR
                stopWatch = Stopwatch.StartNew();
                Parallel.For(0, 10000, hum => 
                {
                    OperacaoGrande(10000);
                });
                System.Console.WriteLine("Tempo com PARALLEL FOR: " + stopWatch.ElapsedMilliseconds);

                                
                System.Console.ReadLine();
            }
        }

        static void OperacaoGrande(int n)
        {
            int tmp = 1;

            for (int i = 0; i < n; i++)
                tmp += tmp * i;
        }
    }
}
```

Executando o código acima numa aplicação do tipo *console*, iremos obter o seguinte resultado:

![VS2010ParallelFor](http://leandrodaniel.com/pics/WindowsLiveWriter/VisualStudio2010parte6Parallel.For/04E8F4BF/VS2010ParallelFor.gif "VS2010ParallelFor")

Podemos observar que o segundo FOR (linhas 25 a 29) executou a mesma operação 41% a 50% mais rápido que da forma tradicional. Claro, esse resultado dependerá do processador da máquina que estiver rodando o código. Pretendo explorar com mais profundidade esse assunto em posts futuros.