---
id: 111
title: 'Duck Typing com C# 4.0 e Dynamic Type'
date: '2010-06-06T21:22:30-03:00'
author: 'Leandro Daniel'

guid: /post/Duck-Typing-com-C-40-e-Dynamic-Type.aspx
permalink: /index.php/duck-typing-com-c-4-0-e-dynamic-type/
categories:
    - 'C#'
    - Post
---

O estilo *Duck Typing* é muito comum para programadores de linguagens dinâmicas, como por exemplo, Ruby. Ele permite que um objeto seja passado para um método que espera um certo tipo, mesmo que o objeto não seja deste tipo. Popularmente, o *Duck Typing* é definido pela frase a seguir:

> ***If it walks like a duck and quacks like a duck, it must be a duck.***

Numa tradução livre, seria algo como: *“Se isso anda como um pato e fala como um pato, isso deve ser um pato”*. Observe com bastante atenção o código abaixo. Repare que da linha 24 a 27 o método **FazerQuack** recebe um objeto do tipo **dynamic**, e usa a propriedade **FazQuack()** desse objeto. Não importa se o objeto é do tipo **Pato** ou **Humano**, desde que ele “faça quack” ele atenderá ao objetivo do método.

Experimente descomentar o código das linhas 18 e 19, e observe que ocorrerá um erro. Isso porque ao utilizarmos o tipo **dynamic** a checagem será realizada apenas em tempo de execução.

```
<pre class="brush: csharp;">using System;

public class Program
{
    static void Main()
    {
        Executar();
    }

    private static void Executar()
    {
        var pato = new Pato();
        var homem = new Humano();

        FazerQuack(pato);
        FazerQuack(homem);

        //var cao = new Cachorro();
        //FazerQuack(cao);  // Essa linha gera um erro.

        Console.ReadKey();
    }

    private static void FazerQuack(dynamic ser)
    {
        ser.FazQuack();
    }
}

internal class Pato
{
    public void FazQuack()
    {
        Console.WriteLine("Quack!");
    }
}

internal class Humano
{
    public void FazQuack()
    {
        Console.WriteLine("Eu sei falar 'Quack!'");
    }
}

internal class Cachorro
{
    public void FazAu()
    {
        Console.WriteLine("Au!");
    }
}
```

   
Esse tipo de abordagem nos faz refletir sobre o equilíbrio entre o valor da tipagem forte e a produtividade de trabalharmos em um contexto dinâmico. Com o advento do C# 4.0 e suas bibliotecas dinâmicas, ficou bem mais fácil adotar esse estilo de programação.

Para exemplificar um dos possíveis problemas do *Duck Typing,* imagine termos métodos com o mesmo nome mas que não desempenham a mesma atividade. Claro que isso dependerá de quem estiver programando, mas o fato é que quando trabalhamos com dinamismo temos muito poder nas mãos, e erros serão mais desastrosos ao código do que dentro de um contexto estático e fortemente tipado.

O código-fonte de exemplo demonstrado pode ser baixado aqui:

<iframe frameborder="0" marginheight="0" marginwidth="0" scrolling="no" src="http://cid-682bb4abc622d264.skydrive.live.com/embedicon.aspx/.Public/DuckTyping.zip" style="padding-bottom: 0px; background-color: #fcfcfc; padding-left: 0px; width: 98px; padding-right: 0px; height: 115px; padding-top: 0px" title="Preview"></iframe>