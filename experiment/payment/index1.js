document.getElementById('paymentForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    // Fetch form data
    const cardNumber = document.getElementById('cardNumber').value;
    const cardHolderName = document.getElementById('cardHolderName').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const cvv = document.getElementById('cvv').value;
  
    // Validate form data (you can add more validation as needed)
    if (!cardNumber || !cardHolderName || !expiryDate || !cvv) {
      alert('Please fill in all the fields.');
      return;
    }
  
    // You would typically send this data to a secure server for payment processing.
    // Here, we'll just log the data to the console.
    console.log('Payment data:', { cardNumber, cardHolderName, expiryDate, cvv });
  
    // Optionally, you can display a success message or redirect the user to a confirmation page.
  });
  