const str = "The fat cat ran dow the street. It was searching for a mouse to eat."

// + will match one or more e's
const reg1 = /e+/g;

// will match all e's as well as any ea. The ? after the 'a' marks it as an optional match
const reg2 = /ea?/g;

// * is a combo of ? and +. It will optionally match one or more 'e'
const reg3 = /re*/g;

// . is a wildcard that will match anything. This will match fat, cat and eat
const reg4 = /.at/g;

// the \ will cancel anything after it so it is not treated as a special character.
// in this case it is searching for a period instead of using the wildcard
const reg5 = /\./g;

// \w will match any word character (alphanumeric and underscore)
// using \W will do the inverse and find anything that is NOT a word character
// \s will find whitespace and \S will do the inverse
const reg6 = /\w/g;

// find words that have minimum 4 or max 5 word characters in a row
// searching will return 2 matches. first is searc and second is hing
const reg7 = /\w{4,5}/g;

// [fc] will search for either an f or c before at so fat or cat.
// [a-zA-Z] will search if any letter precedes at so fat, cat and eat will match
// [0-9] it works with a range of numbers as well 
const reg8 = /[a-z]at/g;

// will search for either The or the
const reg9 = /(t|T)he/g;

// will match tre and et in street
const reg10 = /(t|e|r){2,3}/g;

// ^ searches only the beginning of a line. Will match the very first character T
const reg11 = /^T/g;

// the $ sybol will do the inverse of the ^ by searching the very end
const reg12 = /\.$/g;

// look behind (?<=) will match to anything that is PRECEDED by the criteria.
// in this case the wildcard '.' will match two whitespaces that have the word 'the' before them\
// the ! instead of = is the inverse and will match everything except the two whitespaces
const reg13 = /(?<=[tT]he)./g;
const reg14 = /(?<![tT]he)./g;

// look ahead is the same as look behind just without the <
// grab any character that is follow by at. 'f', 'c' and 'e' in this case
// can also be inverted by replacing '=' with '!'
const reg15 = /.(?=at)/g;

///// FIND PHONE NUMBERS /////
// 1234567890
let regEx = /\d{10}/g;

// 1234567890
// 123-456-7890
regEx = /\d{3}-?\d{3}-?\d{4}/g;

// 1234567890
// 123-456-7890
// 123 456 7890
regEx = /(\d{3})[ -]?(\d{3})[ -]?(\d{4})/g;

// 1234567890
// 123-456-7890
// 123 456 7890
// (123) 456-7890
regEx = /\(?(\d{3})\)?[ -]?(\d{3})[ -]?(\d{4})/g;

// 1234567890
// 123-456-7890
// 123 456 7890
// (123) 456-7890
// +1 123 456 7890
regEx = /(?:(\+1)[ -]?)\(?(\d{3})\)?[ -]?(\d{3})[ -]?(\d{4})/g;

// This function will take a string and turn it all to lowercase before splitting the str into individual words
// The loop will check if the word ends with a vowel and the following word begins with one
// If true at any iteration return true
function vowelLinks(str) {
	let strArr = str.toLowerCase().split(' ');
	let isTrueArr = [];
	for (let i = 0; i < strArr.length - 1; i++) {
		if (/(a|e|i|o|u)$/g.test(strArr[i]) && /^(a|e|i|o|u)/g.test(strArr[i + 1])) {
			isTrueArr.push(true)
		} else {
			isTrueArr.push(false)
		}
	}
	return isTrueArr.includes(true);
}
// This function can be reduced to the simple regex
const vowelLinks = str => /[aoiou] [aeiou]/i.test(str)

// This regex will validate a pin to make sure it only includes 4 or 6 digits
const pinValidatorRegExp = new RegExp(/^(\d{4}|\d{6})$/);