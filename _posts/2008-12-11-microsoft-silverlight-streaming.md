---
id: 279
title: 'Microsoft Silverlight Streaming'
date: '2008-12-11T11:36:26-03:00'
author: 'Leandro Daniel'

guid: /post/Microsoft-Silverlight-Streaming.aspx
permalink: /index.php/microsoft-silverlight-streaming/
categories:
    - Post
    - Silverlight
---

Acabei de criar uma aplicação em [Silverlight 2](http://www.microsoft.com/SILVERLIGHT/) e testei o Windows Live para [Silverlight Streaming](http://streaming.live.com/). Sem muito esforço e incrivelmente rápido consegui um resultado muito bacana que apresento no final deste post. Apesar de ser uma versão *beta* ainda, o Silverlight Streaming permite criar e disponibilizar aplicações e vídeos construídas com Silverlight oferecendo um total de 10GB de espaço, e gratuitamente. Infelizmente o limite para vídeos é 105MB, mas você pode fazer o upload de vários vídeos utilizando o espaço total de 10GB.

Para desenvolvimento da imagem panorâmica utilizei o [Deep Zoom Composer](http://www.microsoft.com/downloads/details.aspx?familyid=457b17b7-52bf-4bda-87a3-fa8a4673f8bf&displaylang=en), que após 3 passos simples (Import, Compose e Export) gerou-me no final uma solution do Visual Studio .Net 2008 completa e prontinha para uso… "cacilds!". É interessante ressaltar que o Deep Zoom Composer foi capaz de fazer uma composição panorâmica a partir de 6 imagens – as fotos utilizadas foram feitas hoje mesmo na Avenida Paulista, perto de onde trabalho, e como utilizei uma resolução baixa as imagens não ficaram muito detalhadas. É possível criar uma composição de imagens final de, por exemplo, 200MB de tamanho sem carregá-las de uma vez só, isso porque a imagem é quebrada em inúmeros pedaços menores e carregadas na medida que são necessárias.

Quem tiver interesse que eu poste um passo a passo detalhado de todo o processo é só entrar em [contato](http://www.leandrodaniel.com//contact) comigo ou deixar um comentário aqui.

Para que a experiência fique mais lúdica coloquei uma imagem escondida na panorâmica abaixo, você seria capaz de encontrá-la? Navegue na imagem abaixo utilizando o botão esquerdo do mouse para arrastar e o scrool para dar zoom. Boa diversão!

<iframe frameborder="0" scrolling="no" src="http://silverlight.services.live.com/invoke/85845/AvenidaPaulista/iframe.html" style="width: 650px; height: 250px"></iframe>

<font size="1">**Nota:** Para visualizar o banner acima será necessário instalar o plugin do Silverlight 2.</font>