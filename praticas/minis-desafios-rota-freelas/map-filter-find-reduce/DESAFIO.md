# Desafio: map, filter, find e reduce

Meta 8 da Fase 1. Estimativa: 4 a 6 h, em 2 sessões (1ª: passos 1 a 5; 2ª: passos 6 a 9).

---

## Resumo dos conceitos

| Método   | Pergunta que responde                 | O que devolve                              |
|----------|---------------------------------------|--------------------------------------------|
| `map`    | "Transforme cada item em outra coisa" | Array **do mesmo tamanho**                 |
| `filter` | "Quais itens passam no teste?"        | Array **igual ou menor** (pode ser `[]`)   |
| `find`   | "Qual é o primeiro que passa?"        | **O item em si** (ou `undefined`)          |
| `reduce` | "Junte tudo num valor só"             | **Um valor** (número, texto...)            |

- Nenhum deles muda a lista original. Guarde o resultado numa variável.
- Arrow function **sem** `{}` devolve sozinha. **Com** `{}`, precisa de `return`.
- Se aparecer `undefined` ou `[]` sem motivo, confira primeiro se faltou `return`.

```js
const produtos = [{ nome: 'arroz', valor: 8 }, { nome: 'feijão', valor: 10 }]

produtos.map(p => p.valor)                    // [8, 10]
produtos.filter(p => p.valor < 9)             // [{ nome: 'arroz', valor: 8 }]
produtos.find(p => p.nome === 'feijão')       // { nome: 'feijão', valor: 10 }
produtos.reduce((soma, p) => soma + p.valor, 0) // 18
```

---

## Passos

### Passo 1: Dados
Cole no começo do `script.js`:

```js
const servicos = [
  { nome: 'corte',       preco: 40, duracao: 30, categoria: 'cabelo' },
  { nome: 'barba',       preco: 25, duracao: 20, categoria: 'barba' },
  { nome: 'sobrancelha', preco: 15, duracao: 10, categoria: 'rosto' },
  { nome: 'completo',    preco: 60, duracao: 45, categoria: 'combo' },
  { nome: 'pigmentação', preco: 35, duracao: 25, categoria: 'barba' }
]
```

### Passo 2: map com nomes
Crie `nomes` usando `map` em `servicos`.

- [ ] ✅ Está certo se aparecer `['corte', 'barba', 'sobrancelha', 'completo', 'pigmentação']`.

### Passo 3: map com frases
Crie `frases` usando `map`, em que cada item vira o texto `"corte: R$ 40"`.

- [ ] ✅ Está certo se aparecer um array com 5 textos nesse formato.

### Passo 4: filter por preço
Crie `ate30` com os serviços de preço **até 30**.

- [ ] ✅ Está certo se aparecer um array com **2 objetos** (barba e sobrancelha).

### Passo 5: filter por categoria
Crie `daBarba` com os serviços da categoria `'barba'`.

- [ ] ✅ Está certo se aparecer um array com **2 objetos** (barba e pigmentação).

### Passo 6: find
Use `find` para achar o serviço de nome `'completo'` e mostre `"completo custa R$ 60"`.
Depois procure `'manicure'` e use um `if` para mostrar `"Serviço não encontrado"`.

- [ ] ✅ Está certo se as duas mensagens aparecerem e nada der erro no console.

### Passo 7: reduce com o preço
Some o preço de todos os serviços.

- [ ] ✅ Está certo se aparecer **175**.

### Passo 8: reduce com a duração
Some a duração de todos os serviços.

- [ ] ✅ Está certo se aparecer **130**.

### Passo 9: encadear filter + reduce
Calcule o preço total só da categoria `'barba'`, numa linha só: `servicos.filter(...).reduce(...)`.

- [ ] ✅ Está certo se aparecer **60**.

### ⭐ Extra (opcional, usa `includes`, que é novo)
O cliente escolheu `const escolhidos = ['corte', 'barba']`. Calcule quanto tempo ele vai ficar na cadeira.
Dica: `filter` com `escolhidos.includes(s.nome)` e depois `reduce`.

- [ ] ✅ Está certo se aparecer **50**.

---

## Desafio 2: a agenda do dia (mais difícil)

Estimativa: 2 a 3 h. Use a lista `servicos` do desafio 1 **e** esta nova lista no mesmo `script.js`:

```js
const agenda = [
  { cliente: 'Ana',    pedidos: ['corte', 'sobrancelha'],          hora: '09:00', pago: true },
  { cliente: 'Bruno',  pedidos: ['barba'],                         hora: '10:00', pago: false },
  { cliente: 'Carlos', pedidos: ['completo'],                      hora: '11:00', pago: true },
  { cliente: 'Diego',  pedidos: ['corte', 'barba', 'pigmentação'], hora: '14:00', pago: false },
  { cliente: 'Eva',    pedidos: ['sobrancelha'],                   hora: '15:30', pago: true }
]
```

O que é novo aqui:
- Cada **objeto** da agenda (um horário marcado) tem um array dentro dele, a propriedade `pedidos`, ao lado das propriedades `cliente`, `hora` e `pago`. Dentro de um método, chame o parâmetro de algo como `horario` (o objeto inteiro) e use `horario.pedidos` para pegar esse array e aplicar métodos nele. Não chame o parâmetro de `cliente`, porque esse já é o nome de uma propriedade (só o texto `'Ana'`).
- Você vai usar **um método dentro de outro** (ex.: um `reduce` dentro de um `map`).
- Para devolver um **objeto** numa arrow function **sem** `{}` de função, coloque parênteses em volta: `x => ({ nome: x.nome })`. Sem os parênteses, o JS acha que as `{}` são o corpo da função. Se preferir, use `{ return { ... } }`.

### Passo A: quem não pagou
Crie `devendo`, um array **só com os nomes** dos clientes que ainda não pagaram.

- [ ] ✅ Está certo se aparecer `['Bruno', 'Diego']`.

### Passo B: primeiro cliente que pediu barba
Ache o **primeiro** cliente da agenda cujos `pedidos` incluem `'barba'` e mostre `"Bruno pediu barba às 10:00"`.

- [ ] ✅ Está certo se aparecer essa frase exatamente.

### Passo C: função que acha o preço
Crie a função `precoDoServico(nome)`. Ela recebe o nome de um serviço, procura esse serviço em `servicos` e **devolve o preço** (número).

- [ ] ✅ Está certo se `console.log(precoDoServico('barba'))` mostrar **25** e `precoDoServico('pigmentação')` mostrar **35**.

### Passo D: quanto cada cliente vai pagar
**D1 (um cliente só):** some os preços dos `pedidos` de `agenda[0]` com `reduce` e `precoDoServico`.

- [ ] ✅ Está certo se aparecer **55**. Com `agenda[3]`, **100**.

**D2 (todos, só os números):** crie `totais` com `map` na agenda, usando o mesmo `reduce` do D1 para cada horário.

- [ ] ✅ Está certo se aparecer `[55, 25, 60, 100, 15]`.

**D3 (com o nome junto):** crie `contas`, igual ao D2, mas cada item vira `{ cliente: 'Ana', total: 55 }`.
Por quê: no D2 você só sabe quem é quem pela posição. Com o nome junto, dá para mostrar "Ana: R$ 55" na tela, que é o que um site faria.

- [ ] ✅ Está certo se aparecer um array com 5 objetos: Ana **55**, Bruno **25**, Carlos **60**, Diego **100**, Eva **15**.

### Passo E: faturamento do dia
Some o `total` de todas as `contas`.

- [ ] ✅ Está certo se aparecer **255**.

### Passo F: quanto falta receber
Calcule quanto os clientes que **não pagaram** ainda devem.
Dica: você precisa saber o `total` de cada um **e** se ele pagou. Pense em qual array tem as duas informações, ou como fazer isso.

- [ ] ✅ Está certo se aparecer **125**.

### Passo G: total de serviços feitos no dia
Conte quantos serviços foram feitos no dia todo, somando a quantidade de pedidos de cada cliente.

- [ ] ✅ Está certo se aparecer **8**.

### 👑 Chefão (opcional, usa um conceito novo)
Conte quantas vezes cada serviço foi pedido no dia, num objeto:

```js
{ corte: 2, sobrancelha: 2, barba: 2, completo: 1, pigmentação: 1 }
```

O que é novo: o **acumulador do `reduce` pode ser um objeto** (`{}` como valor inicial), e você cria ou aumenta uma propriedade com o nome em uma variável: `contagem[nome]`. Se `contagem[nome]` ainda não existe, ele vale `undefined`.

- [ ] ✅ Está certo se o objeto mostrado tiver exatamente esses números (a ordem das propriedades não importa).
