---
id: 80
title: 'SQL Server: Aprenda a usar BCP (esqueça o C# de vez em quando)'
date: '2011-01-26T12:28:00-03:00'
author: 'Leandro Daniel'

guid: /post/Aprenda-a-usar-BCP.aspx
permalink: /sql-server-aprenda-a-usar-bcp-esqueca-o-c-de-vez-em-quando/
categories:
    - IT
tags:
    - pt-br
    - 'SQL Server'
---

Há uns dias atrás um amigo veio tirar algumas dúvidas sobre um processo de extração de informações de um site que ele precisava fazer, e ficou espantado quando no final sugeri o SSIS (SQL Server Integration Services). A dúvida inicial era sobre XML e ele já havia se decidido sobre um Windows Service escrito em C# como solução. Mas como gosto de saber mais detalhes antes de opinar, fiz algumas perguntas e entendendo o cenário aos poucos cheguei no SSIS.

Coincidentemente, na mesma semana fui chamado para avaliar um sério problema de performance numa aplicação Windows Forms de carga, feita em C#. Ao questionar os desenvolvedores sobre a opção por uma Windows Forms e não um pacote SSIS, comentaram que havia sido uma imposição da área de TI do cliente.

### Analisando alguns equívocos, erros e prováveis raízes

Claro, existem inúmeras perspectivas e itens que podemos analisar sobre esses dois casos (e pretendo escrever alguns posts sobre isso). Para esse post, tentando não julgar meus amigos e colegas, e observando as situações acima citadas, coloco a seguir alguns pontos interessantes:

- Encarar a plataforma .NET como única forma de realizar desenvolvimento de soluções é um grande erro;
- Achar que uma abordagem técnica para resolver um problema se resume em escolher uma linguagem ou template de projeto no Visual Studio é um tanto quanto ingênuo;
- Aquela frase “Para quem só sabe usar martelo, todo problema é um prego”, também serve para adoção de novas tecnologias. Isso rende um post futuro.
- Deixar de aplicar uma visão holística sobre um problema pode ser a diferença entre o sucesso e o fracasso de uma aplicação. Isso nos remete a considerar o desenvolvimento em outros tipos de tecnologias e plataformas de desenvolvimento;
- Ignorar a experiência de programadores mais velhos ou achar que somente as tecnologias atuais são a resposta pode te afastar da melhor solução;
- Sinto que a falácia de alguns *[Early Adopters](http://www.leandrodaniel.com/post/Inovador-ou-early-adopter)* tem grande culpa nos itens acima citados. Mas isso é assunto para outro post.

### Enfim, onde se encaixa o BCP

O curioso é que esse é apenas mais um post sobre BCP entre tantos, que não traz absolutamente nada de novo. Contudo, ele se faz necessário, já que me parece que os desenvolvedores Microsoft de hoje não dominam muitas tecnologias (básicas ao meu ver) além do Visual Studio/C#/VB.NET.

No segundo caso que eu citei, era difícil convencer o cliente a utilizar SSIS naquela altura do campeonato. A solução foi utilizar o BCP, um pequeno utilitário do SQL Server. Pensando a grosso modo, o SSIS é um grande “chamador de coisas”, portanto, quando precisamos fazer operações com grandes volumes de dados (gerando arquivos texto, por exemplo) uma boa saída é usar as ferramentas adequadas do SQL Server. E acreditem, isso também é trabalho de um desenvolvedor e não somente de DBAs (aliás, mais um ponto que merece um outro post: “a absurda rixa entre desenvolvedores e DBAs”).

Desde as versões mais remotas do SQL Server, existe um pequeno utilitário que pode ser usado para realizar cópia de dados em massa: o **BCP** (do inglês Bulk Copy Program). Basicamente, é um utilitário de linha de comando que vem com o Microsoft SQL Server e serve para importar e exportar grandes quantidades de dados dentro e fora de bancos de dados do SQL Server de maneira bastante rápida (e limpa). Talvez você já tenha ouvido falar em Bulk Insert, os princípios são os mesmos.

Essas operações são extremamente rápidas porque o SQL Server escreve diretamente nos arquivos, como se “tombasse” os dados nele, sem o overhead de processamento existente em uma engine de aplicação feita em C#, por exemplo (que teria que gerenciar memória, tamanho de objetos criados, dispose de objetos etc).

No segundo exemplo que citei, a aplicação construída em C# levava em torno de 3 dias (isso, 3 dias) para executar a tarefa de extração de dados, transformação e geração de arquivos texto. Passando algumas tarefas para o banco de dados, utilizando tabelas temporárias durante as consultas de dados, e aplicando o BCP para gerar os arquivos texto, a operação toda não levou mais do que algumas poucas horas. Claro, estamos falando de milhões de registros de uma operação grande.

### Sintaxe

A sintaxe do utilitário BCP (via prompt de comando) pode ser analisada a seguir:

| bcp {\[\[database\_name.\]\[schema\].\]{table\_name \| view\_name} \| “query”}   {in \| out \| queryout \| format} data\_file   \[-m max\_errors\] \[-f format\_file\] \[-x\] \[-e err\_file\]   \[-F first\_row\] \[-L last\_row\] \[-b batch\_size\]   \[-d database\_name\] \[-n\] \[-c\] \[-N\] \[-w\] \[-V (70 \| 80 \| 90 )\]   \[-q\] \[-C { ACP \| OEM \| RAW \| code\_page } \] \[-t field\_term\]   \[-r row\_term\] \[-i input\_file\] \[-o output\_file\] \[-a packet\_size\]   \[-S \[server\_name\[\\instance\_name\]\]\] \[-U login\_id\] \[-P password\]   \[-T\] \[-v\] \[-R\] \[-k\] \[-E\] \[-h”hint \[,…n\]”\]Você encontra mais informações sobre o utilitário BCP no MSDN: [http://msdn.microsoft.com/en-us/library/ms162802.aspx](http://msdn.microsoft.com/en-us/library/ms162802 "http://msdn.microsoft.com/en-us/library/ms162802") |
|---|

### Um exemplo na prática

Obviamente, não posso utilizar o cenário do cliente como exemplo, por isso farei uso do famoso banco de dados de exemplo **AdventureWorks**. Para gerar algo um pouco mais realístico, peguei a tabela **TransactionHistory** e a fortifiquei com um milhão de registros.

Quando trabalhamos com BPC é uma boa ideia gerar arquivos .BAT para executar as operações, já que estamos lidando com um utilitário de linha de comando. O exemplo de comando que veremos abaixo está dentro de um arquivo .BAT. A linha que realmente importa é a **12**, onde observamos que o comando inicia especificando a tabela usando “fully qualified name”. Em seguida informo que a operação é de extração de dados (OUT). Os argumentos posteriores definem o nome do arquivo a ser gerado, o arquivo de Log com os resultados da operação, e por fim o banco, usuário e senha para conexão.

```
<pre class="brush: sql;">
@ECHO OFF

Set Server=NomeServidor
Set Username=UsuarioBanco
Set Password=Senha
Set Arquivo=c:\temp\tabela.bcp
Set Log=c:\temp\tabela.log_exp

ECHO Inicio do BCP...: %TIME%
ECHO Aguarde a carga dos dados...

bcp AdventureWorks.Production.TransactionHistory OUT %Arquivo% -o %Log% -S%Server% -U%Username% -P%Password% -c

ECHO Termino do BCP..: %TIME%
ECHO Log no arquivo %Log%

PAUSE
```

O resultado da execução da BAT pode ser conferido a seguir. Observe que a operação de extração de dados levou em torno de 16 segundos.

[![BCPResult](http://leandrodaniel.com/pics/BCPResult_thumb.jpg "BCPResult")](http://leandrodaniel.com/pics/BCPResult.jpg)  
A figura abaixo mostra os arquivos gerados, de acordo com os nomes que definimos nos arquivo BAT.

[![BCPResult1](http://leandrodaniel.com/pics/BCPResult1_thumb_1.png "BCPResult1")](http://leandrodaniel.com/pics/BCPResult1_1.png)  
Se abrirmos o arquivo de dados no Microsoft SQL Server Management Studio podemos ver como o BPC formatou os dados. Obviamente, esse formato pode ser configurado ao executar o comando (vide o tópico sintaxe).

[![BCPResult2](http://leandrodaniel.com/pics/BCPResult2_thumb_1.png "BCPResult2")](http://leandrodaniel.com/pics/BCPResult2_1.png)  
O arquivo de log que foi gerado mostra o registro de toda a operação. No destaque da imagem abaixo podemos ver a quantidade de registros que foram copiados em 16 segundos: 1.113.543 registros (bacana, não?).

[![BCPResult3](http://leandrodaniel.com/pics/BCPResult3_thumb_1.png "BCPResult3")](http://leandrodaniel.com/pics/BCPResult3_1.png)

Como existem muitas opções disponíveis, eu recomendo que você brinque com algumas delas – em um ambiente de desenvolvimento, claro! ![Alegre](http://leandrodaniel.com/pics/wlEmoticon-smile_1.png) – para entender quais parâmetros são interessantes para você.

Se você quiser copiar rapidamente grandes quantidades de dados do SQL Server, BCP ainda é uma das melhores ferramentas disponíveis. Depois de ter passado a curva de aprendizado inicial, você verá que o BCP oferece uma maneira altamente eficiente para copiar dados de um banco de dados para outro, ou para arquivos.

Como mencionei antes, existem diversas considerações que merecem um post próprio, e pretendo fazer isso em breve. Até lá, sinta-se livre para comentar suas experiências aqui.
