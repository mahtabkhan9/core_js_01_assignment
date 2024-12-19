// Q1: Grading Students Based on Marks

function gradeStudent(marks) {
    if (marks > 90) {
        return "A Grade";
    } else if (marks > 70 && marks <= 90) {
        return "B Grade";
    } else if (marks > 50 && marks <= 70) {
        return "C Grade";
    } else {
        return "F Grade";
    }
}

// Example usage:
console.log(gradeStudent(95)); // Output: A Grade
console.log(gradeStudent(75)); // Output: B Grade
console.log(gradeStudent(60)); // Output: C Grade
console.log(gradeStudent(45)); // Output: F Grade