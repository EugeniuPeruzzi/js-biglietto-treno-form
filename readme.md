PROBLEMA:   Creare un programma che chiede all'utente quanti kilometri deve percorrere e la sua eta. In base ai dati ricevuti dobbiamo calcolare
            un sconto di 20% per i minori di eta 18 e/o uno sconto di 40% per gli over 65 sapendo che il prezzo del biglietto e di 0.21$ a km.

SOLUZIONE: 

1 - Creo un file HTML con gli input text dove chiedo di inserire il nome completo, i km da percore e l'eta del utente
2 - Con l'utilizzo di js estrago i datti dal DOM 
3 - Dichiaro le variabili ed elaboro i dati
    3.1 - Se utente minore applico lo sconto 20%
    3.2 - Se utente magiorenne applico lo sconto 40%
    3.3 - Altrimenti procedo con la tarifa standart
4 - Una volta elaborato i dati e deciso il percorso stampo a schermo il biglietto