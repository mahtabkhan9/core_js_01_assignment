// Q7: Weather Condition Using Conditional Operator

function getWeatherCondition(temperature) {
    return temperature > 30 ? "Hot" : "Moderate";
}

// Example usage:
console.log(getWeatherCondition(35)); 
// Output: Hot

console.log(getWeatherCondition(25)); 
// Output: Moderate