function randomNumber(){
    //between 2-11
    let number=Math.floor(Math.random()*13)+1
    if(number===1){
        return 11
    }else if(number>10){
        return 10
    }else{
        return number
    }
}

let cards=[]
let sum =0
let hasBlackJack = false
let isAlive = false
let message = ""



// 1. Store the message-el paragraph in a variable called messageEl
let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
let cardsEl=document.getElementById("cards-el")
let playerEl=document.getElementById("player-el")

let player={
    name:"Per",
    chips:145
}

playerEl.textContent=player.name+": $"+player.chips


function startGame(){
    let firstCard=randomNumber(),secondCard=randomNumber()
    cards=[firstCard,secondCard]
 
    sum=firstCard+secondCard
    isAlive=true


    renderGame()
}


function renderGame() {
    sumEl.textContent="Sum: "+sum
    content="Cards: "+cards[0]+","+cards[1]
    
    for(let i=2;i<cards.length;i++){
        content+=","+cards[i]
    }
    cardsEl.textContent=content
   
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    // 2. Display the message in the messageEl using messageEl.textContent
    messageEl.textContent=message

    //console.log(message)    
}

function newCard(){
    if(isAlive && !hasBlackJack){
        let card=randomNumber()
        sum+=card
        cards.push(card) 
        renderGame()
    }
}
