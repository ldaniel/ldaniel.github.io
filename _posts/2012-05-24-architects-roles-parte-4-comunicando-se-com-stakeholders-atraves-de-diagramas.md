---
id: 11
title: 'Architect&#8217;s roles (parte 4): Comunicando-se com stakeholders através de diagramas'
date: '2012-05-24T13:47:00-03:00'
author: 'Leandro Daniel'

guid: /post/Architects-roles-(parte-4)-Comunicando-se-com-stakeholders-atraves-de-diagramas.aspx
permalink: /architects-roles-parte-4-comunicando-se-com-stakeholders-atraves-de-diagramas/
categories:
    - IT
tags:
    - pt-br
    - Arquitetura
---

Sempre insisti que as habilidades não-técnicas de um arquiteto são importantíssimas! Não adianta ser super competente tecnicamente mas um ogro na hora de relacionar-se com as pessoas. Da mesma forma, pouco importa se você não consegue entender os princípios ágeis com relação a documentação, invariavelmente, você precisará dela em algum momento: quanto antes você aceitar isso, melhor. 

Isso posto, gostaria de falar sobre documentação e comunicação través de diagramas. Pseudo-agilistas, desenvolvedores xiitas e outros tipos bizarros: tudo ok? Até aqui, sem crise, espero. O que? O tempo fechou? Hummm… nesse caso, [clique aqui](http://leandrodaniel.com/pics/NothingToDoHereBlackWithText.png).

Pra quem sobreviveu ao link anterior, acompanhe o quão interessante é utilizarmos diagramas em nossa comunicação.

### E aquele lance do quadro branco? Era mentira?

Claro que não! Um rabisco no quadro branco é uma poderosa e dinâmica forma de comunicação em uma reunião (na minha opinião). Assim, o desenho abaixo tende a ser uma comunicação extremamente efetiva numa reunião presencial, até mesmo porque você permite que outras pessoas interajam no desenho e colaborem com a solução.

![](http://leandrodaniel.com/pics/archimatedraft.png)

Vale reforçar que, conforme estudo apontado por Alistair Cockburn, o diagrama abaixo aponta o quadro branco em um debate cara-a-cara como a forma mais eficaz de comunicação.

![](http://leandrodaniel.com/pics/communicationModes.gif)

Contudo, não é viável tirar uma foto do quadro branco e enviá-la a diretores, executivos, gerentes e demais stakeholders. Muitos podem não entender os seus garranchos, não é verdade? Seus stakeholders merecem mais que isso. Lembrando:

> Stakeholder é um termo usado para referenciarmos as partes interessadas que devem estar de acordo com as práticas de governança corporativa executadas pela empresa.

Assim, chega um momento onde precisamos comunicar nossos view points de alguma forma.

> Segundo o TOGAF, um *View Point* é uma definição da perspectiva a partir do qual um ponto de vista é tomada. É uma especificação das convenções para a construção e utilização de um ponto de vista (muitas vezes, por meio de um *schema* apropriado ou modelo). Se uma *view* representa o que você vê, um *view point* é de onde você está olhando (ponto de vista ou perspectiva que determina o que você vê).

Com tudo isso em mente, apresentarei a seguir uma ferramenta útil para arquitetos que desejam comunicar seus *view points* através de diagramas: o Archimate.

### Archimate

> O [ArchiMate](http://www.opengroup.org/archimate/) é uma linguagem de modelagem aberta e independente para *Enterprise Architecture* que é suportada por diferentes fornecedores de ferramentas e empresas de consultoria. A linguagem ArchiMate fornece instrumentos para permitir que os arquitetos corporativos possam descrever, analisar e visualizar as relações entre os domínios de negócios de uma forma inequívoca.

No diagrama abaixo, coloco um exemplo de *View Point* descrito com o Archimate onde comunico uma visão de processo. Nele, estão destacados os departamentos envolvidos, processos, serviços e aplicações, onde o tipo de relacionamento é destacado numa linguagem simples.

O bonito nisso, é fazer com que qualquer stakeholder compreenda o posicionamento macro dos *building blocks* dentro da solução. Um diagrama desses consegue explicar muito mais que um texto, na maioria dos casos.

![](http://leandrodaniel.com/pics/archimatesample02.png)

Outra vantagem interessante, ao meu ver, é ter a capacidade de linkar esse diagrama com demais building blocks, e até mesmo ao código fonte que materializa partes da arquitetura. Isso é possível utilizando ferramentas como o [Enterprise Architect](http://www.sparxsystems.com/products/ea/index.html).

### Sério? Mais uma linguagem de modelagem?

A dúvida é pertinente, afinal, porque não usar UML ou alguma outra linguagem existente? Veja bem, não estou propondo ou sugerindo que o Archimate é a melhor forma de comunicar e documentar sua arquitetura. Contudo, me parece razoável optarmos por um padrão criado pelo [Open Group](http://www.opengroup.org/) (o mesmo responsável por manter o TOGAF). Fora isso, onde trabalho é o framework de arquitetura que utilizamos, e a experiência com ele tem sido ótima! (como sempre gosto de dizer: funciona muito bem no meu contexto ![Wink](http://leandrodaniel.com/editors/tiny_mce_3_4_3_1/plugins/emotions/img/smiley-wink.gif "Wink")).

Por incrível que pareça, não estou recebendo qualquer coisa (patrocínio ou seja lá o que for) para falar no Archimate. De fato, tenho utilizado no meu cotidiano, quando necessário, essa linguagem de modelagem (através do EA) e tenho visto resultados muito positivos e eficazes.

Só para deixar a coisa mais imparcial a imagem abaixo mostra a riqueza de *view points* que podem ser criados com o Archimate. Retirei esse material no site da Orbus, que sugere o uso do Visio (clique na imagem abaixo para abrir o site).

[![](http://leandrodaniel.com/pics/ArchimateViewPoints.png)](http://www.orbussoftware.com/downloads/posters/archimate-poster)

Se você comunica seus view points de outra forma, seria muito bacana dividir essa experiência aqui, seja através de um comentário ou mesmo deixando um apontamento para algum post.  
![Laughing](http://leandrodaniel.com/editors/tiny_mce_3_4_3_1/plugins/emotions/img/smiley-laughing.gif "Laughing")
