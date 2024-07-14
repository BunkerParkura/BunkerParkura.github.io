document.addEventListener('DOMContentLoaded', () => {
    const quoteList = document.getElementById('quote-list');

    fetch('/quotes')
        .then(response => response.text())
        .then(data => {
            const quotes = data.split('\n').filter(quote => quote.trim() !== '');
            quotes.forEach(quote => {
                const listItem = document.createElement('li');
                listItem.textContent = quote;
                quoteList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching quotes:', error));
});
