---
id: 255
title: 'SQL Server 2008 (parte 6) – Table-Valued Parameters'
date: '2009-03-18T23:09:07-03:00'
author: 'Leandro Daniel'

guid: /post/SQL-Server-2008-(parte-6)-e28093-Table-Valued-Parameters.aspx
permalink: /sql-server-2008-parte-6-table-valued-parameters/
categories:
    - IT
tags:
    - pt-br
    - 'SQL Server'
---

Em meu último post da [série sobre as novidades do SQL Server 2008](http://www.leandrodaniel.com/?tag=/sql+server+2008) o tema foi o *Hierarchyid*, hoje falarei sobre outro recurso de desenvolvimento introduzido na nova versão do SQL Server: Table-Valued Parameters.

 **TABLE-VALUED PARAMETERS**

Basicamente, table-value parameter é um novo tipo que pode ser definido com a estrutura de uma tabela para ser usado como parâmetro em stored procedures ou dentro de rotinas, permitindo o transporte de várias linhas (rows) de dados.

Para criar um table-value parameter utilize o código abaixo adaptando as colunas de acordo com sua necessidade.

```
<pre class="brush: sql;">CREATE TYPE ColaboradorTableType AS TABLE 
( 
    Nome VARCHAR(50),
    Bonus INT 
);
```

Através da janela *Object Explorer* do *Microsoft SQL Server Management Studio* é possível checar o tipo criado no caminho ilustrado abaixo.

 ![tablavalue](http://leandrodaniel.com/pics/WindowsLiveWriter/SQLServer2008parte6HierarchyidDataType_144A7/tablavalue_10f3fb39-0b06-4912-98c6-0527e0bc49ad.gif "tablavalue")

Uma vez definido e criado, podemos usá-lo conforme o exemplo a seguir:

```
<pre class="brush: sql;">CREATE PROCEDURE spInsereColaborador
(
    @Colaboradores ColaboradorTableType READONLY
)
AS 
BEGIN    
    SET NOCOUNT ON
    INSERT INTO Colaborador (Nome, Bonus, DataCriacao)
    SELECT Nome, Bonus, GETDATE()
    FROM  @Colaboradores;
END   
GO

DECLARE @ColabTT AS ColaboradorTableType;

INSERT INTO @ColabTT (Nome, Bonus)
    SELECT Recurso, BonusConcedido
    FROM 
    Carga;

EXEC spInsereColaborador @ColabTT;
GO
```

No código acima foi criado uma *stored procedure* que recebe o parâmetro **@Colaboradores** definido como sendo do tipo **ColaboradorTableType** (linha 1 a 11) que pode ser usado da mesma maneira que faríamos com uma tabela. Na segunda parte do código criamos uma variável, também do tipo **ColaboradorTableType** chamada **@ColabTT** que recebe o resultado da consulta de uma tabela qualquer (linhas 14 a 21).

Na linha 3, junto com a declaração do parâmetro está a palavra reservada ***READONLY***, obrigatória neste caso, já que parâmetros do tipo *table-valued* não podem realizar operações DML (insert, update e delete) no corpo da *stored procedure*. Em contrapartida, *table-valued* *parameters* reduzem *round trips* para o servidor e podem oferecer um modelo mais simples de programação.

Até o próximo post!
