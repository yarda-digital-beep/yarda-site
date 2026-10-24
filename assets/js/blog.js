/* =========================================================
   yarda · scripts do blog
   ========================================================= */

/* ---- Sumário do artigo, montado a partir dos H2 ---- */
const toc = document.querySelector(".toc");
const titulos = [...document.querySelectorAll(".prose h2[id]")];

if (toc && titulos.length >= 3) {
  const lista = toc.querySelector("ol");
  titulos.forEach((h) => {
    const item = document.createElement("li");
    const link = document.createElement("a");
    link.href = `#${h.id}`;
    link.textContent = h.textContent;
    item.appendChild(link);
    lista.appendChild(item);
  });
  toc.hidden = false;

  // Destaca no sumário a seção que está na tela
  const links = new Map([...lista.querySelectorAll("a")].map((a) => [a.hash.slice(1), a]));
  const observer = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((e) => {
        if (!e.isIntersecting) return;
        links.forEach((a) => a.classList.remove("is-ativo"));
        links.get(e.target.id)?.classList.add("is-ativo");
      });
    },
    { rootMargin: "-20% 0px -70% 0px" }
  );
  titulos.forEach((h) => observer.observe(h));
}

/* ---- Copiar link do artigo ---- */
document.querySelectorAll(".copiar-link").forEach((botao) => {
  botao.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(botao.dataset.url);
      botao.textContent = "Link copiado";
    } catch {
      botao.textContent = "Não deu para copiar";
    }
    setTimeout(() => (botao.textContent = "Copiar link"), 2500);
  });
});

/* ---- Links externos dentro do artigo abrem em nova aba ---- */
document.querySelectorAll(".prose a[href^='http']").forEach((a) => {
  if (a.host !== location.host) {
    a.target = "_blank";
    a.rel = "noopener";
  }
});

/* ---- Glossário: busca e filtro por área ---- */
const busca = document.getElementById("glossario-busca");
const itens = [...document.querySelectorAll(".glossario-lista li")];

if (busca && itens.length) {
  const botoes = [...document.querySelectorAll(".glossario-areas button")];
  const grupos = [...document.querySelectorAll(".glossario-grupo")];
  const contagem = document.querySelector("[data-contagem]");
  const vazio = document.querySelector(".glossario-vazio");
  const semAcento = (t) => t.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  let area = new URLSearchParams(location.search).get("area") || "";

  const filtrar = () => {
    const termo = semAcento(busca.value.trim());
    let total = 0;
    itens.forEach((li) => {
      const ok = (!area || li.dataset.area === area) && (!termo || semAcento(li.dataset.busca).includes(termo));
      li.hidden = !ok;
      if (ok) total++;
    });
    grupos.forEach((g) => (g.hidden = !g.querySelector("li:not([hidden])")));
    botoes.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.area === area)));
    contagem.textContent = total;
    vazio.hidden = total > 0;
  };

  busca.addEventListener("input", filtrar);
  botoes.forEach((b) =>
    b.addEventListener("click", () => {
      area = b.dataset.area;
      const url = new URL(location.href);
      if (area) url.searchParams.set("area", area);
      else url.searchParams.delete("area");
      history.replaceState(null, "", url);
      filtrar();
    })
  );
  filtrar();
}
