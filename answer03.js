// Q3: Nested Ternary Operator to Check Number Type
function checkNumberType(num) {
    return num > 0 
        ? "Positive" 
        : num < 0 
            ? "Negative" 
            : "Zero";
}

// Example usage:
console.log(checkNumberType(5));  // Output: Positive
console.log(checkNumberType(-3)); // Output: Negative
console.log(checkNumberType(0));  // Output: Zero