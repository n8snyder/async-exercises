"use strict";


/** Get single number fact */

async function getNumFact() {
  const resp = await axios.get("http://numbersapi.com/42?json");
  return resp.data.text;
}


/** Get and display a fact for multiple numbers */

async function showMultiNumFacts() {
  const facts = await getMultiNumFacts();
  displayFacts(facts);
}

/** Get a fact for multiple numbers */

async function getMultiNumFacts() {
  const header = { "Content-Type": "application/json" };
  const url = "http://numbersapi.com/1..3";
  const resp = await axios.get(url, { headers: header });
  return Object.values(resp.data);
}


/** Add facts to the list of facts */

function displayFacts(facts) {
  for (let val of facts) {
    let fact = $(`<li>${val}</li>`);
    $("#facts").append(fact);
  }
}


/** Get and display 4 facts for single number */

async function show4NumFacts() {
  const facts = await get4NumFacts();
  displayFacts(facts);
}

/** Get 4 facts for single number */

async function get4NumFacts() {
  let p1 = getNumFact();
  let p2 = getNumFact();
  let p3 = getNumFact();
  let p4 = getNumFact();

  return [await p1, await p2, await p3, await p4];
}

// getNumFact();
// showMultiNumFacts();
// show4NumFacts();