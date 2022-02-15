"use strict";

async function getCard(deckId) {
  const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`;
  const resp = await axios.get(url);
  const card = resp.data.cards[0];
  return card;
}

async function drawTwoFromNewDeck() {
  const deckId = await getNewDeck();
  const card1 = await getCard(deckId);
  const card2 = await getCard(deckId);
  console.log(`${card1.value.toLowerCase()} of ${card1.suit.toLowerCase()}`);
  console.log(`${card2.value.toLowerCase()} of ${card2.suit.toLowerCase()}`);
  return
}

async function getNewDeck() {
  const url = `https://deckofcardsapi.com/api/deck/new/draw/?count=0`;
  const resp = await axios.get(url);
  const deckId = resp.data.deck_id;
  return deckId;
}



var deckId;

async function setDeckId() {
  deckId = await getNewDeck();
  console.log("Created new deck with id:", deckId);
}
setDeckId();

async function handleDrawCard(evt) {
  console.log("handleDrawCard");
  const card = await getCard(deckId);
  if (card === undefined) { return; }
  displayCard(card);
}

function displayCard(card) {
  console.log("displayCard");
  $("#cardList").append($(`<li><img src="${card.image}"></li>`));
}

$("#getCardButton").on("click", handleDrawCard);