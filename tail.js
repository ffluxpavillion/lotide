// Original assertEqual function
/*
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};
*/


// assertEqual TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);

// tail function
const tail = function(array) {
  if (array.length > 2) {
    return array.slice(1);
  } else {
    return [array];
  }
};

// .slice() extracts a section of the calling array and returns a new array.  This also avoids returning the head of the array

// tail TEST CODE
const words =  [ "Yo Yo", "Lighthouse", "Labs" ];
console.log(tail(words));
console.log(tail(words.length));
