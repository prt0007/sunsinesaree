// payment.js
document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const amount = this.amount.value;

    // Call Cashfree's payment API here
    console.log(`Initiating payment of amount: ${amount}`);
    // Implement the logic to call Cashfree's API
});