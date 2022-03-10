---
id: 236
title: 'EntLib (parte 3) – Instrumentação de código'
date: '2009-04-29T23:22:20-03:00'
author: 'Leandro Daniel'

guid: /post/EntLib-(parte-3)-e28093-Instrumentacao-de-codigo.aspx
permalink: /entlib-parte-3-instrumentacao-de-codigo/
categories:
    - 'Enterprise Library'
    - Post
---

Dizemos que um código possui instrumentação (ou *Instrumentation*, do inglês) quando ele é capaz de gerar indicadores para monitorarmos ou medirmos sua performance. Tipicamente, esses indicadores auxiliam na detecção de erros relacionados a performance e podem ser utilizados, por exemplo, para visualização através do aplicativo de monitoramento de performance do Windows (acesse através da opção *Run* do Windows, digitando ***perfmon***).

Com exceção do Unity, todos os demais blocos da Enterprise Library podem ser instrumentalizados. Por padrão esse recurso vem desativado, sendo necessário utilizar um arquivo *bat* que aplica as configurações necessárias para ativação. Caso você tenha feito a instalação padrão o arquivo *bat* poderá ser executado através da opção *Run* do Windows usando o arquivo abaixo:

***C:\\Program files\\Microsoft Enterprise Library 4.1 – October 2008\\InstallServices.bat***

Para desinstalar a instrumentação basta digitar o mesmo arquivo com o parâmetro “/u”, conforme abaixo:

**C:\\Program files\\Microsoft Enterprise Library 4.1 – October 2008\\InstallServices.bat /u**

Outra forma disponível para realizar as operações acima é utilizar os atalhos existentes no menu ***Start / All programs / Microsoft patterns &amp; practices / Enterprise Library 4.1 – October 2008***.

Uma vez instalado devemos adicionar uma referência no projeto para a seguinte biblioteca:

***Microsoft.Practices.EnterpriseLibrary.Common.dll***

Devemos também adicionar o seguinte *namespace* na classe que usará a instrumentação:

```
<pre class="brush: csharp;">...
using Microsoft.Practices.EnterpriseLibrary.Common.Instrumentation;
...
```

Por último será necessário adicionarmos no arquivo de configuração do projeto (tanto faz ser *Web.config* ou *App.config*) o bloco de instrumentação, clicando com o botão direito no arquivo e escolhendo a opção ***Edit Enterprise Library Configuration***. Na janela de configuração do ***Enterprise Library Configuration*** clique com o botão direito no segundo nó da estrutura e escolha **Instrumentation**.

[![Instrumentation](http://leandrodaniel.com/pics/WindowsLiveWriter/EntLibparte3Instrumentaodecdigo/514D698F/Instrumentation_thumb.png "Instrumentation")](http://leandrodaniel.com/pics/WindowsLiveWriter/EntLibparte3Instrumentaodecdigo/055A56D0/Instrumentation.png)

Utilizando a janela **Properties** do Visual Studio é possível configurar as propriedades do bloco, para o exemplo deste post eu alterei as propriedades ***PerformanceCountersEnabled, **WmiEnable***** e ***EventLoggingEnabled*** para ***True***. Abaixo temos um exemplo de como devemos implementar um *listener* para monitoramento de chamadas de conexão com o banco de dados.

```
<pre class="brush: csharp;">public class MyListener
{
    public MyListener(string instanceName, bool a, bool b, bool c) { }

    [InstrumentationConsumer("DbConnect")]
    public void ConnectObserved(object sender, EventArgs e)
    {
        System.Console.WriteLine("I saw a Database Connect.");
    }
}

[InstrumentationListener(typeof(MyListener))]
public class MyApplication
{
    [InstrumentationProvider("DbConnect")]
    public event EventHandler<EventArgs> OnDbConnect;
}
```

<font size="1">**Fonte:** </font>[<font size="1">http://msdn.microsoft.com/en-us/library/cc511922.aspx</font>](http://msdn.microsoft.com/en-us/library/cc511922 "http://msdn.microsoft.com/en-us/library/cc511922")