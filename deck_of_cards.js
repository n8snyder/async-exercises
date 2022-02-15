"use strict";

async function getCard() {
  const url = "https://deckofcardsapi.com/api/deck/new/draw/?count=1";
  const resp = await axios.get(url);
  const card = resp.data.cards[0];
  console.log(`${card.value.toLowerCase()} of ${card.suit.toLowerCase()}`)
  return
}

getCard();