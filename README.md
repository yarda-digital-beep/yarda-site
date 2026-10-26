# yarda · site institucional

Site de página única da yarda: tecnologia e IA para pequenas e médias empresas.

- **Copy:** roteiro "Site yarda — Roteiro de copy e seções" e Manual de Identidade Verbal da yarda.
- **Visual:** Guia de Marca da yarda (cores, tipografia Bricolage Grotesque + Montserrat, traço "Y"), com Noite como cor principal.
- **Tecnologia:** HTML, CSS e JavaScript puros. O blog e o glossário usam o Jekyll que o próprio GitHub Pages roda a cada push, sem serviço extra.

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

A página inicial abre com qualquer servidor estático:

```bash
python3 -m http.server 8000
# abra http://localhost:8000
```

Para ver o blog e o glossário, use o Jekyll (precisa de Ruby; `brew install ruby` no Mac):

```bash
bundle config set --local path vendor/bundle
bundle install
bundle exec jekyll serve
# abra http://localhost:4000
```

Com Ruby 3.2 ou mais novo, o Jekyll 3.9 do GitHub Pages precisa de um ajuste de compatibilidade só no computador: rode com `RUBYOPT="-r./_dev/ruby-compat.rb"` (o arquivo define `tainted?`, removido do Ruby).

## Blog

- Cada artigo é um arquivo Markdown em `_posts/AAAA-MM-DD-slug.md`. O endereço fica `/blog/slug/`.
- Campos obrigatórios no topo do arquivo: `title` (até ~60 caracteres), `description` (até ~155), `date`, `categoria` e `image` (`path` e `alt`).
- Opcionais: `last_modified_at` (ao atualizar o texto), `faq` (lista de `pergunta` e `resposta`; vira seção de perguntas e dados estruturados) e `author` (chave de `_data/authors.yml`).
- Categorias ficam em `_data/categorias.yml`. Cada uma tem página em `blog/categoria/<slug>/` e uma capa em `assets/img/blog/capa-<slug>.png`.
- Use `##` para as seções principais (elas viram o sumário) e `###` para subseções.
- Blocos especiais no Markdown: escreva o parágrafo e, na linha de baixo, `{: .destaque}` ou `{: .cta-inline}`.

### Posts agendados

- Para agendar, basta dar ao post uma data futura (no nome do arquivo e no campo `date`, sempre às `08:00:00 -0300`). O Jekyll do GitHub Pages não publica posts com data futura, então ele fica fora do site, do feed e do sitemap até o dia certo.
- O workflow `.github/workflows/publicar-posts-agendados.yml` roda de segunda a sexta às 8h15 (Brasília). Se existir um post com a data do dia, ele pede um novo build do GitHub Pages e o post entra no ar.
- Para publicar na hora (ou num sábado ou domingo), abra a aba **Actions → Publicar posts agendados → Run workflow** e marque "Pedir o build mesmo sem post com a data de hoje".
- Calendário editorial: um post de cada linha por semana (Gargalos na prática, IA na prática e Gestão na prática), nunca dois no mesmo dia.
- O GitHub desliga workflows agendados de repositórios públicos depois de 60 dias sem nenhum commit. Se isso acontecer, a aba Actions mostra um aviso com o botão para reativar.

## Glossário

- Cada termo é um arquivo em `_glossario/slug.md`. O endereço fica `/glossario/slug/`.
- Campos: `termo`, `title`, `description`, `area` (negocios, vendas, operacoes, ia ou tecnologia), `resumo` (definição direta em 2 frases), `relacionados` (slugs de outros termos), `last_modified_at`. Opcionais: `h1` (quando o termo não é sigla, para o título sair em minúsculas), `nome_completo` e `sinonimos` (entram na busca).
- O índice em `/glossario/` é montado sozinho, com busca, filtro por área e A–Z.

## SEO

Gerado automaticamente a cada publicação: `title` e `description`, URL canônica, Open Graph, `sitemap.xml`, `robots.txt`, feed RSS em `/blog/feed.xml` e dados estruturados (BlogPosting, FAQPage, DefinedTerm, BreadcrumbList; Organization na página inicial).

## Publicar no GitHub Pages

1. Em **Settings → Pages**, escolha a branch `main` e a pasta `/ (root)`.
2. Para usar o domínio próprio, adicione um arquivo `CNAME` com o domínio (ex.: `yarda.ai`) e configure o DNS.

## Configuração (assets/js/main.js)

| Item | O que fazer |
| --- | --- |
| `whatsapp` | Preencher com DDI + DDD + número, só dígitos (ex.: `5582999999999`). Enquanto estiver vazio, os botões de WhatsApp ficam escondidos. |
| `formEndpoint` | Já aponta para `contato@yarda.digital` via FormSubmit. No primeiro envio chega um e-mail de ativação nesse endereço. Depois de ativar, troque o e-mail no endereço pelo código aleatório que o FormSubmit fornece. |

## Pendências antes de publicar

**SEO**
- [x] Cadastrar `yarda.digital` no Google Search Console.
- [ ] Enviar `https://yarda.digital/sitemap.xml` no Search Console (menu Sitemaps).
- [ ] Autor real (nome, cargo, foto, LinkedIn) em `_data/authors.yml`.
- [ ] Links do LinkedIn e Instagram em `_config.yml` (`social.links`).


**Marca**
- [ ] Monograma `yar/da` e traço "Y" foram vetorizados a partir das imagens enviadas (o arquivo `.ai` chegou corrompido). Para fidelidade total, exportar SVG do Illustrator e substituir `assets/img/monograma-*.svg`, `assets/img/y-traco.svg` e o símbolo `#y-traco` no `index.html` e no `404.html`.
- [ ] Logo horizontal `yarda.ai` ainda não foi enviado; o cabeçalho usa o monograma.
- [ ] Confirmar domínio e e-mail oficiais: o guia visual usa `yarda.ai`; o formulário e o rodapé usam `contato@yarda.digital`.

**Conteúdo**
- [ ] Validar os cinco serviços (nomes e escopo).
- [ ] Escolher o título do hero.
- [ ] Validar os setores da seção "Para quem é".
- [ ] Confirmar autorização de uso dos 12 logos de clientes (em `assets/img/clientes/`, versão branca de uma cor só).
- [ ] Definir se o diagnóstico é gratuito e o prazo de retorno após o formulário (entram na FAQ e na mensagem de sucesso).

**Contato e legal**
- [ ] Número de WhatsApp, links de LinkedIn e Instagram, dias e horários de atendimento.
- [ ] Razão social e CNPJ no rodapé.
- [ ] Revisar a Política de Privacidade com assessoria jurídica.

## Fase 2

Seção "Clientes e resultados" (case com número real e depoimentos autorizados) fica para um segundo momento, conforme o roteiro.
