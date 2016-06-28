// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(x, y) {
    if (x > y) {
        return x;
    } else {
        return y;
    }
}



console.assert(max(12, 7) === 7)
console.assert(max(12, 7) === 12)
undefined


// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(x, y, z) {
    if ((x >= y) && (x >= z)) {
        return x;
    } else if ((y >= x) && (y >= z)) {
        return y;
    } else {
        return z;
    }
};
// Code help from StackAcademy
console.assert(maxOfThree(2, 3, 4) === 5)
console.assert(maxOfThree(2, 3, 4) === 4)



// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char) {
    if (char === ('a' || 'e' || 'i' || 'o' || 'u')) {
        return true;
    } else {
        return false;
    }
}

console.assert(isVowel('d'))
console.assert(isVowel('a'))

// ---------------------
// Write a function translate() that will translate a text into "Rovarspraket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------


function translate(text) {
    var newText = '';
    for (var i = 0; i < text.length; i++) {
        if (text === ('a' || 'e' || 'i' || 'o' || 'u')) {
            return text[i];
        } else {
            return (text[i] + "o" + text[i])
        }
    }
}
 console.assert(translate('lindsay'))=== 'lol'
 // I have only figured out how to do the first letter


// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------


function reverse(str) {
    var text = '';

    for (var i = str.length - 1; i >= 0; i--) {
    	text += str[i];
    	continue
    }
    return text.toLowerCase();
}
// Code from kosalvann in Github
