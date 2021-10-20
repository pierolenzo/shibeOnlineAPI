# Angular - Exercise 11

## Utilizzare questa API: <https://shibe.online/>

- Creare un modulo form, con un componente al suo interno che verrà caricato per primo
- In questo componente sarà presente un semplice form, nel quale l'utente potrà inserire:
  - Attraverso una select che animale vuole visualizzare: `Cats, Birds, Shibes`
  - Attraverso un `input number` quante foto vuole visualizzare
- Una volta inseriti questi dati e cliccherà sul pulsante `Invia` l'utente verrà reindirizzato su un altro path `/gallery` che corrisponderà al componente `gallery-component` del modulo, **caricato in lazy-loading**,  `gallery-module`
- Nel componente `gallery-component` l'utente visualizzerà una lista di immagini recuperate dalla chiamata api.
