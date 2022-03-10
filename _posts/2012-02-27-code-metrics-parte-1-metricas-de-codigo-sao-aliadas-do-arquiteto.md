---
id: 29
title: 'Code metrics (parte 1) &#8211; Métricas de código são aliadas do arquiteto'
date: '2012-02-27T10:33:00-03:00'
author: 'Leandro Daniel'

guid: /post/Code-metrics-(parte-1)-Um-aliado-do-arquiteto.aspx
permalink: /index.php/code-metrics-parte-1-metricas-de-codigo-sao-aliadas-do-arquiteto/
categories:
    - Arquitetura
    - Post
---

Há tempos estava querendo escrever a respeito de métricas de código. Trata-se de um assunto interessantíssimo e carente de informações, na minha opinião.

![](http://leandrodaniel.com/pics/oculosJoalheiro.jpg)

Um significativo óbice à criação de software com qualidade é a dificuldade que temos de visualizar o todo. Em geral, estamos confinados a diminuta visão que a IDE nos dá, através do editor de códigos ou de alguma outra abstração textual. É como se tentássemos contemplar a obra [Guernica](http://pt.wikipedia.org/wiki/Ficheiro:Mural_del_Gernika.jpg) com um óculos de joalheiro, você dificilmente conseguirá entender o que está acontecendo e ficará atento apenas a detalhes “desconexos” do todo.

Visões de mais alto nível, com abstrações adequadas, podem dizer muito a respeito do código produzido. Essas abstrações podem ser conseguidas através de métricas de código, e a partir daí transformadas em gráficos, indicadores compostos, relatórios, matrizes ou até mesmo em um “banco de dados” indexado para consultas, potencializando seus significados.

É importante deixar claro que as métricas de código não estão relacionadas apenas com o software em si, mas também com os processos de desenvolvimento e manutenção. Consegue-se, a partir das métricas, dados quantitativos que oferecem uma boa informação sobre o andamento da construção sendo possível estimar custos, avaliar tendências, melhorar o design, ou até mesmo ter noção sobre a qualidade do sistema produzido.

### O potencial das métricas de código

Através das métricas de código podemos conhecer a complexidade, tamanho, quantidade de métodos, nível de coesão, grau de acoplamento entre classes, dentre inúmeras outras possibilidades. Além disso, as métricas são usadas para:

- Analisar qualidade e produtividade do processo de desenvolvimento e manutenção bem como do produto de software construído;
- Qualificar a performance técnica dos produtos do ponto de vista do desenvolvedor;
- Medidas funcionais são necessárias para qualificar a performance dos produtos pela perspectiva do usuário;
- Utilizadas para comparar a produtividade de diferentes técnicas e tecnologias;
- Entender e aperfeiçoar o processo de desenvolvimento;
- Reduzir frustrações e pressões de cronograma;
- Embasar solicitações de novas ferramentas e treinamentos;
- Formar uma linha básica para estimativas;
- No nível técnico, as medições são importantes para determinar parâmetros como quantidade de teste necessário e impacto de mudanças.

> Quando se pode medir aquilo sobre o qual se está falando e expressá-lo em números, sabe-se alguma coisa sobre o mesmo; mas quando não se pode medi-lo, quando não se pode expressá-lo em números, o conhecimento que se tem é de um tipo inadequado e insatisfatório; este pode ser o começo do conhecimento, mas dificilmente alguém terá avançado em suas idéias para o estágio de ciência.

Uma métrica deve ser **válida**, o que significa que ela deve quantificar o que queremos medir. Ela também precisa ser **confiável**, prozudindo os mesmos resultados dadas as mesmas condições. Por fim, métricas precisam ser produzidas facilmente, ou seja, devem ser **baratas**.

### Diferenciando alguns jargões: medida, medição, métrica e indicador

Quando entramos no mundo das métricas tomamos contato com alguns termos que, em determinadas circunstâncias, geram algumas confusões. Vamos lá:

- **Medida**: Fornece uma indicação quantitativa da extensão, quantidade, dimensão, capacidade ou tamanho de algum atributo de um produto ou processo. Medida é uma função de mapeamento;
- **Medição**: Ato de determinação de uma medida;
- **Métrica**: Medida quantitativa do grau em que um sistema se encontra em relação a um determinado atributo;
- **Indicadores**: Métrica ou combinação de métricas que fornece uma compreensão de um processo/projeto/produto.

As métricas podem ser categorizadas de maneiras diferentes, tais como métricas diretas e indiretas, ou métricas orientadas a tamanho, ou funções, entre outras.

### Enfim, uma grande aliada do arquiteto de software!

Claro, até mesmo desenvolvedores, analistas de teste, analistas de sistema, líderes técnicos (e pasmem, até mesmo gerentes de projeto) ou qualquer outro membro de um time pode se beneficiar das métricas de software. Contudo, elas são especialmente interessantes para um arquiteto de software (aqui, reforço o **arquiteto de software** por [acreditar que seria o papel mais coerente para tal](http://leandrodaniel.com/index.php/Refletindo-sobre-funcoes-e-niveis-de-arquitetura-em-uma-empresa)).

> Idealmente, os dados necessários para se estabelecer uma linha básica foram compilados continuamente. Infelizmente, isso raramente acontece. Por conseguinte, a coleta de dados requer uma investigação histórica dos projetos passados para se reconstruir os dados exigidos. Logo que os dados foram coletados, a computação das métricas é possível. A avaliação dos dados concentra-se nas razões subjacentes para os resultados obtidos.

Sendo o arquiteto de software (tanto no exercício de um cargo ou papel) o indivíduo responsável pela estrutura e design de um produto e também o canal de comunicação entre time de desenvolvimento e arquiteto corporativo (cargo ou papel), podemos aferir que:

> As medições e as métricas ajudam a entender o processo técnico usado para desenvolver um produto. O processo é medido num esforço para melhorá-lo, assim como o produto é medido num esforço para aumentar sua qualidade. Também são necessárias para analisar a qualidade e a produtividade do processo de desenvolvimento; bem como a manutenção do produto de software construído.

Em posts futuros veremos diversos exemplos de métricas de código. Até lá! 😉