fetch('quotes.json')
  .then(response => response.json())
  .then(quotes => {
    function getRandomQuote() {
        const randInt = Math.floor(Math.random() * quotes.length);
        const quote = quotes[randInt].quote;
        const author = quotes[randInt].author;
        document.getElementById("quote").innerText = `"${quote}"`;
        document.getElementById("author").innerText = `- ${author}`;
    }

    getRandomQuote();  
  })
  .catch(error => console.error('This should never come', error));  // Catch any errors

