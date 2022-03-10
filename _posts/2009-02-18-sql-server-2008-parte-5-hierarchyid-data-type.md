---
id: 260
title: 'SQL Server 2008 (parte 5) &#8211; Hierarchyid Data Type'
date: '2009-02-18T23:53:52-03:00'
author: 'Leandro Daniel'
layout: post
guid: /post/SQL-Server-2008-(parte-5)-Hierarchyid-Data-Type.aspx
permalink: /index.php/sql-server-2008-parte-5-hierarchyid-data-type/
categories:
    - Post
    - 'SQL Server'
---

No último post da [série sobre as novidades do SQL Server 2008](http://www.leandrodaniel.com/?tag=/sql+server+2008) abordei os aprimoramentos para os *data types* de data e hora. Hoje veremos o novo tipo *Hierarchyid* e sua aplicação.

 **HIERARCHYID**

O novo *data type* Hierarchyid permite armazenamento estruturado como uma hierarquia de relacionamento entre os dados.

Existem duas formas de pensar sobre o armazenamento da sua hierarquia, conforme as ilustrações a seguir:

![hierarchyidProfundidade](http://leandrodaniel.com/pics/WindowsLiveWriter/SQLServer2008parte6DataTypesEnhancements_20F/hierarchyidProfundidade_09484817-8869-42ae-bf34-0281344ab05e.gif "hierarchyidProfundidade")

**Profundidade**

Na chamada indexação por profundidade linhas são armazenadas em uma subárvore próximas umas das outras. Um bom exemplo para imaginarmos esse cenário é a relação entre gerentes e funcionários de uma empresa onde o armazenamento será próximo já que os funcionários se reportarão diretamente a algum gerente, da mesma forma que os gerentes a um diretor e assim por diante.

![hierarchyidAmplitude](http://leandrodaniel.com/pics/WindowsLiveWriter/SQLServer2008parte6DataTypesEnhancements_20F/hierarchyidAmplitude_d7456128-7372-47c8-b7dd-8976d9116a7b.gif "hierarchyidAmplitude")

**Amplitude**

Neste tipo de estratégia as linhas de cada nível da hierarquia são armazenadas juntas, revendo o exemplo acima os funcionários que se reportam para um mesmo gerente são armazenados próximos uns dos outros.

Vejamos agora um exemplo com uma tabela simples para ilustrar os conceitos apresentados. A seguir temos o código para criação do exemplo:

```
<pre class="brush: sql;">CREATE TABLE Equipe
   (
    Lider hierarchyid,
    ReportaPara as Lider.GetLevel(), 
    ColaboradorId int UNIQUE NOT NULL,
    NomeColaborador nvarchar(50) NOT NULL
   ) ;
GO
```

Vamos inserir alguns registros utilizando o código descrito a seguir:

```
<pre class="brush: sql;">INSERT Equipe (Lider, ColaboradorId, NomeColaborador)
VALUES (hierarchyid::GetRoot(), 1, 'Lider A');
GO

INSERT Equipe (Lider, ColaboradorId, NomeColaborador)
VALUES (hierarchyid::GetRoot().GetDescendant(null, null), 2, 'Desenv A1');
GO

INSERT Equipe (Lider, ColaboradorId, NomeColaborador)
VALUES (hierarchyid::GetRoot().GetDescendant(null, null), 3, 'Desenv A2');
GO

INSERT Equipe (Lider, ColaboradorId, NomeColaborador)
VALUES (hierarchyid::GetRoot().GetDescendant(null, null), 4, 'Desenv A3');
GO
```

A sintaxe ***hierarchyid::GetRoot().GetDescendant(null, null)*** informa ao SQL Server que queremos obter o descendente derivado de Root, no caso, como temos apenas um registro inserido no Root (linhas 1 e 2 do código acima) as linhas serão relacionadas a esse registro.

Se quiséssemos inserir outro elemento derivado de Root, bastaria utilizar o seguinte código:

```
<pre class="brush: sql;">INSERT Equipe (Lider, ColaboradorId, NomeColaborador)
VALUES (hierarchyid::GetRoot(), 100, 'Lider B');
GO
```

Agora utilizaremos outra abordagem para inserimos alguns registros com outro nível de hierarquia.

```
<pre class="brush: sql;">DECLARE @Lider hierarchyid, @lc hierarchyid

SELECT @Lider = Lider
FROM Equipe
WHERE colaboradorId = 2

INSERT Equipe (Lider, ColaboradorId, NomeColaborador)
VALUES (@Lider.GetDescendant(@lc, NULL), 101, 'Desenv A11');

INSERT Equipe (Lider, ColaboradorId, NomeColaborador)
VALUES (@Lider.GetDescendant(@lc, NULL), 102, 'Desenv A12');
GO
```

Para visualizarmos o resultados vamos executar a query a seguir:

```
<pre class="brush: sql;">SELECT Lider.ToString(), * FROM Equipe
```

Repare que utilizei o método ToString() para fazer a conversão do tipo hierárquico para uma notação mais legível. Para visualizarmos todos os lideres do primeiro nível podemos utilizar a seguinte query:

```
<pre class="brush: sql;">SELECT Lider.ToString() AS OLider, *
FROM Equipe
WHERE Lider = hierarchyid::GetRoot() ;
GO
```

A query a seguir retorna todos as linhas derivadas do colaborador com o Id 2:

```
<pre class="brush: sql;">DECLARE @Colaborador hierarchyid

SELECT @Colaborador = Lider
FROM Equipe
WHERE ColaboradorId = 2;

SELECT Lider.ToString() AS Colaborador, *
FROM Equipe
WHERE Lider.GetAncestor(1) = @Colaborador
```

Como vimos o novo *data type* **Hierarchiyd** permite um armazenamento inteligente e semântico para dados estruturados hierarquicamente, as aplicações são inúmeras. Espero que tenham gostado. Até o próximo post.