/* eslint-disable max-len */
/* eslint-disable quotes */
"use strict";

const qouteArray = [
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall",
    author: " -Nelson Mandela",
  },
  {
    quote:
      "The way to get started is to quit talking and begin doing.",
    author: "-Walt Disney",
  },
  {
    quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
    author: " -Steve Jobs",
  },
  {
    quote: "If life were predictable it would cease to be life, and be without flavor.",
    author: "-Eleanor Roosevelt",
  },
  {
    quote:
      "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. ",
    author: "-Oprah Winfrey",
  },
  {
    quote:
      "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    author: " -James Cameron",
  },
  {
    quote:
      "ILife is what happens when you're busy making other plans",
    author: " -John Lennon",
  },
];
const btn = document.getElementById("myBtn");

btn.addEventListener("click", function genQuote() {
  const randomQoute = Math.floor(Math.random() * qouteArray.length);

  document.querySelector(".life-quote__quote").textContent
   = qouteArray[randomQoute].quote;

  document.querySelector(".life-quote__author").textContent
   = qouteArray[randomQoute].author;
});

// document.getElementById("myBtn").onclick = genQuote;
// genQuote();
