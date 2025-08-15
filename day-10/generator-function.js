function* generator(sequencer) {
  yield sequencer
}

function dummySeq() {
  return function() {
    return "dummy";
  };
}

function factorialSeq() {
}

function fibonacciSeq() {
}

function rangeSeq(start, step) {
}

function primeSeq() {
}

function partialSumSeq() {
}

let result = dummySeq();
var seq = generator(result());

console.log(seq.next());
console.log(seq.next());
console.log(seq.next());
console.log(seq.next());
console.log(seq.next());

// const result  = dummySeq();
// console.log(result())