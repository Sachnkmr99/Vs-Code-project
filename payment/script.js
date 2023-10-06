
document.getElementById("payment-form").addEventListener("submit", function (event) {
    event.preventDefault();
    

    var cardholderName = document.getElementById("cardholder-name").value;
    var cardNumber = document.getElementById("card-number").value;
    var expiryDate = document.getElementById("expiry-date").value;
    var cvv = document.getElementById("cvv").value;

  
    var paymentData = {
        cardholderName: cardholderName,
        cardNumber: cardNumber,
        expiryDate: expiryDate,
        cvv: cvv
    };

});
