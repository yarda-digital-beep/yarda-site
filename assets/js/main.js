/* =========================================================
   yarda · scripts do site
   ========================================================= */

/* ---- Configuração: edite aqui ---- */
const CONFIG = {
  // Número do WhatsApp com DDI e DDD, só dígitos. Ex.: "5582999999999".
  // Enquanto estiver vazio, os botões de WhatsApp ficam escondidos.
  whatsapp: "",
  whatsappMensagem: "Oi! Vim pelo site da yarda e quero entender como destravar minha operação.",

  // Para onde vão os contatos do formulário (via FormSubmit.co).
  // Depois do primeiro envio, o FormSubmit manda um e-mail de ativação para este endereço.
  // Após ativar, troque o e-mail pelo código aleatório que eles fornecem, para não deixá-lo exposto.
  formEndpoint: "https://formsubmit.co/ajax/contato@yarda.digital",
};

/* ---- Menu no celular ---- */
const toggle = document.querySelector(".menu-toggle");
const menu = document.getElementById("menu");
if (toggle && menu) {
  toggle.addEventListener("click", () => {
    const aberto = menu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(aberto));
    toggle.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
  });
  menu.querySelectorAll("a").forEach((link) =>
    link.addEventListener("click", () => {
      menu.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Abrir menu");
    })
  );
}

/* ---- WhatsApp ---- */
const numero = CONFIG.whatsapp.replace(/\D/g, "");
document.querySelectorAll("[data-whatsapp-block]").forEach((el) => {
  el.hidden = !numero;
});
if (numero) {
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(CONFIG.whatsappMensagem)}`;
  document.querySelectorAll("[data-whatsapp-link]").forEach((a) => {
    a.href = url;
    a.target = "_blank";
    a.rel = "noopener";
  });
}

/* ---- Formulário de contato ---- */
const form = document.getElementById("form-contato");

if (form) {
  const telefone = form.querySelector("#whatsapp");

  // Máscara simples: (00) 00000-0000
  telefone.addEventListener("input", () => {
    const d = telefone.value.replace(/\D/g, "").slice(0, 11);
    let v = d;
    if (d.length > 2) v = `(${d.slice(0, 2)}) ${d.slice(2)}`;
    if (d.length > 7) v = `(${d.slice(0, 2)}) ${d.slice(2, d.length - 4)}-${d.slice(-4)}`;
    telefone.value = v;
  });

  const validar = (campo) => {
    const wrap = campo.closest(".field");
    const erro = wrap.querySelector(".field-error");
    let ok = true;

    if (campo.type === "checkbox") ok = campo.checked;
    else if (campo.type === "email") ok = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(campo.value.trim());
    else if (campo.type === "tel") ok = [10, 11].includes(campo.value.replace(/\D/g, "").length);
    else ok = campo.value.trim() !== "";

    wrap.classList.toggle("has-error", !ok);
    erro.textContent = ok ? "" : campo.dataset.error;
    campo.setAttribute("aria-invalid", String(!ok));
    if (!ok) campo.setAttribute("aria-describedby", erro.id);
    else campo.removeAttribute("aria-describedby");
    return ok;
  };

  const campos = [...form.querySelectorAll("[required]")];
  campos.forEach((campo) => {
    const evento = campo.tagName === "SELECT" || campo.type === "checkbox" ? "change" : "blur";
    campo.addEventListener(evento, () => {
      if (campo.closest(".field").classList.contains("has-error") || campo.value) validar(campo);
    });
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const status = form.querySelector(".form-status");
    status.textContent = "";
    status.classList.remove("is-error");

    const invalidos = campos.filter((c) => !validar(c));
    if (invalidos.length) {
      invalidos[0].focus();
      return;
    }

    const botao = form.querySelector("button[type=submit]");
    const textoBotao = botao.textContent;
    botao.disabled = true;
    botao.textContent = "Enviando...";

    const dados = Object.fromEntries(new FormData(form));
    dados._subject = `Novo contato pelo site: ${dados.empresa}`;
    dados._template = "table";
    dados._captcha = "false";

    try {
      const resp = await fetch(CONFIG.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(dados),
      });
      if (!resp.ok) throw new Error(String(resp.status));

      const primeiroNome = dados.nome.trim().split(/\s+/)[0];
      const sucesso = document.querySelector(".form-success");
      sucesso.querySelector("[data-success-name]").textContent = primeiroNome;
      form.hidden = true;
      sucesso.hidden = false;
      sucesso.focus();
    } catch (err) {
      status.classList.add("is-error");
      status.textContent = numero
        ? "Algo deu errado no envio. Tente de novo em instantes ou fale direto com a gente pelo WhatsApp."
        : "Algo deu errado no envio. Tente de novo em instantes ou escreva para contato@yarda.digital.";
      botao.disabled = false;
      botao.textContent = textoBotao;
    }
  });
}
