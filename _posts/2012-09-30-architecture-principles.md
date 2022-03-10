---
id: 5
title: 'Architecture Principles'
date: '2012-09-30T23:50:00-03:00'
author: 'Leandro Daniel'

guid: /post/Architecture-Principles.aspx
permalink: /index.php/architecture-principles/
categories:
    - Arquitetura
    - Post
---

Chamamos de “princípio” toda e qualquer regra geral e/ou orientação que se destina a ser duradoura e raramente alterada. Para a arquitetura corporativa, um princípio informa e apoia a maneira no qual uma organização cumpre sua missão.

Os chamados “Princípios de Arquitetura” são um subconjunto dos princípios de uma empresa e se relacionam com o trabalho de arquitetura. Eles refletem um nível de consenso em toda a empresa e encarnan o espírito e o pensamento da arquitetura corporativa. Os princípios de arquitetura podem ser divididos em:

- Princípios que regem o processo de arquitetura, afetando o desenvolvimento, manutenção e utilização da arquitetura corporativa;
- Princípios que regem a implementação da arquitetura, que estabelece os primeiros princípios e orientação relacionada para projetar e desenvolver sistemas de informação;

Segundo o TOGAF, o formato recomendado para definção de um princípio de arquitetura é o descrito a seguir:

> **Nome** Deve representar a essência da regra, bem como ser de fácil lembrança. Plataformas de tecnologia específica não devem ser mencionadas no nome ou na declaração de um princípio.
> 
> **Afirmação** Deve, de forma sucinta e inequívoca, comunicar a regra fundamental.
> 
> **Base lógica** Deve destacar os benefícios de negócio ao se aderir ao princípio, usando a terminologia de negócios. Também descreve a relação com outros princípios e intenções em relação a uma interpretação equilibrada.
> 
> **Implicações** Deve destacar como os requisitos afetam – em termos de atividades/tarefas – custos e recursos. O impacto nos negócios e consequências da adoção de um princípio deve ser claramente indicado. O leitor deve prontamente discernir a resposta: “Como isso me afeta?”. É importante não simplificar, banalizar ou julgar o mérito do impacto.

Assim, um exemplo de princípio de arquitetura pode ser conferido abaixo:

| **Nome** | Reuse |
|---|---|
| **Statement** | Common components in the IT architecture should be used while building an application and enterprise requirements. |
| **Base lógica** | Business units have common needs and requirements, yet each business unit has developed their own implementations of these common tasks. |
| **Implicações** | - Developing common assets will reduce support costs. - Leads to faster application development. - If not followed, will restrict the ability to integrate or to use systems with functions that new applications could leverage. |

Por enquanto, era isso. Em posts futuros, explorarei com mais detalhes o tema.