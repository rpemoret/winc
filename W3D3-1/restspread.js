// A --- get the remaining parameters in an array with the rest operator
// B --- sum all parameters with reduce
// C --- return all parameters with acc + item

const reduceren = function(...arg) {
  return arg.reduce((acc, item) => {
    return acc + item;
  });
};

console.log(reduceren(420, 3251, 45145, 2342));

// A --- create index parameters
// B --- return them
// C --- create array numbers
// D --- use the reduceren2 function with element arrayNum to sum the numbers

const reduceren2 = function(index1, index2, index3) {
  return index1 + index2 + index3;
};

const arrayNum = [20, 23424, 23480];

console.log(reduceren2(...arrayNum));
