---
id: 249
title: 'SQL Server 2008 (parte 9) – Compound Operators'
date: '2009-03-26T23:19:00-03:00'
author: 'Leandro Daniel'

guid: /post/SQL-Server-2008-(parte-9)-e28093-Compound-Operators.aspx
permalink: /index.php/sql-server-2008-parte-9-compound-operators/
categories:
    - Post
    - 'SQL Server'
---

Essa é uma melhoria do T-SQL, operadores compostos servem para executar uma operação sobre um dado valor, por exemplo:

```
<pre class="brush: sql;">DECLARE @Medida FLOAT = 27;
SET @x1 *= 0.567;
SELECT @Medida AS Fator;
```

No exemplo acima a variável ***@Medida*** recebe inicialmente o valor ***27***, na linha 2 é utilizado o operador composto ***\*=*** que realizar uma operação de multiplicação do valor original da variável pelo número ***0.567***. Esse é um recurso presente em inúmeras linguagens de programação, no T-SQL temos as seguintes opções:

- += (adiciona no valor original)
- -= (subtrai do valor original)
- \*= (multiplica no valor original)
- /= (divide do valor original)
- %= (modulo do valor original)
- &amp;= (operação de bitwise “AND” sobre o valor original)
- ^= (operação de bitwise exclusivo “OR” sobre o valor original)
- |= (operação de bitwise “OR” sobre o valor original)

Até o próximo post.