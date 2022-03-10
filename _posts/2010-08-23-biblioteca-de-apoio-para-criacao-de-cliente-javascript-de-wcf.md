---
id: 99
title: 'Biblioteca de apoio para criação de cliente JavaScript de WCF'
date: '2010-08-23T15:25:28-03:00'
author: 'Leandro Daniel'
layout: post
guid: /post/Biblioteca-de-apoio-para-criacao-de-cliente-JavaScript-de-WCF.aspx
permalink: /index.php/biblioteca-de-apoio-para-criacao-de-cliente-javascript-de-wcf/
categories:
    - Post
    - WCF
---

Em meus estudos recentes de WCF encontrei uma biblioteca JavaScript que facilita o trabalho de criação de clientes Web. Trata-se do **ProxyService.js**, desenvolvida pelo MVP [Rick Strahl](http://www.west-wind.com/weblog/). A biblioteca utiliza JSON e jQuery para realizar a consulta ao serviço WCF, deixando a tarefa bem simples para o desenvolvedor.

Abaixo coloquei um exemplo simples de como podemos criar um *client* *JavaScript* para invocar um serviço WCF. No final do artigo você encontra o download da solução completa.

O código abaixo mostra como devemos escrever nossa interface de serviço.

```
<pre class="brush: csharp;">using System.ServiceModel;
using System.ServiceModel.Web;

namespace WCFTestes
{
    [ServiceContract(Namespace = "", Name = "Servicos")]
    public interface IServicos
    {
        [OperationContract]
        [WebInvoke(
            BodyStyle = WebMessageBodyStyle.WrappedRequest, 
            ResponseFormat = WebMessageFormat.Json)]
        string Ping(string value);
    }
}
```

O detalhe importante no código acima é decorar o método **Ping** com o atributo ***WebInvoke***, conforme vemos nas linhas 10 a 12. Dessa forma, o formato resultante será do tipo JSON. Será necessário adicionar uma referência a System.ServiceModel.Web.

Em seguida, vemos como devemos decorar o nosso método (linha 6) para que possamos compatibilizar o serviço com o *client* JavaScript.

```
<pre class="brush: csharp;">using System.ServiceModel;
using System.ServiceModel.Activation;

namespace WCFTestes
{
    [AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Allowed)]
    [ServiceBehavior(IncludeExceptionDetailInFaults = true)]
    public class Servicos : IServicos
    {
        public string Ping(string value)
        {
            return string.Format("Hello {0}", value);
        }
    }
}
```

Por fim, devemos criar um *behavior* no ***web.config*** indicando o atributo **enableWebScript**, conforme a linha 13, e devemos associar o *behavior* criado ao *endpoint* (linha 6).

```
<pre class="brush: xml;"><system.serviceModel>
    <serviceHostingEnvironment aspNetCompatibilityEnabled="true"/>
    <services>
        <service name="WCFTestes.Servicos" 
                 behaviorConfiguration="WCFTestes.ServicosBehavior">
            <endpoint behaviorConfiguration="WCFTestes.AtividadeAspNetAjaxBehavior" 
                      binding="webHttpBinding" contract="WCFTestes.IServicos"/>
        </service>
    </services>
    <behaviors>
        <endpointBehaviors>
            <behavior name="WCFTestes.AtividadeAspNetAjaxBehavior">
                <enableWebScript/>
                <webHttp/>
            </behavior>
        </endpointBehaviors>
        <serviceBehaviors>
            <behavior name="WCFTestes.ServicosBehavior">
                <serviceMetadata httpGetEnabled="true"/>
                <serviceDebug includeExceptionDetailInFaults="true"/>
            </behavior>
        </serviceBehaviors>
    </behaviors>
</system.serviceModel>
```

Os detalhes acima descritos são importantes para que o serviço WCF consiga gerar um *response* que pode ser lido pelo *client* *JavaScript*.

Para utilizar a biblioteca **ServiceProxy.js** você deve fazer como no exemplo abaixo. Na linha 2 criamos o *proxy* passando como parâmetro o endereço do nosso serviço WCF. Da linha 5 a 10 invocamos o serviço passando como primeiro parâmetro o nome do WebMethod, em seguida passamos os parâmetros do WebMethod. Em seguida, manipulamos o resultado, exibindo o resultado em um *alert*.

```
<pre class="brush: js;"><script language="javascript">
    var proxy = new ServiceProxy("http://localhost:50564/Servicos.svc/");
    
    function InvokeWCF() {
        proxy.invoke("Ping", { value: "Leandro" },
                  function(result) 
                  {
                      alert(result);
                  },
                  onPageError);           
    }

    function onPageError(error) {
        alert("Ocorreu um erro: " + error.message);
    }
</script>
```

O código-fonte completo deste post pode ser baixado no link abaixo.

<iframe frameborder="0" marginheight="0" marginwidth="0" scrolling="no" src="http://cid-682bb4abc622d264.office.live.com/embedicon.aspx/.Public/WCFJavaScriptClient.zip" style="padding-bottom: 0px; background-color: #fcfcfc; padding-left: 0px; width: 98px; padding-right: 0px; height: 115px; padding-top: 0px" title="Preview"></iframe>