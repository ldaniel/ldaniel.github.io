---
id: 226
title: 'EntLib (parte 7) – Configurando InterceptionExtension no Unity'
date: '2009-05-17T23:45:03-03:00'
author: 'Leandro Daniel'
guid: /post/EntLib-(parte-7)-e28093-Configurando-InterceptionExtension-no-Unity.aspx
permalink: /entlib-parte-7-configurando-interceptionextension-no-unity/
categories:
    - IT
tags:
    - pt-br
    - Arquitetura
    - 'Enterprise Library'
---

No meu [último post da série sobre a Enterprise Library](http://www.leandrodaniel.com//post/EntLib-(parte-6)-e28093-Interceptacao-de-chamada-de-interface-com-o-Unity) expliquei como podemos utilizar a extensão de biblioteca ***InterceptionExtension*** do Unity para aplicar interceptação na chamada da interface ***ILogger*** aplicando uma característica **AOP** no *container*. O exemplo levava em consideração que a definição fosse realizada em tempo de execução. Veremos agora como podemos modificar o exemplo anterior colocando todas as definições no arquivo de configuração da aplicação.

Dentro do arquivo de configuração, adicione dentro da sessão ***typeAliases*** os tipos descritos abaixo:

```
<pre class="brush: xml;"><typeAliases>
 
    ...

    <typeAlias 
        alias="GUIDAttribute" 
        type="Reverb.Handlers.GUIDAttribute, Reverb.InterceptionSample" />
    <typeAlias 
        alias="GUIDHandler" 
        type="Reverb.Handlers.GUIDHandler, Reverb.InterceptionSample" />
    <typeAlias 
        alias="interface" 
        type="Microsoft.Practices.Unity.InterceptionExtension.InterfaceInterceptor, Microsoft.Practices.Unity.Interception, Version=1.2.0.0" />
</typeAliases>
```

Em seguida adicione um novo container dentro da sessão ***Containers***, conforme descrito abaixo:

```
<pre class="brush: xml;"><container name="InterfaceInterceptionContainer">
    <extensions>
        <add type="Microsoft.Practices.Unity.InterceptionExtension.Interception, Microsoft.Practices.Unity.Interception" />
    </extensions>
    <extensionConfig>
        <add name="interception"
            type="Microsoft.Practices.Unity.InterceptionExtension.Configuration.InterceptionConfigurationElement, Microsoft.Practices.Unity.Interception.Configuration">
            <interceptors>
                <interceptor type="interface">                                
                    <key type="ILogger"/>
                </interceptor>                            
            </interceptors>
        </add>
    </extensionConfig>
    <types>
        <type type="ILogger" mapTo="ConsoleLogger" />
    </types>
</container>
```

Por fim o construtor da classe ***Servico*** deve ser alterado da seguinte forma:

```
<pre class="brush: csharp;">public Servico()
{
    container = new UnityContainer(); 
    section = (UnityConfigurationSection)ConfigurationManager.GetSection("unity");
    
    section.Containers["InterfaceInterceptionContainer"].Configure(container);            
    
    logger = container.Resolve<ILogger>();
}
```

Repare que modificamos o código anterior retirando toda a configuração para ser usada em tempo de execução e colocando em seu lugar a linha **6** que diz qual configuração utilizaremos para adicionarmos a extensão de interceptação do Unity. Assim, é possível conferir maior facilidade para alterações nas definições de interceptação, sem a necessidade de recompilar toda a aplicação (a menos, é claro, que você adicione um novo *handler*).

Até o próximo post da série.
