---
id: 229
title: 'EntLib (parte 5) – Unity Application Block'
date: '2009-05-09T22:53:00-03:00'
author: 'Leandro Daniel'

guid: /post/EntLib-(parte-5)-e28093-Unity-Application-Block.aspx
permalink: /entlib-parte-5-unity-application-block/
categories:
    - IT
tags:
    - pt-br
    - Arquitetura
    - 'Enterprise Library'
---

Aproveitando o embalo do meu post dessa semana sobre o [padrão de injeção de dependência](http://www.leandrodaniel.com/post/O-exemplo-da-Injecao-de-Dependencia-na-tomada-de-decisao-de-um-arquiteto), vamos ver o bloco da Enterprise Library responsável por prover essa funcionalidade, chamado *Unity Application Block*. Criado inicialmente como um projeto separado no [CodePlex](http://www.codeplex.com/unity) foi incorporado a Enterprise Library na versão 4.0.

No exemplo de código abaixo a classe ***Servico*** utiliza a classe ***TraceSourceLogger*** para registrar os passos executados na inicialização e paralização, ou seja, a classe ***Servico*** conhece e depende da classe concreta ***TraceSourceLogger***.

```
<pre class="brush: csharp;">public class Servico
{
    private TraceSourceLogger logger;

    public Servico()
    {
        logger = new TraceSourceLogger("Agent");
    }

    public void Iniciar()
    {
        logger.Log("Iniciando serviço...", System.Diagnostics.TraceEventType.Information);

        // Código de inicialização do serviço...

        logger.Log("Serviço iniciado.", System.Diagnostics.TraceEventType.Information);
    }

    public void Parar()
    {
        logger.Log("Parando serviço...", System.Diagnostics.TraceEventType.Information);

        // Código de parada do serviço...

        logger.Log("Serviço parado.", System.Diagnostics.TraceEventType.Information);
    }
}
```

O problema aqui é que qualquer alteração na forma de realizar o log da operação implicaria em alterações na classe ***Servico***. Por exemplo, se quiséssemos substituir a classe ***TraceSourceLogger*** por outra que realizasse a operação gravando no *Event Viewer* teríamos que realizar a alteração na classe ***Servico***, inclusive recompilando o projeto.

Uma boa prática aqui é fazer com que ao invés de instanciarmos diretamente a classe concreta o fizéssemos através de uma *interface*, conforme ilustrado no diagrama a seguir:

[![ClassDiagram1](http://leandrodaniel.com/pics/WindowsLiveWriter/EntLibparte5UnityApplicationBlock/2A4BF146/ClassDiagram1_thumb.png "ClassDiagram1")](http://leandrodaniel.com/pics/WindowsLiveWriter/EntLibparte5UnityApplicationBlock/2F2EA502/ClassDiagram1.png)

Em seguida utilizamos o *Unity* para resolver as chamadas às classes concretas da seguinte forma. Primeiro adicionamos no arquivo de configuração do projeto as configurações abaixo:

```
<pre class="brush: xml;"><?xml version="1.0" encoding="utf-8" ?>
<configuration>
    <configSections>
        <section name="unity" type="Microsoft.Practices.Unity.Configuration.UnityConfigurationSection, Microsoft.Practices.Unity.Configuration" />
    </configSections>
    <unity>
        <typeAliases>
            <typeAlias
              alias="ILogger"
              type="Reverb.Loggers.ILogger, Reverb.DI" />
            <typeAlias
              alias="ConsoleLogger"
              type="Reverb.Loggers.ConsoleLogger, Reverb.DI" />
            <typeAlias
              alias="TraceSourceLogger"
              type="Reverb.Loggers.TraceSourceLogger, Reverb.DI" />
            <typeAlias
                alias="EventViewerLogger"
                type="Reverb.Loggers.EventViewerLogger, Reverb.DI" />
        </typeAliases>
        <containers>
            <container>
                <types>
                    <type type="ILogger" mapTo="TraceSourceLogger" />
                </types>
            </container>
        </containers>
    </unity>
</configuration>
```

No arquivo acima indicamos quais os tipos desejados e como o container deve resolver a implementação concreta para a interface *ILogger*. Depois, alteraríamos a classe ***Servico*** conforme exemplo a seguir:

```
<pre class="brush: csharp;">public class Servico
{
    private IUnityContainer container;
    private UnityConfigurationSection section;
    private ILogger logger;

    public Servico()
    {
        container = new UnityContainer();
        section = (UnityConfigurationSection)ConfigurationManager.GetSection("unity");
        section.Containers.Default.Configure(container);
        logger = container.Resolve<ILogger>();
    }

    public void Iniciar()
    {   
        logger.Log("Iniciando servico...", System.Diagnostics.TraceEventType.Information);

        // Código de inicialização do serviço...

        logger.Log("Servico iniciado.", System.Diagnostics.TraceEventType.Information);
    }

    public void Parar()
    {
        logger.Log("Parando servico...", System.Diagnostics.TraceEventType.Information);

        // Código de parada do serviço...

        logger.Log("Servico Parado.", System.Diagnostics.TraceEventType.Information);
    }
}
```

Note que no código acima não definimos em momento algum qual seria a implementação da classe concreta que realiza a operação de log, pois isso fica a cargo do *container* do *Unity* que resolverá essa dependência de acordo com o que definimos no arquivo de configuração da classe.

Se quiséssemos agora alterar a implementação de classe concreta que resolveria o log bastaria modificar no arquivo de configuração, como no exemplo a seguir:

```
<pre class="brush: xml;"><containers>
    <container>
        <types>
            <type type="ILogger" mapTo="ConsoleLogger" />
        </types>
    </container>
</containers>
```

Bem fácil, não? Na revista .net Magazine edição 62 terá um artigo meu sobre Injeção de Dependência com o *Unity Application Block*, colocarei mais informações aqui na próxima semana, aguardem!

Até o próximo post.
