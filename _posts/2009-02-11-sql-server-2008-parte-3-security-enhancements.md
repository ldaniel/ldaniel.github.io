---
id: 262
title: 'SQL Server 2008 (parte 3) &#8211; Security Enhancements'
date: '2009-02-11T23:44:04-03:00'
author: 'Leandro Daniel'

guid: /post/SQL-Server-2008-Programmability-Enhancements-(parte-3).aspx
permalink: /sql-server-2008-parte-3-security-enhancements/
categories:
    - Post
    - 'SQL Server'
---

Hoje abordarei algumas melhorias relacionadas ao uso de criptografia no SQL Server 2008. Seguindo a linha dos posts anteriores, apresentarei os conceitos de uma maneira simples e objetiva já que é possível estudar com profundidade todos os assuntos abordados aqui no [SQL Server Books Online](http://msdn.microsoft.com/en-us/library/ms130214).

Para acessar os demais posts desta série [clique neste link](http://www.leandrodaniel.com/?tag=/sql+server+2008).

 **ENCRYPTION**

A partir da versão 2008 do SQL Server diversos aprimoramentos foram disponibilizados para trabalhar com criptografia das informações armazenadas, dentre eles o Transparent Data Encryption (TDE).

Basicamente a TDE possibilita encriptação e decriptação de dados e do log do SQL Server em tempo real usando o uma chave simétrica armazenada no banco de dados *master* ou uma chave assimétrica. Esse mecanismo é acionado no nível da página de dados antes que ocorra a gravação em disco.

A figura abaixo mostra a arquitetura do TDE completa.

![security_SQL_2008](http://leandrodaniel.com/pics/WindowsLiveWriter/SQLServer2008ProgrammabilityEnhancements_13DD8/security_SQL_2008_e67cb820-f94c-4b2b-9280-3a9f12125e3b.gif "security_SQL_2008")

Alguns passos são necessários para utilizarmos do TDE são eles:

- Criação de uma *master key*
- Criação de um certificado protegido pela *master key*
- Criação de uma chave de criptografia para a database protegida pelo certificado
- Definir o banco de dados para usar a criptografia

Abaixo segue um exemplo de código do MSDN:

```
<pre class="brush: sql;">USE master;
GO

CREATE MASTER KEY ENCRYPTION BY PASSWORD = '<usestrongpasswordhere>';
go

CREATE CERTIFICATE MyServerCert WITH SUBJECT = 'My DEK Certificate'
go

USE AdventureWorks
GO

CREATE DATABASE ENCRYPTION KEY
WITH ALGORITHM = AES_128
ENCRYPTION BY SERVER CERTIFICATE MyServerCert
GO

ALTER DATABASE AdventureWorks
SET ENCRYPTION ON
GO</usestrongpasswordhere>
```

   
Este artifício reforça a preocupação do time de desenvolvimento do produto com a segurança da informação. Uma dica interessante para ser usada independente do uso dos mecanismos explicados acima é o [Microsoft Baseline Security Analyzer 2.1](http://www.microsoft.com/downloads/details.aspx?familyid=f32921af-9dbe-4dce-889e-ecf997eb18e9&displaylang=en) (MBSA), uma ferramenta gratuita que avalia problemas de segurança em sistemas operacionais como o Vista ou o Windows Server 2008 entre outros produtos. As versões anteriores do MBSA faziam verificações de segurança no SQL Server 2005, contudo não vi nada igual para o 2008 ainda. Caso alguém saiba de alguma versão que faça isso, por favor, deixe um comentário aqui.