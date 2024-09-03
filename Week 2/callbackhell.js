const step1 = (callback) => {
    setTimeout(() => {
      console.log("Step 1 complete.");
      callback();
    }, 1000);
  };
  const step2 = (callback) => {
    setTimeout(() => {
      console.log("Step 2 complete.");
      callback();
    }, 1000);
  };
  const step3 = (callback) => {
    setTimeout(() => {
      console.log("Step 3 complete.");
      // callback();
    }, 1000);
  };
  
  // Callback Hell example 1
  step1(() => step2(() => step3()));
  
  // Callback Hell example 2
  step1(() => {
    step2(() => {
      step3(() => {
        console.log("All steps complete.");
      });
    });
  });