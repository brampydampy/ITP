document.write("Print Numbers in a Range");

let start = Number(prompt("Enter starting value:"));
let end = Number(prompt("Enter ending value:"));

let count = start;
while (count <= end) {
    console.log(count);
    count ++;
}