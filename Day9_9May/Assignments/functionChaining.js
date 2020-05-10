class Chain {
    firstMethod() {
      console.log('This is the First Method');
      return this;
    }
    
    secondMethod() {
      console.log('This is the Second Method');
      return this;
    }
    
    thirdMethod() {
      console.log('This is the Third Method');
      return this;
    }
  }
  const obj = new Chain().firstMethod().secondMethod().thirdMethod();       //Made chains of functions