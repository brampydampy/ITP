/* setTimeout(()=>{console.log("Step 1");})

console.log("Step 2");
console.log("Step 3");
console.log("Step 4"); */

function func1(callback){
    setTimeout(()=>{console.log("Step 1");
        callback();
    },3000)
    
}

const func2=()=>{
    console.log("Step 2");
    console.log("Step 3");
    console.log("Step 4");
}

func1(func2);



/* //callback
function func1(callback){
    setTimeout(()=> {console.log("1");
        callback();},3000);
                }
function func2(){
    console.log("2");
    console.log("3");
    console.log("4");
}

func1(func2); */

// setTimeout(()=>{console.log("Step 1");})