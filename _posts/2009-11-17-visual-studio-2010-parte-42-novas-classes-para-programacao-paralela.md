---
id: 144
title: 'Visual Studio 2010 (parte 42) – Novas classes para programação paralela'
date: '2009-11-17T14:41:52-03:00'
author: 'Leandro Daniel'

guid: /post/Visual-Studio-2010-(parte-42)-e28093-Estruturas-de-dados-para-programacao-paralela.aspx
permalink: /visual-studio-2010-parte-42-novas-classes-para-programacao-paralela/
categories:
    - IT
tags:
    - pt-br
    - 'Visual Studio'
---

O .NET Framework 4.0 introduz uma série de novas classes úteis para auxiliar o suporte a programação paralela, divididas em três grupos:

 **<u>Concurrent Collection Classes</u>**

*System.Collections.Concurrent.BlockingCollection(T)   
System.Collections.Concurrent.ConcurrentBag(T)   
System.Collections.Concurrent.ConcurrentDictionary(TKey, TValue)   
System.Collections.Concurrent.ConcurrentQueue(T)   
System.Collections.Concurrent.ConcurrentStack(T)*

Essas novas classes trazem meios de trabalharmos com *collections* com alta performance em cenários de onde múltiplas *threads* estão manipulando coleções removendo ou adicionando itens.

**<u>Synchronization Primitives</u>**

*System.Threading.Barrier   
System.Threading.CountdownEvent   
System.Threading.ManualResetEventSlim   
System.Threading.SemaphoreSlim   
System.Threading.SpinLock   
System.Threading.SpinWait*

Permite que múltiplas *threadings* trabalhem com algoritmos de forma paralela.

 **<u>Lazy Initialization Classes</u>**

*System.Lazy(T)   
System.Threading.ThreadLocal(T)   
System.Threading.LazyInitializer*

Controla a alocação na memória de forma que seja utilizada apenas quando necessário.
