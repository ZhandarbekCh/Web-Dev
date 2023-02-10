// 1. No difference, in both cases, return confirm('Did parents allow you?') executes exactly when the if condition is falsy.

//2.
//using ?
function checkAge(age) {
  return (age > 18) ? true : confirm('Did parents allow you?');
}
//using or
function checkAge(age) {
  return (age > 18) ? true : confirm('Did parents allow you?');
}

//3.
function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

//4.
function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
  alert(`Power ${n} can be used use positive numbers`);
} else {
  alert( pow(x, n) );
}
