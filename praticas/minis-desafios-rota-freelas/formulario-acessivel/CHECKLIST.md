# Mini-desafio: formulário acessível

Meta 2 da Fase 1 (~2 h). Foco: HTML acessível + validação + mensagens de erro claras. **Sem design.**

Formulário de agendamento de uma barbearia.

## 1. HTML
- [ ] `lang="pt-BR"`, um `<h1>`, `<main>` e `<form>`.
- [ ] Campos, cada um com `<label for>` + `id` único (sem placeholder no lugar de label):
  - [ ] Nome: `type="text"`, `required`, `autocomplete="name"`
  - [ ] E-mail: `type="email"`, `required`, `autocomplete="email"`
  - [ ] WhatsApp: `type="tel"`, `required`, `pattern`
  - [ ] Serviço: `<select>` com primeira opção vazia + `required`
  - [ ] Período (manhã/tarde/noite): `radio` com o mesmo `name`, dentro de `<fieldset>` + `<legend>`
  - [ ] Aceite: `checkbox` com `required`
- [ ] `<button type="submit">Agendar</button>`

## 2. CSS mínimo
- [ ] Um campo por linha.
- [ ] `:focus-visible` visível.
- [ ] Mensagem de erro em destaque (vermelho escuro já basta).

## 3. Mensagens de erro (JavaScript)
- [ ] `novalidate` no `<form>` e `checkValidity()` no envio.
- [ ] Mensagem específica embaixo de cada campo com erro, usando `validity` (`valueMissing`, `typeMismatch`, `patternMismatch`).
- [ ] Mensagem ligada ao campo por `aria-describedby` + `aria-invalid="true"` no campo.
- [ ] Foco no primeiro campo com erro.

## 4. Teste final
- [ ] Preencher e enviar só com o teclado.
- [ ] Enviar vazio: cada erro dá para entender sem depender da cor.
- [ ] Lighthouse → Acessibilidade = 100.
