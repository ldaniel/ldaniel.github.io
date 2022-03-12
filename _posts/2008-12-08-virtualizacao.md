---
id: 281
title: Virtualização
date: '2008-12-08T23:08:15-03:00'
author: 'Leandro Daniel'

guid: /post/Virtualizacao.aspx
permalink: /virtualizacao/
categories:
    - IT
tags:
    - pt-br
    - Arquitetura
    - Virtualização
---

Dentro dos desafios do arquiteto de TI hoje em dia a virtualização de servidores vem ganhando ênfase à medida que mostra-se uma prática cada vez mais presente. Por incrível que pareça o conceito de máquina virtual é antigo, inicialmente foi desenvolvida pela IBM nos anos 60. As vantagens na utilização de virtualização de servidores são inúmeras, dentre elas:

- Oferece uma plataforma dinâmica já que uma única máquina pode virtualizar servidores distintos com ambiente operacional e configuração diferenciados;
- O tempo de recuperação de desastres (DRP – Disaster Recovery Plain) é reduzido já que é possível agrupar os servidores de forma geograficamente dispersa (utilizando, por exemplo, o novo [Hyper-V](http://www.microsoft.com/brasil/servidores/windowsserver2008/virtualization/default.mspx) da Microsoft, que acompanha o Windows Server 2008);
- Os servidores podem ser virtualizados para prover ambientes de desenvolvimento e teste sem o ônus do custo de um servidor físico, utilizando arquivos <acronym title="Virtual Hard Disk">VHD</acronym>;

A Microsoft possui diversas ferramentas disponíveis para virtualização, conforme mostra a ilustração a seguir:

![virtualization](/assets/pics/WindowsLiveWriter/Virtualizao_14C2D/virtualization_3.png)  
<font size="1">Fonte: </font>[<font size="1">http://www.microsoft.com/brasil/servidores/virtualizacao/solutions.mspx</font>](http://www.microsoft.com/brasil/servidores/virtualizacao/solutions.mspx "http://www.microsoft.com/brasil/servidores/virtualizacao/solutions.mspx")

Máquinas virtuais também podem ser utilizadas para testes em ambientes operacionais em versões diferentes da atual, como Windows 98 ou Windows 2000, dentre outros. Quanto mais servidores forem virtualizados mais o custo tende a cair, isso é bem interessante para equipes que precisam garantir o funcionamento de um aplicativo em diversos ambientes.

Outra forma de tirar proveito da virtualização é antes de adotar uma nova tecnologia, pois arquitetos e administradores de TI podem lançar mão deste recurso evitando riscos e custos desnecessários.

Se você nunca utilizou uma máquina virtual, sugiro os seguintes links para iniciar:

- [Microsoft Virtual PC 2007](http://www.microsoft.com/windows/downloads/virtualpc/default.mspx) (software para criação e utilização de máquinas virtuais)
- [Microsoft Office SharePoint Server 2007 VHD](http://www.microsoft.com/downloads/details.aspx?familyid=67f93dcb-ada8-4db5-a47b-df17e14b2c74&displaylang=en) (arquivo VHD com o SharePoint 2007 para testes)
- [Internet Explorer Application Compatibility VPC Image](http://www.microsoft.com/downloads/details.aspx?FamilyID=21eabb90-958f-4b64-b5f1-73d0a413c8ef&displaylang=en) (arquivo VHD com diferentes versões do Internet Explorer para teste, utilizando Windows XP SP2, Windows XP SP3 e Windows Vista)
- [Microsoft Windows Vista 30-Day Eval VHD](http://www.microsoft.com/downloads/details.aspx?familyid=c2c27337-d4d1-4b9b-926d-86493c7da1aa&displaylang=en)
- [Microsoft SQL Server 2005 Enterprise Edition VHD](http://www.microsoft.com/downloads/details.aspx?FamilyID=7b243252-acb7-451b-822b-df639443aeaf&displaylang=en)
- [Microsoft Windows Server 2003 R2 Enterprise Edition VHD](http://www.microsoft.com/downloads/details.aspx?FamilyID=77f24c9d-b4b8-4f73-99e3-c66f80e415b6&displaylang=en)

Como o propósito das máquinas virtuais disponíveis para download na Microsoft é apenas a avaliação dos produtos contidos nelas, fique atento, pois os arquivos VHD em sua grande maioria possuem data de expiração ou um número reduzido de dias para utilização.
