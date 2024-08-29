// Synchronous vs Asynchronous

// Synchronous - no delay (immediate execution)
console.log("First");
console.log("Second");
console.log("Third");

// Asynchronous - with time delay, timeouts or intervals
console.log("First");
setTimeout(() => {
    console.log("Second");
}, 2000)
console.log("Third");

// setTimeout vs setInterval
setTimeout(() => {
    console.log("I'll appear in 3 seconds.");
}, 3000) // 3 secs

let counter = 0;
/* const threeSecondFunction = setInterval(() => {
    console.log("I'll appear in 3 seconds.");
    counter++;

    if (counter == 5)
        clearInterval(threeSecondFunction);
}, 3000) */ 

// 3 secs

// Callbacks - portal to another code block - proceed to the next step
const getData = (callback) => {
    setTimeout(() => {
        const data = "This is the data.";
        callback(data);
    }, 1000) // 1 second delay to get the data
}

const processData = (data) => {
    console.log("Processed data:", data);
}

getData(processData);

// // Callback Hell - nesting of callbacks (its bad since we can't keep track of the built up pyramid formation/ pyramiding of code)
// Callback Hell - maintainability and readability issues
// const step1 = (callback) => {
//     setTimeout(() => {
//       console.log("Step 1 complete.");
//       callback();
//     }, 1000);
//   };
//   const step2 = (callback) => {
//     setTimeout(() => {
//       console.log("Step 2 complete.");
//       callback();
//     }, 1000);
//   };
//   const step3 = (callback) => {
//     setTimeout(() => {
//       console.log("Step 3 complete.");
//       // callback();
//     }, 1000);
//   };
  
//   // Callback Hell example 1
//   step1(() => step2(() => step3()));
  
//   // Callback Hell example 2
//   step1(() => {
//     step2(() => {
//       step3(() => {
//         console.log("All steps complete.");
//       });
//     });
//   });

/* Promises - chaining callbacks - executes code at a later time*/ 
const step1 = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Step 1 complete.");
        resolve();
      }, 1000);
    });
  };
  
  const step2 = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Step 2 complete.");
        resolve();
        /* reject("I don't want to let you pass!") */
      }, 1000);
    });
  };
  
  const step3 = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Step 3 complete.");
        resolve();
      }, 1000);
    });
  };

// Chaining Promises -with then and catch
step1()
  .then(step2)
  .then(step3)
  .then(() => console.log("All steps complete."))
  .catch((error) => console.error("An error occurred:", error)); // catch will occur when a reject on either of the steps is encountered

/* Async/Await - the async keyword allows us to use the await code*/
const performSteps = async () => {
    try {
        await step1();
        await step2();
        await step3();
        console.log("All steps complete.");
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

/* 
    Synchronous - Code Running Immediately
    Asynchronous - Code with possible delays
*/