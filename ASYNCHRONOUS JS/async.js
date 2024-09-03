// Synchronous

// console.log("Step 1");
// console.log("Step 2");
// console.log("Step 3");

// Asynchronous
// setTimeout
// setTimeout(()=>{
//     console.log("Step 1");
// },3000);
// 3secs

// // setInterval
// let count = 0;
// const threeSecondFunction = setInterval(()=>{
//     console.log("It's been three seconds!");
//     count++;

//     if(count == 5)
//         clearInterval(threeSecondFunction);
// },3000);

// Callbacks - portals to other functions 





function func1(callback){
    setTimeout(()=>{
        console.log("Step 1");
        callback();
    },3000);
    
}

function func2(){
    console.log("Step 2");
    console.log("Step 3");
    console.log("Step 4");
}

func1(func2);