console.log('JS OK!');

/*
Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.
*/

const app = new Vue(
    {
        el: '#root',
        data: {
            message: 'Hello everyone, i\'m using Vue.js!',
            image: "img/01.jpg",
        }
    }
)