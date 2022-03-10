---
id: 108
title: 'Você se preocupa com os IFs, suficientemente?'
date: '2010-06-16T16:47:33-03:00'
author: 'Leandro Daniel'

guid: /post/Voce-se-preocupa-com-os-IFs-suficientemente.aspx
permalink: /voce-se-preocupa-com-os-ifs-suficientemente/
categories:
    - 'C#'
    - Post
---

Um dos problemas combatidos pela utilização de boas práticas de desenvolvimento, e que parece ser bastante comum, é a negligência. Aquela falta de atenção, seja por desleixo, ou por desconhecimento, que faz pequenos detalhes se tornarem desastrosos.

Quer ver um exemplo simples? O **IF**: essa natural instrução condicional, duas letrinhas, “I” e “F”, simples assim (desculpem o tom sarcástico, mas assim é mais engraçado). Aparentemente, não existe tanto segredo assim num **IF**, certo? Analisamos uma ou algumas condições, e executamos algum código caso o **IF** seja satisfeito. Mas vamos analisar o código abaixo, que peguei num *code review*.

```
<pre class="brush: csharp;">if ((txtWord.Text != "" || cblWords.Items.Count != 0)
     && VerifyAlias(txtAlias.Text, true)
     && (txtWord.Text == "") ? true : VerifyKeyword(txtWord.Text))
{
    // Código aqui...
}
```

   
Sim, é um **IF** trabalhoso de ler e entender, não o escolhi por acaso. Temos algumas condições simples a serem checadas, como o **<font face="Courier New">*txtWord.Text != “”*</font>** ou ***<font face="Courier New">cblWords.Items.Count != 0</font>***. Mas isso, combinado com outra verificação, que utiliza uma função **<font face="Courier New">*VerifyAlias*</font>**, já complica mais um pouco. Para complicar, sensivelmente, temos um ternário no final, sendo que a condição negativa leva a uma nova verificação através da função **<font face="Courier New">*VerifyKeyWord(txtWord.Text)*</font>**.

No geral, temos um **IF** com uma desnecessária complexidade na sua construção, a leitura não é rápida, além disso, possivelmente você teria dificuldades para escrever testes unitários que cubram todas as possibilidades.

Isso posto, vamos considerar algumas práticas úteis para codificarmos **IFs**.

> ***“Escreva primeiro o caminho normal de execução, só depois escreva os casos alternativos.”***

O ensinamento aqui é que devemos nos preocupar em escrever primeiros as condições normais de uso, ou os caminhos esperados de execução de um código. Após isso devemos pensar em escrever as condições de exceção. Essa prática vai muito bem, aplicada juntamente, com a seguinte:

> ***“Ordene os testes pela frequência.”***

Ou seja, procure colocar os testes que tem a maior chance de ocorrer antes dos demais. Isso é interessante inclusive para quem lê o código, posteriormente, pois terá uma ideia rápida das condições mais importantes.

> ***“Simplifique checagens complicadas com variáveis e funções booleanas.”***

Em detrimento de algumas linhas a mais, podemos melhorar a leitura do código usado anteriormente fazendo conforme vemos abaixo.

```
<pre class="brush: csharp;">bool IsWordNotEmpty = (txtWord.Text != "");
bool IsExistsWordsList = (cblWords.Items.Count != 0);
bool IsFilterOk = IsWordNotEmpty || IsExistsWordsList;

bool IsAliasOk = VerifyAlias(txtAlias.Text, true);
bool IsKeywordOk = !IsWordNotEmpty ? true : VerifyKeyword(txtWord.Text);

if (IsFilterOk && IsAliasOk && IsKeywordOk)
{
    // Código aqui...
}
```

Observe que foram criadas algumas variáveis *booleanas* para dividirmos o resultado de cada parte da checagem em etapas. Na linha 1 eu checo se o textbox **txtWord** possui algum valor. Na linha seguinte verifico se existe algum item no combobox list **cblWords**. Na linha 3 foi criada uma variável booleana que armazena o resultado da verificação das duas primeiras “etapas”, pois no exemplo deste código, tanto a primeira ou a segunda satisfazem o esperado. Reparem que podemos utilizar as variáveis a partir daqui. Por fim, as linhas 5 e 6 fazem o mesmo processo para as demais verificações. Para melhorar a leitura do código devemos colocar nomes mais significativos. Para não ter que entrar nos detalhes de implementação deste negócio, vamos assumir apenas uma notação com “Ok” para as variáveis, como em **IsFilterOk**, **IsAliasOK** e **IsKeywordOk**.

Como resultado, podemos ver na linha 8 um **IF** muito simples, contendo apenas três condições, bastante auto-explicativas. Como vantagem desse método, você pode utilizar as variáveis com os resultados em outras checagens posteriores, dentro do mesmo contexto.

A quebra da checagem em variáveis e expressões booleanas podem realmente simplificar uma condicional **IF** complexa, tornando o código mais elegante. Mas, como nem tudo são flores, pode trazer outros problemas. Você pode, por exemplo, ter um resultado inválido se durante o código alguma condição for alterada e a variável booleana não. Outro grande problema é a realização de trabalho desnecessário.

Veja essas outras duas dicas na codificação de **IFs**:

> ***“Pare o teste quando você obtiver a resposta.”***

> ***“Utilize avaliação preguiçosa.”***

   
Caso a linguagem não suporte as chamadas “avaliações de curto-circuito” é melhor evitar uso de “AND” e “OR”. Por exemplo, no código a seguir:

```
<pre class="brush: csharp;">if (txtWord.Text != "" && VerifyKeyword(txtWord.Text))
{
    // Código aqui...
}
```

Se a primeira condição for falsa, consequentemente o **IF** já falhou, então não é necessário checar a segunda condição <font face="Courier New">VerifyKeyword(txtWord.Text)</font>. Esse é o comportamento padrão do C#, mas em algumas linguagens isso não ocorre, sendo preferível você codificar da seguinte forma:

```
<pre class="brush: csharp;">if (txtWord.Text != "")
{
	if (VerifyKeyword(txtWord.Text))
         {
              // Código aqui...
         } 
}
```

Seguindo a última dica, utilizar uma avaliação preguiçosa é fazer algo semelhante às estratégias *just-in-time*, que executam o trabalho no momento mais próximo de quando ele é necessário. Isso significa não fazer trabalhos “caros” antes do tempo, ou da necessidade. Voltando ao código que utilizava checagens com booleanas, é o caso das seguintes linhas:

```
<pre class="brush: csharp;">bool IsAliasOk = VerifyAlias(txtAlias.Text, true);
bool IsKeywordOk = !IsWordNotEmpty ? true : VerifyKeyword(txtWord.Text);
```

   
Se as funções **VerifyKeyword** e **VerifyAlias** realizam uma operação dispendiosa, como por exemplo um *full scan* numa matriz muito grande, não vale a pena utilizar uma variável booleana para armazenar esses resultados se temos boas chances dessas checagens nem ao menos serem necessárias.

Percebemos então, que o satisfatório é acharmos um equilíbrio entre todas essas abordagens, escolhendo o que vale mais a pena em cada caso. Ironicamente, o primeiro código apresentado não causa problemas maiores que o de legibilidade (claro, dentro do contexto em que é utilizado), muito graças ao C#, que interrompe as checagens do **IF** quando necessário.

O assunto poderia se estender mais, pois muitas discussões ainda podem ser adicionadas aqui. Mas o que eu queria com esse post é suscitar o interesse em boas práticas de programação. Vimos que até mesmo nas instruções mais cotidianas, podemos incorrer em erros capciosos, portanto, fique atento.