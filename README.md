# FindGitHubUser 🔍

Un'applicazione web semplice e veloce per cercare i profili degli utenti su GitHub. Inserendo un *username*, l'app interroga l'API pubblica di GitHub e restituisce all'istante i dati essenziali del profilo: nome, login, numero di follower e utenti seguiti (following).

Questo progetto è nato come esercizio pratico per padroneggiare la programmazione asincrona in JavaScript moderno.

## 🚀 Demo

Puoi visualizzare il progetto live qui: [[Link alla Demo]](https://aledev2026.github.io/FindGitHubUser/)

## 🚀 Caratteristiche

- **Ricerca in tempo reale:** Recupero rapido dei dati dell'utente tramite la funzione `fetch`.
- **Aggiornamento dinamico del DOM:** I risultati (Nome, Login, Followers, Following) vengono stampati direttamente sulla pagina.
- **Gestione degli Errori:** Gestione pulita dei casi in cui l'utente non esiste (Errore 404), con la comparsa di un messaggio personalizzato a schermo.
- **Sintassi Moderna:** Utilizzo esclusivo di `async/await` e blocchi `try...catch` per un codice pulito, leggibile e professionale.

## 🛠️ Tecnologie Utilizzate

- **HTML5** - Per la struttura dell'interfaccia.
- **Vanilla JavaScript** - Per la logica, le chiamate di rete e la manipolazione del DOM.
- **GitHub REST API** - Per recuperare i dati in formato JSON (`https://api.github.com/users/{username}`).

## 💻 Come avviare il progetto localmente

Trattandosi di un progetto puramente frontend senza dipendenze (niente Node.js o NPM), avviarlo è semplicissimo:

1. Clona questo repository sul tuo computer:
   ```bash
   git clone [https://github.com/aledev2026/FindGitHubUser.git](https://github.com/aledev2026/FindGitHubUser.git)
Entra nella cartella del progetto.

Apri il file index.html direttamente nel tuo browser preferito (Chrome, Firefox, Safari, ecc.).

Inserisci un username di GitHub (es: aledev2026) e clicca su "Cerca"!
