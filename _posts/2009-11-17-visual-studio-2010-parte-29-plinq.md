---
id: 157
title: 'Visual Studio 2010 (parte 29) &#8211; PLINQ'
date: '2009-11-17T00:33:45-03:00'
author: 'Leandro Daniel'

guid: /post/Visual-Studio-2010-(parte-29)-PLINQ.aspx
permalink: /visual-studio-2010-parte-29-plinq/
categories:
    - IT
tags:
    - pt-br
    - 'Visual Studio'
---

Dentre os avanços trazidos pelo C# 4.0 um dos mais significativos com relação a performance de execução de tarefas é o suporte ao processamento paralelo. No exemplo de código abaixo veremos como isso foi adicionado ao LINQ com a criação do ***PLINQ*** (o “P” vem de *parallel*).

```csharp
using System.Collections.Generic;
using System.Linq;

class ExemploPlinq
{
    private List<Populacao> nomes = new List<Populacao>();
            
    private static IEnumerable<Populacao> seqQuery;
    private static ParallelQuery<Populacao> parQuery;

    const int anoInicial = 1960;
    const int anoFinal = 2000;

    private void InicializarConsultas()
    {
        seqQuery = from n in nomes
                   where n.Ano >= anoInicial && n.Ano <= anoFinal
                   orderby n.Ano ascending
                   select n;

        parQuery = from n in nomes.AsParallel().WithDegreeOfParallelism(2)
                   where n.Ano >= anoInicial && n.Ano <= anoFinal
                   orderby n.Ano ascending
                   select n;
    }
}
```

Acima temos ilustrado duas situações de consulta com LINQ, na primeira, atribuída a variável **seqQuery** temos o modo tradicional de consulta. Já a variável **parQuery** foi criada com o novo tipo ***ParallelQuery***. Podemos notar que a consulta feita nas linhas 16 a 19 foi reescrita com a utilização da propriedade ***AsParallel().WithDegreeOfParallelism(2)***, que instrui a execução da mesma consulta de forma paralela, utilizando 2 processadores. Muito legal, nao?
