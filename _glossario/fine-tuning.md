---
termo: Fine-tuning
h1: "O que é fine-tuning"
title: "O que é fine-tuning? Quando ajustar um modelo de IA"
description: "Fine-tuning é ajustar um modelo de IA pronto com exemplos específicos para uma tarefa. Veja quando faz sentido, a diferença para RAG e cuidados."
area: ia
resumo: "Fine-tuning é o processo de ajustar um modelo de inteligência artificial já treinado usando exemplos específicos de uma tarefa ou empresa. O modelo passa a responder num formato, estilo ou domínio mais próximo do desejado."
sinonimos: [ajuste fino, ajuste de modelo, fine tuning]
relacionados: [treinamento-de-modelo, rag, llm, prompt]
last_modified_at: 2026-10-24
---

## Quando faz sentido

- A tarefa exige um **formato ou estilo muito específico** e consistente.
- Há **muitos exemplos de qualidade** de entradas e saídas esperadas.
- Bons [prompts](/glossario/prompt/) e [RAG](/glossario/rag/) já foram testados e não bastaram.

## Fine-tuning e RAG

- **[RAG](/glossario/rag/)** dá ao modelo acesso a informações atualizadas na hora de responder. Ideal para conhecimento que muda, como políticas, preços e produtos.
- **Fine-tuning** muda o comportamento do modelo. Ideal para formato, tom e tarefas muito repetitivas.

Na maioria dos casos de empresas, o RAG com boas instruções resolve antes de precisar de fine-tuning. Os dois também podem ser combinados.

## Cuidados

- **Os exemplos definem o resultado.** Exemplos ruins ou enviesados geram um modelo ruim.
- **Custo e manutenção:** o modelo ajustado precisa ser reavaliado quando a tarefa ou o modelo de base mudam.
- **Dados sensíveis:** os exemplos usados no ajuste precisam respeitar a [LGPD](/glossario/lgpd/).

## Fine-tuning em PMEs

Para PMEs, fine-tuning raramente é o primeiro passo. Começar com modelos prontos, instruções padronizadas e uma boa base de conhecimento costuma entregar a maior parte do valor com menos custo.
