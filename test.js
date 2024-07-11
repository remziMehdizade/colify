function cons1() {
    console.log("Step 1");
  }
  
  function cons2() {
    console.log("Step 2");
  }
  
  function cons3() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Step 3");
        resolve();
      }, 3000);
    });
  }
  
  function cons4() {
    console.log("Step 4");
  }
  
  function cons5() {
    console.log("Step 5");
  }
  
  async function logla() {
    cons1();
    cons2();
    await cons3(); // cons3 tamamlanana kadar bekle
    cons4();
    cons5();
  }
  
  logla();
  