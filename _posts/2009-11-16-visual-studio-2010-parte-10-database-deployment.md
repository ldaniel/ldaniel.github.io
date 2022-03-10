---
id: 176
title: 'Visual Studio 2010 (parte 10) – Database Deployment'
date: '2009-11-16T00:58:04-03:00'
author: 'Leandro Daniel'
layout: post
guid: /post/Visual-Studio-2010-(parte-10)-e28093-Database-Deployment.aspx
permalink: /index.php/visual-studio-2010-parte-10-database-deployment/
categories:
    - Post
    - 'Visual Studio'
---

Agora, além de publicar suas aplicações também será possível fazer o *deployment* de uma base de dados através da opção *Properties* de uma aplicação Web. A nova guia ***Deploy SQL*** permite definir em qual database os scripts serão executados.

![VS2010DeploySQL](http://leandrodaniel.com/pics/WindowsLiveWriter/VisualStudio2010parte10DatabaseDeploymen/2DE3B0D7/VS2010DeploySQL.gif "VS2010DeploySQL")

O interessante é que você pode criar definições tanto para o ambiente de desenvolvimento (Debug) quanto o de produção (Release). Para facilitar as configurações podem ser importadas do arquivo **Web.config**, e você pode optar por gerar apenas o *schema* do banco ou adicionalmente incluir alguns registros.

Para completar é disponibilizado um recurso para copiar dados de um datasource, o que ajuda bastante no *deployment* de toda solução, aplicação e bando de dados. Muito legal!