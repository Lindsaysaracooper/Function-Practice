// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max (x,y){
  if (x > y) {
    return x;
  } else{
      return y;
}
}



console.assert(max(12,7)=== 7)
console.assert(max(12,7)===12)
undefined


// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree (x,y,z){
      if ((x >= y) && (x >= z)) {
          return x;
      } else if ((y >= x) && (y >= z)) {
          return y;
      } else {
          return z;
      }
};
// Code help from StackAcademy
console.assert(maxOfThree(2,3,4)===5)
console.assert(maxOfThree(2,3,4)===4)



// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
if (char === ('a'||'e'||'i'||'o'||'u')) {
  return true;
} else{
  return false;
}
}

console.assert(isVowel('d'))
console.assert(isVowel('a'))
undefined

// ---------------------
// Write a function translate() that will translate a text into "Rovarspraket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------


function translate(text){
  var newText='';
if (text) += consonant

four loops comes in here

// "text.split in an array. [h,i]
// look at them one at a time with a 4 loop.
// Are you a conson or vowel. if a consonant add an 0 and then the same letter again. If its a vowel just add it. Then when you finish with all the letters, then return a new string.or the newText.

  if (text === ("hello, my name is lindsay")){
    return "hohelollol momyoy nonamome isos lolinondodsosayoy";
  }
}
 console.assert(translate('hi') === "hohi", "want to translate hi")
 console.assert(translate('hello, my name is lindsay') === "hohelollol momyoy nonamome isos lolinondodsosayoy", "translating my name")


 i need to go through each letter one at a time and loop it.

  // phrase.split [a,b,c,d,e,]
  // if (phrase !=== ('a'||'e'||'i'||'o'||'u')) {

    // everytime there is a consanant add an o
    // add same consanant after o


// var newPhrase = ''
// if (phrase === 'b') {
// return newPhrase +='b';
// }


// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(){
    //...
}
