document.write("Calculate Power");

 let Base = prompt("Enter base value:");
 let Exp = prompt("Enter exponent value:");

function power(base, exponent) {
    if (exponent == 0) 
        return 1;

    return base * power(base, exponent-1);
}

console.log(power(Base,Exp));
