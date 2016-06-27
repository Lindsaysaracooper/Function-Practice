

// Q1
// Write a function called `sum` that takes two
// parameters and returns the sum of those 2 numbers.
var sum = function (x,y) {
  return x + y;
};

console.assert(sum(4,5)===10);
console.assert(sum(4,5)===9);

// Q2
// Write a function named `avg` that takes 3 parameters
// and returns the average of those 3 numbers.
var avg = function (x,y,z){
  return (x+y+z) / 3;
};

  console.assert(avg(3,3,3)===10)
  console.assert(avg(3,3,3)===3)

// Q3
// Write a function called `getLength` that takes one
// parameter (a string) and returns the length
var getLength = function(string) {
  return (string.length);

};

console.assert(getLength("lindsay")===3)
console.assert(getLength("lindsay")===7)


// Q4
// Write a function called `greaterThan` that takes
// two parameters and returns `true` if the second
// parameter is greater than the first. Otherwise
// the function should return `false`.

var greaterThan = function (x,y){
if (y>x){
return 'true';
} else {
  return 'false';
}
}


// Q5
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.

var greet = function (name){
  return "hello,"+ name;
}

console.assert(greet("lindsay")=== 0)
console.assert(greet("lindsay")=== "hello,lindsay")

// Q6
// Write a function called `madlib` that takes
// 4 or more parameters (words). The function
// should insert the words into a pre-defined
// sentence. Finally the function should return
// that sentence.

var madLib = function (w,x,y,z){
  return w + 'my name is ' + x + 'and I like ' + y + 'and ' + z;

};

console.assert(madLib("this","is","a","string")=== "x my name y isand I likez string")
console.assert(madLib("this","is","a","string")=== "thismy name is isand I like aand string")
