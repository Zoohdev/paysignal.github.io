// JavaScript (in script.js)

// Replace with a real exchange rate API endpoint
const exchangeRateApiUrl = 'https://api.example.com/exchange-rate';

document.getElementById('exchange-rate-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;

    fetch(`${exchangeRateApiUrl}?from=${fromCurrency}&to=${toCurrency}`)
        .then((response) => response.json())
        .then((data) => {
            const conversionRate = data.rate;
            const convertedAmount = amount * conversionRate;
            document.getElementById('converted-amount').textContent = `${convertedAmount.toFixed(2)} ${toCurrency}`;
        })
        .catch((error) => {
            console.error('Error fetching exchange rate data:', error);
            document.getElementById('converted-amount').textContent = 'Error';
        });
});

// Replace this with actual exchange rate fetching logic
function fetchExchangeRate() {
    // Simulate fetching exchange rate
    return Math.random() * 10;
}

function updateExchangeRate() {
    const exchangeRateValue = document.getElementById('exchange-rate-value');
    const newRate = fetchExchangeRate().toFixed(2);
    exchangeRateValue.textContent = `${newRate} USD/EUR`;
}

function initChatbot() {
    const chatMessages = document.getElementById('chat-messages');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send');

    sendButton.addEventListener('click', function () {
        const userMessage = userInput.value;
        chatMessages.innerHTML += `<p><strong>You:</strong> ${userMessage}</p>`;
        userInput.value = '';

        // Replace with logic to handle user input and respond with the chatbot
        chatMessages.innerHTML += `<p><strong>ChatBot:</strong> I'm just a demo chatbot.</p>`;
    });
}

// Update exchange rate every 5 minutes (300,000 milliseconds)
setInterval(updateExchangeRate, 300000);

document.addEventListener('DOMContentLoaded', function () {
    updateExchangeRate();
    initChatbot();
});

