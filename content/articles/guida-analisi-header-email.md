---
title: "Analisi degli header email: primi controlli in un'indagine phishing"
description: Un flusso iniziale per interpretare Received, SPF, DKIM e DMARC senza confondere autenticazione e affidabilità.
category: DFIR
date: 2026-11-12
status: Published
cover: ""
---

Quando analizzi una mail sospetta, **gli header sono un punto di partenza**, non una prova definitiva che il messaggio sia legittimo o malevolo.

## Checklist iniziale

1. Conserva il messaggio originale in formato EML, se possibile.
2. Leggi la catena `Received` partendo dai server considerati attendibili.
3. Controlla gli esiti di **SPF, DKIM e DMARC** in `Authentication-Results`.
4. Confronta il dominio nel campo `From` con i domini autentificati e verifica l'allineamento DMARC.
5. Analizza link, allegati e indicatori senza aprirli direttamente sul computer di lavoro.

## Interpretare i risultati

Un messaggio con SPF o DKIM validi **può comunque essere phishing**: l'autenticazione dimostra proprietà tecniche sull'invio o sulla firma, non l'intenzione del mittente.

## Nota operativa

Non caricare email riservate o contenenti dati personali su servizi pubblici di analisi senza autorizzazione e senza valutare le implicazioni di riservatezza.

*Articolo introduttivo dimostrativo: ampliare con un caso di studio verificato prima di considerarlo una procedura completa.*
