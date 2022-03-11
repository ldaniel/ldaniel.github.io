---
id: 239
title: 'EntLib (parte 1) – Organizando os arquivos de configuração'
date: '2009-04-23T23:34:53-03:00'
author: 'Leandro Daniel'

guid: /post/EntLib-(parte-1)-e28093-Organizando-os-arquivos-de-configuracao.aspx
permalink: /entlib-parte-1-organizando-os-arquivos-de-configuracao/
categories:
    - IT
tags:
    - pt-br
    - 'Enterprise Library'
---

Se pegarmos um arquivo de configuração de uma aplicação web feita em .NET Framework 1.1 e compararmos com um *web.config* atual veremos que a quantidade de elementos e tags dentro do XML cresceu consideravelmente. Com o passar dos anos novas implementações e melhorias no .NET Framework ampliaram as possibilidades de configuração de um projeto, dividindo os desenvolvedores em dois grupos distintos: os que gostam e os que odeiam arquivos de configuração XML.

Divergências à parte, vou mostrar uma opção para separarmos as configurações relacionadas a Enterprise Library em arquivos próprios, separados do *web.config* ou *app.config*, o que pode ser de grande ajuda para agilizar o trabalho de manutenção e até controlar o acesso a quem é devido.

Vamos utilizar um programa disponibilizado com a i[nstalação da Enterprise Library](http://www.microsoft.com/downloads/details.aspx?FamilyId=1643758B-2986-47F7-B529-3E41584B6CE5&displaylang=en) chamado ***Enterprise Library Configuration***. Se a instalação foi realizada da forma padrão, o arquivo estará disponível no seguinte endereço:

*C:\\Arquivos de programas\\Microsoft Enterprise Library 4.1 – October 2008\\Bin\\EntLibConfig.exe*

Outra forma de acessar este programa é através da IDE do Visual Studio, clicando com o botão direito no arquivo de configuração do projeto e escolhendo a opção ***Edit Enterprise Library Configuration***.

[![EntLibConfig](http://leandrodaniel.com/pics/WindowsLiveWriter/EntLibparte1/38CF8C80/EntLibConfig_thumb.png "EntLibConfig")](http://leandrodaniel.com/pics/WindowsLiveWriter/EntLibparte1/143B6E4B/EntLibConfig.png)

Na tela que será apresentada clique com o botão direito no segundo nó da estrutura e escolha a opção ***New*** e em seguida ***Configuration Sources***. Será criado um novo nó chamado ***Configuration Sources***, abaixo dele existe um item chamado ***System Configuration Source***, remova este item clicando com o botão direito em cima dele e escolhendo ***Remove***.

Clique novamente com o botão direito no item ***Configuration Sources*** e escolha a opção ***New*** e em seguida ***File Configuration Source***. A partir desse ponto, basta utilizar a janela *Properties* (F4) do VS.NET para localizar o caminho do arquivo de configuração através da propriedade ***File***. Também será necessário clicar no item ***Configuration Sources*** do painel de configuração e alterar a propriedade ***SelectedSource*** para ***File Configuration Source***.

[![EntLibConfig01](http://leandrodaniel.com/pics/WindowsLiveWriter/EntLibparte1/16E101D3/EntLibConfig01_thumb.png "EntLibConfig01")](http://leandrodaniel.com/pics/WindowsLiveWriter/EntLibparte1/6628D8C5/EntLibConfig01.png)

Repetindo os passos acima você pode adicionar mais arquivos de configuração, dependendo apenas da sua necessidade e conveniência. Outra possibilidade interessante é criptografar o arquivo isolado, usando a propriedade ***ProtectionProvider***, conferindo um nível a mais de segurança às informações da aplicação.

Gostando ou não dos arquivos de configuração XML, espero que este post tenha sido útil para você. Até o próximo!
