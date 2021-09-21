const quotes = [
  {
    quote: "That which does not kill us makes us stronger.",
    author: "Friedrich Nietzsche",
  },
  {
    quote: "I think, therefore I am.",
    author: "René Descartes",
  },
  {
    quote: "Time is money.",
    author: "Benjamin Franklin",
  },
  {
    quote: "If you’re going through hell, keep going.",
    author: "Winston Churchill",
  },
  {
    quote: "I came, I saw, I conquered.",
    author: "Julius Caesar",
  },
  {
    quote: "Those who dare to fail miserably can achieve greatly.",
    author: "John F. Kennedy",
  },
  {
    quote: "Knowledge is power.",
    author: " Sir Francis Bacon",
  },
  {
    quote: "Do what you can, with what you have, where you are.",
    author: "Teddy Roosevelt",
  },
  {
    quote: "People are just as happy as they make up their minds to be.",
    author: "Abraham Lincoln",
  },
  {
    quote: "I have no special talent. I am only passionately curious.",
    author: "Albert Einstein",
  },
  {
    quote: "Hope for the best, but prepare for the worst.",
    author: "Benjamin Disraeli",
  },
  {
    quote: "Simplicity is the ultimate sophistication.",
    author: "Leonardo da Vinci",
  }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote; //interesting...
author.innerText = todaysQuote.author;
//todaysQuote.author can call 'author' as a key which brings the 'name' as value


