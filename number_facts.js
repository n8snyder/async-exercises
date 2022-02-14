"use strict";

async function getNumFact() {
  const resp = await axios.get("http://numbersapi.com/42?json");
  console.log(resp);
  console.log(resp.data.text);
}

async function getMultiNumFacts() {
  header = { "Content-Type": "application/json" };
  const url = "";
  const resp = await axios.get(url, { headers: header });
}

getNumFact();