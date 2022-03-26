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
// function disemvowel(str) {
//   return str.replace(/[aeiou]/gi, '');
// }

// alternative solution
// function disemvowel(str) {
//   var vowels = ['a', 'e', 'i', 'o', 'u'];

//   return str.split('').filter(function(el) {
//     return vowels.indexOf(el.toLowerCase()) == -1;
//   }).join('');
// }

// This time no story, no theory. The examples below show you how to write function accum:

function accum(s) {
  // your code
  let newString = '';
  for (let i = 0; i < s.length; i++) {
    newString += s[i].toUpperCase();
    if( i === 0)  newString += '-';

    for (let j = 0; j < i; j++) {
      newString += s[i].toLowerCase();

      if ((i != s.length - 1 && j === i - 1) ) {
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
console.log(accum("ZpglnRxqenU"));  //  Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu

// The parameter of accum is a string which includes only letters from a..z and A..Z.
