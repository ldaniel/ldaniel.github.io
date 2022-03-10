---
id: 172
title: 'Visual Studio 2010 (parte 14) – Web.config Transformation'
date: '2009-11-16T01:05:22-03:00'
author: 'Leandro Daniel'
layout: post
guid: /post/Visual-Studio-2010-(parte-14)-e28093-Webconfig-Transformation.aspx
permalink: /index.php/visual-studio-2010-parte-14-web-config-transformation/
categories:
    - Post
    - 'Visual Studio'
---

Algumas das novidades do Visual Studio 2010 são tão simples que a gente fica se perguntando porque ninguém pensou nisso antes. Quer ver? Quantas vezes você já se deparou com a seguinte situação:

*– Deployment* de uma solução web, o arquivo *web.config* precisa ter algumas modificações para o novo ambiente. Ocorre de esquecermos de modificar algumas chaves e atributos… Hum… Ou ainda, você indica para o administrador da máquina as alterações necessárias, mas ele não sabe como manipular corretamente um arquivo web.config (e depois ainda diz que a culpa é do desenvolverdor…).

Bem, o Visual Studio 2010 introduziu a capacidade de utilizarmos um *web.config* de transformação para especificarmos as particularidades de cada ambiente: debug, release, etc. Suponhamos que desejamos criar uma configuração contendo uma *string* de conexão com banco, como poderíamos deixar tanto a configuração de debug quanto de release coexistindo em sua aplicação? É muito simples. Primeiro vá ao menu **Build** e escolha **Configuration Manager**. Na opção **Active solution configuration** escolha a opção **New**.

[![VS2010ConfigurationManager](http://leandrodaniel.com/pics/WindowsLiveWriter/VisualStudio2010par.configTransformation/2E98B347/VS2010ConfigurationManager_thumb.gif "VS2010ConfigurationManager")](http://leandrodaniel.com/pics/WindowsLiveWriter/VisualStudio2010par.configTransformation/3A9AA37B/VS2010ConfigurationManager.gif)

Na janela que será apre sentada informe o seguinte:

![VS2010NewSolutionConfiguration](http://leandrodaniel.com/pics/WindowsLiveWriter/VisualStudio2010par.configTransformation/118B5908/VS2010NewSolutionConfiguration.gif "VS2010NewSolutionConfiguration")

Isso fará com que uma nova sessão de configuração seja criada a partir da opção ***Debug*** já existente. Agora precisamos criar o arquivo efetivamente. Para isso clique com o botão direito no arquivo *Web.config* e escolha a opção ***Add Config Transform***. Como resultado será adicionado um novo arquivo na hierarquia do arquivo *Web.config*, conforme vemos abaixo.

![VS2010WebConfig](http://leandrodaniel.com/pics/WindowsLiveWriter/VisualStudio2010par.configTransformation/2A1AF658/VS2010WebConfig.gif "VS2010WebConfig")

A partir daí é possível editar as particularidades de cada ambiente. Que tal?