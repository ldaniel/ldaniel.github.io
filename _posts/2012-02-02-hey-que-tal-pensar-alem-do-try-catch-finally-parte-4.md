---
id: 33
title: 'Hey, que tal pensar além do Try&#8230; Catch&#8230; Finally? (parte 4)'
date: '2012-02-02T14:51:00-03:00'
author: 'Leandro Daniel'

guid: /post/Hey-que-tal-pensar-alem-do-Try-Catch-Finally-(parte-4).aspx
permalink: /hey-que-tal-pensar-alem-do-try-catch-finally-parte-4/
categories:
    - IT
tags:
    - pt-br
    - Arquitetura
---

E aqui estou para fechar esta série de posts. Vimos no primeiro a [diferença entre erro e exceção](/Hey-que-tal-pensar-alem-do-Try-Catch-Finally), e no segundo tivemos um [vislumbre da amplitude do assunto “Exception Handling”](/Hey-que-tal-pensar-alem-do-Try-Catch-Finally-(parte-2)). No último post tomamos contatos com [jargões comuns em tratamento de exceções](/Hey-que-tal-pensar-alem-do-Try-Catch-Finally-(parte-3)) além de conhecer alguns [anti-patterns](/Hey-que-tal-pensar-alem-do-Try-Catch-Finally-(parte-3)).

### Pensando além do Try… Catch… Finally. Finally!

Se você acompanhou todos os demais posts da série, espero ter conseguido lhe dar embasamento suficiente para que as seguintes assertivas sejam válidas:

> ***Assertiva 1** Tratamento de exceções pode ser tratado como um item de [cross-cutting concerns](http://en.wikipedia.org/wiki/Cross-cutting_concern), e como tal, pode tirar proveito de frameworks e libraries existentes no mercado (muitas delas “free”).*
> 
> ***Dica** Considere não reinventar a roda!*

> ***Assertiva 2** Dentro de uma empresa, a manipulação de exceções pode ser expressa em termos de políticas. Considere, portanto, envolvimento do usuário, administradores e demais interessados na solução para discutir tais políticas.*
> 
> ***Dica** Pense sempre em flexibidade para configuração das suas políticas de manipulação de exceção!*

> ***Assertiva 3** Defina um plano para pensar na manipulação de exceções durante a fase de design de uma solução. O resultado deve ser uma estratégia consistente e comunicada para todos os envolvidos. Em alguns casos, exige alguma definição de processo entre departamentos (por exemplo, “em caso de exceção no sistema de câmbio a equipe responsável deve ser notificada, os administradores devem receber um log”).*
> 
> ***Dica** Análise de exceções podem trazer grandes oportunidades de avaliação e correção do processo como um todo!*

> ***Assertiva 4** Manipular exceções é um excercício de altruísmo.*
> 
> ***Dica** Ajude a equipe de manutenção com o rastreamento da exceção e suas causas. Seja objetivo e direto!*

> ***Assertiva 5** Exceções fornecem os meios necessários para separar os detalhes sobre o que fazer quando algo fora do comum acontece a partir da lógica principal de um programa. Na programação tradicional, a detecção de erros, relatórios e manipulação conduzem frequentemente a código espaguete confuso.*
> 
> ***Dica** Trabalhe de forma organizada e mantenha seu código limpo.*

### Alguns exemplos de Exception Patterns

Provavelmente, os três design patterns mais conhecidos para tratamento de exceções são:

**Exception Shielding:** Este padrão garante que o aplicativo não vazará informações confidenciais (nomes de servidores, caminhos físicos dos servidores etc.).

**Exception Logging:** Este padrão ajuda a diagnosticar e solucionar problemas de exceções, auditoria de ações do usuário, rastreamento de atividades maliciosas e outras questões de segurança.

**Exception Translation:** Este padrão descreve como quebrar exceções dentro de outras exceções específicas dentro de uma camada (*inner exception*) para garantir que elas realmente reflitam ações pertinentes dentro do contexto.

Perceba que todos os patterns de manipulação de exceção apresentados se relacionam com as técnicas de tratamento de exceções apresentadas no [post anterior](/Hey-que-tal-pensar-alem-do-Try-Catch-Finally-(parte-3)). Por exemplo, para não deixarmos que informações confidenciais vazem usamos **Replace Handler**. Quebrar exceções dentro de outras exceções específicas pode ser feito via **Wrap Handler**. Notificar os usuários ou administradores do sistema pode ser conseguido com **Propagate Exception**. Além disse, devemos combinar essas técnicas sempre que necessário.

### Estratégia de tratamento de exceções

O diagrama abaixo ilustra uma possível estratégia de tratamento de exceções entre as camadas de uma dada solução. Para chegar numa estratégia como essa, cada [*building block*](http://pubs.opengroup.org/architecture/togaf9-doc/arch/chap37.html) de sua arquitetura deve ser avaliado com critério.

[![ExceptionStategy](/assets/pics/ExceptionStategy_thumb_1.png "ExceptionStategy")](/assets/pics/ExceptionStategy_1.png)

Embora os exemplos desta série de posts ilustrassem situações corriqueiras em linguagens de programação como Java e C#, considere avaliar práticas de manipulação de exceção em banco de dados, processos de ETL, componentes de mensageria, SOA e qualquer outra tecnologia que forneça suporte para isso.

### Conclusão

Todas as práticas envolvidas na manipulação de exceções oferecem como primeiro objetivo a possibilidade de uma aplicação continuar sua execução sem gerar maiores impactos. Contudo, um ganho excepcional pode ser oportunizado na auditoria das falhas ocorridas, ou até mesmo com um suporte efetivo para análise pela equipe de manutenção. Nunca subestime esse potencial.

Tratar exceções é muito mais que codificar um simples Try… Catch… Finally, ao contrário, é uma atividade que requer planejamento, análise (design), implementação e estudo constante.  
![Wink](http://www.leandrodaniel.com/editors/tiny_mce_3_4_3_1/plugins/emotions/img/smiley-wink.gif "Wink")
