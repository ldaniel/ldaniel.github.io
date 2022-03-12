---
id: 237
title: 'EntLib (parte 2) – Melhore a performance de suas consultas'
date: '2009-04-26T03:09:40-03:00'
author: 'Leandro Daniel'

guid: /post/EntLib-(parte-2)-e28093-Melhore-a-performance-de-suas-consultas.aspx
permalink: /entlib-parte-2-melhore-a-performance-de-suas-consultas/
categories:
    - IT
tags:
    - pt-br
    - 'Enterprise Library'
---

Todo mundo sabe que na maioria das vezes o maior custo para recuperarmos informações numa aplicação está na consulta ao banco de dados. Entenda por “custo” a demanda de infra necessária para obter ou até mesmo persistir dados no contexto da aplicação bem como o tempo de resposta para executar tais operações, o que impacta diretamente na performance geral da aplicação. Uma das técnicas utilizadas para evitarmos consultas desnecessárias ao servidor de banco de dados é o armazenamento temporário em cache, onde os dados são disponibilizados em uma área da memória do servidor de aplicação.

A Enterprise Library oferece uma biblioteca para utilização de mecanismos de cache de maneira simples chamada ***Caching Application Block***. Para usarmos o bloco numa aplicação basta adicionarmos uma referência no projeto da seguinte DLL:

*Microsoft.Practices.EnterpriseLibrary.Caching.dll*

A partir daí adicionamos o *namespace* indicado abaixo na classe que utilizará o ***Caching***:

```csharp
...
using Microsoft.Practices.EnterpriseLibrary.Caching;
... 
```

Se quiséssemos, por exemplo, recuperar imagens de produtos gravadas no banco de dados, utilizaríamos o seguinte código:

```csharp
...

byte[] fotoProduto = null;
ICacheManager cache = CacheFactory.GetCacheManager();
fotoProduto = (byte[])cache[id.ToString()];

if (fotoProduto == null)
{
    ServicoProduto servico = new ServicoProduto();
    fotoProduto = servico.ObterFotoProduto(id);

    cache.Add(id.ToString(), fotoProduto);
}

...
```

Repare que nas linhas 4 e 5 o cache é criado e a variável **fotoProduto** recebe o valor armazenado no gerenciador de cache do ***Caching Application Block***. Nas linhas 7 a 13 a consulta ao banco é realizada caso o cache ainda não tenha sido preenchido ou o seu tempo de vida tenha expirado. Nas solicitações seguintes a consulta ao banco será descartada, já que o *cache* já terá recebido a carga da imagem. Para garantirmos a unicidade das imagens fornecemos junto a chave do produto através do valor contido na variável **id**.

O arquivo de configuração da aplicação deve ser alterado adicionando-se as tags a seguir:

```xml
<pre class="brush: xml;"><?xml version="1.0" encoding="utf-8"?>
<configuration>
  <configSections>

...

    <section name="cachingConfiguration" type="Microsoft.Practices.EnterpriseLibrary.Caching.Configuration.CacheManagerSettings, Microsoft.Practices.EnterpriseLibrary.Caching, Version=4.1.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" />
  </configSections>

...

  <cachingConfiguration defaultCacheManager="Cache Manager">
    <cacheManagers>
      <add expirationPollFrequencyInSeconds="60" maximumElementsInCacheBeforeScavenging="1000"
        numberToRemoveWhenScavenging="10" backingStoreName="Null Storage"
        type="Microsoft.Practices.EnterpriseLibrary.Caching.CacheManager, Microsoft.Practices.EnterpriseLibrary.Caching, Version=4.1.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35"
        name="Cache Manager" />
    </cacheManagers>
    <backingStores>
      <add encryptionProviderName="" type="Microsoft.Practices.EnterpriseLibrary.Caching.BackingStoreImplementations.NullBackingStore, Microsoft.Practices.EnterpriseLibrary.Caching, Version=4.1.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35"
        name="Null Storage" />
    </backingStores>
  </cachingConfiguration>

...

</configuration>
```

O tempo de duração do cache está definido na linha 14, através da propriedade ***expirationPollFrequencyInSeconds***.

Obviamente devemos planejar o uso deste mecanismo, entendendo onde teremos um real ganho de performance ao aplicarmos essa técnica, caso contrário estaremos só adicionando mais código na aplicação.

A título de informação, a Microsoft tem um projeto com o codinome [Velocity](http://msdn.microsoft.com/en-us/data/cc655792) que oferecerá uma plataforma de cache distribuído para aplicações armazenando qualquer tipo de dado com alta-performance. Atualmente o projeto está com a [versão CTP 3 disponível para download](http://www.microsoft.com/downloads/details.aspx?FamilyId=B24C3708-EEFF-4055-A867-19B5851E7CD2&displaylang=en), caso você tenha alguma experiência com o Velocity e deseje compartilhar comentando aqui, fique a vontade. Até o próximo post da série.
