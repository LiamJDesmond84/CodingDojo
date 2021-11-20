const { performance } = require('perf_hooks');


//!1 Prime Numbers
Number.prototype.isPrime = function() {
    for( let i=2; i*i-1<this; i++ ) {
        if( this % i === 0 ) {
            return false;
        }
    }
    return true;
}

const start = performance.now();
let primeCount = 0;
let num = 2; // for math reasons, 1 is considered prime
while( primeCount < 1e4 ) {
    if( num.isPrime() ) {
        primeCount++;
    }
    num++;
}
console.log(`The 10,000th prime number is ${num-1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);

// 1e4 = 104729
// 1e5 = 1299709
// 1e6 = too long to calculate

//!2 Fibonacci
// Recursive is faster (47.06990000605583)


//!3 Reversing a string
const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";

const start = performance.now();
const reverseString = (str) => {
    return str ? reverseString(str.substr(1)) + str[0] : str;
};

const reversed1 = reverseString(story);
console.log(start)
console.log(reversed1)