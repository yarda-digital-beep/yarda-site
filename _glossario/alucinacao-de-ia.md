---
termo: Alucinação de IA
h1: "O que é alucinação de IA"
title: "O que é alucinação de IA? Por que acontece e como evitar"
description: "Alucinação de IA é quando um modelo inventa uma informação com aparência de verdade. Entenda por que acontece e como reduzir esse risco na sua empresa."
area: ia
resumo: "Alucinação de IA é quando um modelo de inteligência artificial gera uma informação falsa ou sem base, mas apresentada com aparência de verdade. Pode ser um dado errado, uma fonte inexistente ou uma resposta que não corresponde à realidade."
sinonimos: [alucinação, invenção de IA, erro de IA]
relacionados: [llm, rag, base-de-conhecimento, ia-generativa]
last_modified_at: 2026-10-23
---

## Por que acontece

[LLMs](/glossario/llm/) geram texto prevendo a continuação mais provável. Eles não consultam uma lista de fatos verdadeiros. Quando falta informação, o modelo pode completar a lacuna com algo que soa correto, mas não é.

As chances aumentam quando:

- a pergunta é sobre algo específico da empresa que o modelo não conhece;
- o pedido é vago;
- a resposta exige números, datas ou fontes exatas.

## Exemplos

- Informar um prazo de entrega que a empresa não pratica.
- Citar uma lei, artigo ou estudo que não existe.
- Inventar um recurso de produto.
- Errar um cálculo e apresentar o resultado com confiança.

## Como reduzir o risco

1. **Dê à IA as informações certas.** Técnicas como [RAG](/glossario/rag/) fazem o modelo responder com base em documentos da empresa.
2. **Mantenha uma [base de conhecimento](/glossario/base-de-conhecimento/) atualizada.**
3. **Instrua o modelo a dizer "não sei"** quando a informação não estiver disponível.
4. **Revise o que é crítico,** como preços, prazos e informações legais.
5. **Teste com perguntas reais** antes de colocar em produção.

## Alucinação em PMEs

Ao usar IA no atendimento ou em documentos, o cuidado com alucinação protege a reputação da empresa. Um assistente que responde "vou confirmar com a equipe" é melhor do que um que inventa uma resposta.
