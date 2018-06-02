let str = "урок-3-был слишком легким";

function toUpperFirstLetter(str) {
	let newStr = str[0].toUpperCase();

	for (let i = 1; i < str.length; i++) {
		newStr += str[i];
	}

	return newStr;
}
str = toUpperFirstLetter(str);


function changeSymbolsToSpace(str) {
	let newStr = '';

	for (let i = 0; i < str.length; i++) {
		if (str[i] === '-') {
			newStr += ' ';
		} else {
			newStr += str[i];
		}
	}

	return newStr;
}
str = changeSymbolsToSpace(str);


function cutWord(str, word) {
	let index = str.indexOf(word);
	//let tempArr = str.split('');

	//return tempArr.splice(0, index).join('');

	return str.slice(index, str.length);
}
let word = cutWord(str, 'легким');
console.log(word);


function changeLastLetters(str) {	
	
	return str.substr(0, str.length - 2) + 'о';
}
str = changeLastLetters(str);
document.write(str);

console.log(str);
//--------------------------------------------------------

let arr = [20, 33, 1, "Человек", 2, 3];

function getSqrtSumCube(arr) {
	let sum = 0; //43973
	for (let i = 0; i < arr.length; i++) {
		if (!isNaN(arr[i]) && typeof(arr[i]) === 'number') {
			sum += Math.pow(arr[i], 3);
		}
	}

	return Math.sqrt(sum);
}
console.log( getSqrtSumCube(arr) );
//--------------------------------------------------------


//удаление пробелов в начале строки и в конце
let myStr = ' stroka s probelami vtoraya stroka tretya stroka chetvertaya stroka';

function delSpaces(str) {
	let newStr = '',
		firstIndex = 0,
		lastIndex = str.length;

	if (typeof(str) === 'string') {
		for (let i = 0; i < str.length; i++) {
			if (str.charAt(i) === ' ') {
				firstIndex++;
			} else {
				break;
			}
		}	

		for (let j = str.length - 1; j >= 0; j--) {
			if (str.charAt(j) === ' ') {
				lastIndex--;
			} else {
				break;
			}
		}	

		newStr = str.substring(firstIndex, lastIndex);

	}  else {
		alert('переданный аргумент не является строкой!');

		return;
	}

	if (newStr.length > 50) {
		let tripleDot = '...';
	 	newStr = newStr.substring(0, 50) + tripleDot;
	}

	return newStr;
}

console.log( delSpaces(myStr) );





