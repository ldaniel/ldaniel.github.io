---
id: 159
title: 'Visual Studio 2010 (parte 27) &#8211; Covariance e Contravariance'
date: '2009-11-16T23:46:06-03:00'
author: 'Leandro Daniel'

guid: /post/Visual-Studio-2010-(parte-27)-Covariance-e-Contravariance.aspx
permalink: /visual-studio-2010-parte-27-covariance-e-contravariance/
categories:
    - Post
    - 'Visual Studio'
---

O exemplo de código abaixo mostra o suporte do C# 4.0 para Variância e Contravariância. Mas o que vem a ser esses conceitos afinal?

```
<pre class="brush: csharp;">using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SimpleVariance
{
    class Animal { }
    class Cat: Animal { }

    class Program
    {
        delegate T Func1<out T>();
        delegate void Action1<in T>(T a);
        
        static void Main(string[] args)
        {
            Func1<Cat> cat = () => new Cat();
            Func1<Animal> animal = cat;

            Action1<Animal> act1 = (ani) => { Console.WriteLine(ani); };
            Action1<Cat> cat1 = act1;

            Console.WriteLine(animal());
            cat1(new Cat());
        }        
    }
}
```

Com o advento do *Generics* um dos principais benefícios foi a capacidade de criar coleções com rigidez nos *data types*. Vamos tomar uma operação qualquer que manipula tipos quaisquer. Se temos como resultado da operação aplicada a qualquer X e Y dois tipos X’ e Y’ com o mesmo relacionamento X e Y a operação é considerada ***covariante***. Contudo, se a operação inverte a grandeza (no sentido de estar contido dentro de um conjunto maior) sobre os seus resultados mas mantém a igualdade e independência, a operação é considerada ***contravariante***.

No código acima, primeiramente são declaradas duas variáveis e dois *delegates*. Em seguida os *delegates* são implementados e as classes utilizadas, respectivamente. Nas linhas 21 e 24 vemos o uso, respectivamente, de variância e contravariância. Os novos *keywords* ***in*** e ***out*** são responsáveis por permitir especificar se um tipo genérico vai será passado para um *delegate*, interface ou método, ou se será retornado de um *delegate*, interface ou método.

Esse é um assunto um pouco extenso, e pretendo detalhar melhor num post futuro.