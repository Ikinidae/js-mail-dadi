const buttonNum = document.querySelector("button");
const userOutput = document.querySelector(".user");
const pcOutput = document.querySelector(".pc");
const winner = document.querySelector(".message");

// generare numero random per computer e utente
buttonNum.addEventListener("click",
    function () {
        const userNum = Math.floor((Math.random() * 6) + 1);
        userOutput.append(userNum);

        const pcNum = Math.floor((Math.random() * 6) + 1);
        pcOutput.append(pcNum);

        if (userNum > pcNum) {
            winner.append("Ha vinto l'utente")
        } else if (userNum == pcNum) {
            winner.append("Pareggio")
        } else {
            winner.append("Ha vinto il computer")
        }
    }
)

// confrontare i due numeri e stabilire qual è il più alto
// stampare il numero maggiore come vincitore