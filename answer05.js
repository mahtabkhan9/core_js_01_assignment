// Q5: Basic Login System

function login(username, password) {
    if (username === "admin" && password === "12345") {
        return "Login successful";
    } else {
        return "Invalid credentials";
    }
}

// Example usage:
console.log(login("admin", "12345")); 
// Output: Login successful

console.log(login("user", "12345"));  
// Output: Invalid credentials