---
id: 263
title: 'SQL Server 2008 (parte 2) &#8211; Programmability Enhancements'
date: '2009-02-10T22:45:00-03:00'
author: 'Leandro Daniel'

guid: /post/SQL-Server-2008-Programmability-Enhancements-(parte-2).aspx
permalink: /sql-server-2008-parte-2-programmability-enhancements/
categories:
    - Post
    - 'SQL Server'
---

Dando continuidade na série de posts sobre as melhorias de desenvolvimento do SQL Server 2008 falarei hoje sobre o *Row Constructors*. Para quem não leu os posts anteriores, é possível acessar todos os posts desta série [clicando aqui](/blog/?tag=/sql+server+2008).

**ROW CONSTRUCTORS**

O T-SQL a partir da versão 2008 oferece uma maneira mais concisa para criarmos sentenças com *Insert*. Nas versões anteriores usávamos o seguinte método para inserimos novos registros numa tabela:

```
<pre class="brush: sql;">INSERT INTO [dbo].[Atividade] (Descricao, DataConclusao) 
VALUES ('Participar do evento', '01/03/2009')

INSERT INTO [dbo].[Atividade] (Descricao, DataConclusao) 
VALUES ('Iniciar treinamento', '05/03/2009')

INSERT INTO [dbo].[Atividade] (Descricao, DataConclusao) 
VALUES ('Finalizar artigo', '11/03/2009')
```

A construção nova para o exemplo anterior seria:

```
<pre class="brush: sql;">INSERT INTO 
	[dbo].[Atividade]
VALUES 
	('Participar do evento', '01/03/2009'), 
	('Iniciar treinamento', '15/03/2009'),
	('Finalizar artigo', '22/03/2009')
```

Muito prático, não?