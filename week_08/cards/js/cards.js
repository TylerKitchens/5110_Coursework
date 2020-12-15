
var cards = ["10C.jpg","10D.jpg","10H.jpg","10S.jpg","2C.jpg","2D.jpg","2H.jpg","2S.jpg","3C.jpg","3D.jpg","3H.jpg","3S.jpg","4C.jpg","4D.jpg","4H.jpg","4S.jpg","5C.jpg","5D.jpg","5H.jpg","5S.jpg","6C.jpg","6D.jpg","6H.jpg","6S.jpg","7C.jpg","7D.jpg","7H.jpg","7S.jpg","8C.jpg","8D.jpg","8H.jpg","8S.jpg","9C.jpg","9D.jpg","9H.jpg","9S.jpg","AC.jpg","AD.jpg","AH.jpg","AS.jpg","JC.jpg","JD.jpg","JH.jpg","JS.jpg","KC.jpg","KD.jpg","KH.jpg","KS.jpg","QC.jpg","QD.jpg","QH.jpg","QS.jpg"]
var usedCards = []
setList()
//clone copy
var cardsCopy = [...cards]
let deck = document.querySelector("#deck")
let deck2 = document.querySelector("#deck2")

//shuffle cards, x is which div to target
function shuffle(x){
    if(cards.length < 5){
        alert("please add more cards back to deck")
        return
    }
    if(x ==1){
        deck.innerHTML = ""
    }else{
        deck2.innerHTML = ""
    }
  
    for(let i = 0; i<5; i++ ){
        let outcome = Math.floor(Math.random() * cards.length)

        if(x == 1){
            deck.innerHTML += "<img src='./cards/" + cards[outcome] + "' />"
        }else{
            deck2.innerHTML += "<img src='./cards/" + cards[outcome] + "' />"
        }

        usedCards.push(cards[outcome])
        cards.splice(outcome, 1)
       // $('img').draggable()
    }

setList()
   
}

function addBack(){
    if(usedCards.length >= 5){
        for(let j = 0; j < usedCards.length; j++){
            cards.push(usedCards[j])
        }
        usedCards = []
        setList()
    }else{
        alert("No cards in discard pile")
    }
   
}

function reset(){
    location.reload()
}


function setList(){
    document.querySelector("#deckList").innerHTML = ""
    document.querySelector("#discard").innerHTML = ""
    for(let i = 0; i< cards.length; i++){
        document.querySelector("#deckList").innerHTML += "<img src='./cards/" + cards[i] + "' width='50px' />"
    }
    for(let i = 0; i< usedCards.length; i++){
        document.querySelector("#discard").innerHTML += "<img src='./cards/" + usedCards[i] + "' width='50px' />"
    }

}

