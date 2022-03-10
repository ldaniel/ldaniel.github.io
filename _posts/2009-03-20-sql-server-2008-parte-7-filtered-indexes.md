---
id: 253
title: 'SQL Server 2008 (parte 7) – Filtered Indexes'
date: '2009-03-20T23:52:00-03:00'
author: 'Leandro Daniel'

guid: /post/SQL-Server-2008-(parte-7)-e28093-Filtered-Indexes.aspx
permalink: /sql-server-2008-parte-7-filtered-indexes/
categories:
    - Post
    - 'SQL Server'
---

Dando continuidade a [série sobre as novidades do SQL Server 2008](http://www.leandrodaniel.com/?tag=/sql+server+2008) veremos hoje o que são *Filtered Indexes*.

 **FILTERED INDEXES**

A idéia é simples: índices criados com critério de filtro, ou seja, com uma cláusula *WHERE*, que usados corretamente podem conferir um ganho de performance interessante. Usar corretamente significa planejar a criação de um índice levando em consideração o tipo de consulta que será realizado, frequência de utilização, como os novos registros serão inseridos, e por aí vai.

Vamos ver como podemos criar *filtered indexes* criando primeiramente a seguinte tabela:

```
<pre class="brush: sql;">CREATE TABLE [dbo].[Colaborador]
(
   [ColaboradorId] [int] IDENTITY(1,1) NOT NULL,
   [Nome] [varchar](50) NOT NULL,
   [Email] [varchar](50) NULL,
   [Bonus] [int] NOT NULL,
   [TipoColaborador] [int] NULL,
   CONSTRAINT [PK_Colaborador] PRIMARY KEY CLUSTERED 
   (
      [ColaboradorId] ASC
   )
   WITH 
   (
      PAD_INDEX = OFF, 
      STATISTICS_NORECOMPUTE = OFF, 
      IGNORE_DUP_KEY = OFF, 
      ALLOW_ROW_LOCKS = ON, 
      ALLOW_PAGE_LOCKS = ON
   ) ON [PRIMARY]
) ON [PRIMARY]
GO
```

Criaremos agora um índice com filtro, da seguinte forma:

```
<pre class="brush: sql;">CREATE NONCLUSTERED INDEX TipoColabIndex 
ON dbo.Colaborador(TipoColaborador)
WHERE TipoColaborador = 1;
GO
```

O código acima criará um índice para a tabela *Colaborador* levando em consideração um filtro pela coluna *TipoColaborador* com o valor igual a 1. Desta forma, o *optimizer* do SQL Server poderá usar o índice quando necessário. Até o próximo post.