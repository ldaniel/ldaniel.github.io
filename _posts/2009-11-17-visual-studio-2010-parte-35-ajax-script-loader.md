---
id: 151
title: 'Visual Studio 2010 (parte 35) – Ajax Script Loader'
date: '2009-11-17T02:26:27-03:00'
author: 'Leandro Daniel'

guid: /post/Visual-Studio-2010-(parte-35)-e28093-Ajax-Script-Loader.aspx
permalink: /visual-studio-2010-parte-35-ajax-script-loader/
categories:
    - IT
tags:
    - pt-br
    - 'Visual Studio'
---

O novo Microsoft AJAX Library para o Framework 4.0 inclui um *client-loader script* que carrega todos os scripts que são exigidos por um componente ou controle do *client* automaticamente e executa os scripts na ordem correta.

- O cliente-loader script suporta as seguintes características:
- Carrega automaticamente os recursos que são exigidos por um script;
- Garante que cada script seja carregado apenas uma vez;
- Melhora o desempenho do carregamento de scripts em paralelo e pela combinação de scripts;
- Suporta o carregamento dos scripts somente quando eles são necessários ("lazy loading");
- Suporta o carregamento de scripts de terceiros como jQuery.

Abaixo vemos um exemplo de carregamento de uma marca d’água:

```xml
<script src="../Scripts/MicrosoftAjax/start.js"  type="text/javascript"></script>
<script src="../Scripts/ACT/ACTRegisterExtended.js" type="text/javascript"></script>
 
<script type="text/javascript">
 
    Sys.require(Sys.components.watermark, function() {
   
        Sys.create.watermark("#Name", {
            WatermarkText: "Add name here..."
        });
  
    });
 
</script>
```
