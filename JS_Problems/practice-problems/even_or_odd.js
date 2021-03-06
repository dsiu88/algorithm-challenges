// Determine if a number is Even or Odd without % or Division

function evenOdd(num){
  // grab absolute val of num arg
  // decrement by 2. if num equals 0 its even else its odd
    for (var i = Math.abs(num); i >= 0; i -= 2){
      if (i === 0){
        console.log("Even")
      } if (i === 1) {
        console.log("Odd")
      }
    }
};

evenOdd(-6)

/////////////////////////////////////////////////

function oddEven(num) {
  var i = Math.abs(num)

  while (i >= 0) {
    if (i === 0) {
      console.log("Even")
    }
    if (i === 1) {
      console.log("Odd")
    }
    i -= 2
  }
};

oddEven(7)

///////////////////////////////////////////////////

// Bitwise Operators
// last bit(LSB) is 0 for all even numbers and 1 for all odd numbers.
// Example : 2 - 0000 0010, 8 - 0000 1000 and 5 - 0000 0101

function oddOrEven(x) {
    return ( x & 1 ) ? "odd" : "even";
}
