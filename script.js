// script.js
document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('searchForm');
    const resultsDiv = document.getElementById('results');

    searchForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const travelType = document.getElementById('travelType').value;
        const budget = document.getElementById('budget').value;
        const destination = document.getElementById('destination').value;

        const response = await fetch('/api/search', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ travelType, budget, destination })
        });

        const results = await response.json();
        displayResults(results);
    });

    function displayResults(results) {
        resultsDiv.innerHTML = '<h2>Search Results</h2>';
        if (results.length === 0) {
            resultsDiv.innerHTML += '<p>No results found.</p>';
            return;
        }
        results.forEach(user => {
            resultsDiv.innerHTML += `<p>${user.username}</p>`;
        });
    }
});
