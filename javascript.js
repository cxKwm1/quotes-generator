var quotes = [
  'test',
  'test2',
  'test3',
  'test4',
]

function newQuote() {
  var randomNumber = Math.floor(Math.random) * (quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}

