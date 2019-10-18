//Dice Game

//Function Play Buttons
document.getElementById('play-btn').addEventListener('click', playgame);
document.getElementById('purchase-btn').addEventListener('click', purchase);


//Global Variable /Variables for betting and funds 
let funds = 5000

//Function Rolling Die
function playgame() {
    let playerDie1 = Math.random();
    let houseDie1 = Math.random();
    let playerDie2 = Math.random();
    let houseDie2 = Math.random();


    //Die Value
    let playerdie = 0
    let housedie = 0
    //Player Dice roll

    if (playerDie1 > 0.83) {
        document.getElementById('player-die').src = "images/Dice1.jpg"
        playerdie += 1;

    }
    //2 die
    else if (playerDie1 > 0.66) {
        document.getElementById('player-die').src = "images/Dice2.jpg"
        playerdie += 2;
    }
    //3 die
    else if (playerDie1 > 0.50) {
        document.getElementById('player-die').src = "images/Dice3.jpg"
        playerdie += 3;
    }
    //4 die
    else if (playerDie1 > 0.33) {
        document.getElementById('player-die').src = "images/Dice4.jpg"
        playerdie += 4;
    }
    //5 die
    else if (playerDie1 > 0.16) {
        document.getElementById('player-die').src = "images/Dice5.jpg"
        playerdie += 5;
    }
    //6 die
    else {
        document.getElementById('player-die').src = "images/Dice6.jpg"
        playerdie += 6;
    }

    if (playerDie2 > 0.83) {
        document.getElementById('player-die2').src = "images/Dice1.jpg"
        playerdie += 1;

    }
    //2 die
    else if (playerDie2 > 0.66) {
        document.getElementById('player-die2').src = "images/Dice2.jpg"
        playerdie += 2;
    }
    //3 die
    else if (playerDie2 > 0.50) {
        document.getElementById('player-die2').src = "images/Dice3.jpg"
        playerdie += 3;
    }
    //4 die
    else if (playerDie2 > 0.33) {
        document.getElementById('player-die2').src = "images/Dice4.jpg"
        playerdie += 4;
    }
    //5 die
    else if (playerDie2 > 0.16) {
        document.getElementById('player-die2').src = "images/Dice5.jpg"
        playerdie += 5;
    }
    //6 die
    else {
        document.getElementById('player-die2').src = "images/Dice6.jpg"
        playerdie += 6;
    }

    //House Dice roll

    //1 die
    if (houseDie1 > 0.83) {
        document.getElementById('house-die').src = "images/Dice1.jpg"
        housedie += 1
    }
    //2 die
    else if (houseDie1 > 0.66) {
        document.getElementById('house-die').src = "images/Dice2.jpg"
        housedie += 2
    }
    //3 die
    else if (houseDie1 > 0.50) {
        document.getElementById('house-die').src = "images/Dice3.jpg"
        housedie += 3
    }
    //4 die
    else if (houseDie1 > 0.33) {
        document.getElementById('house-die').src = "images/Dice4.jpg"
        housedie += 4
    }
    //5 die
    else if (houseDie1 > 0.16) {
        document.getElementById('house-die').src = "images/Dice5.jpg"
        housedie += 5
    }
    //6 die
    else {
        document.getElementById('house-die').src = "images/Dice6.jpg"
        housedie += 6
    }
    //1 die
    if (houseDie2 > 0.83) {
        document.getElementById('house-die2').src = "images/Dice1.jpg"
        housedie += 1
    }
    //2 die
    else if (houseDie2 > 0.66) {
        document.getElementById('house-die2').src = "images/Dice2.jpg"
        housedie += 2
    }
    //3 die
    else if (houseDie2 > 0.50) {
        document.getElementById('house-die2').src = "images/Dice3.jpg"
        housedie += 3
    }
    //4 die
    else if (houseDie2 > 0.33) {
        document.getElementById('house-die2').src = "images/Dice4.jpg"
        housedie += 4
    }
    //5 die
    else if (houseDie2 > 0.16) {
        document.getElementById('house-die2').src = "images/Dice5.jpg"
        housedie += 5
    }
    //6 die
    else {
        document.getElementById('house-die2').src = "images/Dice6.jpg"
        housedie += 6
    }

    //Variables for betting and funds 
    let bet = Number(document.getElementById('bet-input').value);
    

    //If the player rolls higher or less than the house
    if (playerdie > housedie) {
         funds += bet
        document.getElementById('funds').innerHTML = funds
    }
    else if (playerdie < housedie) {
        funds -= bet
        document.getElementById('funds').innerHTML = funds

    }
    else {
        document.getElementById('funds').innerHTML = funds

    }
}





//Function Buy Riches and Luxury
function purchase() {
    //Sock
    if (funds < 1000 && funds >= 0) {
        document.getElementById('loot').innerHTML += "<img src= 'images/socks.png'>"
    }

    //Bike Ring Trip
    else if (1000 <= funds && funds < 5000) {
        //Medium Prizes
        displaymediumprizes(0.66, 0.33)

    }

    //House Boat Car Motorcylcle
    else if (funds >= 5000) {
        //Big Prize Chance
        displaybigprizes(0.75, 0.5, 0.25); {
        }
    }

}
    
//Functions to make Programming Smaller

//Big Prizes
function displaybigprizes(motorcycle, house, boat, ) {
    let bigprize = Math.random();
    if (bigprize > motorcycle) {
        document.getElementById('loot').innerHTML += "<img src= 'images/motorcycle.jpg'>"
        funds -= 5000
        document.getElementById('funds').innerHTML = funds

    }
    else if (bigprize > house) {
        document.getElementById('loot').innerHTML += "<img src= 'images/house.png'>"
        funds -= 5000
        document.getElementById('funds').innerHTML = funds
    }
    else if (bigprize > boat) {
        document.getElementById('loot').innerHTML += "<img src= 'images/boat.png'>"
        funds -= 5000
        document.getElementById('funds').innerHTML = funds
    }
    else {
        document.getElementById('loot').innerHTML += "<img src= 'images/car.png'>"
        funds -= 5000
        document.getElementById('funds').innerHTML = funds
    }
}

//Medium Prizes
function displaymediumprizes(trip, car) {
    let mediumprizes = Math.random()

    //Medium Prize Chance
    if (mediumprizes > trip) {
        document.getElementById('loot').innerHTML += "<img src= 'images/trip.jpg'>"
        funds -= 1000
        document.getElementById('funds').innerHTML = funds

    }
    else if (mediumprizes > car) {
        document.getElementById('loot').innerHTML += "<img src= 'images/ring.png'>"
        funds -= 1000
        document.getElementById('funds').innerHTML = funds

    }
    else {
        document.getElementById('loot').innerHTML += "<img src= 'images/bike.jpg'>"
        funds -= 1000
        document.getElementById('funds').innerHTML = funds

    }

}