---
id: 14
title: 'Architect&#8217;s roles (parte 3): Um pé no &#8220;as is&#8221; e outro no &#8220;to be&#8221;'
date: '2012-04-17T10:29:00-03:00'
author: 'Leandro Daniel'

guid: /post/Architects-roles-(parte-3)-Pensando-em-funcao-de-as-is-e-to-be.aspx
permalink: /architects-roles-parte-3-um-pe-no-as-is-e-outro-no-to-be/
categories:
    - IT
tags:
    - pt-br
    - Arquitetura
    - Carreira
---

Uma das grandes virtudes do arquiteto de TI é conseguir controlar a dissonância entre o **agora** e sua **visão de futuro**. Esses dois “momentos”, por assim dizer, devem ser levados em consideração em qualquer decisão relacionada a arquitetura. Chamamos a visão do **agora** de “as is” e a **visão de futuro** de “to be” (ou ainda “AS-IS” e “TO-BE”).

Isso posto, espera-se que o arquiteto, a todo momento, compreenda a execução e estado da arquitetura em termos de “AS-IS” e “TO-BE”. Dessa forma será possível:

- Compreender o cenário atual contra a visão pretendida;
- Garantir que a execução esteja alinhada com a estratégia;
- Avaliar qual o melhor caminho a seguir à partir do “AS-IS” para chegar no “TO-BE”;
- Exercitar as possibilidades de implementação com base em arquiteturas de referência;
- Averiguar se a visão de “TO-BE” continua válida ou precisa ser revista ([arquitetura emergente](http://www.leandrodaniel.com/search.aspx?q=arquitetura%20emergente))

Invariavelmente, as visões de “AS-IS” e “TO-BE” são correlatas com a percepção do que é **estratégico** ou **tático**.

### Estratégico ou tático?

Para responder essa pergunta com mais profundidade, vamos antes entender o conceito de cada item.

> ***Objetivos estratégicos*** *são os objetivos globais e amplos da organização, definidos no longo prazo, isto é, entre dois a cinco ou mais anos pela frente. Ex.: aumento do retorno sobre o investimento organizacional.*

Além desse, temos os chamados objetivos táticos.

> ***Objetivos táticos*** *são os de médio prazo e que abrangem cada unidade específica da organização. São geralmente objetivos divisionais ou departamentais relacionados com as áreas de produção, finanças, marketing e de recursos humanos da organização.   
> Ex.: Incentivar a responsabilidade social.*

E para finalizar, temos ainda os objetivos operacionais.

> ***Objetivos operacionais*** *são os específicos e de curto prazo voltados para a execução das operações cotidianas da organização referem-se geralmente a cada tarefa ou operação especificamente.*   
> *Ex.: Admitir dez pessoas deficientes ao ano e incentivar o consumo consciente.*

<span style="font-size: xx-small;">Fonte:   
</span><span style="font-size: xx-small;"><http://www.cidademarketing.com.br/2009/ar/33/objetivos-estratgicos-tticos-e-operacionais-.html></span>

Distinguir ações e objetivos estratégicos dos táticos advém da necessidade de termos previsibilidade, controle e referência(s). Como alinhar a execução com a estratégia se não sabemos qual é a estratégia, não é verdade?

Colocando em termos mais práticos, imagine um cenário de fusão entre duas empresas. Certamente alguns sistemas serão absorvidos, outros substituídos, possivelmente podem surgir novos sistemas. O time de arquitetura, certamente, terá um grande desafio em mãos. A coisa ficará sensivelmente complexa se adicionarmos às preocupações dos arquitetos questões como:

- Quais processos de negócio serão afetados dentro da (nova) empresa após a fusão?
- Quais serão os novos padrões tecnológicos adotados?
- Como lidar com o *turn-over* de pessoas de forma a preservar a continuidade do negócio?
- Como ficará o portfólio de serviços da empresa?
- Como os atuais contratos com fornecedores serão afetados?
- Qual o impacto geral sobre a governança de TI?
- Quais tipos de interoperabilidades serão necessárias?

Você consegue perceber como o pensamento do que é estratégico/tático permeia múltiplos níveis? Note que nenhuma das questões acima considera apenas o viés técnico.

Vamos observar, dentro do cenário citado, como ficaria a distinção entre o que é estratégico/tático para cada tipo de arquiteto (papel ou cargo, não importa). Claro, o que veremos a seguir é apenas a ponta do iceberg. 😉

### Para o arquiteto corporativo (papel ou cargo)

Um arquiteto corporativo pode iniciar sua definição de “AS-IS” e “TO-BE” observando como os seus *building blocks* serão afetados.

> ***Building block** para o TOGAF:*
> 
> *É qualquer potencial reusável dentro da organização, podendo ser um sistema, um processo de negócio, ativos ou até mesmo pessoas. Além disso deve ser substituível e bem especificado. Pode ser visto como um pacote de funcionalidade definida para atender às necessidades do negócio em toda a organização. Um building block pode interoperar com outros, com ou sem relações de interdependência.*
> 
> *Uma arquitetura é, portanto, um conjunto de building blocks retratado em um modelo e uma especificação de como esses blocos estão conectados para satisfazer os requisitos gerais do negócio.*

O rabisco abaixo ilustra (de maneira minimalista, evidentemente) a diferença entre a visão de “AS-IS” e “TO-BE” no exemplo da fusão entre empresas. Note que dentro das preocupações do arquiteto corporativo, estão, além dos sistemas, os processos de negócio.

![](/assets/pics/asistobe_ac.png)

### Para o arquiteto de soluções (papel ou cargo)

Alinhado com o arquiteto corporativo, o arquiteto de soluções se preocupará em “dar a melhor solução” para as integrações entre os sistemas.

“Que tipo de tecnologias serão elencadas para resolver as integrações?” ou “Como prover a estrutura necessária para o novo portfólio de serviços?”: Essas são perguntas comuns a esse papel/cargo.

![](/assets/pics/asistobe_as.png)

### Para o arquiteto de software (papel ou cargo)

Uma vez definida a solução – que estará alinhada com as definições “empresariais” – o arquiteto de software implementará os componentes, frameworks e outros itens necessários para a materialização da arquitetura.

![](/assets/pics/asistobe_aso.png)

### Resumidamente, era isso!

Embora sejam parcos, os exemplos acima ilustram a importância do “AS-IS” e “TO-BE” para composição de modelos de arquitetura. Essa abordagem é tipicamente utilizada para estudos iniciais de viabilidade de implementação de uma determinada arquitetura, além de servir para realização do *architecture continuum*. Mas isso, é história para outro post. 😉
