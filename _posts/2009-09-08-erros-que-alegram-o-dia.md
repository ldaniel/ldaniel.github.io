---
id: 193
title: 'Erros que alegram o dia…'
date: '2009-09-08T22:53:04-03:00'
author: 'Leandro Daniel'

guid: /post/Erros-que-alegram-o-diae280a6.aspx
permalink: /index.php/erros-que-alegram-o-dia/
categories:
    - ASP.NET
    - Post
---

Esse post era pra ter saído na sexta-feira passada, mas não tive tempo no dia, então vai hoje mesmo. Estava eu no final do expediente – o que pode significar num bom dia um horário entre 18h e 20h 🙂 – escrevendo um código de complexidade razoável, quando me deparei com o seguinte erro:

[![ErroGZip](http://leandrodaniel.com/pics/WindowsLiveWriter/Errosquealegramodia/4E9B43E7/ErroGZip_thumb.png "ErroGZip")](http://leandrodaniel.com/pics/WindowsLiveWriter/Errosquealegramodia/6F228399/ErroGZip.png)

O erro estourou no seguinte trecho:

```
<pre class="brush: csharp; gutter: false; toolbar: false;">using (GZipStream file = new GZipStream(fileStream, CompressionMode.Decompress, false))
```

A mensagem apesar de não dizer muita coisa (diretamente) me fez notar que o erro estava no modo de compressão, o certo era ***CompressionMode.Compress***. Após alterar o código tudo funcionou corretamente.

Havia mostrado o erro a um amigo e notei o espanto dele ao ler uma mensagem de erro tão pitoresca, afinal tratava de um “número mágico incorreto”. O fato é que, infelizmente, na máquina estava instalado o pacote de idiomas do framework 3.5 para o português, o que não ajudou em nada.

No contexto de arquivos, ***Magic Numbers*** são os primeiros bytes que identificam um tipo de arquivo unicamente, por exemplo, um PDF ou um arquivo ZIP. Alguns números mágicos ficaram famosos pela peculiaridade das palavras que eram criadas no formato hexadecimal, seguem alguns exemplos:

| **Magic Number** | **Description** |
|---|---|
| `DEADDEAD` | A Microsoft Windows STOP Error code used when the user manually initiates the crash. |
| `DEADBEEF` | Famously used on IBM systems such as the RS/6000, also used in the original Mac OS operating systems, OPENSTEP Enterprise, and the Commodore Amiga. On Sun Microsystems’ Solaris, marks freed kernel memory (KMEM\_FREE\_PATTERN) |
| `CAFEFEED` | Used by Sun Microsystems’ Solaris debugging kernel to mark kmemfree() memory |
| `C0DEDBAD` | A memory leak tracking tool which it will change the MMU tables so that all references to address zero |

Fala a verdade, pegar um erro desses alegra ou não o dia? É… não alegra, eu sei.