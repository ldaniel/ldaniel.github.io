---
id: 15
title: 'Code metrics (parte 8) &#8211; Relação entre testes, design e métricas'
date: '2012-04-12T13:36:00-03:00'
author: 'Leandro Daniel'

guid: /post/Code-metrics-(parte-8)-RelacaoMetricasTestesDesign.aspx
permalink: /index.php/code-metrics-parte-8-relacao-entre-testes-design-e-metricas/
categories:
    - Arquitetura
    - Post
---

Continuando a série de posts sobre [Code Metrics](http://leandrodaniel.com/?tag=/Code+Metrics), essa semana gostaria de trazer o resultado de uma discussão promovida via [Gist](https://gist.github.com/).

Em suma, eu queria discutir com alguns amigos sobre a relação existente entre testes, design e métricas. Para promover o debate, elaborei um cenário para servir como background, baseado em um [post](http://whileicompile.wordpress.com/2010/09/14/what-is-too-simple-and-small-to-refactor-as-clean-code) que li onde o autor aplicava, na visão dele, as recomendações do Uncle Bob descritas no livro [Clean Code](http://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882).

Como ferramenta para a nossa discussão, criei um Gist, assim todos poderiam comentar, escrever outros códigos ou até mesmo forkar, se desejassem. Participaram da discussão (por ordem de chegada): [@giggio](https://github.com/giggio), [@vquaiato](https://github.com/vquaiato), [@juanplopes](https://github.com/juanplopes), [@mauricioaniche](https://github.com/mauricioaniche), [@felipero](https://github.com/felipero), [@ElemarJR](https://github.com/ElemarJR), [@tucaz](@marcioalthmann) e [@marcioalthmann.](https://github.com/marcioalthmann)

Fiquei muito feliz e honrado com o quórum reunido. Foi uma discussão muito boa, de alto nível (como era de se esperar dos participantes).   
![Smile](http://leandrodaniel.com/editors/tiny_mce_3_4_3_1/plugins/emotions/img/smiley-smile.gif "Smile")

### Vamos ao cenário

No exemplo que propus, um desenvolvedor codificou em C# uma classe que realizava cálculo de salários ([veja a classe aqui](https://gist.github.com/2149474?file=exemplo_depois.cs#file_exemplo_antes.cs)). Aplicando refactoring nessa classe, ele acabou por quebrá-la em 3, extraiu e separou alguns métodos e deu outra abordagem para resolver o mesmo problema ([veja o resultado aqui](https://gist.github.com/2149474?file=exemplo_depois.cs#file_exemplo_depois.cs)).

Algumas métricas foram coletadas antes e depois do refactoring. Veja os resultados abaixo.

![](http://leandrodaniel.com/pics/metricasResult.png)

Após apresentar esse cenário, fiz uma série de questionamentos e convidei, via Twitter, alguns amigos para colaborarem com suas percepções. Os tópicos a seguir descrevem as questões com as participações da galera. Perceba a riqueza das participações.

### Questão 1 – Qual a relação entre Testes x CC?

De modo geral, podemos ter como prática que o set de testes deve, no mínimo, ter o mesmo número de testes que o resultado do indicador CC (cyclomatic complexity)? Por exemplo, se um método tem 5 de CC, ele deve ter no mínimo 5 testes escritos para ele.

A saber:

- estou considerando apenas um assert por método de test;
- não considerando a eficácia do teste escrito.

Confira as respostas:

> [@vquaiato](https://github.com/vquaiato)   
> 5 testes talvez seja o mínimo pelos cenários de saída do método, mas existem outras combinações e outras formas de testar.
> 
> [@juanplopes](https://github.com/juanplopes)   
> Sim, no mínimo. Entretanto existem outros pontos que aumentam a complexidade ciclomática sem ela aparecer nas métricas. Um Math.Max, é um exemplo.
> 
> [@mauricioaniche](https://github.com/mauricioaniche)   
> Sim, concordo que CC = N, então N é o número mínimo de testes que vc deve ter. Só não testaria métodos com CC=1 e cujo código apenas repassa a invocação de método pra alguma outra classe, ou cujo método seja um getter/setter. Nesses casos, não testaria.
> 
> [@felipero](https://github.com/felipero)   
> Se tem 5 CC, devem ter mais testes (considerando 1 assert por teste) porque precisa testar o comportamente no sucesso e na falha, então seriam no mínimo 10 testes. Eu uso o acrônimo do Right B I C E P S para validar os casos de teste que escrevo. Veja [aqui](http://media.pragprog.com/titles/utj/StandaloneSummary.pdf) e [aqui](http://testen.fontysvenlo.org/metiq/wk03/wk03_handout.pdf).
> 
> [@giggio](https://github.com/giggio)   
> Vou na do Aniche, mas acrescento que não testaria nada muito óbvio. Tentar buscar 100% de cobertura não faz sentido.
> 
> [@marcioalthmann](https://github.com/marcioalthmann)   
> Sim, no mínimo, quando preciso testar códigos assim geralmente verifico a cobertura de código para garantir que passei por todo lugar.

### Questão 2 – Qual a relação entre Cobertura de testes x Métricas?

Membros privados podem ser ignorados nos testes? Devemos garantir os testes pelos membros públicos observando a cobertura de código dos testes. Isso é suficiente? (sem entrar no mérito da necessidade ou não de 100% de cobertura. A intenção aqui é deduzir uma relação entre métricas – total de membros privados/públicos, por exemplo – e testes.

Respostas:

> [@vquaiato](https://github.com/vquaiato)   
> sobre os testes de métodos privados, como já discuti muito no DNA, existem cenários onde são aplicáveis, principalmente se sua interface pública é muito simples e seus métodos privados englobam algoritmos mais complexos. Honestamente hoje não me preocupo com isso se minha API não é pública e é apenas de consumo dentro do próprio projeto.
> 
> [@juanplopes](https://github.com/juanplopes)   
> Membros privados, numa classe coesa devem ser sempre utilizados pelo conjunto de testes. Isto é, se um método público não utiliza um membro privado, há um problema de coesão ai, não? E se o membro privado faz operações suficientes para precisar ser testado, provavelmente você precise isolá-lo.
> 
> [@mauricioaniche](https://github.com/mauricioaniche)   
> Sim. Em uma classe coesa, os métodos privados no fundo servem pra diminuir a CC e aumentar a legibilidade dos métodos públicos. Eu não quero testar COMO uma classe faz, mas sim O QUE ela faz. Não vejo pq então testar um método privado diretamente.
> 
> [@felipero](https://github.com/felipero)   
> Precisa usar o bom senso. Não gosto de mudar a estrutura de encapsulamento somente para poder testar algo. Mas isso provavelmente será necessário para casos de testes complexos. Nesse caso há alguns frameworks que "burlam" essa proteção quando em teste, mas acho isso perigoso. Eu me conformo com isso e testo via métodos públicos mesmo, apesar de não gostar. Pode usar a cobertura de testes para aferir se tudo está testado. Mas não deve haver cobrança e nem usar isso como lei.
> 
> [@giggio](https://github.com/giggio)   
> Essa discussão é velha. Depende. Métodos privados são detalhes de implementação, e podem mudar. Isso não significa que eu, que implementei, não quero saber se funcionam. Então eu diria que você tem que testar no mínimo o método publico que chama o privado, e se a complexidade do privado demandar um teste, faça, oras. Esse negócio de extrair uma classe pra poder testar o método privado é bonito e tudo, mas nem sempre isso faz sentido.
> 
> [@marcioalthmann](https://github.com/marcioalthmann)   
> Essa depende mesmo, testo métodos privados mas ai tenho que concordar com o @juanplopes talvez tenha um probleminha em precisar testar esses caras 🙂

### Questão 3 – Qual a relação entre Métricas x Design?

Quando, através de métricas, chegamos a conclusão que o código ficou mais complexo, é uma boa estratégia considerar LoC (lines of code) como indicador para comparar "antes" e "depois"? Que outras métricas vocês considerariam?

Respostas:

> [@vquaiato](https://github.com/vquaiato)   
> e a complexidade extra adicionada para decidir quais classes filhas serão usadas? Qual métrica te revela isso? Pois a resolução de qual classe filha usar vai ter que estar em algum lugar: um componente extra, um SL, uma decisão a mais em alguma camada, etc, etc. sobre o código mais complexo, através das métricas, é complicado dizer. depende bastante do feeling de quem está lendo/escrevendo. Para alguns o código refatorado é melhor, mais extensível, manutenível, testável, etc, etc, etc. Mas ler o primeiro código é way better que o segundo. Depende então do que as métricas significam para quem trabalha nesse projeto.
> 
> [@juanplopes](https://github.com/juanplopes)   
> Não utilizo métricas somente para verificar se um código ficou ou não mais complexo. As métricas ajudam, mas isso é um fator muito subjetivo. O LOC é um dos fatores que mais enganam nesse sentido, que geralmente levam a um código menor, porém geralmente mais complexo.
> 
> [@mauricioaniche](https://github.com/mauricioaniche)   
> Vc tem que considerar LOC, Fan Out, CC, LCOM, Instability, # de métodos, # de atributos, e assim por diante. Não é fácil; cada uma das métricas atua em um nível diferente. Gosto muito da ideia do Erik Doenerburg (não sei escrever bem). Ele tem o Toxicity Chart, onde ele tem juntar todas as métricas em um gráfico só, e achar em uma métrica maior. Nos meus estudos de mineração de repositório de dados, uma coisa que me agrada é fazer estatísticas descritivas simples, e ver quem fica fora da média/mediana + desvio padrão, por exemplo. Acho essa uma boa maneira de analisar uma métrica.
> 
> [@felipero](https://github.com/felipero)   
> LoC não é diretamente proporcional à complexidade. Se considerarmos complexidade de entendimento e leitura do código, que afeta diretamente a manutenção, TCO e produtividade dos desenvolvedores, podemos concluir que isso:
> 
> return algo ? outra\_coisa : null
> 
> é mais complexo para se entender do que isso:
> 
> if(algo == true) {   
>  return outra\_coisa   
> } else {   
>  return null   
> }
> 
> [@ElemarJR](https://github.com/ElemarJR)   
> O problema, como eu vejo é que as classes foram criadas para atender apenas um comportamento. Ao meu ver, esse "desvio" dos indicadores ficará diluído na medida em que esses objetos "ganharem corpo".. o que deverá ocorrer naturalmente.
> 
> [@giggio](https://github.com/giggio)   
> Sendo bem sincero, eu acho que nenhuma métrica resolveria. Trabalhar orientado a um número não garante sucesso. Estamos medindo produtos intermediários? Porque?
> 
> [@marcioalthmann](https://github.com/marcioalthmann)   
> Cara não sei, acho que LoC não vai ajudar a dizer que ficou mais complexo, muita linha de código simples é melhor que pouca linha de código complexo :D. E ai depende do "feeling" que o @vquaiato disse. Agora pensando… e se além de LoC considerar número de testes? Acho que nesse exemplo o número de testes para o código refatorado acabaria maior do que com o código sem refatorar.

### Questão 4 – Qual a melhor "unidade" para os testes unitários?

Qual a melhor "unidade" para orientarmos a escrita de testes (de unidade, claro): método, classe, assembly, assunto de negócio ou outra? (estou falando aqui de "Testes de Unidade": qual unidade você comumente utiliza?)

Respostas:

> [@vquaiato](https://github.com/vquaiato)   
> Mesmo testando "unidade" hoje eu costumo utilizar unidades de negócio e não de "engenharia". Claro que acabam existindo ambos no projeto, mas tenho procurado seguir na linha de negócio.
> 
> [@juanplopes](https://github.com/juanplopes)   
> Classe. Se você tem métodos distintos na classe que precisam ser testados isoladamente, provavelmente eles deveriam ser outra classe para manter a responsabilidade única.
> 
> [@mauricioaniche](https://github.com/mauricioaniche)   
> IMHO, a unidade em um sistema OO é uma classe. São classes que vc passa de um lado para o outro. CancelUpdate Comment.
> 
> [@felipero](https://github.com/felipero)   
> Não gosto da ideia de testes de unidade focarem em negócio. Acho que precisam testar o comportamento técnico de uma unidade de código. Eu utilizo "objetos" (classes, traits, structures, enums) como unidade. Testo cada um de seus métodos públicos. Então, tenho uma classe de teste unitário para cada classe da app (com exceção de controllers em aplicações MVC). Isso me dá satisfação suficiente em casos mais triviais.
> 
> Acho porém fundamental que esses testes de unidade que faço sejam menos prioritários em relação a testes que verifiquem as "operações de negócio". São testes que asseguram o comportamento de uma ou mais classes, de forma não isolada, para que eu saiba quando uma determinada operação, ação ou funcionalidade do sistema está funcionando. Eu faço isso independente da interface de usuário normalmente. (É aqui que testo os controllers, de forma integrada). Em paralelo, utilizo testes de selenium para verificar se a interface de usuário está se comportando de acordo. Mas para interfaces, eu gosto muito de testes manuais.
> 
> [@giggio](https://github.com/giggio)   
> Eu tenho uma regra pessoal: considero que um teste é de unidade se ele não acessa nada de infraestrutura, e se não cruza fronteiras lógicas de componentes, o que em .NET significa o Assembly. Eu não isolo classes de domínio umas das outras. E considero isolar classes e métodos em linguagens estáticas insano, porque dá muito trabalho.
> 
> [@marcioalthmann](https://github.com/marcioalthmann)   
> Classe

### Se você quiser ver o Gist completo…

Basta acessá-lo [aqui e ler todos os comentários](https://gist.github.com/2149474). Fique à vontade para comentar também. 😉

### Conclusão?

Nos próximos posts da série abordarei vários pontos oriundos do debate acima. 😉