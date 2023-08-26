const isPrime = (num) => {
  if (num <= 1) 
  return false;
  let len = Math.round(Math.sqrt(num));
  for (let i = 2; i <= len; i++)
   if (num % i === 0)
    return false;
  return true;
}


console.log(isPrime(4));