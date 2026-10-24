---
termo: Webhook
h1: "O que é webhook"
title: "O que é webhook? Diferença para API e exemplos de uso"
description: "Webhook é um aviso automático que um sistema envia para outro quando algo acontece. Entenda a diferença para API e exemplos de uso em automações."
area: tecnologia
resumo: "Webhook é um aviso automático que um sistema envia para outro assim que um evento acontece, como uma venda aprovada ou um formulário preenchido. Em vez de um sistema perguntar repetidamente se há novidade, o outro avisa na hora."
sinonimos: [web hook, gatilho, notificação automática entre sistemas]
relacionados: [api, integracao-de-sistemas, automacao-de-processos, no-code]
last_modified_at: 2026-10-23
---

## Webhook e API: qual a diferença

- Com uma **[API](/glossario/api/)**, o seu sistema pergunta: "tem pedido novo?". Se perguntar a cada minuto, faz muitas consultas à toa.
- Com um **webhook**, o outro sistema avisa: "acabou de chegar um pedido novo". A informação chega no momento certo, sem consultas repetidas.

Na prática, os dois são usados juntos: o webhook avisa, e a API busca ou grava os detalhes.

## Exemplos de uso

- Pagamento aprovado → liberar o pedido e avisar o cliente.
- Formulário do site enviado → criar o contato no CRM.
- Mensagem recebida no WhatsApp → abrir atendimento no sistema.
- Assinatura cancelada → avisar o time de sucesso do cliente.

## Como funciona, em termos simples

1. Você informa ao sistema de origem um endereço (URL) que deve ser avisado.
2. Quando o evento acontece, o sistema envia os dados para esse endereço.
3. O sistema de destino recebe e executa a ação combinada.

Ferramentas [no-code](/glossario/no-code/) costumam oferecer esse endereço pronto, sem programação.

## Cuidados

- Verifique se o aviso realmente veio do sistema esperado.
- Trate falhas: se o destino estiver fora do ar, o aviso precisa ser reenviado.

## Webhook em PMEs

Webhooks são a base de muitas automações simples e baratas. Eles permitem que a operação reaja na hora a eventos importantes, sem alguém ficar conferindo telas.
