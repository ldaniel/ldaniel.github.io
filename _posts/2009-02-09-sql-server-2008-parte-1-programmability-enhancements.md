---
id: 264
title: 'SQL Server 2008 (parte 1) &#8211; Programmability Enhancements'
date: '2009-02-09T00:59:45-03:00'
author: 'Leandro Daniel'

guid: /post/SQL-Server-2008-Programmability-Enhancements-(parte-1).aspx
permalink: /sql-server-2008-parte-1-programmability-enhancements/
categories:
    - IT
tags:
    - pt-br
    - 'SQL Server'
---

Iniciando a série de posts sobre o SQL Server 2008 mostrarei hoje o conceito de *Merge* introduzido no T-SQL e que trouxe novas possibilidades não só para o Database Engine do SQL Server mas para outros serviços como o Integration Services (SSIS), incrementando a forma como você pode construir o seu DML.

 **MERGE**

A idéia é que operações de *insert*, *update* e *delete* em uma tabela possam ser baseadas no resultado de um *join* com outra tabela. Isso significa que você pode realizar múltiplas operações em uma única *query*.

Digamos que você queira atualizar uma tabela de colaboradores de uma revista para aplicar uma nova regra de bônus levando em consideração o seguinte:

– Todos os colaboradores que escreveram mais de 10 artigos ganharão um bônus de 100 pontos;

– Colaboradores que não escreveram nenhum artigo serão deletados – é só um exemplo pessoal 🙂

Para realizar a operação será necessário utilizarmos a tabela de artigos, a imagem abaixo ilustra as tabelas envolvidas.

![Tables_Merge](http://leandrodaniel.com/pics/WindowsLiveWriter/SQLServer2008ProgrammabilityEnhancements_C48/Tables_Merge_ec68be90-95b4-40ca-aeed-ff1c2274c959.gif "Tables_Merge")

Antes de utilizarmos o *Merge*, vamos considerar o cenário ilustrado abaixo através de duas consultas, uma retornando todos os registros da tabela *Colaborador* e outra que totaliza a quantidade de artigos por colaborador:

 ![Merge_Antes01](http://leandrodaniel.com/pics/WindowsLiveWriter/SQLServer2008ProgrammabilityEnhancements_C48/Merge_Antes01_2540cff8-3ca5-4543-a1b3-4a75c619e4d0.gif "Merge_Antes01")

Além do fato de que o segundo colaborador escreveu uma quantidade imensa de artigos, rapidamente constatamos que, de acordo com as regras que queremos aplicar, teríamos o primeiro e o segundo colaboradores ganhando o bônus de 100 pontos, o terceiro permanecendo com a mesma quantidade e o último sendo deletado da tabela. Vejamos como fica a query usando *Merge* para executar a operação toda:

```
<pre class="brush: sql;">MERGE Colaborador AS target
USING 
 (
	SELECT 
		[Colaborador].ColaboradorId, COUNT([Artigo].ArtigoId)
	FROM 
		[Colaborador]
		INNER JOIN [Artigo]
			on [Artigo].ColaboradorId = [Colaborador].ColaboradorId
	GROUP BY
		[Colaborador].ColaboradorId
	HAVING
		COUNT([Artigo].ArtigoId) > 0
 ) AS source (ColaboradorId, QtdeArtigos)
ON 
	(target.ColaboradorId = source.ColaboradorId)
WHEN MATCHED AND source.QtdeArtigos > 10
    THEN UPDATE SET target.Bonus = target.Bonus + 100
WHEN NOT MATCHED BY SOURCE 
	THEN DELETE
OUTPUT Deleted.*, $action, Inserted.*;
```

   
Na **Linha 1** definimos o nosso *target*, que no caso é a tabela *Colaboradores*, que possui o atributo *Bonus* que queremos atualizar.

Da **Linha 2** até a **Linha 16** montaremos a nossa query para verificamos a quantidade de artigos por colaborador.

Nas **Linhas 17** e **18** dizemos através do argumento *WHEN MATCHED* que para cada registro do *source* que tivemos uma quantidade de artigos maior que 10 aplicaremos uma atualização no *target* somando mais 100 pontos no atributo *Bonus*.

As **Linhas 19 e 20** e utilizam o argumento *WHEN NOT MATCHED BY SOURCE* para realizar o *delete* dos registros que não satisfizeram nem consulta do *source* quanto as as condições adicionais.

Finalmente a **Linha 21** exibe o resultado antes e depois do *Merge* através do comando [OUTPUT](http://msdn.microsoft.com/en-us/library/ms177564), esta última linha é opcional, e nos dará o seguinte resultado:

![Merge_Antes](http://leandrodaniel.com/pics/WindowsLiveWriter/SQLServer2008ProgrammabilityEnhancements_C48/Merge_Antes_cd731c4a-a277-463b-8569-54f7f557fc66.gif "Merge_Antes")

Na imagem acima também está o resultado final da tabela *Colaborador*. Como vimos realizamos todas as operações propostas de maneira bem simples. Fácil, não?

Embora incrementos como o *Merge* afaste o T-SQL do padrão ANSI devemos considerar o uso deste recurso quando desejamos realizar tarefas mais complexas de uma maneira rápida e limpa, ainda que apenas em tempo de desenvolvimento. Processos de <acronym title="Extract Transform Load">ETL</acronym> no Integration Services também podem ser beneficiar com o *Merge*, uma que vez tarefas de verificação que dependam de resultados de outras consultas podem ser implementadas mais facilmente e de maneira eficiente.

No próximo post da série veremos mais incrementos de desenvolvimento do SQL Server 2008.
