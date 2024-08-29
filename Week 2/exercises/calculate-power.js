document.write("Calculate Power");

 let Base = prompt("Enter base value:");
 let Exp = prompt("Enter exponent value:");

function power(base, exponent) {
    if (exponent == 0) 
        return 1;

    return base * power(base, exponent-1);
}

console.log(power(Base,Exp));


//Alternate solution
// function calculatePower() {
//     const base = parseFloat(prompt("Enter the base:"));
//     const exponent = parseFloat(prompt("Enter the exponent:"));
//     // Validate inputs
//     if (isNaN(base) || isNaN(exponent)) {
//       console.error("Invalid input. Please enter numeric values.");
//       return;
//     }
//     let result = 1;
//     for (let i = 0; i < exponent; i++) {
//       result *= base;
//     }
//     console.log(`${base} raised to the power of ${exponent} is ${result}`);
//   }
  
//   calculatePower();