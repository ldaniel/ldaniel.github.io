---
id: 145
title: 'Visual Studio 2010 (parte 41) – Arquitetura da programação paralela'
date: '2009-11-17T14:41:21-03:00'
author: 'Leandro Daniel'

guid: /post/Visual-Studio-2010-(parte-41)-e28093-Arquitetura-da-programacao-paralela.aspx
permalink: /index.php/visual-studio-2010-parte-41-arquitetura-da-programacao-paralela/
categories:
    - Post
    - 'Visual Studio'
---

Sem dúvida uma das principais novidades do .NET Framework 4.0 é o suporte a programação paralela. Hoje é fácil constata que grande parte das máquinas roda com processadores com 2 ou 4 núcleos e com foco nessa realidade a Microsoft criou uma arquitetura que permite ao desenvolvedor definir como os recursos de processamento paralelo podem ser utilizados em suas aplicações.

[![Dd460693_TPL_Architecture(en-us,VS_100)](http://leandrodaniel.com/pics/WindowsLiveWriter/VisualStudio2010parte41Arquiteturadaprog/1BB25F61/Dd460693_TPL_ArchitectureenusVS_100_thumb.png "Dd460693_TPL_Architecture(en-us,VS_100)")](http://leandrodaniel.com/pics/WindowsLiveWriter/VisualStudio2010parte41Arquiteturadaprog/11C84C94/Dd460693_TPL_ArchitectureenusVS_100.png)

O diagrama acima ilustra as tecnologias envolvidas na versão Beta 2 do novo .NET Framework. Como um dos benefícios podemos de fato trabalhar com escalabilidade vertical ou horizontal desta arquitetura facilmente, como nunca foi possível antes.