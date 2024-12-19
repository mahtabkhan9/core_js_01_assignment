// Q8: Sum of Numbers Using do-while Loop

function calculateSum(n) {
    let sum = 0;
    let i = 1;
    do {
        sum += i;
        i++;
    } while (i <= n);
    return sum;
}

// Example usage:
console.log(calculateSum(5)); 
// Output: 15 