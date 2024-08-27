console.log("Hello World");

// Variables = store values
// let, const, *var 

// let and var - mutable/editable value
//let firstName = "Jared";
//console.log("Firstname:", firstName);

//firstName = "Kenneth";
//console.log("Firstname:", firstName);

// const - immutable/uneditable value
//const lastName = "Brampio";
//console.log("Lastname:", lastName);

// This gives us an error!
// lastName = "Catipay";
// console.log("Lastname:", lastName);

//var - global mutable value (anywhere in the code)
var firstName = "Kenneth";
firstName = "Yanna";
console.log("First Name:",firstName);

//let - local mutable value (inside {})
let lastName = "Yalung";
lastName = "Brampio";
console.log("Last Name:", lastName);


if(true) {
    var email = "kennethbrampio@gmail.com";
    let userName = "kenneth";

    console.log("Email:",email);
    console.log("Username:",userName);
}
console.log("Email:",email);
//console.log("Username:",userName); 
//(wont work since username is a let variable)

//const
const funds = 0;
//funds = 200;

console.log("Funds:",funds);


