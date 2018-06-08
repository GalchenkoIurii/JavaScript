function getFriendlyNumbers(start, end) {
	
	let resArr = [],
		sumOfDiv = {},
		tempArr = [],
		number;

	if (start < 220) {
		number = 220;
	}

	while (number < end) {
		for (let i = 1; i < number; i++) {
			if (number % i === 0) {
				tempArr.push(i);
			};
			
		};
		
		sumOfDiv[String(number)] = tempArr.reduce(function(res, current) {
			return res + current;
		}, 0);
		tempArr.length = 0;
		
		number++;
	};
	//console.log(sumOfDiv);

	for (let key in sumOfDiv) {
		for (let innerKey in sumOfDiv) {
			if (sumOfDiv[key] === Number(innerKey) && sumOfDiv[innerKey] === Number(key)) {
				resArr.push(Number(key), Number(innerKey));
			}
		}
	}
	resArr.length = 2;
	console.log(resArr);


	return resArr;
};

getFriendlyNumbers(1, 300);





























