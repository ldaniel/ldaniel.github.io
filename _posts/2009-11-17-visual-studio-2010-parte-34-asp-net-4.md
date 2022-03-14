---
id: 152
title: 'Visual Studio 2010 (parte 34) – ASP.NET 4'
date: '2009-11-17T02:17:43-03:00'
author: 'Leandro Daniel'

guid: /post/Visual-Studio-2010-(parte-34)-e28093-ASPNET-4.aspx
permalink: /visual-studio-2010-parte-34-asp-net-4/
categories:
    - IT
tags:
    - pt-br
    - 'Visual Studio'
---

Algumas outras novidades do ASP.NET 4:

<u>**FormView**</u>

- Can remove superflous &lt;table&gt;

<u></u>

<u>**GridView**</u>

- Permite estilização do *header* de colunas quando ordenadas
- Trabalha sem *ViewState*
- Suporta *persisted selection*

```xml
<asp:GridView id="GridView2" runat="server" EnablePersistedSelection="true"> 
</asp:GridView> 
```

<u>**ListView**</u>

- Não requer um *LayoutTemplate*
- Suporta persisted selection

**<u>CompareValidator</u><u> </u>**

- Suporta *Time* e *DateTime*

**<u>LinqDataSource</u><u> </u>**

- Permite que você escreve queries utilizado LINQ

**<u>DataPager</u><u> </u>**

- Trabalha com GridView, DetailsView, e FormView
