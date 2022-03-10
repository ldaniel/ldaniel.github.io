---
id: 198
title: 'E era muito pior no SQL Server 2000…'
date: '2009-08-28T15:04:04-03:00'
author: 'Leandro Daniel'

guid: /post/E-era-muito-pior-no-SQL-Server-2000e280a6.aspx
permalink: /e-era-muito-pior-no-sql-server-2000/
categories:
    - Post
    - 'SQL Server'
---

Depois de ficar um dia inteiro trabalhando num pacote do SSIS, resolvi dar um *zoom to fit* no Visual Studio pra ter uma idéia geral do *Control Flow* do processo e me deparei com isso:

[![SSIS](http://leandrodaniel.com/pics/WindowsLiveWriter/EeramuitopiornoSQLServer2000/0D3003A9/SSIS_thumb.png "SSIS")](http://leandrodaniel.com/pics/WindowsLiveWriter/EeramuitopiornoSQLServer2000/4EA594A0/SSIS.png)

O detalhe é que não está aparecendo na imagem os processos de *Data Flow* nem variáveis e scripts. Se fosse no SQL Server 2000 a coisa estaria muito mais complexa de ser analisada, porque o ambiente de desenvolvimento era a console de administração do SQL Server 2000 (o velho Enterprise Manager) .

Estou pensando em refatorar o processo em pacotes menores e criar um pacote maior para chamar os demais, mas o fato é que desde a versão 2005 do SQL Server desenvolver dentro do Visual Studio é uma tarefa muito melhor, sem contar o fato de que a solução está integrada ao *Source Control* do Team System.

Como eu gosto do SQL Server… e mais ainda do Visual Studio!