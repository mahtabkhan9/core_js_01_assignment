// Q6: E-commerce Payment Method Fee Calculation

function getProcessingFee(paymentMethod) {
    switch (paymentMethod) {
        case "credit":
            return "Processing fee is 2%";
        case "debit":
            return "Processing fee is 1.5%";
        case "paypal":
            return "Processing fee is 3%";
        default:
            return "Invalid payment method";
    }
}

// Example usage:
console.log(getProcessingFee("credit")); 
// Output: Processing fee is 2%

console.log(getProcessingFee("paypal")); 
// Output: Processing fee is 3%

console.log(getProcessingFee("debit")); 
// Output: Processing fee is 1.5%