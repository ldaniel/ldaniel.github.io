---
id: 36
title: 'Hey, que tal pensar além do Try&#8230; Catch&#8230; Finally? (parte 1)'
date: '2012-01-30T16:06:00-03:00'
author: 'Leandro Daniel'

guid: /post/Hey-que-tal-pensar-alem-do-Try-Catch-Finally.aspx
permalink: /hey-que-tal-pensar-alem-do-try-catch-finally-parte-1/
categories:
    - IT
tags:
    - pt-br
    - Arquitetura
---

Não adianta. Toda vez que preciso explicar para algum desenvolvedor o que significa de fato “tratamento de exceções” fico constrangido. Na verdade, é um constrangimento alheio, já que quase sempre a pessoa se mostra surpresa ao final de uma conversa desse tipo.

Até compreendo desenvolvedores menos experientes ficarem melindrados na hora de tratar exceções. Mas considero um absurdo alguém com anos de experiência (às vezes se auto-nomeando um “desenvolvedor pleno/sênior” ou “arquiteto de software/solução/sistemas/etc.”) considerar que um *Try…Catch…Finally* é suficiente para liquidar o assunto. E olha que prefiro nem mencionar o que penso sobre os “try {} Catch(Exception ex) {}” da vida (sem qualquer código dentro do catch).

Frente a essa recorrente situação de ter que tocar no assunto “tratamento de exceções”, resolvi escrever alguns posts. Não quero simplesmente despejar um monte de conceitos e padrões. Nem mesmo ser o algoz da ingenuidade (maléfica) de desenvolvedores e responsáveis por design e implementação que desconhecem ou nunca buscaram mais conhecimento a respeito. Acho mais interessante estimular um pensamento crítico sobre o tema.

Acho melhor começar falando… Não do início da história das linguagens de programação… Mas do meu início como desenvolvedor profissional aqui em São Paulo.

### À honra do “On Error Resume Next”!

Minhas primeiras experiências profissionais em São Paulo foram com [WDNA](http://msdn.microsoft.com/en-us/library/ms978384) e a velha trinca: ASP, Visual Basic 6 e COM+. Não posso dizer que foi de todo ruim, mas boa parte do que aprendi na época com os desenvolvedores mais experientes serviram para fundamentar uma inquietação: codificar TEM que ser mais do que isso!

Para manter o foco no assunto deste post, vamos analisar as opções que tínhamos na época para tratar erros (ou exceções? hum, boa questão, não?). Veja como uma estrutura típica de tratamento de erros em Visual Basic se parecia:

<script src="https://gist.github.com/1665674.js" type="text/javascript"></script>

Perceba que interessante, o Visual Basic antigo considerava qualquer *problema* em runtime como *erro*, não havendo portanto uma abordagem para tratamento de *exceções*. Era possível utilizar a palavra reservada **Raise** para lançar um erro de runtime para a chamada original. Outras três possibilidades estavam à disposição dos desenvolvedores.

[![DontTryThisAtHome](/assets/pics/DontTryThisAtHome_thumb.png "DontTryThisAtHome")](/assets/pics/DontTryThisAtHome.png)

O **On Error GoTo** dava a opção de usar uma determinada rotina em caso de ocorrência de erro de runtime. A execução do programa “pulava” para um trecho de código assinalado com um *label* pré-definido.  Já o **On Error GoTo 0** desabilitava qualquer manipulador de erro escrito dentro do procedimento ou função corrente. Mas todos os desenvolvedores de Visual Basic (não o .NET) eram unânimes em concordar que o mais transudo, o que realmente colocava um desenvolvedor no hall dos “caras fodões e corajosos” era o tal do **On Error Resume Next**.

O **On Error Resume Next** tinha a habilidade de especificar que, quando um erro de runtime ocorresse, a execução iria para a instrução imediatamente após a instrução onde o erro ocorreu. Além disso, o programa seguia sua execução normalmente, como se nada tivesse acontecido. What?!?

Não saberia descrever em poucas palavras a minha “alegria” quando, ao final de uma tarde inteira debugando um erro numa página de ASP clássico (ou ASP 3.0, como queira), encontrava um **On Error Resume Next** oculto em um arquivo de include. Ah, que emoção! E não vou ser hipócrita, já “resolvi” alguns erros de produção usando um simples **On Error Resume Next** (e o gerente ainda fazia questão de enaltecer seu sagaz recurso para o cliente enquanto eu tentava, discretamente, deixar claro que “não era para tanto”).

Na época, considerando todas as características do Visual Basic (linguagem fracamente tipada, interpretada, dinâmica, orientada a eventos, entre outras peculiaridades), a forma como comumente os desenvolvedores tratavam erros (ou exceções) era aceita pelo *statu quo*. Sempre fiquei incomodado com isso, afinal, já havia programado em Delphi anteriormente, experimentando estruturas de tratamento de exceções como a seguinte:

<script src="https://gist.github.com/1705819.js" type="text/javascript"></script>

Notei que frequentemente me pegava fazendo a mesma pergunta…

### Isso é uma exceção ou erro?

Ainda que você não concorde com as definições a seguir, é bastante plausível considerar que temos ao menos duas causas distintas, cada uma com seus respectivos desdobramentos, que afetam a execução do “caminho feliz” de um programa. São elas: erro ou exceção, sendo que:

- **Erro** é qualquer desvio em relação ao comportamento esperado do sistema ou do programa, que interrompe o funcionamento do mesmo;
- **Exceção** é qualquer erro ou problema que pode ser <span style="color: #ff6600;">manipulado/tratado</span> de forma a permitir que o sistema ou programa continue sua execução.

Perceba que, conceitualmente, um erro significa que algo deu muito errado com seu programa, e isso é um motivo suficientemente bom para ele abortar sua execução. Enquanto que uma exceção é resultado de uma situação inusitada, mas que você antecipou como uma possibilidade, e portanto codificou algo a respeito. Nessa linha de raciocínio, uma divisão por zero é um erro, mas a tentativa de ler um arquivo e descobrir que ele não existe é uma exceção.

Sintetizando, notamos que: **uma exceção é recuperável, mas um erro não**. Essa percepção serve como fechamento para hoje. ![Wink](/assets/editors/tiny_mce_3_4_3_1/plugins/emotions/img/smiley-wink.gif "Wink")
