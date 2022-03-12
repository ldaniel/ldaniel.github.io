---
id: 235
title: 'EntLib (parte 4) – Como criptografar valores de configurações'
date: '2009-04-30T23:21:00-03:00'
author: 'Leandro Daniel'

guid: /post/EntLib-(parte-4)-e28093-Como-criptografar-valores-de-configuracoes.aspx
permalink: /entlib-parte-4-como-criptografar-valores-de-configuracoes/
categories:
    - IT
tags:
    - pt-br
    - 'Enterprise Library'
---

Essa é rápida, em dois passos:

1. No Visual Studio, na janela ***Solution Explorer*** clique com o botão direito no arquivo *\*.config* e escolha ***Edit Enterprise Library Configuration***.
2. No painel que será aberto selecione o bloco desejado e configure na janela ***Properties*** a propriedade ***ProtectionProvider*** com um dos valores possíveis: ***RsaProtectedConfigurationProvider*** ou ***RsaProtectedConfigurationProvider***.

O arquivo terá os seus valores criptografados para o bloco escolhido, parecido com o exemplo abaixo:

```xml
<configuration>
  <configSections>
    <section name="dataConfiguration" type="Microsoft.Practices.EnterpriseLibrary.Data.Configuration.DatabaseSettings, Microsoft.Practices.EnterpriseLibrary.Data, Version=4.1.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" />
  </configSections>
  <dataConfiguration configProtectionProvider="DataProtectionConfigurationProvider">
    <EncryptedData>
      <CipherData>
        <CipherValue>AQAAANCMnd8BFdERjHoAwE/Cl+sBAAAAnG4OGsLZME6zifWS77nKbwQAAAACAAAAAAADZgAAqAAAABAAAAAvCXZMbpn4GScVpZdnDewUAAAAAASAAACgAAAAEAAAADusmEwywBaRj/cosxnUjNwwAAAAU0tWH46p699zcc0Em297GCXHmQFeJNDjBW/OYYD8dhL1YQvo3kv2xEqdceYyMaN4FAAAAH8/JIj3NPW0iqGaL3ea8EJ6iTcL</CipherValue>
      </CipherData>
    </EncryptedData>
  </dataConfiguration>
  <connectionStrings configProtectionProvider="DataProtectionConfigurationProvider">
    <EncryptedData>
      <CipherData>
        <CipherValue>AQAAANCMnd8BFdERjHoAwE/Cl+sBAAAAnG4OGsLZME6zifWS77nKbwQAAAACAAAAAAADZgAAqAAAABAAAABYRu+xiL0lzqHttNs404kBAAAAAASAAACgAAAAEAAAAMINKPGoHaeQb9sgHCDgdoMwAAAA54NHzS+SEf/FsxrhhdvEmzkaZquWXEXtkUqvOJJFAKcvetVZ/MrSlHYSwTkeK//IFAAAAMgRi2qGSQYz/thfljTdGEeOBQ6E</CipherValue>
      </CipherData>
    </EncryptedData>
  </connectionStrings>
</configuration>
```
