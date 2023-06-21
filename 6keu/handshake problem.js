/*
 0 -> 0 = 0
 1 -> 1 + 1  = 2
 2 -> 1 + 1  = 2
 3 -> 1 + 1 + 1  = 3
 4 ->   = 4
 5 ->   = 7
  

  = ? = 
*/

function getParticipants(handshakes) {
  if (handshakes === 0) return 0;

  let k = 1,
      n = 0;

  while (n < handshakes) {
    n += k;
    k++;
  }
  return k;
}

console.log(getParticipants(4)); // 0
