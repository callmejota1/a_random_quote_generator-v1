/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: 'If you find yourself struggling in life... You can start over, like me... Remember that. So yeah, if that ends up saving you... then we\'re square', // quote
    source:  'Takuto Maruki', // person who said this quote
    citation: 'Persona 5 Royal', // where the quote is from
    year: 2020 //year when the quote was said
  },
  {
    quote: 'The simple act of helpin\' each other out is like... That\'s what it\'s all about, y\'know? That\'s... happiness', // quote
    source: 'Ryuji Sakamoto', // person who said this quote
    citation: 'Persona 5', // where the quote is from
    year: 2016 //year when the quote was said
  },
  {
    quote: 'We May Never Meet Again, But We\'ll Never Forget Each Other.',
    source: 'Leon/Squall',
    citation: 'Kingdom Hearts I',
    year: 2002
  },
  {
    quote: 'A Good Friend Will See You For Who You Are, No Matter What Face You Wear',
    source: 'Riku',
    citation: 'Kingdom Hearts: Dream Drop Distance',
    year: 2012
  },
  {
    quote: 'If you have a dream, don\'t wait! Act',
    source: 'Axel',
    citation: 'Kingdom Hearts II',
    year: 2008
  },
  {
    quote: 'You don\'t need a reason to help people',
    source: 'Zidane Tribal',
    citation: 'Final Fantasy IX',
    year: 2000
  },
  {
    quote: 'It\'s not a question of can or cannot. there are some things in life you just do.',
    source: 'Lightning Farron',
    citation: 'Final Fantasy XIII',
    year: 2009
  },
  {
    quote: 'Embrace your dreams, and whatever happens, protect your honor.',
    source: 'Zack Fair',
    citation: 'Final Fantasy VII Crisis Core',
    year: 2007
  },
  {
    quote: 'I will no longer live in the past. We must all look toward the future now.',
    source: 'Cyan Garamonde',
    citation: 'Final Fantasy VI',
    year: 1994
  },
  {
    quote: 'Change Cannot Occur Without Sustained Effort And An Unprecedented Level Of Commitment.',
    source: 'Mitsuru Kirijo',
    citation: 'Persona 3',
    year: 2006,
    tags: 'leadership, resolve'
  }
];


/***
 * `getRandomQuote` function
***/

//Basically, this function generates a random number based on the length of the quotes array and returns a random quote object from the array.
function getRandomQuote() {
  const randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}

//Random Color Background Function. Generates random color and applies it to the page background.
function randomBackgroundColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  const randomColor = `rgb(${red}, ${green}, ${blue})`;

  document.body.style.backgroundColor = randomColor;
}


/***
 * `printQuote` function
***/

//Basically, calls randomQuote to get a random quote object, then builds the HTML string to display the quote and its source, citation, and year. Then displays the quote in the quote-box div and changes the background color.
function printQuote() {
  const randomQuote = getRandomQuote();

  let quoteHTML = `<p class="quote">${randomQuote.quote}</p>`
  quoteHTML += `<p class="source">${randomQuote.source}`;

  if (randomQuote.citation) {
    quoteHTML += `<span class="citation">${randomQuote.citation}</span>`;
  }
  if (randomQuote.year) {
    quoteHTML += `<span class="year">${randomQuote.year}</span>`;
  }
  if (randomQuote.tags) {
    quoteHTML += `<span class="tags">${randomQuote.tags}</span>`;
  }

  quoteHTML += `</p>`;

  document.getElementById('quote-box').innerHTML = quoteHTML;
  randomBackgroundColor();
}

//Auto-Refresh. It changes the quote and color every 10 seconds.
setInterval(printQuote, 10000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

// 67 (I had to make the joke...)