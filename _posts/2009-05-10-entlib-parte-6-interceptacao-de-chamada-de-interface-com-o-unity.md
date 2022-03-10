---
id: 228
title: 'EntLib (parte 6) – Interceptação de chamada de interface com o Unity'
date: '2009-05-10T23:36:06-03:00'
author: 'Leandro Daniel'

guid: /post/EntLib-(parte-6)-e28093-Interceptacao-de-chamada-de-interface-com-o-Unity.aspx
permalink: /index.php/entlib-parte-6-interceptacao-de-chamada-de-interface-com-o-unity/
categories:
    - Arquitetura
    - 'Enterprise Library'
    - Post
---

Dentro do desenvolvimento de software chamamos de “*cross-cutting* *concerns”* tudo aquilo que faz parte do nosso código provendo funcionalidades comuns entre diversas classes (entre camadas lógicas, por exemplo). Exemplificando, poderíamos dizer que itens como segurança, *log*, instrumentação de código, são preocupações que atravessam nossas classes, daí dizermos “*cross-cutting concerns*” ou preocupações transversais.

O Unity Application Block, além de resolver problemas de alto acoplamento também pode ajudar imprimindo um certo nível de [AOP](http://pt.wikipedia.org/wiki/Programa%C3%A7%C3%A3o_orientada_a_aspecto) (*[Aspect-oriented programming](http://pt.wikipedia.org/wiki/Programa%C3%A7%C3%A3o_orientada_a_aspecto)*, ou programação orientada a aspectos) em suas aplicações através de uma extensão da biblioteca chamada ***InterceptorExtension***.

Vamos pegar o mesmo exemplo utilizado no meu [post anterior da série](http://www.leandrodaniel.com/post/EntLib-(parte-5)-e28093-Unity-Application-Block), e modifica-lo para vermos como podemos usar uma interceptação para a interface ***ILogger***. Tomaremos o resultado final da classe ***Servico*** e faremos a alteração no seu construtor, indicada nas linhas **20** a **28**. Basicamente, dizemos ao container que toda vez que o mapeamento da interface ***ILogger*** for para a classe concreta ***ConsoleLogger*** interceptaremos as chamadas para essa interface (InterfaceInterceptor), aplicando alguma nova característica. Repare que na linha **4** adicionamos o *namespace* que contém a extensão de interceptação do Unity.

```
<pre class="brush: csharp;">using System.Configuration;
using Microsoft.Practices.Unity;
using Microsoft.Practices.Unity.Configuration;
using Microsoft.Practices.Unity.InterceptionExtension;

using Reverb.Loggers;

namespace Reverb.InterceptionSample
{
    public class Servico
    {
        private IUnityContainer container;
        private UnityConfigurationSection section;
        private ILogger logger;

        public Servico()
        {
            container = new UnityContainer();
            
            /* *******************************************
             * Adicionando o tratamento de interceptação
             * para a interface ILogger.
             *********************************************/
            container.AddNewExtension<Interception>();
            container.RegisterType<ILogger, ConsoleLogger>()
                .Configure<Interception>()
                .SetInterceptorFor<ILogger>(new InterfaceInterceptor());
            //*********************************************

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
}
```

Adicionaremos uma nova classe que manipulará a chamada interceptada pelo Unity adicionando um GUID para cada evento, exatamente como o código a seguir:

```
<pre class="brush: csharp;">using System;
using Microsoft.Practices.Unity;
using Microsoft.Practices.Unity.InterceptionExtension;

namespace Reverb.Handlers
{
    public class GUIDAttribute : HandlerAttribute
    {
        public override ICallHandler CreateHandler(IUnityContainer container)
        {
            return new GUIDHandler();
        }
    }

    public class GUIDHandler : ICallHandler
    {
        public int Order { get; set; }

        public IMethodReturn Invoke(
            IMethodInvocation input, 
            GetNextHandlerDelegate getNext)
        {
            System.Guid guid = System.Guid.NewGuid();
            Console.WriteLine();
            Console.WriteLine("ID: {0}", guid.ToString());
            return getNext()(input, getNext);
        }
    }
}
```

Por fim, decoraremos a interface ***ILogger*** com o atributo criado no código anterior:

```
<pre class="brush: csharp;">using System.Diagnostics;
using Reverb.Handlers;

namespace Reverb.Loggers
{
    [GUID]
    public interface ILogger
    {
        void Log(string message, TraceEventType eventType);
    }
}
```

Desta forma, toda vez que chamarmos a interface ***ILogger*** para resolução da classe concreta ***ConsoleLogger***, o Unity interceptará essa chamada utilizando o manipulador ***GUIDHandler*** para criar um GUID e adiciona-lo na mensagem de retorno. Como usei um projeto do tipo *Console Application* o resultado da chamada é ilustrado na imagem abaixo:

[![ConsoleInterception](http://leandrodaniel.com/pics/WindowsLiveWriter/EntLibparte6Interceptaodechamadademtodos/4C2506A9/ConsoleInterception_thumb.png "ConsoleInterception")](http://leandrodaniel.com/pics/WindowsLiveWriter/EntLibparte6Interceptaodechamadademtodos/161DF6EB/ConsoleInterception.png)

Fantástico não?