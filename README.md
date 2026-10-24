# yarda · site institucional

Site de página única da yarda: tecnologia e IA para pequenas e médias empresas.

- **Copy:** roteiro "Site yarda — Roteiro de copy e seções" e Manual de Identidade Verbal da yarda.
- **Visual:** Guia de Marca da yarda (cores, tipografia Bricolage Grotesque + Montserrat, traço "Y"), com Noite como cor principal.
- **Tecnologia:** HTML, CSS e JavaScript puros. Sem etapa de build e sem dependências.

## Estrutura

```
index.html            página principal
privacidade.html      política de privacidade (versão provisória)
404.html              página de erro
assets/css/styles.css estilos e tokens de marca
assets/js/main.js     menu, WhatsApp e formulário (configuração no topo)
assets/img/           monograma (Areia, Coral, Noite), traço "Y", favicon
```

## Rodar localmente

```bash
python3 -m http.server 8000
# abra http://localhost:8000
```

## Publicar no GitHub Pages

1. Em **Settings → Pages**, escolha a branch `main` e a pasta `/ (root)`.
2. Para usar o domínio próprio, adicione um arquivo `CNAME` com o domínio (ex.: `yarda.ai`) e configure o DNS.

## Configuração (assets/js/main.js)

| Item | O que fazer |
| --- | --- |
| `whatsapp` | Preencher com DDI + DDD + número, só dígitos (ex.: `5582999999999`). Enquanto estiver vazio, os botões de WhatsApp ficam escondidos. |
| `formEndpoint` | Já aponta para `contato@yarda.digital` via FormSubmit. No primeiro envio chega um e-mail de ativação nesse endereço. Depois de ativar, troque o e-mail no endereço pelo código aleatório que o FormSubmit fornece. |

## Pendências antes de publicar

**Marca**
- [ ] Monograma `yar/da` e traço "Y" foram vetorizados a partir das imagens enviadas (o arquivo `.ai` chegou corrompido). Para fidelidade total, exportar SVG do Illustrator e substituir `assets/img/monograma-*.svg`, `assets/img/y-traco.svg` e o símbolo `#y-traco` no `index.html` e no `404.html`.
- [ ] Logo horizontal `yarda.ai` ainda não foi enviado; o cabeçalho usa o monograma.
- [ ] Confirmar domínio e e-mail oficiais: o guia visual usa `yarda.ai`; o formulário e o rodapé usam `contato@yarda.digital`.

**Conteúdo**
- [ ] Validar os cinco serviços (nomes e escopo).
- [ ] Escolher o título do hero.
- [ ] Validar os setores da seção "Para quem é".
- [ ] Confirmar autorização de uso dos 14 nomes de clientes e trocar por logos (SVG) quando houver.
- [ ] Definir se o diagnóstico é gratuito e o prazo de retorno após o formulário (entram na FAQ e na mensagem de sucesso).

**Contato e legal**
- [ ] Número de WhatsApp, links de LinkedIn e Instagram, dias e horários de atendimento.
- [ ] Razão social e CNPJ no rodapé.
- [ ] Revisar a Política de Privacidade com assessoria jurídica.

## Fase 2

Seção "Clientes e resultados" (case com número real e depoimentos autorizados) fica para um segundo momento, conforme o roteiro.
