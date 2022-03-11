---
id: 158
title: 'Visual Studio 2010 (parte 28) &#8211; Office Interop'
date: '2009-11-16T23:56:57-03:00'
author: 'Leandro Daniel'

guid: /post/Visual-Studio-2010-(parte-28)-Office-Interop.aspx
permalink: /visual-studio-2010-parte-28-office-interop/
categories:
    - IT
tags:
    - pt-br
    - 'Visual Studio'
---

O exemplo abaixo ilustra como o C# 4.0 trabalha interoperabilidade – palavrinha difícil de falar numa palestra…:) – aproveitando dos novos recursos de parâmetros opcionais e nomeados, dentre outros recursos, para criar uma aplicação C# application que conversa com o Microsoft Office.

```
<pre class="brush: csharp;">using System;
using System.Collections.Generic;

using Excel = Microsoft.Office.Interop.Excel;
using Word = Microsoft.Office.Interop.Word;

public class Account
{
    public int ID { get; set; }
    public double Balance { get; set; }
}

public class Program
{
    static void Main(string[] args)
    {
        var checkAccounts = new List<Account> {
                   new Account {
                                      ID = 345,
                                      Balance = 541.27
                               },
                   new Account {
                                      ID = 123,
                                      Balance = -127.44
                               }
               };

        DisplayInExcel(checkAccounts, (account, cell) =>
        {
            cell.Value = account.ID;
            cell.Offset[0, 1].Value = account.Balance;

            if (account.Balance < 0)
            {
                cell.Interior.Color = 255;
                cell.Offset[0, 1].Interior.Color = 255;
            }
        });

        var word = new Word.Application();
        word.Visible = true;
        word.Documents.Add();
        word.Selection.PasteSpecial(Link: true, DisplayAsIcon: true);
    }

    public static void DisplayInExcel(IEnumerable<Account> accounts,
                           Action<Account, Excel.Range> DisplayFunc)
    {
        var xl = new Excel.Application();

        xl.Workbooks.Add();
        xl.Visible = true;
        xl.Cells[1, 1] = "ID";
        xl.Cells[1, 2] = " Balance";
        xl.Cells[2, 1].Select();
        foreach (var ac in accounts)
        {
            DisplayFunc(ac, xl.ActiveCell);
            xl.ActiveCell.Offset[1, 0].Select();
        }

        xl.Range["A1:B3"].Copy();        
        xl.Columns[1].AutoFit();
        xl.Columns[2].AutoFit();
    }
}
```

Notem que na linha 43 foi utilizado o recurso de ***named and optional parameters*** permitindo que você escolha os parâmetros interessante para a situação desejada sem a necessidade de especificar todos os parâmetros possíveis.

Tradicionalmente, você teria que usar o seguinte código para setar uma propriedade de uma celula:

```
<pre class="brush: csharp;">((Excel.Range)excel.Cells[1, 1]).Value2 = "ID";
```

Observe na linha 53 que utilizando o novo recurso dinâmico do C# 4.0 a declaração fica bem mais elegante e enxuta. Bacana, não?
