// Import stylesheets
import './style.css';

// Disemvowel Trolls
// ***************************************

// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

function disemvowel(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let result = str
    .split('')
    .filter((item) => !vowels.includes(item.toLowerCase()))
    .join('');

  return result;
}

console.log(disemvowel('This website is for losers LOL!'));
// Ths wbst s fr lsrs LL!
console.log(
  disemvowel("No offense but,\nYour writing is among the worst I've ever read")
);
//N ffns bt,
// Yr wrtng s mng th wrst 'v vr rd
console.log(disemvowel('What are you, a communist?'));
//Wht r y, cmmnst?

// alternative solution using regex
/*
function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}
*/

// alternative solution
/*
function disemvowel(str) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];

  return str.split('').filter(function(el) {
    return vowels.indexOf(el.toLowerCase()) == -1;
  }).join('');
}
*/

//function accum
// This time no story, no theory. The examples below show you how to write function accum:
// ***************************************************************************************

function accum(s) {
  // your code
  let newString = '';
  for (let i = 0; i < s.length; i++) {
    newString += s[i].toUpperCase();
    if (i === 0) newString += '-';

    for (let j = 0; j < i; j++) {
      newString += s[i].toLowerCase();

      if (i != s.length - 1 && j === i - 1) {
        newString += '-';
      }
    }
  }

  return newString;
}

// Examples:
console.log(accum('abcd')); // -> "A-Bb-Ccc-Dddd"
console.log(accum('RqaEzty')); //-> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
console.log(accum('cwAt')); // -> "C-Ww-Aaa-Tttt"
console.log(accum('ZpglnRxqenU')); //  Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu

// The parameter of accum is a string which includes only letters from a..z and A..Z.

//Alternative solution
/*
function accum(s) {
  return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}
*/

// Given a string str, reverse it omitting all non-alphabetic characters.
// **************************************************************************

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".
// A string consists of lowercase latin letters, digits and symbols.

const reverseStringOnly = (str) => {
  let regex = /[a-zA-Z]/;
  return str
    .split('')
    .filter((letter) => regex.test(letter))
    .reverse()
    .join('');
};

console.log(reverseStringOnly('krishan')); //nahsirk
console.log(reverseStringOnly('ultr53o?n')); //nortlu
console.log(reverseStringOnly('ab23c')); //cba
console.log(reverseStringOnly('krish21an')); //nahsirk

//Alternative solution1
// reverseLetter=(s)=>s.replace(/[^a-z]/gi,'').split('').reverse().join('');

//Alternative solution2
/*
function reverseLetter(str) {
  return str.split('').reverse().filter(function(el) {
    if('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(el) != -1) {
      return el;
    }
  }).join('');
}
*/

//alternative solution3 using reduce
/*
function reverseLetter(str) {
  return [...str].reduce((s, c) => /[A-Z]/i.test(c) ? c + s : s, "")
}
*/

function removeUrlAnchor(url) {
  // TODO: complete
  let result = url.split('');

  let index = result.indexOf('#') === -1 ? result.length : result.indexOf('#');

  let final = [];
  for (let i = 0; i < index; i++) {
    final.push(result[i]);
  }

  return final.join('');
}

console.log(removeUrlAnchor('www.codewars.com#about'));
console.log(removeUrlAnchor('www.codewars.com/katas/?page=1#about'));
console.log(removeUrlAnchor('www.codewars.com/katas/'));

// The best alternative solution
/*
function removeUrlAnchor(url){
  return url.split('#')[0];
}
*/

//Highest possible number
// ***************************************************

// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

function descendingOrder(n) {
  //...
  let result = String(n)
    .split('')
    .sort((a, b) => b - a)
    .join('');
  return +result;
}

console.log(descendingOrder(0)); //0
console.log(descendingOrder(1)); //1
console.log(descendingOrder(111)); //111
console.log(descendingOrder(15)); //51
console.log(descendingOrder(1021)); //2110
console.log(descendingOrder(123456789)); //987654321

// Your task is to write function factorial.

// https://en.wikipedia.org/wiki/Factorial

function factorial(n) {
  //your code here
  let result = 1;
  for (let i = n; i > 0; i--) {
    result *= i;
  }

  return result;
}

console.log(factorial(0)); //1
console.log(factorial(1)); //1
console.log(factorial(4)); //24
console.log(factorial(7)); //5040
console.log(factorial(17)); //355687428096000

//alternative solution
/*
function factorial(n){
  return n ? n * factorial(n-1) : 1;
}
*/

// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.
function smallEnough(a, limit) {
  return a.every((item) => item <= limit);
}

console.log(smallEnough([66, 101], 200)); //true
console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100)); //false
console.log(smallEnough([101, 45, 75, 105, 99, 107], 107)); //true
console.log(smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120)); //true

//alternative solution1
/*
function smallEnough(a, limit){
  return Math.max(...a) <= limit
}
*/

//alternative solution2
/*
function smallEnough(array, limit){
    return array.filter( (value) => value > limit ).length > 0 ? false : true;
}
*/

// Jaden Smith Tweet
// ******************************************

/*
Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

*/
let str = "How can mirrors be real if our eyes aren't real";

//General solution
/*
String.prototype.toJadenCase = function () {
  //...

  let result = str.split(' ');
  result = result
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
  return result;
};
*/

String.prototype.toJadenCase = function () {
  return this.split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};

console.log(str.toJadenCase());

// Alternative solution
/*
String.prototype.toJadenCase = function () {

  function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  return this.split(' ').map(capitalizeFirstLetter).join(' ');
};
*/
