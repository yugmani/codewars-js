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
