---
id: 149
title: 'Visual Studio 2010 (parte 37) – WPF 4 suportará multitouch'
date: '2009-11-17T03:01:37-03:00'
author: 'Leandro Daniel'

guid: /post/Visual-Studio-2010-(parte-37)-e28093-WPF-4-suportara-multitouch.aspx
permalink: /visual-studio-2010-parte-37-wpf-4-suportara-multitouch/
categories:
    - Post
    - 'Visual Studio'
---

Uma vez que o Windows 7 suporta nativamente o recurso de multitouch nada mais natural que o WPF seguisse o mesmo caminho. A ilustração abaixo mostra, de maneira muito simplificada, como as mensagens são geradas a partir do hardware e enviado para aplicações no Windows 7.

[![Dd371413_wm_multitouch_messaging(en-us,VS_85)](http://leandrodaniel.com/pics/WindowsLiveWriter/VisualStudio2010parte37LINQDeclarative/127F792C/Dd371413_wm_multitouch_messagingenusVS_85_thumb.png "Dd371413_wm_multitouch_messaging(en-us,VS_85)")](http://leandrodaniel.com/pics/WindowsLiveWriter/VisualStudio2010parte37LINQDeclarative/1C27E762/Dd371413_wm_multitouch_messagingenusVS_85.png)

O WPF 4 inclui suporte para multitouch (com algum suporte a inércia – veja o que isso significa [nesse link](http://msdn.microsoft.com/en-us/library/dd371413(VS.85))). Este suporte estende-se para toda a plataforma; UIElement, UIElement3D e ContentElement todos foram aperfeiçoados para suportar esse recurso.