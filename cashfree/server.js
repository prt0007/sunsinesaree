// server.js (Node.js example)
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const config = require('./config.json');

app.use(bodyParser.json());

app.post('/payment', (req, res) => {
    const { amount } = req.body;
    // Use the API key and secret key to create a payment request to Cashfree
    console.log(`Payment request for amount: ${amount}`);
    // Implement the logic to call Cashfree's API here
    res.send('Payment request sent to Cashfree');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});