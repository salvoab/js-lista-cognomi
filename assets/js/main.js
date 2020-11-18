/*******************
* Chiedere all’utente il cognome
* inserirlo in un array con altri cognomi: "Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"
* stampa la lista ordinata alfabeticamente
* scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova
*********************/

var listaCognomi = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];
var spanCognomeUtente = document.getElementById("cognome-utente");
var spanPosizioneCognome = document.getElementById("posizione-cognome");
var cognomeRichiesto, posizioneCognomeRichiesto;

//Richiedo un cognome con il prompt, e continuo a chiederlo se l'utente seleziona Annulla dal prompt
do{
    cognomeRichiesto = prompt("Inserisci il tuo cognome");
} while(cognomeRichiesto == null);

//Istruzioni per rendere solo la prima lettera del cognome maiuscola
cognomeRichiesto = cognomeRichiesto.toLowerCase();
cognomeRichiesto = cognomeRichiesto.charAt(0).toUpperCase() + cognomeRichiesto.slice(1);

listaCognomi.push(cognomeRichiesto);
listaCognomi.sort();

for(var i=0; i<listaCognomi.length; i++){
    var cognome = listaCognomi[i];
    var htmlList = document.getElementById("lista-cognomi").innerHTML;
    document.getElementById("lista-cognomi").innerHTML = htmlList + "<li>" + cognome + "</li>";
    if(cognome == cognomeRichiesto){
        posizioneCognomeRichiesto = i + 1;
    }
}

spanCognomeUtente.innerHTML = '"' + cognomeRichiesto + '"';
spanPosizioneCognome.innerHTML = ": " + posizioneCognomeRichiesto;
