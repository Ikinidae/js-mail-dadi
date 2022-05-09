// creo la lista di email
const listaEmail = ["giuseppe.acito.ga@gmail.com", "omarbuzzoni88@gmail.com", "giociotta@gmail.com", "cirino.simone99@gmail.com", "vincedinardo21@gmail.com", "mouhcine15.00@gmail.com", "federicaelia24@gmail.com", "dottorsf@gmail.com", "franc.davi00@gmail.com", "alessandro.fulco99@gmail.com", "gloria.gherardi87@gmail.com", "andrea19912014@gmail.com", "f.lepore.bis@gmail.com", "tommaso.lodesani@gmail.com", "pellegrini.matteo00@gmail.com", "pucciodaniele95@gmail.com", "andrea.scacchi.cras@gmail.com", "paolo.sergi.88@gmail.com", "mirko.simonetti.ta@gmail.com", "valente.giulia93@gmail.com", "claudiovarrosi@gmail.com", "davidevischetti@gmail.com"];

const inputEmail = document.querySelector("input");

const buttonEmail = document.querySelector("button");

const outputEmail = document.querySelector(".output");

// chiedo all'utente di inserire l'email, se questa è presente in listaEmail stampo messaggio x altrimenti messaggio y
buttonEmail.addEventListener("click",
    function() {
        let userEmail = inputEmail.value;

        if (listaEmail.includes(userEmail)) {
            outputEmail.append("Benvenuto!")
        } else {
            outputEmail.append("Non sei il benvenuto!")
        }
    }
)