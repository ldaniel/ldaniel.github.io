---
id: 113
title: 'Fluent Interfaces e Method Chaining'
date: '2010-06-01T11:33:14-03:00'
author: 'Leandro Daniel'

guid: /post/Fluent-Interfaces-e-Method-Chaining.aspx
permalink: /fluent-interfaces-e-method-chaining/
categories:
    - IT
tags:
    - pt-br
    - 'C#'
---

Conversando com um amigo que não conhecia *Fluent Interfaces,* acabei criando um exemplo simples para explicar o conceito, e achei bacana postar aqui a solução. *Fluent Interfaces* (ou interfaces fluentes) é uma técnica para escrita de interfaces que descrevam suas classes, métodos e propriedades. Elas recebem este nome porque a sua semântica é clara, seja individualmente, seja seguindo a sequência lógica da execução.

Em C#, a base para construção de *Fluent Interfaces* é o suporte oferecido pela linguagem ao chamado *Method Chaining* (ou “encadeamento de métodos”, termo cunhado por [Martin Fowler](http://martinfowler.com/dslwip/MethodChaining.html), por volta de 2006).

Abaixo vemos um exemplo de utilização de código com *Fluent Interfaces*. Observe que da linha 10 a 13 a leitura do código fica muito simplificada, pois codificamos da mesma forma que encadeamos as ações a serem feitas. Ou seja, o código além de semântico é fluente.

```csharp
using System;

namespace Estudo.FluentInterface.App
{
    class Program
    {
        static void Main()
        {
            // Escrita de código fluente.
            var vendedora = new Vendedora()
                .Oferecer(Produto.Fogao)
                .ComDescontoDe(15)
                .ValendoAte(new DateTime(2010, 7, 1));

            vendedora.Escrever();
            vendedora.Falar();

            Console.ReadKey();
        }
    }
}
```

   
O que vemos no código acima é um encadeamento de métodos da classe **Vendedora**. Mas como isso é possível?

O código abaixo mostra como foi criada a interface utilizada pela classe **Vendedora**. Note que ao criarmos os métodos “Oferecer”, “ComDescontoDe” e “ValendoAte” como sendo do tipo **IFluentConversa** estamos criando o encadeamento dos métodos, por inferência de tipos.

```csharp
using System;

namespace Estudo.FluentInterface
{
    public interface IFluentConversa
    {
        IFluentConversa Oferecer(Produto produto);
        IFluentConversa ComDescontoDe(decimal desconto);
        IFluentConversa ValendoAte(DateTime data);

        void Falar();
        void Escrever();
    }
}
```

   
A seguir, temos a enumeração de produtos existentes.

```csharp
namespace Estudo.FluentInterface
{
    public enum Produto
    {
        Cafeteira,
        Liquidificador,
        Batedeira,
        Fogao
    }
}
```

   
Abaixo vemos como fica a implementação da classe **Vendedora**. Apenas para tornar o exemplo um pouquinho mais interessante, o método **Falar** utiliza o a classe **SpeechSynthesizer** (disponível no Windows 7) que permite informarmos um texto para o sintetizador de voz do Windows para que o mesmo seja narrado por uma mulher (“Microsoft Anna”).

```csharp
using System;
using System.Text;
using System.Speech.Synthesis;

namespace Estudo.FluentInterface
{
    public class Vendedora : IFluentConversa
    {
        Produto produto;
        decimal desconto;
        DateTime data;

        public IFluentConversa Oferecer(Produto produto)
        {
            this.produto = produto;
            return this;
        }

        public IFluentConversa ComDescontoDe(decimal desconto)
        {
            this.desconto = desconto;
            return this;
        }

        public IFluentConversa ValendoAte(DateTime data)
        {
            this.data = data;
            return this;
        }

        public void Falar()
        {
            var speech = new SpeechSynthesizer();
            speech.SelectVoice("Microsoft Anna");
            speech.Speak(MontarTexto());
        }

        public void Escrever()
        {
            Console.Write(MontarTexto());
        }

        private string MontarTexto()
        {
            var texto = new StringBuilder();
            texto.Append("Você gostaria de comprar ");

            switch (produto)
            {
                case Produto.Batedeira: texto.Append("uma batedeira "); break;
                case Produto.Cafeteira: texto.Append("uma cafeteira "); break;
                case Produto.Fogao: texto.Append("um fogão "); break;
                case Produto.Liquidificador: texto.Append("um liquidificador "); break;
            }

            texto.Append("com incríveis " + desconto.ToString() + "% de desconto? ");
            texto.Append("Essa promoção é valida até " + data.ToShortDateString() +  ".");

            return texto.ToString();
        }
    }
}
```

   
Apesar de simples, implementar *Fluent Interfaces* traz suas particularidades e questões que precisam ser avaliadas. Elas podem ser uma boa opção para [criação de DSL’s](http://msdn.microsoft.com/en-us/magazine/ee291514) ou para descrever abstrações de uso de uma API. Em contrapartida, pode ser trabalhoso manter todas as chamadas de métodos encadeadas. Outro problema comum é que podemos não entender quando e qual método finaliza a cadeia de ações. Por conta disso, muitos criticam o uso de *Fluent Interfaces* por elas dificultarem a compreensão de conceitos de design e até mesmo de orientação a objetos.

Abaixo, você pode fazer o download da solução com este exemplo.

<iframe frameborder="0" marginheight="0" marginwidth="0" scrolling="no" src="http://cid-682bb4abc622d264.skydrive.live.com/embedicon.aspx/.Public/Estudo.FluentInterface.zip" style="padding-bottom: 0px; background-color: #fcfcfc; padding-left: 0px; width: 98px; padding-right: 0px; height: 115px; padding-top: 0px" title="Preview"></iframe>
