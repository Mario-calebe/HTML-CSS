# Mini-desafio: imagens responsivas

Meta 3 da Fase 1. Tempo realista: **3 a 5 h** (o painel diz 2 h, mas aqui há vários conceitos novos, e preparar as imagens também leva tempo).

Foco: entregar a imagem certa para cada tela, sem desperdiçar internet. **Sem design.**

Modo mentor: você escreve o código. Os exemplos abaixo mostram cada conceito com outro assunto; adaptar para o desafio é com você. Se travar, peça uma dica.

## Por que isso importa para vender sites
Hoje seus projetos entregam a mesma imagem grande para todo mundo (ver `diagnostico.md`). Quem abre o site no celular, com internet móvel, baixa uma foto de desktop e espera. Boa parte dos clientes de uma barbearia ou restaurante vai chegar pelo celular.

## O que é novo para você

| Conceito | Situação | Para que serve |
|---|---|---|
| `<picture>` + `<source>` | Relembrar (usou 1 vez) | Trocar o **enquadramento** conforme a tela |
| `srcset` com `w` | Novo | Oferecer a **mesma foto** em vários tamanhos |
| `sizes` | Novo | Dizer ao navegador o tamanho que a imagem vai ocupar |
| `loading="lazy"` | Novo | Só baixar a imagem quando ela estiver perto de aparecer |
| `width` e `height` no HTML | Novo | Reservar o espaço e evitar que a página "pule" |
| Aba Network do DevTools | Novo | Provar qual arquivo foi baixado |
| Squoosh | Novo | Reduzir e comprimir imagens no navegador |

### `<picture>`: fotos com enquadramentos diferentes
Use quando a foto de desktop ficaria ruim no celular, por exemplo uma foto larga em que a pessoa fica minúscula.

```html
<picture>
  <source media="(min-width: 48rem)" srcset="praia-larga.jpg" width="1600" height="700">
  <img src="praia-vertical.jpg" width="750" height="1000" alt="Duas crianças brincando na areia ao pôr do sol">
</picture>
```

- O navegador usa o primeiro `<source>` cuja condição for verdadeira. Se nenhuma for, usa o `<img>`.
- O `<img>` é obrigatório e vem por último. O `alt` fica só nele.
- `48rem` equivale a 768 px com a fonte padrão do navegador.

### `srcset` + `sizes`: a mesma foto em tamanhos diferentes
Use quando só o tamanho muda, sem mudar o enquadramento.

```html
<img
  src="bolo-800.jpg"
  srcset="bolo-400.jpg 400w, bolo-800.jpg 800w"
  sizes="(min-width: 48rem) 50vw, 100vw"
  width="800" height="600"
  alt="Fatia de bolo de cenoura com cobertura de chocolate">
```

- `400w` significa "este arquivo tem 400 px de largura". É a largura real do arquivo, não a largura exibida.
- `sizes` significa: "em telas a partir de 48rem, a imagem ocupa metade da tela; nas outras, a tela inteira".
- Quem escolhe o arquivo é o navegador. Numa tela de 1000 px, 50vw são 500 px, então ele baixa o `800w`, porque o de 400 ficaria pequeno. Numa tela de 375 px, baixa o `400w`.
- Telas de celular costumam ter densidade 2x ou 3x (mais pixels físicos no mesmo espaço). Por isso, um celular pode baixar o `800w`. Isso é correto, não é erro seu.

### `<picture>` ou `srcset`?
- O enquadramento muda? `<picture>`.
- Só o tamanho muda? `srcset` + `sizes`.

### `loading="lazy"`: adiar o download

```html
<img src="mapa.jpg" loading="lazy" width="800" height="600" alt="Mapa do bairro">
```

Regra: **nunca** use na imagem principal do topo da página. Ela precisa aparecer o quanto antes, e o lazy só a atrasaria. Use nas imagens mais abaixo.

### `width` e `height`: reservar o espaço
Sem esses atributos, o navegador não sabe a proporção da imagem antes de baixá-la, e o texto pula quando ela chega.

- Escreva o tamanho real do arquivo, só o número, sem `px`.
- Eles não travam a imagem nesse tamanho, porque o CSS abaixo deixa a imagem flexível:

```css
img {
  display: block;
  max-width: 100%;
  height: auto;
}
```

## 1. Preparar as imagens (fora do código)
Tema: página de uma barbearia, a mesma do formulário da meta anterior.

- [ ] Baixar 4 fotos grátis no [Pexels](https://www.pexels.com) ou [Unsplash](https://unsplash.com): 1 para o topo e 3 para a galeria.
- [ ] Cortar no app Fotos do Windows (Editar → Cortar). O Squoosh não serve bem para cortar.
- [ ] Reduzir e comprimir no [Squoosh](https://squoosh.app): ativar **Resize**, manter a proporção, escolher **MozJPEG** e começar com qualidade 75.
- [ ] Salvar em `img/`, com pesos até os limites abaixo:

| Arquivo | Largura | Proporção | Peso máximo |
|---|---|---|---|
| `hero-celular.jpg` | 750 px | 3:4 (vertical) | 150 KB |
| `hero-desktop.jpg` | 1280 a 1600 px | 16:9 (larga) | 250 KB |
| `foto1-400.jpg`, `foto2-400.jpg`, `foto3-400.jpg` | 400 px | 5:6 (retrato) | 50 KB cada |
| `foto1-800.jpg`, `foto2-800.jpg`, `foto3-800.jpg` | 800 px | 5:6 (retrato) | 120 KB cada |

São 8 arquivos ao todo. Fique só no JPG: converter para WebP é a meta "Imagens leves" da Fase 2.

## 2. HTML
- [ ] `lang="pt-BR"`, `<title>` preenchido, um `<h1>` e `<main>`.
- [ ] **Topo:** `<picture>` com `hero-desktop.jpg` a partir de `48rem` e `hero-celular.jpg` no `<img>`.
- [ ] As duas versões do topo têm seus próprios `width` e `height`: no `<source>` e no `<img>`, porque as proporções são diferentes.
- [ ] O topo **não** tem `loading="lazy"`.
- [ ] **Seção de texto:** um `<section>` com título e um parágrafo entre o topo e a galeria (é usado no passo 3).
- [ ] **Galeria:** um `<section>` com título e as 3 fotos, cada uma com `src`, `srcset`, `sizes`, `width`, `height` e `loading="lazy"`.
- [ ] Todo `alt` descreve a foto: nada de "imagem 1" ou "foto da barbearia" repetido três vezes.

## 3. CSS mínimo
- [ ] A regra de `img` mostrada acima.
- [ ] Galeria com uma coluna no celular e três a partir de `48rem`, com a abordagem mobile-first (`min-width`).
- [ ] O `sizes` da galeria combina com esse layout: se a foto ocupa um terço da tela, ele precisa dizer isso.
- [ ] Seção de texto com `min-height: 300vh`. Esse espaço é só para o teste: o Chrome baixa imagens lazy que estão a cerca de 1250 px da tela, então, sem essa distância, parece que o lazy não funciona.

## 4. Teste final (Chrome, com F12 aberto na aba Network)
Preparação: marque **Disable cache**, filtre por **Img** e recarregue a página a cada teste. Sem isso, o navegador pode reaproveitar o arquivo que já baixou e enganar você.

Para simular as telas, use o modo **Responsive** do Device Toolbar (Ctrl+Shift+M), com densidade (DPR) em **1**.

- [ ] **375 px:** baixou `hero-celular.jpg` e não baixou `hero-desktop.jpg`.
- [ ] **1440 px:** baixou `hero-desktop.jpg` e não baixou `hero-celular.jpg`.
- [ ] **Topo da página:** as fotos da galeria ainda não aparecem na lista da Network.
- [ ] **Rolando até a galeria:** as fotos aparecem na lista.
- [ ] **Galeria em 375 px:** baixou as versões `-400`.
- [ ] **Galeria em 1440 px:** baixou as versões `-800`. Cada foto ocupa um terço da tela (cerca de 480 px), então a de 400 px ficaria pequena.
- [ ] **Sem pulos:** com a rede em Slow 4G, o texto não muda de lugar quando a imagem do topo termina de carregar.
- [ ] **Topo no celular:** a foto vertical mostra bem o assunto, sem parecer uma foto larga espremida.
- [ ] **Acessibilidade:** Lighthouse → Acessibilidade = 100.

## 5. Saber explicar (sem consultar)
- [ ] Qual é a diferença entre `<picture>` e `srcset` + `sizes`, e quando usar cada um?
- [ ] O que significa `800w`?
- [ ] O que aconteceria se o `sizes` estivesse errado?
- [ ] Por que a imagem do topo não leva `loading="lazy"`?
- [ ] Se o CSS controla o tamanho da imagem, para que servem `width` e `height` no HTML?

## A meta só está concluída quando
- [ ] Todas as caixas dos passos 1 a 5 estiverem marcadas.
- [ ] Você mostrar o resultado da Network dos testes e passar pela revisão crítica do Claude.
- [ ] Os problemas apontados na revisão estiverem corrigidos.
- [ ] O commit estiver feito, com mensagem em português, curta e descritiva, e sem arquivos fora do desafio.
