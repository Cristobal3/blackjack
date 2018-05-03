
  
//Constructers and general Functions
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function ace() {
    if (confirm("You drew an Ace! Pressing OK will count the Ace as 1 point and canceling will default it to 11.")) {
        return true }
    else {return false}
    }

function Card(point,suit) {
      this.point = point;
      this.suit = suit;
      return this.point

  }
function Hand(name) {
    this.total = 0;
    this.list = [];
    this.name = name;
    
}

function Deck() {
    this.deck = {};
    this.type = ['C','H','S','D'];
    for(var i=0;i<4; i++) {
        this.deck[this.type[i]] = []
        for (var x=2; x<15; x++){
            this.deck[this.type[i]].push.apply(this.deck[this.type[i]],[x]);
        }
    }
    console.log(this.deck)
}
//Methods
Hand.prototype.addCard = function(card) {
    
    if (card.point === 11 || card.point === 12 || card.point === 13) {
        this.total += 10;
    }
    else if (card.point === 14) {
        if (ace()) {this.total +=1}
    
       else {this.total += 11}
    }else {this.total += card.point}

    return card.getImageUrl()
    }
    
    

Hand.prototype.getPoints = function() {console.log(this.total)}
Card.prototype.getImageUrl = function () {
    let point = this.point;
   
    switch(point) {
        case 11:
        
        point = 'J';
        break;
        case 12:
        point = 'Q';
        break;
        case 13:
        point = 'K';
        break;
        case 14:
        point = 'A';

    }
  
    var img = 'JPEG/' + point + this.suit +'.jpg';
    this.list += [img];
    console.log(img)
    return img
}
Deck.prototype.draw = function() {
    var select2 = this.type[getRndInteger(0,3)];
    var select =getRndInteger(0,this.deck[select2].length-1);
    var value = this.deck[select2][select];
    this.deck[select2].splice(select, 1)
    var remainder = this.deck['C'].length + this.deck['H'].length + this.deck['S'].length + this.deck['D'].length;
    console.log(`you drew ${value + select2}`)
    console.log(`Cards remaining ${remainder}`)
    return new Card(value,select2)
    

}

//Button Methods
var d = 0;
function deal(phand,dhand,player1,player2,deck) {
    
    if (d === 0){
        for (var i = 0; i<2;i++){
    //deck draw
    var card1=player1.addCard(deck.draw())
    var card2=player2.addCard(deck.draw())
    var pimg = document.createElement('img')
    pimg.setAttribute("src",card1);
    var dimg = document.createElement('img')
    dimg.setAttribute("src",card2);


    //image update
    phand.appendChild(pimg)
    dhand.appendChild(dimg)
    
    //point update
    ppoint.innerHTML = "Player: " + player1.total;
    dpoint.innerHTML = "Dealer: " + player2.total;
    }} else {}
    d += 1;

    

}
function hit(phand,dhand,player1,player2,deck) {
    var card1=player1.addCard(deck.draw())
    var pimg = document.createElement('img')
    pimg.setAttribute("src",card1);
    phand.appendChild(pimg)
    console.log(player1.total)
    ppoint.innerHTML = "Player: " + player1.total;
    dpoint.innerHTML = "Dealer: " + player2.total;
    if (player1.total >21) {
        if(confirm('You busted! DEALER WINS! Would you like to play again?')) {
            location.reload();
        } 
    }
}

function stand(phand,dhand,player1,player2,deck) {
    if (d === 1) {
        if (player2.total > player1.total){
            if(confirm('You lose. Dealer scored higher. Play again?')){
                location.reload();
            }
            
        } else if (player2.total < player1.total){
            if(confirm('You win! Play again?')) { location.reload();}

        } else {if(confirm('Its a tie! Up for another round?')){location.reload();}}
    }
}

/*
var myCard = new Card(5, 'D')
myCard.getImageUrl()
var myHand = new Hand()
myHand.addCard(new Card(5, 'diamonds'))
myHand.addCard(new Card(13, 'spades'))
myHand.getPoints()
*/

(function game(){
     deck = new Deck();
     player1 = new Hand('player');
     player2 = new Hand('dealer');
     phand = document.getElementById("phand")
     dhand = document.getElementById("dhand")
     ppoint = document.getElementById("player-points")
     dpoint = document.getElementById("dealer-points")
    //var b1 = document.getElementById("deal-button")
    //b1.addEventListener("click",deal(phand,dhand,player1,player2,deck));
    // console.log(x)
    // console.log(dhand)
    // var pimg = document.createElement("img");
    // pimg.setAttribute("src",x);
    // console.log(pimg)
    // dhand.appendChild(pimg)
    
}());
