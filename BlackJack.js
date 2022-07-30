let count = 0;
let nbDeck = 6
let countDisp = document.getElementById("counter")

function add1(){
    count++;
    countDisp.innerText = count / nbDeck;
}

function remove1(){
    count--;
    countDisp.innerText = count / nbDeck;
}

function deckSet( newNbDeck ){
    if(newNbDeck > 0){
        nbDeck = newNbDeck;
        countDisp.innerText = count / nbDeck
    }
}
