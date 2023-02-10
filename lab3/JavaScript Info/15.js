//1. The answer: 1.

//2. i) 1 to 4
//  ii) 1 to 5
   
//3. The answer: from 0 to 4 in both cases.

//4.
for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    alert( i );
  }
}

//5.
let i = 0;
while (i < 3) {
  alert( `number ${i}!` );
  i++;
}

//6.
let num;

do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);

//7.
let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { // for each i...

  for (let j = 2; j < i; j++) { // look for a divisor..
    if (i % j == 0) continue nextPrime; // not a prime, go next i
  }

  alert( i ); // a prime
}
   
