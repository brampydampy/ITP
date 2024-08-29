document.write("Grade Calculator");

let grade = prompt("Enter your score:");

if (grade > 100 || grade < 0) {
    console.log("Grade can't be higher than 100 or lower than 0!");
}else if (grade >= 90) {
    console.log("Your grade is"+" "+ "A");
}else if (grade >= 80) {
    console.log("Your grade is"+" "+ "B");
}else if (grade >= 70) {
    console.log("Your grade is"+" "+ "C");
}else if (grade >= 60) {
    console.log("Your grade is"+" "+ "D");
}else if (grade < 60) {
    console.log("Your grade is" +" "+ "F");
}