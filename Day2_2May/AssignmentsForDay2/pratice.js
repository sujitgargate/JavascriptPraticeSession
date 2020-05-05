function prime_factors(num) {
    const result = [];
    for (let i = 2; i <= num; i++)                              //for finding factors
    {
      while ( num % i === 0)                                    
      {
        if (!result.includes(i)) result.push(i);                //if result arr doesnt contain i then insert at end of array
        num /= i;                                             
      }
    }
    return result;
  }

  console.log(prime_factors(220));