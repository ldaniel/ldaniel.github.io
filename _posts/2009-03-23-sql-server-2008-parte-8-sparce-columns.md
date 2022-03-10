---
id: 252
title: 'SQL Server 2008 (parte 8) – Sparce Columns'
date: '2009-03-23T08:15:39-03:00'
author: 'Leandro Daniel'
layout: post
guid: /post/SQL-Server-2008-(parte-8)-e28093-Sparce-Columns.aspx
permalink: /index.php/sql-server-2008-parte-8-sparce-columns/
categories:
    - Post
    - 'SQL Server'
---

Em alguns casos o armazenamento dos dados deve ser cuidadosamente pensado para otimização, algum requisito específico de consulta pode ser menos importante que o espaço utilizado. Nesse sentido o SQL Server 2008 oferece um novo tipo de coluna chamada *Sparce Column*.

Para criar uma *Sparce Column*, utilize a palavra reservada **SPARSE**, conforme código a seguir:

```
<pre class="brush: sql;">CREATE TABLE Colaborador
(
	ColaboradorId int PRIMARY KEY,
	Nome varchar(80) NOT NULL,
	Titulo varchar(20) SPARSE NULL,
	TipoColaborador smallint SPARSE NULL
) ;
GO
```

Algumas considerações importantes sobre *Sparce Columns*:

- Uma coluna do tipo *Sparce Column* deve ser definida como *NULL;*
- Não pode ser dos tipos: text, ntext, image, timestamp, user-defined data type, geometry, ou geography; ou possuir um atributo FILESTREAM;
- Não deve conter um valor default ou *rule*;
- Uma coluna calculada não pode ser declarada com *Sparse Column*;
- Não pode fazer parte de um índice;

Pelo fato das colunas do tipo *Sparse* aumentarem a sobrecarga de consulta para valores não nulos você deve considerar sua utilização quando o espaço ganho for de 20% a 40%, pelo menos. Um boa opção é a utilização em conjunto com [Filtered Indexes](http://www.leandrodaniel.com/post/SQL-Server-2008-(parte-7)-e28093-Filtered-Indexes), pois é possível indexar apenas linhas que contenham valores preenchidos criando um índice menor.

Até o próximo post da [série](http://www.leandrodaniel.com/?tag=/sql+server+2008).