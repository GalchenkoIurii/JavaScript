

function getSimpleNum(end){
	let simpleNumArr = [],
		flag = 0,
		num = 2;

	while (num != end) {
		for(let i = 2; i <= num; i++){ 
			
			if(num % i === 0) {
				flag++;
			} 	
		}

		if (flag < 2) {
			simpleNumArr.push(num);
		}

		num++;
		flag = 0;
	}
	
	return simpleNumArr;
}

let simpArr = getSimpleNum(100);

for (let i = 0; i < simpArr.length; i++) {
	document.write("<p> делители числа " + simpArr[i] + ": 1 и " + simpArr[i] + "</p>");
}


























