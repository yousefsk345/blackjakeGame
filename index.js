const player = {
  name: "yousef",
  chips: 145,
};

let firstCard;
let secondCard;
let cards = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let messege = "";
let messegeEl = document.getElementById("messege-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");

playerEl.textContent = player.name + ": $" + player.chips;
function getRandomNumber() {
  let number = Math.floor(Math.random() * 13) + 1;
  if (number == 1) {
    number = 11;
  } else if (number > 10) {
    number = 10;
  }
  return number;
}
console.log(cards);
function startGame() {
  isAlive = true;
  firstCard = getRandomNumber();
  secondCard = getRandomNumber();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}
function renderGame() {
  let cardsMessege = "";
  for (let i = 0; i < cards.length; i++) {
    cardsMessege += cards[i] + " ";
  }
  cardsEl.textContent = "Cards: " + cardsMessege;
  sumEl.textContent = "Sum: " + sum;
  if (sum < 21) {
    messege = "Do you want to draw a new card?";
  } else if (sum === 21) {
    messege = "You've Got BlackJake!";
    hasBlackjack = true;
  } else {
    messege = "you're out of the game";
    isAlive = false;
  }

  messegeEl.textContent = messege;
}

function newCard() {
  if (isAlive && !hasBlackjack) {
    let card = getRandomNumber();
    sum += card;
    cards.push(card);
    renderGame();
  }
}
