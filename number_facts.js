"use strict";

// Get single number fact
async function getNumFact() {
  const resp = await axios.get("http://numbersapi.com/42?json");
  // console.log(resp);
  // console.log(resp.data.text);
  return resp.data.text;
}

// Get fact for multiple numbers
async function getMultiNumFacts() {
  const header = { "Content-Type": "application/json" };
  const url = "http://numbersapi.com/1..3";
  const resp = await axios.get(url, { headers: header });
  console.log(resp);
  
  for (let val of Object.values(resp.data)){
    let fact = $(`<li>${val}</li>`);
    $("#facts").append(fact);
  }
}

// Get 4 facts for single number
async function get4NumFacts() {
  let p1 = getNumFact();
  let p2 = getNumFact();
  let p3 = getNumFact();
  let p4 = getNumFact();

  let results = [await p1, await p2, await p3, await p4];

  
}


// getNumFact();
getMultiNumFacts();