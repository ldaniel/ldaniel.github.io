---
id: 261
title: 'SQL Server 2008 (parte 4) – Datetime Data Type Enhancements'
date: '2009-02-16T23:58:13-03:00'
author: 'Leandro Daniel'

guid: /post/SQL-Server-2008-(parte-4)-Datetime-Data-Type-Enhancements.aspx
permalink: /index.php/sql-server-2008-parte-4-datetime-data-type-enhancements/
categories:
    - Post
    - 'SQL Server'
---

Na semana passada publiquei os três primeiros posts da série sobre as novidades do SQL Server 2008, nesta semana darei continuidade falando sobre os novos tipos de dados para armazenamento de data e hora. Para acessar os demais posts desta série [clique neste link](http://www.leandrodaniel.com//?tag=/sql+server+2008).

**DATA TYPES**

A nova versão do SQL Server trouxe novos tipos de dados para facilitar e otimizar o armazenamento de data e hora, a tabela a seguir mostra algumas características destes tipos:

| **Data Type** | **Formato** | **Range** | **Tamanho em bytes** |
|---|---|---|---|
| time | hh:mm:ss\[.nnnnnnn\] | 00:00:00.0000000    até    23:59:59.9999999 | 3 a 5 |
| date | YYYY-MM-DD | 00001-01-01    até    9999-12-31 | 3 |
| smalldatetime | YYYY-MM-DD hh:mm:ss | 1900-01-01    até    2079-06-06 | 4 |
| datetime | YYYY-MM-DD hh:mm:ss\[.nnn\] | 1753-01-01    até    9999-12-31 | 8 |
| datetime2 | YYYY-MM-DD hh:mm:ss\[.nnnnnnn\] | 0001-01-01 00:00:00.0000000    até    9999-12-31 23:59:59.9999999 | 6 a 8 |
| datetimeoffset | YYYY-MM-DD hh:mm:ss\[.nnnnnnn\] \[+\|-\]hh:mm | 00001-01-01 00:00:00.0000000    até    9999-12-31 23:59:59.9999999    (in UTC) | 8 a 10 |

Vejamos agora a criação de uma tabela de exemplo com os novos *data types*, faremos a inserção de um registro para observarmos o resultado final.

```
<pre class="brush: sql;">CREATE TABLE [dbo].[ExemploDataType]
(
	[ExemploId] [int] IDENTITY(1,1) NOT NULL PRIMARY KEY,
	[DataTipo1] [smalldatetime] NULL,
	[DataTipo2] [datetime] NULL,
	[DataTipo3] [date] NULL,
	[DataTipo4] [time](7) NULL,
	[DataTipo5] [datetime2](7) NULL,
	[DataTipo6] [datetimeoffset](7) NULL
)
GO

INSERT INTO ExemploDataType 
	(DataTipo1, DataTipo2, DataTipo3,
	 DataTipo4, DataTipo5, DataTipo6)
VALUES 
 	(GetDate(), GetDate(), GetDate(), 
 	 GetDate(), GetDate(), GetDate())
GO
```

   
Os registros terão o seguinte aspecto após a inserção:

<font face="Courier New" size="2">DataTipo1 (smalldatetime) = 2009-02-16 23:44:00  
  
DataTipo2 (datetime) = 2009-02-16 23:44:07.020 </font>

DataTipo3 (date) = 2009-02-16

DataTipo4 (time) = 23:44:07.0200000

DataTipo5 (datetime2) = 2009-02-16 23:44:07.02

DataTipo6 (datetimeoffset) = 2009-02-16 23:44:07.0200000 +00:00

   
Os tipos *Time*, *Datetime2* e *Datetimeoffset* podem ainda ser declarados com o valor entre parêntesis variando de 0 a 7, isso indica a precisão no armazenamento.

Os novos *data types* de data e hora do SQL Server 2008 não foram os únicos incrementos, em posts futuros desta série abordarei outros tipos disponibilizados. Até lá.