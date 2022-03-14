---
id: 139
title: 'Homenagem em F#'
date: '2009-12-06T23:01:15-03:00'
author: 'Leandro Daniel'

guid: /post/Homenagem-em-F.aspx
permalink: /homenagem-em-f/
categories:
    - IT
tags:
    - pt-br
    - 'Off'
---

```csharp
#light
open System

let listF = [70;76;65;77;69;78;71;79;32;72;69;
             88;65;32;67;65;77;80;69;65;79;33]

for c = 1 to 6 do 
    for f = 0 to listF.Length - 1 do 
        Console.Write(Char.ConvertFromUtf32(listF.Item(f)))
    Console.WriteLine()

Console.ReadLine()
```
